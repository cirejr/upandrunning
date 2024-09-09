import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { ServerCog, ClockIcon, CodeIcon, CheckIcon } from "lucide-react";
import { ModeToggle } from "@/components/global/mode-toggle";
import Header from "@/components/global/header";
import Hero from "@/components/global/hero";
import GridSpotlightHero from "@/components/global/grid-spotlight-hero";
import Features from "@/components/global/features";
import { Features02 } from "@/components/global/features02";
import Benefits from "@/components/global/benefits";
import { Grid2SectionDemo } from "./(docs)/components/page";
import Grid3SectionDemo, {
  Grid3SectionDemo02,
} from "./(docs)/components/_components/grid-3-section";
import { CurvedArrow01, CurvedArrow02 } from "@/components/icons/curved-arrow";
import PlusCornerSection from "./(docs)/components/_components/plus-section";
import { Grid } from "@/components/global/grid-pattern";
import PricingSection from "@/components/global/sections/pricing";

export default function Home() {
  return (
    <div className='flex min-h-[100dvh] flex-col'>
      <Header isSticky isBlurry />
      <main className='flex-1'>
        <GridSpotlightHero />
        <Features />
        <Benefits />
        <div className='container -mt-14'>
          <PlusCornerSection className='border py-10'>
            <div className='px-8'>
              <h4 className='mx-auto max-w-5xl text-center text-xl font-medium tracking-tight text-black dark:text-white lg:text-2xl lg:leading-tight'>
                To a full project set up with all the tools you need in just a
                simple command
              </h4>
            </div>
          </PlusCornerSection>
        </div>
        <span className='w-full overflow-x-hidden'>
          <CurvedArrow02 className='flex w-full -translate-y-20 items-end justify-end lg:translate-x-20' />
        </span>
        <section className='container -mt-28'>
          <Grid2SectionDemo />
          <Grid3SectionDemo02 />
        </section>
        <section
          id='pricing'
          className='container mt-1 w-full overflow-x-hidden'
        >
          <div className='container relative w-full overflow-x-hidden py-12 md:py-24 lg:py-32'>
            <Grid size={30} />
            <PricingSection />
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Ready to Supercharge Your Development?
                </h2>
                <p className='mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Join thousands of developers and companies who are already
                  saving time and building better with QuickStart Boilerplate.
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
      </main>
      <footer className='flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 QuickStart Boilerplate. All rights reserved.
        </p>
        <nav className='flex gap-4 sm:ml-auto sm:gap-6'>
          <Link className='text-xs underline-offset-4 hover:underline' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs underline-offset-4 hover:underline' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
