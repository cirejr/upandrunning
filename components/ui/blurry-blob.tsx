import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  blob1ClassName?: ClassValue;
  blob2ClassName?: ClassValue;
}

export default function BlurryBlob(
  { blob1ClassName, blob2ClassName }: BlobProps,
  wrapperClassName?: string,
) {
  return (
    <div
      className={
        (cn(
          "absolute left-64 top-[40rem] z-50 dark:z-0 min-h-52 min-w-52 items-center justify-center",
        ),
        wrapperClassName)
      }
    >
      <div className='relative w-full max-w-lg'>
        <div
          className={cn(
            "absolute -right-24 -top-28 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter dark:bg-transparent",
            blob1ClassName,
          )}
        ></div>
        <div
          className={cn(
            "absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter dark:bg-transparent",
            blob2ClassName,
          )}
        ></div>
      </div>
    </div>
  );
}
