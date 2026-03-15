import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function ChannelPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const { slug } = params
  const title = slug.join("/")

  return (
    <section className="flex min-h-[560px] flex-col rounded-xl border border-hairline bg-surface">
      <header className="px-4 py-3">
        <div className="font-display text-[18px] leading-tight text-cream">
          {title.startsWith("dm/") ? "DM" : "#channel"}
          <span className="text-tan"> · </span>
          <span className="text-parchment">{title}</span>
        </div>
        <div className="text-[11px] tracking-[0.04em] text-tan">
          Placeholder view for routed channels and DMs.
        </div>
      </header>
      <Separator className="bg-hairline" />

      <div className="flex-1 p-4">
        <div className="rounded-lg border border-hairline bg-panel p-3 text-[11px] tracking-[0.04em] text-tan">
          Next: messages, threads, mentions, and realtime sync.
        </div>
      </div>

      <div className="border-t border-hairline p-3">
        <Input placeholder={`Message ${title}…`} className="h-10" />
      </div>
    </section>
  )
}
