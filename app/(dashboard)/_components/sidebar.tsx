"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { dashboardLinks } from "@/config/site";

export function DashboardSidebar() {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className='justify-between gap-10'>
        <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          {open ? <Logo /> : <LogoIcon />}
          <div className='mt-8 flex flex-col gap-2'>
            {dashboardLinks.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Cire jr",
              href: "#",
              icon: (
                <Image
                  src='https://github.com/cirejr.png'
                  className='h-7 w-7 flex-shrink-0 rounded-full'
                  width={50}
                  height={50}
                  alt='Avatar'
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <Link
      href='#'
      className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'
    >
      <div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='font-medium text-black dark:text-white whitespace-pre'
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href='#'
      className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'
    >
      <div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
    </Link>
  );
};
