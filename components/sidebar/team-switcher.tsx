"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="data-[state=open]:bg-accent hover:bg-accent rounded-md ring-ring focus-visible:ring-2 w-full hover:text-accent-foreground focus-visible:outline-none">
        <div className="flex items-center gap-1.5 px-2 py-1.5 text-left text-sm transition-all overflow-hidden">
          <div className="flex justify-center items-center bg-primary rounded-sm w-5 h-5 text-primary-foreground">
            <activeTeam.logo className="w-3.5 h-3.5 shrink-0" />
          </div>
          <div className="flex-1 line-clamp-1 pr-2 font-medium">
            {activeTeam.name}
          </div>
          <ChevronsUpDown className="ml-auto w-4 h-4 text-muted-foreground/50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64"
        align="start"
        side="right"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-muted-foreground text-xs">
          Teams
        </DropdownMenuLabel>
        {teams.map((team, index) => (
          <DropdownMenuItem
            key={team.name}
            onClick={() => setActiveTeam(team)}
            className="items-start gap-2 px-1.5"
          >
            <div className="flex justify-center items-center bg-primary rounded-sm w-8 h-8 text-primary-foreground">
              <team.logo className="w-5 h-5 shrink-0" />
            </div>
            <div className="flex-1 grid leading-tight">
              <div className="line-clamp-1 font-medium">{team.name}</div>
              <div className="text-muted-foreground text-xs overflow-hidden">
                <div className="line-clamp-1">{team.plan}</div>
              </div>
            </div>
            <DropdownMenuShortcut className="self-center">
              ⌘{index + 1}
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 px-1.5">
          <div className="flex justify-center items-center bg-background border rounded-md w-8 h-8">
            <Plus className="w-5 h-5" />
          </div>
          <div className="font-medium text-muted-foreground">Add workspace</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
