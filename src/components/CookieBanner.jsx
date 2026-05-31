import { useState } from "react";

const TEXT = {
  de: { title: "Datenschutzhinweis", text: "Diese Website verwendet keine Tracking-Cookies, keine Werbe-Cookies und keine Analyse-Cookies. Es wird lediglich eine lokale Speicherung im Browser verwendet, um diese Datenschutzhinweis-Auswahl zu speichern. Weitere Informationen finden Sie in der Datenschutzerklärung.", button: "Verstanden" },
  en: { title: "Privacy Notice", text: "This website does not use tracking, advertising or analytics cookies. Browser storage is only used locally to remember this privacy notice selection. More information is available in the privacy policy.", button: "Understood" },
  vi: { title: "Thông báo quyền riêng tư", text: "Website này không sử dụng cookie theo dõi, quảng cáo hoặc phân tích. Bộ nhớ cục bộ của trình duyệt chỉ được dùng để lưu lựa chọn cho thông báo quyền riêng tư này. Bạn có thể xem thêm thông tin trong chính sách quyền riêng tư.", button: "Đã hiểu" },
};

export default function CookieBanner({ language = "de" }) {
  const t = TEXT[language] || TEXT.de;
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("privacy-notice")
  );

  const dismissNotice = () => {
    localStorage.setItem("privacy-notice", "acknowledged");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-black/90 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">
              {t.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-zinc-300">
              {t.text}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={dismissNotice}
              className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:scale-105"
            >
              {t.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
