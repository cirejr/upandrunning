"use client"

import Link from "next/link"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function NavSecondary({
  className,
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    items?: {
      title: string
      url: string
    }[]
  }[]
} & React.ComponentProps<"ul">) {
  if (!items?.length) {
    return null
  }

  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.url}
            className="flex items-center gap-2.5 hover:bg-accent px-1.5 rounded-md ring-ring focus-visible:ring-2 h-7 text-xs hover:text-accent-foreground transition-all overflow-hidden focus-visible:outline-none"
          >
            <item.icon className="w-4 h-4 text-muted-foreground translate-x-0.5 shrink-0" />
            <div className="line-clamp-1 pr-6 font-medium text-muted-foreground overflow-hidden grow">
              {item.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
