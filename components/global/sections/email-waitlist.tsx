import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function EmailWaitlist() {
  return (
    <section className='bg-gradient-transparent relative w-full border-b border-t py-12 md:py-24 lg:py-32'>
      <Separator
        orientation='vertical'
        className='absolute -top-[50px] left-[257px] h-[36rem] w-[0.5px]'
      />
      <Separator
        orientation='vertical'
        className='absolute -top-[50px] right-[257px] h-[36rem] w-[0.5px]'
      />
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Ready to Supercharge Your Development?
            </h2>
            <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Join thousands of developers and companies who are already saving
              time and building better with QuickStart Boilerplate.
            </p>
          </div>
          <div className='w-full max-w-sm space-y-2'>
            <form className='flex space-x-2'>
              <Input
                className='max-w-lg flex-1'
                placeholder='Enter your email'
                type='email'
              />
              <Button type='submit'>Get Started</Button>
            </form>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Start your free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
