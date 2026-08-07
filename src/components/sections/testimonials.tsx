"use client";

import { useEffect, useRef } from "react";
import { BOOKSY_URL } from "@/lib/site-config";

const TOTAL_REVIEW_COUNT = 15;

const reviews = [
  {
    name: "Malgosia",
    service: "Konsultacja + akupunktura",
    text: "Polecam pana doktora, po akupunkturze czułam się jak piórko. Pozdrawiam",
  },
  {
    name: "Izabela",
    service: "Akupunktura",
    text: "Bardzo szczegółowa wizyta I zabieg akupunktury",
  },
  {
    name: "Joanna",
    service: "Akupunktura",
    text: "Wspaniały lekarz. Podejście do pacjenta super. Pan doktor wszystko prosto tłumaczy. Zioła, ktore dostaje są bardzo dobrze dobrane. Niemalże natychmiast...",
  },
  {
    name: "Marta",
    service: "Akupunktura",
    text: "Polecam",
  },
  {
    name: "Magdalena",
    service: "Akupunktura",
    text: "Bardzo rzeczowy lekarz. Mam nadzieję,że nasza współpraca będzie owocna",
  },
  {
    name: "Iwona",
    service: "Konsultacja + akupunktura",
    text: "Polecam",
  },
  {
    name: "Beata",
    service: "Irydologia",
    text: "Polecam serdecznie",
  },
  {
    name: "Joanna",
    service: "Konsultacja",
    text: "Profesjonalizm, wiedza, dziękuję",
  },
  {
    name: "Martyna",
    service: "Akupunktura",
    text: "Bardzo sympatycznie i profesjonalnie. Pan doktor odpowiada na pytania, co pozwala zrozumieć terapias Odkąd korzystam z opieki Pana doktora czuje się zn...",
  },
  {
    name: "Beata",
    service: "Akupunktura",
    text: "Polecam serdecznie. Jestem pacjentką doktora od kilku lat. Akupunktura i zestawy ziołowe bardzo skuteczne, zwłaszcza procedura leczenia grzybicy ogóln...",
  },
  {
    name: "Kasia",
    service: "Konsultacja",
    text: "Polecam! Rozmowa z doktorem jest rzeczowa i sympatyczna. Po pierwszej wizycie konkretne zalecenia.",
  },
  {
    name: "Caroline",
    service: "Akupunktura",
    text: "Polecam serdecznie Doktora,bezbolesna i skuteczna akupunktura 😊 świetny kontakt indywidualne podejście do pacjenta",
  },
  {
    name: "Olga",
    service: "Akupunktura",
    text: "Bardzo polecam, świetny lekarz, godny zaufania, bardzo miła atmosfera,",
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

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
        <path d="M9 12l2 2 4-4M12 3l8 4v5c0 4.5-3.5 8.5-8 9-4.5-.5-8-4.5-8-9V7l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Zweryfikowana wizyta
    </span>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, moved: false, startX: 0, scrollLeft: 0 });

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
              Zweryfikowane opinie · Booksy
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
              Opinie pacjentów
            </h2>
            <p className="mt-4 text-neutral-600">
              Prawdziwe opinie pacjentów zebrane bezpośrednio z profilu
              gabinetu w serwisie Booksy.
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

        <div className="relative mt-12">
          <div
            ref={scrollerRef}
            onMouseDown={handleMouseDown}
            onClickCapture={handleClickCapture}
            className="flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="flex w-[280px] shrink-0 snap-start flex-col rounded-2xl border border-brand-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg sm:w-[340px]"
              >
                <div className="flex items-center justify-between gap-2">
                  <Stars className="text-brand-500" />
                  <VerifiedBadge />
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                  „{review.text}”
                </p>
                <div className="mt-5 border-t border-brand-100 pt-4">
                  <p className="font-semibold text-brand-900">{review.name}</p>
                  <p className="text-xs text-neutral-500">{review.service}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 hidden justify-end gap-3 sm:flex">
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

        <div className="mt-10 flex justify-center">
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
      </div>
    </section>
  );
}
