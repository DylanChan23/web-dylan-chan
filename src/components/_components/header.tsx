"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SendIcon from "../icons/send-icon";
import BananaIcon from "../icons/banana-icon";
import { usePathname, useRouter } from "next/navigation";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);
  const lastScrollRef = useRef(0);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) return;
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

  const pathname = usePathname();
  const router = useRouter();

  return (
    <header
      onFocusCapture={() => setScrollUp(true)}
      className={`fixed top-0 py-2 px-8 z-20 w-full bg-background/40 transition-transform duration-300 motion-reduce:transition-none ${
        prefersReducedMotion || scrollUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Skip to main content
      </a>
      <div className="flex justify-between items-center">
        <Link href="/" className="no-underline" aria-label="Home">
          <span className="text-tusker font-semibold text-lg">Dylan Chan</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex gap-8">
            <li>
              <Link
                href="/#projects"
                className="flex gap-1 items-center no-underline"
                onClick={(e) => {
                  e.preventDefault();

                  const scrollToProjects = () => {
                    const smoother = ScrollSmoother.get();

                    smoother?.scrollTo("#projects", true);
                  };

                  if (pathname === "/") {
                    scrollToProjects();
                  } else {
                    router.push("/");

                    setTimeout(() => {
                      scrollToProjects();
                    }, 150);
                  }
                }}
              >
                <span>Projects</span>
                <BananaIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <a
                href="mailto:dylanchan23@gmail.com"
                className="flex gap-1 items-center no-underline"
              >
                <span>Contact</span>
                <SendIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
