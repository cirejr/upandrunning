import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Subscription } from "@paddle/paddle-node-sdk";
import { Fragment } from "react";
import { parseMoney } from "@/utils/paddle/parse-money";
import Image from "next/image";

interface Props {
  subscription?: Subscription;
}

export function SubscriptionLineItems({ subscription }: Props) {
  return (
    <Card className={"border-border bg-background/50 p-6 backdrop-blur-[24px]"}>
      <CardTitle className="flex items-center justify-between border-b border-border pb-6">
        <span className={"text-xl font-medium"}>
          Recurring products in this subscription
        </span>
      </CardTitle>
      <CardContent className={"p-0 pt-10"}>
        <div className={"grid grid-cols-12"}>
          <div className={"col-span-6"}></div>
          <div className={"col-span-6 flex w-full gap-6"}>
            <div
              className={"col-span-2 w-full text-base font-semibold leading-4"}
            >
              Qty
            </div>
            <div
              className={"col-span-2 w-full text-base font-semibold leading-4"}
            >
              Tax
            </div>
            <div
              className={
                "col-span-2 w-full text-base leading-4 font-semibold text-right"
              }
            >
              <span>Amount</span>
              <span
                className={"text-sm font-normal leading-[14px] text-secondary"}
              >
                (exc. tax)
              </span>
            </div>
          </div>

          {subscription?.recurringTransactionDetails?.lineItems.map(
            (lineItem) => {
              return (
                <Fragment key={lineItem.priceId}>
                  <div className={"col-span-6 border-b border-border py-6"}>
                    <div className={"flex items-center gap-4"}>
                      <div>
                        {lineItem.product.imageUrl && (
                          <Image
                            src={lineItem.product.imageUrl}
                            width={48}
                            height={48}
                            alt={lineItem.product.name}
                          />
                        )}
                      </div>
                      <div className={"flex flex-col gap-3 px-4"}>
                        <div className={"text-base font-semibold leading-6"}>
                          {lineItem.product.name}
                        </div>
                        <div className={"text-base leading-6 text-secondary"}>
                          {lineItem.product.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      "flex gap-6 w-full col-span-6 items-center border-border border-b py-6"
                    }
                  >
                    <div
                      className={
                        "col-span-2 w-full text-base leading-4 font-semibold text-secondary"
                      }
                    >
                      {lineItem.quantity}
                    </div>
                    <div
                      className={
                        "col-span-2 w-full text-base leading-4 font-semibold text-secondary"
                      }
                    >
                      {parseFloat(lineItem.taxRate) * 100}%
                    </div>
                    <div
                      className={
                        "col-span-2 text-right w-full text-base leading-4 font-semibold text-secondary"
                      }
                    >
                      {parseMoney(
                        lineItem.totals.subtotal,
                        subscription?.currencyCode
                      )}
                    </div>
                  </div>
                </Fragment>
              );
            }
          )}
          <div className={"col-span-6"}></div>
          <div className={"col-span-6 flex w-full flex-col pt-6"}>
            <div
              className={
                "flex justify-between py-4 pt-0 border-border border-b"
              }
            >
              <div
                className={
                  "col-span-3 w-full text-base leading-4 text-secondary"
                }
              >
                Amount
              </div>
              <div
                className={
                  "col-span-3 w-full text-base leading-4 text-right text-secondary"
                }
              >
                {parseMoney(
                  subscription?.recurringTransactionDetails?.totals.subtotal,
                  subscription?.currencyCode
                )}
              </div>
            </div>
            <div className={"flex justify-between border-b border-border py-4"}>
              <div
                className={
                  "col-span-3 w-full text-base leading-4 text-secondary"
                }
              >
                Tax
              </div>
              <div
                className={
                  "col-span-3 w-full text-base leading-4 text-right text-secondary"
                }
              >
                {parseMoney(
                  subscription?.recurringTransactionDetails?.totals.tax,
                  subscription?.currencyCode
                )}
              </div>
            </div>
            <div className={"flex justify-between border-b border-border py-4"}>
              <div
                className={
                  "col-span-3 w-full text-base leading-4 text-secondary"
                }
              >
                Total (Inc. tax)
              </div>
              <div
                className={
                  "col-span-3 w-full text-base leading-4 font-semibold text-right"
                }
              >
                {parseMoney(
                  subscription?.recurringTransactionDetails?.totals.total,
                  subscription?.currencyCode
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
