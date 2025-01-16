"use client";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
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

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {teams.length > 1 ? (
          <TeamSwitcher teams={teams} />
        ) : (
          <AppLogo team={teams[0]} />
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
