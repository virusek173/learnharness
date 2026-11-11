// Fork (mobile): the home-screen / PWA icon set, rendered from the same flat
// design source as scripts/make-icons.mjs (build/icon-flat.svg).
//
//   app/apple-icon.png         — 180×180, iOS home screen (Next file convention)
//   public/icons/icon-192.png  — web manifest (app/manifest.ts)
//   public/icons/icon-512.png  — web manifest (app/manifest.ts)
//
// The squircle's transparent corners are filled with its own background
// (#141414): iOS and Android apply their own mask to a full square.
// Committed outputs; rerun only when the design changes:
// `node scripts/make-pwa-icons.mjs`.
import { Resvg } from "@resvg/resvg-js";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const svg = readFileSync(path.join(root, "build", "icon-flat.svg"), "utf8");

const render = (size) =>
	new Resvg(svg, { background: "#141414", fitTo: { mode: "width", value: size } }).render().asPng();

mkdirSync(path.join(root, "public", "icons"), { recursive: true });
writeFileSync(path.join(root, "app", "apple-icon.png"), render(180));
for (const size of [192, 512]) writeFileSync(path.join(root, "public", "icons", `icon-${size}.png`), render(size));
