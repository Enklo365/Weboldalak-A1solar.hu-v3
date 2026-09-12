# Restored article covers

This directory contains article cover images that are present in the WordPress
content export but were created after the repository's `public/wp-content`
snapshot. `firstImage()` uses a file from here only when the original mirrored
`/wp-content/uploads/...` path is absent.

Keep the original basename so the fallback remains data-driven and does not
need a per-article mapping.
