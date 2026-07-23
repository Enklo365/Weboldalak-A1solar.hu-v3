"use client";

import { useMemo, useState } from "react";

type Segment = "residential" | "commercial";

type SolarCalculatorProps = { segment: Segment };

const PRICE_PER_KWH = 70; // Ft/kWh — blended háztartási/üzleti egységár (tájékoztató)
const YIELD_PER_KWP = 1150; // kWh / kWp / év, magyarországi átlag
const PANEL_WATT = 450; // W / panel

const fmt = (n: number) => new Intl.NumberFormat("hu-HU").format(Math.round(n));

/**
 * Lightweight, transparent solar-size estimator. Takes the monthly electricity
 * bill and returns a recommended system size, panel count and rough annual
 * saving using clearly stated Hungarian-average assumptions. Not a binding
 * quote — always ends in a call to request an exact survey.
 */
export const SolarCalculator = ({ segment }: SolarCalculatorProps) => {
  const [bill, setBill] = useState<number>(segment === "commercial" ? 250000 : 40000);

  const result = useMemo(() => {
    const annualCost = bill * 12;
    const annualKwh = annualCost / PRICE_PER_KWH;
    const kwp = annualKwh / YIELD_PER_KWP;
    const panels = Math.ceil((kwp * 1000) / PANEL_WATT);
    return { annualCost, kwp, panels };
  }, [bill]);

  const min = segment === "commercial" ? 50000 : 10000;
  const max = segment === "commercial" ? 3000000 : 200000;
  const step = segment === "commercial" ? 10000 : 5000;

  return (
    <div
      className="rounded-[28px] p-6 md:p-10"
      style={{ background: "var(--surface-3)" }}
    >
      <label htmlFor="bill" className="block text-sm font-medium text-[var(--ink-soft)]">
        Jelenlegi havi villanyszámla
      </label>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-[var(--ink)]" style={{ fontWeight: 700 }}>
          {fmt(bill)}
        </span>
        <span className="text-lg text-[var(--ink-soft)]">Ft / hó</span>
      </div>
      <input
        id="bill"
        type="range"
        min={min}
        max={max}
        step={step}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        className="mt-4 w-full accent-[var(--brand)]"
        style={{ accentColor: "var(--brand)" }}
      />
      <div className="mt-1 flex justify-between text-xs text-[var(--ink-muted)]">
        <span>{fmt(min)} Ft</span>
        <span>{fmt(max)} Ft</span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 text-center">
          <div className="text-3xl font-bold" style={{ color: "var(--brand)", fontWeight: 700 }}>
            {result.kwp.toFixed(1)}
          </div>
          <div className="mt-1 text-sm text-[var(--ink-soft)]">kWp ajánlott rendszerméret</div>
        </div>
        <div className="rounded-2xl bg-white p-5 text-center">
          <div className="text-3xl font-bold" style={{ color: "var(--brand)", fontWeight: 700 }}>
            {fmt(result.panels)}
          </div>
          <div className="mt-1 text-sm text-[var(--ink-soft)]">napelem panel (kb.)</div>
        </div>
        <div className="rounded-2xl bg-white p-5 text-center">
          <div className="text-3xl font-bold" style={{ color: "var(--brand)", fontWeight: 700 }}>
            {fmt(result.annualCost)}
          </div>
          <div className="mt-1 text-sm text-[var(--ink-soft)]">Ft becsült éves megtakarítás</div>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[var(--ink-muted)]">
        A számítás tájékoztató jellegű, magyarországi átlagértékeken alapul
        ({fmt(PRICE_PER_KWH)} Ft/kWh egységár, {fmt(YIELD_PER_KWP)} kWh/kWp éves hozam,
        {" "}
        {PANEL_WATT} W-os panelek). A pontos rendszerméret a tetőfelület, tájolás és
        fogyasztási profil ismeretében, ingyenes helyszíni felmérés után adható meg.
      </p>
    </div>
  );
};
