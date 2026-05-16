"use client";

import { useEffect } from "react";

export default function LiquidBackground() {
  useEffect(() => {
    import("@/lib/gradient").then((mod) => {
      const instance = new mod.GradientApp();
      instance.start();
    });
  }, []);

  return null;
}
