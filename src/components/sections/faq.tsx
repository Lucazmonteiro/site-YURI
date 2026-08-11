import { headers } from "next/headers";

const acupunctureIndications = [
  "Rwa kulszowa, zapalenie nerwu trójdzielnego i korzonki",
  "Bóle głowy i nerwice niewiadomego pochodzenia",
  "Choroby narządów wewnętrznych — układu pokarmowego: choroby żołądka, jelit, dwunastnicy, wątroby, wrzody",
  "Depresje i stany lękowe",
  "Choroby układu krwionośnego i serca — zaburzenia krążenia, żylaki, miażdżyca, nadciśnienie",
  "Choroby układu nerwowego — porażenia nerwów, niedowłady",
  "Choroby narządów ruchu — dyskopatia, przewlekłe i ostre mięśniobóle, zespół bolesnego barku",
  "Choroby układu oddechowego, w tym zapalenia oskrzeli",
  "Choroby uszu, nosa, gardła i oczu, w tym przewlekłe zapalenie zatok",
];

const iridologyBenefits = [
  "wykrycie predyspozycji do różnych schorzeń",
  "ocenę stanu układu odpornościowego",
  "rozpoznanie schorzeń na najwcześniejszym, bezobjawowym etapie",
  "monitorowanie stanu zdrowia podczas kuracji",
];

const antiSmokingSteps = [
  {
    title: "Wywiad i diagnostyka",
    description: "Indywidualny dobór terapii po wnikliwym wywiadzie i ocenie stanu pacjenta.",
  },
  {
    title: "Sesja akupunktury i NLP",
    description:
      "Kombinacja akupunktury klasycznej, terapii na małżowinie usznej oraz Su Jok, wsparta psychoterapią z elementami NLP.",
  },
  {
    title: "Indywidualna mieszanka ziołowa",
    description: "Dobrana specjalnie pod pacjenta, wspomagająca efekt terapii między sesjami.",
  },
  {
    title: "Szybki, trwały efekt",
    description:
      "Oddziaływanie na poziom podświadomy zmniejsza łaknienie i objawy głodu nikotynowego niemal od razu.",
  },
];

const antiSmokingIntro =
  "Skuteczność terapii opiera się na indywidualnym doborze metody dla każdego pacjenta oraz jednoczesnym oddziaływaniu na kilku płaszczyznach — fizycznej, psychicznej i emocjonalnej.";
const antiSmokingOutro =
  "Jedyne, co musi zrobić pacjent, to mieć silną motywację oraz rzetelnie wykonywać zalecenia lekarza.";

const iridologyIntro = "Natychmiastowa diagnoza z tęczówki oka pozwala na:";

const firstVisitAnswer =
  "Jest to wizyta diagnostyczno-konsultacyjna, na której łączę zdobyte doświadczenie z medycyny akademickiej z medycyną naturalną. Przebieg wizyty: diagnoza z tęczówki oka, analiza dostarczonych badań laboratoryjnych, szczegółowy wywiad medyczny, konsultacja, plan terapeutyczny. Wizyta trwa około 1h.";

// Mirrors the visible <details> content below as Q&A pairs so the FAQ
// section is eligible for Google's FAQ rich results — built from the same
// arrays/strings rendered in the JSX to avoid the two drifting apart.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Akupunktura w Warszawie — na co pomaga?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Akupunktura klasyczna w naszym gabinecie w Warszawie wspiera leczenie m.in.: ${acupunctureIndications.join("; ")}.`,
      },
    },
    {
      "@type": "Question",
      name: "Irydologia — a co to takiego?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${iridologyIntro} ${iridologyBenefits.join(", ")}.`,
      },
    },
    {
      "@type": "Question",
      name: "Terapia antynikotynowa w Warszawie — jak przebiega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${antiSmokingIntro} ${antiSmokingSteps
          .map((step) => `${step.title}: ${step.description}`)
          .join(" ")} ${antiSmokingOutro}`,
      },
    },
    {
      "@type": "Question",
      name: "Jak wygląda pierwsza wizyta w gabinecie terapii naturalnych?",
      acceptedAnswer: {
        "@type": "Answer",
        text: firstVisitAnswer,
      },
    },
  ],
};

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function Faq() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <section id="warto-wiedziec" className="bg-sky-50 py-20">
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Warto wiedzieć
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
          Więcej o terapiach i pierwszej wizycie
        </h2>

        <div className="mt-10 space-y-4">
          <details className="group rounded-2xl border border-brand-200 bg-white p-6 shadow-sm open:shadow-md">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold text-brand-900">
              Akupunktura — Na co pomaga?
              <ChevronIcon />
            </summary>
            <ul className="mt-4 space-y-2 border-t border-brand-100 pt-4 text-sm leading-relaxed text-neutral-700">
              {acupunctureIndications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </details>

          <details className="group rounded-2xl border border-brand-200 bg-white p-6 shadow-sm open:shadow-md">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold text-brand-900">
              Irydologia — A co to takiego?
              <ChevronIcon />
            </summary>
            <div className="mt-4 space-y-3 border-t border-brand-100 pt-4 text-sm leading-relaxed text-neutral-700">
              <p>{iridologyIntro}</p>
              <ul className="space-y-2">
                {iridologyBenefits.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <details
            id="antynikotynowa"
            className="group rounded-2xl border border-brand-200 bg-white p-6 shadow-sm open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold text-brand-900">
              Terapia antynikotynowa — Jak przebiega?
              <ChevronIcon />
            </summary>
            <div className="mt-4 space-y-4 border-t border-brand-100 pt-4 text-sm leading-relaxed text-neutral-700">
              <p>{antiSmokingIntro}</p>
              <ul className="space-y-2">
                {antiSmokingSteps.map((step) => (
                  <li key={step.title} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <p>
                      <span className="font-semibold text-brand-900">{step.title}:</span>{" "}
                      {step.description}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="italic text-neutral-500">{antiSmokingOutro}</p>
            </div>
          </details>

          <details className="group rounded-2xl border border-brand-200 bg-white p-6 shadow-sm open:shadow-md">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold text-brand-900">
              Jak wygląda pierwsza wizyta?
              <ChevronIcon />
            </summary>
            <p className="mt-4 border-t border-brand-100 pt-4 text-sm leading-relaxed text-neutral-700">
              {firstVisitAnswer}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
