"use client"

import { useState } from "react"
import ConfigurationPage from "./components/configuration-page"
import PreviewPage from "./components/preview-page"

export default function App() {
  const [currentPage, setCurrentPage] = useState("config")
  const [config, setConfig] = useState({
    displayId: "",
    port: "",
    baudRate: "9600",
    welcomeText: "Welcome",
    welcomeColor: "#FF0000",
    welcomeFont: "crimson-text",
    secondaryText: "",
    secondaryColor: "#00FF00",
    secondaryEnabled: false,
    tokenValue: "",
    counterValue: "",
    boxColor: "#FF0000",
    counterColor: "#00FF00",
    tokenColor: "#FFFF00",
  })

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)" }}
    >
      {currentPage === "config" ? (
        <ConfigurationPage config={config} setConfig={setConfig} onPreview={() => setCurrentPage("preview")} />
      ) : (
        <PreviewPage config={config} onBack={() => setCurrentPage("config")} />
      )}
    </div>
  )
}
