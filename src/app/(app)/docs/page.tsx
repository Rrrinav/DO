const docs = [
  { id: "handbook", title: "Team Handbook", updated: "Today" },
  { id: "launch", title: "Launch Notes", updated: "Yesterday" },
  { id: "infra", title: "Infra Runbook", updated: "3 days ago" },
]

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="font-display text-[24px] leading-tight text-cream">
          Docs
        </h2>
        <p className="max-w-2xl text-[13px] text-tan">
          Collaborative docs with real-time editing.
        </p>
      </header>

      <div className="space-y-2">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between rounded-xl border border-hairline bg-surface px-4 py-3 transition-colors duration-150 ease-out hover:bg-elevated"
          >
            <div className="space-y-0.5">
              <div className="text-[13px] text-parchment">{doc.title}</div>
              <div className="text-[11px] tracking-[0.04em] text-tan">
                Updated {doc.updated}
              </div>
            </div>
            <div className="text-[11px] tracking-[0.04em] text-slate">Open</div>
          </div>
        ))}
      </div>
    </div>
  )
}

