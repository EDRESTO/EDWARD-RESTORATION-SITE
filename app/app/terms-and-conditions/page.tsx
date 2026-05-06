export default function TermsPage() {
  return (
    <main
      style={{
        background: "#050b14",
        color: "white",
        minHeight: "100vh",
        padding: "60px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#0f172a",
          border: "1px solid #164e63",
          borderRadius: 24,
          padding: 32,
        }}
      >
        <h1 style={{ color: "#d9ff3f" }}>Terms & Conditions</h1>

        <p>Effective Date: May 2026</p>

        <p>
          By using the services or website of E.D.W.A.R.D. Water Restoration,
          you agree to the following terms and conditions.
        </p>

        <h2 style={{ color: "#22d3ee" }}>SMS Communications</h2>

        <p>
          By submitting a form or contacting E.D.W.A.R.D. Water Restoration,
          you consent to receive SMS communications regarding service requests,
          scheduling, and restoration updates.
        </p>

        <p>Message frequency may vary.</p>

        <p>Message and data rates may apply.</p>

        <p>Reply STOP to opt out.</p>

        <p>Reply HELP for assistance.</p>

        <a
          href="/"
          style={{
            color: "#d9ff3f",
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
