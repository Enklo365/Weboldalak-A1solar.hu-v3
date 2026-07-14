import type { MirrorPage } from "@/lib/mirror";

type MirrorContentProps = {
  page: MirrorPage;
};

/**
 * Renders a faithfully-captured builder page: its original stylesheets and
 * inline styles plus the `<main>` markup from the live site. Elementor/Blocksy
 * CSS is scoped to its own classes, so it coexists with the React chrome.
 */
export const MirrorContent = ({ page }: MirrorContentProps) => (
  <div className="mirror-root">
    {page.css?.map((href) => (
      // React 19 hoists stylesheet links to <head> and dedupes by href.
      <link key={href} rel="stylesheet" href={href} precedence="wp-mirror" />
    ))}
    {page.inline ? (
      <style
        // eslint-disable-next-line react/no-danger -- captured critical CSS
        dangerouslySetInnerHTML={{ __html: page.inline }}
      />
    ) : null}
    <div
      // eslint-disable-next-line react/no-danger -- captured CMS markup
      dangerouslySetInnerHTML={{ __html: page.main ?? "" }}
    />
  </div>
);
