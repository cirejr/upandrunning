import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

export default function MockBrowser({ className }: { className?: ClassValue }) {
  return (
    <div
      className={cn(
        "relative top-10 z-[1] h-[220px] w-full max-w-[420px] overflow-hidden rounded-lg border shadow-lg backdrop-blur-lg backdrop-filter",
        className,
      )}
    >
      <div className='relative flex h-[30px] w-full items-center justify-center border-b'>
        <div className='absolute left-0 top-0 ml-2 flex h-full items-center justify-start gap-1'>
          <div className='h-[8px] w-[8px] rounded-full bg-red-500'></div>
          <div className='h-[8px] w-[8px] rounded-full bg-yellow-500'></div>
          <div className='h-[8px] w-[8px] rounded-full bg-green-500'></div>
        </div>
        <div className='mb-[1px] flex items-center justify-start text-xs leading-[1]'>
          <svg fill='none' height='16' width='16' viewBox='0 0 16 16'>
            <path
              clipRule='evenodd'
              d='M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z'
              className='fill-muted-foreground'
              fillRule='evenodd'
            ></path>
          </svg>
          <span className=''>upnrunning.best</span>
        </div>
      </div>
      <div className='relative flex items-start justify-start gap-5 p-2 backdrop-blur-lg backdrop-filter'>
        <div className='flex flex-col items-start justify-start gap-[6px]'>
          {/* skeletons on left */}
          <div className='h-[4px] w-[46px] rounded-full bg-primary'></div>
          <div className='h-[4px] w-[30px] rounded-full bg-primary'></div>
          <div className='h-[4px] w-[50px] rounded-full bg-primary'></div>
          <div className='h-[4px] w-[60px] rounded-full bg-primary'></div>
          <div className='h-[4px] w-[20px] rounded-full bg-secondary'></div>
          <div className='h-[4px] w-[55px] rounded-full bg-primary'></div>
          <div className='h-[4px] w-[40px] rounded-full bg-primary'></div>
          <div className='h-[4px] w-[30px] rounded-full bg-primary'></div>
          <div className='h-[4px] w-[55px] rounded-full bg-primary'></div>
          <div className='h-[4px] w-[35px] rounded-full bg-primary'></div>
        </div>
        <div className='mr-5 flex w-full flex-col items-start justify-start gap-[5px]'>
          {/* skeletons on in top center */}
          <div className='h-[4px] w-[30px] rounded-full bg-primary'></div>
          <div className='mt-1 h-[5px] w-[50px] rounded-[1.5px] bg-secondary'></div>
          <div className='h-[4px] w-[60px] rounded-full bg-primary'></div>
          <div className='mt-1.5 flex items-start justify-start gap-2'>
            <div className='h-[4px] w-[15px] rounded-full bg-primary'></div>
            <div className='h-[4px] w-[20px] rounded-full bg-secondary'></div>
          </div>
          <div className='relative flex h-[100px] w-full max-w-[200px] flex-col items-start justify-start gap-1 rounded-md border px-2 py-2.5'>
            <div className='flex items-start justify-start gap-1'>
              {/* skeletons on in center */}
              <div className='h-[4px] w-[50px] rounded-full bg-fuchsia-400'></div>
              <div className='h-[4px] w-[20px] rounded-full bg-fuchsia-400'></div>
              <div className='h-[4px] w-[30px] rounded-full bg-neutral-400'></div>
            </div>
            <div className='flex items-start justify-start gap-1 pl-2'>
              <div className='h-[4px] w-[40px] rounded-full bg-red-400'></div>
              <div className='h-[4px] w-[20px] rounded-full bg-yellow-600'></div>
              <div className='h-[4px] w-[30px] rounded-full bg-green-400'></div>
            </div>
            <div className='flex items-start justify-start gap-1 pl-4'>
              <div className='h-[4px] w-[50px] rounded-full bg-red-400'></div>
              <div className='h-[4px] w-[20px] rounded-full bg-yellow-600'></div>
              <div className='h-[4px] w-[30px] rounded-full bg-green-400'></div>
            </div>
            <div className='flex items-start justify-start gap-1 pl-6'>
              <div className='h-[4px] w-[20px] rounded-full bg-red-400'></div>
              <div className='h-[4px] w-[50px] rounded-full bg-neutral-400'></div>
              <div className='h-[4px] w-[20px] rounded-full bg-red-400'></div>
            </div>
            <div className='flex items-start justify-start gap-1 pl-6'>
              <div className='h-[4px] w-[30px] rounded-full bg-red-400'></div>
            </div>
            <div className='pl-8'>
              <div className='h-[4px] w-[80px] rounded-full bg-neutral-400'></div>
            </div>
            <div className='flex items-start justify-start gap-1 pl-6'>
              <div className='h-[4px] w-[30px] rounded-full bg-red-400'></div>
            </div>
            <div className='flex items-start justify-start gap-1 pl-4'>
              <div className='h-[4px] w-[50px] rounded-full bg-red-400'></div>
            </div>
            <div className='flex items-start justify-start gap-1 pl-2'>
              <div className='h-[4px] w-[40px] rounded-full bg-red-400'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlankMockBrowser({ children }: { children?: React.ReactNode }) {
  return (
    <div className='absolute top-0 z-[0] ml-4 h-[220px] w-full max-w-[420px] overflow-hidden rounded-lg border text-primary shadow-lg'>
      <div className='w-full items-center justify-start border-b'>
        <div className='h-[calc(100%+2px)] w-fit border-b-[3px] border-cyan-500 bg-slate-100 px-2 py-1 text-xs dark:bg-slate-900'>
          page.tsx
        </div>
      </div>
      {children}
    </div>
  );
}

export const BrowserComponent: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ className, children }) => (
  <div
    className={cn(
      "relative text-sm dark:text-neutral-400 text-neutral-950 border dark:border-neutral-800 rounded-lg w-full h-[400px] dark:shadow-none shadow-lg shadow-gray-200 dark:dots-neutral-800 dots-gray-300 dark:bg-neutral-950 bg-white",
      className,
    )}
  >
    <div
      className={
        "border-b border-inherit flex items-center justify-between w-full py-2 px-4 bg-inherit rounded-t-lg"
      }
    >
      <div className={"flex gap-2"}>
        <div
          className={"h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-800"}
        />
        <div
          className={"h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-800"}
        />
        <div
          className={"h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-800"}
        />
      </div>
      <div
        className={
          "border border-inherit rounded-md flex gap-2 px-1.5 py-1 font-sans w-fit min-w-1/3"
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='2'
          className={"w-4 max-w-5 stroke-neutral-300 dark:stroke-neutral-700"}
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect width='18' height='11' x='3' y='11' rx='2' ry='2' />
          <path d='M7 11V7a5 5 0 0 1 10 0v4' />
        </svg>
        <span className={"flex items-center justify-center text-sm"}>
          yourwebsite.com/admin/sales
        </span>
      </div>
      <div />
    </div>
    <div className={"absolute left-0 top-0 h-full w-full pt-12"}>
      {children}
    </div>
  </div>
);

export function StackedMockBrowser() {
  return (
    <div className='h-[400px] overflow-hidden px-2 lg:px-10'>
      <div className='relative z-[1] text-base font-normal sm:mt-9'>
        <MockBrowser />
        <BlankMockBrowser />
      </div>
    </div>
  );
}
