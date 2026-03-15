export default function WhiteboardPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="font-display text-[24px] leading-tight text-cream">
          Whiteboard
        </h2>
        <p className="max-w-2xl text-[13px] text-tan">
          Collaborative whiteboards for quick visual thinking.
        </p>
      </header>

      <div className="rounded-xl border border-hairline bg-surface p-4">
        <div className="text-[11px] tracking-[0.04em] text-tan">
          Coming next: tldraw canvas, shared cursors, and persistence.
        </div>
      </div>
    </div>
  )
}

