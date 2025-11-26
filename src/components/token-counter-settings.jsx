"use client"

import { ChevronDown } from "lucide-react"

export default function TokenCounterSettings({ config, setConfig, expanded, onToggle }) {
  const colorPalette = [
    { name: "Red", value: "#FF0000" },
    { name: "Green", value: "#00FF00" },
    { name: "Blue", value: "#0000FF" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Orange", value: "#FF6600" },
    { name: "Magenta", value: "#FF00FF" },
  ]

  // ROUND CIRCLE COLOR SELECTOR
  const ColorSelector = ({ label, selectedColor, onColorChange }) => (
    <div
      style={{
        padding: "14px",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.02)",
        marginBottom: "12px",
      }}
    >
      <p style={{ fontSize: "12px", fontWeight: "600", color: "white", marginBottom: "10px" }}>{label}</p>

      {/* CURRENT COLOR PREVIEW */}
      <div style={{ marginBottom: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: selectedColor,
            border: "2px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        />
        <span style={{ fontSize: "12px", color: "#999999", fontFamily: "monospace" }}>{selectedColor}</span>
      </div>

      {/* ROUND PALETTE ONLY */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          paddingTop: "8px",
        }}
      >
        {colorPalette.map((color) => (
          <button
            key={color.value}
            onClick={() => onColorChange(color.value)}
            title={color.name}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%", // ROUND SHAPE
              backgroundColor: color.value,
              border: selectedColor === color.value ? "2px solid white" : "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow:
                selectedColor === color.value ? "0 4px 12px rgba(0, 0, 0, 0.4)" : "0 2px 8px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.15)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        ))}
      </div>
    </div>
  )

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
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, rgba(147, 112, 219, 0.4) 0%, rgba(147, 112, 219, 0.1) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            🎫
          </div>
          <div>
            <h3 style={{ fontWeight: "600", color: "white", fontSize: "15px" }}>Token & Counter</h3>
            <p style={{ fontSize: "12px", color: "#999999", marginTop: "4px" }}>
              Set token value, counter number, and colors
            </p>
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
          {/* TOKEN FIELD */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", color: "white", marginBottom: "8px", fontSize: "13px", fontWeight: "600" }}>
              Token Value
            </label>
            <input
              type="text"
              value={config.tokenValue}
              onChange={(e) => setConfig({ ...config, tokenValue: e.target.value })}
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "white",
                marginBottom: "12px",
              }}
            />
            <ColorSelector
              label="Token Color"
              selectedColor={config.tokenColor}
              onColorChange={(color) => setConfig({ ...config, tokenColor: color })}
            />
          </div>

          {/* COUNTER FIELD */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", color: "white", marginBottom: "8px", fontSize: "13px", fontWeight: "600" }}>
              Counter Number
            </label>
            <input
              type="text"
              value={config.counterValue}
              onChange={(e) => setConfig({ ...config, counterValue: e.target.value })}
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "white",
                marginBottom: "12px",
              }}
            />
            <ColorSelector
              label="Counter Color"
              selectedColor={config.counterColor}
              onColorChange={(color) => setConfig({ ...config, counterColor: color })}
            />
          </div>

          {/* BOX COLOR */}
          <div>
            <label style={{ display: "block", color: "white", marginBottom: "8px", fontSize: "13px", fontWeight: "600" }}>
              Box Color
            </label>
            <ColorSelector
              label="Select Box Color"
              selectedColor={config.boxColor}
              onColorChange={(color) => setConfig({ ...config, boxColor: color })}
            />
          </div>
        </div>
      )}
    </div>
  )
}
