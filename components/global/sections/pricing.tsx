"use client";

import { PricingTier, Tier } from "@/constants/pricing-tier";
import { usePaddlePrices } from "@/hooks/use-paddle-prices";
import { Environments, initializePaddle, Paddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";
import { PricingCard } from "./pricing/pricing-card";
import {
  BillingFrequency,
  IBillingFrequency,
} from "@/constants/billing-frequency";
import { Toggle } from "./pricing/toggle";

export default function PricingSection({
  country = "US",
}: {
  country?: string;
}) {
  const [frequency, setFrequency] = useState<IBillingFrequency>(
    BillingFrequency[0]
  );
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);
  const { prices, loading } = usePaddlePrices(paddle, country);

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN &&
      process.env.NEXT_PUBLIC_PADDLE_ENV
    ) {
      initializePaddle({
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environments,
      }).then((paddle) => {
        if (paddle) {
          setPaddle(paddle);
        }
      });
    }
  }, []);

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12">
          <div className="flex flex-col justify-center text-center">
            <div className="space-y-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Flexible Pricing for{" "}
                <span className="text-primary">Every Team</span>
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Start for free with essential features. Upgrade for advanced
                components, custom templates, priority support, and tailored
                solutions for your growing business.
              </p>
            </div>
          </div>
          <Toggle frequency={frequency} setFrequency={setFrequency} />
          <div className="grid gap-px md:grid-cols-4">
            {PricingTier.map((tier, index) => (
              <PricingCard
                loading={loading}
                frequency={frequency}
                key={index}
                tier={tier}
                priceMap={prices}
                isFirst={index === 0}
                isLast={index === PricingTier.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
