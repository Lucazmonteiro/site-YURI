import Image from "next/image";

const timeline = [
  {
    year: "1981",
    text: "Ukończenie Lwowskiej Akademii Medycznej.",
  },
  {
    year: "1981–1998",
    text: "17 lat pracy jako chirurg dziecięcy na oddziale chirurgicznym.",
  },
  {
    year: "Punkt zwrotny",
    text: "Własna choroba, z którą medycyna akademicka nie dawała sobie rady, prowadzi go do terapii Onnuri Su Jok prof. Park Jae Woo z Seulu.",
  },
  {
    year: "Lata 90.",
    text: "Szkolenia u prof. Park Jae Woo w wielu krajach i certyfikat Koreańskiego Instytutu Akupunktury Su Jok. Dodatkowe szkolenia z akupunktury chińskiej, irydologii, homeopatii i terapii manualnej na Ukrainie.",
  },
  {
    year: "1998",
    text: "Przeprowadzka do Polski, nostryfikacja dyplomu medycznego i otwarcie własnego gabinetu medycyny naturalnej w Warszawie.",
  },
];

export default function About() {
  return (
    <section className="bg-sky-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1 lg:col-span-2">
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-24">
            {/* aspect-square matches terapia-slide.jpg's native 1:1 ratio. */}
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white shadow-xl ring-2 ring-brand-300">
              <Image
                src="/images/terapia-slide.jpg"
                alt="Gabinet Terapii Naturalnych — akupunktura, terapia Su Jok, ziołolecznictwo i terapia manualna"
                fill
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-3">
          <h2 className="font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
            Ponad 40 lat pracy z pacjentami
          </h2>

          <blockquote className="mt-8 rounded-2xl border border-brand-200 border-l-4 border-l-brand-500 bg-white px-6 py-5 font-serif text-xl italic leading-relaxed text-brand-900 shadow-md">
            „Zrozumiałem, że zwalczanie choroby, a odzyskiwanie zdrowia to nie
            to samo.”
          </blockquote>

          <ol className="mt-10 space-y-8 border-l border-brand-200 pl-6">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.72rem] top-1 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-100"
                />
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                  {item.year}
                </p>
                <p className="mt-1 leading-relaxed text-neutral-700">{item.text}</p>
              </li>
            ))}
          </ol>

          <p className="mt-10 leading-relaxed text-neutral-700">
            Dziś w gabinecie łączy zdobytą wiedzę akademicką i doświadczenie
            lekarskie z tajnikami medycyny Wschodu, uprawiając medycynę
            zintegrowaną. Sięga po współczesną diagnostykę (USG, TK, MR),
            gdy jest to wskazane. Leczy pacjentów, a nie choroby, stosując
            indywidualne podejście do każdego, unikając sztampy i
            szufladkowania.
          </p>
        </div>
      </div>
    </section>
  );
}
