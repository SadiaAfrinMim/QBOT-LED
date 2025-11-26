"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ConnectionSettings({ config, setConfig, expanded, onToggle }) {
  const baudRates = ["9600", "19200", "38400", "57600", "115200"];

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
              background: "linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 107, 53, 0.05) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            ⚙️
          </div>
          <div>
            <h3 style={{ fontWeight: "600", color: "white", fontSize: "15px" }}>Connection Settings</h3>
            <p style={{ fontSize: "12px", color: "#999999", marginTop: "4px" }}>
              Configure display ID, port, and baud rate
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
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Display ID */}
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "white", marginBottom: "8px" }}>
              Display ID
            </label>
            <input
              type="text"
              value={config.displayId}
              onChange={(e) => setConfig({ ...config, displayId: e.target.value })}
              placeholder="Enter Display ID"
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "white",
                fontSize: "14px",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255, 107, 53, 0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")}
            />
          </div>

          {/* Port */}
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "white", marginBottom: "8px" }}>
              Select Port
            </label>
            <input
              type="text"
              value={config.port}
              onChange={(e) => setConfig({ ...config, port: e.target.value })}
              placeholder="e.g., COM3 or /dev/ttyUSB0"
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "white",
                fontSize: "14px",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255, 107, 53, 0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.1)")}
            />
          </div>

          {/* Baud Rate Buttons */}
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "white", marginBottom: "8px" }}>
              Baud Rate
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))", gap: "8px" }}>
              {baudRates.map((rate) => (
                <button
                  key={rate}
                  onClick={() => setConfig({ ...config, baudRate: rate })}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "14px",
                    cursor: "pointer",
                    border: "none",
                    background: config.baudRate === rate ? "#FF6B35" : "rgba(255,255,255,0.1)",
                    color: config.baudRate === rate ? "white" : "#fff",
                    boxShadow: config.baudRate === rate ? "0 4px 6px rgba(0,0,0,0.2)" : "none",
                    transform: config.baudRate === rate ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {rate}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
