"use client"

import { Tldraw } from "@tldraw/tldraw"
import "@tldraw/tldraw/tldraw.css"

export default function WhiteboardPage() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <header className="shrink-0 space-y-1">
        <h2 className="font-display text-[24px] leading-tight text-cream">
          Whiteboard
        </h2>
        <p className="max-w-2xl text-[13px] text-tan">
          Collaborative whiteboards for quick visual thinking.
        </p>
      </header>

      {/* The tldraw component needs a container with explicit dimensions.
        We use flex-1 to fill the remaining space and min-h to ensure 
        it doesn't collapse on smaller screens.
      */}
      <div className="relative min-h-[600px] flex-1 overflow-hidden rounded-xl border border-hairline bg-surface">
        <Tldraw 
          inferDarkMode={true} 
          className="z-0"
        />
      </div>
    </div>
  )
}
