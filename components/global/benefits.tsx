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

*/

import { ZapIcon } from "lucide-react";
import React from "react";
import GradientCard from "./gradient-card";
import GlassyCard from "./glassy-card";

export default function Benefits() {
  return (
    <section
      id='benefits'
      className='py-14 dark:bg-darker-bleu dark:bg-cover dark:bg-bottom dark:bg-no-repeat'
    >
      <div className='mb-20 px-8'>
        <h4 className='mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black dark:text-white lg:text-5xl lg:leading-tight'>
          We save you countless hours of setup time
        </h4>

        <p className='mx-auto my-4 max-w-2xl text-center text-sm font-normal text-slate-500 dark:text-slate-300 lg:text-base'>
          We've got you covered. We'll handle the setup for you, so you can
          focus on building your app.
        </p>
      </div>
      <GradientCard
        icon={<ZapIcon className='mb-4 h-12 w-12 text-blue-400' />}
        title='Fasten your app to the ground'
        description='Get up and running in minutes with simple commands'
        isBottomShaded
      >
        <div className='relative h-44'>
          {["Time", "Security", "Front"].map((platform, index) => (
            <GlassyCard
              key={index}
              title={platform}
              description='Sample issue for Zendesk'
              className={`absolute ${
                index === 0
                  ? "bottom-0 left-0 !backdrop-blur-3xl !backdrop-filter !bg-opacity-100"
                  : index === 1
                  ? "bottom-8 left-4 !bg-opacity-100"
                  : "bottom-16 left-8"
              } z-${30 - index * 10}`}
            />
          ))}
        </div>
      </GradientCard>
    </section>
  );
}
