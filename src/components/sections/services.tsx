import Image from "next/image";

// Booksy's merchant invite link for this profile — the CTA below the
// services grid sends clients straight to the booking panel to pick a
// service and slot.
const SERVICES_BOOKING_URL =
  "https://booksy.com/pl-pl/77387_gabinet-terapii-naturalnych_medycyna-naturalna_3_warszawa?do=invite&_branch_match_id=1613976803284078329&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs/VN0tO8rMMCiz1ikiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAnQF3kjwAAAA=";

const services = [
  {
    title: "Akupunktura klasyczna",
    description:
      "Tradycyjna akupunktura chińska wspierająca organizm w przywracaniu równowagi i łagodzeniu dolegliwości bólowych.",
    image: "/images/service-acupuncture.jpg",
  },
  {
    title: "Wizyta diagnostyka-konsultacja",
    description:
      "Szczegółowy wywiad i ocena stanu pacjenta — punkt wyjścia do doboru odpowiedniej terapii.",
    image: "/images/service-diagnostyka-konsultacja.jpg",
  },
  {
    title: "Konsultacja + akupunktura",
    description:
      "Pełna konsultacja połączona z sesją akupunktury w ramach jednej wizyty.",
    image: "/images/service-consult-plan.jpg",
  },
  {
    title: "Irydologia",
    description: "Diagnoza z tęczówki oka — nieinwazyjna ocena stanu organizmu wspierająca proces terapeutyczny.",
    image: "/images/service-iridology.jpg",
    imageFit: "contain",
  },
  {
    title: "Terapia antynikotynowa",
    description:
      "Kompleksowa terapia łącząca akupunkturę, NLP i ziołolecznictwo — pomaga skutecznie rzucić palenie.",
    image: "/images/service-antismoking.jpg",
  },
  {
    title: "Ziołolecznictwo",
    description:
      "Indywidualnie dobrane mieszanki ziołowe, wspomagające terapię i dostosowane do potrzeb konkretnego pacjenta.",
    image: "/images/service-herbal.jpg",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="relative overflow-hidden bg-white py-20">
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow-alt pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Nasze usługi
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
            Terapie dopasowane do Ciebie
          </h2>
          <p className="mt-4 text-neutral-600">
            Każda wizyta w naszym gabinecie w Warszawie zaczyna się od
            wywiadu i diagnozy — dopiero potem dobierana jest odpowiednia
            kombinacja terapii. Pełny cennik i aktualną ofertę usług
            sprawdzisz na Booksy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full bg-brand-50">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={service.imageFit === "contain" ? "object-contain" : "object-cover"}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-sky-700 px-6 py-10 text-center shadow-lg sm:px-12">
          <h3 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
            Wybierz swój serwis i umów wizytę
          </h3>
          <p className="max-w-xl text-brand-50">
            Pełny cennik, opisy terapii i wolne terminy znajdziesz na Booksy —
            zarezerwuj dogodny termin w kilka sekund.
          </p>
          <a
            href={SERVICES_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
          >
            Umów wizytę przez Booksy
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
