import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NoSubscriptionView() {
  return (
    <>
      <div className={"grid grid-cols-12"}>
        <Card
          className={
            "bg-background/50 backdrop-blur-[24px] border-border p-6 col-span-12 md:col-span-6 lg:col-span-4"
          }
        >
          <CardHeader className="space-y-0 p-0">
            <CardTitle className="flex items-center justify-between pb-2">
              <span className={"text-xl font-medium"}>
                No active subscriptions
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className={"p-0"}>
            <div className="text-base leading-6 text-secondary">
              Sign up for a subscription to see your subscriptions here.
            </div>
          </CardContent>
          <CardFooter className={"p-0 pt-6"}>
            <Button
              asChild={true}
              size={"sm"}
              variant={"outline"}
              className={"rounded-sm border-border text-sm"}
            >
              <Link href={"/"}>View all</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
