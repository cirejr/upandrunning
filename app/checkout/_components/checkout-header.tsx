import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/components/sidebar/app-logo";
import { teams } from "@/config/site";

export function CheckoutHeader() {
  return (
    <div className={"flex gap-4 pt-12"}>
      <Link href={"/"}>
        <Button
          variant={"secondary"}
          className={"h-[32px] w-[32px] rounded-[4px] border-border p-0"}
        >
          <ChevronLeft />
        </Button>
      </Link>
      <AppLogo team={teams[0]} />
    </div>
  );
}
