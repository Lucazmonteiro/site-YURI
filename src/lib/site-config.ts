/**
 * Central site configuration. Single source of truth for external links,
 * contact details and navigation — keeps components free of hardcoded
 * strings and makes the data easy to audit/update in one place.
 */

export const BOOKSY_URL = "https://gabinetterapiinaturalnych.booksy.com/";

export const siteConfig = {
  name: "Gabinet Terapii Naturalnych",
  doctorName: "Jurij Tokar",
  tagline: "Leczymy człowieka, nie chorobę",
  description:
    "Gabinet Terapii Naturalnych dr. Jurija Tokara w Warszawie-Bielanach. Akupunktura klasyczna, terapia Su Jok, irydologia, ziołolecznictwo i terapia antynikotynowa — zintegrowane podejście łączące medycynę akademicką z Wschodem.",
  url: "https://gabinetterapiinaturalnych.pl",
  locale: "pl_PL",
  phone: "+48 609 525 660",
  phoneDisplay: "609 525 660",
  address: {
    line1: "Warszawa-Bielany",
    city: "Warszawa",
    region: "mazowieckie",
    country: "Polska",
  },
  instagram: "https://www.instagram.com/gabinetterapiinaturalnych/",
  instagramHandle: "@gabinetterapiinaturalnych",
  bookingUrl: BOOKSY_URL,
} as const;

export const navLinks = [
  { href: "#o-lekarzu", label: "O lekarzu" },
  { href: "#filozofia", label: "Filozofia" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#antynikotynowa", label: "Terapia antynikotynowa" },
  { href: "#certyfikaty", label: "Certyfikaty" },
  { href: "#kontakt", label: "Kontakt" },
] as const;
