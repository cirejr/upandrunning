import { Separator } from "@/components/ui/separator";
import { PricingHeader } from "./pricing-header";
import { PricingFeatures } from "./pricing-features";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tier } from "@/constants/pricing-tier";
import { IBillingFrequency } from "@/constants/billing-frequency";

interface Props {
  loading: boolean;
  frequency: IBillingFrequency;
  priceMap: Record<string, string>;
  tier: Tier;
  isFirst: boolean;
  isLast: boolean;
}

export function PricingCard({
  tier,
  isFirst,
  isLast,
  priceMap,
  loading,
  frequency,
}: Props) {
  return (
    <div
      className={`flex flex-col ${
        isFirst
          ? "rounded-tl-lg rounded-bl-lg md:border-r "
          : isLast
          ? "rounded-tr-lg rounded-br-lg"
          : ""
      } ${
        tier.featured
          ? "bg-zinc-300 dark:bg-gradient-to-br from-zinc-700 to-stone-950 -m-px rounded-lg shadow-lg z-20"
          : ""
      }`}
    >
      <PricingHeader
        tier={tier}
        priceMap={priceMap}
        loading={loading}
        name={tier.name}
        value={frequency.value}
        priceSuffix={frequency.priceSuffix}
        description={tier.description}
      />
      <Separator className={`${tier.featured && "mt-4 sm:mt-0 "}`} />
      <div className="flex flex-grow flex-col p-6">
        <PricingFeatures features={tier.features} highlighted={tier.featured} />
        {tier.externalLink ? (
          <Button variant="outline" asChild>
            <Link
              href={tier.externalLink}
              className={`mt-6 w-full rounded-lg border-primary px-4 py-2 font-semibold transition-colors hover:bg-primary hover:text-background`}
            >
              {tier.isEntreprise ? "Contact our team" : "Browse templates"}
            </Link>
          </Button>
        ) : (
          <Button
            variant={tier.featured ? "secondary" : "outline"}
            className={`mt-6 rounded-lg border-primary px-4 py-2 font-semibold transition-colors ${
              tier.featured ? "" : "hover:bg-primary hover:text-background"
            }`}
          >
            <Link href={`/checkout/${tier.priceId?.[frequency.value]}`}>
              Subscribe now
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
