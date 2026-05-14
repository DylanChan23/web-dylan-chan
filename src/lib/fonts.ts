import localFont from "next/font/local";

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

export const tusker = localFont({
  src: [
    {
      path: "../../public/fonts/TuskerGrotesk-2500Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TuskerGrotesk-3600Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/TuskerGrotesk-6700Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/TuskerGrotesk-8800Super.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-tusker",
});

export const montreal = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-montreal",
});

export const migra = localFont({
  src: [
    {
      path: "../../public/fonts/Migra-Extralight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MigraItalic-ExtralightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Migra-Extrabold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MigraItalic-ExtraboldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-migra",
});
