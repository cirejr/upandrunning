import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import {
  RocketIcon,
  ServerCog,
  ClockIcon,
  CodeIcon,
  CheckIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link
          className='flex items-center justify-center text-3xl font-bold tracking-tighter'
          href='#'
        >
          UPnRunning
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#features'
          >
            Features
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#how-it-works'
          >
            How It Works
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#pricing'
          >
            Pricing
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
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
                  companies to set up projects lightning fast. Stop wasting time
                  on configuration, start building.
                </p>
              </div>
              <div className='space-x-4'>
                <Button>Get Started for Free</Button>
                <Button variant='outline'>View Demo</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
              Features That Save You Time
            </h2>
            <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
              <Card>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <ServerCog className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>Pre-configured Tools</h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Essential development tools set up and ready to go.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <ClockIcon className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>Rapid Setup</h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Get your project up and running in seconds, not days.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <CodeIcon className='h-12 w-12 text-primary' />
                  <h3 className='text-xl font-bold'>Best Practices</h3>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Follows industry standards and best coding practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id='how-it-works' className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
              How It Works
            </h2>
            <div className='grid gap-8 md:grid-cols-3'>
              <div className='flex flex-col items-center space-y-2 border-t pt-4'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
                  1
                </div>
                <h3 className='text-xl font-bold'>Choose Your Stack</h3>
                <p className='text-center text-gray-500 dark:text-gray-400'>
                  Select from our curated list of popular tech stacks.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-t pt-4'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
                  2
                </div>
                <h3 className='text-xl font-bold'>Generate Boilerplate</h3>
                <p className='text-center text-gray-500 dark:text-gray-400'>
                  Our system creates a custom boilerplate for your project.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 border-t pt-4'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
                  3
                </div>
                <h3 className='text-xl font-bold'>Start Developing</h3>
                <p className='text-center text-gray-500 dark:text-gray-400'>
                  Download your boilerplate and start building right away.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id='pricing'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
              Simple, Transparent Pricing
            </h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                  <h3 className='text-2xl font-bold'>Free</h3>
                  <p className='text-4xl font-bold'>$0</p>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    Perfect for side projects
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      Basic boilerplate generation
                    </li>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      Limited tech stack options
                    </li>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      Community support
                    </li>
                  </ul>
                  <Button className='w-full'>Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                  <h3 className='text-2xl font-bold'>Pro</h3>
                  <p className='text-4xl font-bold'>$19/mo</p>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    For serious developers
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      Advanced boilerplate customization
                    </li>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      Full tech stack library
                    </li>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      Priority email support
                    </li>
                  </ul>
                  <Button className='w-full'>Subscribe</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center space-y-4 p-6'>
                  <h3 className='text-2xl font-bold'>Enterprise</h3>
                  <p className='text-4xl font-bold'>Custom</p>
                  <p className='text-center text-gray-500 dark:text-gray-400'>
                    For large teams and organizations
                  </p>
                  <ul className='space-y-2'>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      Custom boilerplate solutions
                    </li>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      Dedicated account manager
                    </li>
                    <li className='flex items-center'>
                      <CheckIcon className='mr-2 h-4 w-4 text-primary' />
                      24/7 phone and email support
                    </li>
                  </ul>
                  <Button className='w-full'>Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Ready to Supercharge Your Development?
                </h2>
                <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
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
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 QuickStart Boilerplate. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
