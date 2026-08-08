"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    // No explicit `behavior: "smooth"` — html already sets
    // `scroll-behavior: smooth` globally, so this already animates via
    // CSS. Requesting smooth scrolling from both the JS API and CSS at
    // once starts two competing scroll animations that can fight each
    // other on mobile and swallow manual scroll input until they resolve.
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Wróć na górę strony"
      className={`fixed bottom-6 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition-all duration-300 hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:bottom-8 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
