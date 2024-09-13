import React from "react";
import { Button } from "../../ui/button";
import { Grid } from "../grid-pattern";
import Link from "next/link";
import CodeBox from "../code-box";

export default function Hero() {
  return (
    <section className='relative flex h-[40rem] w-full items-center justify-center overflow-x-hidden py-12 md:h-[50rem] md:py-24 lg:py-24 xl:py-32'>
      <Grid size={40} />
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-14 text-center'>
          <div className='space-y-14'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl'>
              Launch Your Project in{" "}
              <span className='relative'>
                <span className='bg-gradient-to-r from-emerald-500 to-primary bg-clip-text text-transparent'>
                  Minutes
                </span>
              </span>
              <br />
              Not <span className='text-red-500 line-through'>Days</span>
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl'>
              UPnRunning: The ultimate tool for developers and companies to set
              up projects lightning fast. Stop wasting time on configuration,
              start building.
            </p>
          </div>
          <div className='mt-10 space-x-4'>
            <Button>Read Docs</Button>
            <Button variant='outline' className='dark:glass' asChild>
              <Link href='https://github.com/cirejr/upandrunning'>
                Star us on Github ⭐
              </Link>
            </Button>
          </div>
        </div>
        <CodeBox />
      </div>
    </section>
  );
}
