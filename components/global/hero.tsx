import React from "react";
import { Button } from "../ui/button";
import { Grid } from "./grid-pattern";

export default function Hero() {
  return (
    <section className='relative h-[35rem] w-full py-12 md:py-24 lg:py-24 xl:py-32'>
      <Grid size={40} />
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
              Launch Your Project in{" "}
              <span className='relative'>
                <span className='bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent'>
                  Minutes{" "}
                </span>
              </span>
              Not Days
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'>
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
