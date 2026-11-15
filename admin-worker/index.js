import { createHmac, randomBytes, sign, timingSafeEqual } from "node:crypto";
import { Buffer } from "node:buffer";
import { loginPage, passwordSettingsPage } from "./login.js";
export { BlogAccount } from "./account.js";

const blog = "https://nguyennhando.github.io/my-electronics-blog/";
const blogPath = new URL(blog).pathname;
const api = "https://api.github.com";
const repo = "/repos/nguyennhando/my-electronics-blog";
const repoId = 1240534451;
const ownerId = 120247762;
const sessionCookie = "__Host-blog-admin";
const oauthCookie = "__Host-blog-oauth";
const sessionAge = 8 * 60 * 60;
const oauthAge = 10 * 60;
let installationToken;
const account = (env) => env.BLOG_ACCOUNT.getByName("admin");

const digest = (key, purpose, value) =>
  createHmac("sha256", key).update(purpose).update("\0").update(value).digest();
const now = () => Math.floor(Date.now() / 1000);
const random = () => randomBytes(32).toString("base64url");
const encode = (value) => Buffer.from(JSON.stringify(value)).toString("base64url");
const cookie = (name, value, age) =>
  `${name}=${value}; Path=/; Max-Age=${age}; HttpOnly; Secure; SameSite=Lax`;

function signedCookie(env, name, value, age) {
  const payload = encode({ ...value, exp: now() + age });
  return cookie(name, `${payload}.${digest(env.SESSION_KEY, name, payload).toString("base64url")}`, age);
}

function readCookie(request, env, name) {
  const raw = request.headers.get("Cookie")?.split(/; */).find((part) => part.startsWith(`${name}=`));
  const match = raw?.slice(name.length + 1).match(/^([\w-]{1,2048})\.([\w-]{43})$/);
  if (!match) return null;
  const [, payload, signature] = match;
  if (!timingSafeEqual(digest(env.SESSION_KEY, name, payload), Buffer.from(signature, "base64url"))) return null;
  const data = JSON.parse(Buffer.from(payload, "base64url").toString());
  return data.exp > now() ? data : null;
}

function redirect(location, ...cookies) {
  const headers = new Headers({ Location: location, "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" });
  cookies.forEach((value) => headers.append("Set-Cookie", value));
  return new Response(null, { status: 303, headers });
}

function json(status, message) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

function github(path, token, init) {
  return fetch(`${api}${path}`, {
    ...init,
    redirect: "manual",
    headers: {
      "User-Agent": "electronics-blog-admin",
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Bearer ${token}`,
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
    },
  });
}

async function getInstallationToken(env) {
  if (installationToken?.clientId === env.GITHUB_CLIENT_ID && installationToken.expires > now() + 60) {
    return installationToken.token;
  }
  const jwt = `${encode({ alg: "RS256", typ: "JWT" })}.${encode({
    iss: env.GITHUB_CLIENT_ID, iat: now() - 60, exp: now() + 540,
  })}`;
  const signature = sign("RSA-SHA256", Buffer.from(jwt), env.GITHUB_PRIVATE_KEY).toString("base64url");
  const response = await github(`/app/installations/${env.GITHUB_INSTALLATION_ID}/access_tokens`, `${jwt}.${signature}`, {
    method: "POST",
    body: JSON.stringify({ repository_ids: [repoId], permissions: { contents: "write" } }),
  });
  if (!response.ok) throw new Error("GitHub App installation unavailable");
  const data = await response.json();
  installationToken = { clientId: env.GITHUB_CLIENT_ID, token: data.token, expires: Date.parse(data.expires_at) / 1000 };
  return installationToken.token;
}

function loginUrl(lang, error) {
  const params = new URLSearchParams({ lang });
  if (error) params.set("error", error);
  return `/login?${params}`;
}

function finishLogin(env, lang, session, destination, ...cookies) {
  const target = destination === "password"
    ? `/settings/password?lang=${lang}`
    : `${blogPath}?admin=1&lang=${lang}`;
  return redirect(target, signedCookie(env, sessionCookie, { sub: ownerId, ...session }, sessionAge), ...cookies);
}

async function startGitHub(url, env, lang) {
  const state = random();
  const verifier = random();
  const challenge = Buffer.from(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier)));
  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    redirect_uri: `${url.origin}/auth/github/callback`,
    state,
    code_challenge: challenge.toString("base64url"),
    code_challenge_method: "S256",
    allow_signup: "false",
  });
  const destination = url.searchParams.get("next") === "password" ? "password" : "editor";
  return redirect(`https://github.com/login/oauth/authorize?${params}`, signedCookie(env, oauthCookie, { state, verifier, lang, destination }, oauthAge));
}

async function finishGitHub(request, url, env) {
  const transaction = readCookie(request, env, oauthCookie);
  const clear = cookie(oauthCookie, "", 0);
  const code = url.searchParams.get("code");
  if (!transaction || !code || transaction.state !== url.searchParams.get("state")) {
    return redirect(loginUrl(transaction?.lang || "de", "github"), clear);
  }
  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    client_secret: env.GITHUB_CLIENT_SECRET,
    code,
    code_verifier: transaction.verifier,
    redirect_uri: `${url.origin}/auth/github/callback`,
    repository_id: String(repoId),
  });
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: params,
    redirect: "manual",
  });
  if (!response.ok) return redirect(loginUrl(transaction.lang, "github"), clear);
  const { access_token: token } = await response.json();
  if (!token) return redirect(loginUrl(transaction.lang, "github"), clear);
  const profile = await github("/user", token);
  if (!profile.ok || (await profile.json()).id !== ownerId) {
    return redirect(loginUrl(transaction.lang, "account"), clear);
  }
  return finishLogin(env, transaction.lang, { method: "github" }, transaction.destination, clear);
}

async function readLoginForm(request) {
  if (!request.headers.get("Content-Type")?.startsWith("application/x-www-form-urlencoded")) {
    return null;
  }
  // A normal browser form is small. Limit the bytes even if Content-Length is absent.
  const reader = request.body?.getReader();
  if (!reader) return null;
  let length = 0;
  let body = "";
  const decoder = new TextDecoder();
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.length;
    if (length > 2048) {
      await reader.cancel();
      return null;
    }
    body += decoder.decode(value, { stream: true });
  }
  return new URLSearchParams(body + decoder.decode());
}

async function passwordLogin(request, env, lang) {
  const { success } = await env.LOGIN_LIMIT.limit({ key: request.headers.get("CF-Connecting-IP") || "local" });
  if (!success) return redirect(loginUrl(lang, "rate"));
  const fields = await readLoginForm(request);
  if (!fields) return json(400, "Invalid login form");
  const credentials = account(env);
  if (!await credentials.version()) return redirect(loginUrl(lang, "unavailable"));
  const password = fields.get("password");
  if (!(password?.length >= 16 && password.length <= 128) || fields.get("username")?.trim().toLowerCase() !== "nguyennhando") {
    return redirect(loginUrl(lang, "password"));
  }
  const version = await credentials.verify(password);
  if (!version) return redirect(loginUrl(lang, "password"));
  return finishLogin(env, lang, { method: "password", version }, "editor", cookie(oauthCookie, "", 0));
}

async function passwordSettings(request, env, lang, session) {
  if (session?.sub !== ownerId || session.method !== "github") {
    return request.method === "GET"
      ? redirect(`/auth/github?lang=${lang}&next=password`)
      : json(403, "Sign in with GitHub to manage the blog password");
  }
  if (request.method === "GET") return passwordSettingsPage(lang, blogPath);
  const fields = await readLoginForm(request);
  const password = fields?.get("password");
  if (!(password?.length >= 16 && password.length <= 128) || password !== fields.get("confirm")) {
    return passwordSettingsPage(lang, blogPath, "invalid");
  }
  await account(env).setPassword(password);
  return passwordSettingsPage(lang, blogPath, "saved");
}

async function repositoryContents(request, url, env) {
  const prefix = "/api/contents/";
  const parts = url.pathname.slice(prefix.length).split("/").map(decodeURIComponent);
  if (parts.some((part) => !part || part === "." || part === ".." || /[\\/\p{Cc}]/u.test(part))) {
    return json(400, "Invalid file path");
  }
  const path = parts.join("/");
  const content = /^src\/content\/(?:[^/]+\.md|(?:de|en|vi)\/[^/]+\.md)$/i.test(path);
  const asset = /^public\/(?:images|documents)\/.+$/.test(path);
  if (!content && !asset) return json(403, "File is outside the editor's content directories");
  const endpoint = `${repo}/contents/${parts.map(encodeURIComponent).join("/")}`;
  const token = await getInstallationToken(env);
  let response;
  if (request.method === "GET") {
    response = await github(`${endpoint}?ref=main`, token);
  } else {
    const { message, content: file, sha } = await request.json();
    if (typeof message !== "string" || !message.trim() ||
        (request.method === "PUT" && typeof file !== "string") ||
        (request.method === "DELETE" && typeof sha !== "string")) {
      return json(400, "Invalid file change");
    }
    response = await github(endpoint, token, {
      method: request.method,
      body: JSON.stringify({ branch: "main", message, content: request.method === "PUT" ? file : undefined, sha }),
    });
  }
  if (response.status >= 300 && response.status < 400) return json(502, "Unexpected redirect from GitHub");
  return new Response(response.body, {
    status: response.status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    const lang = ["de", "en", "vi"].includes(url.searchParams.get("lang")) ? url.searchParams.get("lang") : "de";
    const { method } = request;
    if (!["GET", "HEAD"].includes(method) && request.headers.get("Origin") !== url.origin) {
      return json(403, "Origin not allowed");
    }
    try {
      if (method === "GET" && pathname === "/auth/github") return await startGitHub(url, env, lang);
      if (method === "GET" && pathname === "/auth/github/callback") return await finishGitHub(request, url, env);
      if (method === "POST" && pathname === "/auth/password") return await passwordLogin(request, env, lang);
      if (method === "POST" && pathname === "/auth/logout") {
        const headers = new Headers({ "Cache-Control": "no-store" });
        headers.append("Set-Cookie", cookie(sessionCookie, "", 0));
        headers.append("Set-Cookie", cookie(oauthCookie, "", 0));
        return new Response(null, { status: 204, headers });
      }
      const session = env.SESSION_KEY ? readCookie(request, env, sessionCookie) : null;
      if (pathname === "/settings/password" && ["GET", "POST"].includes(method)) {
        return await passwordSettings(request, env, lang, session);
      }
      const needsSession = pathname === "/login" || pathname === "/" || pathname === blogPath || pathname.startsWith("/api/");
      const authenticated = needsSession && session?.sub === ownerId && (
        session.method === "github" ||
        (session.method === "password" && session.version === await account(env).version())
      );
      if (method === "GET" && pathname === "/login") {
        return authenticated
          ? redirect(`${blogPath}?admin=1&lang=${lang}`)
          : loginPage(lang, url.searchParams.get("error"), blog);
      }
      if (pathname.startsWith("/api/contents/") && ["GET", "PUT", "DELETE"].includes(method)) {
        if (!authenticated) return json(401, "Admin session expired. Sign in again.");
        return await repositoryContents(request, url, env);
      }
      if (method === "GET" && (pathname === "/" || pathname === blogPath)) {
        if (!authenticated) return redirect(loginUrl(lang));
        if (pathname !== blogPath || url.searchParams.get("admin") !== "1") {
          return redirect(`${blogPath}?admin=1&lang=${lang}`);
        }
        const page = await fetch(blog, { redirect: "manual" });
        if (!page.ok) return json(502, "The editor could not be loaded");
        const headers = new Headers({
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
          "Referrer-Policy": "no-referrer",
          "X-Content-Type-Options": "nosniff",
          "Content-Security-Policy": "frame-ancestors 'none'; base-uri 'none'; form-action 'self'",
        });
        return new globalThis.HTMLRewriter().on("head", {
          element(head) { head.append('<meta name="blog-admin-origin" content="same-origin">', { html: true }); },
        }).transform(new Response(page.body, { headers }));
      }
      if (["GET", "HEAD"].includes(method) && pathname.startsWith(blogPath)) {
        const relative = pathname.slice(blogPath.length);
        const upstream = new URL(url.pathname, blog);
        if (upstream.origin !== new URL(blog).origin) return json(404, "Not found");
        if (/^assets\/[\w.-]+$/.test(relative)) {
          const asset = await fetch(upstream, { method, redirect: "manual" });
          return asset.ok ? asset : json(404, "Asset not found");
        }
        if (/^(?:images\/|documents\/|(?:favicon|icon-|apple-touch-icon|manifest)[\w.-]*$)/.test(relative)) {
          upstream.search = url.search;
          const range = request.headers.get("Range");
          const asset = await fetch(upstream, { method, redirect: "manual", headers: range ? { Range: range } : undefined });
          if (!asset.ok) return json(asset.status === 416 ? 416 : 404, "Asset not available");
          const headers = new Headers(asset.headers);
          headers.set("Content-Security-Policy", "sandbox; default-src 'none'");
          headers.set("X-Content-Type-Options", "nosniff");
          if (/^(?:images|documents)\//.test(relative) &&
              !/^(?:image\/|application\/pdf\b)/i.test(headers.get("Content-Type") || "")) {
            headers.set("Content-Type", "application/octet-stream");
          }
          return new Response(asset.body, { status: asset.status, headers });
        }
      }
      return json(404, "Not found");
    } catch {
      if (pathname.startsWith("/auth/github")) return redirect(loginUrl(lang, "github"), cookie(oauthCookie, "", 0));
      return json(502, "Admin service temporarily unavailable");
    }
  },
};
