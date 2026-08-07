import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Lora } from "next/font/google";
import { headers } from "next/headers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
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
    "gabinet terapii naturalnych",
    "Jurij Tokar",
    "medycyna naturalna Warszawa",
    "terapia antynikotynowa",
    "irydologia",
    "Bielany",
  ],
  authors: [{ name: siteConfig.doctorName }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Akupunktura i terapia Su Jok — Warszawa`,
    description: siteConfig.description,
    images: [{ url: "/images/doctor-portrait.jpg", width: 720, height: 448 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Gabinet Terapii Naturalnych",
  image: `${siteConfig.url}/images/doctor-portrait.jpg`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warszawa-Bielany",
    addressRegion: siteConfig.address.region,
    addressCountry: "PL",
  },
  medicalSpecialty: "Acupuncture",
  founder: {
    "@type": "Physician",
    name: siteConfig.doctorName,
  },
  sameAs: [siteConfig.facebook],
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
      </body>
    </html>
  );
}
