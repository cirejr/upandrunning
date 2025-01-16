import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PaymentType, Transaction } from "@paddle/paddle-node-sdk";
import { PaymentMethodDetails } from "./payment-method-details";

function findPaymentMethodDetails(transactions?: Transaction[]) {
  const transactionWithPaymentDetails = transactions?.find(
    (transaction) => transaction.payments[0]?.methodDetails
  );
  const firstValidPaymentMethod =
    transactionWithPaymentDetails?.payments[0].methodDetails;
  return firstValidPaymentMethod
    ? firstValidPaymentMethod
    : { type: "unknown" as PaymentType, card: null };
}

interface Props {
  updatePaymentMethodUrl?: string | null;
  transactions?: Transaction[];
}

export function PaymentMethodSection({
  transactions,
  updatePaymentMethodUrl,
}: Props) {
  const { type, card } = findPaymentMethodDetails(transactions);
  if (type === "unknown") {
    return null;
  }
  return (
    <div
      className={"@16xs:flex-wrap flex items-end justify-between gap-6 pt-6"}
    >
      <div className={"flex flex-col gap-4"}>
        <div className={"whitespace-nowrap text-base leading-4 text-secondary"}>
          Payment method
        </div>
        <div className={"flex items-end gap-1"}>
          <PaymentMethodDetails type={type} card={card} />
        </div>
      </div>
      {updatePaymentMethodUrl && (
        <div>
          <Button
            asChild={true}
            size={"sm"}
            className={"rounded-sm border-border text-sm"}
            variant={"outline"}
          >
            <Link target={"_blank"} href={updatePaymentMethodUrl}>
              Update
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
