import Image from "next/image";

const credentials = [
  {
    title: "Lwowska Akademia Medyczna",
    detail: "Dyplom lekarski uzyskany w 1981 roku.",
  },
  {
    title: "Korea Su Jok Acupuncture Institute",
    detail:
      "Certyfikat nr 92-11-01, wystawiony przez prof. Park Jae Woo, twórcę metody Onnuri Su Jok.",
  },
  {
    title: "Nostryfikacja w Polsce",
    detail: "Dyplom medyczny zatwierdzony w Polsce w 1998 roku wraz ze zdanymi egzaminami państwowymi.",
  },
  {
    title: "17 lat chirurgii dziecięcej",
    detail: "Doświadczenie kliniczne na oddziale chirurgicznym przed specjalizacją w medycynie naturalnej.",
  },
];

export default function Credentials() {
  return (
    <section id="certyfikaty" className="bg-sky-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-xl ring-2 ring-brand-300">
            <Image
              src="/images/certificate-sujok.jpg"
              alt="Certyfikat Koreańskiego Instytutu Akupunktury Su Jok wystawiony dla Yuriya Tokara"
              width={480}
              height={480}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Certyfikaty i doświadczenie
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
            Wiedza potwierdzona międzynarodowymi certyfikatami
          </h2>

          <dl className="mt-8 space-y-6">
            {credentials.map((item) => (
              <div key={item.title} className="flex gap-4 border-b border-brand-100 pb-6 last:border-0">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-7 w-7 shrink-0 text-brand-500"
                >
                  <path
                    d="M12 15a5 5 0 100-10 5 5 0 000 10zM8.5 14L7 22l5-3 5 3-1.5-8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <dt className="font-semibold text-brand-900">{item.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-neutral-600">{item.detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
