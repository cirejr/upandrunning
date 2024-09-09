/* 

title: We save you countless hours of setup time
description: 
  We've got you covered. We'll handle the setup for you, so you can focus on building your app.

full next js project setup // use next js code snippets
prebuilt landing page // show picture of pages stacked on top of each other
user auth setup // show user auth flow 3d illustration
email support // show email support flow 3d illustration
database setup // show db connection flow 3d illustration
payments setup // transactions flow 3d illustration
mutiple ui elements // show how to use multiple ui elements

beam grid, grid sections for  benefits, landing page, user auth, email support, database setup, payments setup, multiple ui elements

*/

import React from "react";
import { FeaturesGrid } from "./features-grid";
import BlurryBlob from "../ui/blurry-blob";
import { CurvedArrow01 } from "../icons/curved-arrow";
import PlusCornerSection from "@/app/(docs)/components/_components/plus-section";

export default function Benefits() {
  return (
    <section
      id='benefits'
      className='relative bg-soft-blue-gradient dark:bg-none dark:bg-contain dark:bg-no-repeat'
    >
      <main className='container overflow-x-hidden py-14 backdrop-blur-3xl backdrop-filter'>
        <div className='mb-20 px-8'>
          <h1 className='text-center text-3xl font-bold sm:text-4xl'>
            We save you countless hours of setup time
          </h1>
          <p className='mx-auto my-4 max-w-2xl text-center text-sm font-normal text-slate-500 dark:text-slate-300 lg:text-base'>
            We've got you covered. We'll handle the setup for you, so you can
            focus on building your app.
          </p>
        </div>
        <PlusCornerSection className='-mb-12 border py-10'>
          <div className='px-8'>
            <h4 className='mx-auto max-w-5xl text-center text-xl font-medium tracking-tight text-black dark:text-white lg:text-2xl lg:leading-tight'>
              You go from this unending mess
            </h4>
          </div>
        </PlusCornerSection>
        <FeaturesGrid />
      </main>
    </section>
  );
}
