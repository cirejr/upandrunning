import { ArrowLeft, Braces, Settings2, User2 } from "lucide-react";

/* Replace the title and href of the links below with your own site navbar links*/
export const links = [
  /* if multiple pages, replace href with page path i.e "/features" instead of "#features" */
  { title: "Features", href: "#features" },
  { title: "Benefits", href: "#benefits" },
  { title: "Pricing", href: "#pricing" },
];

export const dashboardLinks = [
  {
    label: "Dashboard",
    href: "#",
    icon: (
      <Braces className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
    ),
  },
  {
    label: "Profile",
    href: "#",
    icon: (
      <User2 className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <Settings2 className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <ArrowLeft className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
    ),
  },
];
