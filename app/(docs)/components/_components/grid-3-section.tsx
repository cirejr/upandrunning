import Features from "@/components/global/features";
import { Features02 } from "@/components/global/features02";
import React from "react";

type Items = {
  title: string;
  description: string;
  icon: React.JSX.Element;
};

export default function Grid3SectionDemo() {
  const itemsArr: Items[] = [
    {
      title: "Components",
      description:
        "Special UI components for your website made with React.js,TailwindCSS and FramerMotion.",
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 15 15'
          fill='none'
          className='fill-primary'
        >
          <path
            d='M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
      ),
    },
    {
      title: "Components",
      description:
        "Special UI components for your website made with React.js,TailwindCSS and FramerMotion.",
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 15 15'
          fill='none'
          className='fill-primary'
        >
          <path
            d='M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
      ),
    },
    {
      title: "Components",
      description:
        "Special UI components for your website made with React.js,TailwindCSS and FramerMotion.",
      icon: (
        <svg
          width='18'
          height='18'
          viewBox='0 0 15 15'
          fill='none'
          className='fill-primary'
        >
          <path
            d='M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
      ),
    },
  ];
  return (
    <Grid3Section
      items={itemsArr}
      title='Solutions That We Offer'
      description='Want to Build Something Special?'
      icon={
        <svg
          width='20'
          height='20'
          viewBox='0 0 15 15'
          fill='none'
          className='mb-[2px] fill-secondary'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
      }
    />
  );
}

export function Grid3SectionDemo02() {
  return (
    <Grid3Section>
      <Features02 />
    </Grid3Section>
  );
}

export function Grid3Section({
  items,
  title,
  description,
  icon,
  children,
}: {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: Items[];
  children?: React.ReactNode;
}) {
  return (
    <section className='container relative flex w-full items-start justify-start border'>
      <article className='flex h-full w-full flex-col items-center justify-center p-0 px-0 pt-16'>
        {/* heading */}
        <div className='flex w-full justify-center max-md:justify-start'>
          <div className='z-20 flex flex-col items-center max-md:items-start'>
            <div className='flex w-fit items-center gap-2 py-2 text-base font-normal text-muted-foreground sm:justify-center'>
              {icon}
              {title}
            </div>
            <h1 className='text-3xl font-bold sm:text-4xl'>{description}</h1>
          </div>
        </div>

        <div className='z-20 my-20 flex w-full items-start gap-5 max-md:flex-col max-md:gap-4 md:justify-between md:px-5'>
          {children}
          {items &&
            items.map((item, index) => (
              <div
                key={index}
                className='flex h-full w-full items-start justify-center max-md:justify-start'
              >
                <div className='flex flex-col items-start justify-between md:h-80 md:w-5/6'>
                  <span>
                    <div className='flex items-center gap-2'>
                      {item.icon}
                      <h1 className='text-2xl font-bold'>{item.title}</h1>
                    </div>
                    <p className='text-lg text-muted-foreground md:text-xl'>
                      {item.description}
                    </p>
                  </span>
                </div>
              </div>
            ))}
        </div>
      </article>
      <div className='absolute left-0 top-0 z-[10] flex h-full w-full max-md:hidden'>
        <div className='h-full w-1/3 border-r'></div>
        <div className='h-full w-1/3 border-r'></div>
        <div className='h-full w-1/3'></div>
      </div>
      <div className='absolute left-0 top-0 z-[10] flex h-full w-full md:hidden'>
        <div className='h-full w-1/2 border-r'></div>
      </div>
    </section>
  );
}
