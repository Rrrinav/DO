"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { PresenceDot, type PresenceStatus } from "@/components/app/presence-dot"
import { cn } from "@/lib/utils"

type SidebarLinkProps = {
  href: string
  children: ReactNode
  match?: "exact" | "prefix"
}

function SidebarLink({ href, children, match = "exact" }: SidebarLinkProps) {
  const pathname = usePathname() ?? "/"
  const isActive =
    match === "exact"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between rounded-lg px-2 py-1.5 font-sans text-[13px] text-tan transition-colors duration-150 ease-out hover:bg-field hover:text-beige",
        isActive && "bg-active-row text-parchment hover:bg-active-row"
      )}
    >
      {children}
    </Link>
  )
}

const dms: Array<{ name: string; href: string; status: PresenceStatus }> = [
  { name: "Asha", href: "/channels/dm/asha", status: "online" },
  { name: "Ravi", href: "/channels/dm/ravi", status: "idle" },
  { name: "Mina", href: "/channels/dm/mina", status: "offline" },
]

export function AppSidebar() {
  return (
    <aside className="flex w-[280px] shrink-0 flex-col border-r border-hairline bg-panel p-4">
      <div className="space-y-1 pb-4">
        <div className="font-display text-[18px] leading-none text-cream">
          Digital Office
        </div>
        <div className="text-[11px] tracking-[0.04em] text-tan">
          Workspace · members only
        </div>
      </div>

      <nav className="space-y-1">
        <SidebarLink href="/" match="exact">
          <span>Office</span>
        </SidebarLink>
        <SidebarLink href="/channels" match="prefix">
          <span>Channels</span>
        </SidebarLink>
        <SidebarLink href="/projects" match="prefix">
          <span>Projects</span>
        </SidebarLink>
        <SidebarLink href="/docs" match="prefix">
          <span>Docs</span>
        </SidebarLink>
        <SidebarLink href="/whiteboard" match="prefix">
          <span>Whiteboard</span>
        </SidebarLink>
        <SidebarLink href="/calendar" match="prefix">
          <span>Calendar</span>
        </SidebarLink>
      </nav>

      <div className="mt-6">
        <div className="px-2 text-[11px] tracking-[0.04em] text-tan">
          Channels
        </div>
        <div className="mt-2 space-y-1">
          <SidebarLink href="/channels" match="exact">
            <span className="truncate">
              <span className="text-tan/70">#</span> general
            </span>
          </SidebarLink>
          <SidebarLink href="/channels/product" match="prefix">
            <span className="truncate">
              <span className="text-tan/70">#</span> product
            </span>
          </SidebarLink>
          <SidebarLink href="/channels/design" match="prefix">
            <span className="truncate">
              <span className="text-tan/70">#</span> design
            </span>
          </SidebarLink>
          <SidebarLink href="/channels/ops" match="prefix">
            <span className="truncate">
              <span className="text-tan/70">#</span> ops
            </span>
          </SidebarLink>
        </div>
      </div>

      <div className="mt-6">
        <div className="px-2 text-[11px] tracking-[0.04em] text-tan">
          Direct messages
        </div>
        <div className="mt-2 space-y-1">
          {dms.map((dm) => (
            <SidebarLink key={dm.href} href={dm.href} match="prefix">
              <span className="flex min-w-0 items-center gap-2">
                <PresenceDot status={dm.status} />
                <span className="truncate">{dm.name}</span>
              </span>
            </SidebarLink>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-xl border border-hairline bg-surface p-3">
          <div className="flex items-center justify-between">
            <div className="text-[11px] tracking-[0.04em] text-tan">
              Presence
            </div>
            <div className="flex items-center gap-2">
              <PresenceDot status="online" />
              <PresenceDot status="idle" />
              <PresenceDot status="offline" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
