import { Subscription } from "@paddle/paddle-node-sdk";
import Image from "next/image";
import { parseMoney } from "@/utils/paddle/parse-money";
import dayjs from "dayjs";
import { SubscriptionAlerts } from "./subscription-alert";
import { SubscriptionHeaderActionButton } from "./subscription-header-action-button";
import { Status } from "@/components/global/status";

interface Props {
  subscription: Subscription;
}

export function SubscriptionHeader({ subscription }: Props) {
  const subscriptionItem = subscription.items[0];

  const price =
    subscriptionItem.quantity *
    parseFloat(subscription?.recurringTransactionDetails?.totals.total ?? "0");
  const formattedPrice = parseMoney(
    price.toString(),
    subscription.currencyCode
  );
  const frequency =
    subscription.billingCycle.frequency === 1
      ? `/${subscription.billingCycle.interval}`
      : `every ${subscription.billingCycle.frequency} ${subscription.billingCycle.interval}s`;

  const formattedStartedDate = dayjs(subscription.startedAt).format(
    "MMM DD, YYYY"
  );

  return (
    <div
      className={
        "flex justify-between items-start sm:items-center flex-col sm:flex-row mb-6 sm:mb-0"
      }
    >
      <div className={"flex w-full flex-col"}>
        <SubscriptionAlerts subscription={subscription} />
        <div className={"flex items-center gap-5"}>
          {subscriptionItem.product.imageUrl && (
            <Image
              src={subscriptionItem.product.imageUrl}
              alt={subscriptionItem.product.name}
              width={48}
              height={48}
            />
          )}
          <span className={"text-4xl font-medium leading-9"}>
            {subscriptionItem.product.name}
          </span>
        </div>
        <div
          className={"flex flex-wrap items-center gap-6 py-8 pb-6 md:flex-wrap"}
        >
          <div className={"flex items-end gap-1"}>
            <span className={"text-4xl font-medium leading-9"}>
              {formattedPrice}
            </span>
            <span
              className={"text-sm font-medium leading-[14px] text-secondary"}
            >
              {frequency}
            </span>
          </div>
          <div>
            <Status status={subscription.status} />
          </div>
        </div>
        <div className={"pb-8 text-base leading-5 text-secondary"}>
          Started on: {formattedStartedDate}
        </div>
      </div>
      <div>
        {!(
          subscription.scheduledChange || subscription.status === "canceled"
        ) && (
          <SubscriptionHeaderActionButton subscriptionId={subscription.id} />
        )}
      </div>
    </div>
  );
}
