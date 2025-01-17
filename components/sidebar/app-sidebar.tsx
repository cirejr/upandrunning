"use client";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import { StorageCard } from "@/components/sidebar/storage-card";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";
import { navMain, teams, user } from "@/config/site";
import AppLogo from "./app-logo";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {teams.length > 1 ? (
          <TeamSwitcher teams={teams} />
        ) : (
          <Link href="/">
            <AppLogo team={teams[0]} />
          </Link>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={navMain} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter className="flex-col">
        <StorageCard />
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
