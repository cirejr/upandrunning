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
import { NotificationCards } from "@/components/global/notification-cards";
import Footer from "@/components/global/sections/footer";
import EmailWaitlist from "@/components/global/sections/email-waitlist";

export default function Home() {
  return (
    <div className='flex min-h-[100dvh] flex-col'>
      <Header isSticky isBlurry />
      <main className='flex-1'>
        <Hero />
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
        <EmailWaitlist />
      </main>
      <Footer />
    </div>
  );
}
