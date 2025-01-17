import React from "react";
import { Grid } from "./grid-pattern";
import {
  FaLock,
  FaDatabase,
  FaCreditCard,
  FaEnvelope,
  FaPalette,
  FaCode,
} from "react-icons/fa";

export function Features02() {
  return (
    <div className="">
      <div className="mb-20 px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Packed with all the essential SaaS features
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-muted-foreground md:text-xl">
          From authentication to payment integration, our boilerplate has
          everything you need to launch your SaaS product quickly. It&apos;s
          like having a team of expert developers at your fingertips.
        </p>
      </div>

      <div className="z-0 mx-auto grid w-full grid-cols-1 justify-evenly gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-3">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="w-7/8 relative overflow-hidden rounded-lg bg-gradient-to-b from-zinc-100 to-white p-6 dark:from-zinc-800 dark:to-background"
          >
            <Grid size={20} />
            <div className="flex items-center gap-2">
              {feature.icon && (
                <div className="flex w-fit items-center justify-center rounded-md border-r border-t bg-secondary p-4 shadow-lg dark:border-r-white dark:border-t-white dark:border-opacity-10">
                  {feature.icon}
                </div>
              )}
              <p className="relative text-base font-bold text-zinc-800 dark:text-white">
                {feature.title}
              </p>
            </div>
            <p className="relative mt-4 text-base font-normal text-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Authentication System",
    description:
      "Secure, pre-configured authentication system with support for multiple providers, saving you hours of setup time.",
    icon: <FaLock />,
  },
  {
    title: "Database Integration",
    description:
      "Seamless database integration with ORM and migrations, allowing you to focus on building your application logic.",
    icon: <FaDatabase />,
  },
  {
    title: "Payment Gateway",
    description:
      "Out-of-the-box Paddle integration for handling payments, subscriptions, and billing with minimal setup.",
    icon: <FaCreditCard />,
  },
  {
    title: "Email Service",
    description:
      "Transactional email service setup, ready to send notifications, password resets, and marketing emails.",
    icon: <FaEnvelope />,
  },
  {
    title: "UI Component Library",
    description:
      "Extensive library of pre-built, customizable UI components to rapidly create a polished user interface.",
    icon: <FaPalette />,
  },
  {
    title: "API Boilerplate",
    description:
      "RESTful API structure in place, complete with error handling, rate limiting, and documentation generation.",
    icon: <FaCode />,
  },
];
