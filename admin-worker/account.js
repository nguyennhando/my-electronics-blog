import { DurableObject } from "cloudflare:workers";
import { Buffer } from "node:buffer";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export class BlogAccount extends DurableObject {
  async version() {
    const credential = await this.ctx.storage.get("credential");
    return credential?.version ?? null;
  }

  async setPassword(password) {
    const salt = randomBytes(16).toString("base64url");
    const version = randomBytes(16).toString("base64url");
    const verifier = await this.derive(password, salt);
    await this.ctx.storage.put("credential", { salt, verifier, version });
  }

  async verify(password) {
    const credential = await this.ctx.storage.get("credential");
    if (!credential) return null;
    const actual = await this.derive(password, credential.salt);
    return timingSafeEqual(Buffer.from(actual, "base64url"), Buffer.from(credential.verifier, "base64url"))
      ? credential.version
      : null;
  }

  async derive(password, salt) {
    const peppered = createHmac("sha256", this.env.SESSION_KEY).update("password\0").update(password).digest();
    const key = await crypto.subtle.importKey("raw", peppered, "PBKDF2", false, ["deriveBits"]);
    const hash = await crypto.subtle.deriveBits({
      name: "PBKDF2",
      hash: "SHA-256",
      salt: Buffer.from(salt, "base64url"),
      iterations: 100000,
    }, key, 256);
    return Buffer.from(hash).toString("base64url");
  }
}
