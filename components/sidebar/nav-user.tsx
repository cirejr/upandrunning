import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavUser({
  side,
  user,
}: {
  side?: 'left' | 'right' | 'bottom' | 'top'
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="data-[state=open]:bg-accent hover:bg-accent rounded-md ring-ring focus-visible:ring-2 w-full outline-none">
        <div className="flex items-center gap-2 px-2 py-1 text-left text-sm transition-all">
          <Avatar className="border rounded-full w-7 h-7">
            <AvatarImage
              src={user.avatar}
              alt={user.name}
              className="zoom-in-90 animate-in fade-in-50"
            />
            <AvatarFallback className="rounded-md">Jr</AvatarFallback>
          </Avatar>
          <div className="flex-1 grid leading-none">
            <div className="font-medium">{user.name}</div>
            <div className="text-muted-foreground text-xs overflow-hidden">
              <div className="line-clamp-1">{user.email}</div>
            </div>
          </div>
          <ChevronsUpDown className="mr-0.5 ml-auto w-4 h-4 text-muted-foreground/50" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
        side={side ?? "right"}
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all">
            <Avatar className="w-7 h-7">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>Jr</AvatarFallback>
            </Avatar>
            <div className="flex-1 grid">
              <div className="font-medium">{user.name}</div>
              <div className="text-muted-foreground text-xs overflow-hidden">
                <div className="line-clamp-1">{user.email}</div>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2">
            <BadgeCheck className="w-4 h-4 text-muted-foreground" />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <CreditCard className="w-4 h-4 text-muted-foreground" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <Bell className="w-4 h-4 text-muted-foreground" />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LogOut className="w-4 h-4 text-muted-foreground" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
