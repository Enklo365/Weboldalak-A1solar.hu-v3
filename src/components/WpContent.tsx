import { processHtml } from "@/lib/content";

type WpContentProps = {
  html: string;
  className?: string;
};

/**
 * Renders migrated WordPress page/post HTML.
 *
 * The legacy pages carry their own <style> blocks and inline styling, so the
 * processed markup reproduces the original layout faithfully. URLs are
 * rewritten to local paths and shortcodes normalised by {@link processHtml}.
 */
export const WpContent = ({ html, className }: WpContentProps) => (
  <div
    className={className ?? "wp-content"}
    // eslint-disable-next-line react/no-danger -- migrated, sanitised CMS content
    dangerouslySetInnerHTML={{ __html: processHtml(html) }}
  />
);
