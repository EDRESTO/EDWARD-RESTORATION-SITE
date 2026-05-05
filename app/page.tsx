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

  const cities = [
    "Danbury",
    "New Milford",
    "Bethel",
    "Waterbury",
    "Shelton",
    "Bridgeport",
    "Newtown",
    "Stamford",
    "Norwalk",
    "Ridgefield",
  ];

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

          @keyframes insurancePulseGlow {
            0% {
              text-shadow: 0 0 8px #d9ff3f, 0 0 14px #22d3ee;
              transform: scale(1);
            }
            50% {
              text-shadow: 0 0 18px #d9ff3f, 0 0 38px #22d3ee;
              transform: scale(1.045);
            }
            100% {
              text-shadow: 0 0 8px #d9ff3f, 0 0 14px #22d3ee;
              transform: scale(1);
            }
          }

          .insuranceGlowText {
            display: inline-block;
            animation: insurancePulseGlow 1.8s ease-in-out infinite;
          }

          @keyframes heroGlow {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
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

          .premiumCard {
            background: linear-gradient(135deg, rgba(15,23,42,0.96), rgba(7,17,31,0.98));
            border: 1px solid #164e63;
            border-radius: 24px;
            box-shadow: 0 0 35px rgba(34, 211, 238, 0.15);
          }

          .trustBadge {
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid rgba(34, 211, 238, 0.45);
            border-radius: 18px;
            padding: 18px 14px;
            font-weight: 900;
            text-align: center;
            box-shadow: 0 0 18px rgba(34, 211, 238, 0.14);
          }

          .serviceImageCard {
            background: #07111f;
            border-radius: 24px;
            border: 1px solid #164e63;
            overflow: hidden;
            box-shadow: 0 0 26px rgba(34, 211, 238, 0.16);
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }

          .serviceImageCard:hover {
            transform: translateY(-8px);
            border-color: #d9ff3f;
            box-shadow: 0 0 38px rgba(34, 211, 238, 0.35), 0 0 24px rgba(217, 255, 63, 0.28);
          }

          .serviceImage {
            width: 100%;
            height: auto;
            object-fit: contain;
            display: block;
          }

          .cityChip {
            background: #0f172a;
            border: 1px solid #164e63;
            border-radius: 999px;
            padding: 12px 16px;
            color: #d9ff3f;
            font-weight: 900;
            box-shadow: 0 0 14px rgba(217, 255, 63, 0.08);
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
              padding: 24px 16px 50px !important;
            }

            .heroTitle {
              font-size: 40px !important;
            }

            .heroText {
              font-size: 18px !important;
              margin-left: auto !important;
              margin-right: auto !important;
            }

            .heroGrid {
              grid-template-columns: 1fr !important;
            }

            .callButton {
              padding: 18px 20px !important;
              font-size: 24px !important;
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
              font-size: 21px !important;
              padding: 16px 16px !important;
            }

            .heroTitle {
              font-size: 35px !important;
            }
          }
        `}
      </style>

      <section
        className="topBar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 9997,
          textAlign: "center",
          padding: "10px 0",
          background: "#d9ff3f",
          color: "#07111f",
          fontWeight: 900,
          boxShadow: "0 0 18px rgba(217,255,63,0.45)",
        }}
      >
        24/7 EMERGENCY WATER CLEAN UP & RESTORATION — CALL 1 (855) 983-5663
      </section>

      <section
        className="hero"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "28px 24px 75px",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.23), transparent 34%), radial-gradient(circle at bottom right, rgba(217,255,63,0.16), transparent 30%), linear-gradient(180deg, #07111f 0%, #0f172a 55%, #07111f 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(34,211,238,0.16)",
            filter: "blur(70px)",
            right: -120,
            top: 80,
            animation: "heroGlow 4s ease-in-out infinite",
          }}
        />

        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          <section style={{ textAlign: "center", padding: "8px 12px 5px" }}>
            <img
              className="logo"
              src="/edward-logo-v2.png"
              alt="E.D.W.A.R.D. Logo"
              style={{ maxWidth: "560px", width: "100%", height: "auto" }}
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
                margin: "5px 0 28px",
                boxShadow: "0 0 18px #d9ff3f",
              }}
            />
          </section>

          <div
            className="heroGrid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: 28,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(217,255,63,0.12)",
                  border: "1px solid rgba(217,255,63,0.55)",
                  color: "#d9ff3f",
                  padding: "10px 15px",
                  borderRadius: 999,
                  fontWeight: 900,
                  marginBottom: 18,
                  boxShadow: "0 0 20px rgba(217,255,63,0.16)",
                }}
              >
                🚨 24/7 Emergency Response
              </div>

              <h1 className="heroTitle" style={{ fontSize: "62px", lineHeight: 1.02, margin: 0 }}>
                Water Damage?
                <br />
                <span style={{ color: "#d9ff3f" }}>Don’t Worry.</span>
                <br />
                <span style={{ color: "#22d3ee" }}>Call E.D.W.A.R.D.</span>
              </h1>

              <p className="heroText" style={{ fontSize: 22, color: "#cbd5e1", maxWidth: 690, lineHeight: 1.55 }}>
                Fast water extraction, drying, dehumidification, mold prevention, and insurance claim support for homes and businesses across Connecticut.
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
            </div>

            <div className="premiumCard" style={{ padding: 24 }}>
              <h2 style={{ marginTop: 0, color: "#d9ff3f", fontSize: 28 }}>Emergency Water Cleanup</h2>
              <p style={{ color: "#cbd5e1", fontSize: 18, lineHeight: 1.6 }}>
                Professional response for active leaks, flooded rooms, wet flooring, saturated drywall, basement water, and moisture problems.
              </p>

              <div style={{ display: "grid", gap: 12, marginTop: 22 }}>
                {["Water Extraction", "Drying & Dehumidification", "Moisture Control", "Mold Prevention"].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "#07111f",
                      border: "1px solid #164e63",
                      borderRadius: 14,
                      padding: "14px 16px",
                      fontWeight: 900,
                      color: "#ffffff",
                    }}
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 16,
              marginTop: 36,
            }}
          >
            <div className="trustBadge">🛡️ IICRC Certified</div>
            <div className="trustBadge">📍 Local CT Company</div>
            <div className="trustBadge">📋 Insurance Claim Support</div>
            <div className="trustBadge">⚡ Fast Response</div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0f172a", padding: "70px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2 className="servicesTitle" style={{ fontSize: 46, marginBottom: 12 }}>
            Our Services
          </h2>

          <p style={{ color: "#cbd5e1", fontSize: 20, maxWidth: 760, lineHeight: 1.55, marginBottom: 30 }}>
            Built for emergency water damage jobs where speed, clean documentation, and professional drying matter.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 26 }}>
            <div className="serviceImageCard">
              <img className="serviceImage" src="/water-extraction.png" alt="Water Extraction" />
              <div style={{ padding: 20 }}>
                <h3 style={{ color: "#d9ff3f", fontSize: 24, margin: "0 0 8px" }}>Water Extraction</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                  Quick removal of standing water from floors, basements, and affected rooms.
                </p>
              </div>
            </div>

            <div className="serviceImageCard">
              <img className="serviceImage" src="/drying-dehumidification.png" alt="Drying and Dehumidification" />
              <div style={{ padding: 20 }}>
                <h3 style={{ color: "#d9ff3f", fontSize: 24, margin: "0 0 8px" }}>Drying & Dehumidification</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                  Air movement and moisture control to help dry wet materials properly.
                </p>
              </div>
            </div>

            <div className="serviceImageCard">
              <img className="serviceImage" src="/mold-prevention.png" alt="Mold Prevention" />
              <div style={{ padding: 20 }}>
                <h3 style={{ color: "#d9ff3f", fontSize: 24, margin: "0 0 8px" }}>Mold Prevention</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                  Moisture-focused response designed to reduce the risk of mold growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#07111f", padding: "70px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 44, textAlign: "center", marginBottom: 12 }}>
            Our Emergency Process
          </h2>

          <p style={{ color: "#cbd5e1", fontSize: 20, textAlign: "center", maxWidth: 720, margin: "0 auto 34px", lineHeight: 1.55 }}>
            A clean, professional workflow from the first call to the final drying update.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {[
              ["1", "Call", "Tell us what happened and where the water is coming from."],
              ["2", "Inspect", "We check affected areas and moisture conditions."],
              ["3", "Extract & Dry", "We remove water and set drying equipment as needed."],
              ["4", "Document", "We help support the claim with photos, readings, and updates."],
            ].map(([num, title, text]) => (
              <div key={num} className="premiumCard" style={{ padding: 24 }}>
                <div style={{ color: "#07111f", background: "#d9ff3f", width: 42, height: 42, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 22 }}>
                  {num}
                </div>
                <h3 style={{ fontSize: 25, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.55 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#07111f", padding: "55px 24px", textAlign: "center" }}>
        <div
          className="premiumCard"
          style={{
            maxWidth: 980,
            margin: "0 auto",
            padding: "38px 24px",
          }}
        >
          <div style={{ fontSize: 42, marginBottom: 12 }}>🛡️</div>

          <h3
            className="insuranceGlowText"
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "#d9ff3f",
              letterSpacing: "0.6px",
              marginBottom: 12,
            }}
          >
            WE WORK WITH MOST MAJOR INSURANCE COMPANIES
          </h3>

          <p
            style={{
              fontSize: 19,
              color: "#cbd5e1",
              maxWidth: 760,
              margin: "0 auto 22px",
              lineHeight: 1.6,
            }}
          >
            We guide you through the claims process from beginning to end with clear documentation,
            moisture readings, drying updates, and restoration support.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 14,
              marginTop: 24,
            }}
          >
            {[
              "Claim Guidance",
              "Moisture Readings",
              "Drying Documentation",
              "Insurance Support",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#0f172a",
                  border: "1px solid #164e63",
                  borderRadius: 16,
                  padding: "16px 12px",
                  color: "#ffffff",
                  fontWeight: 800,
                  boxShadow: "0 0 18px rgba(217, 255, 63, 0.08)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f172a", padding: "70px 24px" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 44, marginBottom: 12 }}>Service Areas</h2>
          <p style={{ color: "#cbd5e1", fontSize: 20, marginBottom: 28 }}>
            Serving Connecticut and surrounding communities.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {cities.map((city) => (
  <span className="cityChip" key={city}>{city}</span>
))}

<span className="cityChip" style={{ background: "#d9ff3f", color: "#07111f" }}>
  AND MORE
</span>

<a
  className="cityChip"
  href="tel:18559835663"
  style={{
    background: "#22d3ee",
    color: "#07111f",
    boxShadow: "0 0 16px #22d3ee",
    textDecoration: "none",
    display: "inline-block",
  }}
>
  CALL NOW
</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "65px 24px 90px", textAlign: "center", background: "#07111f" }}>
        <h2 className="bottomTitle" style={{ fontSize: 46 }}>Need Water Cleanup Now?</h2>
        <p style={{ fontSize: 22, color: "#cbd5e1" }}>Call E.D.W.A.R.D. Water Restoration today.</p>
        <a
          href="tel:18559835663"
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#d9ff3f",
            color: "#07111f",
            padding: "18px 30px",
            borderRadius: 999,
            fontWeight: 900,
            textDecoration: "none",
            fontSize: 22,
            boxShadow: "0 0 26px #d9ff3f",
          }}
        >
          📱 Call 1 (855) WTFLOOD
        </a>
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

      <footer style={{ background: "#07111f", borderTop: "1px solid #164e63", padding: "35px 20px 90px", textAlign: "center" }}>
        <img
          src="/iicrc-certified-technicians-clean.png"
          alt="IICRC Certified Technicians"
          style={{
            maxWidth: "190px",
            width: "100%",
            height: "auto",
            opacity: 0.9,
            filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.35))",
            marginBottom: 22,
          }}
        />

        <h3 style={{ margin: "0 0 8px", color: "#d9ff3f" }}>E.D.W.A.R.D. Water Restoration</h3>
        <p style={{ margin: 0, color: "#cbd5e1" }}>
          Water Clean Up & Restoration • Mold Prevention • Storm Damage
        </p>
        <p style={{ color: "#94a3b8", marginTop: 12 }}>
          Call 1 (855) 983-5663
        </p>
      </footer>

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
