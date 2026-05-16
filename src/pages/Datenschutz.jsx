export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-zinc-950/80 p-10 shadow-2xl backdrop-blur-xl">
        <h1 className="text-4xl font-black text-cyan-400">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-10 text-zinc-300 leading-8">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Allgemeine Hinweise
            </h2>

            <p>
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese
              Website verarbeitet personenbezogene Daten ausschließlich im
              Rahmen der gesetzlichen Datenschutzvorschriften der DSGVO.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Hosting
            </h2>

            <p>
              Diese Website wird über GitHub Pages bereitgestellt. Beim Besuch
              der Website können technische Daten wie IP-Adresse, Browsertyp
              und Zugriffszeit verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Authentifizierung und Datenbank
            </h2>

            <p>
              Für die Anmeldung und Verwaltung von Inhalten wird Supabase
              verwendet. Dabei können E-Mail-Adressen und Authentifizierungs-
              daten verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
              Cookies und lokale Speicherung
            </h2>

            <p>
              Diese Website verwendet lokale Speicherung (localStorage) und
              technisch notwendige Cookies zur Verwaltung von Login- und
              Datenschutzeinstellungen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-white">
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