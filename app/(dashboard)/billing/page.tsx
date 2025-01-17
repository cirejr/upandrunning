import { Suspense } from "react";
import { LoadingScreen } from "../_components/loading-screen";
import { PaymentsContent } from "./_components/payments-content";

export default async function PaymentsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-8">
      <Suspense fallback={<LoadingScreen />}>
        <PaymentsContent subscriptionId={""} />
      </Suspense>
    </main>
  );
}
