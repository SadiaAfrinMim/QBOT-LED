"use client";

export default function MatrixDisplay({ config }) {
  const getFontStyle = (fontFamily) => {
    const fontMap = {
      "crimson-text": "'Crimson Text', serif",
      poppins: "'Poppins', sans-serif",
      inter: "'Inter', sans-serif",
      playfair: "'Playfair Display', serif",
      "roboto-mono": "'Roboto Mono', monospace",
    };
    return fontMap[fontFamily] || "'Crimson Text', serif";
  };

  return (
    <div className="space-y-8 p-4 md:p-8 bg-black/90 min-h-screen">
      {/* Welcome Text */}
      {config.welcomeText && (
        <div className="rounded-3xl p-8 shadow-2xl border-2 border-orange-500 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-950 transform hover:scale-105 transition-transform duration-300">
          <div className="p-8 rounded-2xl border border-gray-700 bg-black/60 backdrop-blur-sm">
            <p
              className="text-6xl md:text-7xl font-extrabold tracking-wider text-center neon-text"
              style={{
                color: config.welcomeColor || "#f59e0b",
                fontFamily: getFontStyle(config.fontFamily),
              }}
            >
              {config.welcomeText}
            </p>
          </div>
        </div>
      )}

      {/* Secondary Text */}
      {config.secondaryEnabled && config.secondaryText && (
        <div className="rounded-3xl p-6 shadow-2xl border-2 border-green-500 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-950 transform hover:scale-105 transition-transform duration-300">
          <p className="text-sm font-bold mb-4 text-green-300 tracking-wide">Secondary Text</p>
          <div className="p-6 rounded-2xl border border-gray-700 bg-black/60 backdrop-blur-sm">
            <p
              className="text-5xl md:text-6xl font-bold tracking-wider text-center neon-text"
              style={{
                color: config.secondaryColor || "#4ade80",
                fontFamily: getFontStyle(config.fontFamily),
              }}
            >
              {config.secondaryText}
            </p>
          </div>
        </div>
      )}

      {/* Token & Counter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {config.tokenValue && (
          <div className="border rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-black/70 border-gray-600">
            <p className="text-sm mb-3 font-medium text-gray-400">Token</p>
            <div
              className="p-6 rounded-2xl text-center border-2 backdrop-blur-sm"
              style={{
                borderColor: config.boxColor || "#22c55e",
                backgroundColor: config.boxColor ? config.boxColor + "20" : "#22c55e20",
              }}
            >
              <p className="text-4xl md:text-5xl font-mono font-bold" style={{ color: config.tokenColor || "#22c55e" }}>
                {config.tokenValue}
              </p>
            </div>
          </div>
        )}

        {config.counterValue && (
          <div className="border rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-black/70 border-gray-600">
            <p className="text-sm mb-3 font-medium text-gray-400">Counter</p>
            <div
              className="p-6 rounded-2xl text-center border-2 backdrop-blur-sm"
              style={{
                borderColor: config.boxColor || "#3b82f6",
                backgroundColor: config.boxColor ? config.boxColor + "20" : "#3b82f620",
              }}
            >
              <p className="text-4xl md:text-5xl font-mono font-bold" style={{ color: config.counterColor || "#3b82f6" }}>
                {config.counterValue}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Configuration Summary */}
      <div className="border rounded-3xl p-6 shadow-lg bg-black/60 border-gray-600 backdrop-blur-sm">
        <p className="text-sm mb-4 font-bold text-gray-400 tracking-wide">Configuration Summary</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Display ID</p>
            <p className="font-bold text-white">{config.displayId || "Not set"}</p>
          </div>
          <div>
            <p className="text-gray-500">Baud Rate</p>
            <p className="font-bold text-white">{config.baudRate || "Not set"}</p>
          </div>
          <div>
            <p className="text-gray-500">Port</p>
            <p className="font-bold text-white">{config.port || "Not set"}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow:
            0 0 4px rgba(255,255,255,0.2),
            0 0 8px rgba(255,255,255,0.15),
            0 0 12px rgba(255,255,255,0.1),
            0 0 24px rgba(255,165,0,0.4);
        }
      `}</style>
    </div>
  );
}
