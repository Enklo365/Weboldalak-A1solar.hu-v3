import { SupportStatusDot } from "@/components/service/SupportStatusDot";
import { SITE } from "@/lib/site";

/**
 * Customer-service card for the page sidebars (bg #f6f6f6, no border).
 * Shared by the service subpages, the OEP campaign page and every page that
 * uses the sidebar + notch-hero layout.
 */
export const SupportWidget = () => (
  <div className="rounded-[20px] p-6" style={{ background: "var(--surface-3)" }}>
    <h3 style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.25, color: "var(--ink)" }}>Beszéljünk a lehetőségeidről!</h3>
    <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      Ügyfélszolgálatunk hétköznap {SITE.supportHours} között elérhető – fordulj hozzánk bizalommal!
    </p>
    <div className="mt-6 flex items-center gap-4">
      <span className="grid h-14 w-14 flex-none place-items-center rounded-full" style={{ background: "#fff", color: "var(--brand)" }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 12a8 8 0 0 1 16 0M4 12v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 1Zm16 0v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M18 17v.5a3 3 0 0 1-3 3h-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
      <div>
        <div className="text-sm font-semibold text-[var(--ink)]">Ügyfélszolgálat</div>
        <a href={`tel:${SITE.phoneRaw}`} className="mt-0.5 flex items-center gap-2 font-semibold text-[var(--ink)]">
          <SupportStatusDot />
          {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  </div>
);
