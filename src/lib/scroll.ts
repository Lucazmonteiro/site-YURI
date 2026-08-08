/**
 * Runs a JS-driven scroll (`scrollIntoView`, `window.scrollTo`, …) as an
 * instant jump, bypassing the global `scroll-behavior: smooth` set on
 * `html` in globals.css. Per the CSSOM View spec, the default `"auto"`
 * scroll behavior still defers to that CSS property, so a plain JS call
 * ends up animated too. Native `<a href="#...">` hash navigation doesn't
 * have this problem — only scrolls triggered from JS do — because on
 * mobile WebKit/Chromium a JS-driven smooth scroll can leave the
 * scrolling box stuck mid-animation, swallowing further touch-scroll
 * input until it's interrupted. It reads as the page being scroll-locked.
 */
export function scrollInstantly(action: () => void) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  action();
  root.style.scrollBehavior = previous;
}
