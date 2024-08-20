import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

export function GridDotBackgroundWrapper({
  isGridSmall,
  isDot,
  isFaded,
  children,
  className,
}: {
  isGridSmall?: boolean;
  isDot?: boolean;
  isFaded?: boolean;
  children: React.ReactNode;
  className?: ClassValue; //add additional classes to the wrapper to suit your needs. for example you may want to modify the height of the wrapper
}) {
  const getBackgroundClass = () => {
    if (isDot) return "dark:bg-dot-white/[0.2] bg-dot-black/[0.2]";
    if (isGridSmall)
      return "dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]";
    return "dark:bg-grid-white/[0.2] bg-grid-black/[0.2]"; // Default to grid
  };

  return (
    <div
      className={cn(
        `h-[50rem] w-full dark:bg-background bg-white relative flex items-center justify-center ${getBackgroundClass()}`,
        className,
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      {isFaded && (
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      )}
      {children}
    </div>
  );
}
