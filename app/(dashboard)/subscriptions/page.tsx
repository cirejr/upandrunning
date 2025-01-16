import { Suspense } from "react";
import { Subscriptions } from "./_components/subscriptions";
import { LoadingScreen } from "../_components/loading-screen";

export default async function SubscriptionsListPage() {
  return (
    <main className="p-4 lg:gap-6 lg:p-8">
      <Suspense fallback={<LoadingScreen />}>
        <Subscriptions />
      </Suspense>
    </main>
  );
}
