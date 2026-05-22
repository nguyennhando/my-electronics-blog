import React, { useEffect, useMemo, useState, useRef } from "react";
import { Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import CookieBanner from "./components/CookieBanner";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import {
  CircuitBoard,
  Cpu,
  RadioTower,
  Bot,
  Globe,
  Gauge,
  Search,
  Menu,
  X,
  CalendarDays,
  ArrowRight,
  Save,
  Trash2,
  Edit3,
  Plus,
  LogOut,
  ShieldCheck,
  Wrench,
  Mail,
  Phone,
  MonitorSmartphone,
  Workflow,
  AlertTriangle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code2,
  
} from "lucide-react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const demoPosts = [
  {
    id: "demo-1",
    title: "Intelligente Smart-Home-Steuerung mit ESP32 und MQTT",
    category: "IoT",
    image_url:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Entwicklung einer modularen Smart-Home-Plattform zur Steuerung von Licht, Sensoren, Energieverbrauch und Sicherheitsfunktionen.",
    content:
      "Dieses Projekt basiert auf einem ESP32-Mikrocontroller und verwendet MQTT für die Kommunikation zwischen Sensoren, Relais und Dashboard. Die Plattform kann Temperatur, Luftfeuchtigkeit, Bewegungen und Energieverbrauch überwachen. Zusätzlich wurde eine mobile Weboberfläche integriert, um Lampen, Steckdosen und Lüfter in Echtzeit zu steuern. Besonderer Fokus lag auf Stabilität, geringer Latenz und einfacher Erweiterbarkeit.",
    tags: ["ESP32", "MQTT", "Smart Home", "Sensorik"],
    published: true,
    created_at: "2026-05-14T12:00:00Z",
    read_time: "8 Min.",
    external_link: "https://github.com/nguyennhando",
    project_status: "done",
    sort_order: 10,
  },
  {
    id: "demo-2",
    title: "Automatisiertes Energie-Monitoring für Schaltschrankanlagen",
    category: "Messtechnik",
    image_url:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Messsystem zur Analyse von Spannung, Strom, Leistung und Netzqualität in industriellen Verteilungen.",
    content:
      "Das System nutzt Stromsensoren, Spannungsmessung und digitale Signalverarbeitung zur kontinuierlichen Analyse elektrischer Verbraucher. Die Daten werden über RS485 übertragen und in einem Dashboard visualisiert. Zusätzlich können Grenzwerte definiert werden, um Warnmeldungen oder automatische Abschaltungen auszulösen.",
    tags: ["Monitoring", "RS485", "Leistung", "Elektronik"],
    published: true,
    created_at: "2026-05-08T12:00:00Z",
    read_time: "6 Min.",
    external_link: "",
    project_status: "in_progress",
    sort_order: 20,
  },
  {
    id: "demo-3",
    title: "Mini-Roboter mit Hinderniserkennung und Motorsteuerung",
    category: "Robotik",
    image_url:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Kompakter Lernroboter mit Ultraschallsensor, PWM-Motorregelung und autonomer Navigation.",
    content:
      "Der Roboter erkennt Hindernisse mit einem Ultraschallsensor und passt die Fahrtrichtung automatisch an. Die Motoren werden über PWM geregelt und ein Mikrocontroller übernimmt die Entscheidungslogik. Das Projekt eignet sich hervorragend zum Lernen von Embedded-Programmierung, Sensorik und Robotik.",
    tags: ["Robotik", "PWM", "Arduino", "Motorsteuerung"],
    published: true,
    created_at: "2026-04-29T12:00:00Z",
    read_time: "5 Min.",
    external_link: "",
    project_status: "idea",
    sort_order: 30,
  },
];

const features = [
  {
    icon: Cpu,
    title: "Embedded & Elektronik",
    text: "Projekte mit Mikrocontrollern, Sensorik, Firmware und hardwarenaher Entwicklung.",
    gradient: "from-cyan-400 via-cyan-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
  {
    icon: Workflow,
    title: "Automatisierung & Steuerung",
    text: "Praktische Projekte aus Automatisierungstechnik, Steuerungssystemen und technischer Logik.",
    gradient: "from-cyan-400 via-cyan-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Projektdokumentation",
    text: "Dokumentation von Lernprojekten, technischen Entwicklungen und praktischen Erfahrungen.",
    gradient: "from-cyan-400 via-cyan-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
  {
    icon: MonitorSmartphone,
    title: "Selbst entwickelte Plattform",
    text: "Diese Website wurde eigenständig entwickelt, um Projekte, Source Code und technische Inhalte zentral zu verwalten.",
    gradient: "from-cyan-400 via-cyan-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
];

function getIcon(category) {
  if (category === "IoT") return RadioTower;
  if (category === "Robotik") return Bot;
  if (category === "Messtechnik") return Gauge;
  return Cpu;
}

function formatDate(date) {
  if (!date) return "Kein Datum";
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function normalizeProjectStatus(status) {
  if (["idea", "in_progress", "done"].includes(status)) return status;
  return "done";
}

function isIdeaPost(post) {
  return normalizeProjectStatus(post?.project_status) === "idea";
}

function getProjectStatusLabel(status) {
  const normalized = normalizeProjectStatus(status);
  if (normalized === "idea") return "Idee";
  if (normalized === "in_progress") return "In Arbeit";
  return "Umgesetzt";
}

function getProjectStatusClasses(status) {
  const normalized = normalizeProjectStatus(status);
  if (normalized === "idea") {
    return "border-zinc-500/30 bg-zinc-500/15 text-zinc-300";
  }
  if (normalized === "in_progress") {
    return "border-yellow-400/30 bg-yellow-400/10 text-yellow-300";
  }
  return "border-emerald-400/30 bg-emerald-400/10 text-emerald-300";
}

function createEmptyPost() {
  return {
    id: null,
    title: "",
    category: "IoT",
    image_url:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    excerpt: "",
    content: "",
    tags: "ESP32, Sensorik",
    read_time: "5 Min.",
    published: true,
    external_link: "",
    project_status: "done",
    sort_order: 100,
  };
}

/* ── Reusable gradient-border wrapper ── */
function GradientBorder({
  children,
  gradient = "from-cyan-400 via-cyan-500 to-cyan-400",
  className = "",
  innerClassName = "",
  padding = "p-[1.5px]",
  rounded = "rounded-[2rem]",
  stretch = false,
}) {
  const outerFlex = stretch ? "flex flex-col" : "";
  const innerFlex = stretch ? "flex-1" : "";
  return (
    <div className={`relative ${rounded} ${padding} ${outerFlex} ${className}`}>
      <div className={`absolute inset-0 ${rounded} bg-gradient-to-r ${gradient} opacity-70`} />
      <div className={`relative ${rounded} ${innerFlex} ${innerClassName}`}>{children}</div>
    </div>
  );
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07111f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.45),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.42),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.38),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.34),transparent_32%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-900/30 to-fuchsia-600/20" />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-400/35 blur-3xl" />
      <div className="absolute right-[-160px] top-[15%] h-[560px] w-[560px] rounded-full bg-blue-500/35 blur-3xl" />
      <div className="absolute bottom-[-180px] left-[20%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/30 blur-3xl" />
    </div>
  );
}


function SiteHeader({ onAdminClick }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToSection(id) {
    setMenuOpen(false);
    navigate(`/${id}`);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }

  function goHome() {
    setMenuOpen(false);
    navigate("/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
  }

  function openAdmin() {
    setMenuOpen(false);
    onAdminClick?.();
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
        <button type="button" onClick={goHome} className="flex items-center gap-3 text-left">
          <div className="flex h-12 w-12 overflow-hidden rounded-2xl sm:h-14 sm:w-14">
            <img
              src="/my-electronics-blog/images/logo.png"
              alt="Logo"
              className="h-full w-full scale-110 object-contain brightness-110 contrast-110"
            />
          </div>
          <div>
            <h1 className="text-base font-black text-white sm:text-xl">Nguyen Nhan Do</h1>
            <p className="max-w-[190px] text-[10px] leading-tight text-zinc-400 sm:max-w-none sm:text-xs">
              Technik • Entwicklung • Lernen
            </p>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {["blog", "projekte", "kontakt"].map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-sm text-zinc-300 transition hover:text-cyan-300 capitalize"
            >
              {id === "projekte" ? "Galerie" : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button
            type="button"
            onClick={openAdmin}
            className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10 hover:border-cyan-400/60"
          >
            Admin
          </button>
        </div>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {[
              ["blog", "Blog"],
              ["projekte", "Projekte"],
              ["kontakt", "Kontakt"],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="rounded-xl px-3 py-2 text-left hover:bg-white/10"
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={openAdmin}
              className="rounded-xl px-3 py-2 text-left hover:bg-white/10"
            >
              Admin
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ══════════════════════════════════════════════
   HERO SLIDESHOW — Split Layout with Stagger
══════════════════════════════════════════════ */

const SLIDE_INTERVAL = 5000;

// Framer Motion variants
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.25, ease: "easeIn" } },
};

const cardVariants = {
  hidden: { opacity: 0, x: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
  exit: {
    opacity: 0,
    x: -32,
    scale: 0.97,
    transition: { duration: 0.28, ease: "easeIn" },
  },
};

const glowVariants = {
  initial: { scale: 1, opacity: 0.6 },
  animate: {
    scale: [1, 1.12, 1],
    opacity: [0.6, 0.85, 0.6],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

function HeroSlideshow({ slides, onDiscover }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  function goTo(idx) {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    startTimer();
  }
  function prev() {
    goTo((current - 1 + slides.length) % slides.length);
  }
  function next() {
    goTo((current + 1) % slides.length);
  }

  const slide = slides[current];

  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
      {/* ── LEFT: Staggered text ── */}
      <div className="relative z-10">
      
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-sm">
  <CircuitBoard className="h-4 w-4 text-cyan-400" />
  <span className="text-sm font-medium text-cyan-300">
    Elektrokonstruktion · Prüftechnik · Software
  </span>
</div>
      
        {/* Static main headline */}
        <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Technik. Dokumentation. Entwicklung.
        </h2>

        {/* Static description */}
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-9">
        Diese Website habe ich selbst entwickelt, um technische Projekte, Lernfortschritte und praktische Erfahrungen 
        in den Bereichen Elektrotechnik, Leistungselektronik, Prüftechnik, Elektrokonstruktion, Softwareentwicklung und Automatisierungstechnik zu dokumentieren.
        Zudem erweitere ich mein Wissen kontinuierlich im Bereich Embedded Systems durch praktische Projekte und eigene Entwicklungen
        </p>

        {/* CTA buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={onDiscover}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 text-sm font-bold text-black shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
          >
            Projekte entdecken <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
  href="https://drive.google.com/drive/folders/1y6MZUhoZJCIou-SL9BHbkA-CjpXxKGz5?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-2xl border border-zinc-600/40 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 px-6 py-4 font-bold text-zinc-100 shadow-xl shadow-black/40 transition duration-300 hover:border-zinc-400/50 hover:from-zinc-600 hover:via-zinc-700 hover:to-zinc-900 hover:shadow-2xl hover:shadow-black/50"
>
  <ExternalLink className="h-5 w-5" />
  Open Docs.
</a>
          <a
  href="https://github.com/nguyennhando?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-4 font-bold text-black shadow-xl shadow-orange-500/30 transition hover:from-orange-400 hover:to-amber-300"
>
  <Code2 className="h-5 w-5" />
  Source Code
</a>
        </div>
      </div>

      {/* ── RIGHT: Animated slide card ── */}
      <div className="relative flex flex-col items-center">
        {/* Ambient glow behind card */}
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-cyan-400/10 blur-3xl"
        />

        {/* Card wrapper with gradient border */}
        <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] lg:max-w-none shadow-2xl shadow-cyan-500/10">
        
          
        <div className="relative overflow-hidden rounded-[1.95rem] bg-[#080d1f]" style={{ height: "720px" }}>
            <AnimatePresence mode="wait">
              <motion.div
  key={current}
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  whileHover={{ scale: 1.015 }}
  onClick={() => navigate(`/post/${slide.id}`)}
  onMouseEnter={() => clearInterval(timerRef.current)}
  onMouseLeave={startTimer}
  className="flex flex-col h-full cursor-pointer"
>
                {/* Image */}
                <div className="relative h-[360px] lg:h-[420px] shrink-0 overflow-hidden">
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1f]/60 via-transparent to-transparent" />

                  {/* Category badge — floats over image */}
                  <motion.div
                    variants={textItemVariants}
                    className="absolute left-4 top-4 flex items-center gap-2"
                  >
                    <span className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black text-black shadow-lg shadow-cyan-500/30">
                      {slide.category}
                    </span>
                    <span className="rounded-full bg-black/40 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-sm">
                      {slide.readTime}
                    </span>
                  </motion.div>
                </div>

                {/* Card text body — fixed height, overflow hidden so card never resizes */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${current}`}
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex-1 overflow-hidden p-5 sm:p-6"
                  >
                    <motion.h3
                      variants={textItemVariants}
                      className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      {slide.title}
                    </motion.h3>
                    <motion.p
                      variants={textItemVariants}
                      className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7"
                    >
                      {slide.text}
                    </motion.p>

                    {/* Tags row */}
                    <motion.div variants={textItemVariants} className="mt-4 flex flex-wrap gap-2">
                      {(slide.tags || []).slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs text-cyan-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </motion.div>
                    <motion.div
  variants={textItemVariants}
  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300"
>
  Projekt öffnen <ArrowRight className="h-4 w-4" />
</motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* ── Progress bar strip — outside AnimatePresence, always at bottom ── */}
            <div className="absolute bottom-0 left-0 right-0 flex gap-[3px] px-5 pb-5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/10"
                >
                  {idx === current && (
                    <motion.span
                      key={current}
                      className="absolute inset-y-0 left-0 rounded-full bg-cyan-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
                    />
                  )}
                  {idx < current && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400/40" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Prev / Next arrows ── */}
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
            aria-label="Vorherige Folie"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="flex items-center gap-1 text-xs text-zinc-600">
            <span className="font-bold text-zinc-400">{current + 1}</span>/{slides.length}
          </span>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
            aria-label="Nächste Folie"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   BLOG POST PAGE
══════════════════════════════════════════════ */
function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      const demoPost = demoPosts.find((item) => String(item.id) === String(id));
      if (demoPost) {
        setPost(demoPost);
        setLoading(false);
        return;
      }
      if (!supabase) {
        setPost(null);
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("posts")
        .select(
          "id,title,category,image_url,excerpt,content,tags,read_time,published,created_at,updated_at,external_link,project_status,sort_order"
        )
        .eq("id", id)
        .single();
      if (error) setPost(null);
      else setPost(data);
      setLoading(false);
    }
    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] px-4 pb-20 pt-[140px] text-center text-zinc-300">
        <Background />
        Beitrag wird geladen...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
        <Background />
        <GradientBorder gradient="from-cyan-400 via-cyan-500 to-cyan-400" rounded="rounded-3xl">
          <div className="rounded-3xl bg-[#07111f] p-10 text-center backdrop-blur-xl">
            <h1 className="text-3xl font-black">Beitrag nicht gefunden</h1>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-black"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </GradientBorder>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] px-4 pb-10 pt-[120px] text-white sm:px-6 sm:pb-20 sm:pt-[140px]">
      <Background />
      <div className="mx-auto max-w-5xl">
        {lightbox && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <button
  onClick={() => setLightbox(false)}
  className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black shadow-xl shadow-cyan-500/40 hover:bg-cyan-300 transition"
>
  <X className="h-5 w-5 stroke-[3]" />
</button>
            </motion.div>
          </div>
        )}

        <GradientBorder
          gradient="from-cyan-400 via-cyan-500 to-cyan-400"
          rounded="rounded-[2rem]"
          innerClassName="overflow-hidden rounded-[2rem] bg-[#07111f] backdrop-blur-xl"
        >
          <img
            src={post.image_url}
            alt={post.title}
            onClick={() => setLightbox(true)}
            className="h-72 w-full object-cover sm:h-[420px] cursor-zoom-in transition duration-300 hover:brightness-110"
          />
          <div className="p-6 sm:p-10">
            <div className="mb-5 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="rounded-full bg-cyan-400 px-4 py-2 font-bold text-black">
                {post.category}
              </span>
              <span>{formatDate(post.created_at)}</span>
              {post.read_time && <span>{post.read_time}</span>}
            </div>
            <h1 className="text-3xl font-black leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-8 whitespace-pre-line text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
              {post.content}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {(post.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {post.external_link && (
              <div className="mt-8">
                <a
                  href={post.external_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-4 font-bold text-cyan-300 transition hover:bg-cyan-400/20 hover:border-cyan-400/70"
                >
                  <ExternalLink className="h-5 w-5" /> Zum Projekt
                </a>
              </div>
            )}
            <Link
              to="/"
              className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-cyan-300"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </GradientBorder>
      </div>
    </div>
  );
}

function AboutWideCard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-5">
      <GradientBorder
        gradient="from-cyan-400 via-cyan-500 to-cyan-400"
        rounded="rounded-[2rem]"
        innerClassName="overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl"
      >
        <div className="grid items-stretch gap-6 p-4 sm:p-6 lg:grid-cols-2 lg:gap-8">
          <div className="grid min-h-full gap-4 lg:grid-rows-2">
  <img
    src="/my-electronics-blog/images/about-1.jpg"
    alt="Nguyen Nhan Do Technik"
    className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]"
  />

  <img
    src="/my-electronics-blog/images/about-2.jpg"
    alt="Elektronik und Entwicklung"
    className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]"
  />
</div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
              Persönlicher Weg
            </p>

            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
              Nguyen Nhan Do – Technik lernen. Erfahrung sammeln. Mich weiterentwickeln.
            </h2>

            <div className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
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
  );
}
/* ══════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════ */
function Home({ adminVisible, setAdminVisible }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [posts, setPosts] = useState(demoPosts);
  const [selectedPost, setSelectedPost] = useState(demoPosts[0]);
  const [blogImageLightbox, setBlogImageLightbox] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");
  const [editingPost, setEditingPost] = useState(createEmptyPost());
  const [editingMode, setEditingMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const hasSupabase = Boolean(supabase);

  // Build hero slides from posts
  const heroSlides = useMemo(
  () =>
    posts.slice(0, 10).map((p) => ({
  id: p.id,
  image: p.image_url,
        category: p.category,
        readTime: p.read_time || "5 Min.",
        title: p.title,
        text: p.excerpt,
        tags: Array.isArray(p.tags) ? p.tags : [],
      })),
    [posts]
  );

  function scrollToSection(id) {
    navigate(`/${id}`);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }


  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
  loadPosts();
}, [session, isAdmin]);

  useEffect(() => {
    checkAdmin();
  }, [session]);

  useEffect(() => {
    const section = location.pathname.replace("/", "");
    if (["blog", "projekte", "kontakt"].includes(section)) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [location.pathname]);

  async function checkAdmin() {
    if (!supabase || !session?.user) {
      setIsAdmin(false);
      return;
    }
    const { data, error } = await supabase.rpc("is_admin");
    if (error) {
      setIsAdmin(false);
      return;
    }
    setIsAdmin(Boolean(data));
  }

  async function loadPosts() {
  if (!supabase) return;

  setLoading(true);

  let query = supabase
    .from("posts")
    .select("*")
    .order("sort_order", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false });

  // Chỉ user thường mới filter published
  if (!isAdmin) {
    query = query.eq("published", true);
  }

  const { data, error } = await query;

  setLoading(false);

  if (data?.length) {
    setPosts(data);
    setSelectedPost(data[0]);
  }
}

  async function login(e) {
    e.preventDefault();
    if (!supabase) {
      setMessage("Supabase ist noch nicht konfiguriert. Bitte .env.local erstellen.");
      return;
    }
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    setLoading(false);
    if (error) {
      setMessage("Login fehlgeschlagen. E-Mail, Passwort oder Adminrechte prüfen.");
      return;
    }
    setLoginEmail("");
    setLoginPassword("");
    setMessage("Login erfolgreich.");
  }

  async function logout() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setIsAdmin(false);
    setMessage("Sie wurden abgemeldet.");
  }

  async function uploadImage(e) {
    const file = e.target.files[0];
    if (!file || !supabase) return;
    if (!isAdmin) {
  setMessage("Keine Berechtigung. Nur Admins dürfen Bilder hochladen.");
  return;
}
    setMessage("Bild wird hochgeladen...");
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { error } = await supabase.storage.from("blog-images").upload(fileName, file);
    if (error) {
      setMessage("Bild Upload fehlgeschlagen.");
      return;
    }
    const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
    setEditingPost((prev) => ({ ...prev, image_url: data.publicUrl }));
    setMessage("Bild erfolgreich hochgeladen.");
  }

  async function savePost(e) {
    e.preventDefault();
    if (!supabase || !isAdmin) {
      setMessage("Keine Berechtigung. Nur Admins dürfen Beiträge speichern.");
      return;
    }
    const payload = {
      title: editingPost.title.trim(),
      category: editingPost.category,
      image_url: editingPost.image_url.trim(),
      excerpt: editingPost.excerpt.trim(),
      content: editingPost.content.trim(),
      tags:
        typeof editingPost.tags === "string"
          ? editingPost.tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean)
          : editingPost.tags,
      read_time: editingPost.read_time || "5 Min.",
      published: Boolean(editingPost.published),
      external_link: editingPost.external_link?.trim() || null,
      project_status: normalizeProjectStatus(editingPost.project_status),
      sort_order: Number.isFinite(Number(editingPost.sort_order)) ? Number(editingPost.sort_order) : 100,
    };
    if (!payload.title || !payload.excerpt || !payload.content) {
      setMessage("Titel, Kurzbeschreibung und Inhalt sind Pflichtfelder.");
      return;
    }
    setLoading(true);
    const request = editingMode
      ? supabase.from("posts").update(payload).eq("id", editingPost.id).select().single()
      : supabase.from("posts").insert(payload).select().single();
    const { data, error } = await request;
    setLoading(false);
    if (error) {
      setMessage("Speichern fehlgeschlagen. Prüfen Sie Adminrechte und RLS-Policies.");
      return;
    }
    setMessage("Beitrag wurde sicher gespeichert.");
    setEditingPost(createEmptyPost());
    setEditingMode(false);
    await loadPosts();
    if (data) setSelectedPost(data);
  }

  function editPost(post) {
    setEditingMode(true);
    setAdminVisible(true);
    setEditingPost({
      ...post,
      tags: Array.isArray(post.tags) ? post.tags.join(", ") : "",
      external_link: post.external_link || "",
      project_status: normalizeProjectStatus(post.project_status),
      sort_order: Number.isFinite(Number(post.sort_order)) ? post.sort_order : 100,
    });
  }

  async function deletePost(id) {
    if (!supabase || !isAdmin) {
      setMessage("Keine Berechtigung. Nur Admins dürfen Beiträge löschen.");
      return;
    }
    const confirmed = window.confirm("Diesen Beitrag wirklich löschen?");
    if (!confirmed) return;
    setLoading(true);
    const { error } = await supabase.from("posts").delete().eq("id", id);
    setLoading(false);
    if (error) {
      setMessage("Löschen fehlgeschlagen. Prüfen Sie Adminrechte und RLS-Policies.");
      return;
    }
    setMessage("Beitrag wurde gelöscht.");
    await loadPosts();
  }

  async function movePostOrder(postId, direction) {
    if (!supabase || !isAdmin) {
      setMessage("Keine Berechtigung. Nur Admins dürfen die Reihenfolge ändern.");
      return;
    }

    const ordered = [...posts].sort((a, b) => {
      const orderA = Number.isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
      const orderB = Number.isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
      if (orderA !== orderB) return orderA - orderB;
      return new Date(b.created_at || 0) - new Date(a.created_at || 0);
    });

    const currentIndex = ordered.findIndex((post) => String(post.id) === String(postId));
    const targetIndex = currentIndex + direction;
    if (currentIndex < 0 || targetIndex < 0 || targetIndex >= ordered.length) return;

    const currentPost = ordered[currentIndex];
    const targetPost = ordered[targetIndex];
    const currentOrder = Number.isFinite(Number(currentPost.sort_order)) ? Number(currentPost.sort_order) : (currentIndex + 1) * 10;
    const targetOrder = Number.isFinite(Number(targetPost.sort_order)) ? Number(targetPost.sort_order) : (targetIndex + 1) * 10;

    setLoading(true);
    const { error: firstError } = await supabase
      .from("posts")
      .update({ sort_order: targetOrder })
      .eq("id", currentPost.id);
    const { error: secondError } = await supabase
      .from("posts")
      .update({ sort_order: currentOrder })
      .eq("id", targetPost.id);
    setLoading(false);

    if (firstError || secondError) {
      setMessage("Reihenfolge konnte nicht gespeichert werden. Prüfen Sie Adminrechte und RLS-Policies.");
      return;
    }

    setMessage("Reihenfolge wurde gespeichert.");
    await loadPosts();
  }

  const categories = ["Alle", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = useMemo(() => {
    const q = search.toLowerCase();
    return posts.filter((post) => {
      const categoryMatch = category === "Alle" || post.category === category;
      const tags = Array.isArray(post.tags) ? post.tags : [];
      const searchMatch =
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        tags.some((tag) => tag.toLowerCase().includes(q));
      return categoryMatch && searchMatch;
    });
  }, [posts, search, category]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Background />


      <main className="pt-[90px]">
        {/* ── Hero Slideshow (Split Layout) ── */}
        <HeroSlideshow
          slides={heroSlides}
          onDiscover={() => scrollToSection("blog")}
        />

       <AboutWideCard /> 

        {/* ── Feature Cards ── */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-10">
          <div className="grid grid-rows-[1fr] items-stretch gap-3 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div whileHover={{ y: -5 }} key={feature.title} className="group flex flex-col">
                  <GradientBorder
                    gradient={feature.gradient}
                    rounded="rounded-[1.4rem] sm:rounded-[2rem]"
                    className="flex-1"
                    stretch
                    innerClassName={`rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 p-4 sm:p-6 backdrop-blur-xl transition group-hover:bg-[#07111f] shadow-xl ${feature.glow}`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 sm:mb-5 sm:h-14 sm:w-14">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-black sm:text-xl">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400 sm:mt-3 sm:text-base sm:leading-7">
                      {feature.text}
                    </p>
                  </GradientBorder>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Admin Panel ── */}
        {adminVisible && (
          <section className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-md sm:px-5 sm:py-8">
            <div className="mx-auto max-w-7xl">
              <GradientBorder
                gradient="from-cyan-400 via-cyan-500 to-cyan-400"
                rounded="rounded-[2rem]"
                innerClassName="rounded-[1.95rem] bg-[#07111f] p-5 sm:p-6 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                      Sicherer Adminbereich
                    </p>
                    <h2 className="text-xl font-black sm:text-3xl">Beitragsverwaltung</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAdminVisible(false)}
                    className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10"
                  >
                    Schließen
                  </button>
                </div>

                {!hasSupabase && (
                  <div className="mb-5 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm text-yellow-200">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 shrink-0" />
                      <p>
                        Supabase ist noch nicht konfiguriert. Erstellen Sie eine{" "}
                        <b>.env.local</b> Datei mit VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY.
                      </p>
                    </div>
                  </div>
                )}

                {message && (
                  <div className="mb-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 text-sm text-zinc-200">
                    {message}
                  </div>
                )}

                {!session ? (
                  <form
                    onSubmit={login}
                    className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end"
                  >
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Admin E-Mail</label>
                      <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="admin@domain.de"
                        className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Passwort</label>
                      <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Sicheres Passwort"
                        className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                      />
                    </div>
                    <button
                      disabled={loading}
                      className="rounded-2xl bg-cyan-400 px-8 py-4 font-black text-black transition hover:bg-cyan-300 disabled:opacity-60"
                    >
                      Login
                    </button>
                  </form>
                ) : !isAdmin ? (
                  <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-red-100">
                    Sie sind angemeldet, aber dieses Konto hat keine Adminrechte. Tragen Sie die
                    User-ID in der Tabelle profiles als role = admin ein.
                    <div className="mt-4">
                      <button
                        onClick={logout}
                        className="rounded-2xl bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
                      >
                        Abmelden
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                      <div>
                        <p className="text-sm text-zinc-400">
                          Angemeldet als {session.user.email}
                        </p>
                        <p className="mt-1 font-bold text-cyan-300">
                          Adminrechte aktiv. Änderungen werden durch RLS geschützt.
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <button
                          onClick={() => {
                            setEditingPost(createEmptyPost());
                            setEditingMode(false);
                          }}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-bold transition hover:bg-white/10"
                        >
                          <Plus className="h-5 w-5" /> Neuer Beitrag
                        </button>
                        <button
                          onClick={logout}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#050816] px-5 py-3 font-bold transition hover:bg-black"
                        >
                          <LogOut className="h-5 w-5" /> Logout
                        </button>
                      </div>
                    </div>

                    <form onSubmit={savePost} className="grid gap-4 lg:grid-cols-2">
                      <input
                        value={editingPost.title}
                        onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                        placeholder="Titel des Beitrags"
                        className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                      />
                      <select
                        value={editingPost.category}
                        onChange={(e) =>
                          setEditingPost({ ...editingPost, category: e.target.value })
                        }
                        className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                      >
                        <option>Elektrotechnik</option>
                        <option>Elektrokonstruktion</option>
                        <option>Automatisierungstechnik</option>
                        <option>Steuerungstechnik</option>
                        <option>Antriebstechnik</option>
                        <option>Schaltschrankbau</option>
                        <option>Industrieautomation</option>
                        <option>SPS-Programmierung</option>
                        <option>CAD-Konstruktion</option>
                        <option>Maschinenbau</option>
                        <option>Technische Zeichnung</option>
                        <option>Mechatronik</option>
                        <option>Energietechnik</option>
                        <option>Leistungselektronik</option>
                        <option>Sensorik</option>
                        <option>Mikrocontroller</option>
                        <option>Embedded Systems</option>
                        <option>IoT</option>
                        <option>Robotik</option>
                        <option>Softwareentwicklung</option>
                        <option>Desktop-Softwareentwicklung</option>
                        <option>Technische Softwareentwicklung</option>
                      </select>

                      <select
                        value={editingPost.project_status || "done"}
                        onChange={(e) =>
                          setEditingPost({ ...editingPost, project_status: e.target.value })
                        }
                        className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                      >
                        <option value="idea">Idee / Offline</option>
                        <option value="in_progress">In Arbeit</option>
                        <option value="done">Umgesetzt</option>
                      </select>

                      <input
                        type="number"
                        value={editingPost.sort_order ?? 100}
                        onChange={(e) =>
                          setEditingPost({ ...editingPost, sort_order: e.target.value })
                        }
                        placeholder="Reihenfolge: kleine Zahl = weiter vorne"
                        className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                      />

                      <div className="lg:col-span-2">
                        <label className="mb-2 block text-sm text-zinc-400">Bild hochladen</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={uploadImage}
                          className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-400 file:px-4 file:py-2 file:font-bold file:text-black hover:file:bg-cyan-300"
                        />
                        {editingPost.image_url && (
                          <img
                            src={editingPost.image_url}
                            alt="Preview"
                            className="mt-4 h-48 w-full rounded-2xl object-cover border border-white/10"
                          />
                        )}
                      </div>

                      <input
                        value={editingPost.tags}
                        onChange={(e) => setEditingPost({ ...editingPost, tags: e.target.value })}
                        placeholder="Tags: ESP32, MQTT, Sensorik"
                        className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2"
                      />

                      <input
                        value={editingPost.external_link || ""}
                        onChange={(e) =>
                          setEditingPost({ ...editingPost, external_link: e.target.value })
                        }
                        placeholder="Externer Link (optional): https://github.com/..."
                        className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2"
                      />

                      <textarea
                        value={editingPost.excerpt}
                        onChange={(e) =>
                          setEditingPost({ ...editingPost, excerpt: e.target.value })
                        }
                        placeholder="Kurzbeschreibung"
                        className="min-h-28 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2"
                      />
                      <textarea
                        value={editingPost.content}
                        onChange={(e) =>
                          setEditingPost({ ...editingPost, content: e.target.value })
                        }
                        placeholder="Vollständiger Inhalt des Beitrags"
                        className="min-h-52 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2"
                      />
                      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 lg:col-span-2">
                        <input
                          type="checkbox"
                          checked={editingPost.published}
                          onChange={(e) =>
                            setEditingPost({ ...editingPost, published: e.target.checked })
                          }
                        />
                        Veröffentlicht
                      </label>
                      <button
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300 disabled:opacity-60 lg:col-span-2"
                      >
                        <Save className="h-5 w-5" /> Beitrag sicher speichern
                      </button>
                    </form>
                  </div>
                )}
              </GradientBorder>
            </div>
          </section>
        )}

{/* ── WARNING CARD ── */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5">
  <div className="rounded-[2rem] p-[1.5px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400">
  <div className="overflow-hidden rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl">
    <div className="grid lg:grid-cols-[0.4fr_0.6fr]">
      
      {/* LEFT IMAGE */}
      <div className="relative h-48 lg:h-auto">
        <img
          src="/my-electronics-blog/images/project-warning.jpg"
          alt="Projekt Hinweis"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
          <AlertTriangle className="h-4 w-4" />
          Wichtiger Hinweis
        </div>

        <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-3xl">
          Wichtiger Hinweis zu meinen Projekten
        </h2>

        <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
          <p>
            <span className="font-bold text-yellow-300">🚨 Hinweis:</span>{" "}
            Projekte mit der Kennzeichnung{" "}
            <span className="font-semibold text-cyan-300">
              „Konzept"
            </span>{" "}
            oder{" "}
            <span className="font-semibold text-cyan-300">
              „Konzeptprojekt"
            </span>{" "}
            befinden sich derzeit noch in der Ideen- bzw. Konzeptphase und
            wurden bisher noch nicht praktisch umgesetzt.
          </p>

          <p>
            Eine zukünftige Weiterentwicklung oder Realisierung dieser Projekte
            ist jedoch geplant.
          </p>

          <p>
            Alle anderen Projekte können über{" "}
            <span className="font-semibold text-cyan-300">
              „Beitrag lesen"
            </span>{" "}
            geöffnet werden.
          </p>

          <p>
            Am Ende der jeweiligen Projektseite befindet sich die Schaltfläche{" "}
            <span className="font-semibold text-cyan-300">
              „Zum Projekt"
            </span>
            . Dort stehen projektbezogene Dateien wie PDF-Dokumentationen,
            TIA-Portal-Projekte, AutoCAD-Dateien sowie Source Code und weitere
            technische Projektdateien zur Verfügung.
          </p>
        </div>
      </div>
        </div>
  </div>
</div>
</section>

        
        {blogImageLightbox && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 px-4 backdrop-blur-md"
            onClick={() => setBlogImageLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={blogImageLightbox.image_url}
                alt={blogImageLightbox.title}
                className="max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl"
              />
              <button
                type="button"
                onClick={() => setBlogImageLightbox(null)}
                className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black shadow-xl shadow-cyan-500/40 transition hover:bg-cyan-300"
                aria-label="Bild schließen"
              >
                <X className="h-5 w-5 stroke-[3]" />
              </button>
            </motion.div>
          </div>
        )}

{/* ── Blog Section ── */}
        <section id="blog" className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-16">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:mb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Technik Blog
              </p>
              <h2 className="mt-2 text-[1.75rem] font-black leading-[1.1] tracking-tight min-[390px]:text-[2rem] sm:mt-3 sm:text-4xl lg:text-5xl">
              Elektronikprojekte & Dokumentationen
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Nach Technologien suchen..."
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-3 pl-11 pr-4 text-sm outline-none ring-cyan-400/30 placeholder:text-zinc-500 focus:ring-4 sm:w-80 sm:text-base"
                />
              </div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-3 outline-none ring-cyan-400/30 focus:ring-4"
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {loading && <p className="mb-5 text-zinc-400">Lade Daten...</p>}

          <div className="grid auto-rows-fr gap-4 min-[620px]:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {filteredPosts.map((post) => {
              const Icon = getIcon(post.category);
              const idea = isIdeaPost(post);
              return (
                <motion.div whileHover={idea ? undefined : { y: -5 }} key={post.id} className="group flex h-full">
                  <GradientBorder
                    gradient={idea ? "from-zinc-600 via-zinc-500 to-zinc-600" : "from-cyan-400 via-cyan-500 to-cyan-400"}
                    rounded="rounded-[1.4rem] sm:rounded-[2rem]"
                    className="flex flex-1"
                    innerClassName="flex flex-1 flex-col overflow-hidden rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl min-h-[560px]"
                  >
                    <img
                      src={post.image_url}
                      alt={post.title}
                      onClick={() => setBlogImageLightbox(post)}
                      className={`h-44 w-full shrink-0 cursor-zoom-in object-cover transition duration-300 hover:brightness-110 min-[390px]:h-48 sm:h-56 ${
  idea ? "grayscale opacity-70" : ""
}`}
                    />
                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 font-black text-black">
                          <Icon className="h-3.5 w-3.5" /> {post.category}
                        </span>
                        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-bold ${getProjectStatusClasses(post.project_status)}`}>
                          {getProjectStatusLabel(post.project_status)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.created_at)}
                        </span>
                      </div>
                      <h3 className="text-lg font-black leading-tight min-[390px]:text-xl sm:text-2xl">
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {(post.tags || []).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex gap-2 pt-6 sm:gap-3">
  <Link
    to={`/post/${post.id}`}
    className="flex-1 rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-cyan-300 sm:px-5 sm:text-base"
  >
    Beitrag lesen
  </Link>
                        {isAdmin && (
                          <>
                            <button
                              type="button"
                              onClick={() => movePostOrder(post.id, -1)}
                              className="rounded-2xl border border-white/10 px-3 py-2 text-sm font-black transition hover:bg-white/10"
                              title="Weiter nach vorne"
                            >
                              ↑
                            </button>
                            <button
                              type="button"
                              onClick={() => movePostOrder(post.id, 1)}
                              className="rounded-2xl border border-white/10 px-3 py-2 text-sm font-black transition hover:bg-white/10"
                              title="Weiter nach hinten"
                            >
                              ↓
                            </button>
                            <button
                              type="button"
                              onClick={() => editPost(post)}
                              className="rounded-2xl border border-white/10 p-3 transition hover:bg-white/10"
                            >
                              <Edit3 className="h-5 w-5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => deletePost(post.id)}
                              className="rounded-2xl border border-red-500/20 p-3 text-red-400 transition hover:bg-red-500/10"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
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
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Galerie</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Projektbilder</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <GradientBorder
              gradient="from-cyan-400 via-cyan-500 to-cyan-400"
              rounded="rounded-[2rem]"
              className="group lg:col-span-2"
              innerClassName="overflow-hidden rounded-[1.95rem] bg-[#07111f]"
            >
              <img
                src="/my-electronics-blog/images/finance-main.jpg"
                alt={selectedPost.title}
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </GradientBorder>
            <div className="grid gap-6">
              <GradientBorder
                gradient="from-cyan-400 via-cyan-500 to-cyan-400"
                rounded="rounded-[2rem]"
                className="group"
                innerClassName="overflow-hidden rounded-[1.95rem] bg-[#07111f]"
              >
                <img
                  src="/my-electronics-blog/images/finance-chart.jpg"
                  alt="Diagramm"
                  className="h-[247px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </GradientBorder>
              <GradientBorder
                gradient="from-cyan-400 via-cyan-500 to-cyan-400"
                rounded="rounded-[2rem]"
                className="group"
                innerClassName="overflow-hidden rounded-[1.95rem] bg-[#07111f]"
              >
                <img
                  src="/my-electronics-blog/images/finance-dashboard.jpg"
                  alt="Dashboard"
                  className="h-[247px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </GradientBorder>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="kontakt" className="mx-auto max-w-7xl px-4 pb-12 sm:px-5 sm:pb-24">
          <div className="rounded-[1.5rem] bg-cyan-400 p-4 text-black shadow-2xl shadow-cyan-500/30 sm:rounded-[2.5rem] sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest">Kontakt</p>
                <h2 className="mt-3 text-[1.85rem] font-black leading-tight min-[390px]:text-3xl sm:mt-4 sm:text-5xl lg:text-6xl">
                  Zusammenarbeit an modernen Elektronikprojekten.
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/80 sm:mt-6 sm:text-lg sm:leading-9">
                  Sie suchen Unterstützung für Embedded-Systeme, Sensorik, Robotik oder industrielle
                  Automatisierung? Kontaktieren Sie mich für technische Zusammenarbeit oder
                  individuelle Entwicklungen.
                </p>
              </div>
              <div className="rounded-[1.25rem] sm:rounded-[2rem] p-[1.5px] bg-gradient-to-br from-cyan-400/60 via-cyan-500/40 to-cyan-400/60">
                <div className="rounded-[1.2rem] sm:rounded-[1.95rem] bg-[#050816] p-3 sm:p-8 text-white">
                  <div className="grid h-full gap-5">
                    {[
                      { icon: Mail, label: "E-Mail", value: "donguyennhan.de@gmail.com" },
                      { icon: Globe, label: "Standort", value: "Deutschland" },
                      {
                        icon: CircuitBoard,
                        label: "Schwerpunkt",
                        value: "IoT · Robotik · Embedded · Automatisierung",
                      },
                      {
                        icon: Wrench,
                        label: "Sicherheit",
                        value: "Auth · RLS · Geschützte Adminrechte",
                      },
                    ].map(({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 p-3 sm:gap-4 sm:p-4"
                      >
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
          <Link to="/impressum" className="transition hover:text-cyan-400">
            Impressum
          </Link>
          <Link to="/datenschutz" className="transition hover:text-cyan-400">
            Datenschutz
          </Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          © 2026 ElektronikLab — Moderne Elektronik- und Automatisierungsprojekte.
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();
  const [adminVisible, setAdminVisible] = useState(false);

  function openAdminPanel() {
    navigate("/");
    setAdminVisible(true);
  }

  const homeElement = <Home adminVisible={adminVisible} setAdminVisible={setAdminVisible} />;

  return (
    <>
      <SiteHeader onAdminClick={openAdminPanel} />
      <Routes>
        <Route path="/" element={homeElement} />
        <Route path="/blog" element={homeElement} />
        <Route path="/projekte" element={homeElement} />
        <Route path="/kontakt" element={homeElement} />
        <Route path="/post/:id" element={<BlogPostPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <CookieBanner />
    </>
  );
}