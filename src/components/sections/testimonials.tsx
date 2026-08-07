"use client";

import { useEffect, useRef, useState } from "react";
import { BOOKSY_URL } from "@/lib/site-config";

// Reviews longer than this are clamped to 4 lines with a "Zobacz więcej"
// toggle, so every card starts at roughly the same height regardless of
// how much a given reviewer wrote.
const TRUNCATE_LENGTH = 150;

// Booksy's real total is 15 verified reviews (we only have full text for
// 13 of them to show as cards); Google Maps contributes the 5 shown here
// in full — so the combined verified count is 15 + 5.
const TOTAL_REVIEW_COUNT = 20;

type Review = {
  name: string;
  text: string;
  source: "Booksy" | "Google";
};

const reviews: Review[] = [
  {
    name: "Daria Paszkowska",
    text: "Byłam u Pana Jurija 1.5 roku temu i mogę z całą pewnością powiedzieć, że jego terapia wsparła mój organizm w tamtym momencie. Jest to bardzo dobry człowiek, skuteczny naturopata, który w sposób zrozumiały i z odpowiednim wyczuciem omówi występujące problemy, a także zaproponuje odpowiednią terapię. Polecam z całego serca i dziękuję 🙏",
    source: "Google",
  },
  {
    name: "Beata Kaczkiewicz",
    text: "Specjalista z dużą wiedzą, wysoką skutecznością i po prostu dobry, ciepły człowiek. Polecam doktora Jurija bez względu na to, czy choruje ciało czy dusza. Po raz kolejny skorzystałam z leczenia u doktora Jurija. Diagnoza z tęczówki oka, szybkie podjęcie leczenia, połączenie akupunktury i mieszanki ziół - już po 3 zabiegu jak nowo narodzona!",
    source: "Google",
  },
  {
    name: "Paweł Kamiński",
    text: "Szczerze polecam. Pan doktor przez swoją fachowość, doświadczenie i zaangażowanie uratował mi życie. Po dwóch chemiach i 33 naświetlaniach radioterapii, pojawiło się zagrożenie, że zostanę z sondą żywienia dojelitowego na zawsze. Zastosowanie terapii ziołowej doprowadziło do tego, że dziś jem i funkcjonuję normalnie. Wsparcie, życzliwość i wiedza w połączeniu z profesjonalizmem od lekarza Jurija Tokara, pozwoliły mi przejść przez bardzo trudne chwile, których nie brakowało w czasie mojej choroby.",
    source: "Google",
  },
  {
    name: "Artur Zawadka",
    text: "Polecam. W mojej opinii diagnoza została postawiona na głębokim poziomie przyczyn, a nie tylko powierzchownych objawów. Stosowanie zaleceń Pana doktora przynosi wyraźną poprawę.",
    source: "Google",
  },
  {
    name: "Michał Kwiatkowski-Ruszkiewicz",
    text: "Polecam, bardzo kompetentny a przy tym pełen empatii specjalista.",
    source: "Google",
  },
  {
    name: "Malgosia",
    text: "Polecam pana doktora, po akupunkturze czułam się jak piórko. Pozdrawiam",
    source: "Booksy",
  },
  {
    name: "Izabela",
    text: "Bardzo szczegółowa wizyta I zabieg akupunktury",
    source: "Booksy",
  },
  {
    name: "Joanna",
    text: "Wspaniały lekarz. Podejście do pacjenta super. Pan doktor wszystko prosto tłumaczy. Zioła, ktore dostaje są bardzo dobrze dobrane. Niemalże natychmiast...",
    source: "Booksy",
  },
  {
    name: "Marta",
    text: "Polecam",
    source: "Booksy",
  },
  {
    name: "Magdalena",
    text: "Bardzo rzeczowy lekarz. Mam nadzieję,że nasza współpraca będzie owocna",
    source: "Booksy",
  },
  {
    name: "Iwona",
    text: "Polecam",
    source: "Booksy",
  },
  {
    name: "Beata",
    text: "Polecam serdecznie",
    source: "Booksy",
  },
  {
    name: "Joanna",
    text: "Profesjonalizm, wiedza, dziękuję",
    source: "Booksy",
  },
  {
    name: "Martyna",
    text: "Bardzo sympatycznie i profesjonalnie. Pan doktor odpowiada na pytania, co pozwala zrozumieć terapias Odkąd korzystam z opieki Pana doktora czuje się zn...",
    source: "Booksy",
  },
  {
    name: "Beata",
    text: "Polecam serdecznie. Jestem pacjentką doktora od kilku lat. Akupunktura i zestawy ziołowe bardzo skuteczne, zwłaszcza procedura leczenia grzybicy ogóln...",
    source: "Booksy",
  },
  {
    name: "Kasia",
    text: "Polecam! Rozmowa z doktorem jest rzeczowa i sympatyczna. Po pierwszej wizycie konkretne zalecenia.",
    source: "Booksy",
  },
  {
    name: "Caroline",
    text: "Polecam serdecznie Doktora,bezbolesna i skuteczna akupunktura 😊 świetny kontakt indywidualne podejście do pacjenta",
    source: "Booksy",
  },
  {
    name: "Olga",
    text: "Bardzo polecam, świetny lekarz, godny zaufania, bardzo miła atmosfera,",
    source: "Booksy",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: Review["source"] }) {
  if (source === "Google") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
          <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M12 13a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Google
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-700">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
        <path d="M9 12l2 2 4-4M12 3l8 4v5c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V7l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Booksy
    </span>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, moved: false, startX: 0, scrollLeft: 0 });
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
  };

  // Window-level listeners (not just on the scroller) so a fast drag that
  // leaves the element's bounds — or a mouseup outside it — still tracks
  // and releases correctly, matching native touch-scroll feel.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!drag.current.isDown) return;
      e.preventDefault();
      const delta = e.pageX - drag.current.startX;
      if (Math.abs(delta) > 5) drag.current.moved = true;
      el.scrollLeft = drag.current.scrollLeft - delta;
    };

    const handleMouseUp = () => {
      if (!drag.current.isDown) return;
      drag.current.isDown = false;
      el.classList.remove("cursor-grabbing", "select-none");
      el.classList.add("cursor-grab");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current.isDown = true;
    drag.current.moved = false;
    drag.current.startX = e.pageX;
    drag.current.scrollLeft = el.scrollLeft;
    el.classList.add("cursor-grabbing", "select-none");
    el.classList.remove("cursor-grab");
  };

  // Swallow the click that follows a drag so releasing over the trailing
  // Booksy link (or a card) doesn't accidentally navigate.
  const handleClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section id="opinie" className="bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Zweryfikowane opinie · Booksy i Google
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
              Opinie pacjentów
            </h2>
            <p className="mt-4 text-neutral-600">
              Prawdziwe opinie pacjentów zebrane z profilu gabinetu w
              serwisie Booksy oraz z wizytówki Google Maps.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-brand-300 bg-white px-6 py-4 shadow-md">
            <span className="font-serif text-4xl font-semibold text-brand-900">5.0</span>
            <div>
              <Stars className="text-brand-500" />
              <p className="mt-1 text-sm text-neutral-500">
                {TOTAL_REVIEW_COUNT} zweryfikowanych opinii
              </p>
            </div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onMouseDown={handleMouseDown}
          onClickCapture={handleClickCapture}
          className="mt-12 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review, index) => {
            const isLong = review.text.length > TRUNCATE_LENGTH;
            const isExpanded = expanded.has(index);
            return (
              <article
                key={`${review.name}-${index}`}
                className="flex w-[280px] shrink-0 snap-start flex-col rounded-2xl border border-brand-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg sm:w-[340px]"
              >
                <div className="flex items-center justify-between gap-2">
                  <Stars className="text-brand-500" />
                  <SourceBadge source={review.source} />
                </div>
                <p
                  className={`mt-4 flex-1 text-sm leading-relaxed text-neutral-700 ${
                    isLong && !isExpanded ? "line-clamp-4" : ""
                  }`}
                >
                  „{review.text}”
                </p>
                {isLong && (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(index)}
                    className="mt-2 self-start text-xs font-semibold text-brand-600 hover:text-brand-800 hover:underline"
                  >
                    {isExpanded ? "Zwiń" : "Zobacz więcej"}
                  </button>
                )}
                <div className="mt-5 border-t border-brand-100 pt-4">
                  <p className="font-semibold text-brand-900">{review.name}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/*
          Three-column grid (spacer / button / arrows) instead of a plain
          flex row: with only two visible items, justify-between would
          pull the button toward the left rather than the true center.
          The empty first column mirrors the arrows' column width so the
          button lands exactly in the middle of the row, arrows anchored
          to the right.
        */}
        <div className="mt-8 grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" className="hidden sm:block" />

          <div className="flex justify-center">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-100"
            >
              Zobacz wszystkie opinie na Booksy
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="hidden justify-end gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Poprzednie opinie"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Następne opinie"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
