import type { Metadata } from "next";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { NavUser } from "@/components/sidebar/nav-user";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { user } from "@/config/site";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { cookies } = await import("next/headers");
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    redirect("/auth/login");
  }

  return (
    <SidebarLayout
      defaultOpen={cookies().get("sidebar:state")?.value === "true"}
    >
      <AppSidebar />
      <main className="flex flex-col flex-1 font-geist-sans transition-all duration-300 ease-in-out">
        <header className="flex justify-between px-2 py-2 border-b">
          <SidebarTrigger />
          <div className="flex justify-end min-w-56">
            <NavUser user={user} side="bottom" />
          </div>
        </header>
        <div className="p-2 h-full">{children}</div>
      </main>
    </SidebarLayout>
  );
}
