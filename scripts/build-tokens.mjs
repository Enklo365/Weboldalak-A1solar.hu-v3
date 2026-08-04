#!/usr/bin/env node
/**
 * Token generator — reads tokens/brand.tokens.json (DTCG, the source of truth)
 * and rewrites the marked block in src/app/globals.css between:
 *   / * @tokens:start * /  ...  / * @tokens:end * /
 *
 * The generated block holds the Tailwind v4 `@theme` layer (utility generation)
 * plus a `:root` layer of legacy + semantic + spacing/border/layout aliases used
 * by inline styles across the app. NEVER edit the generated block by hand — edit
 * the token file and re-run: `node scripts/build-tokens.mjs`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(join(root, "tokens/brand.tokens.json"), "utf8"));
const cssPath = join(root, "src/app/globals.css");

const c = (name) => tokens.color[name].$value;
const fam = (name) => tokens.font[name].$value;
const stack = (name) => tokens.font[name].$extensions.cssStack;
const fs = (name) => tokens.fontSize[name].$value;
const fw = (name) => tokens.fontWeight[name].$value;
const lh = (name) => tokens.lineHeight[name].$value;
const ls = (name) => tokens.letterSpacing[name].$value;
const sp = (name) => tokens.spacing[name].$value;
const rad = (name) => tokens.radius[name].$value;
const bd = (name) => tokens.border[name].$value;
const lay = (name) => tokens.layout[name].$value;

const COLOR_ROLES = Object.keys(tokens.color);

const theme = `@theme {
  /* Colour roles (Brand OS contract) */
${COLOR_ROLES.map((k) => `  --color-${k}: ${c(k)};`).join("\n")}

  /* Legacy colour aliases (used by Tailwind utilities across the app) */
  --color-brand: ${c("primary")};
  --color-brand-dark: ${c("primary-hover")};
  --color-brand-logo: ${c("accent")};
  --color-ink-muted: #6b6b6b;
  --color-surface: ${c("paper")};
  --color-surface-2: ${c("paper-alt")};
  --color-surface-3: ${c("sand")};
  --color-line: ${c("hairline")};
  --color-hero-dark: ${c("ink-deep")};

  /* Type families */
  --font-sans: ${stack("body")};
  --font-heading: ${stack("display")};
  --font-display: ${fam("display")};
  --font-body: ${fam("body")};
  --font-mono: ${stack("mono")};

  /* Font sizes (t-shirt scale) */
${Object.keys(tokens.fontSize).map((k) => `  --text-${k}: ${fs(k)};`).join("\n")}

  /* Font weights (numbers) */
  --font-weight-regular: ${fw("regular")};
  --font-weight-medium: ${fw("medium")};
  --font-weight-mono-bold: ${fw("mono-bold")};

  /* Line heights (numbers) */
  --leading-tight: ${lh("tight")};
  --leading-snug: ${lh("snug")};
  --leading-normal: ${lh("normal")};
  --leading-relaxed: ${lh("relaxed")};

  /* Letter spacing */
  --tracking-tight: ${ls("tight")};
  --tracking-normal: ${ls("normal")};
  --tracking-wide: ${ls("wide")};
  --tracking-wider: ${ls("wider")};

  /* Radii */
  --radius-none: ${rad("none")};
  --radius-sm: ${rad("sm")};
  --radius-md: ${rad("md")};
  --radius-lg: ${rad("lg")};
  --radius-full: ${rad("full")};
}`;

const rootBlock = `:root {
  /* Legacy aliases consumed by inline styles — keep these names stable */
  --brand: ${c("primary")};
  --brand-dark: ${c("primary-hover")};
  --ink: ${c("ink")};
  --ink-soft: ${c("ink-soft")};
  --ink-muted: #6b6b6b;
  --surface-2: ${c("paper-alt")};
  --surface-3: ${c("sand")};
  --line: ${c("hairline")};
  --radius: ${rad("md")};
  --container: ${lay("maxWidth")};
  --header-h: 88px;

  /* Semantic colour roles */
  --primary: ${c("primary")};
  --primary-hover: ${c("primary-hover")};
  --primary-press: ${c("primary-press")};
  --primary-deep: ${c("primary-deep")};
  --primary-tint: ${c("primary-tint")};
  --on-primary: ${c("on-primary")};
  --accent: ${c("accent")};
  --ink-deep: ${c("ink-deep")};
  --paper: ${c("paper")};
  --paper-alt: ${c("paper-alt")};
  --sand: ${c("sand")};
  --steel: ${c("steel")};
  --hairline: ${c("hairline")};
  --success: ${c("success")};
  --warning: ${c("warning")};
  --danger: ${c("danger")};
  --on-danger: ${c("on-danger")};

  /* Spacing scale */
${Object.keys(tokens.spacing).map((k) => `  --space-${k}: ${sp(k)};`).join("\n")}

  /* Borders */
  --border-hairline: ${bd("hairline")};
  --border-default: ${bd("default")};
  --border-thick: ${bd("thick")};
  --border-accent-bar: ${bd("accent-bar")};

  /* Layout / grid & measure */
  --grid-columns: ${lay("columns")};
  --gutter: ${lay("gutter")};
  --margin: ${lay("margin")};
  --max-width: ${lay("maxWidth")};
  --measure: ${lay("measure")};
  --section-space: ${lay("sectionSpace")};
}`;

const generated = `/* @tokens:start — GENERÁLT a tokens/brand.tokens.json-ból (node scripts/build-tokens.mjs). Kézzel NE szerkeszd. */
${theme}

${rootBlock}
/* @tokens:end */`;

const css = readFileSync(cssPath, "utf8");
const re = /\/\* @tokens:start[\s\S]*?@tokens:end \*\//;
if (!re.test(css)) {
  console.error("HIBA: nincs @tokens:start/@tokens:end jelölés a globals.css-ben.");
  process.exit(1);
}
writeFileSync(cssPath, css.replace(re, generated), "utf8");
console.log("✓ Tokens generated into src/app/globals.css (@tokens block).");
