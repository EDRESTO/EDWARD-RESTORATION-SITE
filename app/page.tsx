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

          @keyframes floatEstimate {
            0% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-12px) translateX(-5px); }
            50% { transform: translateY(0px) translateX(-10px); }
            75% { transform: translateY(10px) translateX(-4px); }
            100% { transform: translateY(0px) translateX(0px); }
          }

          @keyframes estimateGlow {
            0%, 100% {
              box-shadow:
                0 0 18px #d9ff3f,
                0 0 35px #22d3ee,
                0 0 60px rgba(217, 255, 63, 0.85);
            }
            50% {
              box-shadow:
                0 0 30px #d9ff3f,
                0 0 55px #22d3ee,
                0 0 85px rgba(217, 255, 63, 1);
            }
          }

          .freeEstimateCircle {
            position: fixed;
            right: 22px;
            bottom: 92px;
            width: 112px;
            height: 112px;
            border-radius: 50%;
            background: radial-gradient(circle, #ffffff 0%, #d9ff3f 35%, #22d3ee 100%);
            color: #07111f;
            font-weight: 900;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            z-index: 9998;
            border: 3px solid #ffffff;
            animation: floatEstimate 4s ease-in-out infinite, estimateGlow 1.8s ease-in-out infinite;
          }
        `}
      </style>

      {/* TOP BAR */}
      <section style={{ textAlign: "center", padding: "10px 0", background: "#d9ff3f", color: "#07111f", fontWeight: 900 }}>
        24/7 EMERGENCY WATER CLEAN UP & RESTORATION - CALL 1 (855) 983-5663
      </section>

      {/* LOGO */}
      <section style={{ textAlign: "center", padding: "20px 12px 5px" }}>
        <img src="/edward-logo-v2.png" style={{ maxWidth: "600px", width: "100%" }} />
      </section>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "56px" }}>
          Water Damage?<br />
          <span style={{ color: "#d9ff3f" }}>Don’t Worry.</span><br />
          <span style={{ color: "#22d3ee" }}>Call E.D.W.A.R.D.</span>
        </h1>

        <a
          href="tel:18559835663"
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#d9ff3f",
            padding: "18px 28px",
            borderRadius: 18,
            fontWeight: 900,
            color: "#07111f",
            textDecoration: "none",
            fontSize: 28,
            animation: "pulseGlow 1.6s infinite",
          }}
        >
          CALL 1 (855) WTFLOOD
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#0f172a", padding: "60px 24px" }}>
        <h2 style={{ textAlign: "center", fontSize: 42 }}>Our Services</h2>
      </section>

      {/* 🔥 MESSAGE US (PRO LEVEL) */}
      <section style={{ background: "#07111f", padding: "70px 24px" }}>
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          
          <h2 style={{ fontSize: 44, textAlign: "center" }}>Message Us</h2>

          {/* CALL FIRST */}
          <a
            href="tel:18559835663"
            style={{
              display: "block",
              textAlign: "center",
              background: "#22d3ee",
              color: "#07111f",
              padding: "16px",
              borderRadius: 16,
              fontWeight: 900,
              fontSize: 20,
              textDecoration: "none",
              margin: "20px 0",
            }}
          >
            📱 CALL NOW (FASTEST RESPONSE)
          </a>

          <form
            action="https://formsubmit.co/kenedjr24@yahoo.com"
            method="POST"
            style={{
              background: "#0f172a",
              padding: 28,
              borderRadius: 20,
              display: "grid",
              gap: 16,
            }}
          >
            {/* hidden config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="🚨 NEW LEAD - CALL ASAP (WTFLOOD)" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting E.D.W.A.R.D. Water Restoration. We received your request and we’ll call you momentarily."
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_cc" value="3477532362@tmomail.net" />

            <input name="name" placeholder="Full Name" required style={fieldStyle} />

            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="Phone Number"
              required
              style={fieldStyle}
            />

            <input name="email" type="email" placeholder="Email" style={fieldStyle} />

            <select name="issue" required style={fieldStyle}>
              <option value="">Select Issue</option>
              <option>Water Damage</option>
              <option>Flood</option>
              <option>Leak</option>
              <option>Mold</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your issue..."
              rows={4}
              style={fieldStyle}
              required
            />

            <button
              type="submit"
              style={{
                background: "#d9ff3f",
                color: "#07111f",
                padding: "18px",
                borderRadius: 14,
                fontWeight: 900,
                fontSize: 20,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 24px #d9ff3f",
              }}
            >
              SEND REQUEST
            </button>
          </form>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h2>Need Water Cleanup Now?</h2>
      </section>

      {/* FLOATING BUTTONS */}
      <a className="freeEstimateCircle" href="tel:18559835663">
        FREE ESTIMATES
      </a>

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
        📱 Call Now
      </a>

    </main>
  );
}
