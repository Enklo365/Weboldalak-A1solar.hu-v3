/** Legacy one-segment pages that intentionally have no replacement. */
export const RETIRED_SLUGS = new Set([
  "szolgaltatasaink",
  "palyazatok",
  "oep-nyeremenyjatek",
  "oepszigeteles",
  "vallalati-napelem-tisztitas-es-karbantartas",
]);

/** Legal pages that remain public but must not be indexed. */
export const NOINDEX_LEGAL_SLUGS = new Set([
  "adatvedelmi-nyilatkozat",
  "cookie-nyilatkozat",
  "lakossagi-napelemes-rendszerek-tamogatasa-promocios-szabalyzat",
  "panelmosas-karbantartas-aszf",
  "aszf",
]);
