import { CheckoutHeader } from "../_components/checkout-header";
import { CheckoutContents } from "../_components/checkout-contents";
import { createClient } from "@/utils/supabase/server";
import { Separator } from "@/components/ui/separator";

export default async function CheckoutPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <div
      className={
        "relative min-h-screen md:h-screen w-full overflow-hidden bg-gradient-transparent py-[70px]"
      }
    >
      <Separator
        orientation="vertical"
        className="absolute -top-[50px] left-[15px] z-20 hidden h-[45rem] w-[0.5px] md:left-[25px] md:block md:h-[70rem] lg:left-[257px]"
      />
      <Separator
        orientation="vertical"
        className="absolute -top-[50px] right-[15px] z-20 hidden h-[25rem] w-[1px] md:right-[25px] md:block md:h-[70rem] lg:right-[257px]"
      />
      <div
        className={
          "border-b border-t px-[16px] md:px-[32px] flex flex-col gap-6 justify-between"
        }
      >
        <div className="relative mx-auto max-w-6xl">
          <CheckoutHeader />
          <CheckoutContents userEmail={data.user?.email} />
        </div>
      </div>
    </div>
  );
}
