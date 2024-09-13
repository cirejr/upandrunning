import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/config/site";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";

export default function MobileSideMenu({ isGlassy }: { isGlassy?: boolean }) {
  return (
    <div className='block md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <HiMenuAlt3 className='h-6 w-6 text-black dark:text-white' />
        </SheetTrigger>
        <SheetContent
          side='left'
          className={` ${
            isGlassy && "bg-transparent backdrop-blur-md backdrop-filter"
          }`}
        >
          <SheetHeader>
            <Link className='flex text-3xl font-bold tracking-tighter' href='/'>
              UPnRunning
            </Link>
          </SheetHeader>
          <nav className='mt-7 flex flex-col items-start gap-4 sm:gap-6'>
            {links.map((link, index) => (
              <Link
                key={index}
                className='font-medium underline-offset-4 hover:underline'
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
