/** Prevent an HTML parser from treating user-influenced JSON-LD as markup. */
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
