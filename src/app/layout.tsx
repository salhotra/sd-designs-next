import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { montserrat } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="SD Designs is an Interior Design firm that operates in Delhi, Faridabad, Noida and Gurgaon / Gurugram (NCR). We have the most skilled expert interior designers in Delhi NCR."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>SD Designs: Best Interior Designers in Delhi NCR</title>
        <meta
          property="og:title"
          content="SD Designs: Best Interior Designers in Delhi NCR"
        />
        <meta
          name="twitter:title"
          content="SD Designs: Best Interior Designers in Delhi NCR"
        />
      </head>
      <body
        className={clsx(
          montserrat.className,
          "antialiased scroll-smooth hide-scrollbar overscroll-none bg-offwhite",
        )}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
