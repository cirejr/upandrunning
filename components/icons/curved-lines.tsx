import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export function CurvedLines({ className }: { className?: ClassValue }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='276'
      height='90'
      fill='none'
      viewBox='0 0 276 90'
      className={cn("", className)}
    >
      <path
        stroke='#414141'
        stroke-width='2'
        d='M1 40l86.787-1.912a88 88 0 0149.243 13.775l35.829 22.841A88.001 88.001 0 00220.164 88.5H276'
      ></path>
      <path
        stroke='url(#paint0_linear_10586_6002)'
        stroke-opacity='0.8'
        stroke-width='2'
        d='M1 40l86.787-1.912a88 88 0 0149.243 13.775l35.829 22.841A88.001 88.001 0 00220.164 88.5H276'
      ></path>
      <path
        stroke='#68CC58'
        stroke-width='1.5'
        d='M1 40h14.077A87.098 87.098 0 0070 20.5l6.15-4.996A64.782 64.782 0 01117 1'
      ></path>
      <path
        stroke='url(#paint1_linear_10586_6002)'
        stroke-opacity='0.8'
        stroke-width='2'
        d='M1 40h14.077A87.098 87.098 0 0070 20.5l6.15-4.996A64.782 64.782 0 01117 1'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_10586_6002'
          x1='19'
          x2='59'
          y1='44'
          y2='44'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#0B0C0D'></stop>
          <stop offset='1' stop-color='#0B0C0D' stop-opacity='0'></stop>
        </linearGradient>
        <linearGradient
          id='paint1_linear_10586_6002'
          x1='19'
          x2='59'
          y1='44'
          y2='44'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#0B0C0D'></stop>
          <stop offset='1' stop-color='#0B0C0D' stop-opacity='0'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
