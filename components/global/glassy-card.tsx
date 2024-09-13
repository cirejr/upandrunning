import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

export default function GlassyCard({
  icon,
  title,
  description,
  className,
}: {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: ClassValue;
}) {
  return (
    <div
      className={cn(
        `w-full dark:bg-gradient-to-br dark:from-[rgba(255,255,255,0.1)] dark:from-0% dark:to-[rgba(255,255,255,0.05)] dark:bg-gray-800 dark:bg-opacity-30 rounded-lg shadow-lg p-4 border dark:border-slate-500 border-opacity-30 dark:backdrop-filter dark:backdrop-blur-lg`,
        className,
      )}
    >
      <div className='flex items-center space-x-2'>
        {icon}
        {title && (
          <span className='text-sm font-bold text-muted-foreground'>
            {title}
          </span>
        )}
      </div>
      <p className='mt-2 text-sm text-muted-foreground'>{description}</p>
    </div>
  );
}
