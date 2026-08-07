import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-icon.jpg"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-serif text-base font-semibold text-brand-900">
                {siteConfig.name}
              </p>
              <p className="text-sm text-neutral-500">{siteConfig.doctorName}</p>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:flex sm:flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-neutral-600">
            <span>{siteConfig.phoneDisplay}</span>
            <br />
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-700"
            >
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-100 pt-6 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Wszelkie prawa
            zastrzeżone. Treści na stronie mają charakter informacyjny i nie
            zastępują konsultacji lekarskiej.
          </p>
        </div>
      </div>
    </footer>
  );
}
