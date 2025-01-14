import { CheckoutHeader } from "../_components/checkout-header";
import { CheckoutContents } from "../_components/checkout-contents";
import { createClient } from "@/utils/supabase/server";

export default async function CheckoutPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <div className={"w-full min-h-screen relative overflow-hidden"}>
      <div
        className={
          "mx-auto max-w-6xl relative px-[16px] md:px-[32px] py-[24px] flex flex-col gap-6 justify-between"
        }
      >
        <CheckoutHeader />
        <CheckoutContents userEmail={data.user?.email} />
      </div>
    </div>
  );
}
