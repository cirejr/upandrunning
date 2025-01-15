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
import { NotificationCards } from "./notification-cards";
import { Grid } from "./grid-pattern";

export default function Benefits() {
  return (
    <section id="benefits" className="relative">
      <main className="container overflow-x-hidden py-14 backdrop-blur-3xl backdrop-filter">
        <div className="mb-20 px-8">
          <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            We save you countless <span className="text-primary">hours</span> of
            setup time
          </h1>
          <p className="mx-auto my-4 max-w-2xl text-center text-muted-foreground md:text-xl">
            We&apos;ve got you covered. We&apos;ll handle the setup for you, so
            you can focus on building your app.
          </p>
        </div>
        <PlusCornerSection className="-mb-12 border py-10">
          <div className="px-8">
            <h4 className="mx-auto max-w-5xl text-center text-2xl font-semibold">
              You go from this <span className="text-red-500">unending </span>{" "}
              waste of time
            </h4>
          </div>
        </PlusCornerSection>
        <div className="relative mx-auto overflow-x-hidden">
          <div className="relative">
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-6 xl:border">
              <Grid size={30} />
              <NotificationCards className="col-span-6 h-[650px]" />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
