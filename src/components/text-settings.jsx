"use client"

import { ChevronDown } from "lucide-react"

export default function TextSettings({ config, setConfig, expanded, onToggle }) {
  const colors = [
    { name: "Red", value: "#FF0000" },
    { name: "Green", value: "#00FF00" },
    { name: "Yellow", value: "#FFFF00" },
  ]

  const fonts = [
    { name: "Crimson Text", value: "crimson-text", family: "'Crimson Text', serif" },
    { name: "Poppins", value: "poppins", family: "'Poppins', sans-serif" },
    { name: "Inter", value: "inter", family: "'Inter', sans-serif" },
    { name: "Playfair", value: "playfair", family: "'Playfair Display', serif" },
    { name: "Roboto Mono", value: "roboto-mono", family: "'Roboto Mono', monospace" },
  ]

  return (
    <div
      style={{
        border: expanded ? "1px solid rgba(255, 107, 53, 0.4)" : "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
        background: "rgba(255, 107, 53, 0.05)",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", textAlign: "left" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              boxShadow: "0 4px 12px rgba(255, 107, 53, 0.2)",
            }}
          >
            ✏️
          </div>
          <div>
            <h3 style={{ fontWeight: "600", color: "white", fontSize: "15px" }}>Text Settings</h3>
            <p style={{ fontSize: "12px", color: "#999999", marginTop: "4px" }}>Configure welcome & secondary text</p>
          </div>
        </div>
        <ChevronDown
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
        />
      </button>

      {expanded && (
        <div
          style={{
            padding: "20px 24px",
            borderTop: "1px solid rgba(255, 107, 53, 0.2)",
            background: "rgba(10, 10, 10, 0.5)",
          }}
        >
          {/* Font Selection */}
          <div
            style={{
              marginBottom: "24px",
              padding: "16px",
              borderRadius: "10px",
              background: "rgba(255, 107, 53, 0.08)",
              border: "1px solid rgba(255, 107, 53, 0.2)",
            }}
          >
            <label
              style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "white", marginBottom: "12px" }}
            >
              Popular Fonts
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {fonts.map((font) => (
                <button
                  key={font.value}
                  onClick={() => setConfig({ ...config, welcomeFont: font.value })}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "600",
                    border:
                      config.welcomeFont === font.value ? "2px solid #FF6B35" : "2px solid rgba(255, 255, 255, 0.1)",
                    background:
                      config.welcomeFont === font.value ? "rgba(255, 107, 53, 0.2)" : "rgba(255, 255, 255, 0.03)",
                    color: "white",
                    cursor: "pointer",
                    fontFamily: font.family,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (config.welcomeFont !== font.value) e.target.style.borderColor = "rgba(255, 107, 53, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    if (config.welcomeFont !== font.value) e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {font.name}
                </button>
              ))}
            </div>
          </div>

          {/* Welcome Text Section */}
          <div
            style={{
              marginBottom: "24px",
              padding: "16px",
              borderRadius: "10px",
              background: "rgba(255, 107, 53, 0.1)",
              border: "1px solid rgba(255, 107, 53, 0.3)",
            }}
          >
           
            <input
              type="text"
              value={config.welcomeText}
              onChange={(e) => setConfig({ ...config, welcomeText: e.target.value })}
              placeholder="Your Text"
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                outline: "none",
                marginBottom: "12px",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255, 107, 53, 0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")}
            />
            <p style={{ fontSize: "11px", fontWeight: "600", color: "#999999", marginBottom: "8px" }}>Text Color</p>
            <div style={{ display: "flex", gap: "12px" }}>
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setConfig({ ...config, welcomeColor: color.value })}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: color.value,
                    border:
                      config.welcomeColor === color.value ? "3px solid white" : "2px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Secondary Text Section */}
          <div
            style={{
              padding: "16px",
              borderRadius: "10px",
              background: "rgba(76, 175, 80, 0.1)",
              border: "1px solid rgba(76, 175, 80, 0.3)",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}
            >
              <label style={{ fontSize: "13px", fontWeight: "700", color: "white" }}>Secondary Text</label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={config.secondaryEnabled}
                  onChange={(e) => setConfig({ ...config, secondaryEnabled: e.target.checked })}
                  style={{ width: "18px", height: "18px", cursor: "pointer", accentColor: "#4CAF50" }}
                />
                <span style={{ fontSize: "11px", fontWeight: "600", color: "#999999" }}>Enable</span>
              </label>
            </div>
            <input
              type="text"
              value={config.secondaryText}
              onChange={(e) => setConfig({ ...config, secondaryText: e.target.value })}
              placeholder="Your Text"
              disabled={!config.secondaryEnabled}
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: config.secondaryEnabled ? "white" : "#666666",
                fontSize: "14px",
                fontWeight: "600",
                outline: "none",
                marginBottom: "12px",
                opacity: config.secondaryEnabled ? 1 : 0.5,
                cursor: config.secondaryEnabled ? "text" : "not-allowed",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(76, 175, 80, 0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")}
            />
            <p style={{ fontSize: "11px", fontWeight: "600", color: "#999999", marginBottom: "8px" }}>Text Color</p>
            <div style={{ display: "flex", gap: "12px" }}>
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setConfig({ ...config, secondaryColor: color.value })}
                  disabled={!config.secondaryEnabled}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: color.value,
                    border:
                      config.secondaryColor === color.value ? "3px solid white" : "2px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    cursor: config.secondaryEnabled ? "pointer" : "not-allowed",
                    opacity: config.secondaryEnabled ? 1 : 0.5,
                    transition: "all 0.2s ease",
                  }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
