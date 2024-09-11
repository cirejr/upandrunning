"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GeistMono } from "geist/font/mono";
import { PlusCornerCard } from "@/app/(docs)/components/_components/plus-section";
import { cn } from "@/lib/utils";

export default function CodeBox() {
  const [copied, setCopied] = useState(false);
  const command = "git clone https://github.com/cirejr/upnrunning";

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
    <PlusCornerCard className='relative mt-10 flex h-fit max-w-xl items-center justify-center'>
      <div className='flex items-center justify-between p-4'>
        <pre className={cn("font-geist-mono text-white", GeistMono.className)}>
          <span className='text-pink-500'>git</span> clone
          https://github.com/cirejr/upandrunning
        </pre>
        <Button
          variant='ghost'
          size='icon'
          onClick={copyToClipboard}
          className='text-zinc-400 hover:bg-background hover:text-white focus:outline-none'
        >
          {copied ? (
            <Check className='h-4 w-4' />
          ) : (
            <Copy className='h-4 w-4' />
          )}
          <span className='sr-only'>Copy to clipboard</span>
        </Button>
      </div>
    </PlusCornerCard>
  );
}
