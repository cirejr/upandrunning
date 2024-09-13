import GlassyCard from "@/components/global/glassy-card";
import GradientCard from "@/components/global/gradient-card";
import { ZapIcon } from "lucide-react";
import React from "react";

export default function GradientCardDemo() {
  return (
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
  );
}
