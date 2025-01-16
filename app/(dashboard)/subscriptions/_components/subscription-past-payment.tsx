import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Transaction } from "@paddle/paddle-node-sdk";
import dayjs from "dayjs";
import { parseMoney } from "@/utils/paddle/parse-money";
import { getPaymentReason } from "@/utils/paddle/data-helpers";
import { Status } from "@/components/global/status";

interface Props {
  subscriptionId: string;
  transactions?: Transaction[];
}

export function SubscriptionPastPaymentsCard({
  subscriptionId,
  transactions,
}: Props) {
  return (
    <Card
      className={
        "bg-background/50 backdrop-blur-[24px] border-border p-6 @container"
      }
    >
      <CardTitle className="flex flex-wrap items-center justify-between border-b border-border pb-6">
        <span className={"text-xl font-medium"}>Payments</span>
        <Button
          asChild={true}
          size={"sm"}
          variant={"outline"}
          className={"rounded-sm border-border text-sm"}
        >
          <Link href={`/dashboard/payments/${subscriptionId}`}>View all</Link>
        </Button>
      </CardTitle>
      <CardContent className={"p-0"}>
        {transactions?.slice(0, 3).map((transaction) => {
          const formattedPrice = parseMoney(
            transaction.details?.totals?.total,
            transaction.currencyCode
          );
          return (
            <div
              key={transaction.id}
              className={"flex flex-col gap-4 border-b border-border py-6"}
            >
              <div className={"text-base leading-4 text-secondary"}>
                {dayjs(transaction.billedAt ?? transaction.createdAt).format(
                  "MMM DD, YYYY"
                )}
              </div>
              <div className={"flex flex-wrap items-center gap-5"}>
                <span className={"text-base font-semibold leading-4"}>
                  {getPaymentReason(transaction.origin)}
                </span>
                <span className={"text-base leading-6 text-secondary"}>
                  {transaction.details?.lineItems[0].product?.name}
                </span>
              </div>
              <div className={"flex flex-wrap items-center gap-5"}>
                <div className={"text-base font-semibold leading-4"}>
                  {formattedPrice}
                </div>
                <Status status={transaction.status} />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
