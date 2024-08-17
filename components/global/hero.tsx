import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
              Launch Your Project in{" "}
              <span className='relative'>
                <span className='bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent'>
                  Minutes
                </span>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-foreground'></span>
              </span>
              , Not Days
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
              QuickStart Boilerplate: The ultimate tool for developers and
              companies to set up projects lightning fast. Stop wasting time on
              configuration, start building.
            </p>
          </div>
          <div className='space-x-4'>
            <Button>Get Started for Free</Button>
            <Button variant='outline'>View Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
