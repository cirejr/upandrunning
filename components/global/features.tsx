import { cn } from "@/lib/utils";
import {
  Code,
  CreditCard,
  Globe,
  Layout,
  Mail,
  ShieldCheck,
  Smile,
  Terminal,
  Users,
} from "lucide-react";

export default function Features() {
  return (
    <section className='dark:none bg-gradient-transparent py-14 backdrop-blur-xl backdrop:filter dark:bg-cover dark:bg-left-top dark:bg-no-repeat'>
      <div className='mx-auto mb-7 max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          Key Features
        </h1>
        <p className=''>
          This pre-configured tech stack is the perfect solution for your next
          project.
        </p>
      </div>
      <div className='container relative z-10 mx-auto grid max-w-7xl grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-4'>
        {/* replace tools.map with features.map and get a different look */}
        {tools.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description?: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r lg:first:rounded-tl-lg lg:last:rounded-br-lg lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(4)]:rounded-tr-lg lg:[&:nth-child(5)]:rounded-bl-lg py-10 relative group/feature backdrop-blur-lg hover:shadow-lg",
        (index === 0 || index === 4) && "",
        index < 4 && "lg:border-b",
      )}
    >
      {index < 4 && (
        <div className='pointer-events-none absolute inset-0 h-full w-full bg-transparent opacity-0 backdrop-blur-md backdrop-filter transition duration-200 group-hover/feature:opacity-100' />
      )}
      {index >= 4 && (
        <div className='pointer-events-none absolute inset-0 h-full w-full bg-transparent opacity-0 backdrop-blur-md backdrop-filter transition duration-200 group-hover/feature:opacity-100' />
      )}
      <div className='relative z-10 mb-4 px-10 text-emerald-600 dark:text-emerald-400'>
        {icon}
      </div>
      <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
        <div className='absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-emerald-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-emerald-500 dark:bg-emerald-700' />
        <span className='inline-block transition duration-200 group-hover/feature:translate-x-2'>
          {title}
        </span>
      </div>
      {description && (
        <p className='relative z-10 max-w-xs px-10 text-sm'>{description}</p>
      )}
    </div>
  );
};

const features = [
  {
    title: "Built for Developers",
    description:
      "Designed for engineers and developers to quickly bootstrap scalable SaaS applications with modern technologies.",
    icon: <Terminal />,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Includes Next.js, Tailwind CSS, Prisma, PostgreSQL, and more, so you can build with the latest and most powerful tools.",
    icon: <Code />,
  },
  {
    title: "Ready-to-Use Components",
    description:
      "Access a growing library of pre-built UI components and templates, helping you save time and focus on building core features.",
    icon: <Layout />,
  },
  {
    title: "Authentication & Security",
    description:
      "Implement authentication with NextAuth, social logins, and advanced security features out of the box.",
    icon: <ShieldCheck />,
  },
  {
    title: "Multi-language Support",
    description:
      "Easily add internationalization with next-i18n, ensuring your app is accessible to a global audience.",
    icon: <Globe />,
  },
  {
    title: "Seamless Billing Integration",
    description:
      "Set up billing with Stripe, LemonSqueezy, or Paddle in minutes, with built-in support for subscriptions and payments.",
    icon: <CreditCard />,
  },
  {
    title: "Email & Notifications",
    description:
      "Pre-configured transactional email support using SMTP or email APIs, integrated with popular providers like Mailchimp.",
    icon: <Mail />,
  },
  {
    title: "Active Community & Support",
    description:
      "Join a vibrant community of developers with access to documentation, tutorials, and support to help you succeed.",
    icon: <Users />,
  },
];

const tools = [
  {
    title: "Next.js",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='fill-black dark:fill-white'
        viewBox='0 -60 600 160'
      >
        <path d='M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z' />
        <path d='M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z' />
      </svg>
    ),
  },
  {
    title: "TypeScript",
    icon: (
      <svg
        fill='none'
        height='512'
        viewBox='0 0 512 512'
        width='512'
        className='h-12 w-12'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect fill='#3178c6' height='512' rx='50' width='512' />
        <rect fill='#3178c6' height='512' rx='50' width='512' />
        <path
          clipRule='evenodd'
          d='m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z'
          fill='#fff'
          fillRule='evenodd'
        />
      </svg>
    ),
  },
  {
    title: "Supabase",
    icon: (
      <svg viewBox='0 0 109 113' className='h-12 w-12'>
        <path
          d='M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z'
          fill='url(#supabase-icon-mark_svg__a)'
        ></path>
        <path
          d='M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z'
          fill='url(#supabase-icon-mark_svg__b)'
          fillOpacity='.2'
        ></path>
        <path
          d='M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.758-9.46-7.665-15.875L45.317 2.071z'
          fill='#3ECF8E'
        ></path>
        <defs>
          <linearGradient
            gradientUnits='userSpaceOnUse'
            id='supabase-icon-mark_svg__a'
            x1='53.974'
            x2='94.163'
            y1='54.974'
            y2='71.829'
          >
            <stop stopColor='#249361'></stop>
            <stop offset='1' stopColor='#3ECF8E'></stop>
          </linearGradient>
          <linearGradient
            gradientUnits='userSpaceOnUse'
            id='supabase-icon-mark_svg__b'
            x1='36.156'
            x2='54.484'
            y1='30.578'
            y2='65.081'
          >
            <stop></stop>
            <stop offset='1' stopOpacity='0'></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "shadcn",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 256 256'
        className='h-12 w-12 text-black dark:text-white'
      >
        <rect width='256' height='256' fill='none' />
        <line
          x1='208'
          y1='128'
          x2='128'
          y2='208'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></line>
        <line
          x1='192'
          y1='40'
          x2='40'
          y2='192'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></line>
      </svg>
    ),
  },
  {
    title: "Tailwind",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 54 33'
        className='h-12 w-12'
      >
        <g clipPath='url(#prefix__clip0)'>
          <path
            fill='#38bdf8'
            fillRule='evenodd'
            d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z'
            clipRule='evenodd'
          />
        </g>
        <defs>
          <clipPath id='prefix__clip0'>
            <path fill='#fff' d='M0 0h54v32.4H0z' />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Resend",
    icon: (
      <svg
        viewBox='160 60 400 400'
        fill='none'
        className='h-12 w-12 fill-black dark:fill-white'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z' />
      </svg>
    ),
  },
  {
    title: "Stripe",
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='50 50 600 120'
        className='fill-[#635bff]'
      >
        <g>
          <path
            className='st0'
            d='M414,113.4c0-25.6-12.4-45.8-36.1-45.8c-23.8,0-38.2,20.2-38.2,45.6c0,30.1,17,45.3,41.4,45.3
		c11.9,0,20.9-2.7,27.7-6.5v-20c-6.8,3.4-14.6,5.5-24.5,5.5c-9.7,0-18.3-3.4-19.4-15.2h48.9C413.8,121,414,115.8,414,113.4z
		 M364.6,103.9c0-11.3,6.9-16,13.2-16c6.1,0,12.6,4.7,12.6,16H364.6z'
          />
          <path
            className='st0'
            d='M301.1,67.6c-9.8,0-16.1,4.6-19.6,7.8l-1.3-6.2h-22v116.6l25-5.3l0.1-28.3c3.6,2.6,8.9,6.3,17.7,6.3
		c17.9,0,34.2-14.4,34.2-46.1C335.1,83.4,318.6,67.6,301.1,67.6z M295.1,136.5c-5.9,0-9.4-2.1-11.8-4.7l-0.1-37.1
		c2.6-2.9,6.2-4.9,11.9-4.9c9.1,0,15.4,10.2,15.4,23.3C310.5,126.5,304.3,136.5,295.1,136.5z'
          />
          <polygon
            className='st0'
            points='223.8,61.7 248.9,56.3 248.9,36 223.8,41.3 	'
          />
          <rect x='223.8' y='69.3' className='st0' width='25.1' height='87.5' />
          <path
            className='st0'
            d='M196.9,76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7,15.9-6.3,19-5.2v-23C214.5,68.1,202.8,65.9,196.9,76.7z'
          />
          <path
            className='st0'
            d='M146.9,47.6l-24.4,5.2l-0.1,80.1c0,14.8,11.1,25.7,25.9,25.7c8.2,0,14.2-1.5,17.5-3.3V135
		c-3.2,1.3-19,5.9-19-8.9V90.6h19V69.3h-19L146.9,47.6z'
          />
          <path
            className='st0'
            d='M79.3,94.7c0-3.9,3.2-5.4,8.5-5.4c7.6,0,17.2,2.3,24.8,6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6
		C67.5,67.6,54,78.2,54,95.9c0,27.6,38,23.2,38,35.1c0,4.6-4,6.1-9.6,6.1c-8.3,0-18.9-3.4-27.3-8v23.8c9.3,4,18.7,5.7,27.3,5.7
		c20.8,0,35.1-10.3,35.1-28.2C117.4,100.6,79.3,105.9,79.3,94.7z'
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Auth.js",
    icon: (
      <svg
        viewBox='0 0 210 232'
        className='h-12 w-12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M208.687 31.859L30.0947 167.73C8.16388 127.966 0.567559 79.9975 0 51.2275V33.6181C0 31.0567 2.7788 29.5628 4.16851 29.1356C33.5617 20.2778 93.2465 2.30524 96.8378 1.28069C100.429 0.256138 103.464 0 104.534 0H104.631C105.7 0 108.735 0.256138 112.327 1.28069C115.918 2.30524 175.603 20.2778 204.996 29.1356C206.03 29.4533 207.832 30.3613 208.687 31.859Z'
          fill='url(#paint0_linear_128_61)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M30.0938 167.952L208.686 32.0815C208.981 32.5983 209.164 33.1842 209.164 33.8406V51.45C208.202 100.223 187.038 204.172 110.081 229.786C109.013 230.213 106.49 231.067 104.951 231.067H104.212C102.673 231.067 100.15 230.213 99.0814 229.786C67.5193 219.281 45.3415 195.6 30.0938 167.952Z'
          fill='url(#paint1_linear_128_61)'
        />
        <path
          d='M111.74 1.28325C108.147 0.25665 105.11 0 104.04 0L103.719 231.305H104.361C105.901 231.305 108.425 230.45 109.494 230.022C186.489 204.357 207.663 100.2 208.625 51.3299V33.6853C208.625 31.1188 205.845 29.6216 204.454 29.1939C175.047 20.3181 115.333 2.30985 111.74 1.28325Z'
          fill='url(#paint2_linear_128_61)'
          fill-opacity='0.21'
        />
        <ellipse
          cx='104.905'
          cy='114.209'
          rx='47.801'
          ry='47.4802'
          fill='#E3E2FA'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M96.2435 124.475C92.6077 124.796 83.4111 123.192 78.9197 119.342C74.0971 115.208 71.541 109.718 71.541 101.697C71.541 91.7469 80.5239 81.1654 93.0355 81.4861C104.919 81.7907 112.934 88.4894 114.53 99.1307C115.363 104.684 114.514 107.353 113.854 109.426C113.752 109.749 113.654 110.057 113.568 110.359C113.247 111.429 112.798 113.76 113.568 114.53C114.337 115.3 126.079 126.614 131.854 132.174C132.388 132.816 133.458 134.42 133.458 135.703V141.799C133.458 142.761 133.201 143.082 132.175 143.082H119.342C118.594 142.975 117.096 142.248 117.096 140.195C117.096 138.006 116.863 137.684 116.396 137.039C116.316 136.928 116.228 136.807 116.134 136.666C115.492 135.703 114.209 135.703 112.926 135.703C111.643 135.703 110.68 135.382 110.039 134.741C109.397 134.099 109.397 133.137 109.718 131.854C110.039 130.57 109.718 129.287 109.076 128.966C108.974 128.915 108.856 128.848 108.723 128.772C108.019 128.372 106.896 127.734 105.547 128.004C103.943 128.325 101.697 128.004 100.414 126.721C99.131 125.437 97.5267 124.401 96.2435 124.475ZM87.5814 100.094C90.2391 100.094 92.3936 97.9393 92.3936 95.2816C92.3936 92.6239 90.2391 90.4694 87.5814 90.4694C84.9237 90.4694 82.7692 92.6239 82.7692 95.2816C82.7692 97.9393 84.9237 100.094 87.5814 100.094Z'
          fill='url(#paint3_linear_128_61)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_128_61'
            x1='19.5695'
            y1='96.5644'
            x2='97.5269'
            y2='15.0782'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#45FFC8' />
            <stop offset='1' stop-color='#1DBBF1' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_128_61'
            x1='73.7856'
            y1='143.724'
            x2='170.671'
            y2='190.884'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#D14AE8' />
            <stop offset='0.552228' stop-color='#B628E3' />
            <stop offset='1' stop-color='#8315FD' />
          </linearGradient>
          <linearGradient
            id='paint2_linear_128_61'
            x1='155.914'
            y1='21.8152'
            x2='155.914'
            y2='182.542'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#20ABF5' />
            <stop offset='0.398093' stop-color='#2A8CC3' />
            <stop offset='1' stop-color='#A104DC' />
          </linearGradient>
          <linearGradient
            id='paint3_linear_128_61'
            x1='90.1481'
            y1='99.4517'
            x2='129.287'
            y2='138.912'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FE5B01' />
            <stop offset='1' stop-color='#FFB200' />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
