import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

export function LoadingScreen({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mt-[100px] flex h-screen w-full flex-col items-center",
        className
      )}
    >
      <LoaderIcon className="animate-spin" />
    </div>
  );
}
