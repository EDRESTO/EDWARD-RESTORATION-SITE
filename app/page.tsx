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

          .serviceImageCard {
            background: #07111f;
            border-radius: 20px;
            border: 1px solid #164e63;
            overflow: hidden;
            box-shadow: 0 0 24px rgba(34, 211, 238, 0.16);
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }

          .serviceImageCard:hover {
            transform: translateY(-6px);
            border-color: #22d3ee;
            box-shadow: 0 0 34px rgba(34, 211, 238, 0.35), 0 0 20px rgba(217, 255, 63, 0.18);
          }

          .serviceImage {
            width: 100%;
            height: 280px;
            object-fit: cover;
            display: block;
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
            text-align: center;
            line-height: 1.1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            z-index: 9998;
            border: 3px solid #ffffff;
            animation: floatEstimate 4s ease-in-out infinite, estimateGlow 1.8s ease-in-out infinite;
          }

          @media (max-width: 768px) {
            .topBar {
              font-size: 12px !important;
              padding: 9px 10px !important;
            }

            .logo {
              max-width: 360px !important;
            }

            .hero {
              text-align: center !important;
              padding: 10px 16px 46px !important;
              margin-top: -10px !important;
            }

            .heroTitle {
              font-size: 38px !important;
            }

            .heroText {
              font-size: 18px !important;
              margin-left: auto !important;
              margin-right: auto !important;
            }

            .callButton {
              padding: 18px 20px !important;
              font-size: 26px !important;
              gap: 12px !important;
            }

            .phoneIcon {
              width: 50px !important;
              height: 50px !important;
              min-width: 50px !important;
            }

            .servicesTitle,
            .bottomTitle,
            .messageTitle {
              font-size: 34px !important;
              text-align: center !important;
            }

            .serviceImage {
              height: auto !important;
              object-fit: contain !important;
            }

            .floatingCall {
              left: 16px !important;
              right: 16px !important;
              text-align: center !important;
              justify-content: center !important;
            }

            .freeEstimateCircle {
              width: 88px !important;
              height: 88px !important;
              font-size: 12px !important;
              right: 14px !important;
              bottom: 86px !important;
            }
          }

          @media (max-width: 420px) {
            .callButton {
              font-size: 22px !important;
              padding: 16px 16px !important;
            }

            .heroTitle {
              font-size: 34px !important;
            }
          }
        `}
      </style>

      <section
        className="topBar"
        style={{
          textAlign: "center",
          padding: "10px 0",
          background: "#d9ff3f",
          color: "#07111f",
          fontWeight: 900,
        }}
      >
        24/7 EMERGENCY WATER CLEAN UP & RESTORATION - CALL 1 (855) 983-5663
      </section>

      <section style={{ textAlign: "center", padding: "20px 12px 5px" }}>
        <img
          className="logo"
          src="/edward-logo-v2.png"
          alt="E.D.W.A.R.D. Logo"
          style={{ maxWidth: "600px", width: "100%", height: "auto" }}
        />
      </section>

      <section style={{ display: "flex", justifyContent: "center", padding: "0 16px" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "6px",
            background: "#d9ff3f",
            borderRadius: "4px",
            margin: "5px 0 10px",
            boxShadow: "0 0 14px #d9ff3f",
          }}
        />
      </section>

      <section className="hero" style={{ padding: "10px 24px 60px", maxWidth: 1100, margin: "-20px auto 0" }}>
        <h1 className="heroTitle" style={{ fontSize: "56px", lineHeight: 1.05 }}>
          Water Damage?
          <br />
          <span style={{ color: "#d9ff3f" }}>Don’t Worry.</span>
          <br />
          <span style={{ color: "#22d3ee" }}>Call E.D.W.A.R.D.</span>
        </h1>

        <p className="heroText" style={{ fontSize: 22, color: "#cbd5e1", maxWidth: 650 }}>
          Serving Connecticut (New Milford, Danbury, Bethel, Waterbury, Shelton, Bridgeport, Newtown, Stamford, Norwalk, Ridgefield and many more areas! Call now for a free consultation.
        </p>

        <p className="heroText" style={{ fontSize: 20, color: "#94a3b8", maxWidth: 650 }}>
          Fast water damage remediation, drying, dehumidification, and mold prevention for homes and businesses.
        </p>

        <a
          className="callButton"
          href="tel:18559835663"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            marginTop: 30,
            background: "#d9ff3f",
            color: "#07111f",
            padding: "20px 28px",
            borderRadius: 18,
            fontWeight: 900,
            textDecoration: "none",
            fontSize: 30,
            maxWidth: "620px",
            width: "100%",
            boxSizing: "border-box",
            animation: "pulseGlow 1.6s infinite",
          }}
        >
          <span>CALL 1 (855) WTFLOOD</span>

          <span
            className="phoneIcon"
            style={{
              background: "#07111f",
              color: "#d9ff3f",
              borderRadius: "14px",
              width: "54px",
              height: "54px",
              minWidth: "54px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 18px #07111f, 0 0 20px #d9ff3f",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d9ff3f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="2" width="12" height="20" rx="3" />
              <path d="M10 18h4" />
            </svg>
          </span>
        </a>

        <h2 style={{ marginTop: 20, fontSize: "30px" }}>1 (855) 983-5663</h2>
      </section>

      <section style={{ background: "#0f172a", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className="servicesTitle" style={{ fontSize: 42 }}>Our Services</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            <div className="serviceImageCard">
              <img className="serviceImage" src="/water-extraction.png" alt="Water Extraction" />
            </div>

            <div className="serviceImageCard">
              <img className="serviceImage" src="/drying-dehumidification.png" alt="Drying and Dehumidification" />
            </div>

            <div className="serviceImageCard">
              <img className="serviceImage" src="/mold-prevention.png" alt="Mold Prevention" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px 100px", textAlign: "center" }}>
        <h2 className="bottomTitle" style={{ fontSize: 44 }}>Need Water Cleanup Now?</h2>
        <p style={{ fontSize: 22, color: "#cbd5e1" }}>Call E.D.W.A.R.D. Water Restoration today.</p>
      </section>

      <section style={{ background: "#0f172a", padding: "60px 24px 130px" }}>
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <h2 className="messageTitle" style={{ fontSize: 42, textAlign: "center", marginBottom: 10 }}>
            Message Us
          </h2>

          <p style={{ fontSize: 20, color: "#cbd5e1", textAlign: "center", marginBottom: 25 }}>
            Send us your information and we’ll call you momentarily.
          </p>

          <form
            action="https://formsubmit.co/kenedjr24@yahoo.com"
            method="POST"
            style={{
              background: "#07111f",
              padding: 28,
              borderRadius: 20,
              display: "grid",
              gap: 16,
              border: "1px solid #164e63",
              boxShadow: "0 0 24px rgba(34, 211, 238, 0.18)",
            }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="NEW WEBSITE MESSAGE - E.D.W.A.R.D." />
            <input type="hidden" name="_autoresponse" value="Thank you for contacting E.D.W.A.R.D. Water Restoration. We received your request and we’ll call you momentarily." />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_cc" value="3477532362@tmomail.net" />

            <input name="name" placeholder="Full Name" required style={fieldStyle} />
            <input name="phone" type="tel" inputMode="numeric" placeholder="Phone Number" required style={fieldStyle} />
            <input name="email" type="email" placeholder="Email" style={fieldStyle} />
            <textarea name="message" placeholder="Message" rows={4} required style={fieldStyle} />

            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                background: "#0f172a",
                border: "1px solid #164e63",
                borderRadius: 12,
                padding: 16,
                color: "#cbd5e1",
                fontSize: 14,
                lineHeight: 1.5,
              }}
            >
              <input
                type="checkbox"
                name="sms_consent"
                required
                value="Customer agreed to receive SMS messages from E.D.W.A.R.D. Water Restoration."
                style={{
                  marginTop: 4,
                  width: 18,
                  height: 18,
                  accentColor: "#d9ff3f",
                  flexShrink: 0,
                }}
              />

              <span>
                I agree to receive SMS messages from <strong style={{ color: "#ffffff" }}>E.D.W.A.R.D. Water Restoration</strong> regarding my service request. Message frequency varies. Message & data rates may apply. Reply <strong style={{ color: "#ffffff" }}>STOP</strong> to opt out.
              </span>
            </label>

            <p style={{ margin: "-6px 0 2px", color: "#94a3b8", fontSize: 12, lineHeight: 1.4 }}>
              Your information is used only to respond to your request and will not be sold or shared.
            </p>

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
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "30px 16px 70px" }}>
        <img
          src="/iicrc-certified-technicians-clean.png"
          alt="IICRC Certified Technicians"
          style={{
            maxWidth: "210px",
            width: "100%",
            height: "auto",
            opacity: 0.9,
            filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.35))",
          }}
        />
      </section>

      <a className="freeEstimateCircle" href="tel:18559835663">
        FREE<br />ESTIMATES
      </a>

      <a
        className="floatingCall"
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
