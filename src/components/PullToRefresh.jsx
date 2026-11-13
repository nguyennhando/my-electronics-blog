import { useEffect, useState } from "react";
import { ArrowDown, LoaderCircle } from "lucide-react";

const REFRESH_DISTANCE = 88;
const LABELS = {
  de: ["Zum Aktualisieren ziehen", "Zum Aktualisieren loslassen", "Wird aktualisiert …"],
  en: ["Pull to refresh", "Release to refresh", "Refreshing…"],
  vi: ["Kéo xuống để làm mới", "Thả tay để làm mới", "Đang tải lại…"],
};

export default function PullToRefresh({ language }) {
  const [distance, setDistance] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (navigator.maxTouchPoints === 0) return;

    const root = document.documentElement;
    let start = null;
    let reloadTimer;

    const reset = () => {
      start = null;
      setDistance(0);
    };

    const onStart = (event) => {
      if (reloadTimer) return;
      reset();
      if (
        event.touches.length !== 1 ||
        window.scrollY > 0 ||
        window.visualViewport?.scale > 1 ||
        event.target.closest("input, textarea, select, [contenteditable], [aria-modal='true']")
      ) return;

      const touch = event.touches[0];
      start = { x: touch.clientX, y: touch.clientY, distance: 0 };
    };

    const onMove = (event) => {
      if (!start) return;
      if (event.touches.length !== 1 || window.scrollY > 0) {
        reset();
        return;
      }
      const touch = event.touches[0];
      const deltaY = touch.clientY - start.y;
      const deltaX = Math.abs(touch.clientX - start.x);
      if (deltaY < 0 || deltaX > deltaY) {
        reset();
        return;
      }
      if (deltaY === 0) return;

      if (event.cancelable) event.preventDefault();
      start.distance = deltaY;
      setDistance(deltaY);
    };

    const onEnd = () => {
      const shouldRefresh = start?.distance >= REFRESH_DISTANCE;
      reset();
      if (!shouldRefresh) return;

      setRefreshing(true);
      reloadTimer = window.setTimeout(() => window.location.reload(), 160);
    };

    root.classList.add("pull-to-refresh");
    document.addEventListener("touchstart", onStart, { passive: true });
    document.addEventListener("touchmove", onMove, { passive: false });
    document.addEventListener("touchend", onEnd, { passive: true });
    document.addEventListener("touchcancel", reset, { passive: true });
    return () => {
      root.classList.remove("pull-to-refresh");
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
      document.removeEventListener("touchcancel", reset);
      window.clearTimeout(reloadTimer);
    };
  }, []);

  if (distance < 18 && !refreshing) return null;

  const ready = distance >= REFRESH_DISTANCE;
  const [pull, release, loading] = LABELS[language];
  return (
    <div className="pointer-events-none fixed inset-x-0 top-[max(4.75rem,env(safe-area-inset-top))] z-[60] flex justify-center">
      <div className="wb flex items-center gap-2 rounded-full border border-[#C9D3CD] px-4 py-2 text-sm font-semibold shadow-md">
        {refreshing
          ? <LoaderCircle size={16} className="motion-safe:animate-spin" aria-hidden="true" />
          : <ArrowDown size={16} className={ready ? "rotate-180" : ""} aria-hidden="true" />}
        <span role="status">{refreshing ? loading : ready ? release : pull}</span>
      </div>
    </div>
  );
}
