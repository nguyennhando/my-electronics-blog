import CookieBanner from "./components/CookieBanner";
import { createElement, useEffect, useMemo, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { CONTENT_POSTS, GALLERY_IMAGES, KNOWLEDGE_POSTS, PERSONAL_WAY, POSTS, SITE_SETTINGS } from "./lib/posts";

import {
  CircuitBoard, Cpu, RadioTower, Bot, Globe, Gauge, Search, Menu, X,
  CalendarDays, ArrowRight, ShieldCheck,
  Wrench, Mail, MonitorSmartphone, Workflow, AlertTriangle, ExternalLink,
  ChevronLeft, ChevronRight, Code2, ArrowLeft, Clock, Download, FileText, Image as ImageIcon, Pencil, Save,
  BookOpen, Library, FlaskConical, GraduationCap,
} from "lucide-react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const SLIDE_INTERVAL = 5000;

const DEFAULT_GALLERY_IMAGES = [
  "/my-electronics-blog/images/posts/Dampfmaschine-main.webp",
  "/my-electronics-blog/images/posts/finanzmanager-main.webp",
  "/my-electronics-blog/images/posts/Mischbehälter-main.webp",
  "/my-electronics-blog/images/posts/Flaschenzug-main.webp",
  "/my-electronics-blog/images/posts/Tauchanlage-main.webp",
];

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

const slugify = (value) => String(value || "")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const singleLine = (value) => String(value || "").replace(/\s+/g, " ").trim();

const markdownList = (items) => items.length
  ? items.map((item) => `- ${singleLine(item)}`).join("\n")
  : "[]";

const createMarkdownFile = (post) => `---
id: ${singleLine(post.slug)}
slug: ${singleLine(post.slug)}
content_type: ${singleLine(post.content_type)}
title: ${singleLine(post.title)}
category: ${singleLine(post.category)}
image_url: ${singleLine(post.image_url)}
image_gallery:
${markdownList(post.image_gallery)}
excerpt: ${singleLine(post.excerpt)}
tags:
${markdownList(post.tags)}
read_time: ${singleLine(post.read_time)}
published: ${post.published}
created_at: '${post.created_at}'
external_link: ${singleLine(post.external_link)}
project_status: ${post.project_status}
sort_order: ${Number(post.sort_order) || 100}
---

${post.content.trim()}
`;

const createPersonalWayFile = (personalWay) => `---
type: personal_way
title: ${singleLine(personalWay.title)}
image_1: ${singleLine(personalWay.image_1)}
image_2: ${singleLine(personalWay.image_2)}
---

${personalWay.content.trim()}
`;

const createSiteSettingsFile = (siteSettings) => `---
type: site_settings
background_image: ${singleLine(siteSettings.background_image)}
---
`;

const createGallerySettingsFile = (images) => `---
type: gallery_settings
---

${JSON.stringify(images, null, 2)}
`;

const downloadTextFile = (filename, content) => {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const emptyEditorForm = () => ({
  content_type: "project",
  title: "",
  slug: "",
  category: "IoT",
  image_url: "",
  image_gallery: "",
  excerpt: "",
  tags: "",
  read_time: "5 Min.",
  published: true,
  created_at: new Date().toISOString(),
  external_link: "",
  project_status: "done",
  sort_order: 100,
  content: "# Neuer Beitrag\n\nProjektbeschreibung...",
});

const postToEditorForm = (post) => ({
  content_type: post.content_type || "project",
  title: post.title || "",
  slug: post.slug || "",
  category: post.category || "IoT",
  image_url: post.image_url || "",
  image_gallery: normalizeImageList(post.image_gallery).join("\n"),
  excerpt: post.excerpt || "",
  tags: Array.isArray(post.tags) ? post.tags.join(", ") : "",
  read_time: post.read_time || "5 Min.",
  published: post.published !== false,
  created_at: post.created_at || new Date().toISOString(),
  external_link: post.external_link || "",
  project_status: normalizeStatus(post.project_status),
  sort_order: Number.isFinite(Number(post.sort_order)) ? Number(post.sort_order) : 100,
  content: post.content || "",
});

// ─────────────────────────────────────────────
// DEMO DATA
// ─────────────────────────────────────────────
const FEATURES = [
  { icon: Cpu, title: "Elektronik & Embedded Systems", text: "Eigene Lernprojekte rund um Mikrocontroller, Sensorik und hardwarenahe Entwicklung zur praktischen Erweiterung meines technischen Wissens." },
  { icon: Workflow, title: "Automatisierung & Steuerung", text: "Praktische Übungen und kleinere Projekte, um industrielle Abläufe, Steuerungstechnik und technische Prozesse besser zu verstehen." },
  { icon: ShieldCheck, title: "Technisches Lernen", text: "Dokumentation meines Lernwegs, technischer Erfahrungen und neuer Themen, mit denen ich mich kontinuierlich beschäftige." },
  { icon: MonitorSmartphone, title: "Eigene Entwicklung", text: "Diese Website dient als persönliche Plattform, um Projekte, Ideen und technische Fortschritte übersichtlich festzuhalten." },
];

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
      <img
        src={SITE_SETTINGS.background_image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
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
function SiteHeader({ onNavigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (currentPage !== "home") { onNavigate("home"); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100); }
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => { setMenuOpen(false); onNavigate("home"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goKnowledge = () => { setMenuOpen(false); onNavigate("knowledge"); window.scrollTo({ top: 0, behavior: "smooth" }); };

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
          <button type="button" onClick={goKnowledge} className="inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-slate-300/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-slate-200/60 hover:bg-slate-300/20">
            <BookOpen className="h-4 w-4" /> Wissen & Forschung
          </button>
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
            <button type="button" onClick={goKnowledge} className="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-300/30 bg-slate-300/10 px-3 py-2 text-left font-bold text-slate-200">
              <BookOpen className="h-4 w-4" /> Wissen & Forschung
            </button>
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
    <div className="min-h-screen text-white"
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
// MARKDOWN EDITOR
// ─────────────────────────────────────────────
function KnowledgePage({ posts, onOpenPost }) {
  const POSTS_PER_PAGE = 10;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle Themen");
  const [currentPage, setCurrentPage] = useState(1);
  const categories = useMemo(() => ["Alle Themen", ...new Set(posts.map((post) => post.category))], [posts]);
  const filteredPosts = useMemo(() => posts.filter((post) => {
    const matchesCategory = category === "Alle Themen" || post.category === category;
    const haystack = `${post.title} ${post.excerpt} ${(post.tags || []).join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(search.toLowerCase());
  }), [posts, search, category]);
  const featuredPost = filteredPosts[0];
  const listPosts = filteredPosts.slice(1);
  const totalPages = Math.max(1, Math.ceil(listPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = listPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  useEffect(() => { setCurrentPage(1); }, [search, category]);

  return (
    <div className="min-h-screen text-white">
      <Background />
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-[120px] sm:px-5">
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-300/25 bg-[#0b1023]/95 px-5 py-8 shadow-2xl shadow-slate-950/30 sm:px-8 sm:py-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-slate-300/15 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-slate-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-slate-200">
              <Library className="h-4 w-4" /> Wissensbibliothek
            </div>
            <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">Wissen, Lernmaterialien & Forschung</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">Technische Notizen, Schaltungsanalysen, Lernunterlagen und eigene Untersuchungen - strukturiert gesammelt und gut durchsuchbar.</p>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-300/20 bg-slate-300/[0.07] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-300/25 bg-slate-300/10 text-slate-200">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-black text-slate-100">Hinweis zur Wissensbibliothek</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-300">
                <p>Viele Grundlagen und technische Informationen in diesem Bereich sind bereits in Fachbüchern, Dokumentationen oder anderen Quellen verfügbar.</p>
                <p>Der Schwerpunkt dieser Wissensbibliothek liegt daher nicht nur auf der Sammlung von Lernmaterialien. Ich möchte vor allem Themen genauer analysieren, die aus meiner Sicht an anderen Stellen nicht immer verständlich oder ausreichend nachvollziehbar erklärt werden.</p>
                <p>Die Beiträge spiegeln meinen persönlichen Lernprozess und mein aktuelles technisches Verständnis wider. Sie sollen Zusammenhänge Schritt für Schritt greifbarer machen und zugleich als Grundlage für weitere Untersuchungen dienen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-[#07111f]/90 p-4 sm:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Analyse, Bauteil oder Thema suchen..." className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-sm outline-none ring-slate-300/30 placeholder:text-zinc-500 focus:ring-4" />
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-white/10 bg-[#050816] px-5 py-3 text-sm outline-none ring-slate-300/30 focus:ring-4">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </section>

        {!featuredPost ? (
          <section className="mt-8 rounded-2xl border border-dashed border-slate-300/30 bg-slate-300/5 px-5 py-16 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-slate-300" />
            <h2 className="mt-4 text-xl font-black">Noch keine passenden Beiträge</h2>
            <p className="mt-2 text-sm text-zinc-400">Neue Lernnotizen und Analysen werden hier nach und nach ergänzt.</p>
          </section>
        ) : (
          <>
            <section className="mt-8">
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-slate-300">Ausgewählter Beitrag</p>
              <button type="button" onClick={() => onOpenPost(featuredPost.id)} className="group grid w-full overflow-hidden rounded-[2rem] border border-slate-300/25 bg-[#0b1023]/95 text-left transition hover:border-slate-200/60 lg:grid-cols-[0.42fr_0.58fr]">
                <div className="h-56 overflow-hidden bg-slate-950/30 lg:h-auto">
                  {featuredPost.image_url ? <img src={featuredPost.image_url} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><FlaskConical className="h-14 w-14 text-slate-300/60" /></div>}
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="rounded-full bg-slate-200 px-3 py-1 font-black text-slate-950">{featuredPost.category}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featuredPost.read_time || "5 Min."}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">{featuredPost.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400 sm:text-base">{featuredPost.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-200">Beitrag lesen <ArrowRight className="h-4 w-4" /></span>
                </div>
              </button>
            </section>

            {listPosts.length > 0 && <section className="mt-10">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div><p className="text-xs font-black uppercase tracking-widest text-slate-300">Archiv</p><h2 className="mt-2 text-2xl font-black">Weitere Beiträge</h2></div>
                <span className="text-sm text-zinc-500">{filteredPosts.length} Beiträge</span>
              </div>
              <div className="grid gap-3">
                {paginatedPosts.map((post) => (
                  <button key={post.id} type="button" onClick={() => onOpenPost(post.id)} className="group grid gap-4 rounded-2xl border border-white/10 bg-[#07111f]/90 p-4 text-left transition hover:border-slate-300/50 sm:grid-cols-[140px_1fr_auto] sm:items-center">
                    <div className="hidden h-24 overflow-hidden rounded-xl bg-slate-950/30 sm:block">
                      {post.image_url ? <img src={post.image_url} alt="" className="h-full w-full object-cover transition group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><GraduationCap className="h-8 w-8 text-slate-300/60" /></div>}
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 text-xs text-zinc-500"><span className="font-bold text-slate-300">{post.category}</span><span>{formatDate(post.created_at)}</span><span>{post.read_time || "5 Min."}</span></div>
                      <h3 className="mt-2 text-lg font-black leading-tight group-hover:text-slate-200">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">{post.excerpt}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-slate-300 sm:block" />
                  </button>
                ))}
              </div>
              {totalPages > 1 && <div className="mt-6 flex justify-center gap-2">{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button key={number} type="button" onClick={() => setCurrentPage(number)} className={`h-10 w-10 rounded-xl text-sm font-black ${currentPage === number ? "bg-slate-200 text-slate-950" : "border border-white/10 bg-white/5 text-zinc-300"}`}>{number}</button>)}</div>}
            </section>}
          </>
        )}
      </main>
    </div>
  );
}

function KnowledgeDetailPage({ post, onBack }) {
  useEffect(() => { window.scrollTo({ top: 0 }); }, [post.id]);
  return (
    <div className="min-h-screen text-white">
      <Background />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-[110px] sm:px-5">
        <button type="button" onClick={onBack} className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300/25 bg-slate-300/10 px-5 py-2.5 text-sm font-bold text-slate-200 transition hover:bg-slate-300/20"><ArrowLeft className="h-4 w-4" /> Zurück zur Wissensbibliothek</button>
        <article className="overflow-hidden rounded-[2rem] border border-slate-300/20 bg-[#07111f]/95 shadow-2xl shadow-slate-950/20">
          {post.image_url && <img src={post.image_url} alt={post.title} className="h-56 w-full object-cover sm:h-80" />}
          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex flex-wrap gap-3 text-xs text-zinc-400">
              <span className="rounded-full bg-slate-200 px-3 py-1 font-black text-slate-950">{post.category}</span>
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.created_at)}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.read_time || "5 Min."}</span>
            </div>
            <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-base font-semibold leading-8 text-slate-100/90 sm:text-lg">{post.excerpt}</p>
            <div className="mt-7 text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
              <ReactMarkdown components={{
                h1: ({ children }) => <h2 className="mb-4 mt-9 text-2xl font-black text-white sm:text-3xl">{children}</h2>,
                h2: ({ children }) => <h3 className="mb-3 mt-8 text-xl font-black text-slate-200 sm:text-2xl">{children}</h3>,
                h3: ({ children }) => <h4 className="mb-2 mt-6 text-lg font-bold text-white">{children}</h4>,
                p: ({ children }) => <p className="mb-4">{children}</p>,
                ul: ({ children }) => <ul className="mb-5 ml-6 list-disc space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="mb-5 ml-6 list-decimal space-y-2">{children}</ol>,
                strong: ({ children }) => <strong className="font-black text-white">{children}</strong>,
                a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-300 underline underline-offset-4 hover:text-slate-200">{children}</a>,
                code: ({ children }) => <code className="rounded-md border border-slate-300/20 bg-black/30 px-1.5 py-0.5 text-slate-200">{children}</code>,
              }}>{post.content}</ReactMarkdown>
            </div>
            {post.external_link && <a href={post.external_link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-200 px-5 py-3 font-black text-slate-950 transition hover:bg-white">Externe Quelle öffnen <ExternalLink className="h-4 w-4" /></a>}
          </div>
        </article>
      </main>
    </div>
  );
}

function MarkdownEditorPage() {
  const [form, setForm] = useState(emptyEditorForm);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);
  const [contentDirectory, setContentDirectory] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [showPersonalWayEditor, setShowPersonalWayEditor] = useState(false);
  const [personalWayForm, setPersonalWayForm] = useState(PERSONAL_WAY);
  const [showSiteSettingsEditor, setShowSiteSettingsEditor] = useState(false);
  const [siteSettingsForm, setSiteSettingsForm] = useState(SITE_SETTINGS);
  const [showGalleryEditor, setShowGalleryEditor] = useState(false);
  const [galleryImagesForm, setGalleryImagesForm] = useState((GALLERY_IMAGES.length ? GALLERY_IMAGES : DEFAULT_GALLERY_IMAGES).join("\n"));

  const update = (key, value) => {
    setForm((current) => {
      const next = { ...current, [key]: value };
      if (key === "title" && !slugEdited) next.slug = slugify(value);
      return next;
    });
  };

  const getMarkdownExport = () => {
    const slug = form.slug || slugify(form.title);
    if (!slug || !form.title.trim() || !form.excerpt.trim() || !form.content.trim()) {
      window.alert("Titel, Slug, Kurzbeschreibung und Inhalt sind Pflichtfelder.");
      return null;
    }

    const markdown = createMarkdownFile({
      ...form,
      slug,
      image_gallery: form.image_gallery.split("\n").map((item) => item.trim()).filter(Boolean),
      tags: form.tags.split(",").map((item) => item.trim()).filter(Boolean),
    });
    return { filename: `${slug}.md`, markdown };
  };

  const exportPost = () => {
    const output = getMarkdownExport();
    if (!output) return;
    downloadTextFile(output.filename, output.markdown);
  };

  const saveMarkdownToDirectory = async (output) => {
    if (!window.showDirectoryPicker) {
      window.alert("Direktes Speichern wird von diesem Browser nicht unterstützt. Bitte verwenden Sie MD exportieren.");
      return;
    }

    try {
      const directory = contentDirectory || await window.showDirectoryPicker({ mode: "readwrite" });
      if (!contentDirectory) setContentDirectory(directory);
      const file = await directory.getFileHandle(output.filename, { create: true });
      const writable = await file.createWritable();
      await writable.write(output.markdown);
      await writable.close();
      setSaveMessage(`${output.filename} wurde gespeichert.`);
    } catch (error) {
      if (error.name !== "AbortError") {
        window.alert("Die Datei konnte nicht gespeichert werden. Bitte verwenden Sie MD exportieren.");
      }
    }
  };

  const savePostToDirectory = async () => {
    const output = getMarkdownExport();
    if (!output) return;
    await saveMarkdownToDirectory(output);
  };

  const getPersonalWayExport = () => {
    if (!personalWayForm.title.trim() || !personalWayForm.content.trim()) {
      window.alert("Titel und Inhalt sind Pflichtfelder.");
      return null;
    }

    return {
      filename: "personal-way.md",
      markdown: createPersonalWayFile(personalWayForm),
    };
  };

  const savePersonalWayToDirectory = async () => {
    const output = getPersonalWayExport();
    if (!output) return;
    await saveMarkdownToDirectory(output);
  };

  const exportPersonalWay = () => {
    const output = getPersonalWayExport();
    if (!output) return;
    downloadTextFile(output.filename, output.markdown);
  };

  const getSiteSettingsExport = () => ({
    filename: "site-settings.md",
    markdown: createSiteSettingsFile(siteSettingsForm),
  });

  const saveSiteSettingsToDirectory = async () => {
    await saveMarkdownToDirectory(getSiteSettingsExport());
  };

  const exportSiteSettings = () => {
    const output = getSiteSettingsExport();
    downloadTextFile(output.filename, output.markdown);
  };

  const getGallerySettingsExport = () => ({
    filename: "gallery-settings.md",
    markdown: createGallerySettingsFile(galleryImagesForm.split("\n").map((item) => item.trim()).filter(Boolean)),
  });

  const saveGallerySettingsToDirectory = async () => {
    await saveMarkdownToDirectory(getGallerySettingsExport());
  };

  const exportGallerySettings = () => {
    const output = getGallerySettingsExport();
    downloadTextFile(output.filename, output.markdown);
  };

  const selectPost = (slug) => {
    setSelectedSlug(slug);
    if (!slug) {
      setForm(emptyEditorForm());
      setSlugEdited(false);
      return;
    }

    const post = CONTENT_POSTS.find((item) => item.slug === slug);
    if (!post) return;
    setForm(postToEditorForm(post));
    setSlugEdited(true);
  };

  const inputClass = "w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 placeholder:text-zinc-600 focus:ring-4";
  const labelClass = "mb-2 block text-xs font-bold uppercase text-zinc-400";
  const PreviewIcon = getCategoryIcon(form.category);
  const previewTags = form.tags.split(",").map((item) => item.trim()).filter(Boolean);
  const previewIsIdea = form.content_type !== "knowledge" && isIdea(form);

  return (
    <div className="min-h-screen text-white">
      <Background />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-cyan-300" />
            <div>
              <h1 className="font-black">Markdown-Beitrag erstellen</h1>
              <p className="text-xs text-zinc-500">ElektronikLab</p>
            </div>
          </div>
          <a href="/my-electronics-blog/" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
            <ArrowLeft className="h-4 w-4" /> Blog
          </a>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="space-y-5">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
            <button type="button" onClick={() => setShowSiteSettingsEditor((current) => !current)} className="flex w-full items-center justify-between gap-3 text-left">
              <span>
                <span className="block text-xs font-bold uppercase text-emerald-300">Website</span>
                <span className="mt-1 block font-black">Website-Hintergrund bearbeiten</span>
              </span>
              <ImageIcon className="h-5 w-5 text-emerald-300" />
            </button>

            {showSiteSettingsEditor && (
              <div className="mt-5 grid gap-4 border-t border-white/10 pt-5">
                <div>
                  <label className={labelClass}>Hintergrundbild</label>
                  <input className={inputClass} value={siteSettingsForm.background_image} onChange={(e) => setSiteSettingsForm((current) => ({ ...current, background_image: e.target.value }))} placeholder="/my-electronics-blog/images/background.webp" />
                </div>
                <div className="relative h-44 overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">
                  {siteSettingsForm.background_image ? (
                    <img src={siteSettingsForm.background_image} alt="" className="h-full w-full object-cover opacity-60" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-zinc-500">Standard-Hintergrund ohne Bild</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-900/30 to-fuchsia-600/20" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={saveSiteSettingsToDirectory} className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-sm font-black text-black transition hover:bg-emerald-300">
                    <Save className="h-4 w-4" /> In Ordner speichern
                  </button>
                  <button type="button" onClick={exportSiteSettings} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
                    <Download className="h-4 w-4" /> MD exportieren
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <button type="button" onClick={() => setShowGalleryEditor((current) => !current)} className="flex w-full items-center justify-between gap-3 text-left">
              <span>
                <span className="block text-xs font-bold uppercase text-cyan-300">Startseite</span>
                <span className="mt-1 block font-black">Projektgalerie bearbeiten</span>
              </span>
              <ImageIcon className="h-5 w-5 text-cyan-300" />
            </button>

            {showGalleryEditor && (
              <div className="mt-5 grid gap-4 border-t border-white/10 pt-5">
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] p-4 text-sm leading-6 text-zinc-300">
                  <p className="font-black text-cyan-200">So fügen Sie neue Galeriebilder hinzu</p>
                  <ol className="mt-2 ml-5 list-decimal space-y-1">
                    <li>Kopieren Sie die Bilddatei in den Ordner <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">public/images/posts</code>.</li>
                    <li>Tragen Sie den Bildpfad ein, zum Beispiel <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">/my-electronics-blog/images/posts/dateiname.webp</code>.</li>
                    <li>Verwenden Sie pro Zeile genau einen Bildpfad.</li>
                    <li>Die erste Zeile ist das große Hauptbild. Die zweite und dritte Zeile sind die kleinen Bilder auf der rechten Seite.</li>
                    <li>Speichern Sie die Datei anschließend im Ordner <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">src/content</code>.</li>
                  </ol>
                  <p className="mt-3 text-xs text-zinc-400">Die Bildposition innerhalb des Rahmens wird automatisch zentriert.</p>
                </div>
                <div>
                  <label className={labelClass}>Galeriebilder, ein Pfad pro Zeile</label>
                  <textarea className={`${inputClass} min-h-[220px] font-mono leading-6`} value={galleryImagesForm} onChange={(e) => setGalleryImagesForm(e.target.value)} placeholder="/my-electronics-blog/images/galerie/bild.webp" />
                  <p className="mt-2 text-xs leading-5 text-zinc-500">Die Galerie ist frei zusammengestellt. Die Bilder müssen keinem bestimmten Projekt zugeordnet sein.</p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {galleryImagesForm.split("\n").map((item) => item.trim()).filter(Boolean).slice(0, 6).map((image) => <img key={image} src={image} alt="" className="h-28 w-full rounded-xl object-cover" />)}
                </div>
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={saveGallerySettingsToDirectory} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-black transition hover:bg-cyan-300">
                    <Save className="h-4 w-4" /> In Ordner speichern
                  </button>
                  <button type="button" onClick={exportGallerySettings} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
                    <Download className="h-4 w-4" /> MD exportieren
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/5 p-5">
            <button type="button" onClick={() => setShowPersonalWayEditor((current) => !current)} className="flex w-full items-center justify-between gap-3 text-left">
              <span>
                <span className="block text-xs font-bold uppercase text-fuchsia-300">Startseite</span>
                <span className="mt-1 block font-black">Persönlicher Weg bearbeiten</span>
              </span>
              <Pencil className="h-5 w-5 text-fuchsia-300" />
            </button>

            {showPersonalWayEditor && (
              <div className="mt-5 grid gap-4 border-t border-white/10 pt-5">
                <div>
                  <label className={labelClass}>Titel *</label>
                  <input className={inputClass} value={personalWayForm.title} onChange={(e) => setPersonalWayForm((current) => ({ ...current, title: e.target.value }))} />
                </div>
                <div>
                  <label className={labelClass}>Bild 1</label>
                  <input className={inputClass} value={personalWayForm.image_1} onChange={(e) => setPersonalWayForm((current) => ({ ...current, image_1: e.target.value }))} />
                </div>
                <div>
                  <label className={labelClass}>Bild 2</label>
                  <input className={inputClass} value={personalWayForm.image_2} onChange={(e) => setPersonalWayForm((current) => ({ ...current, image_2: e.target.value }))} />
                </div>
                <div>
                  <label className={labelClass}>Markdown-Inhalt *</label>
                  <textarea className={`${inputClass} min-h-[320px] font-mono leading-6`} value={personalWayForm.content} onChange={(e) => setPersonalWayForm((current) => ({ ...current, content: e.target.value }))} />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={savePersonalWayToDirectory} className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-400 px-4 py-2 text-sm font-black text-black transition hover:bg-fuchsia-300">
                    <Save className="h-4 w-4" /> In Ordner speichern
                  </button>
                  <button type="button" onClick={exportPersonalWay} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
                    <Download className="h-4 w-4" /> MD exportieren
                  </button>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase text-zinc-500">Vorschau</p>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="grid gap-3">
                      <img src={personalWayForm.image_1} alt="" className="h-40 w-full rounded-xl object-cover" />
                      <img src={personalWayForm.image_2} alt="" className="h-40 w-full rounded-xl object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-cyan-300">Persönlicher Weg</p>
                      <h2 className="mt-2 text-xl font-black leading-tight">{personalWayForm.title}</h2>
                      <div className="prose prose-invert mt-4 max-w-none text-sm leading-6 prose-p:my-3 prose-p:text-zinc-300">
                        <ReactMarkdown>{personalWayForm.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <label className={labelClass}>Beitrag laden oder neu erstellen</label>
            <select className={inputClass} value={selectedSlug} onChange={(e) => selectPost(e.target.value)}>
              <option value="">Neuer Beitrag</option>
              {CONTENT_POSTS.map((post) => <option key={post.slug} value={post.slug}>{post.content_type === "knowledge" ? "[Wissen]" : "[Projekt]"} {post.title}</option>)}
            </select>
          </div>

          <div className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelClass}>Inhaltstyp</label>
              <select className={inputClass} value={form.content_type} onChange={(e) => update("content_type", e.target.value)}>
                <option value="project">Projektbeitrag für den Blog</option>
                <option value="knowledge">Wissen, Lernmaterial oder Forschung</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Titel *</label>
              <input className={inputClass} value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="Titel des Projekts" />
            </div>
            <div>
              <label className={labelClass}>Slug *</label>
              <input className={inputClass} value={form.slug} onChange={(e) => { setSlugEdited(true); update("slug", slugify(e.target.value)); }} placeholder="projekt-name" />
            </div>
            <div>
              <label className={labelClass}>Kategorie</label>
              <input className={inputClass} value={form.category} onChange={(e) => update("category", e.target.value)} />
            </div>
            {form.content_type !== "knowledge" && <div>
              <label className={labelClass}>Status</label>
              <select className={inputClass} value={form.project_status} onChange={(e) => update("project_status", e.target.value)}>
                <option value="idea">Idee</option>
                <option value="in_progress">In Arbeit</option>
                <option value="done">Umgesetzt</option>
              </select>
            </div>}
            <div>
              <label className={labelClass}>Reihenfolge</label>
              <input className={inputClass} type="number" value={form.sort_order} onChange={(e) => update("sort_order", e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Kurzbeschreibung *</label>
              <textarea className={inputClass} rows={3} value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Hauptbild</label>
              <input className={inputClass} value={form.image_url} onChange={(e) => update("image_url", e.target.value)} placeholder="/my-electronics-blog/images/posts/bild.webp" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Galeriebilder, ein Pfad pro Zeile</label>
              <textarea className={inputClass} rows={3} value={form.image_gallery} onChange={(e) => update("image_gallery", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Tags, durch Komma getrennt</label>
              <input className={inputClass} value={form.tags} onChange={(e) => update("tags", e.target.value)} placeholder="ESP32, MQTT, IoT" />
            </div>
            <div>
              <label className={labelClass}>Lesezeit</label>
              <input className={inputClass} value={form.read_time} onChange={(e) => update("read_time", e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>{form.content_type === "knowledge" ? "Externe Quelle oder weiterführender Link" : "Externer Projektlink"}</label>
              <input className={inputClass} value={form.external_link} onChange={(e) => update("external_link", e.target.value)} placeholder="https://..." />
            </div>
            <label className="flex items-center gap-3 text-sm font-bold text-zinc-300">
              <input type="checkbox" checked={form.published} onChange={(e) => update("published", e.target.checked)} />
              Veröffentlicht
            </label>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <label className={labelClass}>Markdown-Inhalt *</label>
            <textarea className={`${inputClass} min-h-[420px] font-mono leading-6`} value={form.content} onChange={(e) => update("content", e.target.value)} />
          </div>
        </section>

        <aside className="lg:sticky lg:top-[90px] lg:self-start">
          <div className="space-y-5 rounded-2xl border border-white/10 bg-[#07111f]/95 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-black text-cyan-300">Vorschau</h2>
              <div className="flex flex-wrap justify-end gap-2">
                <button type="button" onClick={savePostToDirectory} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-black transition hover:bg-cyan-300">
                  <Save className="h-4 w-4" /> In Ordner speichern
                </button>
                <button type="button" onClick={exportPost} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
                  <Download className="h-4 w-4" /> MD exportieren
                </button>
              </div>
            </div>
            {saveMessage && <p className="text-xs font-bold text-emerald-300">{saveMessage}</p>}

            <div>
              <p className="mb-3 text-xs font-bold uppercase text-zinc-500">Blog-Karte</p>
              <GradientBorder
                gradient={previewIsIdea ? "from-zinc-600 via-zinc-500 to-zinc-600" : "from-cyan-400 via-cyan-500 to-cyan-400"}
                rounded="rounded-[1.4rem] sm:rounded-[2rem]"
                className="flex"
                innerClassName="flex min-h-[560px] flex-1 flex-col overflow-hidden rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl"
              >
                <div className="h-44 w-full shrink-0 bg-black/30 sm:h-56">
                  {form.image_url ? (
                    <img src={form.image_url} alt="" className={`h-full w-full object-cover ${previewIsIdea ? "grayscale opacity-70" : ""}`} />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-zinc-600">Kein Hauptbild</div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 font-black text-black">{createElement(PreviewIcon, { className: "h-3.5 w-3.5" })} {form.category || "Kategorie"}</span>
                    {form.content_type !== "knowledge" && <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-bold ${getStatusClasses(form.project_status)}`}>{getStatusLabel(form.project_status)}</span>}
                    <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(form.created_at)}</span>
                  </div>
                  <h3 className="text-lg font-black leading-tight sm:text-2xl">{form.title || "Titel des Beitrags"}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">{form.excerpt || "Kurzbeschreibung des Projekts"}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {previewTags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">#{tag}</span>)}
                  </div>
                  <div className="mt-auto pt-6">
                    <span className="block rounded-2xl bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-black sm:text-base">Beitrag lesen</span>
                  </div>
                </div>
              </GradientBorder>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="mb-3 text-xs font-bold uppercase text-zinc-500">Markdown-Inhalt</p>
              <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-li:text-zinc-300">
                <ReactMarkdown>{form.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
function HomePage({ posts, galleryImages, onOpenPost, onGoImpressum, onGoDatenschutz }) {
  const POSTS_PER_PAGE = 15;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState(null); // { images, index }
  const [galleryLightbox, setGalleryLightbox] = useState(null);

  const heroSlides = useMemo(() =>
    [...posts].sort((a, b) => {
      const oA = isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
      const oB = isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
      return oA !== oB ? oA - oB : new Date(b.created_at || 0) - new Date(a.created_at || 0);
    }).slice(0, 6).map(p => ({ id: p.id, image: p.image_url, category: p.category, readTime: p.read_time || "5 Min.", title: p.title, text: p.excerpt, tags: Array.isArray(p.tags) ? p.tags : [] })),
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

  const totalPages = Math.max(
  1,
  Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
);

const paginatedPosts = filteredPosts.slice(
  (currentPage - 1) * POSTS_PER_PAGE,
  currentPage * POSTS_PER_PAGE
);

  return (
    <div className="min-h-screen overflow-x-hidden text-white">
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
                <img src={PERSONAL_WAY.image_1} alt="Nguyen Nhan Do" className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]" />
                <img src={PERSONAL_WAY.image_2} alt="Elektronik" className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Persönlicher Weg</p>
                <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">{PERSONAL_WAY.title}</h2>
                <div className="prose prose-invert mt-5 max-w-none text-sm leading-7 text-zinc-300 prose-p:my-4 prose-p:text-zinc-300 sm:text-base sm:leading-8">
                  <ReactMarkdown>{PERSONAL_WAY.content}</ReactMarkdown>
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
        <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-5">
          <div className="w-full rounded-[2rem] p-[1.5px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400">
            <div className="overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl">
              <div className="grid lg:grid-cols-[0.28fr_0.72fr]">
                <div className="relative h-28 sm:h-32 lg:h-auto">
                  <img src="/my-electronics-blog/images/project-warning.webp" alt="Hinweis" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-4 sm:p-5">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5 text-sm font-bold text-yellow-300">
                    <AlertTriangle className="h-4 w-4" /> Wichtiger Hinweis
                  </div>
                  <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Wichtiger Hinweis zu meinen Projekten</h2>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-zinc-300 sm:text-base sm:leading-6">
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
                <input value={search} onChange={e => { setSearch(e.target.value); setCurrentPage(1); }} placeholder="Suchen..." className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-3 pl-11 pr-4 text-sm outline-none ring-cyan-400/30 placeholder:text-zinc-500 focus:ring-4 sm:w-72" />
              </div>
              <select value={category} onChange={e => { setCategory(e.target.value); setCurrentPage(1); }} className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-3 outline-none ring-cyan-400/30 focus:ring-4">
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-zinc-500">Keine Beiträge gefunden.</div>
          )}

          <div className="grid auto-rows-fr gap-4 min-[620px]:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {paginatedPosts.map(post => {
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
                      </div>
                    </div>
                  </GradientBorder>
                </motion.div>
              );
            })}
          </div>

          {totalPages > 1 && (
  <div className="mt-10 flex flex-col items-center justify-center gap-4">
    <div className="text-sm font-semibold text-zinc-400">
      Seite {currentPage} von {totalPages}
    </div>

    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage((page) => Math.max(page - 1, 1));
          document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Vorherige
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => {
            setCurrentPage(page);
            document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`h-10 min-w-10 rounded-xl px-3 text-sm font-black transition ${
            currentPage === page
              ? "bg-cyan-400 text-black"
              : "border border-white/10 text-zinc-300 hover:bg-white/10"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => {
          setCurrentPage((page) => Math.min(page + 1, totalPages));
          document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Nächste →
      </button>
    </div>
  </div>
)}
        </section>

        {/* ── Gallery ── */}
        <section id="projekte" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Galerie</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Projektbilder</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {galleryImages.slice(0, 1).map((image) => (
              <button key={image} type="button" onClick={() => setGalleryLightbox({ images: galleryImages, index: 0 })} className="group lg:col-span-2">
                <GradientBorder gradient="from-cyan-400 via-cyan-500 to-cyan-400" rounded="rounded-[2rem]" innerClassName="relative overflow-hidden rounded-[1.95rem] bg-[#07111f]">
                  <img src={image} alt="Galeriebild" className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110 sm:h-[520px]" />
                </GradientBorder>
              </button>
            ))}
            <div className="grid gap-6">
              {galleryImages.slice(1, 3).map((image, index) => (
                <button key={image} type="button" onClick={() => setGalleryLightbox({ images: galleryImages, index: index + 1 })} className="group">
                  <GradientBorder gradient="from-cyan-400 via-cyan-500 to-cyan-400" rounded="rounded-[2rem]" innerClassName="relative overflow-hidden rounded-[1.95rem] bg-[#07111f]">
                    <img src={image} alt="Galeriebild" className="h-[210px] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110 sm:h-[247px]" />
                    {index === 1 && galleryImages.length > 3 && <span className="absolute bottom-4 right-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-black">+{galleryImages.length - 3} weitere Bilder</span>}
                  </GradientBorder>
                </button>
              ))}
            </div>
          </div>
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
                      {icon: Code2, label: "GitHub", value: "github.com/nguyennhando"},
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
      {galleryLightbox && (
        <Lightbox images={galleryLightbox.images} index={galleryLightbox.index} onClose={() => setGalleryLightbox(null)} />
      )}

    </div>
  );
}


// ─────────────────────────────────────────────
// LEGAL PAGES
// ─────────────────────────────────────────────
function LegalPageLayout({ title, children, onBack, onNavigate }) {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <Background />

      <SiteHeader
        onNavigate={onNavigate}
        currentPage="legal"
      />

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

function ImpressumPage({ onBack, onNavigate }) {
  return (
    <LegalPageLayout
      title="Impressum"
      onBack={onBack}
      onNavigate={onNavigate}
    >
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

function DatenschutzPage({ onBack, onNavigate }) {
  return (
    <LegalPageLayout
      title="Datenschutz"
      onBack={onBack}
      onNavigate={onNavigate}
    >
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
  const isMarkdownEditor = import.meta.env.DEV && new URLSearchParams(window.location.search).get("admin") === "1";
  const [page, setPage] = useState("home"); // "home" | "post" | "knowledge" | "knowledge-post" | "impressum" | "datenschutz"
  const [currentPostId, setCurrentPostId] = useState(null);

  // ── Data state ──
  const posts = POSTS;
  const knowledgePosts = KNOWLEDGE_POSTS;
  const galleryImages = GALLERY_IMAGES.length ? GALLERY_IMAGES : DEFAULT_GALLERY_IMAGES;
  const currentPost = useMemo(() => posts.find(p => String(p.id) === String(currentPostId)) || null, [posts, currentPostId]);
  const currentKnowledgePost = useMemo(() => knowledgePosts.find(p => String(p.id) === String(currentPostId)) || null, [knowledgePosts, currentPostId]);

  // ── Navigation ──
  const openPost = useCallback((id) => {
    setCurrentPostId(id);
    setPage("post");
  }, []);

  const openKnowledgePost = useCallback((id) => {
    setCurrentPostId(id);
    setPage("knowledge-post");
  }, []);

  const navigate = useCallback((nextPage) => {
    setPage(nextPage);
    setCurrentPostId(null);
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

  if (isMarkdownEditor) {
    return <MarkdownEditorPage />;
  }

  if (page === "impressum") {
  return (
    <ImpressumPage
      onBack={goHome}
      onNavigate={setPage}
    />
  );
}

if (page === "datenschutz") {
  return (
    <DatenschutzPage
      onBack={goHome}
      onNavigate={setPage}
    />
  );
}

  return (
    <>
     <CookieBanner />
      <SiteHeader onNavigate={navigate} currentPage={page} />

      {page === "post" && currentPost ? (
        <PostDetailPage post={currentPost} onBack={goHome} />
      ) : page === "knowledge-post" && currentKnowledgePost ? (
        <KnowledgeDetailPage post={currentKnowledgePost} onBack={() => navigate("knowledge")} />
      ) : page === "knowledge" ? (
        <KnowledgePage posts={knowledgePosts} onOpenPost={openKnowledgePost} />
      ) : (
        <HomePage
          posts={posts}
          galleryImages={galleryImages}
          onOpenPost={openPost}
          onGoImpressum={goImpressum}
          onGoDatenschutz={goDatenschutz}
        />
      )}
    </>
  );
}

export default App;
