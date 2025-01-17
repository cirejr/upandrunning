import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

export default function PlusCornerSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) {
  return (
    <section className={cn("container relative", className)}>
      {/* top left + sign*/}
      <div className="absolute left-0 top-0 z-[2] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-foreground"></div>
        <div className="absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-foreground"></div>
      </div>
      {/* bottom right + sign*/}
      <div className="absolute bottom-0 right-0 z-[2] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-foreground"></div>
        <div className="absolute left-1/2 top-1/2 h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-foreground"></div>
      </div>
      {children}
    </section>
  );
}

export function PlusCornerCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]",
        className
      )}
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      {children}
    </div>
  );
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
