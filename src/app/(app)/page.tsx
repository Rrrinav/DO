import { PresenceDot } from "@/components/app/presence-dot"
import { cn } from "@/lib/utils"

const rooms = [
  { id: "lobby", name: "Lobby", people: 8, active: true },
  { id: "design", name: "Design Studio", people: 3, active: false },
  { id: "war-room", name: "War Room", people: 5, active: false },
  { id: "quiet", name: "Quiet Desk", people: 2, active: false },
  { id: "support", name: "Support", people: 1, active: false },
  { id: "kitchen", name: "Kitchen", people: 4, active: false },
]

export default function OfficePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h2 className="font-display text-[24px] leading-tight text-cream">
          Virtual Office
        </h2>
        <p className="max-w-2xl text-[13px] text-tan">
          Presence, rooms, chat, and boards sync in real time — one workspace,
          one shared layer.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={cn(
              "relative overflow-hidden rounded-xl border border-hairline bg-surface p-4 transition-colors duration-150 ease-out hover:bg-elevated",
              room.active &&
                "before:pointer-events-none before:absolute before:inset-[-40%] before:bg-[radial-gradient(circle_at_center,_rgba(122,158,126,0.04)_0%,_transparent_60%)]"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-0.5">
                <div className="font-sans text-[13px] text-parchment">
                  {room.name}
                </div>
                <div className="text-[11px] tracking-[0.04em] text-tan">
                  Always-on video room
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] tracking-[0.04em] text-tan">
                <PresenceDot status={room.active ? "online" : "idle"} />
                <span>{room.people} here</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-[11px] tracking-[0.04em] text-tan">
                {room.active ? "You’re here" : "Jump in"}
              </div>
              <div className="text-[11px] tracking-[0.04em] text-slate">
                Join
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

