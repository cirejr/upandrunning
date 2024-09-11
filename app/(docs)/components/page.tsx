"use client";

import GlassyCard from "@/components/global/glassy-card";
import MockBrowser, {
  BlankMockBrowser,
  BrowserComponent,
  StackedMockBrowser,
} from "./_components/mock-browser";
import GradientCard from "@/components/global/gradient-card";
import { CurvedLines } from "@/components/icons/curved-lines";
import GradientCardDemo from "./_components/gradient-card-demo";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Grid2Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative flex w-full flex-col items-start justify-start border bg-slate-50 text-3xl font-bold dark:bg-transparent sm:min-h-[720px] sm:flex-row",
        className,
      )}
    >
      <div className='absolute left-0 top-0 z-[2] -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-foreground'></div>
        <div className='absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-foreground'></div>
      </div>
      <div className='absolute bottom-0 right-0 z-[2] -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-foreground'></div>
        <div className='absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-foreground'></div>
      </div>
      {children}
      <div className='absolute left-0 top-0 z-0 flex h-full w-full'>
        <div className='h-full w-1/2 border-r'></div>
      </div>
    </section>
  );
}

export function Grid2SectionDemo() {
  return (
    <Grid2Section className='sm:min-h-[520px]'>
      <div className='sm:min-w-1/2 relative min-h-full w-full p-6 sm:w-1/2'>
        {/* being hidden on desktop */}
        <div className='glass w-sm rounded-r-lg p-4 sm:hidden md:translate-x-1/2 lg:absolute lg:right-[22rem] lg:top-[6.5rem] xl:translate-x-1/4'>
          <div className='absolute bottom-0 left-0 top-0 w-[1px] rounded-full border-l border-green-400 shadow-[0_0_5px_1px_rgba(34,197,94,0.6)]'></div>
          <div className='flex items-center space-x-2'>
            <Terminal />
            <span className='text-sm font-bold text-muted-foreground'>
              One Simple Command
            </span>
          </div>
          <p className='mt-2 text-sm text-muted-foreground'>
            ~ git clone https://github.com/cirejr/upnrunning.git
          </p>
        </div>

        {/* being hidden on mobile */}
        <div className='glass w-xs absolute left-6 right-6 top-[6.5rem] z-[1] mt-6 hidden flex-col rounded-lg p-4 text-sm backdrop-blur-xl backdrop-filter sm:flex xl:min-w-[560px]'>
          <div className='mb-2 flex items-center space-x-2'>
            <div className='h-3 w-3 rounded-full bg-red-500'></div>
            <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
            <div className='h-3 w-3 rounded-full bg-green-500'></div>
          </div>
          <p className='text-muted-foreground'>
            ~ git clone https://github.com/cirejr/upnrunning.git
          </p>
          <div className='px-4'>
            <p className=' '>cloning into : `your-repo`...</p>
            <p className=' '>remote: Counting objects: 10, done.</p>
            <p className=' '>remote: Compressing objects: 100% (8/8), done.</p>
            <p className=' '>remote: Total 10 (delta 0), reused 0 (delta 0)</p>
            <p className=' '>unpacking objects : 100% (10/10), done.</p>
            <p className=' '>21326a9..8</p>
          </div>
        </div>
        <CurvedLines className='absolute right-0 top-[9.5rem] z-0 hidden translate-x-2/3 md:block' />
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black/20'></div>
      </div>
      <div className='sm:min-w-1/2 flex w-full flex-col gap-10 p-6 sm:w-1/2'>
        {/* being hidden on mobile */}
        <div className='glass w-sm hidden translate-y-6 rounded-r-lg p-4 sm:block lg:absolute lg:top-[4.3rem] lg:translate-y-0 xl:right-[22rem] xl:translate-x-1/4'>
          <div className='absolute bottom-0 left-0 top-0 w-[1px] rounded-full border-l border-green-400 shadow-[0_0_5px_1px_rgba(34,197,94,0.6)]'></div>
          <div className='flex items-center space-x-2'>
            <Terminal />
            <span className='text-sm font-bold text-muted-foreground'>
              One Simple Command
            </span>
          </div>
          <p className='mt-2 text-sm text-muted-foreground'>
            ~ git clone https://github.com/cirejr/upnrunning.git
          </p>
        </div>

        {/* being hidden on desktop */}
        <div className='glass rounded-lg p-4 text-sm sm:hidden'>
          <div className='mb-2 flex items-center space-x-2'>
            <div className='h-3 w-3 rounded-full bg-red-500'></div>
            <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
            <div className='h-3 w-3 rounded-full bg-green-500'></div>
          </div>
          <p className='text-muted-foreground'>
            ~ git clone https://github.com/cirejr/upnrunning.git
          </p>
          <div className='px-4'>
            <p className=' '>cloning into : `your-repo`...</p>
            <p className=' '>remote: Counting objects: 10, done.</p>
            <p className=' '>remote: Compressing objects: 100% (8/8), done.</p>
            <p className=' '>remote: Total 10 (delta 0), reused 0 (delta 0)</p>
            <p className=' '>unpacking objects : 100% (10/10), done.</p>
            <p className=' '>21326a9..8</p>
          </div>
        </div>
        <MockBrowser className='top-0 sm:right-0 sm:top-[4.3rem] lg:absolute lg:right-[10rem] lg:top-[14.5rem] lg:translate-x-1/3 xl:right-[17rem]' />
      </div>
    </Grid2Section>
  );
}
