import Link from "next/link"
import { MoreHorizontal, PlusSquare, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavProjects({
  projects,
  className,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {projects.map((item) => (
        <li
          key={item.name}
          className="relative has-[[data-state=open]]:bg-accent hover:bg-accent rounded-md has-[[data-state=open]]:text-accent-foreground hover:text-accent-foreground group"
        >
          <Link
            href={item.url}
            className="flex items-center gap-2.5 hover:bg-accent px-1.5 rounded-md ring-ring focus-visible:ring-2 h-7 text-xs hover:text-accent-foreground transition-all overflow-hidden outline-none"
          >
            <item.icon className="w-4 h-4 text-muted-foreground translate-x-0.5 shrink-0" />
            <div className="line-clamp-1 pr-6 font-medium overflow-hidden grow">
              {item.name}
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="top-0.5 right-1 absolute bg-accent data-[state=open]:bg-accent opacity-0 data-[state=open]:opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 p-0 rounded-md ring-ring focus-visible:ring-2 w-6 h-6 text-accent-foreground transition-all peer shrink-0"
              >
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                <span className="sr-only">Toggle</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start" sideOffset={20}>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      ))}
      <li>
        <button className="flex items-center gap-2.5 hover:bg-muted px-1.5 rounded-md ring-ring focus-visible:ring-2 w-full h-7 text-left text-xs transition-all overflow-hidden focus-visible:outline-none">
          <PlusSquare className="w-4 h-4 text-muted-foreground translate-x-0.5 shrink-0" />
          <div className="line-clamp-1 font-medium text-muted-foreground overflow-hidden">
            Add Project
          </div>
        </button>
      </li>
    </ul>
  )
}
