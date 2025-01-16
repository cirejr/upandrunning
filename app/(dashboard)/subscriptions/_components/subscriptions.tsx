import { getSubscriptions } from "@/utils/paddle/get-subscriptions";
import { MultipleSubscriptionsView } from "./multiple-subscriptions-view";
import { NoSubscriptionView } from "./no-subscription-view";
import { SubscriptionErrorView } from "./subcription-error-view";
import { SubscriptionDetail } from "./subscription-details";

export async function Subscriptions() {
  const { data: subscriptions } = await getSubscriptions();

  if (subscriptions) {
    if (subscriptions.length === 0) {
      return <NoSubscriptionView />;
    } else if (subscriptions.length === 1) {
      return <SubscriptionDetail subscriptionId={subscriptions[0].id} />;
    } else {
      return <MultipleSubscriptionsView subscriptions={subscriptions} />;
    }
  } else {
    return <SubscriptionErrorView />;
  }
}
