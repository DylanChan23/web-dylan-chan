import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/_components/header";
import { lore, migra, montreal, tusker } from "@/lib/fonts";
import LiquidBackground from "@/components/_components/liquid-background";
import SmoothProvider from "@/components/_components/smooth-provider";

export const metadata: Metadata = {
  title: "Dylan Chan | Frontend Developer",
  description:
    "Frontend developer portfolio showcasing interactive web experiences, UI design, and development work by Dylan Chan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", "dark")}>
      <body
        className={`${montreal.variable} ${tusker.variable} ${lore.variable} ${migra.variable} min-h-screen`}
      >
        <SmoothProvider />
        <LiquidBackground />
        <div className="overlay" />
        <div className="relative z-20">
          <Header />
          <div id="smooth-wrapper">
            <main id="smooth-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
