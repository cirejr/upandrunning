import type { Metadata } from "next";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { NavUser } from "@/components/sidebar/nav-user";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarSearch } from "@/components/sidebar/nav-main";
import { user } from "@/config/site";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/utils/supabase/queries";
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
  const user = await getUser(supabase);

  if (!user) {
    return redirect("/auth/login");
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
            {/* @ts-ignore */}
            <NavUser user={user} side="bottom" />
          </div>
        </header>
        <div className="p-2 h-full">{children}</div>
      </main>
    </SidebarLayout>
  );
}
