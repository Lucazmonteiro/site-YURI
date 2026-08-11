import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Lora } from "next/font/google";
import { headers } from "next/headers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/ui/back-to-top";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Akupunktura i terapia Su Jok — Warszawa`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "akupunktura Warszawa",
    "terapia Su Jok",
    "terapia Su Jok Warszawa",
    "gabinet terapii naturalnych",
    "gabinet terapii naturalnych Warszawa",
    "medycyna zintegrowana Warszawa",
    "medycyna integracyjna Warszawa",
    "Jurij Tokar",
    "medycyna naturalna Warszawa",
    "naturopata Warszawa",
    "terapia antynikotynowa Warszawa",
    "irydologia Warszawa",
    "ziołolecznictwo Warszawa",
    "akupunktura Bielany",
    "Bielany",
  ],
  authors: [{ name: siteConfig.doctorName }],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Akupunktura i terapia Su Jok — Warszawa`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/doctor-portrait.jpg",
        width: 720,
        height: 448,
        alt: `${siteConfig.doctorName} — ${siteConfig.name}, Warszawa-Bielany`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/doctor-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "SrEiTcFIXlWTiHoVv27IwL5YXeJxiKR0gDQcpnv0WI8",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${siteConfig.url}/#gabinet`,
  name: siteConfig.name,
  description: siteConfig.description,
  image: `${siteConfig.url}/images/doctor-portrait.jpg`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  inLanguage: "pl-PL",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warszawa",
    addressRegion: siteConfig.address.region,
    addressCountry: "PL",
  },
  areaServed: [
    { "@type": "City", name: "Warszawa" },
    { "@type": "AdministrativeArea", name: "Bielany" },
  ],
  medicalSpecialty: "Acupuncture",
  founder: {
    "@type": "Physician",
    name: siteConfig.doctorName,
  },
  sameAs: [siteConfig.facebook, siteConfig.instagram, siteConfig.bookingUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "20",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi gabinetu",
    itemListElement: [
      "Akupunktura klasyczna",
      "Wizyta diagnostyka-konsultacja",
      "Konsultacja + akupunktura",
      "Irydologia",
      "Terapia antynikotynowa",
      "Ziołolecznictwo",
    ].map((serviceName) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: serviceName,
      },
    })),
  },
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${lora.variable} antialiased`}
    >
      {/* min-h-dvh (dynamic viewport height), not min-h-screen/h-full: the
          latter track the viewport height at whatever state the mobile
          browser's address bar happened to be in when first computed, and
          don't reliably recompute as it collapses/expands during scroll —
          a well-known source of mobile viewport-height bugs. dvh tracks
          the actual visible viewport continuously, and body doesn't need
          html to have a definite height for the percentage to resolve
          against, since dvh is a standalone unit. */}
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
