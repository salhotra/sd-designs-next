import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { josephinSans } from "./fonts";
import { CompanyName } from "./constants";

export const metadata: Metadata = {
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
        className={clsx(josephinSans.className, "antialiased scroll-smooth")}
      >
        {children}
      </body>
    </html>
  );
}
