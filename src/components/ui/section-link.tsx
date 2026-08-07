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

  if (isHome) {
    return (
      <a href={href} className={className} onClick={onClick}>
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
