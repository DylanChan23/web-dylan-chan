"use client";

import { forwardRef, useEffect, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BrandVercelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = async () => {
      await animate(
        ".triangle",
        { rotateY: 180 },
        { duration: 0.6, ease: "easeInOut" },
      );
    };

    const stop = async () => {
      await animate(
        ".triangle",
        { rotateY: -180 },
        { duration: 0.6, ease: "easeInOut" },
      );
    };

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    // Parent hover listener ADDED!
    useEffect(() => {
      const el = scope.current;
      if (!el) return;

      const parent = el.closest("button, a, div");
      if (!parent) return;

      parent.addEventListener("mouseenter", start);
      parent.addEventListener("mouseleave", stop);

      return () => {
        parent.removeEventListener("mouseenter", start);
        parent.removeEventListener("mouseleave", stop);
      };
    }, [scope]);

    return (
      <motion.svg
        ref={scope}
        onHoverStart={start}
        onHoverEnd={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path className="triangle" d="M3 19h18l-9 -15z" />
      </motion.svg>
    );
  },
);

BrandVercelIcon.displayName = "BrandVercelIcon";
export default BrandVercelIcon;
