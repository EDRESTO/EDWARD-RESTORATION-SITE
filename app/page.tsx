export default function Page() {
  const fieldStyle: React.CSSProperties = {
    background: "#0f172a",
    border: "1px solid #164e63",
    color: "white",
    padding: "15px",
    borderRadius: 12,
    fontSize: 16,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#07111f", color: "white", minHeight: "100vh" }}>
      <style>
        {`
          html { scroll-behavior: smooth; }

          form input, form textarea, form select {
            font-size: 16px;
          }

          @keyframes pulseGlow {
            0% { box-shadow: 0 0 12px #d9ff3f; transform: scale(1); }
            50% { box-shadow: 0 0 30px #d9ff3f; transform: scale(1.03); }
            100% { box-shadow: 0 0 12px #d9ff3f; transform: scale(1); }
          }

          /* 🔥 NEW INSURANCE GLOW */
          @keyframes insurancePulse {
            0% {
              text-shadow: 0 0 10px #d9ff3f, 0 0 20px #d9ff3f;
              transform: scale(1);
            }
            50% {
              text-shadow: 0 0 28px #d9ff3f, 0 0 50px #22d3ee;
              transform: scale(1.05);
            }
            100% {
              text-shadow: 0 0 10px #d9ff3f, 0 0 20px #d9ff3f;
              transform: scale(1);
            }
          }

          @keyframes floatEstimate {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .serviceImageCard {
            background: #07111f;
            border-radius: 20px;
            border: 1px solid #164e63;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .serviceImage {
            width: 100%;
            height: auto;
            object-fit: contain;
          }
        `}
      </style>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "20px" }}>
        <img src="/edward-logo-v2.png" style={{ maxWidth: 600, width: "100%" }} />
        <h1 style={{ fontSize: 56 }}>
          Water Damage?<br />
          <span style={{ color: "#d9ff3f" }}>Don’t Worry.</span><br />
          <span style={{ color: "#22d3ee" }}>Call E.D.W.A.R.D.</span>
        </h1>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 24px" }}>
        <h2 style={{ fontSize: 42 }}>Our Services</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          <div className="serviceImageCard">
            <img className="serviceImage" src="/water-extraction.png" />
          </div>

          <div className="serviceImageCard">
            <img className="serviceImage" src="/drying-dehumidification.png" />
          </div>

          <div className="serviceImageCard">
            <img className="serviceImage" src="/mold-prevention.png" />
          </div>
        </div>
      </section>

      {/* 🔥 INSURANCE SECTION */}
      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <h3
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: "#d9ff3f",
            animation: "insurancePulse 1.8s ease-in-out infinite",
          }}
        >
          WE WORK WITH MOST MAJOR INSURANCE COMPANIES
        </h3>

        <p style={{ fontSize: 20, color: "#cbd5e1", marginTop: 10 }}>
          We guide you through the claims process from beginning to end.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 24px" }}>
        <h2>Message Us</h2>
        <form style={{ display: "grid", gap: 10 }}>
          <input placeholder="Name" style={fieldStyle} />
          <input placeholder="Phone" style={fieldStyle} />
          <textarea placeholder="Message" style={fieldStyle} />
          <button style={{ padding: 15, background: "#d9ff3f", fontWeight: 900 }}>
            SEND
          </button>
        </form>
      </section>

      {/* FLOATING CALL */}
      <a
        href="tel:18559835663"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#d9ff3f",
          padding: "14px 20px",
          borderRadius: 999,
          fontWeight: 900,
          boxShadow: "0 0 20px #d9ff3f",
        }}
      >
        📱 Call Now
      </a>
    </main>
  );
}
