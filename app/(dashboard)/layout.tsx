import type { Metadata } from "next";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { NavUser } from "@/components/sidebar/nav-user";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
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
      <main className="font-geist-sans flex flex-1 flex-col transition-all duration-300 ease-in-out">
        <header className="flex justify-between border-b px-2 py-2">
          <SidebarTrigger />
          <div className="flex min-w-56 justify-end">
            <NavUser user={data.user} side="bottom" />
          </div>
        </header>
        <div className="h-full p-2">{children}</div>
      </main>
    </SidebarLayout>
  );
}
