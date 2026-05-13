import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/_components/header";
import { gothic } from "@/lib/fonts";

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
    <html lang="en" className={cn("h-full antialiased", "font-sans", "dark")}>
      <body className={`${gothic.className} min-h-full flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
