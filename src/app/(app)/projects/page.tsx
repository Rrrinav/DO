import { cn } from "@/lib/utils"

const board = [
  {
    id: "now",
    name: "Now",
    active: true,
    cards: ["Presence list", "Channel threads", "Kanban shell"],
  },
  {
    id: "next",
    name: "Next",
    active: false,
    cards: ["LiveKit rooms", "Calendar events", "Doc editor"],
  },
  {
    id: "later",
    name: "Later",
    active: false,
    cards: ["Whiteboard sync", "Notifications", "Workspace roles"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="font-display text-[24px] leading-tight text-cream">
          Projects
        </h2>
        <p className="max-w-2xl text-[13px] text-tan">
          Kanban boards with live card updates.
        </p>
      </header>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {board.map((column) => (
          <div
            key={column.id}
            className="w-[320px] shrink-0 rounded-xl border border-hairline bg-panel"
          >
            <div
              className={cn(
                "px-4 py-3",
                column.active && "border-t border-kanban-active-top"
              )}
            >
              <div className="flex items-baseline justify-between">
                <div className="text-[13px] text-parchment">{column.name}</div>
                <div className="text-[11px] tracking-[0.04em] text-tan">
                  {column.cards.length}
                </div>
              </div>
            </div>
            <div className="space-y-3 px-4 pb-4">
              {column.cards.map((title) => (
                <div
                  key={title}
                  className="rounded-xl border border-hairline bg-surface p-3 transition-colors duration-150 ease-out hover:bg-elevated"
                >
                  <div className="text-[13px] text-parchment">{title}</div>
                  <div className="mt-1 text-[11px] tracking-[0.04em] text-tan">
                    Assigned · Mention · Due
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

