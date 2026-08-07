import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności Gabinetu Terapii Naturalnych — zasady przetwarzania danych, pliki cookies oraz prawa użytkowników zgodnie z RODO.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
        RODO
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-brand-900 sm:text-4xl">
        Polityka prywatności
      </h1>
      <p className="mt-4 text-sm text-neutral-500">
        Ostatnia aktualizacja: sierpień 2026
      </p>

      <div className="mt-10 space-y-10">
        <div>
          <p className="leading-relaxed text-neutral-700">
            Niniejsza polityka prywatności opisuje zasady przetwarzania danych
            osobowych oraz wykorzystywania plików cookies w związku z
            korzystaniem ze strony internetowej {siteConfig.url.replace("https://", "")}{" "}
            (dalej: „Strona”), prowadzonej przez {siteConfig.name} —{" "}
            {siteConfig.doctorName}.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            1. Administrator danych
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Administratorem danych osobowych jest {siteConfig.name} —{" "}
            {siteConfig.doctorName}, {siteConfig.address.line1},{" "}
            {siteConfig.address.country} (dalej: „Administrator”). Kontakt z
            Administratorem możliwy jest telefonicznie pod numerem{" "}
            {siteConfig.phoneDisplay} lub za pośrednictwem profili
            społecznościowych wskazanych na Stronie.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            2. Jakie dane są przetwarzane
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Strona nie zawiera formularzy kontaktowych, rejestracyjnych ani
            newsletterowych i nie zbiera danych osobowych bezpośrednio od
            odwiedzających. Podczas korzystania ze Strony automatycznie
            zapisywane mogą być wyłącznie dane techniczne — takie jak adres
            IP, typ przeglądarki, system operacyjny oraz data i godzina
            wizyty — gromadzone w logach serwera przez dostawcę hostingu.
            Dane te wykorzystywane są wyłącznie w celach zapewnienia
            bezpieczeństwa, stabilności i prawidłowego funkcjonowania Strony
            i nie są łączone z tożsamością konkretnych osób.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            3. Podstawa prawna przetwarzania
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Podstawą prawną przetwarzania danych opisanych w pkt 2 jest
            prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f
            RODO), polegający na zapewnieniu bezpieczeństwa i prawidłowego
            działania Strony oraz diagnostyce ewentualnych nieprawidłowości
            technicznych.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            4. Pliki cookies i narzędzia analityczne
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Strona nie wykorzystuje plików cookies wymagających zgody
            użytkownika i nie korzysta z narzędzi analitycznych ani
            śledzących, takich jak Google Analytics czy Meta Pixel. Czcionki
            wykorzystywane na Stronie (Geist, Lora) są hostowane lokalnie na
            serwerze Strony — podczas jej przeglądania żadne dane nie są
            przesyłane do zewnętrznych dostawców czcionek, takich jak Google
            Fonts.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            5. Rezerwacja wizyt przez Booksy
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Rezerwacja wizyt odbywa się za pośrednictwem zewnętrznej
            platformy Booksy. W zakresie danych podawanych podczas rezerwacji
            (np. imię i nazwisko, numer telefonu, adres e-mail) administratorem
            danych jest Booksy — odrębny, niezależny administrator. Zasady
            przetwarzania danych przez Booksy opisane są w jego własnej
            polityce prywatności, dostępnej na stronie{" "}
            <a
              href="https://booksy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 hover:underline"
            >
              booksy.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            6. Odnośniki do serwisów zewnętrznych
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Strona zawiera odnośniki do profili Instagram i Facebook oraz do
            platformy Booksy. Po przejściu na te serwisy obowiązują ich
            własne, niezależne od niniejszego dokumentu, polityki prywatności
            i regulaminy.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            7. Prawa osoby, której dane dotyczą
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            W zakresie, w jakim dane osobowe są przetwarzane, każdej osobie
            przysługuje prawo dostępu do swoich danych, ich sprostowania,
            usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz
            wniesienia sprzeciwu wobec przetwarzania. Przysługuje również
            prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
            Osobowych (ul. Stawki 2, 00-193 Warszawa), jeśli dane są
            przetwarzane niezgodnie z prawem.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            8. Okres przechowywania danych
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Dane techniczne zapisywane w logach serwera przechowywane są
            przez okres wynikający z regulaminu dostawcy usług hostingowych,
            nie dłużej niż jest to konieczne do realizacji celów opisanych w
            pkt 2.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            9. Bezpieczeństwo
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Strona jest udostępniana wyłącznie w połączeniu szyfrowanym
            (HTTPS) i wykorzystuje mechanizmy zabezpieczające, w tym politykę
            bezpieczeństwa treści (Content Security Policy), chroniące przed
            nieautoryzowanym dostępem i manipulacją treścią.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            10. Zmiany polityki prywatności
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Administrator zastrzega sobie prawo do wprowadzania zmian w
            niniejszej polityce prywatności. Aktualna wersja dokumentu jest
            zawsze dostępna pod niniejszym adresem.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-brand-900">
            11. Kontakt
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            W sprawach związanych z ochroną danych osobowych prosimy o
            kontakt telefoniczny pod numerem {siteConfig.phoneDisplay} lub za
            pośrednictwem profili społecznościowych wskazanych na Stronie.
          </p>
        </div>
      </div>
    </section>
  );
}
