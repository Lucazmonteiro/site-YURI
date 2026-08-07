const pillars = [
  {
    title: "Primum non nocere",
    description:
      "Po pierwsze nie szkodzić. Każda decyzja terapeutyczna podporządkowana jest bezpieczeństwu pacjenta.",
    icon: (
      <path
        d="M12 3l7 4v5c0 4.5-3 8.5-7 9-4-.5-7-4.5-7-9V7l7-4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Medycyna zintegrowana",
    description:
      "40 lat akademickiego doświadczenia medycznego połączone z akupunkturą, terapią Su Jok i ziołolecznictwem Wschodu.",
    icon: (
      <path
        d="M12 21c-4-2.5-8-6-8-11a5 5 0 0110-1 5 5 0 0110 1c0 5-4 8.5-8 11z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Indywidualna diagnoza",
    description:
      "Wnikliwy wywiad i dobór terapii dla każdego pacjenta z osobna — bez sztampy i szufladkowania.",
    icon: (
      <path
        d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Współpraca z lekarzami",
    description:
      "Nowoczesna diagnostyka (USG, TK, MR) gdy wskazana oraz konsultacje z zaprzyjaźnionymi polskimi lekarzami.",
    icon: (
      <path
        d="M9 12l2 2 4-4M12 3l8 4v5c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V7l8-4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Philosophy() {
  return (
    <section id="filozofia" className="bg-gradient-to-br from-brand-900 to-sky-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            Filozofia gabinetu
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Leczymy człowieka, nie chorobę
          </h2>
          <p className="mt-4 text-brand-100">
            Podejście holistyczne nie oznacza rezygnacji z rzetelnej wiedzy
            medycznej — oznacza patrzenie na pacjenta jako na całość.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/25 bg-white/5 p-6 shadow-md backdrop-blur-sm"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-9 w-9 text-brand-300"
              >
                {pillar.icon}
              </svg>
              <h3 className="mt-4 font-serif text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100/90">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
