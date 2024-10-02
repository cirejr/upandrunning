"use client"

import Link from "next/link"
import { ChevronRight, Search, type LucideIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export function NavMain({
  className,
  items,
  searchResults,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  searchResults: React.ComponentProps<typeof SidebarSearch>["results"]
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      <li>
        <SidebarSearch results={searchResults} />
      </li>
      {items.map((item) => (
        <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
          <li>
            <div className="relative flex items-center">
              <Link
                href={item.url}
                className="flex flex-1 items-center gap-2 hover:bg-accent px-1.5 rounded-md ring-ring focus-visible:ring-2 min-w-8 h-8 font-medium text-sm hover:text-accent-foreground transition-all overflow-hidden outline-none"
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <div className="flex flex-1 overflow-hidden">
                  <div className="line-clamp-1 pr-6">{item.title}</div>
                </div>
              </Link>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="right-1 absolute p-0 rounded-md ring-ring focus-visible:ring-2 w-6 h-6 transition-all data-[state=open]:rotate-90"
                >
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="px-4 py-0.5">
              <ul className="grid px-2 border-l">
                {item.items?.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      href={subItem.url}
                      className="flex items-center gap-2 hover:bg-accent px-2 rounded-md ring-ring focus-visible:ring-2 min-w-8 h-8 font-medium text-muted-foreground text-sm hover:text-accent-foreground transition-all overflow-hidden"
                    >
                      <div className="line-clamp-1">{subItem.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </li>
        </Collapsible>
      ))}
    </ul>
  )
}

export function SidebarSearch({
  results,
}: {
  results: {
    title: string
    teaser: string
    url: string
  }[]
}) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className="flex flex-1 items-center gap-2 data-[state=open]:bg-accent hover:bg-accent px-1.5 rounded-md ring-ring focus-visible:ring-2 w-full min-w-8 h-8 font-medium text-sm data-[state=open]:text-accent-foreground hover:text-accent-foreground transition-all overflow-hidden outline-none">
          <Search className="w-4 h-4 shrink-0" />
          <div className="flex flex-1 overflow-hidden">
            <div className="line-clamp-1 pr-6">Search</div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <form>
            <div className="p-2.5 border-b">
              <Input
                type="search"
                placeholder="Search..."
                className="shadow-none rounded-sm focus-visible:ring-0 h-8"
              />
            </div>
          </form>
          <div className="gap-1 grid p-1.5 text-sm">
            {results.map((result) => (
              <Link
                href={result.url}
                key={result.title}
                className="hover:bg-accent p-2.5 rounded-md ring-ring focus-visible:ring-2 hover:text-accent-foreground outline-none"
              >
                <div className="font-medium">{result.title}</div>
                <div className="line-clamp-2 text-muted-foreground">
                  {result.teaser}
                </div>
              </Link>
            ))}
            <Separator className="my-1.5" />
            <Link
              href="#"
              className="px-2.5 py-1 rounded-md ring-ring focus-visible:ring-2 text-muted-foreground hover:text-foreground outline-none"
            >
              See all results
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Popover>
      <PopoverTrigger className="flex flex-1 items-center gap-2 data-[state=open]:bg-accent hover:bg-accent px-1.5 rounded-md ring-ring focus-visible:ring-2 w-full min-w-8 h-8 font-medium text-sm data-[state=open]:text-accent-foreground hover:text-accent-foreground transition-all overflow-hidden outline-none">
        <Search className="w-4 h-4 shrink-0" />
        <div className="flex flex-1 overflow-hidden">
          <div className="line-clamp-1 pr-6">Search</div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        align="start"
        sideOffset={4}
        className="p-0 w-96"
      >
        <form>
          <div className="p-2.5 border-b">
            <Input
              type="search"
              placeholder="Search..."
              className="shadow-none rounded-sm focus-visible:ring-0 h-8"
            />
          </div>
        </form>
        <div className="gap-1 grid p-1.5 text-sm">
          {results.map((result) => (
            <Link
              href={result.url}
              key={result.title}
              className="hover:bg-accent p-2.5 rounded-md ring-ring focus-visible:ring-2 hover:text-accent-foreground outline-none"
            >
              <div className="font-medium">{result.title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {result.teaser}
              </div>
            </Link>
          ))}
          <Separator className="my-1.5" />
          <Link
            href="#"
            className="px-2.5 py-1 rounded-md ring-ring focus-visible:ring-2 text-muted-foreground hover:text-foreground outline-none"
          >
            See all results
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}
