import { Card } from "@/components/ui/card";
import { Subscription, Transaction } from "@paddle/paddle-node-sdk";
import dayjs from "dayjs";
import { parseMoney } from "@/utils/paddle/parse-money";
import { PaymentMethodSection } from "./payment-method-section";

interface Props {
  transactions?: Transaction[];
  subscription?: Subscription;
}

export function SubscriptionNextPaymentCard({
  subscription,
  transactions,
}: Props) {
  if (!subscription?.nextBilledAt) {
    return null;
  }
  return (
    <Card
      className={
        "bg-background/50 backdrop-blur-[24px] border-border p-6 @container"
      }
    >
      <div className={"flex flex-col gap-6 border-b border-border pb-6"}>
        <div className={"text-xl font-medium"}>Next payment</div>
        <div className={"@16xs:flex-wrap flex items-end gap-1"}>
          <span className={"text-xl font-medium leading-5 text-primary"}>
            {parseMoney(
              subscription?.nextTransaction?.details.totals.total,
              subscription?.currencyCode
            )}
          </span>
          <span className={"text-base leading-4 text-secondary"}>due</span>
          <span className={"ext-base font-semibold leading-4 text-primary"}>
            {dayjs(subscription?.nextBilledAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <PaymentMethodSection
        transactions={transactions}
        updatePaymentMethodUrl={
          subscription?.managementUrls?.updatePaymentMethod
        }
      />
    </Card>
  );
}
