"use client";

import { PriceSection } from "./price-section";
import { Environments, initializePaddle, Paddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CheckoutEventsData } from "@paddle/paddle-js/types/checkout/events";

interface PathParams {
  priceId: string;
  [key: string]: string | string[];
}

interface Props {
  userEmail?: string;
}

export function CheckoutContents({ userEmail }: Props) {
  const { priceId } = useParams<PathParams>();
  const [quantity, setQuantity] = useState<number>(1);
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const [checkoutData, setCheckoutData] = useState<CheckoutEventsData | null>(
    null
  );

  const handleCheckoutEvents = (event: CheckoutEventsData) => {
    setCheckoutData(event);
  };

  useEffect(() => {
    if (
      !paddle?.Initialized &&
      process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN &&
      process.env.NEXT_PUBLIC_PADDLE_ENV
    ) {
      initializePaddle({
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environments,
        eventCallback: (event) => {
          if (event.data && event.name) {
            handleCheckoutEvents(event.data);
          }
        },
        checkout: {
          settings: {
            displayMode: "inline",
            theme: "light",
            allowLogout: !userEmail,
            frameTarget: "paddle-checkout-frame",
            frameInitialHeight: 450,
            frameStyle: "width: 100%; ; border: none",
            successUrl: "/checkout/success",
          },
        },
      }).then(async (paddle) => {
        if (paddle && priceId) {
          setPaddle(paddle);
          paddle.Checkout.open({
            ...(userEmail && { customer: { email: userEmail } }),
            items: [{ priceId: priceId, quantity: 1 }],
          });
        }
      });
    }
  }, [paddle?.Initialized, priceId, userEmail]);

  useEffect(() => {
    if (paddle && priceId && paddle.Initialized) {
      paddle.Checkout.updateItems([{ priceId: priceId, quantity: quantity }]);
    }
  }, [paddle, priceId, quantity]);

  return (
    <div className="relative z-50 flex flex-col justify-between rounded-lg pb-12 md:min-h-[400px] md:p-10 md:pl-16 md:pt-16 md:backdrop-blur-[24px]">
      <div className={"flex flex-col gap-8 md:flex-row md:gap-16"}>
        <div className={"w-full md:w-[400px]"}>
          <PriceSection
            checkoutData={checkoutData}
            quantity={quantity}
            handleQuantityChange={setQuantity}
          />
        </div>
        <div className={"min-w-[375px] lg:min-w-[535px]"}>
          <div className={"mb-8 text-base font-semibold leading-[20px]"}>
            Payment details
          </div>
          <div className={"paddle-checkout-frame"} />
        </div>
      </div>
    </div>
  );
}
