import type { Metadata } from "next";
import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { lato } from "./fonts";
import { CompanyName } from "./constants";

const metadata: Metadata = {
  title: CompanyName,
  description: `${CompanyName} is an interior design company based in New Delhi.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          lato.className,
          "antialiased scroll-smooth hide-scrollbar",
        )}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
