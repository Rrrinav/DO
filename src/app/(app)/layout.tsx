import type { ReactNode } from "react"

import { AppSidebar } from "@/components/app/sidebar"
import { AppTopbar } from "@/components/app/topbar"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-background text-foreground">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar />
        <main className="min-h-0 flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}

