import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { links } from "@/config/site";
import { Button } from "../ui/button";
import MobileSideMenu from "./mobile-side-menu";

export default function Header({
  isSticky,
  isBlurry,
}: {
  isSticky?: boolean;
  isBlurry?: boolean;
}) {
  return (
    <header
      className={`container h-14 flex items-center justify-between w-full ${
        isSticky && !isBlurry && "sticky top-0 z-10 bg-background"
      } ${
        isSticky &&
        isBlurry &&
        "sticky top-0 z-10 from-transparent dark:from-transparent backdrop-blur-md"
      }`}
    >
      <Link
        className='flex items-center justify-center text-3xl font-bold tracking-tighter'
        href='/'
      >
        UPnRunning
      </Link>

      <nav className='hidden items-center gap-4 sm:gap-6 md:flex'>
        {links.map((link, index) => (
          <Link
            key={index}
            className='text-sm font-medium underline-offset-4 hover:underline'
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div className='flex items-center gap-4'>
        <Button className='hidden md:block' variant='outline'>
          Get Started
        </Button>
        <ModeToggle />
      </div>
      <MobileSideMenu isGlassy />
    </header>
  );
}
