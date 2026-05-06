export default function Page() {
  const fieldStyle: React.CSSProperties = {
    background: "rgba(15, 23, 42, 0.95)",
    border: "1px solid rgba(34, 211, 238, 0.45)",
    color: "white",
    padding: "16px",
    borderRadius: 14,
    fontSize: 16,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "inset 0 0 18px rgba(34,211,238,0.06)",
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
    <main style={{ fontFamily: "Arial, sans-serif", background: "#050b14", color: "white", minHeight: "100vh" }}>
      <style>
        {`
          html { scroll-behavior: smooth; }

          form input, form textarea, form select {
            font-size: 16px;
          }

          @keyframes pulseGlow {
            0% { box-shadow: 0 0 14px #d9ff3f, 0 0 24px rgba(34,211,238,0.25); transform: scale(1); }
            50% { box-shadow: 0 0 38px #d9ff3f, 0 0 55px rgba(34,211,238,0.45); transform: scale(1.035); }
            100% { box-shadow: 0 0 14px #d9ff3f, 0 0 24px rgba(34,211,238,0.25); transform: scale(1); }
          }

          @keyframes insurancePulseGlow {
            0% { text-shadow: 0 0 8px #d9ff3f, 0 0 14px #22d3ee; transform: scale(1); }
            50% { text-shadow: 0 0 20px #d9ff3f, 0 0 42px #22d3ee; transform: scale(1.045); }
            100% { text-shadow: 0 0 8px #d9ff3f, 0 0 14px #22d3ee; transform: scale(1); }
          }

          .insuranceGlowText {
            display: inline-block;
            animation: insurancePulseGlow 1.8s ease-in-out infinite;
          }

          @keyframes heroGlow {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.08); }
          }

          @keyframes waterSweep {
            0% { transform: translateX(-30%) translateY(0); opacity: 0.25; }
            50% { opacity: 0.55; }
            100% { transform: translateX(30%) translateY(-12px); opacity: 0.25; }
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
              box-shadow: 0 0 18px #d9ff3f, 0 0 35px #22d3ee, 0 0 60px rgba(217, 255, 63, 0.85);
            }
            50% {
              box-shadow: 0 0 30px #d9ff3f, 0 0 60px #22d3ee, 0 0 95px rgba(217, 255, 63, 1);
            }
          }

          @keyframes softFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          .glassCard {
            background: linear-gradient(135deg, rgba(15,23,42,0.88), rgba(7,17,31,0.96));
            border: 1px solid rgba(34, 211, 238, 0.34);
            border-radius: 28px;
            box-shadow: 0 25px 80px rgba(0,0,0,0.35), 0 0 34px rgba(34, 211, 238, 0.13);
            backdrop-filter: blur(14px);
          }

          .premiumCard {
            background: linear-gradient(135deg, rgba(15,23,42,0.96), rgba(7,17,31,0.98));
            border: 1px solid rgba(34, 211, 238, 0.32);
            border-radius: 24px;
            box-shadow: 0 0 35px rgba(34, 211, 238, 0.15);
          }

          .premiumCard:hover {
            border-color: rgba(217,255,63,0.7);
            box-shadow: 0 0 42px rgba(34, 211, 238, 0.25), 0 0 28px rgba(217,255,63,0.12);
          }

          .trustBadge {
            background: rgba(15, 23, 42, 0.84);
            border: 1px solid rgba(34, 211, 238, 0.45);
            border-radius: 18px;
            padding: 18px 14px;
            font-weight: 900;
            text-align: center;
            box-shadow: 0 0 18px rgba(34, 211, 238, 0.14);
          }

          .serviceImageCard {
            background: #07111f;
            border-radius: 26px;
            border: 1px solid rgba(34, 211, 238, 0.32);
            overflow: hidden;
            box-shadow: 0 0 28px rgba(34, 211, 238, 0.16);
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }

          .serviceImageCard:hover {
            transform: translateY(-9px);
            border-color: #d9ff3f;
            box-shadow: 0 0 42px rgba(34, 211, 238, 0.36), 0 0 28px rgba(217, 255, 63, 0.3);
          }

          .flatServiceCard {
            background: linear-gradient(135deg, rgba(7,17,31,0.98), rgba(15,23,42,0.98));
            border-radius: 22px;
            border: 1px solid rgba(34, 211, 238, 0.32);
            padding: 22px;
            display: flex;
            align-items: center;
            gap: 18px;
            min-height: 132px;
            box-shadow: 0 0 28px rgba(34, 211, 238, 0.16);
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }

          .flatServiceCard:hover {
            transform: translateY(-6px);
            border-color: #d9ff3f;
            box-shadow: 0 0 36px rgba(34, 211, 238, 0.32), 0 0 24px rgba(217, 255, 63, 0.24);
          }

          .flatIcon {
            width: 68px;
            height: 68px;
            min-width: 68px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 34px;
            background: radial-gradient(circle, rgba(217,255,63,0.24), rgba(34,211,238,0.15));
            border: 1px solid rgba(217,255,63,0.26);
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

          .navLink {
            color: #cbd5e1;
            text-decoration: none;
            font-weight: 800;
            font-size: 14px;
          }

          .navLink:hover {
            color: #d9ff3f;
          }

          .legalLink {
            color: #22d3ee;
            text-decoration: underline;
            font-weight: 900;
          }

          .legalLink:hover {
            color: #d9ff3f;
          }

          .legalSectionTitle {
            font-size: 42px;
            margin: 0 0 14px;
            color: #ffffff;
          }

          .legalBox h3 {
            color: #d9ff3f;
            font-size: 24px;
            margin: 28px 0 10px;
          }

          .legalBox p,
          .legalBox li {
            color: #cbd5e1;
            font-size: 17px;
            line-height: 1.65;
          }

          .legalBox ul {
            padding-left: 22px;
          }

          @media (max-width: 768px) {
            .topBar {
              font-size: 12px !important;
              padding: 9px 10px !important;
            }

            .desktopNav {
              display: none !important;
            }

            .logo {
              max-width: 385px !important;
            }

            .hero {
              text-align: center !important;
              padding: 24px 16px 54px !important;
            }

            .heroTitle {
              font-size: 42px !important;
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
              font-size: 23px !important;
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

            .flatServiceCard {
              align-items: flex-start !important;
              text-align: left !important;
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
              font-size: 20px !important;
              padding: 16px 16px !important;
            }

            .heroTitle {
              font-size: 36px !important;
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
          background: "linear-gradient(90deg, #d9ff3f, #ffffff, #d9ff3f)",
          color: "#07111f",
          fontWeight: 900,
          boxShadow: "0 0 22px rgba(217,255,63,0.55)",
        }}
      >
        🚨 24/7 EMERGENCY WATER CLEAN UP & RESTORATION — CALL 1 (855) 983-5663
      </section>

      <nav
        className="desktopNav"
        style={{
          position: "sticky",
          top: 38,
          zIndex: 9996,
          background: "rgba(5,11,20,0.84)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(34,211,238,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "13px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <strong style={{ color: "#d9ff3f", letterSpacing: 1 }}>E.D.W.A.R.D.</strong>

          <div style={{ display: "flex", gap: 22 }}>
            <a className="navLink" href="#services">Services</a>
            <a className="navLink" href="#process">Process</a>
            <a className="navLink" href="#insurance">Insurance</a>
            <a className="navLink" href="#areas">Areas</a>
            <a className="navLink" href="#message">Message Us</a>
            <a className="navLink" href="#privacy-policy">Privacy</a>
            <a className="navLink" href="#terms-and-conditions">Terms</a>
          </div>

          <a
            href="tel:18559835663"
            style={{
              background: "#d9ff3f",
              color: "#07111f",
              padding: "10px 15px",
              borderRadius: 999,
              fontWeight: 900,
              textDecoration: "none",
              boxShadow: "0 0 18px rgba(217,255,63,0.4)",
            }}
          >
            📱 Call Now
          </a>
        </div>
      </nav>

      <section
        className="hero"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "32px 24px 82px",
          background:
            "radial-gradient(circle at 15% 8%, rgba(34,211,238,0.28), transparent 31%), radial-gradient(circle at 90% 18%, rgba(217,255,63,0.18), transparent 28%), linear-gradient(180deg, #050b14 0%, #0f172a 54%, #050b14 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(34,211,238,0.17)",
            filter: "blur(80px)",
            right: -140,
            top: 70,
            animation: "heroGlow 4s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "-10%",
            right: "-10%",
            bottom: 20,
            height: 160,
            background:
              "linear-gradient(115deg, transparent, rgba(34,211,238,0.16), transparent), repeating-linear-gradient(135deg, rgba(217,255,63,0.08) 0px, rgba(217,255,63,0.08) 1px, transparent 1px, transparent 22px)",
            filter: "blur(1px)",
            animation: "waterSweep 8s ease-in-out infinite alternate",
          }}
        />

        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          <section style={{ textAlign: "center", padding: "8px 12px 5px" }}>
            <img
              className="logo"
              src="/edward-logo-v2.png"
              alt="E.D.W.A.R.D. Logo"
              style={{ maxWidth: "642px", width: "100%", height: "auto", filter: "drop-shadow(0 0 24px rgba(34,211,238,0.4))" }}
            />
          </section>

          <section style={{ display: "flex", justifyContent: "center", padding: "0 16px" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "920px",
                height: "6px",
                background: "linear-gradient(90deg, transparent, #d9ff3f, #22d3ee, #d9ff3f, transparent)",
                borderRadius: "4px",
                margin: "5px 0 30px",
                boxShadow: "0 0 22px #d9ff3f",
              }}
            />
          </section>

          <div
            className="heroGrid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 30,
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
                  padding: "11px 16px",
                  borderRadius: 999,
                  fontWeight: 900,
                  marginBottom: 18,
                  boxShadow: "0 0 20px rgba(217,255,63,0.16)",
                }}
              >
                🚨 24/7 Emergency Water Damage Response
              </div>

              <h1 className="heroTitle" style={{ fontSize: "66px", lineHeight: 1.01, margin: 0, letterSpacing: "-1.8px" }}>
                Water Damage?
                <br />
                <span style={{ color: "#d9ff3f" }}>Don’t Worry.</span>
                <br />
                <span style={{ color: "#22d3ee" }}>Call E.D.W.A.R.D.</span>
              </h1>

              <p className="heroText" style={{ fontSize: 22, color: "#d7e3ef", maxWidth: 705, lineHeight: 1.6 }}>
                Fast water extraction, structural drying, dehumidification, leak detection, mold prevention, and insurance claim support for homes and businesses across Connecticut.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "22px 0 4px" }}>
                {["⚡ Fast Response", "📋 Claim Documentation", "🛡️ IICRC Certified", "📍 Local CT Company"].map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "rgba(15,23,42,0.92)",
                      border: "1px solid rgba(34,211,238,0.42)",
                      color: "#ffffff",
                      padding: "10px 13px",
                      borderRadius: 999,
                      fontWeight: 900,
                      fontSize: 14,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                className="callButton"
                href="tel:18559835663"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  marginTop: 30,
                  background: "linear-gradient(90deg, #d9ff3f, #ffffff, #d9ff3f)",
                  color: "#07111f",
                  padding: "21px 28px",
                  borderRadius: 20,
                  fontWeight: 900,
                  textDecoration: "none",
                  fontSize: 30,
                  maxWidth: "630px",
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
                    borderRadius: "16px",
                    width: "56px",
                    height: "56px",
                    minWidth: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 18px #07111f, 0 0 20px #d9ff3f",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#d9ff3f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="2" width="12" height="20" rx="3" />
                    <path d="M10 18h4" />
                  </svg>
                </span>
              </a>

              <h2 style={{ marginTop: 20, fontSize: "31px" }}>1 (855) 983-5663</h2>
            </div>

            <div className="glassCard" style={{ padding: 26, animation: "softFloat 5s ease-in-out infinite" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(217,255,63,0.18), rgba(34,211,238,0.12))",
                  border: "1px solid rgba(217,255,63,0.32)",
                  borderRadius: 22,
                  padding: 18,
                  marginBottom: 18,
                }}
              >
                <h2 style={{ margin: 0, color: "#d9ff3f", fontSize: 30 }}>Emergency Water Cleanup</h2>
                <p style={{ color: "#d7e3ef", fontSize: 17, lineHeight: 1.55, marginBottom: 0 }}>
                  Professional help for active leaks, flooded rooms, wet flooring, saturated drywall, basement water, and moisture problems.
                </p>
              </div>

              <div style={{ display: "grid", gap: 12 }}>
                {[
                  "Water Extraction",
                  "Leak Detection",
                  "Drying & Dehumidification",
                  "Mold Prevention",
                  "Free Consultation",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "rgba(5,11,20,0.78)",
                      border: "1px solid rgba(34,211,238,0.35)",
                      borderRadius: 15,
                      padding: "14px 16px",
                      fontWeight: 900,
                      color: "#ffffff",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>✅ {item}</span>
                    <span style={{ color: "#d9ff3f" }}>Ready</span>
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
              marginTop: 38,
            }}
          >
            <div className="trustBadge">🛡️ IICRC Certified</div>
            <div className="trustBadge">📍 Local CT Company</div>
            <div className="trustBadge">📋 Insurance Claim Support</div>
            <div className="trustBadge">⚡ Fast Response</div>
          </div>
        </div>
      </section>

      <section id="services" style={{ background: "#0f172a", padding: "76px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <div style={{ color: "#22d3ee", fontWeight: 900, letterSpacing: 2, marginBottom: 10 }}>PREMIUM RESTORATION SERVICES</div>
            <h2 className="servicesTitle" style={{ fontSize: 48, margin: "0 0 12px" }}>
              Our Services
            </h2>

            <p style={{ color: "#cbd5e1", fontSize: 20, maxWidth: 780, lineHeight: 1.6, margin: "0 auto" }}>
              Built for emergency water damage jobs where speed, clean documentation, and professional drying matter.
            </p>
          </div>

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

            <div className="flatServiceCard">
              <div className="flatIcon">💧</div>
              <div>
                <h3 style={{ color: "#d9ff3f", fontSize: 23, margin: "0 0 8px" }}>Leak Detection</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                  We help identify water source issues and moisture patterns before damage spreads.
                </p>
              </div>
            </div>

            <div className="flatServiceCard">
              <div className="flatIcon">📸</div>
              <div>
                <h3 style={{ color: "#d9ff3f", fontSize: 23, margin: "0 0 8px" }}>Claim Documentation</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                  Photos, job notes, and clear updates to help support the insurance process.
                </p>
              </div>
            </div>

            <div className="flatServiceCard">
              <div className="flatIcon">🌧️</div>
              <div>
                <h3 style={{ color: "#d9ff3f", fontSize: 23, margin: "0 0 8px" }}>Storm Damage</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
                  Emergency response for rain, storm intrusion, wet basements, and interior water damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" style={{ background: "#050b14", padding: "76px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 46, textAlign: "center", marginBottom: 12 }}>
            Our Emergency Process
          </h2>

          <p style={{ color: "#cbd5e1", fontSize: 20, textAlign: "center", maxWidth: 720, margin: "0 auto 36px", lineHeight: 1.6 }}>
            A clean, professional workflow from the first call to the full and complete recovery of your property.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {[
              ["1", "Call", "Tell us what happened and where the water is coming from."],
              ["2", "Inspect", "We check affected areas and moisture conditions."],
              ["3", "Extract & Dry", "We remove water and set drying equipment as needed."],
              ["4", "Document", "We help support the claim with photos, readings, and updates."],
            ].map(([num, title, text]) => (
              <div key={num} className="premiumCard" style={{ padding: 24 }}>
                <div style={{ color: "#07111f", background: "#d9ff3f", width: 44, height: 44, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 22 }}>
                  {num}
                </div>
                <h3 style={{ fontSize: 25, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "#cbd5e1", lineHeight: 1.55 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f172a", padding: "55px 24px" }}>
        <div
          className="glassCard"
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "32px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 18,
            textAlign: "center",
          }}
        >
          {[
            ["24/7", "Emergency Response"],
            ["CT", "Local Service Area"],
          ].map(([big, small]) => (
            <div key={big}>
              <div style={{ fontSize: 38, fontWeight: 900, color: "#d9ff3f" }}>{big}</div>
              <div style={{ color: "#cbd5e1", fontWeight: 800 }}>{small}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="insurance" style={{ background: "#050b14", padding: "70px 24px", textAlign: "center" }}>
        <div
          className="premiumCard"
          style={{
            maxWidth: 980,
            margin: "0 auto",
            padding: "40px 24px",
          }}
        >
          <div style={{ fontSize: 44, marginBottom: 12 }}>🛡️</div>

          <h3
            className="insuranceGlowText"
            style={{
              fontSize: 30,
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
              "We File Your Insurance Claim",
              "Handle Most of the Process",
              "Insurance Documentation",
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

      <section id="areas" style={{ background: "#0f172a", padding: "76px 24px" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 46, marginBottom: 12 }}>Service Areas</h2>
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

      <section style={{ padding: "70px 24px 90px", textAlign: "center", background: "#050b14" }}>
        <h2 className="bottomTitle" style={{ fontSize: 48 }}>Need Water Cleanup Now?</h2>
        <p style={{ fontSize: 22, color: "#cbd5e1" }}>
          Call <strong style={{ color: "#ffffff", fontWeight: 950 }}>E.D.W.A.R.D.</strong> Water Restoration today.
        </p>
        <a
          href="tel:18559835663"
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "linear-gradient(90deg, #d9ff3f, #ffffff, #d9ff3f)",
            color: "#07111f",
            padding: "18px 32px",
            borderRadius: 999,
            fontWeight: 900,
            textDecoration: "none",
            fontSize: 22,
            boxShadow: "0 0 30px #d9ff3f",
          }}
        >
          📱 Call 1 (855) WTFLOOD
        </a>
      </section>

      <section id="message" style={{ background: "#0f172a", padding: "66px 24px 130px" }}>
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <h2 className="messageTitle" style={{ fontSize: 44, textAlign: "center", marginBottom: 10 }}>
            Message Us
          </h2>

          <p style={{ fontSize: 20, color: "#cbd5e1", textAlign: "center", marginBottom: 25 }}>
            Send us your information and we’ll call you momentarily.
          </p>

          <form
            action="https://formsubmit.co/kenedjr24@yahoo.com"
            method="POST"
            className="glassCard"
            style={{
              padding: 30,
              display: "grid",
              gap: 16,
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
                background: "rgba(15,23,42,0.92)",
                border: "1px solid rgba(34,211,238,0.35)",
                borderRadius: 14,
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
                I agree to receive conversational and customer care SMS messages from <strong style={{ color: "#ffffff" }}>E.D.W.A.R.D. Water Restoration</strong> regarding my service request, scheduling, technician arrival updates, and restoration updates. Message frequency varies. Message & data rates may apply. Reply <strong style={{ color: "#ffffff" }}>STOP</strong> to opt out. Reply <strong style={{ color: "#ffffff" }}>HELP</strong> for assistance. See our <a className="legalLink" href="#privacy-policy">Privacy Policy</a> and <a className="legalLink" href="#terms-and-conditions">Terms & Conditions</a>.
              </span>
            </label>

            <p style={{ margin: "-6px 0 2px", color: "#94a3b8", fontSize: 12, lineHeight: 1.4 }}>
              Your information is used only to respond to your request. Customer information is not shared with third parties for marketing or promotional purposes.
            </p>

            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #d9ff3f, #ffffff, #d9ff3f)",
                color: "#07111f",
                padding: "18px",
                borderRadius: 16,
                fontWeight: 900,
                fontSize: 20,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 28px #d9ff3f",
              }}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      <section id="privacy-policy" style={{ background: "#050b14", padding: "76px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div className="glassCard legalBox" style={{ padding: "34px 28px" }}>
            <div style={{ color: "#22d3ee", fontWeight: 900, letterSpacing: 2, marginBottom: 10 }}>CUSTOMER PRIVACY</div>
            <h2 className="legalSectionTitle">Privacy Policy</h2>
            <p style={{ color: "#94a3b8", marginTop: 0 }}>Effective Date: May 2026</p>

            <p>
              E.D.W.A.R.D. Water Restoration values your privacy and is committed to protecting your personal information.
            </p>

            <h3>Information We Collect</h3>
            <p>We may collect customer information such as:</p>
            <ul>
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address</li>
              <li>Service request information</li>
              <li>Insurance-related information voluntarily provided by the customer</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>We use your information to respond to service requests, schedule appointments, provide restoration updates, coordinate drying and mitigation services, communicate about estimates or invoices, and provide customer support.</p>

            <h3>SMS / Text Messaging Policy</h3>
            <p>
              By providing your phone number, you consent to receive conversational and customer care text messages from E.D.W.A.R.D. Water Restoration regarding emergency water cleanup requests, appointment scheduling, technician arrival updates, drying equipment monitoring, job progress updates, and customer support communications.
            </p>
            <p>Message frequency may vary.</p>
            <p>Message and data rates may apply.</p>
            <p>Reply STOP to opt out.</p>
            <p>Reply HELP for assistance.</p>
            <p>
              Customer information is not shared with third parties for marketing or promotional purposes.
            </p>

            <h3>Data Protection</h3>
            <p>
              We implement reasonable security measures to protect customer information from unauthorized access or disclosure.
            </p>

            <h3>Third-Party Services</h3>
            <p>
              We may use third-party communication and business service providers to assist with scheduling, messaging, customer support, and website operations.
            </p>

            <h3>Contact Information</h3>
            <p>
              E.D.W.A.R.D. Water Restoration<br />
              24/7 Emergency Water Cleanup & Restoration<br />
              Phone: <a className="legalLink" href="tel:18559835663">1 (855) 983-5663</a><br />
              Website: https://edwardrestoration.com
            </p>
          </div>
        </div>
      </section>

      <section id="terms-and-conditions" style={{ background: "#0f172a", padding: "76px 24px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div className="glassCard legalBox" style={{ padding: "34px 28px" }}>
            <div style={{ color: "#22d3ee", fontWeight: 900, letterSpacing: 2, marginBottom: 10 }}>CUSTOMER TERMS</div>
            <h2 className="legalSectionTitle">Terms & Conditions</h2>
            <p style={{ color: "#94a3b8", marginTop: 0 }}>Effective Date: May 2026</p>

            <p>
              By using the services or website of E.D.W.A.R.D. Water Restoration, you agree to the following terms and conditions.
            </p>

            <h3>Service Communication</h3>
            <p>
              By submitting a form or contacting E.D.W.A.R.D. Water Restoration, you consent to receive phone calls and SMS text messages regarding service requests, emergency response, appointment scheduling, technician arrival updates, restoration progress updates, and customer support.
            </p>
            <p>Message frequency may vary.</p>
            <p>Message and data rates may apply.</p>
            <p>Reply STOP to opt out.</p>
            <p>Reply HELP for assistance.</p>

            <h3>Emergency Services</h3>
            <p>
              E.D.W.A.R.D. Water Restoration provides emergency response services based on availability, weather conditions, and operational capacity.
            </p>

            <h3>Estimates & Insurance</h3>
            <p>
              Estimates may vary depending on project scope, insurance approvals, hidden damage, and additional mitigation requirements.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              E.D.W.A.R.D. Water Restoration is not responsible for damages caused by pre-existing conditions, structural defects, or delays outside of operational control.
            </p>

            <h3>Contact Information</h3>
            <p>
              E.D.W.A.R.D. Water Restoration<br />
              Phone: <a className="legalLink" href="tel:18559835663">1 (855) 983-5663</a><br />
              Website: https://edwardrestoration.com
            </p>
          </div>
        </div>
      </section>

      <footer style={{ background: "#050b14", borderTop: "1px solid rgba(34,211,238,0.24)", padding: "38px 20px 92px", textAlign: "center" }}>
        <img
          src="/iicrc-certified-technicians-clean.png"
          alt="IICRC Certified Technicians"
          style={{
            maxWidth: "190px",
            width: "100%",
            height: "auto",
            opacity: 0.92,
            filter: "drop-shadow(0 0 12px rgba(34, 211, 238, 0.42))",
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

        <div style={{ display: "flex", justifyContent: "center", gap: 18, flexWrap: "wrap", marginTop: 18 }}>
          <a className="legalLink" href="#privacy-policy">Privacy Policy</a>
          <a className="legalLink" href="#terms-and-conditions">Terms & Conditions</a>
        </div>
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
          background: "linear-gradient(90deg, #d9ff3f, #ffffff, #d9ff3f)",
          color: "#07111f",
          padding: "16px 22px",
          borderRadius: 999,
          fontWeight: 900,
          textDecoration: "none",
          fontSize: 18,
          boxShadow: "0 0 28px #d9ff3f",
          zIndex: 9999,
        }}
      >
        📱 Call Now
      </a>
    </main>
  );
}
