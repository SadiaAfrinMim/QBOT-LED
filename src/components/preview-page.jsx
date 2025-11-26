"use client"

import MatrixDisplay from "./matrix-display"

export default function PreviewPage({ config, onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)" }}>
      <header
        style={{
          borderBottom: "1px solid rgba(255, 107, 53, 0.2)",
          background: "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <button
            onClick={onBack}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              color: "#999999",
              background: "transparent",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "white"
              e.target.style.background = "rgba(255, 255, 255, 0.05)"
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#999999"
              e.target.style.background = "transparent"
            }}
          >
            ← Back
          </button>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "white" }}>Live Preview</h2>
        </div>
      </header>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 16px" }}>
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              fontFamily: "Playfair Display, serif",
              color: "white",
              marginBottom: "8px",
              letterSpacing: "-1px",
            }}
          >
            Display Preview
          </h1>
          <p style={{ fontSize: "16px", color: "#999999", fontWeight: "300" }}>
            See how your configuration will appear on the LED matrix
          </p>
        </div>

        <MatrixDisplay config={config} />
      </div>
    </div>
  )
}
