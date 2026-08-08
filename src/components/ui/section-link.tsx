"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollInstantly } from "@/lib/scroll";

type SectionLinkProps = {
  href: string; // bare "#anchor" — a homepage section id
  className?: string;
  onClick?: () => void;
  children: ReactNode;
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

  // "O lekarzu" (#o-lekarzu) targets the Hero section, which puts the
  // photo/title beside the intro text on desktop (section-top is already
  // the right spot) but stacks the intro text above it on mobile — so on
  // mobile the anchor jumps straight to the inner #o-lekarzu-mobile block
  // instead, skipping the intro text. `lg` (1024px) is where hero.tsx
  // switches from stacked to side-by-side.
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target =
      href === "#o-lekarzu" && !window.matchMedia("(min-width: 1024px)").matches
        ? document.querySelector("#o-lekarzu-mobile")
        : null;

    if (!target) {
      onClick?.();
      return;
    }

    event.preventDefault();
    // `onClick` here is usually the mobile header's `setOpen(false)`,
    // closing the nav drawer that sits above the Hero section. That state
    // update hasn't committed/painted yet when this line returns, so
    // measuring the target's position immediately after would bake in the
    // drawer's still-open height — then a moment later the drawer
    // collapses, the page shifts up, and the scroll lands too far down,
    // cutting off the title/photo. A wall-clock delay (rather than
    // requestAnimationFrame, which can be coalesced/throttled while a
    // state-driven reflow is also in flight on slower mobile devices)
    // reliably outlasts the drawer's collapse before we measure and jump.
    onClick?.();
    window.setTimeout(() => {
      scrollInstantly(() => target.scrollIntoView({ block: "start" }));
    }, 60);
  };

  if (isHome) {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={`/${href}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
