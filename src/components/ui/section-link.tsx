"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SectionLinkProps = {
  href: string; // bare "#anchor" — a homepage section id
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

// "O lekarzu" targets the Hero section, which puts the photo/title beside
// the intro text on desktop (section-top is already the right spot) but
// stacks the intro text above it on mobile — so on mobile the link should
// jump straight to the inner #o-lekarzu-mobile block instead, skipping the
// intro text. `lg` (1024px) is where hero.tsx switches from stacked to
// side-by-side.
//
// This used to be one link whose target was picked at click-time via JS
// (preventDefault + scrollIntoView). Every other link on the site is a
// plain native anchor with zero JS involved and has never had a scroll
// bug; this was the one exception, and it repeatedly produced a stuck
// mobile scroll (the JS scroll ran before the mobile nav drawer's
// close-on-click state update had actually reflowed, so it measured a
// position that shifted out from under it a moment later). Rendering two
// plain anchors — one per breakpoint, chosen by CSS, not JS — gets the
// same "different target per breakpoint" outcome through the exact same
// native hash-navigation mechanism every other link already relies on.
const RESPONSIVE_TARGETS: Record<string, { mobile: string; desktop: string }> = {
  "#o-lekarzu": { mobile: "#o-lekarzu-mobile", desktop: "#o-lekarzu" },
};

/**
 * Nav link to a homepage section. On the homepage itself this is a plain
 * anchor tag (instant native scroll, no JS involved). From any other
 * route it renders a Next.js <Link>, which does a client-side transition
 * to "/" and then scrolls to the hash — a bare <a> there would force a
 * full browser navigation/reload, flashing an unstyled homepage first.
 */
export default function SectionLink({ href, className, onClick, children }: SectionLinkProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const responsive = RESPONSIVE_TARGETS[href];

  if (!responsive) {
    return isHome ? (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    ) : (
      <Link href={`/${href}`} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const variants = [
    { href: responsive.mobile, visibility: "lg:hidden" },
    { href: responsive.desktop, visibility: "hidden lg:inline" },
  ];

  return (
    <>
      {variants.map((variant) =>
        isHome ? (
          <a
            key={variant.href}
            href={variant.href}
            className={`${className ?? ""} ${variant.visibility}`}
            onClick={onClick}
          >
            {children}
          </a>
        ) : (
          <Link
            key={variant.href}
            href={`/${variant.href}`}
            className={`${className ?? ""} ${variant.visibility}`}
            onClick={onClick}
          >
            {children}
          </Link>
        )
      )}
    </>
  );
}
