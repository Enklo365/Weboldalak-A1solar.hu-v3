import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <p className="post-cat">404</p>
        <h1 style={{ fontSize: "clamp(30px,5vw,46px)" }}>Az oldal nem található</h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 460, margin: "16px auto 28px" }}>
          Lehet, hogy elköltöztettük, vagy elgépelte a címet. Térjen vissza a
          kezdőlapra, vagy keressen minket közvetlenül.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/">
            Vissza a kezdőlapra
          </Link>
          <Link className="btn btn-outline" href="/kapcsolat">
            Kapcsolat
          </Link>
        </div>
      </div>
    </section>
  );
}
