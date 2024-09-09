"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiYoutubemusic } from "react-icons/si";
import { NotificationCards } from "./notification-cards";
import { AnimatedNumberInView } from "./animated-number-in-view";
import GradientCard from "./gradient-card";
import GlassyCard from "./glassy-card";

export function FeaturesGrid() {
  const features = [
    {
      title: "",
      description: "",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 lg:border-r  ",
    },
    {
      skeleton: <SkeletonTwo />,
      className: "col-span-1 lg:col-span-2  ",
    },
  ];
  return (
    <div className='relative mx-auto'>
      <div className='relative'>
        <div className='mt-12 grid grid-cols-1 lg:grid-cols-6 xl:border'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className='h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className='mx-auto max-w-5xl text-left text-xl tracking-tight text-black dark:text-white md:text-2xl md:leading-snug'>
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className='relative flex h-full py-8'>
      <div className='mx-auto flex w-[600px] items-center justify-center rounded-lg lg:h-[600px]'>
        <Image
          src='/assets/images/project-setup-no-bg.png'
          alt='header'
          width={800}
          height={800}
          className='glass aspect-square h-full w-full object-center'
        />
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return <NotificationCards className='h-[650px]' />;
};
