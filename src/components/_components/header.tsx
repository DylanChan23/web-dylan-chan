"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SendIcon from "../icons/send-icon";
import BananaIcon from "../icons/banana-icon";

export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const lastScroll = lastScrollRef.current;

      const scrollingDown = currentScroll > lastScroll + 5;
      const scrollingUp = currentScroll < lastScroll - 5;

      if (scrollingDown && currentScroll > 20) {
        setScrollUp(false);
      }

      if (scrollingUp) {
        setScrollUp(true);
      }

      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 py-2 px-8 z-20 w-full bg-background/40 transition-transform duration-300 ${
        scrollUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="no-underline">
          <span className="text-migra">Dylan Chan</span>
        </Link>

        <div className="flex gap-8">
          <Link
            href="/projects"
            className="flex gap-1 items-center  no-underline"
          >
            <span>projects</span>
            <BananaIcon className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="flex gap-1 items-center no-underline"
          >
            <span>contact</span>
            <SendIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
