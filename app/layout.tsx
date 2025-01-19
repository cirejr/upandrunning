import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Up And Running",
  description: "Get up and running with Next.js in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        property="og:image"
        content="https://grlzdoaweluacbnheths.supabase.co/storage/v1/object/public/meta-images/opengraph-image.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://grlzdoaweluacbnheths.supabase.co/storage/v1/object/public/meta-images/twitter-image.png"
      />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta name="twitter:title" content="Up And Running" />
      <meta
        name="twitter:description"
        content="Get up and running with Next.js in minutes."
      />
      <meta name="twitter:site" content="@cirejr_" />
      <body
        className={cn("font-geist-sans overflow-x-hidden", GeistSans.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
