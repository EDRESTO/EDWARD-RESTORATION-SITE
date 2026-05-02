export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#07111f", color: "white", minHeight: "100vh" }}>
      
      <section style={{ textAlign: "center", padding: "10px 0", background: "#d9ff3f", color: "#07111f", fontWeight: 900 }}>
        24/7 EMERGENCY WATER CLEAN UP & RESTORATION - CALL 1 (855) 983-5663
      </section>

      <section style={{ textAlign: "center", padding: "20px 0 5px", background: "#07111f" }}>
        <img
          src="/edward-logo.png"
          alt="E.D.W.A.R.D. Logo"
          style={{
            maxWidth: "450px",
            width: "100%",
            height: "auto"
          }}
        />
      </section>

      <section style={{ display: "flex", justifyContent: "center", background: "#07111f" }}>
        <div style={{
          width: "100%",
          maxWidth: "900px",
          height: "6px",
          background: "#d9ff3f",
          borderRadius: "4px",
          margin: "5px 0 10px"
        }} />
      </section>

      <section style={{ padding: "20px 24px 70px", maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: "56px", lineHeight: 1.05, marginBottom: 20 }}>
          Water Damage?<br />
          <span style={{ color: "#d9ff3f" }}>Don’t Worry.</span><br />
          <span style={{ color: "#22d3ee" }}>Call E.D.W.A.R.D.</span>
        </h1>

        <p style={{ fontSize: 22, color: "#cbd5e1", maxWidth: 650 }}>
          Serving Danbury, CT and surrounding areas including Bethel, Brookfield, Newtown, and Ridgefield.
        </p>

        <p style={{ fontSize: 20, color: "#94a3b8", maxWidth: 650, marginTop: 10 }}>
          Fast water extraction, drying, dehumidification, and mold prevention for homes and businesses.
        </p>

        <a
          href="tel:18559835663"
          style={{
            display: "inline-block",
            marginTop: 30,
            background: "#d9ff3f",
            color: "#07111f",
            padding: "18px 28px",
            borderRadius: 14,
            fontWeight: 900,
            textDecoration: "none",
            fontSize: 22
          }}
        >
          CALL 1 (855) WTFLOOD
        </a>

        <h2 style={{ marginTop: 20, fontSize: 30 }}>1 (855) 983-5663</h2>
      </section>

      <section style={{ background: "#0f172a", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 42, marginBottom: 30 }}>Our Services</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              ["Water Extraction", "Remove standing water fast from floors, basements, carpets, and affected areas."],
              ["Drying & Dehumidification", "Professional drying setup to reduce moisture and protect the structure."],
              ["Mold Prevention", "Moisture control to help reduce the chance of mold growth after water damage."]
            ].map(([title, text]) => (
              <div key={title} style={{ background: "#07111f", padding: 28, borderRadius: 18, border: "1px solid #164e63" }}>
                <h3 style={{ color: "#d9ff3f", fontSize: 26 }}>{title}</h3>
                <p style={{ color: "#cbd5e1", fontSize: 18 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 44 }}>Need Water Cleanup Now?</h2>
        <p style={{ fontSize: 22, color: "#cbd5e1" }}>Call E.D.W.A.R.D. Water Restoration today.</p>

        <a
          href="tel:18559835663"
          style={{
            display: "inline-block",
            marginTop: 24,
            background: "#22d3ee",
            color: "#07111f",
            padding: "18px 28px",
            borderRadius: 14,
            fontWeight: 900,
            textDecoration: "none",
            fontSize: 22
          }}
        >
          TAP TO CALL
        </a>
      </section>

    </main>
  );
}              ["Water Extraction", "Remove standing water fast from floors, basements, carpets, and affected areas."],
              ["Drying & Dehumidification", "Professional drying setup to reduce moisture and protect the structure."],
              ["Mold Prevention", "Moisture control to help reduce the chance of mold growth after water damage."],
            ].map(([title, text]) => (
              <div key={title} style={{ background: "#07111f", padding: 28, borderRadius: 18, border: "1px solid #164e63" }}>
                <h3 style={{ color: "#d9ff3f", fontSize: 26 }}>{title}</h3>
                <p style={{ color: "#cbd5e1", fontSize: 18 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 44 }}>Need Water Cleanup Now?</h2>
        <p style={{ fontSize: 22, color: "#cbd5e1" }}>Call E.D.W.A.R.D. Water Restoration today.</p>
        <a
  href="tel:18559835663"
  style={{
    display: "inline-block",
    marginTop: 24,
    background: "#22d3ee",
    color: "#07111f",
    padding: "18px 28px",
    borderRadius: 14,
    fontWeight: 900,
    textDecoration: "none",
    fontSize: 22
  }}
>
  TAP TO CALL
</a>
      </section>
        </main>
  );
}
