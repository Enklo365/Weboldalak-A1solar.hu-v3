import Link from "next/link";
import { SITE } from "@/lib/site";

export type SuccessContent = { title: string; message?: string };

const DEFAULT_MESSAGE = "Üzeneted sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
    <path
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z"
      fill="currentColor"
    />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="m4 7.5 8 5.5 8-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Native confirmation ("sikeres…") page — a centered success card with a green
 * check, the page's title + message, quick call/e-mail actions and a route home.
 * On-brand (rounded, brand-red CTAs, Inter), matching the service-page language.
 */
export function SuccessPage({ content }: { content: SuccessContent }) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto flex max-w-[600px] flex-col items-center px-6 text-center">
        <span
          className="grid h-16 w-16 place-items-center rounded-full"
          style={{ background: "rgba(22,163,74,0.12)", color: "#16a34a" }}
          aria-hidden
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>

        <span
          className="mt-6 inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
          style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
        >
          Köszönjük
        </span>

        <h1 className="text-[var(--ink)]" style={{ marginTop: "20px", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 600, lineHeight: 1.2 }}>
          {content.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--ink-soft)]">{content.message ?? DEFAULT_MESSAGE}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            style={{ background: "var(--surface-3)", color: "var(--ink)" }}
          >
            <span style={{ color: "var(--brand)" }}>
              <PhoneIcon />
            </span>
            {SITE.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            style={{ background: "var(--surface-3)", color: "var(--ink)" }}
          >
            <span style={{ color: "var(--brand)" }}>
              <MailIcon />
            </span>
            {SITE.email}
          </a>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full transition-opacity hover:opacity-90"
          style={{ background: "var(--brand)", color: "#fff", padding: "14px 28px", fontSize: "15px", fontWeight: 500 }}
        >
          Vissza a főoldalra
        </Link>
      </div>
    </section>
  );
}

/** Per-slug confirmation copy (mirrors the WP "sikeres…" pages). */
export const SUCCESS_PAGES: Record<string, SuccessContent> = {
  "sikeres-kapcsolatfelvetel": { title: "Üzeneted beérkezett hozzánk!" },
  "sikeres-kapcsolatfelvetel-jedlik": { title: "Üzeneted beérkezett hozzánk!" },
  "sikeres-kapcsolatfelvetel-vop": { title: "Üzeneted beérkezett hozzánk!" },
  "sikeres-kapcsolatfelvetel-lakossagi-hibrid-napelem-backup": { title: "Üzeneted beérkezett hozzánk!" },
  "sikeres-ajanlatkeres-reszletfizetes": {
    title: "Ajánlatkérésed beérkezett hozzánk!",
    message: "Ajánlatkérésed sikeresen megkaptuk, hamarosan felvesszük Veled a kapcsolatot!",
  },
  "sikeres-kapcsolatfelvetel-tarsashaz": {
    title: "Adataid beérkeztek hozzánk!",
    message: "Adataidat sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-ceges-visszahivas-keres": { title: "Üzeneted beérkezett hozzánk!" },
  "sikeres-lakossagi-visszahivas-keres": {
    title: "Sikeres kapcsolatfelvétel!",
    message: "Köszönjük, hogy érdeklődsz a szolgáltatásaink iránt! Hamarosan felvesszük veled a kapcsolatot.",
  },
  "sikeres-lakossagi-ajanlatkeres": {
    title: "Ajánlatkérésed beérkezett hozzánk!",
    message: "Ajánlatkérésedet sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-ceges-ajanlatkeres": {
    title: "Ajánlatkérésed beérkezett hozzánk!",
    message: "Ajánlatkérésedet sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-lakossagi-napelem-tisztitas-ajanlatkeres": {
    title: "Ajánlatkérésed beérkezett hozzánk!",
    message: "Ajánlatkérésedet sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-vallalati-napelem-tisztitas-ajanlatkeres": {
    title: "Ajánlatkérésed beérkezett hozzánk!",
    message: "Ajánlatkérésedet sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-helyszini-felmeres-keres": {
    title: "Helyszíni felmérés kérésed beérkezett!",
    message: "Helyszíni felmérés kérésedet sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-fodemszigeteles-jelentkezes": {
    title: "Jelentkezésed beérkezett hozzánk!",
    message: "Jelentkezésedet sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-jelentkezes": {
    title: "Sikeres jelentkezés",
    message: "Jelentkezésedet sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-regisztracio": {
    title: "Sikeres regisztráció",
    message: "Köszönjük, a regisztrációd beérkezett hozzánk! Hamarosan felvesszük veled a kapcsolatot.",
  },
  "sikeres-eloregisztracio-lakossagi-energiatarolas": {
    title: "Sikeres előregisztráció",
    message: "Jelentkezésedet sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
  "sikeres-energiatarolo-program-kalkulator-kitoltes": {
    title: "Sikeres kalkulátor kitöltés",
    message: "Adataidat sikeresen megkaptuk, hamarosan felvesszük veled a kapcsolatot!",
  },
};
