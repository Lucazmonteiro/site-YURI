import Image from "next/image";

const services = [
  {
    title: "Akupunktura klasyczna",
    description:
      "Tradycyjna akupunktura chińska wspierająca organizm w przywracaniu równowagi i łagodzeniu dolegliwości bólowych.",
    image: "/images/service-acupuncture.jpg",
  },
  {
    title: "Terapia Su Jok",
    description:
      "Koreańska metoda akupunktury dłoni i stóp (Onnuri Su Jok) — certyfikowana terapia stosowana od ponad 30 lat.",
    image: "/images/service-moxa.jpg",
  },
  {
    title: "Irydologia",
    description: "Diagnoza z tęczówki oka — nieinwazyjna ocena stanu organizmu wspierająca proces terapeutyczny.",
    icon: (
      <path
        d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z M12 15a3 3 0 100-6 3 3 0 000 6z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Ziołolecznictwo",
    description:
      "Indywidualnie dobrane mieszanki ziołowe, wspomagające terapię i dostosowane do potrzeb konkretnego pacjenta.",
    icon: (
      <path
        d="M12 22V12M12 12C7 12 4 9 4 4c5 0 8 3 8 8zM12 12c5 0 8-3 8-8-5 0-8 3-8 8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Nasza oferta
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
          Terapie dopasowane do Ciebie
        </h2>
        <p className="mt-4 text-neutral-600">
          Każda wizyta zaczyna się od wywiadu i diagnozy — dopiero potem
          dobierana jest odpowiednia kombinacja terapii.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {service.image ? (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-brand-50">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-12 w-12 text-brand-500"
                >
                  {service.icon}
                </svg>
              </div>
            )}
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
    </section>
  );
}
