const PDF_HREF = "/wp-content/uploads/2024/04/Cegbemutato-2024.pdf";

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
    <path d="M12 3v11m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Native "Cégbemutató" page — brand hero + PDF download of the company brochure. */
export const Cegbemutato = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-[640px] text-center">
        <span
          className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
          style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
        >
          Szolgáltatásaink
        </span>
        <h1 style={{ marginTop: 16, fontSize: "clamp(30px, 5vw, 46px)", lineHeight: 1.1 }}>
          <span style={{ fontWeight: 300 }}>Cégbemutató </span>
          <span style={{ fontWeight: 700 }}>2024</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[520px] text-lg text-[var(--ink-soft)]">
          Ismerd meg az A1 Solart közelebbről: szolgáltatásaink, referenciáink és értékeink
          egy letölthető kiadványban.
        </p>
        <a
          href={PDF_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full transition-opacity hover:opacity-90"
          style={{ background: "var(--brand)", color: "#fff", padding: "14px 28px", fontSize: "15px", fontWeight: 500 }}
        >
          <DownloadIcon />
          Kiadvány letöltése (PDF)
        </a>
      </div>
    </div>
  </section>
);
