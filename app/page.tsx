import Header from "@/components/global/header";
import Hero from "@/components/global/sections/hero";
import Features from "@/components/global/features";
import { Features02 } from "@/components/global/features02";
import Benefits from "@/components/global/benefits";
import { Grid2SectionDemo } from "./(docs)/components/page";
import Grid3SectionDemo, {
  Grid3SectionDemo02,
} from "./(docs)/components/_components/grid-3-section";
import { CurvedArrow02 } from "@/components/icons/curved-arrow";
import PlusCornerSection from "./(docs)/components/_components/plus-section";
import { Grid } from "@/components/global/grid-pattern";
import PricingSection from "@/components/global/sections/pricing";
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
              <h4 className='mx-auto max-w-5xl text-center text-2xl font-semibold'>
                To a full project set up with all the tools you need with just{" "}
                <span className='font-bold text-primary'>a simple command</span>
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
