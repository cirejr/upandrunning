import { Tier } from "@/constants/pricing-tier";
import { PriceAmount } from "./pricing-amount";

interface Props {
  loading: boolean;
  tier: Tier;
  priceMap: Record<string, string>;
  value: string;
  priceSuffix: string;
  name: string;
  description: string;
}
export function PricingHeader({
  name,
  value,
  priceSuffix,
  priceMap,
  loading,
  tier,
  description,
}: Props) {
  return (
    <div className={`h-[180px] p-6 ${tier.featured && "mb-6 sm:mb-0"}`}>
      <h3 className="mb-2 text-xl font-bold text-primary">{name}</h3>
      <div className="mb-2 text-3xl font-bold">
        <PriceAmount
          loading={loading}
          tier={tier}
          value={value}
          priceMap={priceMap}
          priceSuffix={priceSuffix}
        />
      </div>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
