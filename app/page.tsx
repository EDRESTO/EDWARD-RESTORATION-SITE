export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#07111f", color: "white", minHeight: "100vh", padding: "0 12px" }}>
      <style>
        {`
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 12px #d9ff3f; transform: scale(1); }
            50% { box-shadow: 0 0 35px #d9ff3f; transform: scale(1.05); }
            100% { box-shadow: 0 0 12px #d9ff3f; transform: scale(1); }
          }

          @keyframes phoneBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 36px !important;
              text-align: center;
            }
            p {
              font-size: 18px !important;
            }
          }
        `}
      </style>

      {/* Top bar */}
      <section style={{ textAlign: "center", padding: "10px 0", background: "#d9ff3f", color: "#07111f", fontWeight: 900, fontSize: "14px" }}>
        24/7 EMERGENCY WATER CLEAN UP & RESTORATION - CALL 1 (855) 983-5663
      </section>

      {/* Logo */}
      <section style={{ textAlign: "center", padding: "20px 0 5px" }}>
        <img src="/edward-logo-v2.png" alt="E.D.W.A.R.D. Logo" style={{ maxWidth: "500px", width: "100%" }} />
      </section>

      {/* Divider */}
      <section style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "900px", height: "6px", background: "#d9ff3f", borderRadius: "4px", margin: "5px 0 10px", boxShadow: "0 0 14px #d9ff3f" }} />
      </section>

      {/* Hero */}
      <section style={{ padding: "10px 12px 60px", maxWidth: 1100, margin: "-20px auto 0" }}>
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

        {/* 🔥 CALL BUTTON UPGRADED */}
        <a
          href="tel:18559835663"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: 30,
            background: "#d9ff3f",
            color: "#07111f",
            padding: "26px 34px",
            borderRadius: 18,
            fontWeight: 900,
            textDecoration: "none",
            fontSize: 26,
            maxWidth: "100%",
            width: "100%",
            animation: "pulseGlow 1.6s infinite",
          }}
        >
          <span>CALL 1 (855) WTFLOOD</span>

          {/* 💥 STRONGER PHONE ICON */}
          <span
            style={{
              background: "#07111f",
              color: "#d9ff3f",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              boxShadow: "0 0 20px #07111f, 0 0 25px #d9ff3f",
              animation: "phoneBounce 1s infinite",
            }}
          >
            📞
          </span>
        </a>

        <h2 style={{ marginTop: 20, fontSize: "28px" }}>1 (855) 983-5663</h2>
      </section>

      {/* Services */}
      <section style={{ background: "#0f172a", padding: "60px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36 }}>Our Services</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              ["Water Extraction", "Remove standing water fast from floors, basements, carpets, and affected areas."],
              ["Drying & Dehumidification", "Professional drying setup to reduce moisture and protect the structure."],
              ["Mold Prevention", "Moisture control to help reduce the chance of mold growth after water damage."],
            ].map(([title, text]) => (
              <div key={title} style={{ background: "#07111f", padding: 24, borderRadius: 18, border: "1px solid #164e63" }}>
                <h3 style={{ color: "#d9ff3f" }}>{title}</h3>
                <p style={{ color: "#cbd5e1" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "60px 16px", textAlign: "center" }}>
        <h2 style={{ fontSize: 36 }}>Need Water Cleanup Now?</h2>
        <p style={{ fontSize: 20, color: "#cbd5e1" }}>Call E.D.W.A.R.D. Water Restoration today.</p>
      </section>

      {/* Floating button */}
      <a
        href="tel:18559835663"
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          background: "#d9ff3f",
          color: "#07111f",
          padding: "18px 26px",
          borderRadius: 999,
          fontWeight: 900,
          textDecoration: "none",
          fontSize: 18,
          boxShadow: "0 0 30px #d9ff3f",
          zIndex: 9999,
        }}
      >
        📞 Call Now
      </a>
    </main>
  );
}
