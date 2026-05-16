export default function Impressum() {
  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/20 bg-zinc-950/80 p-10 shadow-2xl backdrop-blur-xl">
        <h1 className="text-4xl font-black text-cyan-400">Impressum</h1>

        <div className="mt-10 space-y-8 text-zinc-300 leading-8">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">
              Angaben gemäß § 5 TMG
            </h2>

            <p>
              Nguyen Nhan Do
              <br />
              ElektronikLab
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">
              Kontakt
            </h2>

            <p>
              E-Mail: donguyennhan.de@gmail.com
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">
              Haftungsausschluss
            </h2>

            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für externe Links und deren Inhalte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}