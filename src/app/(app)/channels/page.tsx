import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const messages = [
  { id: 1, name: "Asha", time: "11:08", text: "Morning — shipping checklist is ready." },
  { id: 2, name: "Ravi", time: "11:12", text: "Nice. I’ll review the Kanban swimlanes today." },
  { id: 3, name: "Mina", time: "11:18", text: "Docs outline is up. Threads are open for edits." },
]

export default function ChannelsPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
      <section className="flex min-h-[560px] flex-col rounded-xl border border-hairline bg-surface">
        <header className="px-4 py-3">
          <div className="font-display text-[18px] leading-tight text-cream">
            #general
          </div>
          <div className="text-[11px] tracking-[0.04em] text-tan">
            Threads, mentions, and quick decisions.
          </div>
        </header>
        <Separator className="bg-hairline" />

        <div className="flex-1 space-y-4 overflow-auto px-4 py-4">
          {messages.map((m) => (
            <div key={m.id} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <div className="text-[13px] text-parchment">{m.name}</div>
                <div className="text-[11px] tracking-[0.04em] text-tan">
                  {m.time}
                </div>
              </div>
              <div className="text-[13px] text-tan">{m.text}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-hairline p-3">
          <Input
            placeholder="Message #general…"
            className="h-10"
            aria-label="Message composer"
          />
        </div>
      </section>

      <aside className="rounded-xl border border-hairline bg-surface p-4">
        <div className="font-display text-[18px] leading-tight text-cream">
          Thread
        </div>
        <div className="mt-1 text-[11px] tracking-[0.04em] text-tan">
          Replies and context live here.
        </div>
        <div className="mt-4 rounded-lg border border-hairline bg-panel p-3">
          <div className="text-[11px] tracking-[0.04em] text-tan">
            Select a message to open its thread.
          </div>
        </div>
      </aside>
    </div>
  )
}

