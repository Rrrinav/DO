"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import { BellIcon, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const titleForPath = (pathname: string) => {
  if (pathname === "/") return "Office"
  if (pathname.startsWith("/channels")) return "Channels"
  if (pathname.startsWith("/projects")) return "Projects"
  if (pathname.startsWith("/docs")) return "Docs"
  if (pathname.startsWith("/whiteboard")) return "Whiteboard"
  if (pathname.startsWith("/calendar")) return "Calendar"
  return "Office"
}

export function AppTopbar() {
  const pathname = usePathname() ?? "/"
  const title = useMemo(() => titleForPath(pathname), [pathname])

  return (
    <header className="flex h-14 items-center justify-between border-b border-hairline bg-background px-6">
      <div className="flex items-baseline gap-3">
        <div className="font-display text-[18px] leading-none text-cream">
          {title}
        </div>
        <div className="text-[11px] tracking-[0.04em] text-tan">
          warm-dark minimalism
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative w-[260px]">
          <SearchIcon className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-tan/70" />
          <Input placeholder="Search…" className="h-9 pl-8" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-tan hover:bg-field hover:text-parchment"
          aria-label="Notifications"
        >
          <BellIcon className="size-4" />
        </Button>
      </div>
    </header>
  )
}

