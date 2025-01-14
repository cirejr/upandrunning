"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeistMono } from "geist/font/mono";
import { PlusCornerCard } from "@/app/(docs)/components/_components/plus-section";
import { cn } from "@/lib/utils";

export default function CodeBox() {
  const [copied, setCopied] = useState(false);
  const command = "git clone https://github.com/cirejr/upandrunning.git";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <PlusCornerCard className="relative mt-10 flex h-fit items-center justify-center md:max-w-xl">
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-3">
        <pre
          className={cn(
            "font-geist-mono flex flex-col md:flex-row gap-2 text-sm md:text-base",
            GeistMono.className
          )}
        >
          <span>
            git <span className="text-pink-500">clone</span>
          </span>{" "}
          <span>
            https:
            <span className="text-muted-foreground">
              {"//"}github.com/cirejr/upandrunning.git
            </span>
          </span>
        </pre>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="text-xs text-zinc-400 hover:bg-background hover:text-white focus:outline-none md:text-base"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">Copy to clipboard</span>
        </Button>
      </div>
    </PlusCornerCard>
  );
}
