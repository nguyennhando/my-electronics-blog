import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-black/90 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">
              Datenschutzeinstellungen
            </h3>

            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Diese Website verwendet technisch notwendige Cookies und lokale
              Speicherung, um die Sicherheit, Anmeldung und Benutzererfahrung
              zu verbessern. Weitere Informationen finden Sie in der
              Datenschutzerklärung.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={rejectCookies}
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Ablehnen
            </button>

            <button
              onClick={acceptCookies}
              className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:scale-105"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}