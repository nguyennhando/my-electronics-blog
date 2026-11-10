import { useState } from "react";
import { getSiteTextOverrides } from "../lib/posts";
import { COOKIE_TEXT } from "../lib/siteTexts";


export default function CookieBanner({ language = "de" }) {
  const base = COOKIE_TEXT[language] || COOKIE_TEXT.de;
  const custom = getSiteTextOverrides(language);
  const t = {
    title: (custom.cookie_title || "").trim() || base.title,
    text: (custom.cookie_text || "").trim() || base.text,
    button: (custom.cookie_button || "").trim() || base.button,
  };
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("privacy-notice")
  );

  const dismissNotice = () => {
    localStorage.setItem("privacy-notice", "acknowledged");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="wb fixed bottom-4 left-4 right-4 z-[60] bg-transparent">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#C9D3CD] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,26,23,0.45)] sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="wb-head text-lg font-bold text-[#0F1A17]">{t.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-[#33423C]">{t.text}</p>
          </div>
          <button
            type="button"
            onClick={dismissNotice}
            className="shrink-0 rounded-xl bg-[#0B5A44] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#083D2F]"
          >
            {t.button}
          </button>
        </div>
      </div>
    </div>
  );
}
