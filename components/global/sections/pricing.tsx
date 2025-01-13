"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getErrorRedirect } from "@/utils/helpers";
import { getStripe } from "@/utils/stripe/client";
import { checkoutWithStripe } from "@/utils/stripe/server";
import { Tables } from "@/utils/types_db";
import { User } from "@supabase/supabase-js";
import { Check, Cloud } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type Subscription = Tables<"subscriptions">;
type Product = Tables<"products">;
type Price = Tables<"prices">;
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = "lifetime" | "year" | "month";

export default function PricingSection({
  user,
  products,
  subscription,
}: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const currentPath = usePathname();

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push("/signin/signup");
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(
      price,
      currentPath
    );

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath,
          "An unknown error occurred.",
          "Please try again later or contact a system administrator."
        )
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  if (!products.length) {
    return (
      <section className="">
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center"></div>
          <p className="text-4xl font-extrabold text-white sm:text-center sm:text-5xl">
            No subscription pricing products found. Create them in your{" "}
            <a
              className="text-primary underline"
              href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stripe Dashboard
            </a>
            .
          </p>
        </div>
      </section>
    );
  } else {
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

              {/* Uncomment this if you want the billing intervals selection tab  */}

              {/* <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
              {intervals.includes('month') && (
                <button
                  onClick={() => setBillingInterval('month')}
                  type="button"
                  className={`${
                    billingInterval === 'month'
                      ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
                      : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
                  } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
                >
                  Monthly billing
                </button>
              )}
              {intervals.includes('year') && (
                <button
                  onClick={() => setBillingInterval('year')}
                  type="button"
                  className={`${
                    billingInterval === 'year'
                      ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
                      : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
                  } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
                >
                  Yearly billing
                </button>
              )}
            </div> */}
            </div>
            <div className="grid gap-px md:grid-cols-4">
              {products.map((product, index) => {
                const price = product?.prices?.find(
                  (price) => price.interval === billingInterval
                );
                if (!price) return null;
                const priceString = new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: price.currency!,
                  minimumFractionDigits: 0,
                }).format((price?.unit_amount || 0) / 100);
                return (
                  <div
                    key={index}
                    className={`flex flex-col  ${
                      index === 0
                        ? "rounded-tl-lg rounded-bl-lg border-r"
                        : index === products.length - 1
                        ? "rounded-tr-lg rounded-br-lg"
                        : ""
                    } ${
                      product.name === "Pro" //Replace Pro with the product you want to be highlighted
                        ? "bg-zinc-300 dark:bg-gradient-to-br from-zinc-700 to-stone-950 -m-px rounded-lg shadow-lg z-20"
                        : ""
                    }`}
                  >
                    <div className="h-[180px] p-6">
                      <h3 className="mb-2 text-xl font-bold text-primary">
                        {product.name}
                      </h3>
                      <div className="mb-2 text-3xl font-bold">
                        {priceString}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                    <Separator className="" />
                    <div className="flex flex-grow flex-col p-6">
                      {/*  Uncomment this if you've added a features array to a product metadata */}
                      {/* <ul className="flex-grow space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check
                          className={`mr-2 h-5 w-5 flex-shrink-0 text-green-500 ${
                            product.name === "Pro" ? "text-white" : "" //Replace Pro with the product you want to be highlighted
                          }`}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul> */}
                      <Button
                        variant={
                          product.name === "Pro" ? "secondary" : "outline"
                        }
                        onClick={() => handleStripeCheckout(price)}
                        className={`mt-6 rounded-lg border-primary px-4 py-2 font-semibold transition-colors ${
                          product.name === "Pro"
                            ? ""
                            : "hover:bg-primary hover:text-background"
                        }`}
                      >
                        {subscription ? "Manage" : "Subscribe"}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
