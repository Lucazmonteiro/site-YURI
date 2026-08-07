import Image from "next/image";
import BooksyButton from "@/components/ui/booksy-button";

const steps = [
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

export default function AntiSmoking() {
  return (
    <section id="antynikotynowa" className="bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-2 ring-brand-300">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-square w-full self-start">
              <Image
                src="/images/service-consult.jpg"
                alt="Leczymy człowieka, nie chorobę — konsultacja w Gabinecie Terapii Naturalnych"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Terapia flagowa
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-brand-900">
                Terapia antynikotynowa
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-600">
                Skuteczność terapii opiera się na indywidualnym doborze
                metody dla każdego pacjenta oraz jednoczesnym oddziaływaniu
                na kilku płaszczyznach — fizycznej, psychicznej i
                emocjonalnej.
              </p>

              <ol className="mt-8 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-brand-900">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-8 text-sm italic leading-relaxed text-neutral-500">
                Jedyne, co musi zrobić pacjent, to mieć silną motywację oraz
                rzetelnie wykonywać zalecenia lekarza.
              </p>

              <div className="mt-8">
                <BooksyButton size="lg" label="Umów terapię antynikotynową" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
