import { siteConfig } from "@/lib/site-config";

const mapsSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Gabinet Terapii Naturalnych, Warszawa-Bielany");

export default function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-white py-20">
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow-alt pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Kontakt
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
            Odwiedź gabinet w Warszawie
          </h2>
          <p className="mt-4 text-neutral-600">
            Wizyty odbywają się po wcześniejszym umówieniu online przez
            Booksy. W razie pytań dotyczących terapii — zadzwoń lub napisz.
          </p>

          <dl className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mt-0.5 h-6 w-6 shrink-0 text-brand-600">
                <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M12 13a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <dt className="font-semibold text-brand-900">Adres</dt>
                <dd className="text-neutral-600">{siteConfig.address.line1}, Polska</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mt-0.5 h-6 w-6 shrink-0 text-brand-600">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.68 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <dt className="font-semibold text-brand-900">Telefon</dt>
                <dd className="text-neutral-600">{siteConfig.phoneDisplay}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mt-0.5 h-6 w-6 shrink-0 text-brand-600">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <dt className="font-semibold text-brand-900">Instagram</dt>
                <dd>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:underline"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-6 w-6 shrink-0 text-brand-600">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
              <div>
                <dt className="font-semibold text-brand-900">Facebook</dt>
                <dd>
                  <a
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:underline"
                  >
                    {siteConfig.facebookHandle}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-brand-50 p-10 text-center shadow-md ring-1 ring-brand-300">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-14 w-14 text-brand-500">
            <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M12 13a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-serif text-xl font-semibold text-brand-900">
            Warszawa-Bielany
          </p>
          <p className="max-w-xs text-sm text-neutral-600">
            Dokładny adres i dojazd otrzymasz po umówieniu wizyty przez
            Booksy, ewentualnie sprawdź lokalizację w Google Maps.
          </p>
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-100"
          >
            Otwórz w Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
