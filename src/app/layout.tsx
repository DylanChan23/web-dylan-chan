import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/_components/header";
import { lore, migra, montreal, tusker } from "@/lib/fonts";
import LiquidBackground from "@/components/_components/liquid-background";
import SmoothProvider from "@/components/_components/smooth-provider";

export const metadata: Metadata = {
  title: "Website Dylan Chan",
  description: "Frontend developer portfolio website for Dylan Chan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full antialiased", "font-sans", "dark")}
    >
      <body
        className={`${montreal.variable} ${tusker.variable} ${lore.variable} ${migra.variable} min-h-screen`}
      >
        {/* <div id="customCursor" /> */}
        <div />
        <SmoothProvider />
        <LiquidBackground />
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
