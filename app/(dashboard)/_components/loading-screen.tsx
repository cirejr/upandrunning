import { LoaderIcon } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="mt-[100px] flex h-screen w-full flex-col items-center">
      <LoaderIcon className="animate-spin" />
    </div>
  );
}
