"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    onClick?.();
    if (href !== "#o-lekarzu" || window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }
    const target = document.querySelector("#o-lekarzu-mobile");
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
