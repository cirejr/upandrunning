"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function EmailWaitlist() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      setEmail("");
      toast.success("You're on the list!");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
        toast.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-gradient-transparent relative w-full border-b border-t py-12 md:py-24 lg:py-32">
      <Separator
        orientation="vertical"
        className="absolute -top-[50px] left-[15px] h-[30rem] w-[1px] md:left-[25px] md:h-[36rem] lg:left-[257px]"
      />
      <Separator
        orientation="vertical"
        className="absolute -top-[50px] right-[15px] h-[30rem] w-[1px] md:right-[25px] md:h-[36rem] lg:right-[257px]"
      />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Supercharge Your Development?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the waiting list and get notified when we launch our
              templates and premium features.
            </p>
          </div>
          <div className="w-full max-w-2xl space-y-2 px-2 md:px-0">
            <form onSubmit={onSubmit} className="mt-8 justify-center sm:flex">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value as string)}
                placeholder="Enter your email"
                className="glass w-full px-5 py-3"
                aria-label="Email address"
              />
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="glass flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-500 dark:text-emerald-600 dark:hover:bg-purple-50 sm:w-auto"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
