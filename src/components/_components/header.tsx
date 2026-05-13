"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 0) return;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 py-2 px-8 z-50 w-full bg-background transition-transform duration-300 ${scrollUp ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Dylan Chan</p>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/projects" aria-label="Projects">
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="overflow-hidden">
              <NavigationMenuLink asChild>
                <Link href="/contact" aria-label="Contact">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
