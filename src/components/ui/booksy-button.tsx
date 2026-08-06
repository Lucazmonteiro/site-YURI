import { BOOKSY_URL } from "@/lib/site-config";

type BooksyButtonProps = {
  label?: string;
  size?: "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
};

/**
 * External CTA to the clinic's existing Booksy booking page. Intentionally
 * a plain outbound link (not an embedded iframe/widget) — it keeps the CSP
 * simple and means the site never touches booking data itself.
 */
export default function BooksyButton({
  label = "Umów wizytę",
  size = "md",
  variant = "solid",
  className = "",
}: BooksyButtonProps) {
  const sizeClasses = size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm";
  const variantClasses =
    variant === "solid"
      ? "bg-brand-600 text-white hover:bg-brand-700"
      : "bg-white text-brand-700 border border-brand-300 hover:bg-brand-50";

  return (
    <a
      href={BOOKSY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {label}
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
