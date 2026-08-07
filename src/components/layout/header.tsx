"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BooksyButton from "@/components/ui/booksy-button";
import SectionLink from "@/components/ui/section-link";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-icon.jpg"
            alt={siteConfig.name}
            width={36}
            height={36}
            className="shrink-0 rounded-full"
            priority
          />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-serif text-sm font-semibold text-brand-800 sm:text-lg">
              {siteConfig.name}
            </span>
            <span className="truncate text-[11px] text-neutral-500 sm:text-xs">
              {siteConfig.doctorName}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <SectionLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-700"
            >
              {link.label}
            </SectionLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BooksyButton />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-800 lg:hidden"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            className="h-6 w-6"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-brand-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <SectionLink
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </SectionLink>
            ))}
          </nav>
          <div className="mt-4">
            <BooksyButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
