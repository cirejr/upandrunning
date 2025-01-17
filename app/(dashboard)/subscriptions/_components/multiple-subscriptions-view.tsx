import { Subscription } from "@paddle/paddle-node-sdk";
import { SubscriptionCards } from "./subscription-cards";

interface Props {
  subscriptions: Subscription[];
}

export function MultipleSubscriptionsView({ subscriptions }: Props) {
  return (
    <>
      <SubscriptionCards
        className={"grid-cols-1 gap-6 lg:grid-cols-3"}
        subscriptions={subscriptions}
      />
    </>
  );
}
