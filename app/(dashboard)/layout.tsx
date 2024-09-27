import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { DashboardSidebar } from "./_components/sidebar";
import Header from "@/components/global/header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "font-geist-sans overflow-hidden w-full h-screen flex flex-col md:flex-row flex-1 mx-auto",
      )}
    >
      <DashboardSidebar />
      <div className='flex-1'>
        <Header />
        {children}
      </div>
    </div>
  );
}
