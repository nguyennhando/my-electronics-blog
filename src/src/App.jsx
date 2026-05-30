import CookieBanner from "./components/CookieBanner";
import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { POSTS } from "./lib/posts";

import {
  CircuitBoard, Cpu, RadioTower, Bot, Globe, Gauge, Search, Menu, X,
  CalendarDays, ArrowRight, Save, Trash2, Edit3, Plus, ShieldCheck,
  Wrench, Mail, MonitorSmartphone, Workflow, AlertTriangle, ExternalLink,
  ChevronLeft, ChevronRight, Code2, ArrowLeft, Clock,
} from "lucide-react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const MAX_POST_GALLERY_IMAGES = 6;
const MAX_PROJECT_GALLERY_IMAGES = 12;
const POSTS_KEY = "my-electronics-blog.posts.v1";
const GALLERY_KEY = "my-electronics-blog.projectGallery.v1";
const SLIDE_INTERVAL = 5000;

const DEFAULT_GALLERY = [
  "/my-electronics-blog/images/finance-main.webp",
  "/my-electronics-blog/images/finance-chart.webp",
  "/my-electronics-blog/images/finance-dashboard.webp",
];

// ─────────────────────────────────────────────
// STORAGE HELPERS
// ─────────────────────────────────────────────
const readStorage = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch { return fallback; }
};

const writeStorage = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value, null, 2)); } catch {}
};

const removeStorage = (key) => {
  try { localStorage.removeItem(key); } catch {}
};

// ─────────────────────────────────────────────
// DATA HELPERS
// ─────────────────────────────────────────────
const normalizeImageList = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string") {
    try {
      const p = JSON.parse(value);
      return Array.isArray(p) ? p.filter(Boolean) : [];
    } catch {
      return value.split("\n").map(s => s.trim()).filter(Boolean);
    }
  }
  return [];
};

const normalizeImagePath = (value) => {
  const path = String(value || "").trim();
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/my-electronics-blog/")) return path;
  if (path.startsWith("/images/")) return `/my-electronics-blog${path}`;
  if (path.startsWith("images/")) return `/my-electronics-blog/${path}`;
  return `/my-electronics-blog/images/posts/${path.replace(/^\/+/, "")}`;
};

const uniqueUrls = (urls) => [...new Set((urls || []).filter(Boolean))];

const normalizeStatus = (s) => ["idea", "in_progress", "done"].includes(s) ? s : "done";

const getStatusLabel = (s) => ({ idea: "Idee", in_progress: "In Arbeit", done: "Umgesetzt" }[normalizeStatus(s)]);

const getStatusClasses = (s) => ({
  idea: "border-zinc-500/30 bg-zinc-500/15 text-zinc-300",
  in_progress: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
  done: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
}[normalizeStatus(s)]);

const isIdea = (post) => normalizeStatus(post?.project_status) === "idea";

const formatDate = (date) => {
  if (!date) return "Kein Datum";
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(date));
};

const getCategoryIcon = (cat) => {
  const map = {
    IoT: RadioTower, Robotik: Bot, Messtechnik: Gauge,
    "Über mich": Globe, "Karriere & Weiterbildung": ShieldCheck,
    "WinCC & HMI": MonitorSmartphone, "Technische Erfahrungen": Wrench,
  };
  return map[cat] || Cpu;
};

const downloadJson = (filename, data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  a.remove(); URL.revokeObjectURL(url);
};

// ─────────────────────────────────────────────
// DEMO DATA
// ─────────────────────────────────────────────
const DEMO_POSTS = POSTS;

const FEATURES = [
  { icon: Cpu, title: "Elektronik & Embedded Systems", text: "Eigene Lernprojekte rund um Mikrocontroller, Sensorik und hardwarenahe Entwicklung zur praktischen Erweiterung meines technischen Wissens." },
  { icon: Workflow, title: "Automatisierung & Steuerung", text: "Praktische Übungen und kleinere Projekte, um industrielle Abläufe, Steuerungstechnik und technische Prozesse besser zu verstehen." },
  { icon: ShieldCheck, title: "Technisches Lernen", text: "Dokumentation meines Lernwegs, technischer Erfahrungen und neuer Themen, mit denen ich mich kontinuierlich beschäftige." },
  { icon: MonitorSmartphone, title: "Eigene Entwicklung", text: "Diese Website dient als persönliche Plattform, um Projekte, Ideen und technische Fortschritte übersichtlich festzuhalten." },
];

const EMPTY_POST = () => ({
  id: null, title: "", category: "IoT",
  image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  image_gallery: [], excerpt: "", content: "",
  tags: "ESP32, Sensorik", read_time: "5 Min.",
  published: true, external_link: "",
  project_status: "done", sort_order: 100,
  created_at: new Date().toISOString(),
});

// ─────────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────
function GradientBorder({ children, gradient = "from-cyan-400 via-cyan-500 to-cyan-400", className = "", innerClassName = "", padding = "p-[1.5px]", rounded = "rounded-[2rem]", stretch = false }) {
  return (
    <div className={`relative ${rounded} ${padding} ${stretch ? "flex flex-col" : ""} ${className}`}>
      <div className={`absolute inset-0 ${rounded} bg-gradient-to-r ${gradient} opacity-70`} />
      <div className={`relative ${rounded} ${stretch ? "flex-1" : ""} ${innerClassName}`}>{children}</div>
    </div>
  );
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07111f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.45),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.42),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.38),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.34),transparent_32%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-900/30 to-fuchsia-600/20" />
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.16) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute left-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-400/35 blur-3xl" />
      <div className="absolute right-[-160px] top-[15%] h-[560px] w-[560px] rounded-full bg-blue-500/35 blur-3xl" />
      <div className="absolute bottom-[-180px] left-[20%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/30 blur-3xl" />
    </div>
  );
}

// ─────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────
function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index);
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const imageUrl = typeof images[current] === "object" ? images[current].image_url : images[current];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 px-4 backdrop-blur-md" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[90vh] w-full max-w-5xl"
        onClick={e => e.stopPropagation()}
      >
        <img src={imageUrl} alt="Bild" className="max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl" />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
            <button onClick={() => setCurrent(p => (p - 1 + images.length) % images.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80"><ChevronLeft className="h-5 w-5" /></button>
            <span className="flex items-center text-white/60 text-sm">{current + 1} / {images.length}</span>
            <button onClick={() => setCurrent(p => (p + 1) % images.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80"><ChevronRight className="h-5 w-5" /></button>
          </div>
        )}
        <button onClick={onClose} className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black shadow-xl transition hover:bg-cyan-300">
          <X className="h-5 w-5 stroke-[3]" />
        </button>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────
function SiteHeader({ onAdminClick, adminUnlocked, onNavigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdminRoute = new URLSearchParams(window.location.search).get("admin") === "1";

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (currentPage !== "home") { onNavigate("home"); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100); }
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => { setMenuOpen(false); onNavigate("home"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const openAdmin = () => {
  if (adminUnlocked) {
    setMenuOpen(false);
    onAdminClick();
    return;
  }

  const pw = window.prompt("Admin Passwort");

  if (pw === import.meta.env.VITE_ADMIN_PASSWORD) {
    setMenuOpen(false);
    onAdminClick();
  } else {
    window.alert("Falsches Passwort");
  }
};

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
        <button type="button" onClick={goHome} className="flex items-center gap-3 text-left">
          <div className="flex h-12 w-12 overflow-hidden rounded-2xl sm:h-14 sm:w-14">
            <img src="/my-electronics-blog/images/logo.webp" alt="Logo" className="h-full w-full scale-110 object-contain brightness-110 contrast-110" />
          </div>
          <div>
            <h1 className="text-base font-black text-white sm:text-xl">Nguyen Nhan Do</h1>
            <p className="text-[10px] leading-tight text-zinc-400 sm:text-xs">Technik • Entwicklung • Lernen</p>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {[["blog", "Blog"], ["projekte", "Galerie"], ["kontakt", "Kontakt"]].map(([id, label]) => (
            <button key={id} type="button" onClick={() => scrollTo(id)} className="text-sm text-zinc-300 transition hover:text-cyan-300">{label}</button>
          ))}
          {isAdminRoute && (
            <button type="button" onClick={openAdmin} className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10 hover:border-cyan-400/60">
              Admin
            </button>
          )}
        </div>

        <button type="button" className="rounded-xl border border-white/10 p-2 text-white hover:bg-white/10 md:hidden" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-5 py-4 text-white md:hidden">
          <div className="grid gap-2">
            {[["blog", "Blog"], ["projekte", "Projekte"], ["kontakt", "Kontakt"]].map(([id, label]) => (
              <button key={id} type="button" onClick={() => scrollTo(id)} className="rounded-xl px-3 py-2 text-left text-zinc-200 hover:bg-white/10 hover:text-cyan-300">{label}</button>
            ))}
            {isAdminRoute && (
              <button type="button" onClick={openAdmin} className="rounded-xl px-3 py-2 text-left text-zinc-200 hover:bg-white/10 hover:text-cyan-300">Admin</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────
// HERO SLIDESHOW
// ─────────────────────────────────────────────
const textContainerVariants = {
  hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }, exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};
const textItemVariants = {
  hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }, exit: { opacity: 0, y: -14, transition: { duration: 0.25, ease: "easeIn" } },
};
const cardVariants = {
  hidden: { opacity: 0, x: 48, scale: 0.96 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 } }, exit: { opacity: 0, x: -32, scale: 0.97, transition: { duration: 0.28, ease: "easeIn" } },
};

function HeroSlideshow({ slides, onDiscover, onOpenPost }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % slides.length), SLIDE_INTERVAL);
  }, [slides.length]);

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, [startTimer]);

  const goTo = (idx) => { setCurrent(idx); startTimer(); };

  if (!slides.length) return null;
  const slide = slides[current];

  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-sm">
          <CircuitBoard className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-300">Elektrokonstruktion · Prüftechnik · Software</span>
        </div>
        <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Technik. Dokumentation. Entwicklung.</h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-9">
          Diese Website habe ich selbst entwickelt, um technische Projekte, Lernfortschritte und praktische Erfahrungen im Bereich Elektronik, Embedded Systems, Messtechnik und technischer Softwareentwicklung zu dokumentieren.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <button type="button" onClick={onDiscover} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 text-sm font-bold text-black shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300 sm:w-auto sm:px-7 sm:py-4 sm:text-base">
            Projekte entdecken <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://drive.google.com/drive/folders/1y6MZUhoZJCIou-SL9BHbkA-CjpXxKGz5?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-2xl border border-zinc-600/40 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 px-6 py-4 font-bold text-zinc-100 shadow-xl shadow-black/40 transition hover:border-zinc-400/50">
            <ExternalLink className="h-5 w-5" /> Open Docs.
          </a>
          <a href="https://github.com/nguyennhando?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-4 font-bold text-black shadow-xl shadow-orange-500/30 transition hover:from-orange-400 hover:to-amber-300">
            <Code2 className="h-5 w-5" /> Source Code
          </a>
        </div>
      </div>

      {/* Slide Card */}
      <div className="relative flex flex-col items-center">
        <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.85, 0.6], transition: { duration: 4, repeat: Infinity } }} className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-cyan-400/10 blur-3xl" />
        <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-cyan-500/10 lg:max-w-none">
          <div className="relative overflow-hidden rounded-[1.95rem] bg-[#080d1f]" style={{ height: "720px" }}>
            <AnimatePresence mode="wait">
              <motion.div key={current} variants={cardVariants} initial="hidden" animate="visible" exit="exit"
                whileHover={{ scale: 1.015 }}
                onClick={() => onOpenPost && slide.id && onOpenPost(slide.id)}
                onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={startTimer}
                className="flex flex-col h-full cursor-pointer">
                <div className="relative h-[360px] lg:h-[420px] shrink-0 overflow-hidden">
                  <motion.img src={slide.image} alt={slide.title} className="h-full w-full object-cover" initial={{ scale: 1.06 }} animate={{ scale: 1 }} transition={{ duration: 0.7 }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1f]/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black text-black shadow-lg">{slide.category}</span>
                    <span className="rounded-full bg-black/40 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-sm">{slide.readTime}</span>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div key={`text-${current}`} variants={textContainerVariants} initial="hidden" animate="visible" exit="exit" className="flex-1 overflow-hidden p-5 sm:p-6">
                    <motion.h3 variants={textItemVariants} className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-xl xl:text-2xl">{slide.title}</motion.h3>
                    <motion.p variants={textItemVariants} className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">{slide.text}</motion.p>
                    <motion.div variants={textItemVariants} className="mt-4 flex flex-wrap gap-2">
                      {(slide.tags || []).slice(0, 3).map(tag => <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs text-cyan-300">#{tag}</span>)}
                    </motion.div>
                    <motion.div variants={textItemVariants} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">Projekt öffnen <ArrowRight className="h-4 w-4" /></motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
            {/* Progress bars */}
            <div className="absolute bottom-0 left-0 right-0 flex gap-[3px] px-5 pb-5">
              {slides.map((_, idx) => (
                <button key={idx} type="button" onClick={() => goTo(idx)} className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
                  {idx === current && <motion.span key={current} className="absolute inset-y-0 left-0 rounded-full bg-cyan-400" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }} />}
                  {idx < current && <span className="absolute inset-0 rounded-full bg-cyan-400/40" />}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <button type="button" onClick={() => goTo((current - 1 + slides.length) % slides.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300"><ChevronLeft className="h-5 w-5" /></button>
          <span className="flex items-center gap-1 text-xs text-zinc-600"><span className="font-bold text-zinc-400">{current + 1}</span>/{slides.length}</span>
          <button type="button" onClick={() => goTo((current + 1) % slides.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// POST DETAIL PAGE (trang riêng)
// ─────────────────────────────────────────────
function PostDetailPage({ post, onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const allImages = [post.image_url, ...normalizeImageList(post.image_gallery)];

  useEffect(() => { window.scrollTo({ top: 0 }); }, [post.id]);

  return (
    <div className="min-h-screen text-white bg-[#07111f]"
  style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }}>
      <Background />
      <main className="mx-auto max-w-5xl px-4 pt-[110px] pb-20 sm:px-5">
        {/* Back Button */}
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} type="button" onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-cyan-300">
          <ArrowLeft className="h-4 w-4" /> Zurück zum Blog
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <GradientBorder
            gradient={isIdea(post) ? "from-zinc-600 via-zinc-500 to-zinc-600" : "from-cyan-400 via-cyan-500 to-cyan-400"}
            rounded="rounded-[2rem]"
            innerClassName="overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl"
          >
            {/* Hero image */}
            <div className="relative">
              <img src={post.image_url} alt={post.title} onClick={() => setLightboxIndex(0)}
                className={`h-64 w-full cursor-zoom-in object-cover sm:h-80 lg:h-[420px] ${isIdea(post) ? "grayscale opacity-70" : ""}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black text-black">{post.category}</span>
                <span className={`rounded-full border px-3 py-1.5 text-xs font-bold ${getStatusClasses(post.project_status)}`}>{getStatusLabel(post.project_status)}</span>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              {/* Meta */}
              <div className="mb-5 flex flex-wrap gap-3 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{formatDate(post.created_at)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.read_time || "5 Min."}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{post.title}</h1>

              {/* Excerpt */}
              <p className="mt-5 text-base font-semibold leading-8 text-cyan-100/90 sm:text-lg">{post.excerpt}</p>

              {/* Content */}
              <div className="mt-6 text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <h2 className="mb-4 mt-8 text-2xl font-black text-white sm:text-3xl">{children}</h2>,
                    h2: ({ children }) => <h3 className="mb-3 mt-7 text-xl font-black text-cyan-100 sm:text-2xl">{children}</h3>,
                    h3: ({ children }) => <h4 className="mb-2 mt-6 text-lg font-bold text-white">{children}</h4>,
                    p: ({ children }) => <p className="mb-4 leading-8 sm:leading-9">{children}</p>,
                    ul: ({ children }) => <ul className="mb-5 ml-6 list-disc space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-5 ml-6 list-decimal space-y-2">{children}</ol>,
                    li: ({ children }) => <li className="pl-1">{children}</li>,
                    strong: ({ children }) => <strong className="font-black text-white">{children}</strong>,
                    a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-cyan-300 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-200">{children}</a>,
                    code: ({ children }) => <code className="rounded-md border border-white/10 bg-black/30 px-1.5 py-0.5 text-cyan-200">{children}</code>,
                    pre: ({ children }) => <pre className="mb-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-zinc-100">{children}</pre>,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Gallery */}
              {normalizeImageList(post.image_gallery).length > 0 && (
                <div className="mt-8">
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-300">Projektbilder</p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {normalizeImageList(post.image_gallery).map((url, i) => (
                      <img key={url} src={url} alt={`Bild ${i + 1}`} onClick={() => setLightboxIndex(i + 1)}
                        className="h-36 w-full cursor-zoom-in rounded-2xl object-cover transition hover:brightness-110" />
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {!!(Array.isArray(post.tags) ? post.tags : []).length && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map(tag => <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs text-cyan-300">#{tag}</span>)}
                </div>
              )}

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {post.external_link && !isIdea(post) ? (
                  <a href={post.external_link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300">
                    Zum Projekt <ExternalLink className="h-5 w-5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-zinc-400">
                    {isIdea(post) ? "Konzeptprojekt – noch nicht umgesetzt" : "Kein Projektlink hinterlegt"}
                  </span>
                )}
                <button type="button" onClick={onBack}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-bold text-zinc-200 transition hover:bg-white/10">
                  <ArrowLeft className="h-5 w-5" /> Zurück zum Blog
                </button>
              </div>
            </div>
          </GradientBorder>
        </motion.div>
      </main>

      {lightboxIndex !== null && (
        <Lightbox images={allImages} index={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// ADMIN PANEL
// ─────────────────────────────────────────────
function AdminPanel({ posts, galleryImages, onClose, onSave, onDelete, onMoveOrder, onSaveGallery, onDeleteGallery, onExport, onImport, onReset, message, setMessage }) {
  const [editingPost, setEditingPost] = useState(EMPTY_POST());
  const [editingMode, setEditingMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const startEdit = (post) => {
    setEditingMode(true);
    setEditingPost({
      ...post,
      tags: Array.isArray(post.tags) ? post.tags.join(", ") : "",
      external_link: post.external_link || "",
      image_gallery: normalizeImageList(post.image_gallery),
      project_status: normalizeStatus(post.project_status),
      sort_order: isFinite(Number(post.sort_order)) ? post.sort_order : 100,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const payload = {
      id: editingMode && editingPost.id ? editingPost.id : `local-post-${Date.now()}`,
      title: editingPost.title.trim(),
      category: editingPost.category,
      image_url: editingPost.image_url.trim(),
      image_gallery: normalizeImageList(editingPost.image_gallery).slice(0, MAX_POST_GALLERY_IMAGES),
      excerpt: editingPost.excerpt.trim(),
      content: editingPost.content.trim(),
      tags: typeof editingPost.tags === "string"
        ? editingPost.tags.split(",").map(t => t.trim()).filter(Boolean)
        : editingPost.tags,
      read_time: editingPost.read_time || "5 Min.",
      published: Boolean(editingPost.published),
      created_at: editingPost.created_at || new Date().toISOString(),
      external_link: editingPost.external_link?.trim() || null,
      project_status: normalizeStatus(editingPost.project_status),
      sort_order: isFinite(Number(editingPost.sort_order)) ? Number(editingPost.sort_order) : 100,
    };
    if (!payload.title || !payload.excerpt || !payload.content) {
      setMessage("Titel, Kurzbeschreibung und Inhalt sind Pflichtfelder.");
      return;
    }
    onSave(payload, editingMode);
    setEditingPost(EMPTY_POST());
    setEditingMode(false);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Diesen Beitrag wirklich löschen?")) return;
    onDelete(id);
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-md sm:px-5 sm:py-8">
      <div className="mx-auto max-w-7xl">
        <GradientBorder gradient="from-cyan-400 via-cyan-500 to-cyan-400" rounded="rounded-[2rem]" innerClassName="rounded-[1.95rem] bg-[#07111f] p-5 sm:p-6 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Lokaler Adminbereich</p>
              <h2 className="text-xl font-black sm:text-3xl">Beitragsverwaltung</h2>
            </div>
            <button type="button" onClick={onClose} className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">Schließen</button>
          </div>

          {message && (
            <div className="mb-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-sm text-zinc-200 flex justify-between gap-3">
              <span>{message}</span>
              <button onClick={() => setMessage("")} className="text-zinc-400 hover:text-white"><X className="h-4 w-4" /></button>
            </div>
          )}

          {/* Top Actions */}
          <div className="mb-6 flex flex-wrap gap-3">
            <button onClick={() => { setEditingPost(EMPTY_POST()); setEditingMode(false); }} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-bold transition hover:bg-white/10"><Plus className="h-5 w-5" /> Neuer Beitrag</button>
            <button onClick={onExport} className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 px-5 py-3 font-bold text-cyan-300 transition hover:bg-cyan-400/10">Export JSON</button>
            <button onClick={onImport} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-bold transition hover:bg-white/10">Import JSON</button>
            <button onClick={onReset} className="inline-flex items-center gap-2 rounded-2xl border border-red-500/20 px-5 py-3 font-bold text-red-400 transition hover:bg-red-500/10">Zurücksetzen</button>
          </div>

          {/* ── FORM ── */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-4 font-black text-lg text-cyan-300">{editingMode ? "Beitrag bearbeiten" : "Neuer Beitrag"}</h3>
            <form onSubmit={handleSave} className="grid gap-4 lg:grid-cols-2">
              <input value={editingPost.title} onChange={e => setEditingPost(p => ({ ...p, title: e.target.value }))} placeholder="Titel des Beitrags *" className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4" />

              <select value={editingPost.category} onChange={e => setEditingPost(p => ({ ...p, category: e.target.value }))} className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4">
                {["IoT","Robotik","Messtechnik","Elektrotechnik","Elektrokonstruktion","Automatisierungstechnik","SPS-Programmierung","Embedded Systems","WinCC & HMI","Softwareentwicklung","Über mich","Karriere & Weiterbildung","Technische Erfahrungen"].map(c => <option key={c}>{c}</option>)}
              </select>

              <select value={editingPost.project_status} onChange={e => setEditingPost(p => ({ ...p, project_status: e.target.value }))} className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4">
                <option value="idea">Idee / Offline</option>
                <option value="in_progress">In Arbeit</option>
                <option value="done">Umgesetzt</option>
              </select>

              <input type="number" value={editingPost.sort_order ?? 100} onChange={e => setEditingPost(p => ({ ...p, sort_order: e.target.value }))} placeholder="Reihenfolge (kleine Zahl = vorne)" className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4" />

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm text-zinc-400">Bild-URL oder Pfad</label>
                <input type="text" value={editingPost.image_url || ""} onChange={e => setEditingPost(p => ({ ...p, image_url: normalizeImagePath(e.target.value) }))} placeholder="https://... oder /my-electronics-blog/images/posts/..." className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white outline-none ring-cyan-400/30 focus:ring-4" />
                {editingPost.image_url && <img src={editingPost.image_url} alt="Vorschau" className="mt-4 h-40 w-full rounded-2xl object-cover border border-white/10" onError={e => e.target.style.display = "none"} />}
              </div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm text-zinc-400">Zusatzbilder (ein Pfad pro Zeile, max. {MAX_POST_GALLERY_IMAGES})</label>
                <textarea
                  value={Array.isArray(editingPost.image_gallery) ? editingPost.image_gallery.join("\n") : editingPost.image_gallery || ""}
                  onChange={e => setEditingPost(p => ({ ...p, image_gallery: e.target.value.split("\n").map(s => s.trim()).filter(Boolean) }))}
                  placeholder="/my-electronics-blog/images/posts/detail-1.webp" rows={3}
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white outline-none ring-cyan-400/30 focus:ring-4"
                />
              </div>

              <input value={editingPost.tags} onChange={e => setEditingPost(p => ({ ...p, tags: e.target.value }))} placeholder="Tags: ESP32, MQTT, Sensorik" className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2" />
              <input value={editingPost.external_link || ""} onChange={e => setEditingPost(p => ({ ...p, external_link: e.target.value }))} placeholder="Externer Link (optional): https://github.com/..." className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2" />
              <input value={editingPost.read_time || ""} onChange={e => setEditingPost(p => ({ ...p, read_time: e.target.value }))} placeholder="Lesezeit z.B. 5 Min." className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4" />
              <input type="datetime-local" value={editingPost.created_at ? editingPost.created_at.slice(0,16) : ""} onChange={e => setEditingPost(p => ({ ...p, created_at: new Date(e.target.value).toISOString() }))} className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4" />
              <textarea value={editingPost.excerpt} onChange={e => setEditingPost(p => ({ ...p, excerpt: e.target.value }))} placeholder="Kurzbeschreibung *" className="min-h-24 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2" />
              <textarea value={editingPost.content} onChange={e => setEditingPost(p => ({ ...p, content: e.target.value }))} placeholder="Vollständiger Inhalt *" className="min-h-48 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2" />
              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 lg:col-span-2">
                <input type="checkbox" checked={editingPost.published} onChange={e => setEditingPost(p => ({ ...p, published: e.target.checked }))} />
                Veröffentlicht
              </label>
              <div className="flex gap-3 lg:col-span-2">
                <button disabled={loading} className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300 disabled:opacity-60">
                  <Save className="h-5 w-5" /> {editingMode ? "Änderungen speichern" : "Beitrag erstellen"}
                </button>
                {editingMode && (
                  <button type="button" onClick={() => { setEditingPost(EMPTY_POST()); setEditingMode(false); }} className="rounded-2xl border border-white/10 px-6 py-4 font-bold transition hover:bg-white/10">Abbrechen</button>
                )}
              </div>
            </form>
          </div>

          {/* ── POST LIST ── */}
          <div>
            <h3 className="mb-4 font-black text-lg">Alle Beiträge ({posts.length})</h3>
            <div className="grid gap-3">
              {[...posts].sort((a, b) => {
                const oA = isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
                const oB = isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
                return oA !== oB ? oA - oB : new Date(b.created_at || 0) - new Date(a.created_at || 0);
              }).map((post, idx, arr) => (
                <div key={post.id} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 sm:p-4">
                  <img src={post.image_url} alt={post.title} className={`h-16 w-24 shrink-0 rounded-xl object-cover ${isIdea(post) ? "grayscale opacity-60" : ""}`} onError={e => e.target.style.display = "none"} />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white truncate text-sm sm:text-base">{post.title}</p>
                    <div className="mt-1 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-cyan-400/20 text-cyan-300 px-2 py-0.5">{post.category}</span>
                      <span className={`rounded-full border px-2 py-0.5 ${getStatusClasses(post.project_status)}`}>{getStatusLabel(post.project_status)}</span>
                      <span className="text-zinc-500">#{post.sort_order}</span>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button type="button" onClick={() => onMoveOrder(post.id, -1)} disabled={idx === 0} className="rounded-xl border border-white/10 px-2.5 py-2 text-sm font-black transition hover:bg-white/10 disabled:opacity-30" title="Nach vorne">↑</button>
                    <button type="button" onClick={() => onMoveOrder(post.id, 1)} disabled={idx === arr.length - 1} className="rounded-xl border border-white/10 px-2.5 py-2 text-sm font-black transition hover:bg-white/10 disabled:opacity-30" title="Nach hinten">↓</button>
                    <button type="button" onClick={() => startEdit(post)} className="rounded-xl border border-white/10 p-2.5 transition hover:bg-white/10"><Edit3 className="h-4 w-4" /></button>
                    <button type="button" onClick={() => handleDelete(post.id)} className="rounded-xl border border-red-500/20 p-2.5 text-red-400 transition hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GradientBorder>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
function HomePage({ posts, galleryImages, isAdmin, onOpenPost, onGoImpressum, onGoDatenschutz, onSavePost, onDeletePost, onMovePost, onSaveGallery, onDeleteGallery, onExport, onImport, onReset, adminVisible, setAdminVisible }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");
  const [lightbox, setLightbox] = useState(null); // { images, index }
  const [galleryLightboxIndex, setGalleryLightboxIndex] = useState(null);
  const [message, setMessage] = useState("");

  const heroSlides = useMemo(() =>
    [...posts].sort((a, b) => {
      const oA = isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
      const oB = isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
      return oA !== oB ? oA - oB : new Date(b.created_at || 0) - new Date(a.created_at || 0);
    }).slice(0, 3).map(p => ({ id: p.id, image: p.image_url, category: p.category, readTime: p.read_time || "5 Min.", title: p.title, text: p.excerpt, tags: Array.isArray(p.tags) ? p.tags : [] })),
    [posts]
  );

  const categories = useMemo(() => ["Alle", ...new Set(posts.map(p => p.category))], [posts]);

  const filteredPosts = useMemo(() => {
    const q = search.toLowerCase();
    return posts.filter(p => {
      const tags = Array.isArray(p.tags) ? p.tags : [];
      return (category === "Alle" || p.category === category)
        && (p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.content.toLowerCase().includes(q) || tags.some(t => t.toLowerCase().includes(q)));
    }).sort((a, b) => {
      const oA = isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
      const oB = isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
      return oA !== oB ? oA - oB : new Date(b.created_at || 0) - new Date(a.created_at || 0);
    });
  }, [posts, search, category]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Background />
      <main className="pt-[90px]">
        {/* Hero */}
        <HeroSlideshow slides={heroSlides} onDiscover={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })} onOpenPost={onOpenPost} />

        {/* Transparency Notice */}
        <section className="mx-auto max-w-7xl px-4 pt-5 pb-2 sm:px-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 p-[2px]">
            <div className="relative rounded-[1.9rem] bg-[#07111f]/95 p-5 sm:p-6 backdrop-blur-xl">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-300">
                  <AlertTriangle className="h-9 w-9 stroke-[2.5]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-yellow-300">Transparenz</span>
                    <h2 className="text-2xl font-black text-white sm:text-3xl">Projektinformationen & Transparenz</h2>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">
                    Die auf dieser Website gezeigten Fotos von Laborumgebungen, technischen Arbeitsplätzen und elektronischen Geräten dienen ausschließlich der Veranschaulichung meiner technischen Interessen und praktischen Erfahrungen.
                    <span className="mt-4 block font-semibold text-yellow-200">Sie zeigen weder meinen tatsächlichen Arbeitsplatz noch interne Bereiche oder reale Arbeitsumgebungen eines Unternehmens.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-5">
          <GradientBorder gradient="from-cyan-400 via-cyan-500 to-cyan-400" rounded="rounded-[2rem]" innerClassName="overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl">
            <div className="grid items-stretch gap-6 p-4 sm:p-6 lg:grid-cols-2 lg:gap-8">
              <div className="grid min-h-full gap-4 lg:grid-rows-2">
                <img src="/my-electronics-blog/images/about-1.webp" alt="Nguyen Nhan Do" className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]" />
                <img src="/my-electronics-blog/images/about-2.webp" alt="Elektronik" className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Persönlicher Weg</p>
                <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">Nguyen Nhan Do – Technik lernen. Erfahrung sammeln. Mich weiterentwickeln.</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                  <p>
                Ich bin 2013 nach Deutschland gekommen – nicht, weil mein Leben in Vietnam schlecht war,
                sondern weil ich wissen wollte, wie weit ich mich persönlich und beruflich entwickeln kann,
                wenn ich meine Komfortzone verlasse und in einem völlig neuen Umfeld neu anfange.
              </p>

              <p className="mt-4">
                Die ersten Jahre in Deutschland waren für mich vor allem eine Zeit des Ankommens, Lernens
                und Anpassens. Neben den Sprachkursen habe ich in verschiedenen Bereichen gearbeitet –
                unter anderem in der Gastronomie, im Management und später auch in der Selbstständigkeit.
              </p>

              <p className="mt-4">
                Nach mehreren Jahren unterschiedlicher beruflicher Erfahrungen habe ich mich bewusst
                entschieden, wieder stärker in die technische Richtung zurückzugehen und mich langfristig im
                Bereich Elektronik, Messtechnik und Automatisierung weiterzuentwickeln.
              </p>

              <p className="mt-4">
                In den letzten Jahren konnte ich praktische Erfahrungen in der Kalibrierung, Fehlersuche,
                Prüfung und Entwicklung elektronischer Systeme sammeln und gleichzeitig mein technisches
                Wissen kontinuierlich erweitern.
              </p>

              <p className="mt-4">
                Deshalb habe ich zusätzliche Weiterbildungen in SPS-Programmierung, C++/Qt, AutoCAD und
                EPLAN absolviert, um mein Wissen gezielt auszubauen und neue technische Bereiche besser zu
                verstehen.
              </p>

              <p className="mt-4">
                Dieser Blog ist kein Ort für Motivationstexte oder perfekte Erfolgsgeschichten. Ich möchte
                hier ehrlich über meinen Weg sprechen – über das Leben und Arbeiten in Deutschland,
                technische Themen, persönliche Erfahrungen, Herausforderungen und Entwicklung.
              </p>
                </div>
              </div>
            </div>
          </GradientBorder>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-10">
          <div className="grid gap-3 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {FEATURES.map(f => {
              const Icon = f.icon;
              return (
                <motion.div whileHover={{ y: -5 }} key={f.title} className="group flex flex-col">
                  <GradientBorder gradient="from-cyan-400 via-cyan-500 to-cyan-400" rounded="rounded-[1.4rem] sm:rounded-[2rem]" className="flex-1" stretch innerClassName="rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 p-4 sm:p-5 backdrop-blur-xl transition group-hover:bg-[#07111f] shadow-xl shadow-blue-500/20">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 sm:h-14 sm:w-14"><Icon className="h-7 w-7" /></div>
                    <h3 className="text-lg font-black sm:text-xl">{f.title}</h3>
                    <p className="mt-2 text-sm leading-5 text-zinc-400 sm:text-[15px] sm:leading-6">{f.text}</p>
                  </GradientBorder>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Warning card */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5">
          <div className="rounded-[2rem] p-[1.5px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400">
            <div className="overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl">
              <div className="grid lg:grid-cols-[0.4fr_0.6fr]">
                <div className="relative h-48 lg:h-auto">
                  <img src="/my-electronics-blog/images/project-warning.webp" alt="Hinweis" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
                    <AlertTriangle className="h-4 w-4" /> Wichtiger Hinweis
                  </div>
                  <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl">Wichtiger Hinweis zu meinen Projekten</h2>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-300 sm:text-base">
                    <p><span className="font-bold text-yellow-300">🚨 Hinweis:</span> Projekte mit der Kennzeichnung <span className="font-semibold text-cyan-300">„Konzept"</span> befinden sich noch in der Ideen- bzw. Konzeptphase und wurden bisher noch nicht praktisch umgesetzt.</p>
                    <p>Alle anderen Projekte können über <span className="font-semibold text-cyan-300">„Beitrag lesen"</span> geöffnet werden. Am Ende der jeweiligen Projektseite befindet sich die Schaltfläche <span className="font-semibold text-cyan-300">„Zum Projekt"</span> mit projektbezogenen Dateien.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Blog Section ── */}
        <section id="blog" className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-16">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:mb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Technik Blog</p>
              <h2 className="mt-2 text-[1.75rem] font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">Elektronikprojekte & Dokumentationen</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Suchen..." className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-3 pl-11 pr-4 text-sm outline-none ring-cyan-400/30 placeholder:text-zinc-500 focus:ring-4 sm:w-72" />
              </div>
              <select value={category} onChange={e => setCategory(e.target.value)} className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-3 outline-none ring-cyan-400/30 focus:ring-4">
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-zinc-500">Keine Beiträge gefunden.</div>
          )}

          <div className="grid auto-rows-fr gap-4 min-[620px]:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {filteredPosts.map(post => {
              const Icon = getCategoryIcon(post.category);
              const idea = isIdea(post);
              return (
                <motion.div whileHover={idea ? undefined : { y: -5 }} key={post.id} className="group flex h-full">
                  <GradientBorder
                    gradient={idea ? "from-zinc-600 via-zinc-500 to-zinc-600" : "from-cyan-400 via-cyan-500 to-cyan-400"}
                    rounded="rounded-[1.4rem] sm:rounded-[2rem]"
                    className="flex flex-1"
                    innerClassName="flex flex-1 flex-col overflow-hidden rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl min-h-[560px]"
                  >
                    <img src={post.image_url} alt={post.title}
                      onClick={() => setLightbox({ images: [post.image_url, ...normalizeImageList(post.image_gallery)], index: 0 })}
                      className={`h-44 w-full shrink-0 cursor-zoom-in object-cover transition duration-300 hover:brightness-110 sm:h-56 ${idea ? "grayscale opacity-70" : ""}`} />
                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 font-black text-black"><Icon className="h-3.5 w-3.5" /> {post.category}</span>
                        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-bold ${getStatusClasses(post.project_status)}`}>{getStatusLabel(post.project_status)}</span>
                        <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.created_at)}</span>
                      </div>
                      <h3 className="text-lg font-black leading-tight sm:text-2xl">{post.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">{post.excerpt}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {(post.tags || []).map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">#{tag}</span>)}
                      </div>
                      <div className="mt-auto flex gap-2 pt-6 sm:gap-3">
                        <button type="button" onClick={() => onOpenPost(post.id)}
                          className="flex-1 rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-cyan-300 sm:px-5 sm:text-base">
                          Beitrag lesen
                        </button>
                        {isAdmin && (
                          <>
                            <button type="button" onClick={() => onMovePost(post.id, -1)} className="rounded-2xl border border-white/10 px-3 py-2 font-black transition hover:bg-white/10" title="Nach vorne">↑</button>
                            <button type="button" onClick={() => onMovePost(post.id, 1)} className="rounded-2xl border border-white/10 px-3 py-2 font-black transition hover:bg-white/10" title="Nach hinten">↓</button>
                            <button type="button" onClick={() => { setAdminVisible(true); }} className="rounded-2xl border border-white/10 p-3 transition hover:bg-white/10" title="Im Admin bearbeiten"><Edit3 className="h-5 w-5" /></button>
                            <button type="button" onClick={() => { if (window.confirm("Beitrag löschen?")) onDeletePost(post.id); }} className="rounded-2xl border border-red-500/20 p-3 text-red-400 transition hover:bg-red-500/10"><Trash2 className="h-5 w-5" /></button>
                          </>
                        )}
                      </div>
                    </div>
                  </GradientBorder>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Gallery ── */}
        <section id="projekte" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Galerie</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Projektbilder</h2>
            </div>
            {isAdmin && (
              <button type="button" onClick={() => {
                const input = window.prompt("Bildpfad einfügen (zeilenweise für mehrere):");
                if (input) onSaveGallery(input.split("\n").map(s => s.trim()).filter(Boolean));
              }} className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-black text-black transition hover:bg-cyan-300">
                <Plus className="h-5 w-5" /> Galerie-Bilder hinzufügen
              </button>
            )}
          </div>

          {(() => {
            const visible = galleryImages.slice(0, 3);
            return (
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  {visible[0] && (
                    <GradientBorder gradient="from-cyan-400 via-cyan-500 to-cyan-400" rounded="rounded-[2rem]" className="group" innerClassName="relative overflow-hidden rounded-[1.95rem] bg-[#07111f]">
                      <img src={typeof visible[0] === "object" ? visible[0].image_url : visible[0]} alt="Projektbild"
                        onClick={() => setGalleryLightboxIndex(0)}
                        className="h-[520px] w-full cursor-zoom-in object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110" />
                    </GradientBorder>
                  )}
                </div>
                <div className="grid gap-6">
                  {visible.slice(1, 3).map((img, i) => (
                    <GradientBorder key={i} gradient="from-cyan-400 via-cyan-500 to-cyan-400" rounded="rounded-[2rem]" className="group" innerClassName="relative overflow-hidden rounded-[1.95rem] bg-[#07111f]">
                      <img src={typeof img === "object" ? img.image_url : img} alt="Projektbild"
                        onClick={() => setGalleryLightboxIndex(i + 1)}
                        className="h-[247px] w-full cursor-zoom-in object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110" />
                    </GradientBorder>
                  ))}
                </div>
              </div>
            );
          })()}
        </section>

        {/* ── Contact ── */}
        <section id="kontakt" className="mx-auto max-w-7xl px-4 pb-12 sm:px-5 sm:pb-24">
          <div className="rounded-[1.5rem] bg-cyan-400 p-4 text-black shadow-2xl shadow-cyan-500/30 sm:rounded-[2.5rem] sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest">Kontakt</p>
                <h2 className="mt-3 text-[1.85rem] font-black leading-tight sm:text-5xl lg:text-6xl">Zusammenarbeit an modernen Elektronikprojekten.</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/80 sm:text-lg">Sie suchen Unterstützung für Embedded-Systeme, Sensorik, Robotik oder industrielle Automatisierung? Kontaktieren Sie mich für technische Zusammenarbeit oder individuelle Entwicklungen.</p>
              </div>
              <div className="rounded-[1.25rem] sm:rounded-[2rem] p-[1.5px] bg-gradient-to-br from-cyan-400/60 via-cyan-500/40 to-cyan-400/60">
                <div className="rounded-[1.2rem] sm:rounded-[1.95rem] bg-[#050816] p-3 sm:p-8 text-white">
                  <div className="grid gap-5">
                    {[
                      { icon: Mail, label: "E-Mail", value: "donguyennhan.de@gmail.com" },
                      { icon: Globe, label: "Standort", value: "Deutschland" },
                      { icon: CircuitBoard, label: "Schwerpunkt", value: "IoT · Automatisierung" },
                      { icon: Wrench, label: "Tools", value: "SPS · AutoCAD · EPLAN · C++ · Qt" },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 p-3 sm:gap-4 sm:p-4">
                        <Icon className="h-6 w-6 text-cyan-300" />
                        <div>
                          <p className="text-sm text-zinc-400">{label}</p>
                          <p className="break-all text-sm font-bold sm:text-base">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-500/10 bg-black py-10 text-center text-zinc-400">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <button type="button" onClick={onGoImpressum} className="transition hover:text-cyan-400">Impressum</button>
          <button type="button" onClick={onGoDatenschutz} className="transition hover:text-cyan-400">Datenschutz</button>
        </div>
        <p className="mt-4 text-xs text-zinc-500">© 2026 ElektronikLab — Moderne Elektronik- und Automatisierungsprojekte.</p>
      </footer>

      {/* Lightboxes */}
      {lightbox && <Lightbox images={lightbox.images} index={lightbox.index} onClose={() => setLightbox(null)} />}
      {galleryLightboxIndex !== null && galleryImages.length > 0 && (
        <Lightbox images={galleryImages} index={galleryLightboxIndex} onClose={() => setGalleryLightboxIndex(null)} />
      )}

      {/* Admin Panel overlay */}
      {adminVisible && isAdmin && (
        <AdminPanel
          posts={posts}
          galleryImages={galleryImages}
          onClose={() => setAdminVisible(false)}
          onSave={onSavePost}
          onDelete={onDeletePost}
          onMoveOrder={onMovePost}
          onSaveGallery={onSaveGallery}
          onDeleteGallery={onDeleteGallery}
          onExport={onExport}
          onImport={onImport}
          onReset={onReset}
          message={message}
          setMessage={setMessage}
        />
      )}
    </div>
  );
}


// ─────────────────────────────────────────────
// LEGAL PAGES
// ─────────────────────────────────────────────
function LegalPageLayout({ title, children, onBack }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Background />
      <main className="mx-auto max-w-5xl px-4 pt-[110px] pb-20 sm:px-5">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" /> Zurück
        </button>

        <GradientBorder
          gradient="from-cyan-400 via-cyan-500 to-cyan-400"
          rounded="rounded-[2rem]"
          innerClassName="rounded-[1.95rem] bg-[#07111f]/95 p-6 sm:p-10 backdrop-blur-xl"
        >
          <h1 className="text-3xl font-black text-white sm:text-5xl">{title}</h1>
          <div className="mt-8 space-y-5 text-sm leading-8 text-zinc-300 sm:text-base">
            {children}
          </div>
        </GradientBorder>
      </main>
    </div>
  );
}

function ImpressumPage({ onBack }) {
  return (
    <LegalPageLayout title="Impressum" onBack={onBack}>
      <section>
        <p className="font-bold text-white">Angaben gemäß § 5 DDG</p>
        <p>
          Nguyen Nhan Do
          <br />
          Hugo-Sinzheimerstr. 15
          <br />
          60437 Frankfurt am Main
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <p className="font-bold text-white">Kontakt</p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:donguyennhan.de@gmail.com"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            donguyennhan.de@gmail.com
          </a>
        </p>
      </section>

      <section>
        <p className="font-bold text-white">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </p>
        <p>
          Nguyen Nhan Do
          <br />
          Hugo-Sinzheimerstr. 15
          <br />
          60437 Frankfurt am Main
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <p className="font-bold text-white">Hinweis zum Inhalt</p>
        <p>
          Diese Website ist ein persönliches Portfolio sowie ein technischer
          Blog. Die Inhalte dienen der Dokumentation privater Projekte,
          technischer Experimente, Forschung, Weiterbildung und dem fachlichen
          Austausch.
        </p>
        <p className="mt-3">
          Es werden über diese Website keine Waren oder Dienstleistungen
          angeboten oder verkauft.
        </p>
      </section>

      <section>
        <p className="font-bold text-white">Haftung für Inhalte</p>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
          erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
          Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>
      </section>

      <section>
        <p className="font-bold text-white">Haftung für Links</p>
        <p>
          Diese Website enthält Links zu externen Websites Dritter. Auf deren
          Inhalte habe ich keinen Einfluss. Für die Inhalte der verlinkten
          Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.
        </p>
      </section>

      <section>
        <p className="font-bold text-white">Urheberrecht</p>
        <p>
          Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen
          dem deutschen Urheberrecht. Jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedarf der vorherigen schriftlichen
          Zustimmung des jeweiligen Autors bzw. Rechteinhabers.
        </p>
      </section>
    </LegalPageLayout>
  );
}

function DatenschutzPage({ onBack }) {
  return (
    <LegalPageLayout title="Datenschutzerklärung" onBack={onBack}>
      <section>
        <p className="font-bold text-white">1. Verantwortlicher</p>

        <p>
          Nguyen Nhan Do
          <br />
          Hugo-Sinzheimerstr. 15
          <br />
          60437 Frankfurt am Main
          <br />
          Deutschland
          <br />
          E-Mail:{" "}
          <a
            href="mailto:donguyennhan.de@gmail.com"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            donguyennhan.de@gmail.com
          </a>
        </p>
      </section>

      <section>
        <p className="font-bold text-white">2. Allgemeine Hinweise</p>

        <p>
          Diese Website ist ein persönliches Portfolio sowie ein technischer
          Blog. Es werden keine Waren oder Dienstleistungen über diese Website
          angeboten oder verkauft. Es werden keine Nutzerkonten, kein Newsletter
          und kein Kontaktformular betrieben.
        </p>
      </section>

      <section>
        <p className="font-bold text-white">3. Hosting über GitHub Pages</p>

        <p>
          Diese Website wird über GitHub Pages gehostet, einen Dienst der
          GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
          Beim Besuch dieser Website können durch GitHub technische Daten
          verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit des
          Zugriffs, Browserinformationen, Betriebssysteminformationen sowie die
          aufgerufenen Seiten.
        </p>

        <p className="mt-3">
          Die Verarbeitung erfolgt zur sicheren und zuverlässigen Bereitstellung
          der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das
          berechtigte Interesse liegt in der technischen Bereitstellung,
          Stabilität und Sicherheit dieser Website.
        </p>

        <p className="mt-3">
          Weitere Informationen zur Datenverarbeitung durch GitHub finden Sie in
          der Datenschutzerklärung von GitHub:{" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            GitHub Privacy Statement
          </a>
          .
        </p>
      </section>

      <section>
        <p className="font-bold text-white">
          4. Cookies und lokale Speicherung
        </p>

        <p>
          Diese Website verwendet keine Tracking-Cookies, keine Werbe-Cookies
          und keine Analyse-Cookies.
        </p>

        <p className="mt-3">
          Soweit localStorage verwendet wird, dient dies ausschließlich der
          lokalen Speicherung technischer oder funktionaler Einstellungen im
          Browser, beispielsweise zur Speicherung dieses Datenschutzhinweises
          oder anderer technisch notwendiger Benutzereinstellungen. Diese Daten
          werden nicht zu Werbezwecken verwendet und nicht an Dritte
          übermittelt.
        </p>

        <p className="mt-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
          Interesse liegt in der nutzerfreundlichen und technisch sinnvollen
          Bereitstellung der Website.
        </p>
      </section>

      <section>
        <p className="font-bold text-white">5. Keine Analyse-Tools</p>

        <p>
          Auf dieser Website werden keine Analyse-Tools wie Google Analytics,
          Meta Pixel, Hotjar oder vergleichbare Tracking-Dienste eingesetzt.
        </p>
      </section>

      <section>
        <p className="font-bold text-white">6. Kontaktaufnahme per E-Mail</p>

        <p>
          Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen
          übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage
          verarbeitet. Eine Weitergabe an Dritte erfolgt nicht, sofern keine
          gesetzliche Pflicht dazu besteht.
        </p>

        <p className="mt-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage
          mit vorvertraglichen oder vertraglichen Maßnahmen zusammenhängt.
          In allen anderen Fällen ist die Rechtsgrundlage Art. 6 Abs. 1 lit. f
          DSGVO. Das berechtigte Interesse liegt in der Bearbeitung und
          Beantwortung Ihrer Anfrage.
        </p>
      </section>

      <section>
        <p className="font-bold text-white">7. Externe Links</p>

        <p>
          Diese Website enthält Links zu externen Websites, insbesondere zu
          GitHub, Google Drive oder anderen technischen Ressourcen. Wenn Sie
          einen externen Link anklicken, verlassen Sie diese Website. Für die
          Datenverarbeitung auf den verlinkten Websites sind ausschließlich die
          jeweiligen Anbieter verantwortlich.
        </p>
      </section>

      <section>
        <p className="font-bold text-white">8. Ihre Rechte</p>

        <p>
          Sie haben nach der DSGVO das Recht auf Auskunft nach Art. 15 DSGVO,
          Berichtigung nach Art. 16 DSGVO, Löschung nach Art. 17 DSGVO,
          Einschränkung der Verarbeitung nach Art. 18 DSGVO,
          Datenübertragbarkeit nach Art. 20 DSGVO sowie Widerspruch gegen die
          Verarbeitung nach Art. 21 DSGVO.
        </p>

        <p className="mt-3">
          Zur Ausübung Ihrer Rechte können Sie mich jederzeit per E-Mail
          kontaktieren:{" "}
          <a
            href="mailto:donguyennhan.de@gmail.com"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            donguyennhan.de@gmail.com
          </a>
          .
        </p>
      </section>

      <section>
        <p className="font-bold text-white">
          9. Beschwerderecht bei der Aufsichtsbehörde
        </p>

        <p>
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
          beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
          personenbezogenen Daten gegen die DSGVO verstößt.
        </p>

        <p className="mt-3">
          Zuständige Aufsichtsbehörde:
          <br />
          Der Hessische Beauftragte für Datenschutz und Informationsfreiheit
          <br />
          Postfach 3163
          <br />
          65021 Wiesbaden
          <br />
          Deutschland
          <br />
          Website:{" "}
          <a
            href="https://datenschutz.hessen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            datenschutz.hessen.de
          </a>
        </p>
      </section>

      <section>
        <p className="font-bold text-white">10. Aktualität dieser Erklärung</p>

        <p>
          Diese Datenschutzerklärung kann angepasst werden, wenn sich die
          Website, die eingesetzten Dienste oder die rechtlichen Anforderungen
          ändern.
        </p>
      </section>
    </LegalPageLayout>
  );
}

// ─────────────────────────────────────────────
// APP ROOT (routing + state)
// ─────────────────────────────────────────────
function App() {
  const isAdminRoute = new URLSearchParams(window.location.search).get("admin") === "1";
  const [adminVisible, setAdminVisible] = useState(false);
  const [adminUnlocked, setAdminUnlocked] = useState(() =>
    sessionStorage.getItem("my-electronics-blog.adminUnlocked") === "1"
  );
  const [page, setPage] = useState("home"); // "home" | "post" | "impressum" | "datenschutz"
  const [currentPostId, setCurrentPostId] = useState(null);

  // ── Data state ──
  const [posts, setPosts] = useState(() => {
    const stored = readStorage(POSTS_KEY, null);
    return Array.isArray(stored) && stored.length ? stored : DEMO_POSTS;
  });

  const [galleryImages, setGalleryImages] = useState(() => {
    const stored = readStorage(GALLERY_KEY, null);
    return Array.isArray(stored) && stored.length ? stored : DEFAULT_GALLERY;
  });

  const isAdmin = isAdminRoute && adminUnlocked;
  const currentPost = useMemo(() => posts.find(p => String(p.id) === String(currentPostId)) || null, [posts, currentPostId]);

  // ── Navigation ──
  const openPost = useCallback((id) => {
    setCurrentPostId(id);
    setPage("post");
  }, []);

  const goHome = useCallback(() => {
    setPage("home");
    setCurrentPostId(null);
  }, []);

  const goImpressum = useCallback(() => {
    setPage("impressum");
    setCurrentPostId(null);
  }, []);

  const goDatenschutz = useCallback(() => {
    setPage("datenschutz");
    setCurrentPostId(null);
  }, []);

  // ── Admin unlock ──
  const unlockAdmin = () => {
    setAdminUnlocked(true);
    setAdminVisible(true);
    sessionStorage.setItem("my-electronics-blog.adminUnlocked", "1");
  };

  // ── Post operations ──
  const handleSavePost = useCallback((payload, editingMode) => {
    setPosts(prev => {
      const next = editingMode
        ? prev.map(p => String(p.id) === String(payload.id) ? payload : p)
        : [payload, ...prev];
      writeStorage(POSTS_KEY, next);
      return next;
    });
  }, []);

  const handleDeletePost = useCallback((id) => {
    setPosts(prev => {
      const next = prev.filter(p => String(p.id) !== String(id));
      writeStorage(POSTS_KEY, next);
      return next;
    });
    if (String(currentPostId) === String(id)) goHome();
  }, [currentPostId, goHome]);

  const handleMovePost = useCallback((postId, direction) => {
    setPosts(prev => {
      const sorted = [...prev].sort((a, b) => {
        const oA = isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
        const oB = isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
        return oA !== oB ? oA - oB : new Date(b.created_at || 0) - new Date(a.created_at || 0);
      });
      const idx = sorted.findIndex(p => String(p.id) === String(postId));
      const targetIdx = idx + direction;
      if (idx < 0 || targetIdx < 0 || targetIdx >= sorted.length) return prev;
      const reordered = [...sorted];
      const [moved] = reordered.splice(idx, 1);
      reordered.splice(targetIdx, 0, moved);
      const orderMap = new Map(reordered.map((p, i) => [String(p.id), (i + 1) * 10]));
      const next = prev.map(p => orderMap.has(String(p.id)) ? { ...p, sort_order: orderMap.get(String(p.id)) } : p);
      writeStorage(POSTS_KEY, next);
      return next;
    });
  }, []);

  // ── Gallery operations ──
  const handleSaveGallery = useCallback((paths) => {
    const newImages = paths.map((p, i) => ({
      id: `local-gallery-${Date.now()}-${i}`,
      image_url: normalizeImagePath(p),
      alt: "Projektbild",
      sort_order: galleryImages.length + i + 1,
      created_at: new Date().toISOString(),
    }));
    setGalleryImages(prev => {
      const next = [...prev, ...newImages];
      writeStorage(GALLERY_KEY, next);
      return next;
    });
  }, [galleryImages.length]);

  const handleDeleteGallery = useCallback((id) => {
    setGalleryImages(prev => {
      const next = prev.filter(img => !(img && typeof img === "object" && img.id === id));
      writeStorage(GALLERY_KEY, next);
      return next;
    });
  }, []);

  // ── Export / Import / Reset ──
  const handleExport = () => {
    downloadJson("my-electronics-blog-backup.json", { posts, projectGalleryImages: galleryImages, exported_at: new Date().toISOString() });
  };

  const handleImport = () => {
    const raw = window.prompt("JSON-Backup hier einfügen:");
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed.posts)) { alert("Import fehlgeschlagen: posts muss ein Array sein."); return; }
      writeStorage(POSTS_KEY, parsed.posts);
      const gallery = Array.isArray(parsed.projectGalleryImages) ? parsed.projectGalleryImages : galleryImages;
      writeStorage(GALLERY_KEY, gallery);
      setPosts(parsed.posts);
      setGalleryImages(gallery);
    } catch { alert("Import fehlgeschlagen: ungültiges JSON."); }
  };

  const handleReset = () => {
    if (!window.confirm("Lokale Daten wirklich zurücksetzen?")) return;
    removeStorage(POSTS_KEY);
    removeStorage(GALLERY_KEY);
    setPosts(DEMO_POSTS);
    setGalleryImages(DEFAULT_GALLERY);
    goHome();
  };

  if (page === "impressum") {
    return <ImpressumPage onBack={goHome} />;
  }

  if (page === "datenschutz") {
    return <DatenschutzPage onBack={goHome} />;
  }

  return (
    <>
     <CookieBanner />
      <SiteHeader onAdminClick={unlockAdmin} adminUnlocked={adminUnlocked} onNavigate={goHome} currentPage={page} />

      {page === "post" && currentPost ? (
        <PostDetailPage post={currentPost} onBack={goHome} />
      ) : (
        <HomePage
          posts={posts}
          galleryImages={galleryImages}
          isAdmin={isAdmin}
          onOpenPost={openPost}
          onGoImpressum={goImpressum}
          onGoDatenschutz={goDatenschutz}
          onSavePost={handleSavePost}
          onDeletePost={handleDeletePost}
          onMovePost={handleMovePost}
          onSaveGallery={handleSaveGallery}
          onDeleteGallery={handleDeleteGallery}
          onExport={handleExport}
          onImport={handleImport}
          onReset={handleReset}
          adminVisible={adminVisible}
          setAdminVisible={setAdminVisible}
        />
      )}
    </>
  );
}

export default App;