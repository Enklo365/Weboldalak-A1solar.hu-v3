/**
 * Faithful mirror layer.
 *
 * The WordPress WXR export stripped the structural markup (divs/classes) from
 * Elementor/Blocksy builder pages, so those pages cannot be reproduced from the
 * export alone. Instead we captured each live page's rendered `<main>` HTML plus
 * the stylesheets and inline `<style>` blocks it loads (assets mirrored under
 * /public). This module exposes that captured data.
 */
import fs from "node:fs";
import path from "node:path";

export type MirrorPage = {
  ok: boolean;
  css?: string[];
  inline?: string;
  main?: string;
};

let _mirror: Record<string, MirrorPage> | null = null;

function load(): Record<string, MirrorPage> {
  _mirror ??= JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "content", "mirror.json"), "utf-8")
  ) as Record<string, MirrorPage>;
  return _mirror;
}

export function getMirror(slug: string): MirrorPage | null {
  const m = load()[slug];
  return m?.ok ? m : null;
}

export function hasMirror(slug: string): boolean {
  return Boolean(load()[slug]?.ok);
}
