"use client"

import { ChevronDown } from "lucide-react"

export default function ColorSettings({ config, setConfig, expanded, onToggle }) {
  return (
    <div className="border border-border rounded-lg bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <span className="text-blue-500 text-lg">🎨</span>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-foreground">Additional Settings</h3>
            <p className="text-xs text-muted-foreground">Fine-tune display appearance</p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      {expanded && (
        <div className="px-6 py-4 border-t border-border/50 bg-background/30 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-sm text-muted-foreground">All color settings are configured in the sections above.</p>
        </div>
      )}
    </div>
  )
}
