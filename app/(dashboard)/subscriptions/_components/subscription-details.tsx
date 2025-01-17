"use client";

import { useEffect, useState } from "react";
import { getSubscription } from "@/utils/paddle/get-subscription";
import { getTransactions } from "@/utils/paddle/get-transactions";
import { Separator } from "@/components/ui/separator";
import {
  SubscriptionDetailResponse,
  TransactionResponse,
} from "@/lib/api.types";
import { LoadingScreen } from "../../_components/loading-screen";
import { SubscriptionHeader } from "./subscription-header";
import { SubscriptionNextPaymentCard } from "./subscription-next-payment";
import { SubscriptionPastPaymentsCard } from "./subscription-past-payment";
import { SubscriptionLineItems } from "./subscription-line-items";
import { ErrorContent } from "../../_components/error-content";

interface Props {
  subscriptionId: string;
}

export function SubscriptionDetail({ subscriptionId }: Props) {
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] =
    useState<SubscriptionDetailResponse>();
  const [transactions, setTransactions] = useState<TransactionResponse>();

  useEffect(() => {
    (async () => {
      const [subscriptionResponse, transactionsResponse] = await Promise.all([
        getSubscription(subscriptionId),
        getTransactions(subscriptionId, ""),
      ]);

      if (subscriptionResponse) {
        setSubscription(subscriptionResponse);
      }

      if (transactionsResponse) {
        setTransactions(transactionsResponse);
      }
      setLoading(false);
    })();
  }, [subscriptionId]);

  if (loading) {
    return <LoadingScreen />;
  } else if (subscription?.data && transactions?.data) {
    return (
      <>
        <div>
          <SubscriptionHeader subscription={subscription.data} />
          <Separator className={"relative mb-8 bg-border"} />
        </div>
        <div className={"grid grid-cols-1 gap-6 xl:grid-cols-6"}>
          <div className={"grid auto-rows-max grid-cols-1 gap-6 xl:col-span-2"}>
            <SubscriptionNextPaymentCard
              transactions={transactions.data}
              subscription={subscription.data}
            />
            <SubscriptionPastPaymentsCard
              transactions={transactions.data}
              subscriptionId={subscriptionId}
            />
          </div>
          <div className={"grid auto-rows-max grid-cols-1 gap-6 xl:col-span-4"}>
            <SubscriptionLineItems subscription={subscription.data} />
          </div>
        </div>
      </>
    );
  } else {
    return <ErrorContent />;
  }
}
