import Image from "next/image";
import BooksyButton from "@/components/ui/booksy-button";

const trustBadges = [
  "20+ lat doświadczenia w medycynie",
  "Certyfikat Korea Su Jok Institute",
  "Warszawa-Bielany",
];

export default function Hero() {
  return (
    <section id="o-lekarzu" className="relative overflow-hidden bg-brand-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-accent-leaf/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Gabinet Terapii Naturalnych
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-brand-900 sm:text-5xl">
            Wspieramy człowieka,
            <br />
            nie chorobę
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
            Zintegrowane podejście łączące 20 lat doświadczenia medycznego z
            wiedzą wschodniej akupunktury i terapii Su Jok. Indywidualna
            diagnoza, konsultacja i terapia — dopasowane do Ciebie, nie do
            schematu.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BooksyButton size="lg" label="Umów wizytę przez Booksy" />
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center rounded-full border border-brand-300 px-8 py-4 text-base font-semibold text-brand-700 transition-colors hover:bg-brand-100"
            >
              Zobacz ofertę
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-3 border-t border-brand-200 pt-6 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-start gap-2">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                >
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <dd className="text-sm font-medium text-neutral-700">{badge}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            O lekarzu – Dr Jurij Tokar
          </p>
          <div className="relative mx-auto mt-4 aspect-square w-56 overflow-hidden rounded-full ring-4 ring-brand-100 sm:w-64">
            <Image
              src="/images/doctor-avatar.jpg"
              alt="Dr Jurij Tokar, specjalista akupunktury i terapii Su Jok"
              fill
              priority
              sizes="256px"
              className="object-cover"
            />
          </div>
          <h2 className="mt-6 font-serif text-3xl font-semibold text-brand-900">
            Droga od chirurgii do medycyny holistycznej
          </h2>
          <p className="mt-3 text-neutral-600">
            Dr Jurij Tokar — od chirurga dziecięcego do specjalisty
            akupunktury i terapii Su Jok, praktykującego w Warszawie od
            1998 roku.
          </p>
        </div>
      </div>
    </section>
  );
}
