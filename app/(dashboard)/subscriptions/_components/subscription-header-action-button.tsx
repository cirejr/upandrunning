"use client";

import { Button } from "@/components/ui/button";
import { CircleAlert, CircleCheck } from "lucide-react";
import { useState } from "react";
import { cancelSubscription } from "../actions";
import { useToast } from "@/hooks/use-toast";
import { Confirmation } from "@/components/global/confirmation";

interface Props {
  subscriptionId: string;
}

export function SubscriptionHeaderActionButton({ subscriptionId }: Props) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  function handleCancelSubscription() {
    setModalOpen(false);
    setLoading(true);
    cancelSubscription(subscriptionId)
      .then(() => {
        toast({
          description: (
            <div className={"flex items-center gap-3"}>
              <CircleCheck size={20} color={"#25F497"} />
              <div className={"flex flex-col gap-1"}>
                <span className={"test-sm font-medium leading-5 text-primary"}>
                  Cancellation scheduled
                </span>
                <span className={"test-sm leading-5 text-muted-foreground"}>
                  Subscription scheduled to cancel at the end of the billing
                  period.
                </span>
              </div>
            </div>
          ),
        });
      })
      .catch((error) => {
        toast({
          description: (
            <div className={"flex items-start gap-3"}>
              <CircleAlert size={20} color={"#F42566"} />
              <div className={"flex flex-col gap-1"}>
                <div className={"test-sm font-medium leading-5 text-primary"}>
                  Error
                </div>
                <div className={"test-sm leading-5 text-muted-foreground"}>
                  Something went wrong, please try again later
                </div>
              </div>
            </div>
          ),
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Button
        disabled={loading}
        onClick={() => setModalOpen(true)}
        size={"sm"}
        variant={"outline"}
        className={"flex gap-2 rounded-sm border-border text-sm"}
      >
        Cancel subscription
      </Button>
      <Confirmation
        description={
          "This subscription will be scheduled to cancel at the end of the billing period."
        }
        title={"Cancel subscription?"}
        onClose={() => setModalOpen(false)}
        isOpen={isModalOpen}
        onConfirm={handleCancelSubscription}
      />
    </>
  );
}
