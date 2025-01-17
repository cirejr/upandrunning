import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication Flow",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "font-geist-sans overflow-x-hidden w-full flex flex-col justify-center items-center h-screen",
      )}
    >
      <Button asChild className='absolute right-4 top-4'>
        <Link href='/'>Go Back</Link>
      </Button>
      <div className='bg-gradient-transparent flex h-2/3 w-full items-center justify-center self-center py-14 md:border-b md:border-t'>
        <Separator
          orientation='vertical'
          className='absolute left-[15px] top-[100px] z-20 hidden h-[45rem] w-[1px] md:left-[25px] md:block md:h-[50rem] lg:left-[257px]'
        />
        <Separator
          orientation='vertical'
          className='absolute right-[15px] top-[100px] z-20 hidden h-[25rem] w-[1px] md:right-[25px] md:block md:h-[50rem] lg:right-[257px]'
        />
        {children}
      </div>
    </div>
  );
}
