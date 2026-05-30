import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("privacy-notice")
  );

  const acceptNotice = () => {
    localStorage.setItem("privacy-notice", "accepted");
    setVisible(false);
  };

  const rejectNotice = () => {
    localStorage.setItem("privacy-notice", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-black/90 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">
              Datenschutzhinweis
            </h3>

            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Diese Website verwendet keine Tracking-Cookies, keine
              Werbe-Cookies und keine Analyse-Cookies. Es wird lediglich eine
              lokale Speicherung im Browser verwendet, um diese
              Datenschutzhinweis-Auswahl zu speichern. Weitere Informationen
              finden Sie in der Datenschutzerklärung.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={rejectNotice}
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Schließen
            </button>

            <button
              type="button"
              onClick={acceptNotice}
              className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:scale-105"
            >
              Verstanden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
