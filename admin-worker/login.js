export const MIN_PASSWORD_LENGTH = 10;

const copy = {
  de: {
    title: "Admin-Anmeldung", github: "Mit GitHub anmelden", passwordMode: "Mit Blog-Konto anmelden",
    username: "Benutzername", password: "Passwort", submit: "Anmelden", back: "Zurück zum Blog",
    githubError: "Die GitHub-Anmeldung ist fehlgeschlagen. Bitte erneut versuchen.",
    accountError: "Dieses GitHub-Konto hat keinen Admin-Zugriff.",
    passwordError: "Benutzername oder Passwort ist falsch.",
    rateError: "Zu viele Versuche. Bitte in einer Minute erneut versuchen.",
    unavailableError: "Die Anmeldung mit dem Blog-Konto ist noch nicht eingerichtet.",
    passwordTitle: "Blog-Passwort festlegen", confirm: "Passwort wiederholen", save: "Passwort speichern",
    passwordHint: `Benutzername: nguyennhando. Verwenden Sie mindestens ${MIN_PASSWORD_LENGTH} Zeichen.`,
    passwordInvalid: `Das Passwort muss mindestens ${MIN_PASSWORD_LENGTH} Zeichen lang sein und beide Eingaben müssen übereinstimmen.`,
    passwordSaved: "Das Blog-Passwort wurde gespeichert.", backEditor: "Zurück zum Editor",
  },
  en: {
    title: "Admin sign-in", github: "Sign in with GitHub", passwordMode: "Sign in with blog account",
    username: "Username", password: "Password", submit: "Sign in", back: "Back to blog",
    githubError: "GitHub sign-in failed. Please try again.",
    accountError: "This GitHub account does not have admin access.",
    passwordError: "The username or password is incorrect.",
    rateError: "Too many attempts. Please try again in a minute.",
    unavailableError: "Blog account sign-in has yet to be configured.",
    passwordTitle: "Set blog password", confirm: "Confirm password", save: "Save password",
    passwordHint: `Username: nguyennhando. Use at least ${MIN_PASSWORD_LENGTH} characters.`,
    passwordInvalid: `Use at least ${MIN_PASSWORD_LENGTH} characters and enter the same password twice.`,
    passwordSaved: "Your blog password was saved.", backEditor: "Back to editor",
  },
  vi: {
    title: "Đăng nhập quản trị", github: "Đăng nhập bằng GitHub", passwordMode: "Đăng nhập bằng tài khoản blog",
    username: "Tên tài khoản", password: "Mật khẩu", submit: "Đăng nhập", back: "Quay lại blog",
    githubError: "Đăng nhập GitHub thất bại. Vui lòng thử lại.",
    accountError: "Tài khoản GitHub này không có quyền quản trị blog.",
    passwordError: "Tên tài khoản hoặc mật khẩu chưa đúng.",
    rateError: "Bạn đã thử quá nhiều lần. Vui lòng thử lại sau một phút.",
    unavailableError: "Tài khoản blog chưa được thiết lập.",
    passwordTitle: "Đặt mật khẩu blog", confirm: "Nhập lại mật khẩu", save: "Lưu mật khẩu",
    passwordHint: `Tên tài khoản là nguyennhando. Mật khẩu cần ít nhất ${MIN_PASSWORD_LENGTH} ký tự.`,
    passwordInvalid: `Mật khẩu cần ít nhất ${MIN_PASSWORD_LENGTH} ký tự và hai lần nhập phải giống nhau.`,
    passwordSaved: "Đã lưu mật khẩu blog.", backEditor: "Quay lại editor",
  },
};

function page(lang, title, content) {
  return new Response(`<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title>${title} · Nguyen Nhan Do</title>
  <style>
    :root { color-scheme: dark; font-family: system-ui, sans-serif; background: #070b15; color: #eef5ff; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; background: radial-gradient(ellipse at top, #10283a, transparent 62%); }
    main { width: min(100%, 28rem); padding: clamp(20px, 5vw, 36px); border: 1px solid #254052; border-radius: 22px; background: #0b1423; }
    nav { display: flex; gap: .65rem; justify-content: end; font-size: .85rem; }
    a { color: #a4c6db; }
    nav a[aria-current] { color: #69e6ff; font-weight: 700; }
    h1 { margin: 1rem 0 1.5rem; font-size: clamp(1.5rem, 6vw, 2rem); }
    form { display: grid; gap: 12px; margin-top: 16px; }
    label { display: grid; gap: 6px; font-size: .92rem; }
    input, button, .github { border-radius: 10px; padding: .75rem; font: inherit; }
    input { width: 100%; border: 1px solid #375568; color: inherit; background: #080f1b; }
    button, .github { border: 1px solid transparent; cursor: pointer; text-align: center; font-weight: 700; }
    .github { display: block; background: #67e8f9; color: #071420; text-decoration: none; }
    button { background: #183e50; color: inherit; }
    details { margin: 1rem 0 1.5rem; border: 1px solid #375568; border-radius: 10px; padding: .75rem; }
    summary { cursor: pointer; }
    [role=alert] { color: #fecdd3; font-size: .9rem; }
    :focus-visible { outline: 2px solid #67e8f9; outline-offset: 3px; }
  </style>
</head>
<body>
  <main>
    ${content}
  </main>
</body>
</html>`, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; frame-ancestors 'none'; form-action 'self'; base-uri 'none'",
    },
  });
}

export function loginPage(lang, error, blog) {
  const t = copy[lang];
  const messages = {
    github: t.githubError, account: t.accountError, password: t.passwordError,
    rate: t.rateError, unavailable: t.unavailableError,
  };
  const message = Object.hasOwn(messages, error) ? messages[error] : "";
  const showPassword = ["password", "rate", "unavailable"].includes(error);
  return page(lang, t.title, `
    <nav aria-label="Language">${Object.keys(copy).map((item) =>
      `<a href="/login?lang=${item}" lang="${item}"${item === lang ? ' aria-current="page"' : ""}>${item.toUpperCase()}</a>`).join("")}</nav>
    <h1>${t.title}</h1>
    ${message ? `<p role="alert">${message}</p>` : ""}
    <a class="github" href="/auth/github?lang=${lang}">${t.github}</a>
    <details${showPassword ? " open" : ""}>
      <summary>${t.passwordMode}</summary>
      <form method="post" action="/auth/password?lang=${lang}">
        <label>${t.username}<input name="username" autocomplete="username" maxlength="64" required></label>
        <label>${t.password}<input type="password" name="password" autocomplete="current-password" maxlength="128" required></label>
        <button type="submit">${t.submit}</button>
      </form>
    </details>
    <a href="${blog}">${t.back}</a>`);
}

export function passwordSettingsPage(lang, blogPath, state) {
  const t = copy[lang];
  return page(lang, t.passwordTitle, `
    <h1>${t.passwordTitle}</h1>
    ${state === "saved" ? `<p role="status">${t.passwordSaved}</p>` : `
    <p>${t.passwordHint}</p>
    ${state === "invalid" ? `<p role="alert">${t.passwordInvalid}</p>` : ""}
    <form method="post" action="/settings/password?lang=${lang}">
      <input type="hidden" name="username" autocomplete="username" value="nguyennhando">
      <label>${t.password}<input type="password" name="password" autocomplete="new-password" minlength="${MIN_PASSWORD_LENGTH}" maxlength="128" required></label>
      <label>${t.confirm}<input type="password" name="confirm" autocomplete="new-password" minlength="${MIN_PASSWORD_LENGTH}" maxlength="128" required></label>
      <button type="submit">${t.save}</button>
    </form>`}
    <p><a href="${blogPath}?admin=1&amp;lang=${lang}">${t.backEditor}</a></p>`);
}
