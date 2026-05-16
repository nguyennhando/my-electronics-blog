import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CircuitBoard,
  Cpu,
  RadioTower,
  Bot,
  Gauge,
  Zap,
  Search,
  Menu,
  X,
  CalendarDays,
  User,
  ArrowRight,
  Eye,
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
} from "lucide-react";

const initialPosts = [
  {
    id: 1,
    title: "Intelligente Smart-Home-Steuerung mit ESP32 und MQTT",
    category: "IoT",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Entwicklung einer modularen Smart-Home-Plattform zur Steuerung von Licht, Sensoren, Energieverbrauch und Sicherheitsfunktionen.",
    content:
      "Dieses Projekt basiert auf einem ESP32-Mikrocontroller und verwendet MQTT für die Kommunikation zwischen Sensoren, Relais und Dashboard. Die Plattform kann Temperatur, Luftfeuchtigkeit, Bewegungen und Energieverbrauch überwachen. Zusätzlich wurde eine mobile Weboberfläche integriert, um Lampen, Steckdosen und Lüfter in Echtzeit zu steuern. Besonderer Fokus lag auf Stabilität, geringer Latenz und einfacher Erweiterbarkeit.",
    tags: ["ESP32", "MQTT", "Smart Home", "Sensorik"],
    date: "14. Mai 2026",
    readTime: "8 Min.",
    icon: RadioTower,
  },
  {
    id: 2,
    title: "Automatisiertes Energie-Monitoring für Schaltschrankanlagen",
    category: "Messtechnik",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Messsystem zur Analyse von Spannung, Strom, Leistung und Netzqualität in industriellen Verteilungen.",
    content:
      "Das System nutzt Stromsensoren, Spannungsmessung und digitale Signalverarbeitung zur kontinuierlichen Analyse elektrischer Verbraucher. Die Daten werden über RS485 übertragen und in einem Dashboard visualisiert. Zusätzlich können Grenzwerte definiert werden, um Warnmeldungen oder automatische Abschaltungen auszulösen.",
    tags: ["Monitoring", "RS485", "Leistung", "Elektronik"],
    date: "08. Mai 2026",
    readTime: "6 Min.",
    icon: Gauge,
  },
  {
    id: 3,
    title: "Mini-Roboter mit Hinderniserkennung und Motorsteuerung",
    category: "Robotik",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Kompakter Lernroboter mit Ultraschallsensor, PWM-Motorregelung und autonomer Navigation.",
    content:
      "Der Roboter erkennt Hindernisse mit einem Ultraschallsensor und passt die Fahrtrichtung automatisch an. Die Motoren werden über PWM geregelt und ein Mikrocontroller übernimmt die Entscheidungslogik. Das Projekt eignet sich hervorragend zum Lernen von Embedded-Programmierung, Sensorik und Robotik.",
    tags: ["Robotik", "PWM", "Arduino", "Motorsteuerung"],
    date: "29. April 2026",
    readTime: "5 Min.",
    icon: Bot,
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
    title: "Sicherheit & Stabilität",
    text: "Robuste Elektronik mit Schutzschaltungen, Fehleranalyse und zuverlässigem Betrieb.",
  },
  {
    icon: MonitorSmartphone,
    title: "Moderne Dashboards",
    text: "Responsive Benutzeroberflächen zur Überwachung und Steuerung in Echtzeit.",
  },
];

function createEmptyPost() {
  return {
    id: Date.now(),
    title: "",
    category: "IoT",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    excerpt: "",
    content: "",
    tags: "",
    date: new Date().toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    readTime: "5 Min.",
    icon: Cpu,
  };
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminVisible, setAdminVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(initialPosts[0]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");
  const [editingPost, setEditingPost] = useState(createEmptyPost());
  const [editingMode, setEditingMode] = useState(false);

  const categories = ["Alle", ...new Set(posts.map((p) => p.category))];

  const filteredPosts = useMemo(() => {
    const q = search.toLowerCase();
    return posts.filter((post) => {
      const categoryMatch = category === "Alle" || post.category === category;
      const searchMatch =
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return categoryMatch && searchMatch;
    });
  }, [posts, search, category]);

  function login(e) {
    e.preventDefault();

    if (password === "admin123") {
      setIsAdmin(true);
      setPassword("");
    } else {
      alert("Falsches Passwort. Demo-Passwort: admin123");
    }
  }

  function savePost(e) {
    e.preventDefault();

    const finalPost = {
      ...editingPost,
      tags:
        typeof editingPost.tags === "string"
          ? editingPost.tags
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
          : editingPost.tags,
    };

    if (editingMode) {
      setPosts((prev) => prev.map((p) => (p.id === finalPost.id ? finalPost : p)));
      setSelectedPost(finalPost);
    } else {
      setPosts((prev) => [finalPost, ...prev]);
      setSelectedPost(finalPost);
    }

    setEditingPost(createEmptyPost());
    setEditingMode(false);
  }

  function editPost(post) {
    setEditingMode(true);
    setAdminVisible(true);
    setEditingPost({
      ...post,
      tags: post.tags.join(", "),
    });
  }

  function deletePost(id) {
    const next = posts.filter((p) => p.id !== id);
    setPosts(next);
    if (next.length > 0) {
      setSelectedPost(next[0]);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-black shadow-xl shadow-cyan-500/30">
              <CircuitBoard className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-black">ElektronikLab</h1>
              <p className="text-xs text-zinc-400">Moderne Elektronik- und Automatisierungsprojekte</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#blog" className="text-sm text-zinc-300 transition hover:text-cyan-300">Blog</a>
            <a href="#projekte" className="text-sm text-zinc-300 transition hover:text-cyan-300">Projekte</a>
            <a href="#kontakt" className="text-sm text-zinc-300 transition hover:text-cyan-300">Kontakt</a>
            <button
              onClick={() => setAdminVisible((v) => !v)}
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              Admin
            </button>
          </div>

          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            <div className="grid gap-2">
              <a href="#blog" className="rounded-xl px-3 py-2 hover:bg-white/10">Blog</a>
              <a href="#projekte" className="rounded-xl px-3 py-2 hover:bg-white/10">Projekte</a>
              <a href="#kontakt" className="rounded-xl px-3 py-2 hover:bg-white/10">Kontakt</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Zap className="h-4 w-4" /> Zukunft der Elektronik und Automatisierung
            </div>

            <h2 className="max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
              Moderne Elektronikprojekte mit Fokus auf Innovation und Technik.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
              Dieser Blog dokumentiert reale Elektronikprojekte, Embedded-Systeme, Sensorik, Robotik und Automatisierungslösungen. Jeder Beitrag erklärt Architektur, Hardware, Software und technische Herausforderungen im Detail.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#blog" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-bold text-black shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300">
                Projekte entdecken <ArrowRight className="h-5 w-5" />
              </a>

              <button
                onClick={() => setAdminVisible(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-4 font-bold transition hover:bg-white/10"
              >
                Admin öffnen <Lock className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                ["40+", "Projekte"],
                ["15", "Technologien"],
                ["100%", "Eigene Entwicklung"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <p className="text-3xl font-black text-cyan-300">{value}</p>
                  <p className="mt-2 text-sm text-zinc-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
              <img src={selectedPost.image} alt={selectedPost.title} className="h-[420px] w-full object-cover" />
              <div className="p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-black">{selectedPost.category}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">{selectedPost.readTime}</span>
                </div>
                <h3 className="text-3xl font-black">{selectedPost.title}</h3>
                <p className="mt-4 leading-8 text-zinc-300">{selectedPost.excerpt}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.06]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {adminVisible && (
          <section className="mx-auto max-w-7xl px-5 py-14">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6 backdrop-blur-xl">
              {!isAdmin ? (
                <form onSubmit={login} className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="mb-2 text-sm font-bold text-cyan-300">Geschützter Admin-Bereich</p>
                    <input
                      type="password"
                      placeholder="Passwort eingeben"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                    />
                  </div>
                  <button className="rounded-2xl bg-cyan-400 px-8 py-4 font-black text-black transition hover:bg-cyan-300">
                    Login
                  </button>
                </form>
              ) : (
                <div>
                  <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                    <div>
                      <p className="text-sm font-bold text-cyan-300">Admin Dashboard</p>
                      <h3 className="text-3xl font-black">Projektbeiträge verwalten</h3>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setEditingPost(createEmptyPost());
                          setEditingMode(false);
                        }}
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-bold transition hover:bg-white/10"
                      >
                        <Plus className="h-5 w-5" /> Neuer Beitrag
                      </button>

                      <button
                        onClick={() => setIsAdmin(false)}
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#050816] px-5 py-3 font-bold transition hover:bg-black"
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
                      onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                      className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4"
                    >
                      <option>IoT</option>
                      <option>Robotik</option>
                      <option>Messtechnik</option>
                      <option>Embedded</option>
                    </select>

                    <input
                      value={editingPost.image}
                      onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                      placeholder="Bild URL"
                      className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none ring-cyan-400/30 focus:ring-4 lg:col-span-2"
                    />

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

                    <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300 lg:col-span-2">
                      <Save className="h-5 w-5" /> Beitrag speichern
                    </button>
                  </form>
                </div>
              )}
            </div>
          </section>
        )}

        <section id="blog" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">Technik Blog</p>
              <h2 className="mt-3 text-4xl font-black sm:text-6xl">Elektronikprojekte & Dokumentationen</h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Nach Technologien suchen..."
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-3 pl-11 pr-4 outline-none ring-cyan-400/30 placeholder:text-zinc-500 focus:ring-4 sm:w-80"
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post) => (
              <motion.article
                whileHover={{ y: -5 }}
                key={post.id}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              >
                <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="rounded-full bg-cyan-400 px-3 py-1 font-black text-black">{post.category}</span>
                    <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {post.date}</span>
                  </div>

                  <h3 className="text-2xl font-black leading-tight">{post.title}</h3>

                  <p className="mt-4 line-clamp-3 leading-7 text-zinc-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="flex-1 rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-black transition hover:bg-cyan-300"
                    >
                      Beitrag lesen
                    </button>

                    {isAdmin && (
                      <>
                        <button
                          onClick={() => editPost(post)}
                          className="rounded-2xl border border-white/10 p-3 transition hover:bg-white/10"
                        >
                          <Edit3 className="h-5 w-5" />
                        </button>

                        <button
                          onClick={() => deletePost(post.id)}
                          className="rounded-2xl border border-red-500/20 p-3 text-red-400 transition hover:bg-red-500/10"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projekte" className="mx-auto max-w-6xl px-5 py-20">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              <img src={selectedPost.image} alt={selectedPost.title} className="h-full min-h-[450px] w-full object-cover" />

              <div className="p-8 lg:p-12">
                <div className="mb-4 flex flex-wrap gap-3 text-sm text-zinc-400">
                  <span className="inline-flex items-center gap-2"><User className="h-4 w-4" /> ElektronikLab</span>
                  <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {selectedPost.date}</span>
                </div>

                <h2 className="text-4xl font-black leading-tight lg:text-5xl">
                  {selectedPost.title}
                </h2>

                <p className="mt-8 text-lg leading-9 text-zinc-300">
                  {selectedPost.content}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-black/30 p-5">
                    <Layers3 className="mb-3 h-6 w-6 text-cyan-300" />
                    <p className="text-sm text-zinc-400">Architektur</p>
                    <p className="mt-1 font-bold">Modular & Erweiterbar</p>
                  </div>

                  <div className="rounded-2xl bg-black/30 p-5">
                    <Server className="mb-3 h-6 w-6 text-cyan-300" />
                    <p className="text-sm text-zinc-400">Kommunikation</p>
                    <p className="mt-1 font-bold">Echtzeit Datenübertragung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-7xl px-5 pb-24">
          <div className="rounded-[2.5rem] bg-cyan-400 p-8 text-black shadow-2xl shadow-cyan-500/30 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest">Kontakt</p>
                <h2 className="mt-4 text-4xl font-black sm:text-6xl">
                  Zusammenarbeit an modernen Elektronikprojekten.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-9 text-black/80">
                  Sie suchen Unterstützung für Embedded-Systeme, Sensorik, Robotik oder industrielle Automatisierung? Kontaktieren Sie mich für technische Zusammenarbeit oder individuelle Entwicklungen.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#050816] p-8 text-white">
                <div className="grid gap-5">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                    <Mail className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm text-zinc-400">E-Mail</p>
                      <p className="font-bold">kontakt@elektroniklab.de</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                    <Phone className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm text-zinc-400">Telefon</p>
                      <p className="font-bold">+49 176 12345678</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                    <CircuitBoard className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm text-zinc-400">GitHub</p>
                      <p className="font-bold">github.com/elektroniklab</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                    <Wrench className="h-6 w-6 text-cyan-300" />
                    <div>
                      <p className="text-sm text-zinc-400">Fachbereiche</p>
                      <p className="font-bold">IoT · Robotik · Embedded · Automatisierung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">
        © 2026 ElektronikLab — Moderne Elektronik- und Automatisierungsprojekte.
      </footer>
    </div>
  );
}
