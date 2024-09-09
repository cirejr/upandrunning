"use client";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export function AnimatedNumberInView() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(72);
  }

  return (
    <div className='' ref={ref}>
      <AnimatedNumber
        className='inline-flex items-center font-mono text-6xl font-light text-background dark:text-foreground'
        springOptions={{
          bounce: 0,
          duration: 10000,
        }}
        value={value}
      />
    </div>
  );
}
