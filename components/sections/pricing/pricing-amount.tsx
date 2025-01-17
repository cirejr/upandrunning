import { Tier } from "@/constants/pricing-tier";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  loading: boolean;
  tier: Tier;
  priceMap: Record<string, string>;
  value: string;
  priceSuffix: string;
}

export function PriceAmount({
  loading,
  priceMap,
  priceSuffix,
  tier,
  value,
}: Props) {
  return (
    <div className="mt-6 flex flex-col">
      {loading ? (
        <Skeleton className="h-[30px] w-full bg-border" />
      ) : (
        <div className="flex gap-4">
          <div className={cn("leading-[30px] tracking-[-1.6px] font-medium")}>
            {tier.priceId &&
              priceMap[tier.priceId[value]]?.replace(/\.00$/, "")}
          </div>
          <div className={cn("font-medium leading-[12px] text-[14px]")}>
            {!tier.isEntreprise && priceSuffix}
          </div>
        </div>
      )}
    </div>
  );
}
