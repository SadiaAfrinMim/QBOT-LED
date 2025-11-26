"use client"

import { useState } from "react"
import Header from "./header"
import ConnectionSettings from "./connection-settings"
import TextSettings from "./text-settings"
import TokenCounterSettings from "./token-counter-settings"

export default function ConfigurationPage({ config, setConfig, onPreview }) {
  const [expandedSection, setExpandedSection] = useState("connection")

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)" }}
    >
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Premium Title Section */}
        <div className="mb-16">
          <div className="space-y-3">
            <div
              style={{
                fontSize: "56px",
                fontWeight: "700",
                fontFamily: "Playfair Display, serif",
                letterSpacing: "-1px",
              }}
            >
              QBOT LED Matrix
            </div>
            <div style={{ fontSize: "18px", color: "#999999", fontFamily: "Inter, sans-serif", fontWeight: "300" }}>
              Precision LED Display Configuration System
            </div>
          </div>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, #FF6B35 0%, transparent 100%)",
              marginTop: "20px",
            }}
          ></div>
        </div>

        {/* Configuration Sections */}
        <div className="space-y-6 mb-12">
          <ConnectionSettings
            config={config}
            setConfig={setConfig}
            expanded={expandedSection === "connection"}
            onToggle={() => setExpandedSection(expandedSection === "connection" ? null : "connection")}
          />

          <TextSettings
            config={config}
            setConfig={setConfig}
            expanded={expandedSection === "text"}
            onToggle={() => setExpandedSection(expandedSection === "text" ? null : "text")}
          />

          <TokenCounterSettings
            config={config}
            setConfig={setConfig}
            expanded={expandedSection === "tokenCounter"}
            onToggle={() => setExpandedSection(expandedSection === "tokenCounter" ? null : "tokenCounter")}
          />
        </div>

        {/* Premium Preview Button */}
        <div className="flex justify-end">
          <button
            onClick={onPreview}
            style={{
              padding: "16px 40px",
              background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              letterSpacing: "0.5px",
              boxShadow: "0 8px 24px rgba(255, 107, 53, 0.3)",
            }}
            onMouseEnter={(e) => (e.target.style.boxShadow = "0 12px 32px rgba(255, 107, 53, 0.5)")}
            onMouseLeave={(e) => (e.target.style.boxShadow = "0 8px 24px rgba(255, 107, 53, 0.3)")}
          >
            Preview Display →
          </button>
        </div>
      </div>
    </div>
  )
}
