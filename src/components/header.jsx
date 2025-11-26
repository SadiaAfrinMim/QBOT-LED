export default function Header() {
  return (
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
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
            }}
          >
            <span style={{ fontSize: "24px", fontWeight: "700", color: "white" }}>Q</span>
          </div>
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: "700", color: "white", letterSpacing: "-0.5px" }}>QBOT LED</h1>
            <p style={{ fontSize: "12px", color: "#999999", marginTop: "2px" }}>Matrix Configuration</p>
          </div>
        </div>
      </div>
    </header>
  )
}
