import localFont from "next/font/local";
import { Pathway_Gothic_One } from "next/font/google";

export const lore = localFont({
  src: [
    {
      path: "../../public/fonts/LORE-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LORE-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/LORE-Alternates-Regular.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/LORE-Alternates-Bold.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-lore",
});

export const mangoGrotesque = localFont({
  src: [
    {
      path: "../../public/fonts/MangoGrotesque-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/MangoGrotesque-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/MangoGrotesque-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/MangoGrotesque-ExtLtIta.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/MangoGrotesque-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MangoGrotesque-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/MangoGrotesque-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MangoGrotesque-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MangoGrotesque-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/MangoGrotesque-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/MangoGrotesque-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/MangoGrotesque-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MangoGrotesque-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/MangoGrotesque-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/MangoGrotesque-ExtBdIta.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/MangoGrotesque-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mango",
});

export const gothic = Pathway_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-gothic",
});
