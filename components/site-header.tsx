"use client";
import { useState } from "react";
import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/charter", label: "Charter" },
  { href: "/jet-card", label: "Jet Card" },
  { href: "/fleet", label: "Fleet" },
  { href: "/safety", label: "Safety" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0B1426]/70 border-b border-white/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Plane className="size-5" />
          CABIN ALTITUDE
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="size-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-0 h-full w-80 overflow-y-auto bg-[#0B1426] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-lg">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                ✕
              </Button>
            </div>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-base font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
}
