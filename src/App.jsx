import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import CookieBanner from "./components/CookieBanner";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import {
  CircuitBoard,
  Cpu,
  RadioTower,
  Bot,
  Gauge,
  Search,
  Menu,
  X,
  CalendarDays,
  User,
  ArrowRight,
  Lock,
  Save,
  Trash2,
  Edit3,
  Plus,
  LogOut,
  ShieldCheck,
  Layers3,
  Wrench,
  Mail,
  Phone,
  MonitorSmartphone,
  Workflow,
  Server,
  AlertTriangle,
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
  },
];

const features = [
  {
    icon: Cpu,
    title: "Embedded Entwicklung",
    text: "Firmware, Mikrocontroller, Echtzeitsteuerung und hardwarenahe Programmierung.",
  },
  {
    icon: Workflow,
    title: "Automatisierung",
    text: "Steuerungssysteme, industrielle Prozesse und intelligente Logik für moderne Anlagen.",
  },
  {
    icon: ShieldCheck,
    title: "Sichere Datenverwaltung",
    text: "Adminzugriff über Supabase Auth und Row Level Security statt unsicherem Frontend-Passwort.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile First Design",
    text: "Responsive Benutzeroberfläche für Smartphone, Tablet und Desktop.",
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
  };
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.12) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20px 20px, rgba(34,211,238,.9) 1.5px, transparent 2px), radial-gradient(circle at 80px 80px, rgba(59,130,246,.9) 1.5px, transparent 2px)",
          backgroundSize: "120px 120px",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-pattern" width="180" height="180" patternUnits="userSpaceOnUse">
            <path
              d="M20 40 H80 V90 H140 M40 140 H100 V110 H160 M30 80 H60 M120 30 V70 M90 130 H150"
              fill="none"
              stroke="rgba(34,211,238,.75)"
              strokeWidth="1.5"
            />
            <circle cx="20" cy="40" r="4" fill="rgba(34,211,238,.75)" />
            <circle cx="80" cy="90" r="4" fill="rgba(34,211,238,.75)" />
            <circle cx="140" cy="90" r="4" fill="rgba(34,211,238,.75)" />
            <circle cx="160" cy="110" r="4" fill="rgba(59,130,246,.75)" />
            <circle cx="120" cy="30" r="4" fill="rgba(59,130,246,.75)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 via-[#050816]/85 to-[#050816]" />
      <div className="absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/25 blur-3xl sm:h-[600px] sm:w-[600px]" />
      <div className="absolute bottom-[-220px] right-[-180px] h-[420px] w-[420px] rounded-full bg-blue-600/25 blur-3xl sm:h-[600px] sm:w-[600px]" />
    </div>
  );
}

function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

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
        .select("id,title,category,image_url,excerpt,content,tags,read_time,published,created_at,updated_at")
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
      <div className="min-h-screen bg-[#050816] px-4 py-20 text-center text-zinc-300">
        <Background />
        Beitrag wird geladen...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
        <Background />
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl">
          <h1 className="text-3xl font-black">Beitrag nicht gefunden</h1>
          <Link to="/" className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-black">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] px-4 py-10 text-white sm:px-6 sm:py-20">
      <Background />
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
        <img src={post.image_url} alt={post.title} className="h-72 w-full object-cover sm:h-[420px]" />

        <div className="p-6 sm:p-10">
          <div className="mb-5 flex flex-wrap gap-3 text-sm text-zinc-400">
            <span className="rounded-full bg-cyan-400 px-4 py-2 font-bold text-black">{post.category}</span>
            <span>{formatDate(post.created_at)}</span>
            {post.read_time && <span>{post.read_time}</span>}
          </div>

          <h1 className="text-3xl font-black leading-tight sm:text-5xl">{post.title}</h1>

          <p className="mt-8 whitespace-pre-line text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
            {post.content}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {(post.tags || []).map((tag) => (
              <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                #{tag}
              </span>
            ))}
          </div>

          <Link to="/" className="mt-10 inline-flex rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-cyan-300">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminVisible, setAdminVisible] = useState(false);
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [posts, setPosts] = useState(demoPosts);
  const [selectedPost, setSelectedPost] = useState(demoPosts[0]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");
  const [editingPost, setEditingPost] = useState(createEmptyPost());
  const [editingMode, setEditingMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const heroSlides = [
    {
      image: posts[0]?.image_url || demoPosts[0].image_url,
      category: posts[0]?.category || "IoT",
      readTime: posts[0]?.read_time || "5 Min.",
      title: posts[0]?.title || "KI-basierte Qualitätskontrolle",
      text: posts[0]?.excerpt || "Automatische Fehlererkennung mit moderner KI.",
    },
    {
      image: posts[1]?.image_url || demoPosts[1].image_url,
      category: posts[1]?.category || "Robotik",
      readTime: posts[1]?.read_time || "6 Min.",
      title: posts[1]?.title || "Industrieautomation",
      text: posts[1]?.excerpt || "SPS-Steuerung und Förderbandautomatisierung.",
    },
    {
      image: posts[2]?.image_url || demoPosts[2].image_url,
      category: posts[2]?.category || "Embedded",
      readTime: posts[2]?.read_time || "8 Min.",
      title: posts[2]?.title || "ESP32 Smart Home",
      text: posts[2]?.excerpt || "MQTT, Sensorik und Echtzeitüberwachung.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const hasSupabase = Boolean(supabase);

  function scrollToSection(id) {
    navigate(`/${id}`);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  function closeMobileAndScroll(id) {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 50);
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
  }, [session]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

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

    const { data, error } = await supabase
      .from("posts")
      .select("id,title,category,image_url,excerpt,content,tags,read_time,published,created_at,updated_at")
      .order("created_at", { ascending: false });

    setLoading(false);

    if (error) {
      setMessage("Beiträge konnten nicht geladen werden. Prüfen Sie Supabase und RLS-Policies.");
      return;
    }

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

  setMessage("Bild wird hochgeladen...");

  const fileExt = file.name.split(".").pop();

  const fileName = `${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage
    .from("blog-images")
    .upload(fileName, file);

  if (error) {
    setMessage("Bild Upload fehlgeschlagen.");
    return;
  }

  const { data } = supabase.storage
    .from("blog-images")
    .getPublicUrl(fileName);

  setEditingPost((prev) => ({
    ...prev,
    image_url: data.publicUrl,
  }));

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

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-black shadow-lg shadow-cyan-500/30 sm:h-12 sm:w-12">
              <CircuitBoard className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-base font-black text-white sm:text-xl">ElektronikLab</h1>
              <p className="max-w-[190px] text-[10px] leading-tight text-zinc-400 sm:max-w-none sm:text-xs">
                Sichere Elektronik- und Automatisierungsprojekte
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <button type="button" onClick={() => scrollToSection("blog")} className="text-sm text-zinc-300 transition hover:text-cyan-300">
              Blog
            </button>
            <button type="button" onClick={() => scrollToSection("projekte")} className="text-sm text-zinc-300 transition hover:text-cyan-300">
              Projekte
            </button>
            <button type="button" onClick={() => scrollToSection("kontakt")} className="text-sm text-zinc-300 transition hover:text-cyan-300">
              Kontakt
            </button>
            <button
              type="button"
              onClick={() => setAdminVisible(true)}
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              Admin
            </button>
          </div>

          <button
            type="button"
            className="rounded-xl border border-white/10 p-2 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            <div className="grid gap-2">
              <button type="button" onClick={() => closeMobileAndScroll("blog")} className="rounded-xl px-3 py-2 text-left hover:bg-white/10">
                Blog
              </button>
              <button type="button" onClick={() => closeMobileAndScroll("projekte")} className="rounded-xl px-3 py-2 text-left hover:bg-white/10">
                Projekte
              </button>
              <button type="button" onClick={() => closeMobileAndScroll("kontakt")} className="rounded-xl px-3 py-2 text-left hover:bg-white/10">
                Kontakt
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setAdminVisible(true);
                }}
                className="rounded-xl px-3 py-2 text-left hover:bg-white/10"
              >
                Admin
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-300 sm:px-4 sm:text-sm">
              <ShieldCheck className="h-4 w-4" /> Geschützter Adminbereich mit Supabase Auth
            </div>

            <h2 className="max-w-4xl text-[2.05rem] font-black leading-[1.08] tracking-tight min-[390px]:text-[2.35rem] sm:text-5xl lg:text-7xl">
              Sichere Elektronikprojekte mit moderner Blog-Verwaltung.
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-9">
              Dieser Blog dokumentiert reale Elektronikprojekte, Embedded-Systeme, Sensorik, Robotik und Automatisierungslösungen. Beiträge werden über einen geschützten Adminzugang verwaltet und sicher in Supabase gespeichert.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("blog")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 text-sm font-bold text-black shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                Projekte entdecken <ArrowRight className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => setAdminVisible(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm font-bold transition hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                Admin öffnen <Lock className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mx-auto w-full max-w-md overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl sm:max-w-none sm:rounded-[2rem]">
                <img
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  className="h-52 w-full object-cover min-[390px]:h-60 sm:h-[420px]"
                />

                <div className="p-4 sm:p-7">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-black">
                      {heroSlides[currentSlide].category}
                    </span>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">
                      {heroSlides[currentSlide].readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-black leading-tight sm:text-3xl">
                    {heroSlides[currentSlide].title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-300 sm:mt-4 sm:text-base sm:leading-8">
                    {heroSlides[currentSlide].text}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-5 flex justify-center gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index ? "w-8 bg-cyan-400" : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-10">
          <div className="grid gap-3 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.06] sm:rounded-[2rem] sm:p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 sm:mb-5 sm:h-14 sm:w-14">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-black sm:text-xl">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400 sm:mt-3 sm:text-base sm:leading-7">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {adminVisible && (
          <section className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-md sm:px-5 sm:py-8">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/20 bg-[#07111f] p-5 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Sicherer Adminbereich</p>
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
                      Supabase ist noch nicht konfiguriert. Erstellen Sie eine <b>.env.local</b> Datei mit VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY.
                    </p>
                  </div>
                </div>
              )}

              {message && <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-zinc-200">{message}</div>}

              {!session ? (
                <form onSubmit={login} className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
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
                  <button disabled={loading} className="rounded-2xl bg-cyan-400 px-8 py-4 font-black text-black transition hover:bg-cyan-300 disabled:opacity-60">
                    Login
                  </button>
                </form>
              ) : !isAdmin ? (
                <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-red-100">
                  Sie sind angemeldet, aber dieses Konto hat keine Adminrechte. Tragen Sie die User-ID in der Tabelle profiles als role = admin ein.
                  <div className="mt-4">
                    <button onClick={logout} className="rounded-2xl bg-white/10 px-5 py-3 font-bold hover:bg-white/15">
                      Abmelden
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                    <div>
                      <p className="text-sm text-zinc-400">Angemeldet als {session.user.email}</p>
                      <p className="mt-1 font-bold text-cyan-300">Adminrechte aktiv. Änderungen werden durch RLS geschützt.</p>
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

                      <button onClick={logout} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#050816] px-5 py-3 font-bold transition hover:bg-black">
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
                      onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                      className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                    >
                      <option>IoT</option>
                      <option>Robotik</option>
                      <option>Messtechnik</option>
                      <option>Embedded</option>
                    </select>

                   <div className="lg:col-span-2">
  <label className="mb-2 block text-sm text-zinc-400">
    Bild hochladen
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={uploadImage}
    className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white
    file:mr-4
    file:rounded-xl
    file:border-0
    file:bg-cyan-400
    file:px-4
    file:py-2
    file:font-bold
    file:text-black
    hover:file:bg-cyan-300"
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

                    <textarea
                      value={editingPost.excerpt}
                      onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                      placeholder="Kurzbeschreibung"
                      className="min-h-28 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2"
                    />

                    <textarea
                      value={editingPost.content}
                      onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                      placeholder="Vollständiger Inhalt des Beitrags"
                      className="min-h-52 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2"
                    />

                    <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 lg:col-span-2">
                      <input
                        type="checkbox"
                        checked={editingPost.published}
                        onChange={(e) => setEditingPost({ ...editingPost, published: e.target.checked })}
                      />
                      Veröffentlicht
                    </label>

                    <button disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300 disabled:opacity-60 lg:col-span-2">
                      <Save className="h-5 w-5" /> Beitrag sicher speichern
                    </button>
                  </form>
                </div>
              )}
            </div>
          </section>
        )}

        <section id="blog" className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-16">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:mb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Technik Blog</p>
              <h2 className="mt-2 text-[1.85rem] font-black leading-tight min-[390px]:text-3xl sm:mt-3 sm:text-5xl lg:text-6xl">Elektronikprojekte & Dokumentationen</h2>
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
                {categories.map((currentCategory) => (
                  <option key={currentCategory}>{currentCategory}</option>
                ))}
              </select>
            </div>
          </div>

          {loading && <p className="mb-5 text-zinc-400">Lade Daten...</p>}

          <div className="grid auto-rows-fr gap-4 min-[620px]:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {filteredPosts.map((post) => {
              const Icon = getIcon(post.category);

              return (
                <motion.article
                  whileHover={{ y: -5 }}
                  key={post.id}
                  className="flex h-full min-h-[560px] flex-col overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:rounded-[2rem]"
                >
                  <img src={post.image_url} alt={post.title} className="h-44 w-full shrink-0 object-cover min-[390px]:h-48 sm:h-56" />

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                      <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 font-black text-black">
                        <Icon className="h-3.5 w-3.5" /> {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.created_at)}
                      </span>
                    </div>

                    <h3 className="text-lg font-black leading-tight min-[390px]:text-xl sm:text-2xl">{post.title}</h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">{post.excerpt}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {(post.tags || []).map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
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
                          <button type="button" onClick={() => editPost(post)} className="rounded-2xl border border-white/10 p-3 transition hover:bg-white/10">
                            <Edit3 className="h-5 w-5" />
                          </button>

                          <button type="button" onClick={() => deletePost(post.id)} className="rounded-2xl border border-red-500/20 p-3 text-red-400 transition hover:bg-red-500/10">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="projekte" className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-20">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:rounded-[2.5rem]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">

  <img
    src={selectedPost.image_url}
    alt={selectedPost.title}
    className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[560px]"
  />

  <div className="p-6 sm:p-10 lg:p-14">

    <div className="mb-5 flex flex-wrap gap-3 text-sm text-zinc-400">
      <span className="inline-flex items-center gap-2">
        <User className="h-4 w-4" />
        ElektronikLab
      </span>

      <span className="inline-flex items-center gap-2">
        <CalendarDays className="h-4 w-4" />
        {formatDate(selectedPost.created_at)}
      </span>
    </div>

    <h2 className="max-w-5xl text-3xl font-black leading-tight sm:text-5xl">
      {selectedPost.title}
    </h2>

    <p className="mt-8 max-w-5xl whitespace-pre-line text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
      {selectedPost.content}
    </p>

    <div className="mt-10 flex flex-wrap gap-3">
      {(selectedPost.tags || []).map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300"
        >
          #{tag}
        </span>
      ))}
    </div>

    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-2xl bg-black/30 p-5">
        <Layers3 className="mb-3 h-6 w-6 text-cyan-300" />
        <p className="text-sm text-zinc-400">
          Architektur
        </p>
        <p className="mt-1 font-bold">
          Modular & Erweiterbar
        </p>
      </div>

      <div className="rounded-2xl bg-black/30 p-5">
        <Server className="mb-3 h-6 w-6 text-cyan-300" />
        <p className="text-sm text-zinc-400">
          Daten
        </p>
        <p className="mt-1 font-bold">
          Geschützt durch RLS
        </p>
      </div>
    </div>

  </div>
</div>
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-7xl px-4 pb-12 sm:px-5 sm:pb-24">
          <div className="rounded-[1.5rem] bg-cyan-400 p-4 text-black shadow-2xl shadow-cyan-500/30 sm:rounded-[2.5rem] sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest">Kontakt</p>
                <h2 className="mt-3 text-[1.85rem] font-black leading-tight min-[390px]:text-3xl sm:mt-4 sm:text-5xl lg:text-6xl">
                  Zusammenarbeit an modernen Elektronikprojekten.
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/80 sm:mt-6 sm:text-lg sm:leading-9">
                  Sie suchen Unterstützung für Embedded-Systeme, Sensorik, Robotik oder industrielle Automatisierung? Kontaktieren Sie mich für technische Zusammenarbeit oder individuelle Entwicklungen.
                </p>
              </div>

              <div className="rounded-[1.25rem] bg-[#050816] p-3 text-white sm:rounded-[2rem] sm:p-8">
                <div className="grid gap-5">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-3 sm:gap-4 sm:p-4">
                    <Mail className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm text-zinc-400">E-Mail</p>
                      <p className="break-all text-sm font-bold sm:text-base">kontakt@elektroniklab.de</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-3 sm:gap-4 sm:p-4">
                    <Phone className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm text-zinc-400">Telefon</p>
                      <p className="text-sm font-bold sm:text-base">+49 176 12345678</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-3 sm:gap-4 sm:p-4">
                    <CircuitBoard className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm text-zinc-400">Schwerpunkt</p>
                      <p className="text-sm font-bold sm:text-base">IoT · Robotik · Embedded · Automatisierung</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 p-3 sm:gap-4 sm:p-4">
                    <Wrench className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm text-zinc-400">Sicherheit</p>
                      <p className="text-sm font-bold sm:text-base">Auth · RLS · Geschützte Adminrechte</p>
                    </div>
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

        <p className="mt-4 text-xs text-zinc-500">© 2026 ElektronikLab — Moderne Elektronik- und Automatisierungsprojekte.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/projekte" element={<Home />} />
        <Route path="/kontakt" element={<Home />} />
        <Route path="/post/:id" element={<BlogPostPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <CookieBanner />
    </>
  );
}
