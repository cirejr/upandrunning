"use client";

import { StackedMockBrowser } from "../_components/mock-browser";

export default function Grid2Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='relative flex w-full flex-col items-start justify-start border border-primary-foreground bg-slate-50 text-3xl font-bold dark:bg-transparent sm:min-h-[720px] sm:flex-row sm:pb-0'>
      <div className='absolute left-0 top-0 z-[2] -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-slate-400'></div>
        <div className='absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-slate-400'></div>
      </div>
      <div className='absolute bottom-0 right-0 z-[2] -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-slate-400'></div>
        <div className='absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-slate-400'></div>
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
    <Grid2Section>
      <div className='sm:min-w-1/2 w-full sm:w-1/2'></div>
      <div className='sm:min-w-1/2 w-full sm:w-1/2'>
        <StackedMockBrowser />
      </div>
    </Grid2Section>
  );
}
