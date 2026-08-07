import BooksyButton from "@/components/ui/booksy-button";

export default function CtaBanner() {
  return (
    <section className="bg-brand-600">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
          Gotowy, aby zadbać o swoje zdrowie?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-50">
          Umów wizytę online w kilka sekund — wybierz dogodny termin poprzez
          Booksy, bez telefonowania i czekania.
        </p>
        <div className="mt-8 flex justify-center">
          <BooksyButton size="lg" variant="inverted" label="Umów wizytę teraz" />
        </div>
      </div>
    </section>
  );
}
