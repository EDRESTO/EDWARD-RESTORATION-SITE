export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#07111f", color: "white", minHeight: "100vh" }}>
      <style>
        {`
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 12px #d9ff3f; transform: scale(1); }
            50% { box-shadow: 0 0 28px #d9ff3f; transform: scale(1.03); }
            100% { box-shadow: 0 0 12px #d9ff3f; transform: scale(1); }
          }
        `}
      </style>

      <section style={{ textAlign: "center", padding: "10px 0", background: "#d9ff3f", color: "#07111f", fontWeight: 900 }}>
        24/7 EMERGENCY WATER CLEAN UP & RESTORATION - CALL 1 (855) 983-5663
      </section>

      <section style={{ textAlign: "center", padding: "20px 0 5px" }}>
        <img src="/edward-logo-v2.png" alt="E.D.W.A.R.D. Logo" style={{ maxWidth: "600px", width: "100%", height: "auto" }} />
      </section>

      <section style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "900px", height: "6px", background: "#d9ff3f", borderRadius: "4px", margin: "5px 0 10px", boxShadow: "0 0 14px #d9ff3f" }} />
      </section>

      <section style={{ padding: "10px 24px 60px", maxWidth: 1100, margin: "-20px auto 0" }}>
        <h1 style={{ fontSize: "56px", lineHeight: 1.05 }}>
          Water Damage?<br />
          <span style={{ color: "#d9ff3f" }}>Don’t Worry.</span><br />
          <span style={{ color: "#22d3ee" }}>Call E.D.W.A.R.D.</span>
        </h1>

        <p style={{ fontSize: 22, color: "#cbd5e1", maxWidth: 650 }}>
          Serving Danbury, CT and surrounding areas including Bethel, Brookfield, Newtown, and Ridgefield.
        </p>

        <p style={{ fontSize: 20, color: "#94a3b8", maxWidth: 650 }}>
          Fast water extraction, drying, dehumidification, and mold prevention for homes and businesses.
        </p>

        <a
          href="tel:18559835663"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            marginTop: 30,
            background: "#d9ff3f",
            color: "#07111f",
            padding: "22px 30px",
            borderRadius: 16,
            fontWeight: 900,
            textDecoration: "none",
            fontSize: 24,
            maxWidth: "480px",
            width: "100%",
            animation: "pulseGlow 1.8s infinite",
          }}
        >
          <span>CALL 1 (855) WTFLOOD</span>
          <span style={{ background: "#07111f", color: "#d9ff3f", borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>
            📞
          </span>
        </a>

        <h2 style={{ marginTop: 20 }}>1 (855) 983-5663</h2>
      </section>

      <section style={{ background: "#0f172a", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 42 }}>Our Services</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              ["Water Extraction", "Remove standing water fast from floors, basements, carpets, and affected areas."],
              ["Drying & Dehumidification", "Professional drying setup to reduce moisture and protect the structure."],
              ["Mold Prevention", "Moisture control to help reduce the chance of mold growth after water damage."],
            ].map(([title, text]) => (
              <div key={title} style={{ background: "#07111f", padding: 28, borderRadius: 18, border: "1px solid #164e63" }}>
                <h3 style={{ color: "#d9ff3f" }}>{title}</h3>
                <p style={{ color: "#cbd5e1" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 44 }}>Need Water Cleanup Now?</h2>
        <p style={{ fontSize: 22, color: "#cbd5e1" }}>Call E.D.W.A.R.D. Water Restoration today.</p>
      </section>

      <a
        href="tel:18559835663"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          background: "#d9ff3f",
          color: "#07111f",
          padding: "16px 22px",
          borderRadius: 999,
          fontWeight: 900,
          textDecoration: "none",
          fontSize: 18,
          boxShadow: "0 0 24px #d9ff3f",
          zIndex: 9999,
        }}
      >
        📞 Call Now
      </a>
    </main>
  );
}
