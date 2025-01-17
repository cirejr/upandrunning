import { Check } from "lucide-react";

export function PricingFeatures({
  features,
  highlighted,
}: {
  features: string[];
  highlighted: boolean;
}) {
  return (
    <ul className="flex-grow space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center">
          <Check
            className={`mr-2 h-5 w-5 flex-shrink-0 text-green-500 ${
              highlighted ? "text-white" : ""
            }`}
          />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
