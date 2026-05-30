export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-cyan-500/20 bg-zinc-950/80 p-5 shadow-2xl backdrop-blur-xl sm:p-10">
        <h1 className="text-3xl font-black leading-tight text-cyan-400 sm:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-8 text-sm leading-7 text-zinc-300 sm:mt-10 sm:text-base sm:leading-8">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Allgemeine Hinweise
            </h2>

            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese
              Website verarbeitet personenbezogene Daten ausschließlich im
              Rahmen der gesetzlichen Datenschutzvorschriften der DSGVO.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Hosting
            </h2>

            <p>
              Diese Website wird über GitHub Pages bereitgestellt. Beim Besuch
              der Website können technische Daten wie IP-Adresse, Browsertyp
              und Zugriffszeit verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Authentifizierung und Datenbank
            </h2>

            <p>
              Für die Anmeldung und Verwaltung von Inhalten wird Supabase
              verwendet. Dabei können E-Mail-Adressen und
              Authentifizierungsdaten verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Cookies und lokale Speicherung
            </h2>

            <p>
              Diese Website verwendet lokale Speicherung (localStorage) und
              technisch notwendige Cookies zur Verwaltung von Login- und
              Datenschutzeinstellungen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Ihre Rechte
            </h2>

            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung sowie Widerspruch gemäß DSGVO.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}