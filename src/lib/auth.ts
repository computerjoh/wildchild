import crypto from "node:crypto";

// Server-side session gate for the /slideshows page. A single shared password
// unlocks an HMAC-signed, httpOnly cookie — no database, no user accounts.
//
// Secrets are read via `import.meta.env`, which Astro/Vite statically bakes
// in at build time. That means SLIDESHOWS_PASSWORD and
// SLIDESHOWS_SESSION_SECRET must be set (in Vercel Project Settings, or a
// local .env) BEFORE running `astro dev` / `astro build` — setting them
// afterward or only post-deploy has no effect until the next build.
// (`process.env` does not carry .env values into Astro's dev server, so it
// can't be used here.) These are never exposed client-side since they're
// referenced only from server-rendered (`prerender = false`) code.

const COOKIE_NAME = "wc_slideshows_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

export const COOKIE = {
	name: COOKIE_NAME,
	options: {
		httpOnly: true,
		sameSite: "lax" as const,
		secure: import.meta.env.PROD,
		path: "/slideshows",
		maxAge: COOKIE_MAX_AGE,
	},
};

function timingSafeEqualStrings(a: string, b: string): boolean {
	const bufA = Buffer.from(a);
	const bufB = Buffer.from(b);
	if (bufA.length !== bufB.length) return false;
	return crypto.timingSafeEqual(bufA, bufB);
}

export function verifyPassword(input: string): boolean {
	const expected = import.meta.env.SLIDESHOWS_PASSWORD ?? "";
	if (!expected) return false;
	return timingSafeEqualStrings(input, expected);
}

function sign(payload: string): string {
	const secret = import.meta.env.SLIDESHOWS_SESSION_SECRET ?? "";
	return crypto
		.createHmac("sha256", secret)
		.update(payload)
		.digest("base64url");
}

export function createSessionToken(): string {
	const exp = Date.now() + COOKIE_MAX_AGE * 1000;
	const payload = `v1.${exp}`;
	return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
	if (!token) return false;

	const lastDot = token.lastIndexOf(".");
	if (lastDot < 0) return false;

	const payload = token.slice(0, lastDot);
	const signature = token.slice(lastDot + 1);
	if (!timingSafeEqualStrings(signature, sign(payload))) return false;

	const exp = Number(payload.split(".")[1]);
	return Number.isFinite(exp) && exp > Date.now();
}
