"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}
let notifications = [
  {
    name: "Authentication Setup",
    description: "Time saved with pre-configured auth system",
    time: "4h 30m",
    icon: "🔐",
    color: "#1E86FF",
  },
  {
    name: "Database Integration",
    description: "Rapid setup with ORM and migrations",
    time: "3h 45m",
    icon: "🗄️",
    color: "#00C9A7",
  },
  {
    name: "Payment Gateway",
    description: "Stripe integration out of the box",
    time: "5h 15m",
    icon: "💳",
    color: "#FFB800",
  },
  {
    name: "Email Service Setup",
    description: "Transactional emails ready to go",
    time: "2h 30m",
    icon: "📧",
    color: "#FF3D71",
  },
  {
    name: "UI Component Library",
    description: "Pre-built, customizable components",
    time: "8h 00m",
    icon: "🎨",
    color: "#8A3FFC",
  },
  {
    name: "API Boilerplate",
    description: "RESTful API structure in place",
    time: "3h 15m",
    icon: "🌐",
    color: "#33B1FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className='flex flex-row items-center gap-3'>
        <div
          className='flex size-10 items-center justify-center rounded-2xl'
          style={{
            backgroundColor: color,
          }}
        >
          <span className='text-lg'>{icon}</span>
        </div>
        <div className='flex flex-col overflow-hidden'>
          <figcaption className='flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white'>
            <span className='text-sm sm:text-lg'>{name}</span>
            <span className='mx-1'>·</span>
          </figcaption>
          <p className='text-sm font-normal dark:text-white/60'>
            {description}
          </p>
          <div className='flex items-end gap-4'>
            <span className='text-sm font-normal'>Time saved:</span>
            <span className='text text-red-600'>{time}</span>
          </div>
        </div>
      </div>
    </figure>
  );
};

export function NotificationCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] container flex-col p-6 overflow-hidden ",
        className,
      )}
    >
      <AnimatedList delay={2000}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
