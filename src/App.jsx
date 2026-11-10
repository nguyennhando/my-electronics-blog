import CookieBanner from "./components/CookieBanner";
import { createElement, useEffect, useMemo, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CONTENT_POSTS, GALLERY_IMAGES, HOME_CONTENTS, PERSONAL_WAY, PERSONAL_WAYS, SITE_SETTINGS, getLocalizedContentPosts, getLocalizedHomeContent, getLocalizedPersonalWay, getSiteTextOverrides, getTranslationLanguages } from "./lib/posts";
import { getWbText, getWbSkills } from "./lib/werkbankText";
import { COOKIE_TEXT, WB_TEXT_GROUPS, UI_TEXT_GROUPS, LONG_TEXT_KEYS, getWbDefaults } from "./lib/siteTexts";

import {
  CircuitBoard, Cpu, RadioTower, Bot, Globe, Gauge, Search, Menu, X, Pause, Play,
  CalendarDays, ArrowRight, ShieldCheck,
  Wrench, Mail, MonitorSmartphone, AlertTriangle, ExternalLink,
  ChevronLeft, ChevronRight, Code2, ArrowLeft, Clock, Download, FileText, Pencil, Save,
  BookOpen, Library, FlaskConical, GraduationCap, ChevronUp, ChevronDown,
  LogIn, LogOut, LockKeyhole, KeyRound,
  LayoutDashboard, Newspaper, ListOrdered, PenLine, Images, Route, Palette, Settings, Plus, Upload, Ellipsis, Trash2, Check,
} from "lucide-react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const LANGUAGES = ["de", "en", "vi"];
const UI_TEXT = {
  de: {
    tagline: "Technik · Entwicklung · Lernen", gallery: "Galerie", contact: "Kontakt", knowledge: "Wissen & Forschung",
    projects: "Projekte", discover: "Projekte entdecken", openProject: "Projekt öffnen", readPost: "Beitrag lesen",
    search: "Suchen...", all: "Alle", noPosts: "Keine Beiträge gefunden.", technicalBlog: "Technik Blog",
    blogTitle: "Elektronikprojekte & Dokumentationen", projectImages: "Projektbilder", enlarge: "Vergrößern", image: "Bild",
    previous: "← Vorherige", next: "Nächste →", page: "Seite", of: "von", location: "Standort", focus: "Schwerpunkt",
    knowledgeLibrary: "Wissensbibliothek", knowledgeTitle: "Wissen, Lernmaterialien & Forschung",
    knowledgeIntro: "Technische Notizen, Schaltungsanalysen, Lernunterlagen und eigene Untersuchungen - strukturiert gesammelt und gut durchsuchbar.",
    knowledgeNotice: "Hinweis zur Wissensbibliothek", knowledgeSearch: "Analyse, Bauteil oder Thema suchen...", allTopics: "Alle Themen",
    selectedPost: "Ausgewählter Beitrag", archive: "Archiv", morePosts: "Weitere Beiträge", posts: "Beiträge",
    backKnowledge: "Zurück zur Wissensbibliothek", externalSource: "Externe Quelle öffnen", backBlog: "Zurück zum Blog",
    heroTitle: "Technik. Dokumentation. Entwicklung.", heroText: "Diese Website habe ich selbst entwickelt, um technische Projekte, Lernfortschritte und praktische Erfahrungen im Bereich Elektronik, Embedded Systems, Messtechnik und technischer Softwareentwicklung zu dokumentieren.",
    transparency: "Transparenz", transparencyTitle: "Projektinformationen & Transparenz", transparencyText: "Die auf dieser Website gezeigten Fotos von Laborumgebungen, technischen Arbeitsplätzen und elektronischen Geräten dienen ausschließlich der Veranschaulichung meiner technischen Interessen und praktischen Erfahrungen.", transparencyStrong: "Sie zeigen weder meinen tatsächlichen Arbeitsplatz noch interne Bereiche oder reale Arbeitsumgebungen eines Unternehmens.",
    personalWay: "Persönlicher Weg", importantNotice: "Wichtiger Hinweis", importantTitle: "Wichtiger Hinweis zu meinen Projekten",
    warningOne: "Projekte mit der Kennzeichnung „Konzept“ befinden sich noch in der Ideen- bzw. Konzeptphase und wurden bisher noch nicht praktisch umgesetzt.", warningTwo: "Alle anderen Projekte können über „Beitrag lesen“ geöffnet werden. Am Ende der jeweiligen Projektseite befindet sich die Schaltfläche „Zum Projekt“ mit projektbezogenen Dateien.",
    collaborationTitle: "Zusammenarbeit an modernen Elektronikprojekten.", collaborationText: "Sie suchen Unterstützung für Embedded-Systeme, Sensorik, Robotik oder industrielle Automatisierung? Kontaktieren Sie mich für technische Zusammenarbeit oder individuelle Entwicklungen.", privacy: "Datenschutz", legalNotice: "Impressum", back: "Zurück", country: "Deutschland",
    knowledgeNoticeParagraphs: ["Viele Grundlagen und technische Informationen in diesem Bereich sind bereits in Fachbüchern, Dokumentationen oder anderen Quellen verfügbar.", "Der Schwerpunkt dieser Wissensbibliothek liegt daher nicht nur auf der Sammlung von Lernmaterialien. Ich möchte vor allem Themen genauer analysieren, die aus meiner Sicht an anderen Stellen nicht immer verständlich oder ausreichend nachvollziehbar erklärt werden.", "Die Beiträge spiegeln meinen persönlichen Lernprozess und mein aktuelles technisches Verständnis wider. Sie sollen Zusammenhänge Schritt für Schritt greifbarer machen und zugleich als Grundlage für weitere Untersuchungen dienen."],
    noKnowledge: "Noch keine passenden Beiträge", noKnowledgeText: "Neue Lernnotizen und Analysen werden hier nach und nach ergänzt.", footer: "© 2026 ElektronikLab — Moderne Elektronik- und Automatisierungsprojekte.",
    conceptProject: "Konzeptprojekt – noch nicht umgesetzt", noProjectLink: "Kein Projektlink hinterlegt",
    heroBadge: "Elektrokonstruktion · Prüftechnik · Software", docs: "Dokumente", sourceCode: "Quellcode", focusValue: "IoT · Automatisierung", tools: "Werkzeuge", toolsValue: "SPS · AutoCAD · EPLAN · C++ · Qt", translationFallbackShort: "Deutsch", translationFallback: "Dieser Beitrag ist noch nicht in der gewählten Sprache verfügbar. Die deutsche Version wird angezeigt.",
    resumeButton: "Lebenslauf ansehen",
  },
  en: {
    tagline: "Technology · Development · Learning", gallery: "Gallery", contact: "Contact", knowledge: "Knowledge & Research",
    projects: "Projects", discover: "Explore projects", openProject: "Open project", readPost: "Read article",
    search: "Search...", all: "All", noPosts: "No articles found.", technicalBlog: "Technical Blog",
    blogTitle: "Electronics Projects & Documentation", projectImages: "Gallery Images", enlarge: "Enlarge", image: "Image",
    previous: "← Previous", next: "Next →", page: "Page", of: "of", location: "Location", focus: "Focus",
    knowledgeLibrary: "Knowledge Library", knowledgeTitle: "Knowledge, Learning Materials & Research",
    knowledgeIntro: "Technical notes, circuit analyses, learning materials and personal research - structured and easy to search.",
    knowledgeNotice: "About this knowledge library", knowledgeSearch: "Search for an analysis, component or topic...", allTopics: "All topics",
    selectedPost: "Featured article", archive: "Archive", morePosts: "More articles", posts: "articles",
    backKnowledge: "Back to the knowledge library", externalSource: "Open external source", backBlog: "Back to the blog",
    heroTitle: "Technology. Documentation. Development.", heroText: "I built this website to document technical projects, learning progress and practical experience in electronics, embedded systems, measurement technology and technical software development.",
    transparency: "Transparency", transparencyTitle: "Project Information & Transparency", transparencyText: "The photos of laboratory environments, technical workspaces and electronic devices shown on this website are solely intended to illustrate my technical interests and practical experience.", transparencyStrong: "They do not show my actual workplace, internal areas or real working environments of any company.",
    personalWay: "Personal Journey", importantNotice: "Important Notice", importantTitle: "Important notice about my projects",
    warningOne: "Projects marked as “Concept” are still in the idea or concept phase and have not yet been implemented in practice.", warningTwo: "All other projects can be opened via “Read article”. At the end of each project page, the “Open project” button provides project-related files.",
    collaborationTitle: "Collaboration on modern electronics projects.", collaborationText: "Are you looking for support with embedded systems, sensors, robotics or industrial automation? Contact me for technical collaboration or individual developments.", privacy: "Privacy", legalNotice: "Legal Notice", back: "Back", country: "Germany",
    knowledgeNoticeParagraphs: ["Many fundamentals and technical details in this section are already available in textbooks, documentation or other sources.", "The focus of this knowledge library is therefore not merely collecting learning material. I especially want to analyse topics that, from my perspective, are not always explained clearly or comprehensibly elsewhere.", "The articles reflect my personal learning process and my current technical understanding. They aim to make connections easier to grasp step by step and provide a basis for further investigation."],
    noKnowledge: "No matching articles yet", noKnowledgeText: "New learning notes and analyses will gradually be added here.", footer: "© 2026 ElektronikLab — Modern electronics and automation projects.",
    conceptProject: "Concept project – not yet implemented", noProjectLink: "No project link provided",
    heroBadge: "Electrical Design · Testing · Software", docs: "Documents", sourceCode: "Source Code", focusValue: "IoT · Automation", tools: "Tools", toolsValue: "PLC · AutoCAD · EPLAN · C++ · Qt", translationFallbackShort: "German version", translationFallback: "This article is not yet available in the selected language. The German version is shown.",
    resumeButton: "View resume",
  },
  vi: {
    tagline: "Kỹ thuật · Phát triển · Học hỏi", gallery: "Thư viện ảnh", contact: "Liên hệ", knowledge: "Kiến thức & Nghiên cứu",
    projects: "Dự án", discover: "Khám phá dự án", openProject: "Mở dự án", readPost: "Đọc bài viết",
    search: "Tìm kiếm...", all: "Tất cả", noPosts: "Không tìm thấy bài viết.", technicalBlog: "Blog Kỹ thuật",
    blogTitle: "Dự án Điện tử & Tài liệu", projectImages: "Hình ảnh", enlarge: "Phóng to", image: "Ảnh",
    previous: "← Trước", next: "Tiếp →", page: "Trang", of: "trên", location: "Vị trí", focus: "Trọng tâm",
    knowledgeLibrary: "Thư viện Kiến thức", knowledgeTitle: "Kiến thức, Tài liệu học tập & Nghiên cứu",
    knowledgeIntro: "Ghi chú kỹ thuật, phân tích mạch, tài liệu học tập và nghiên cứu cá nhân - được sắp xếp rõ ràng và dễ tìm kiếm.",
    knowledgeNotice: "Lưu ý về thư viện kiến thức", knowledgeSearch: "Tìm phân tích, linh kiện hoặc chủ đề...", allTopics: "Tất cả chủ đề",
    selectedPost: "Bài viết nổi bật", archive: "Lưu trữ", morePosts: "Các bài viết khác", posts: "bài viết",
    backKnowledge: "Quay lại thư viện kiến thức", externalSource: "Mở nguồn bên ngoài", backBlog: "Quay lại blog",
    heroTitle: "Kỹ thuật. Tài liệu. Phát triển.", heroText: "Tôi tự xây dựng website này để ghi lại các dự án kỹ thuật, quá trình học tập và kinh nghiệm thực tế trong lĩnh vực điện tử, hệ thống nhúng, đo lường và phát triển phần mềm kỹ thuật.",
    transparency: "Minh bạch", transparencyTitle: "Thông tin dự án & Minh bạch", transparencyText: "Các hình ảnh về phòng thí nghiệm, không gian làm việc kỹ thuật và thiết bị điện tử trên website này chỉ nhằm minh họa cho sở thích kỹ thuật và kinh nghiệm thực hành của tôi.", transparencyStrong: "Chúng không thể hiện nơi làm việc thực tế, khu vực nội bộ hay môi trường làm việc thật của bất kỳ doanh nghiệp nào.",
    personalWay: "Hành trình cá nhân", importantNotice: "Lưu ý quan trọng", importantTitle: "Lưu ý quan trọng về các dự án của tôi",
    warningOne: "Các dự án có nhãn “Ý tưởng” vẫn đang ở giai đoạn ý tưởng hoặc khái niệm và chưa được triển khai thực tế.", warningTwo: "Các dự án khác có thể được mở bằng nút “Đọc bài viết”. Cuối mỗi trang dự án có nút “Mở dự án” với các tệp liên quan.",
    collaborationTitle: "Hợp tác trong các dự án điện tử hiện đại.", collaborationText: "Bạn cần hỗ trợ về hệ thống nhúng, cảm biến, robot hoặc tự động hóa công nghiệp? Hãy liên hệ với tôi để hợp tác kỹ thuật hoặc phát triển giải pháp riêng.", privacy: "Quyền riêng tư", legalNotice: "Thông tin pháp lý", back: "Quay lại", country: "Đức",
    knowledgeNoticeParagraphs: ["Nhiều kiến thức nền tảng và thông tin kỹ thuật trong khu vực này đã có trong sách chuyên ngành, tài liệu hoặc các nguồn khác.", "Vì vậy, trọng tâm của thư viện kiến thức không chỉ là tập hợp tài liệu học tập. Tôi muốn phân tích kỹ hơn những chủ đề mà theo góc nhìn của mình chưa được giải thích thật sự rõ ràng hoặc dễ hiểu ở những nơi khác.", "Các bài viết phản ánh quá trình học tập và hiểu biết kỹ thuật hiện tại của tôi. Mục tiêu là làm rõ các mối liên hệ từng bước và tạo nền tảng cho những nghiên cứu tiếp theo."],
    noKnowledge: "Chưa có bài viết phù hợp", noKnowledgeText: "Các ghi chú học tập và phân tích mới sẽ được bổ sung dần tại đây.", footer: "© 2026 ElektronikLab — Các dự án điện tử và tự động hóa hiện đại.",
    conceptProject: "Dự án ý tưởng – chưa được triển khai", noProjectLink: "Chưa có liên kết dự án",
    heroBadge: "Thiết kế điện · Kiểm thử · Phần mềm", docs: "Tài liệu", sourceCode: "Mã nguồn", focusValue: "IoT · Tự động hóa", tools: "Công cụ", toolsValue: "PLC · AutoCAD · EPLAN · C++ · Qt", translationFallbackShort: "Bản tiếng Đức", translationFallback: "Bài viết này chưa có bản dịch theo ngôn ngữ đã chọn. Website đang hiển thị bản tiếng Đức.",
    resumeButton: "Xem sơ yếu lý lịch",
  },
};
const UI_OVERRIDE_KEYS = UI_TEXT_GROUPS.flatMap(([, keys]) => keys).filter((key) => !/^(kn_|cookie_)/.test(key));

// Standardwerte der Oberflächentexte (ohne Admin-Überschreibungen), für den Admin-Bereich „Website-Texte“.
const getUiDefaults = (language) => {
  const base = UI_TEXT[language] || UI_TEXT.de;
  const cookie = COOKIE_TEXT[language] || COOKIE_TEXT.de;
  const out = { ...base, cookie_title: cookie.title, cookie_text: cookie.text, cookie_button: cookie.button };
  (base.knowledgeNoticeParagraphs || []).forEach((paragraph, index) => { out[`kn_${index + 1}`] = paragraph; });
  return out;
};

const applyUiOverrides = (uiText, language) => {
  const custom = getSiteTextOverrides(language);
  const out = { ...uiText };
  UI_OVERRIDE_KEYS.forEach((key) => { if (typeof custom[key] === "string" && custom[key].trim()) out[key] = custom[key].trim(); });
  if (Array.isArray(uiText.knowledgeNoticeParagraphs)) {
    out.knowledgeNoticeParagraphs = uiText.knowledgeNoticeParagraphs.map((paragraph, index) => (custom[`kn_${index + 1}`] || "").trim() || paragraph);
  }
  return out;
};

const getUiText = (language) => {
  const uiText = UI_TEXT[language] || UI_TEXT.de;
  const homeContent = getLocalizedHomeContent(language);
  const stats = [1, 2, 3, 4].map((n) => ({ value: (homeContent?.[`stat_${n}_value`] || "").trim(), label: (homeContent?.[`stat_${n}_label`] || "").trim() }));

  if (!homeContent) return applyUiOverrides({ ...uiText, stats }, language);

  return applyUiOverrides({
    ...uiText,
    heroBadge: homeContent.hero_badge,
    heroTitle: homeContent.hero_title,
    heroText: homeContent.hero_text,
    transparencyTitle: homeContent.transparency_title,
    transparencyText: homeContent.transparency_text,
    transparencyStrong: homeContent.transparency_strong,
    warningOne: homeContent.warning_one,
    warningTwo: homeContent.warning_two,
    collaborationTitle: homeContent.collaboration_title,
    collaborationText: homeContent.collaboration_text,
    stats,
  }, language);
};

// Logo, Name, Porträt, Kontakt-E-Mail und Live-Kacheln aus site-settings.md (Admin → Logo & Website).
const SITE_DEFAULTS = {
  logo_image: "",
  logo_text: "NND",
  site_name: "Nguyen Nhan Do",
  hero_image: "/my-electronics-blog/images/posts/Nguyen-main.webp",
  contact_email: "donguyennhan.de@gmail.com",
  live_tiles: "gem-restaurant-platform|Sao Mai Mainz, tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf|TABLIO Kasse, provisionpro-saas-restaurant-inventory|ProvisionPro, electrical-engineering-toolbox-privacy-policy|Electrical Engineering Toolbox, local-post-1779957810945|GeldPilot, voice-transcriber-privacy-policy|Voice Transcriber",
  live_autoplay: "on",
};
const getSiteConfig = (settings = SITE_SETTINGS) => {
  const pick = (key) => String(settings?.[key] ?? "").trim() || SITE_DEFAULTS[key];
  return {
    logoImage: String(settings?.logo_image ?? "").trim(),
    logoText: pick("logo_text"),
    siteName: pick("site_name"),
    heroImage: pick("hero_image"),
    email: pick("contact_email"),
    liveTiles: pick("live_tiles").split(",").map((item) => item.trim()).filter(Boolean).map((item) => {
      const [id, ...nameParts] = item.split("|");
      return { id: id.trim(), name: nameParts.join("|").trim() };
    }),
    liveAutoplay: String(settings?.live_autoplay ?? "").trim().toLowerCase() !== "off",
    resumeUrl: String(settings?.resume_url ?? "").trim(),
  };
};

const DEFAULT_GALLERY_IMAGES = [
  "/my-electronics-blog/images/galerie/Dampfmaschine-main.webp",
  "/my-electronics-blog/images/galerie/finanzmanager-main.webp",
  "/my-electronics-blog/images/galerie/Mischbehälter-main.webp",
  "/my-electronics-blog/images/galerie/Flaschenzug-main.webp",
  "/my-electronics-blog/images/galerie/Tauchanlage-main.webp",
];

// ─────────────────────────────────────────────
// DATA HELPERS
// ─────────────────────────────────────────────
const ADMIN_AUTH_KEY = "electronics-blog-admin-auth-v1";
const ADMIN_SESSION_KEY = "electronics-blog-admin-session-v1";
const GITHUB_TOKEN_KEY = "electronics-blog-github-token-v1";
const ADMIN_UI_LANGUAGE_KEY = "electronics-blog-admin-ui-language-v1";
const GITHUB_REPO_OWNER = "nguyennhando";
const GITHUB_REPO_NAME = "my-electronics-blog";
const GITHUB_REPO_BRANCH = "main";

const bytesToHex = (bytes) => Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");

const createAdminSalt = () => {
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  return bytesToHex(bytes);
};

const createRecoveryCode = () => {
  const bytes = new Uint8Array(9);
  window.crypto.getRandomValues(bytes);
  const token = bytesToHex(bytes).toUpperCase().match(/.{1,6}/g).join("-");
  return `ADMIN-${token}`;
};

const hashAdminSecret = async (secret, salt) => {
  const data = new TextEncoder().encode(`${salt}:${secret}`);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return bytesToHex(new Uint8Array(digest));
};

const readAdminConfig = () => {
  try {
    return JSON.parse(window.localStorage.getItem(ADMIN_AUTH_KEY) || "null");
  } catch {
    return null;
  }
};

const saveAdminConfig = (config) => {
  window.localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(config));
};

const setAdminSession = (active) => {
  if (active) window.localStorage.setItem(ADMIN_SESSION_KEY, "active");
  else window.localStorage.removeItem(ADMIN_SESSION_KEY);
};

const bytesToBase64 = (bytes) => {
  let binary = "";
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
};

const textToBase64 = (text) => bytesToBase64(new TextEncoder().encode(text));

const slugifyFilename = (name) => {
  const dotIndex = name.lastIndexOf(".");
  const base = dotIndex > 0 ? name.slice(0, dotIndex) : name;
  const extension = dotIndex > 0 ? name.slice(dotIndex + 1).toLowerCase() : "";
  const safeBase = slugify(base) || "bild";
  return extension ? `${safeBase}.${extension}` : safeBase;
};

const encodeGithubPath = (path) => path.split("/").map(encodeURIComponent).join("/");

const getGithubContentPath = (output) => `src/content/${output.directory ? `${output.directory}/` : ""}${output.filename}`;

const ADMIN_TEXT = {
  de: {
    title: "Admin Login",
    intro: "Nur Admins dürfen sich anmelden. Wenn Sie kein Admin sind, kehren Sie bitte zur Startseite zurück.",
    notice: "Diese Anmeldung wird lokal in Ihrem Browser gespeichert. Auf GitHub Pages kann der Admin-Editor die Oberfläche öffnen, aber ohne Backend keine Dateien automatisch nach GitHub schreiben.",
    backBlog: "Zurück zum Blog",
    recoveryCode: "Wiederherstellungscode",
    saveRecovery: "Bitte speichern Sie diesen Code, falls Sie Ihr Passwort vergessen.",
    enterAdmin: "Admin öffnen",
    firstSetup: "Ersteinrichtung",
    forgotPassword: "Passwort vergessen",
    adminAuth: "Admin-Prüfung",
    createPasswordTitle: "Admin-Passwort erstellen",
    resetPasswordTitle: "Wiederherstellungscode eingeben und Passwort neu setzen",
    loginTitle: "Passwort eingeben, um den Editor zu oeffnen",
    password: "Passwort",
    recoveryCodeLabel: "Wiederherstellungscode",
    newPassword: "Neues Passwort",
    confirmPassword: "Passwort wiederholen",
    createPassword: "Passwort erstellen",
    resetPassword: "Passwort neu setzen",
    login: "Anmelden",
    backLogin: "Zurück zur Anmeldung",
    forgot: "Passwort vergessen",
    resetLocal: "Lokale Konfiguration loeschen",
    passwordTooShort: "Das Passwort muss mindestens 8 Zeichen lang sein.",
    confirmMismatch: "Die Passwortbestätigung stimmt nicht überein.",
    setupDone: "Admin-Passwort erstellt. Bitte speichern Sie den Wiederherstellungscode unten.",
    wrongPassword: "Falsches Passwort. Nur Admins duerfen sich anmelden.",
    newPasswordTooShort: "Das neue Passwort muss mindestens 8 Zeichen lang sein.",
    wrongRecovery: "Der Wiederherstellungscode ist nicht korrekt.",
    passwordChanged: "Passwort geändert. Bitte speichern Sie den neuen Wiederherstellungscode.",
    localReset: "Admin-Konfiguration in diesem Browser gelöscht. Bitte erstellen Sie ein neues Passwort.",
    changePasswordTitle: "Passwort ändern",
    currentPassword: "Aktuelles Passwort",
    currentPasswordWrong: "Aktuelles Passwort ist falsch.",
    noAdminConfig: "Keine Admin-Konfiguration vorhanden.",
    savePasswordButton: "Neues Passwort speichern",
  },
  en: {
    title: "Admin Login",
    intro: "Only admins are allowed to sign in. If you are not an admin, please return to the home page.",
    notice: "This login is stored locally in your browser. On GitHub Pages, the admin editor can open the interface, but cannot automatically write files to GitHub without a backend.",
    backBlog: "Back to Blog",
    recoveryCode: "Recovery Code",
    saveRecovery: "Please save this code in case you forget your password.",
    enterAdmin: "Open admin",
    firstSetup: "First setup",
    forgotPassword: "Forgot password",
    adminAuth: "Admin authentication",
    createPasswordTitle: "Create an admin password",
    resetPasswordTitle: "Enter your recovery code to reset the password",
    loginTitle: "Enter your password to open the editor",
    password: "Password",
    recoveryCodeLabel: "Recovery code",
    newPassword: "New password",
    confirmPassword: "Confirm password",
    createPassword: "Create password",
    resetPassword: "Reset password",
    login: "Sign in",
    backLogin: "Back to sign in",
    forgot: "Forgot password",
    resetLocal: "Clear local setup",
    passwordTooShort: "Password must be at least 8 characters.",
    confirmMismatch: "Password confirmation does not match.",
    setupDone: "Admin password created. Please save the recovery code below.",
    wrongPassword: "Wrong password. Only admins are allowed to sign in.",
    newPasswordTooShort: "New password must be at least 8 characters.",
    wrongRecovery: "The recovery code is not correct.",
    passwordChanged: "Password changed. Please save the new recovery code.",
    localReset: "Admin setup was cleared in this browser. Please create a new password.",
    changePasswordTitle: "Change password",
    currentPassword: "Current password",
    currentPasswordWrong: "Current password is incorrect.",
    noAdminConfig: "No admin configuration found.",
    savePasswordButton: "Save new password",
  },
  vi: {
    title: "Đăng nhập Admin",
    intro: "Chỉ admin mới được quyền đăng nhập. Nếu bạn không phải admin, vui lòng quay lại trang chủ.",
    notice: "Đăng nhập này được lưu cục bộ trên trình duyệt. Trên GitHub Pages, admin editor có thể mở giao diện nhưng chưa thể tự động ghi file lên GitHub nếu chưa có backend.",
    backBlog: "Quay lại Blog",
    recoveryCode: "Mã khôi phục",
    saveRecovery: "Hãy lưu mã này để dùng khi quên mật khẩu.",
    enterAdmin: "Vào admin",
    firstSetup: "Thiết lập lần đầu",
    forgotPassword: "Quên mật khẩu",
    adminAuth: "Xác thực admin",
    createPasswordTitle: "Tạo mật khẩu admin",
    resetPasswordTitle: "Nhập mã khôi phục để đặt lại mật khẩu",
    loginTitle: "Nhập mật khẩu để vào editor",
    password: "Mật khẩu",
    recoveryCodeLabel: "Mã khôi phục",
    newPassword: "Mật khẩu mới",
    confirmPassword: "Nhập lại mật khẩu",
    createPassword: "Tạo mật khẩu",
    resetPassword: "Đặt lại mật khẩu",
    login: "Đăng nhập",
    backLogin: "Quay lại đăng nhập",
    forgot: "Quên mật khẩu",
    resetLocal: "Xóa cấu hình local",
    passwordTooShort: "Mật khẩu cần ít nhất 8 ký tự.",
    confirmMismatch: "Mật khẩu xác nhận không khớp.",
    setupDone: "Đã tạo mật khẩu admin. Hãy lưu mã khôi phục bên dưới.",
    wrongPassword: "Sai mật khẩu. Chỉ admin mới được quyền đăng nhập.",
    newPasswordTooShort: "Mật khẩu mới cần ít nhất 8 ký tự.",
    wrongRecovery: "Mã khôi phục không đúng.",
    passwordChanged: "Đã đổi mật khẩu. Hãy lưu mã khôi phục mới.",
    localReset: "Đã xóa cấu hình admin trên trình duyệt này. Hãy tạo mật khẩu mới.",
    changePasswordTitle: "Đổi mật khẩu",
    currentPassword: "Mật khẩu hiện tại",
    currentPasswordWrong: "Mật khẩu hiện tại không đúng.",
    noAdminConfig: "Chưa có cấu hình admin.",
    savePasswordButton: "Lưu mật khẩu mới",
  },
};

const EDITOR_TEXT = {
  de: {
    headerTitle: "Markdown-Beitrag erstellen",
    passwordButton: "Passwort", logoutButton: "Logout", blogButton: "Blog",
    badgeWebsite: "Website", badgeStartseite: "Startseite", badgeBlog: "Blog",
    githubSectionTitle: "Direkt auf GitHub speichern",
    githubTokenIntroPre: "Tragen Sie einen GitHub fine-grained token mit ",
    githubTokenIntroMid: " fuer ",
    githubTokenIntroPost: " ein. Der Token wird nur lokal in diesem Browser gespeichert.",
    saveTokenButton: "Token speichern", testTokenButton: "Token testen",
    websiteSectionTitle: "Website-Einstellungen bearbeiten", backgroundImageLabel: "Hintergrundbild", noBackgroundText: "Standard-Hintergrund ohne Bild",
    saveGithubButton: "Auf GitHub speichern", exportMdButton: "MD exportieren", uploadButton: "Hochladen",
    gallerySectionTitle: "Projektgalerie bearbeiten", galleryInstructionsTitle: "So fügen Sie neue Galeriebilder hinzu",
    galleryStep1Pre: "Kopieren Sie die Bilddatei in den Ordner ", galleryStep1Post: ".",
    galleryStep2Pre: "Tragen Sie den Bildpfad ein, zum Beispiel ", galleryStep2Post: ".",
    galleryStep3: "Verwenden Sie pro Zeile genau einen Bildpfad.",
    galleryStep4: "Die erste Zeile ist das große Hauptbild. Die zweite und dritte Zeile sind die kleinen Bilder auf der rechten Seite.",
    galleryStep5Pre: "Speichern Sie die Datei anschließend im Ordner ", galleryStep5Post: ".",
    galleryPositionNote: "Die Bildposition innerhalb des Rahmens wird automatisch zentriert.",
    galleryImagesLabel: "Galeriebilder, ein Pfad pro Zeile",
    galleryImagesHelp: "Die Galerie ist frei zusammengestellt. Die Bilder müssen keinem bestimmten Projekt zugeordnet sein.",
    addImageButton: "Bild hinzufügen",
    orderSectionTitle: "Reihenfolge der Projektkarten bearbeiten", orderInstructionsTitle: "Projektkarten visuell sortieren",
    orderInstructions1: "Verschieben Sie Karten mit den Pfeilen nach oben oder unten. Beim Speichern wird die Reihenfolge automatisch für alle Sprachversionen übernommen.",
    orderInstructions2: "Mit „Reihenfolge speichern” wird die neue Sortierung direkt auf GitHub gespeichert.",
    previewLanguageLabel: "Vorschau-Sprache", moveUpAria: "Nach oben verschieben", moveDownAria: "Nach unten verschieben", saveOrderButton: "Reihenfolge speichern",
    homeContentSectionTitle: "Startseiten-Inhalte bearbeiten",
    fileLocationTitle: "Speicherort der Markdown-Datei", fileLocationIntro: "Speichern Sie die Datei abhängig von der ausgewählten Sprache unter:",
    langDeutsch: "Deutsch", langEnglisch: "Englisch", langVietnamesisch: "Vietnamesisch",
    homeContentSaveNotePre: "Mit „Auf GitHub speichern” wird diese Datei direkt in den passenden Sprachordner unter ", homeContentSaveNotePost: " geschrieben.",
    homeContentReloadNote: "Nach dem Speichern lädt GitHub Pages die Änderung nach kurzer Zeit neu.",
    languageLabel: "Sprache", livePreviewLabel: "Live-Vorschau",
    personalWaySectionTitle: "Persönlicher Weg bearbeiten",
    personalWaySaveNotePre: "Mit „Auf GitHub speichern” wird diese Datei direkt in den passenden Sprachordner unter ", personalWaySaveNotePost: " geschrieben.",
    titleLabelRequired: "Titel *", image1Label: "Bild 1", image2Label: "Bild 2",
    markdownContentLabelRequired: "Markdown-Inhalt *", markdownContentLabel: "Markdown-Inhalt",
    previewLabel: "Vorschau", personalWayPreviewLabel: "Persönlicher Weg",
    loadPostLabel: "Beitrag laden oder neu erstellen", newPostOption: "Neuer Beitrag", knowledgeTag: "[Wissen]", projectTag: "[Projekt]", deleteButton: "Löschen",
    multilingualNoticeTitle: "Mehrsprachige Beiträge speichern",
    multilingualP1: "Verwenden Sie für alle Sprachversionen desselben Beitrags dieselbe ",
    multilingualP2: ". Wählen Sie beim Speichern genau den Ordner ",
    multilingualP3: ", nicht einen Sprachordner. Der Editor legt die Datei automatisch unter ",
    multilingualP4: ", ", multilingualP5: " oder ", multilingualP6: " ab.",
    multilingualLocationIntro: "Speicherort abhängig von Sprache und Slug:",
    exportNote: "Bei „MD exportieren” wird nur die Datei heruntergeladen. Verschieben Sie sie anschließend manuell in den passenden Sprachordner.",
    contentTypeLabel: "Inhaltstyp", contentTypeProjectOption: "Projektbeitrag für den Blog", contentTypeKnowledgeOption: "Wissen, Lernmaterial oder Forschung",
    categoryLabel: "Kategorie", titlePlaceholder: "Titel des Projekts", statusLabel: "Status",
    advancedToggleLabel: "Erweitert (normalerweise nicht nötig)",
    translationIdLabel: "Translation ID", translationIdPlaceholder: "gemeinsame-beitrags-id",
    translationIdAvailable: "Vorhanden: ", translationIdNone: "noch keine Sprachversion",
    slugLabel: "Slug", slugPlaceholder: "projekt-name", sortOrderLabel: "Reihenfolge",
    excerptLabel: "Kurzbeschreibung *", mainImageLabel: "Hauptbild",
    tagsLabel: "Tags, durch Komma getrennt", tagsPlaceholder: "ESP32, MQTT, IoT", readTimeLabel: "Lesezeit",
    externalLinkLabelKnowledge: "Externe Quelle oder weiterführender Link", externalLinkLabelProject: "Externer Projektlink",
    publishedLabel: "Veröffentlicht",
    blogCardLabel: "Blog-Karte", noMainImageText: "Kein Hauptbild", categoryPlaceholder: "Kategorie",
    titlePlaceholderPreview: "Titel des Beitrags", excerptPlaceholderPreview: "Kurzbeschreibung des Projekts", readPostButtonPreview: "Beitrag lesen",
    validationRequiredFields: "Titel, Slug, Kurzbeschreibung und Inhalt sind Pflichtfelder.",
    personalWayValidation: "Titel und Inhalt sind Pflichtfelder.",
    deleteConfirm: (title, path) => `"${title}" wirklich unwiderruflich von GitHub löschen (${path})?`,
    noTokenMessage: "Bitte zuerst einen GitHub token eintragen.",
    tokenRemovedMessage: "GitHub token wurde entfernt.", tokenSavedMessage: "GitHub token wurde lokal im Browser gespeichert.",
    tokenTestFailedPrefix: "Token-Test fehlgeschlagen", noGithubDetails: "Keine Details von GitHub.",
    tokenWorksMessage: "Token funktioniert. GitHub API ist erreichbar.",
    githubBlockedMessage: "GitHub API ist vom Browser blockiert oder nicht erreichbar. Bitte Chrome/Edge testen, Adblock/Tracking-Schutz pruefen, oder MD exportieren verwenden.",
    githubBlockedMessageShort: "GitHub API ist vom Browser blockiert oder nicht erreichbar. Bitte Chrome/Edge testen, Adblock/Tracking-Schutz pruefen.",
    savedFilesMessage: (count) => `${count} Datei(en) wurden auf GitHub gespeichert.`,
    githubSaveFailedGeneric: "GitHub speichern ist fehlgeschlagen.", noGithubTokenError: "Kein GitHub Token hinterlegt.",
    fileUploadFailedPrefix: "Datei-Upload fehlgeschlagen", fileUploadedMessage: (url) => `Datei hochgeladen: ${url}`,
    resumeLabel: "Lebenslauf (PDF)", resumeButton: "Lebenslauf ansehen", uploadingLabel: "Lädt hoch...",
    directorySaveUnsupported: "Direktes Speichern wird von diesem Browser nicht unterstützt. Bitte verwenden Sie MD exportieren.",
    wrongDirectoryAlert: "Bitte wählen Sie genau den Ordner src/content aus, nicht einen Sprachordner wie de, en oder vi.",
    directorySavedMessage: (name) => `${name} wurde gespeichert.`,
    directorySaveFailedAlert: "Die Datei konnte nicht gespeichert werden. Bitte verwenden Sie MD exportieren.",
    orderSaveFailedAlert: "Die Reihenfolge konnte nicht gespeichert werden.",
    renameRemovedOldFile: (path) => ` Alte Datei ${path} wurde entfernt.`,
    renameRemoveFailedNote: (path, err) => ` Achtung: alte Datei ${path} konnte nicht automatisch entfernt werden (${err}). Bitte manuell auf GitHub löschen.`,
    postDeletedMessage: (path) => `${path} wurde gelöscht.`,
    deleteFailedMessage: (err) => `Löschen fehlgeschlagen: ${err}`,
    deployWaiting: "Wird veröffentlicht ... das dauert normalerweise 1–2 Minuten.",
    deploySuccess: "Fertig! Die Änderungen sind jetzt live.",
    deployFailed: "Veröffentlichung fehlgeschlagen.",
    deployTimeout: "Noch keine Rückmeldung von GitHub. Bitte in ein paar Minuten die Seite manuell prüfen.",
    deployDetails: "Details", deployErrorDetails: "Fehler ansehen", deploySeeSite: "Seite ansehen",
  },
  en: {
    headerTitle: "Create markdown post",
    passwordButton: "Password", logoutButton: "Logout", blogButton: "Blog",
    badgeWebsite: "Website", badgeStartseite: "Home page", badgeBlog: "Blog",
    githubSectionTitle: "Save directly to GitHub",
    githubTokenIntroPre: "Enter a GitHub fine-grained token with ",
    githubTokenIntroMid: " for ",
    githubTokenIntroPost: " here. The token is stored locally in this browser only.",
    saveTokenButton: "Save token", testTokenButton: "Test token",
    websiteSectionTitle: "Edit website settings", backgroundImageLabel: "Background image", noBackgroundText: "Default background, no image",
    saveGithubButton: "Save to GitHub", exportMdButton: "Export MD", uploadButton: "Upload",
    gallerySectionTitle: "Edit project gallery", galleryInstructionsTitle: "How to add new gallery images",
    galleryStep1Pre: "Copy the image file into the folder ", galleryStep1Post: ".",
    galleryStep2Pre: "Enter the image path, for example ", galleryStep2Post: ".",
    galleryStep3: "Use exactly one image path per line.",
    galleryStep4: "The first line is the large main image. The second and third lines are the small images on the right.",
    galleryStep5Pre: "Then save the file in the folder ", galleryStep5Post: ".",
    galleryPositionNote: "The image position within the frame is centered automatically.",
    galleryImagesLabel: "Gallery images, one path per line",
    galleryImagesHelp: "The gallery is freely composed. Images don't need to belong to any specific project.",
    addImageButton: "Add image",
    orderSectionTitle: "Edit project card order", orderInstructionsTitle: "Sort project cards visually",
    orderInstructions1: "Move cards up or down with the arrows. Saving applies the new order automatically to all language versions.",
    orderInstructions2: "“Save order” saves the new sorting directly to GitHub.",
    previewLanguageLabel: "Preview language", moveUpAria: "Move up", moveDownAria: "Move down", saveOrderButton: "Save order",
    homeContentSectionTitle: "Edit home page content",
    fileLocationTitle: "Markdown file location", fileLocationIntro: "The file is saved depending on the selected language under:",
    langDeutsch: "German", langEnglisch: "English", langVietnamesisch: "Vietnamese",
    homeContentSaveNotePre: "“Save to GitHub” writes this file directly into the matching language folder under ", homeContentSaveNotePost: ".",
    homeContentReloadNote: "After saving, GitHub Pages reloads the change shortly after.",
    languageLabel: "Language", livePreviewLabel: "Live preview",
    personalWaySectionTitle: "Edit personal journey",
    personalWaySaveNotePre: "“Save to GitHub” writes this file directly into the matching language folder under ", personalWaySaveNotePost: ".",
    titleLabelRequired: "Title *", image1Label: "Image 1", image2Label: "Image 2",
    markdownContentLabelRequired: "Markdown content *", markdownContentLabel: "Markdown content",
    previewLabel: "Preview", personalWayPreviewLabel: "Personal journey",
    loadPostLabel: "Load post or create new one", newPostOption: "New post", knowledgeTag: "[Knowledge]", projectTag: "[Project]", deleteButton: "Delete",
    multilingualNoticeTitle: "Saving posts in multiple languages",
    multilingualP1: "Use the same ",
    multilingualP2: " for all language versions of the same post. When saving, select exactly the folder ",
    multilingualP3: ", not a language folder. The editor automatically places the file under ",
    multilingualP4: ", ", multilingualP5: " or ", multilingualP6: ".",
    multilingualLocationIntro: "Save location depends on language and slug:",
    exportNote: "“Export MD” only downloads the file. Move it manually into the matching language folder afterwards.",
    contentTypeLabel: "Content type", contentTypeProjectOption: "Project post for the blog", contentTypeKnowledgeOption: "Knowledge, learning material or research",
    categoryLabel: "Category", titlePlaceholder: "Project title", statusLabel: "Status",
    advancedToggleLabel: "Advanced (usually not needed)",
    translationIdLabel: "Translation ID", translationIdPlaceholder: "shared-post-id",
    translationIdAvailable: "Available: ", translationIdNone: "no language version yet",
    slugLabel: "Slug", slugPlaceholder: "project-name", sortOrderLabel: "Sort order",
    excerptLabel: "Excerpt *", mainImageLabel: "Main image",
    tagsLabel: "Tags, comma-separated", tagsPlaceholder: "ESP32, MQTT, IoT", readTimeLabel: "Read time",
    externalLinkLabelKnowledge: "External source or further link", externalLinkLabelProject: "External project link",
    publishedLabel: "Published",
    blogCardLabel: "Blog card", noMainImageText: "No main image", categoryPlaceholder: "Category",
    titlePlaceholderPreview: "Post title", excerptPlaceholderPreview: "Project excerpt", readPostButtonPreview: "Read post",
    validationRequiredFields: "Title, slug, excerpt and content are required fields.",
    personalWayValidation: "Title and content are required fields.",
    deleteConfirm: (title, path) => `Permanently delete "${title}" from GitHub (${path})?`,
    noTokenMessage: "Please enter a GitHub token first.",
    tokenRemovedMessage: "GitHub token removed.", tokenSavedMessage: "GitHub token saved locally in this browser.",
    tokenTestFailedPrefix: "Token test failed", noGithubDetails: "No details from GitHub.",
    tokenWorksMessage: "Token works. GitHub API is reachable.",
    githubBlockedMessage: "GitHub API is blocked by the browser or unreachable. Please try Chrome/Edge, check ad/tracking blockers, or use Export MD instead.",
    githubBlockedMessageShort: "GitHub API is blocked by the browser or unreachable. Please try Chrome/Edge and check ad/tracking blockers.",
    savedFilesMessage: (count) => `${count} file(s) saved to GitHub.`,
    githubSaveFailedGeneric: "Saving to GitHub failed.", noGithubTokenError: "No GitHub token stored.",
    fileUploadFailedPrefix: "File upload failed", fileUploadedMessage: (url) => `File uploaded: ${url}`,
    resumeLabel: "Resume (PDF)", resumeButton: "View resume", uploadingLabel: "Uploading...",
    directorySaveUnsupported: "Direct saving isn't supported by this browser. Please use Export MD.",
    wrongDirectoryAlert: "Please select exactly the src/content folder, not a language folder such as de, en or vi.",
    directorySavedMessage: (name) => `${name} saved.`,
    directorySaveFailedAlert: "The file could not be saved. Please use Export MD.",
    orderSaveFailedAlert: "The order could not be saved.",
    renameRemovedOldFile: (path) => ` Old file ${path} was removed.`,
    renameRemoveFailedNote: (path, err) => ` Warning: the old file ${path} could not be removed automatically (${err}). Please delete it manually on GitHub.`,
    postDeletedMessage: (path) => `${path} was deleted.`,
    deleteFailedMessage: (err) => `Delete failed: ${err}`,
    deployWaiting: "Publishing ... this usually takes 1–2 minutes.",
    deploySuccess: "Done! The changes are now live.",
    deployFailed: "Publishing failed.",
    deployTimeout: "No response from GitHub yet. Please check the site manually in a few minutes.",
    deployDetails: "Details", deployErrorDetails: "View error", deploySeeSite: "View site",
  },
  vi: {
    headerTitle: "Tạo bài viết markdown",
    passwordButton: "Mật khẩu", logoutButton: "Đăng xuất", blogButton: "Blog",
    badgeWebsite: "Website", badgeStartseite: "Trang chủ", badgeBlog: "Blog",
    githubSectionTitle: "Lưu trực tiếp lên GitHub",
    githubTokenIntroPre: "Nhập một GitHub fine-grained token có quyền ",
    githubTokenIntroMid: " cho ",
    githubTokenIntroPost: " vào đây. Token chỉ được lưu cục bộ trên trình duyệt này.",
    saveTokenButton: "Lưu token", testTokenButton: "Kiểm tra token",
    websiteSectionTitle: "Chỉnh sửa cài đặt website", backgroundImageLabel: "Hình nền", noBackgroundText: "Hình nền mặc định, không có ảnh",
    saveGithubButton: "Lưu lên GitHub", exportMdButton: "Xuất MD", uploadButton: "Tải lên",
    gallerySectionTitle: "Chỉnh sửa thư viện ảnh dự án", galleryInstructionsTitle: "Cách thêm ảnh mới vào thư viện",
    galleryStep1Pre: "Sao chép file ảnh vào thư mục ", galleryStep1Post: ".",
    galleryStep2Pre: "Nhập đường dẫn ảnh, ví dụ ", galleryStep2Post: ".",
    galleryStep3: "Mỗi dòng chỉ nhập đúng một đường dẫn ảnh.",
    galleryStep4: "Dòng đầu tiên là ảnh chính lớn. Dòng thứ hai và ba là các ảnh nhỏ ở bên phải.",
    galleryStep5Pre: "Sau đó lưu file vào thư mục ", galleryStep5Post: ".",
    galleryPositionNote: "Vị trí ảnh trong khung sẽ tự động được canh giữa.",
    galleryImagesLabel: "Ảnh thư viện, mỗi dòng một đường dẫn",
    galleryImagesHelp: "Thư viện ảnh được sắp xếp tự do, ảnh không cần gắn với một dự án cụ thể nào.",
    addImageButton: "Thêm ảnh",
    orderSectionTitle: "Chỉnh sửa thứ tự thẻ dự án", orderInstructionsTitle: "Sắp xếp thứ tự thẻ dự án trực quan",
    orderInstructions1: "Di chuyển thẻ lên/xuống bằng các mũi tên. Khi lưu, thứ tự mới sẽ tự động áp dụng cho tất cả các bản ngôn ngữ.",
    orderInstructions2: "Nhấn “Lưu thứ tự” để lưu cách sắp xếp mới trực tiếp lên GitHub.",
    previewLanguageLabel: "Ngôn ngữ xem trước", moveUpAria: "Chuyển lên trên", moveDownAria: "Chuyển xuống dưới", saveOrderButton: "Lưu thứ tự",
    homeContentSectionTitle: "Chỉnh sửa nội dung trang chủ",
    fileLocationTitle: "Vị trí lưu file markdown", fileLocationIntro: "File sẽ được lưu tùy theo ngôn ngữ đã chọn tại:",
    langDeutsch: "Tiếng Đức", langEnglisch: "Tiếng Anh", langVietnamesisch: "Tiếng Việt",
    homeContentSaveNotePre: "Nhấn “Lưu lên GitHub” để ghi file này trực tiếp vào thư mục ngôn ngữ tương ứng trong ", homeContentSaveNotePost: ".",
    homeContentReloadNote: "Sau khi lưu, GitHub Pages sẽ tải lại thay đổi sau ít phút.",
    languageLabel: "Ngôn ngữ", livePreviewLabel: "Xem trước trực tiếp",
    personalWaySectionTitle: "Chỉnh sửa hành trình cá nhân",
    personalWaySaveNotePre: "Nhấn “Lưu lên GitHub” để ghi file này trực tiếp vào thư mục ngôn ngữ tương ứng trong ", personalWaySaveNotePost: ".",
    titleLabelRequired: "Tiêu đề *", image1Label: "Ảnh 1", image2Label: "Ảnh 2",
    markdownContentLabelRequired: "Nội dung markdown *", markdownContentLabel: "Nội dung markdown",
    previewLabel: "Xem trước", personalWayPreviewLabel: "Hành trình cá nhân",
    loadPostLabel: "Tải bài viết hoặc tạo mới", newPostOption: "Bài viết mới", knowledgeTag: "[Kiến thức]", projectTag: "[Dự án]", deleteButton: "Xóa",
    multilingualNoticeTitle: "Lưu bài viết đa ngôn ngữ",
    multilingualP1: "Dùng chung một ",
    multilingualP2: " cho tất cả các bản ngôn ngữ của cùng một bài viết. Khi lưu, hãy chọn đúng thư mục ",
    multilingualP3: ", không phải thư mục ngôn ngữ. Editor sẽ tự động đặt file vào ",
    multilingualP4: ", ", multilingualP5: " hoặc ", multilingualP6: ".",
    multilingualLocationIntro: "Vị trí lưu tùy theo ngôn ngữ và slug:",
    exportNote: "Khi bấm “Xuất MD”, file chỉ được tải về máy. Sau đó bạn cần tự chuyển vào đúng thư mục ngôn ngữ.",
    contentTypeLabel: "Loại nội dung", contentTypeProjectOption: "Bài viết dự án cho blog", contentTypeKnowledgeOption: "Kiến thức, tài liệu học tập hoặc nghiên cứu",
    categoryLabel: "Danh mục", titlePlaceholder: "Tiêu đề dự án", statusLabel: "Trạng thái",
    advancedToggleLabel: "Nâng cao (thường không cần)",
    translationIdLabel: "Translation ID", translationIdPlaceholder: "id-bai-viet-chung",
    translationIdAvailable: "Đã có: ", translationIdNone: "chưa có bản ngôn ngữ nào",
    slugLabel: "Slug", slugPlaceholder: "ten-du-an", sortOrderLabel: "Thứ tự",
    excerptLabel: "Mô tả ngắn *", mainImageLabel: "Ảnh chính",
    tagsLabel: "Tags, cách nhau bằng dấu phẩy", tagsPlaceholder: "ESP32, MQTT, IoT", readTimeLabel: "Thời gian đọc",
    externalLinkLabelKnowledge: "Nguồn ngoài hoặc liên kết tham khảo", externalLinkLabelProject: "Liên kết dự án bên ngoài",
    publishedLabel: "Đã xuất bản",
    blogCardLabel: "Thẻ blog", noMainImageText: "Chưa có ảnh chính", categoryPlaceholder: "Danh mục",
    titlePlaceholderPreview: "Tiêu đề bài viết", excerptPlaceholderPreview: "Mô tả ngắn của dự án", readPostButtonPreview: "Đọc bài viết",
    validationRequiredFields: "Tiêu đề, slug, mô tả ngắn và nội dung là các trường bắt buộc.",
    personalWayValidation: "Tiêu đề và nội dung là các trường bắt buộc.",
    deleteConfirm: (title, path) => `Xóa vĩnh viễn "${title}" khỏi GitHub (${path})?`,
    noTokenMessage: "Vui lòng nhập GitHub token trước.",
    tokenRemovedMessage: "Đã xóa GitHub token.", tokenSavedMessage: "Đã lưu GitHub token cục bộ trên trình duyệt này.",
    tokenTestFailedPrefix: "Kiểm tra token thất bại", noGithubDetails: "Không có thông tin chi tiết từ GitHub.",
    tokenWorksMessage: "Token hoạt động tốt. GitHub API có thể truy cập được.",
    githubBlockedMessage: "GitHub API bị trình duyệt chặn hoặc không thể truy cập. Hãy thử Chrome/Edge, kiểm tra tiện ích chặn quảng cáo/theo dõi, hoặc dùng Xuất MD thay thế.",
    githubBlockedMessageShort: "GitHub API bị trình duyệt chặn hoặc không thể truy cập. Hãy thử Chrome/Edge và kiểm tra tiện ích chặn quảng cáo/theo dõi.",
    savedFilesMessage: (count) => `Đã lưu ${count} file lên GitHub.`,
    githubSaveFailedGeneric: "Lưu lên GitHub thất bại.", noGithubTokenError: "Chưa có GitHub token.",
    fileUploadFailedPrefix: "Tải file lên thất bại", fileUploadedMessage: (url) => `Đã tải file lên: ${url}`,
    resumeLabel: "Sơ yếu lý lịch (PDF)", resumeButton: "Xem sơ yếu lý lịch", uploadingLabel: "Đang tải lên...",
    directorySaveUnsupported: "Trình duyệt này không hỗ trợ lưu trực tiếp. Vui lòng dùng Xuất MD.",
    wrongDirectoryAlert: "Vui lòng chọn đúng thư mục src/content, không phải thư mục ngôn ngữ như de, en hoặc vi.",
    directorySavedMessage: (name) => `Đã lưu ${name}.`,
    directorySaveFailedAlert: "Không thể lưu file. Vui lòng dùng Xuất MD.",
    orderSaveFailedAlert: "Không thể lưu thứ tự.",
    renameRemovedOldFile: (path) => ` Đã xóa file cũ ${path}.`,
    renameRemoveFailedNote: (path, err) => ` Lưu ý: không thể tự động xóa file cũ ${path} (${err}). Vui lòng tự xóa trên GitHub.`,
    postDeletedMessage: (path) => `Đã xóa ${path}.`,
    deleteFailedMessage: (err) => `Xóa thất bại: ${err}`,
    deployWaiting: "Đang xuất bản ... thường mất khoảng 1–2 phút.",
    deploySuccess: "Xong! Thay đổi đã hiển thị trực tiếp trên trang.",
    deployFailed: "Xuất bản thất bại.",
    deployTimeout: "Chưa có phản hồi từ GitHub. Vui lòng tự kiểm tra trang sau vài phút.",
    deployDetails: "Chi tiết", deployErrorDetails: "Xem lỗi", deploySeeSite: "Xem trang",
  },
};

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

const getStatusLabel = (s, language = "de") => ({
  de: { idea: "Idee", in_progress: "In Arbeit", done: "Umgesetzt" },
  en: { idea: "Concept", in_progress: "In progress", done: "Completed" },
  vi: { idea: "Ý tưởng", in_progress: "Đang thực hiện", done: "Hoàn thành" },
}[language]?.[normalizeStatus(s)] || normalizeStatus(s));

const getStatusClasses = (s) => ({
  idea: "border-zinc-500/30 bg-zinc-500/15 text-zinc-300",
  in_progress: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
  done: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
}[normalizeStatus(s)]);

const isIdea = (post) => normalizeStatus(post?.project_status) === "idea";

const formatDate = (date, language = "de") => {
  if (!date) return { de: "Kein Datum", en: "No date", vi: "Không có ngày" }[language];
  return new Intl.DateTimeFormat({ de: "de-DE", en: "en-US", vi: "vi-VN" }[language] || "de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(date));
};

const getCategoryIcon = (cat) => {
  const map = {
    IoT: RadioTower, Robotik: Bot, Messtechnik: Gauge,
    "Über mich": Globe, "Karriere & Weiterbildung": ShieldCheck,
    "WinCC & HMI": MonitorSmartphone, "Technische Erfahrungen": Wrench,
  };
  return map[cat] || Cpu;
};

const getCategoryLabel = (category, language = "de") => ({
  en: {
    Elektrotechnik: "Electrical Engineering",
    Maschinenbau: "Mechanical Engineering",
    "Über mich": "About Me",
    Softwareentwicklung: "Software Development",
    "SPS-Programmierung": "PLC Programming",
    Grundlagen: "Fundamentals",
    Robotik: "Robotics",
    Messtechnik: "Measurement Technology",
    "Karriere & Weiterbildung": "Career & Continuing Education",
    "Technische Erfahrungen": "Technical Experience",
  },
  vi: {
    Elektrotechnik: "Kỹ thuật điện",
    Maschinenbau: "Cơ khí",
    "Über mich": "Về tôi",
    Softwareentwicklung: "Phát triển phần mềm",
    "SPS-Programmierung": "Lập trình PLC",
    Grundlagen: "Kiến thức nền tảng",
    Robotik: "Robot",
    Messtechnik: "Kỹ thuật đo lường",
    "Karriere & Weiterbildung": "Sự nghiệp & Đào tạo nâng cao",
    "Technische Erfahrungen": "Kinh nghiệm kỹ thuật",
  },
}[language]?.[category] || category);

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
translation_id: ${singleLine(post.translation_id || post.slug)}
language: ${singleLine(post.language || "de")}
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
language: ${singleLine(personalWay.language || "de")}
title: ${singleLine(personalWay.title)}
image_1: ${singleLine(personalWay.image_1)}
image_2: ${singleLine(personalWay.image_2)}
---

${personalWay.content.trim()}
`;

const HOME_CONTENT_FIELDS = [
  ["hero_badge", "Hero: Badge"],
  ["hero_title", "Hero: Titel"],
  ["hero_text", "Hero: Text"],
  ["transparency_title", "Transparenz: Titel"],
  ["transparency_text", "Transparenz: Text"],
  ["transparency_strong", "Transparenz: Hervorgehobener Text"],
  ["feature_1_title", "Karte 1: Titel"],
  ["feature_1_text", "Karte 1: Text"],
  ["feature_2_title", "Karte 2: Titel"],
  ["feature_2_text", "Karte 2: Text"],
  ["feature_3_title", "Karte 3: Titel"],
  ["feature_3_text", "Karte 3: Text"],
  ["feature_4_title", "Karte 4: Titel"],
  ["feature_4_text", "Karte 4: Text"],
  ["warning_one", "Projekt-Hinweis: Absatz 1"],
  ["warning_two", "Projekt-Hinweis: Absatz 2"],
  ["collaboration_title", "Zusammenarbeit: Titel"],
  ["collaboration_text", "Zusammenarbeit: Text"],
  ["stat_1_value", "Kennzahl 1: Wert (leer = automatisch gezählt)"],
  ["stat_1_label", "Kennzahl 1: Beschriftung"],
  ["stat_2_value", "Kennzahl 2: Wert (leer = ausblenden)"],
  ["stat_2_label", "Kennzahl 2: Beschriftung"],
  ["stat_3_value", "Kennzahl 3: Wert (leer = ausblenden)"],
  ["stat_3_label", "Kennzahl 3: Beschriftung"],
  ["stat_4_value", "Kennzahl 4: Wert (leer = ausblenden)"],
  ["stat_4_label", "Kennzahl 4: Beschriftung"],
];

const HOME_CONTENT_FIELD_LABELS = {
  en: {
    hero_badge: "Hero: Badge", hero_title: "Hero: Title", hero_text: "Hero: Text",
    transparency_title: "Transparency: Title", transparency_text: "Transparency: Text", transparency_strong: "Transparency: Highlighted text",
    feature_1_title: "Card 1: Title", feature_1_text: "Card 1: Text",
    feature_2_title: "Card 2: Title", feature_2_text: "Card 2: Text",
    feature_3_title: "Card 3: Title", feature_3_text: "Card 3: Text",
    feature_4_title: "Card 4: Title", feature_4_text: "Card 4: Text",
    warning_one: "Project notice: Paragraph 1", warning_two: "Project notice: Paragraph 2",
    collaboration_title: "Collaboration: Title", collaboration_text: "Collaboration: Text",
    stat_1_value: "Figure 1: Value (empty = counted automatically)", stat_1_label: "Figure 1: Label",
    stat_2_value: "Figure 2: Value (empty = hide)", stat_2_label: "Figure 2: Label",
    stat_3_value: "Figure 3: Value (empty = hide)", stat_3_label: "Figure 3: Label",
    stat_4_value: "Figure 4: Value (empty = hide)", stat_4_label: "Figure 4: Label",
  },
  vi: {
    hero_badge: "Hero: Nhãn", hero_title: "Hero: Tiêu đề", hero_text: "Hero: Nội dung",
    transparency_title: "Minh bạch: Tiêu đề", transparency_text: "Minh bạch: Nội dung", transparency_strong: "Minh bạch: Đoạn nhấn mạnh",
    feature_1_title: "Thẻ 1: Tiêu đề", feature_1_text: "Thẻ 1: Nội dung",
    feature_2_title: "Thẻ 2: Tiêu đề", feature_2_text: "Thẻ 2: Nội dung",
    feature_3_title: "Thẻ 3: Tiêu đề", feature_3_text: "Thẻ 3: Nội dung",
    feature_4_title: "Thẻ 4: Tiêu đề", feature_4_text: "Thẻ 4: Nội dung",
    warning_one: "Lưu ý dự án: Đoạn 1", warning_two: "Lưu ý dự án: Đoạn 2",
    collaboration_title: "Hợp tác: Tiêu đề", collaboration_text: "Hợp tác: Nội dung",
    stat_1_value: "Số liệu 1: Giá trị (để trống = tự đếm)", stat_1_label: "Số liệu 1: Nhãn",
    stat_2_value: "Số liệu 2: Giá trị (để trống = ẩn)", stat_2_label: "Số liệu 2: Nhãn",
    stat_3_value: "Số liệu 3: Giá trị (để trống = ẩn)", stat_3_label: "Số liệu 3: Nhãn",
    stat_4_value: "Số liệu 4: Giá trị (để trống = ẩn)", stat_4_label: "Số liệu 4: Nhãn",
  },
};

const getHomeContentFieldLabel = (key, language) => HOME_CONTENT_FIELD_LABELS[language]?.[key]
  || HOME_CONTENT_FIELDS.find(([fieldKey]) => fieldKey === key)?.[1]
  || key;

const createHomeContentFile = (homeContent) => `---
type: home_content
language: ${singleLine(homeContent.language || "de")}
${HOME_CONTENT_FIELDS.map(([key]) => `${key}: ${singleLine(homeContent[key])}`).join("\n")}
---
`;

const createSiteSettingsFile = (siteSettings) => `---
type: site_settings
background_image: ${singleLine(siteSettings.background_image)}
resume_url: ${singleLine(siteSettings.resume_url)}
logo_image: ${singleLine(siteSettings.logo_image)}
logo_text: ${singleLine(siteSettings.logo_text)}
site_name: ${singleLine(siteSettings.site_name)}
hero_image: ${singleLine(siteSettings.hero_image)}
contact_email: ${singleLine(siteSettings.contact_email)}
live_tiles: ${singleLine(siteSettings.live_tiles)}
live_autoplay: ${singleLine(siteSettings.live_autoplay)}
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
  source_path: "",
  content_type: "project",
  translation_id: "",
  language: "de",
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
  source_path: post.source_path || "",
  content_type: post.content_type || "project",
  translation_id: post.translation_id || post.slug || "",
  language: post.language || "de",
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

const PERSONAL_WAY_TRANSLATIONS = {
  en: {
    title: "Nguyen Nhan Do - Learning technology. Gaining experience. Continuing to grow.",
    content: `I came to Germany in 2013 - not because my life in Vietnam was bad, but because I wanted to discover how far I could develop personally and professionally by leaving my comfort zone and starting again in a completely new environment.

My first years in Germany were mainly a time of arriving, learning and adapting. Alongside language courses, I worked in several fields, including hospitality, management and later self-employment.

After several years of varied professional experience, I consciously decided to return more strongly to technology and develop in electronics, measurement technology and automation over the long term.

In recent years, I have gained practical experience in calibration, troubleshooting, testing and the development of electronic systems while continuously expanding my technical knowledge.

I have also completed further training in PLC programming, C++/Qt, AutoCAD and EPLAN to deepen my knowledge and better understand new technical fields.

This blog primarily documents my technical projects, experience and learning processes. It is a place where I record knowledge, collect ideas and document my professional development over time.

All content is based on personal projects, independent learning and publicly accessible knowledge. Confidential information, internal documents or projects from current or former employers are not published.`,
  },
  vi: {
    title: "Nguyen Nhan Do - Học kỹ thuật. Tích lũy kinh nghiệm. Không ngừng phát triển.",
    content: `Tôi đến Đức vào năm 2013 - không phải vì cuộc sống ở Việt Nam không tốt, mà vì tôi muốn tìm hiểu mình có thể phát triển xa đến đâu về mặt cá nhân và nghề nghiệp khi rời khỏi vùng an toàn và bắt đầu lại trong một môi trường hoàn toàn mới.

Những năm đầu tại Đức chủ yếu là khoảng thời gian làm quen, học hỏi và thích nghi. Bên cạnh các khóa học ngôn ngữ, tôi đã làm việc trong nhiều lĩnh vực khác nhau, bao gồm nhà hàng, quản lý và sau đó là tự kinh doanh.

Sau nhiều năm tích lũy kinh nghiệm nghề nghiệp đa dạng, tôi chủ động quyết định quay trở lại định hướng kỹ thuật rõ ràng hơn và phát triển lâu dài trong lĩnh vực điện tử, đo lường và tự động hóa.

Trong những năm gần đây, tôi đã tích lũy kinh nghiệm thực tế về hiệu chuẩn, tìm lỗi, kiểm thử và phát triển hệ thống điện tử, đồng thời liên tục mở rộng kiến thức kỹ thuật.

Tôi cũng đã hoàn thành các khóa đào tạo về lập trình PLC, C++/Qt, AutoCAD và EPLAN để nâng cao kiến thức và hiểu rõ hơn các lĩnh vực kỹ thuật mới.

Blog này chủ yếu dùng để ghi lại các dự án kỹ thuật, kinh nghiệm và quá trình học tập của tôi. Tại đây, tôi lưu giữ kiến thức, tập hợp ý tưởng và ghi lại sự phát triển chuyên môn theo thời gian.

Tất cả nội dung đều dựa trên dự án cá nhân, quá trình tự học và kiến thức công khai. Thông tin bảo mật, tài liệu nội bộ hoặc dự án của công ty hiện tại hay trước đây tất nhiên không được công bố.`,
  },
};

const getPersonalWay = (language) => getLocalizedPersonalWay(language) || {
  ...PERSONAL_WAY,
  ...(PERSONAL_WAY_TRANSLATIONS[language] || {}),
};

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
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3">
            <button onClick={() => setCurrent(p => (p - 1 + images.length) % images.length)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white text-[#0B5A44] shadow-lg transition hover:bg-[#F2B279] hover:text-[#0F1A17]"><ChevronLeft className="h-5 w-5 stroke-[3]" /></button>
            <span className="rounded-full border border-white/70 bg-[#F2B279] px-4 py-2 text-sm font-extrabold tabular-nums text-[#0F1A17] shadow-lg">{current + 1} / {images.length}</span>
            <button onClick={() => setCurrent(p => (p + 1) % images.length)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white text-[#0B5A44] shadow-lg transition hover:bg-[#F2B279] hover:text-[#0F1A17]"><ChevronRight className="h-5 w-5 stroke-[3]" /></button>
          </div>
        )}
        <button onClick={onClose} className="absolute right-2 top-2 flex h-10 w-10 sm:-right-4 sm:-top-4 items-center justify-center rounded-full bg-[#0B5A44] text-white shadow-xl ring-2 ring-white transition hover:bg-[#083D2F]">
          <X className="h-5 w-5 stroke-[3]" />
        </button>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HEADER
// ─────────────────────────────────────────────
function AdminAccessPanel({ language = "de", onLanguageChange = () => {}, onAuthenticated, onBack }) {
  const [config, setConfig] = useState(() => readAdminConfig());
  const [mode, setMode] = useState(() => readAdminConfig() ? "login" : "setup");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newRecoveryCode, setNewRecoveryCode] = useState("");
  const [message, setMessage] = useState("");
  const isSetup = mode === "setup";
  const isForgot = mode === "forgot";
  const t = ADMIN_TEXT[language] || ADMIN_TEXT.de;

  const resetFields = () => {
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setRecoveryCode("");
    setMessage("");
  };

  const completeAuth = () => {
    setAdminSession(true);
    onAuthenticated();
  };

  const saveNewPassword = async (plainPassword) => {
    const salt = createAdminSalt();
    const recovery = createRecoveryCode();
    const nextConfig = {
      salt,
      passwordHash: await hashAdminSecret(plainPassword, salt),
      recoveryHash: await hashAdminSecret(recovery, salt),
      updatedAt: new Date().toISOString(),
    };

    saveAdminConfig(nextConfig);
    setConfig(nextConfig);
    setNewRecoveryCode(recovery);
  };

  const handleSetup = async (event) => {
    event.preventDefault();
    if (newPassword.length < 8) {
      setMessage(t.passwordTooShort);
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage(t.confirmMismatch);
      return;
    }

    await saveNewPassword(newPassword);
    resetFields();
    setMessage(t.setupDone);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!config) {
      setMode("setup");
      return;
    }

    const passwordHash = await hashAdminSecret(password, config.salt);
    if (passwordHash !== config.passwordHash) {
      setMessage(t.wrongPassword);
      return;
    }

    completeAuth();
  };

  const handleForgot = async (event) => {
    event.preventDefault();
    if (!config) {
      setMode("setup");
      return;
    }
    if (newPassword.length < 8) {
      setMessage(t.newPasswordTooShort);
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage(t.confirmMismatch);
      return;
    }

    const recoveryHash = await hashAdminSecret(recoveryCode.trim(), config.salt);
    if (recoveryHash !== config.recoveryHash) {
      setMessage(t.wrongRecovery);
      return;
    }

    await saveNewPassword(newPassword);
    resetFields();
    setMode("login");
    setMessage(t.passwordChanged);
  };

  const resetLocalAdmin = () => {
    window.localStorage.removeItem(ADMIN_AUTH_KEY);
    setAdminSession(false);
    setConfig(null);
    setNewRecoveryCode("");
    resetFields();
    setMode("setup");
    setMessage(t.localReset);
  };

  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <Background />
      <main className="mx-auto flex min-h-screen max-w-5xl items-center px-4 py-24 sm:px-5">
        <section className="w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f]/95 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex justify-end border-b border-white/10 px-6 py-4 sm:px-8">
            <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
              {LANGUAGES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => onLanguageChange(item)}
                  className={`rounded-full px-3 py-1.5 text-xs font-black uppercase transition ${language === item ? "bg-cyan-400 text-black" : "text-zinc-400 hover:text-white"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                <LockKeyhole className="h-6 w-6" />
              </div>
              <h1 className="mt-5 text-2xl font-black sm:text-4xl">{t.title}</h1>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                {t.intro}
              </p>
              <p className="mt-4 rounded-2xl border border-yellow-300/25 bg-yellow-300/10 p-4 text-sm leading-6 text-yellow-100">
                {t.notice}
              </p>
              <button type="button" onClick={onBack} className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-white">
                <ArrowLeft className="h-4 w-4" /> {t.backBlog}
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {newRecoveryCode ? (
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-cyan-300">{t.recoveryCode}</p>
                    <h2 className="mt-2 text-xl font-black">{t.saveRecovery}</h2>
                  </div>
                  <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-4 font-mono text-sm font-bold text-emerald-100 sm:text-base">
                    {newRecoveryCode}
                  </div>
                  <button type="button" onClick={completeAuth} className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-black text-slate-950 transition hover:bg-white">
                    <LogIn className="h-4 w-4" /> {t.enterAdmin}
                  </button>
                </div>
              ) : (
                <form onSubmit={isSetup ? handleSetup : isForgot ? handleForgot : handleLogin} className="space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-cyan-300">
                      {isSetup ? t.firstSetup : isForgot ? t.forgotPassword : t.adminAuth}
                    </p>
                    <h2 className="mt-2 text-xl font-black">
                      {isSetup ? t.createPasswordTitle : isForgot ? t.resetPasswordTitle : t.loginTitle}
                    </h2>
                  </div>

                  {!isSetup && !isForgot && (
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase text-zinc-400">{t.password}</label>
                      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" autoFocus />
                    </div>
                  )}

                  {(isSetup || isForgot) && (
                    <>
                      {isForgot && (
                        <div>
                          <label className="mb-2 block text-xs font-bold uppercase text-zinc-400">{t.recoveryCodeLabel}</label>
                          <input value={recoveryCode} onChange={(event) => setRecoveryCode(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" placeholder="ADMIN-XXXXXX-XXXXXX-XXXXXX" />
                        </div>
                      )}
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-zinc-400">{t.newPassword}</label>
                        <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase text-zinc-400">{t.confirmPassword}</label>
                        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" />
                      </div>
                    </>
                  )}

                  {message && <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">{message}</p>}

                  <div className="flex flex-wrap gap-3">
                    <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-black text-slate-950 transition hover:bg-white">
                      {isForgot ? <KeyRound className="h-4 w-4" /> : <LogIn className="h-4 w-4" />}
                      {isSetup ? t.createPassword : isForgot ? t.resetPassword : t.login}
                    </button>
                    {!isSetup && (
                      <button type="button" onClick={() => { resetFields(); setMode(isForgot ? "login" : "forgot"); }} className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-white">
                        {isForgot ? t.backLogin : t.forgot}
                      </button>
                    )}
                    {isForgot && (
                      <button type="button" onClick={resetLocalAdmin} className="rounded-xl border border-red-300/20 px-5 py-3 text-sm font-bold text-red-100 transition hover:bg-red-300/10">
                        {t.resetLocal}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AdminPasswordModal({ onClose, language = "de" }) {
  const t = ADMIN_TEXT[language] || ADMIN_TEXT.de;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [message, setMessage] = useState("");

  const changePassword = async (event) => {
    event.preventDefault();
    const config = readAdminConfig();
    if (!config) {
      setMessage(t.noAdminConfig);
      return;
    }
    if (newPassword.length < 8) {
      setMessage(t.newPasswordTooShort);
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage(t.confirmMismatch);
      return;
    }

    const currentHash = await hashAdminSecret(currentPassword, config.salt);
    if (currentHash !== config.passwordHash) {
      setMessage(t.currentPasswordWrong);
      return;
    }

    const salt = createAdminSalt();
    const nextRecoveryCode = createRecoveryCode();
    saveAdminConfig({
      salt,
      passwordHash: await hashAdminSecret(newPassword, salt),
      recoveryHash: await hashAdminSecret(nextRecoveryCode, salt),
      updatedAt: new Date().toISOString(),
    });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setRecoveryCode(nextRecoveryCode);
    setMessage(t.passwordChanged);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <form onSubmit={changePassword} className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#07111f] p-6 text-white shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-cyan-300">Admin</p>
            <h2 className="mt-1 text-xl font-black">{t.changePasswordTitle}</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-xl border border-white/10 p-2 text-zinc-300 hover:bg-white/10"><X className="h-4 w-4" /></button>
        </div>
        <div className="mt-5 grid gap-4">
          <input type="password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} placeholder={t.currentPassword} className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" />
          <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder={t.newPassword} className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" />
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder={t.confirmPassword} className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" />
          {recoveryCode && <div className="rounded-xl border border-emerald-300/25 bg-emerald-300/10 p-3 font-mono text-sm font-bold text-emerald-100">{recoveryCode}</div>}
          {message && <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">{message}</p>}
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-black text-slate-950 transition hover:bg-white">
            <Save className="h-4 w-4" /> {t.savePasswordButton}
          </button>
        </div>
      </form>
    </div>
  );
}

function SiteHeader({ onNavigate, currentPage, language = "de", onLanguageChange = () => {}, onAdminAccess = null, isAdminAuthenticated = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = getUiText(language);
  const w = getWbText(language);
  const site = getSiteConfig();

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (currentPage !== "home") { onNavigate("home"); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100); }
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => { setMenuOpen(false); onNavigate("home"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goKnowledge = () => { setMenuOpen(false); onNavigate("knowledge"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const navItems = [["projekte", w.nav_projects], ["kompetenzen", w.nav_skills], ["weg", w.nav_path], ["kontakt", w.nav_contact]];
  const langButton = (item, compact) => (
    <button key={item} type="button" onClick={() => onLanguageChange(item)} className={`${compact ? "rounded-lg px-3 py-1.5 text-xs" : "rounded-full px-2.5 py-1 text-[11px]"} font-black uppercase transition ${language === item ? "bg-[#0B5A44] text-white" : "text-[#4A5A54] hover:text-[#0F1A17]"}`}>{item}</button>
  );

  return (
    <header className="wb fixed top-0 left-0 right-0 z-50 border-b border-[#C9D3CD] bg-[#F3F5F2]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5">
        <button type="button" onClick={goHome} className="flex items-center gap-3 text-left">
          {site.logoImage
            ? <img src={site.logoImage} alt={site.siteName} className="h-10 w-10 rounded-lg object-contain sm:h-11 sm:w-11" />
            : <span className="wb-head flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B5A44] text-sm font-bold tracking-tight text-white sm:h-11 sm:w-11">{site.logoText}</span>}
          <div>
            <p className="wb-head text-base font-bold text-[#0F1A17] sm:text-lg">{site.siteName}</p>
            <p className="text-[10px] leading-tight text-[#4A5A54] sm:text-xs">{t.tagline}</p>
          </div>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([id, label]) => (
            <button key={id} type="button" onClick={() => scrollTo(id)} className="text-sm font-medium text-[#33423C] transition hover:text-[#0B5A44]">{label}</button>
          ))}
          <button type="button" onClick={goKnowledge} className="inline-flex items-center gap-2 rounded-full border border-[#C9D3CD] bg-white px-4 py-2 text-sm font-bold text-[#0F1A17] transition hover:border-[#0B5A44]">
            <BookOpen className="h-4 w-4" /> {t.knowledge}
          </button>
          <div className="flex rounded-full border border-[#C9D3CD] bg-white p-1">
            {LANGUAGES.map((item) => langButton(item, false))}
          </div>
          {onAdminAccess && (
            <button type="button" onClick={() => { setMenuOpen(false); onAdminAccess(); }} className="inline-flex items-center gap-2 rounded-full border border-[#0B5A44]/30 bg-[#0B5A44]/10 px-4 py-2 text-sm font-bold text-[#0B5A44] transition hover:bg-[#0B5A44]/20">
              <LogIn className="h-4 w-4" /> {isAdminAuthenticated ? "Admin" : "Login"}
            </button>
          )}
        </div>

        <button type="button" aria-label="Menu" className="rounded-xl border border-[#C9D3CD] bg-white p-2 text-[#0F1A17] md:hidden" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#C9D3CD] bg-[#F3F5F2] px-5 py-4 text-[#0F1A17] md:hidden">
          <div className="grid gap-2">
            {navItems.map(([id, label]) => (
              <button key={id} type="button" onClick={() => scrollTo(id)} className="rounded-xl px-3 py-2 text-left text-[#0F1A17] hover:bg-white">{label}</button>
            ))}
            <button type="button" onClick={goKnowledge} className="mt-2 inline-flex items-center gap-2 rounded-xl border border-[#C9D3CD] bg-white px-3 py-2 text-left font-bold">
              <BookOpen className="h-4 w-4" /> {t.knowledge}
            </button>
            {onAdminAccess && (
              <button type="button" onClick={() => { setMenuOpen(false); onAdminAccess(); }} className="mt-2 inline-flex items-center gap-2 rounded-xl border border-[#0B5A44]/30 bg-[#0B5A44]/10 px-3 py-2 text-left font-bold text-[#0B5A44]">
                <LogIn className="h-4 w-4" /> {isAdminAuthenticated ? "Admin" : "Login"}
              </button>
            )}
            <div className="mt-2 flex w-fit rounded-xl border border-[#C9D3CD] bg-white p-1">
              {LANGUAGES.map((item) => langButton(item, true))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ─────────────────────────────────────────────
// POST DETAIL PAGE (trang riêng)
// ─────────────────────────────────────────────
const WB_MD = {
  h1: ({ children }) => <h2 className="wb-head mb-4 mt-10 text-2xl font-bold text-[#0F1A17] sm:text-3xl">{children}</h2>,
  h2: ({ children }) => <h3 className="wb-head mb-3 mt-8 text-xl font-bold text-[#0B5A44] sm:text-2xl">{children}</h3>,
  h3: ({ children }) => <h4 className="wb-head mb-2 mt-6 text-lg font-bold text-[#0F1A17]">{children}</h4>,
  p: ({ children }) => <p className="mb-4">{children}</p>,
  ul: ({ children }) => <ul className="mb-5 ml-6 list-disc space-y-2 marker:text-[#A8540F]">{children}</ul>,
  ol: ({ children }) => <ol className="mb-5 ml-6 list-decimal space-y-2 marker:font-semibold marker:text-[#0B5A44]">{children}</ol>,
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => <strong className="font-bold text-[#0F1A17]">{children}</strong>,
  hr: () => <hr className="my-8 border-[#D5DDD8]" />,
  table: ({ children }) => <div className="mb-6 overflow-x-auto rounded-xl border border-[#C9D3CD]"><table className="w-full min-w-[420px] border-collapse text-left text-sm leading-6">{children}</table></div>,
  thead: ({ children }) => <thead className="bg-[#E1F0E8] text-[#083D2F]">{children}</thead>,
  th: ({ children }) => <th className="border-b border-[#C9D3CD] px-4 py-2.5 font-bold">{children}</th>,
  td: ({ children }) => <td className="border-t border-[#E3E9E5] px-4 py-2.5 align-top">{children}</td>,
  blockquote: ({ children }) => <blockquote className="mb-5 border-l-4 border-[#A8540F] bg-[#F3F5F2] px-5 py-3 text-[#33423C]">{children}</blockquote>,
  a: ({ children, href }) => <a href={href} target={String(href || "").startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="font-semibold text-[#0B5A44] underline decoration-[#0B5A44]/40 underline-offset-4 hover:text-[#083D2F]">{children}</a>,
  code: ({ children }) => <code className="wb-mono rounded-md border border-[#D5DDD8] bg-[#F3F5F2] px-1.5 py-0.5 text-[0.9em] text-[#083D2F]">{children}</code>,
  pre: ({ children }) => <pre className="wb-mono mb-5 overflow-x-auto rounded-xl border border-[#C9D3CD] bg-[#F3F5F2] p-4 text-sm leading-7 text-[#0F1A17]">{children}</pre>,
};

function WbBackButton({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9D3CD] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F1A17] transition hover:border-[#0B5A44] hover:text-[#0B5A44]">
      <ArrowLeft className="h-4 w-4" /> {children}
    </button>
  );
}

function PostDetailPage({ post, onBack, language }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const gallery = normalizeImageList(post.image_gallery);
  const allImages = [post.image_url, ...gallery];
  const t = getUiText(language);
  const w = getWbText(language);
  const idea = isIdea(post);
  const statusPill = getWbPill(post, w, language);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [post.id]);

  return (
    <div className="wb min-h-screen">
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-[96px] sm:px-5 sm:pt-[104px]">
        <WbBackButton onClick={onBack}>{t.backBlog}</WbBackButton>

        <article className="overflow-hidden rounded-3xl border border-[#C9D3CD] bg-white shadow-[0_30px_60px_-44px_rgba(11,90,68,0.45)]">
          <div className="relative bg-[#E9EEEA]">
            <img src={post.image_url} alt={post.title} onClick={() => setLightboxIndex(0)}
              className={`h-64 w-full cursor-zoom-in object-cover sm:h-80 lg:h-[420px] ${idea ? "grayscale opacity-80" : ""}`} />
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <span className="wb-mono rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0F1A17] shadow-sm">{getCategoryLabel(post.category, language)}</span>
              <span className={`rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-sm ${statusPill.cls}`}>{statusPill.label}</span>
            </div>
          </div>

          {gallery.length > 0 && (
            <div className="border-b border-[#E3E9E5] px-5 pb-6 pt-6 sm:px-8 lg:px-10">
              <p className="wb-mono mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#A8540F]">{t.projectImages}</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.map((url, i) => (
                  <img key={url} src={url} alt={`${t.image} ${i + 1}`} onClick={() => setLightboxIndex(i + 1)}
                    className="h-36 w-full cursor-zoom-in rounded-xl border border-[#D5DDD8] object-cover transition hover:brightness-105" />
                ))}
              </div>
            </div>
          )}

          <div className="p-5 sm:p-8 lg:p-10">
            {post.is_translation_fallback && (
              <p className="mb-5 rounded-xl border border-[#E8CB6B] bg-[#FFF1BF] px-4 py-3 text-sm leading-6 text-[#6B5200]">{t.translationFallback}</p>
            )}
            <div className="mb-5 flex flex-wrap gap-4 text-xs text-[#4A5A54]">
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{formatDate(post.created_at, language)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.read_time || "5 Min."}</span>
            </div>

            <h1 className="wb-head text-3xl font-bold leading-tight text-[#0F1A17] sm:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-5 border-l-4 border-[#A8540F] pl-4 text-base font-medium leading-8 text-[#33423C] sm:text-lg">{post.excerpt}</p>

            <div className="mt-8 max-w-3xl text-[15px] leading-8 text-[#33423C] sm:text-base sm:leading-9">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={WB_MD}>{post.content}</ReactMarkdown>
            </div>

            {!!(Array.isArray(post.tags) ? post.tags : []).length && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => <span key={tag} className="wb-mono rounded-md border border-[#D5DDD8] bg-[#F3F5F2] px-2.5 py-1 text-xs text-[#33423C]">{tag}</span>)}
              </div>
            )}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {post.external_link && !idea ? (
                <a href={post.external_link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B5A44] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#083D2F]">
                  {t.openProject} <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center justify-center rounded-xl border border-[#C9D3CD] bg-[#F3F5F2] px-6 py-3.5 text-sm font-medium text-[#4A5A54]">
                  {idea ? t.conceptProject : t.noProjectLink}
                </span>
              )}
              <button type="button" onClick={onBack}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0F1A17] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F1A17] transition hover:bg-[#0F1A17] hover:text-white">
                <ArrowLeft className="h-4 w-4" /> {t.backBlog}
              </button>
            </div>
          </div>
        </article>
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
function KnowledgePage({ posts, onOpenPost, getPostUrl, language }) {
  const POSTS_PER_PAGE = 10;
  const t = getUiText(language);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("__all__");
  const [currentPage, setCurrentPage] = useState(1);
  const categories = useMemo(() => [...new Set(posts.map((post) => post.category))], [posts]);
  const filteredPosts = useMemo(() => posts.filter((post) => {
    const matchesCategory = category === "__all__" || post.category === category;
    const haystack = `${post.title} ${post.excerpt} ${(post.tags || []).join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(search.toLowerCase());
  }), [posts, search, category]);
  const featuredPost = filteredPosts[0];
  const listPosts = filteredPosts.slice(1);
  const totalPages = Math.max(1, Math.ceil(listPosts.length / POSTS_PER_PAGE));
  const paginatedPosts = listPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
  const openLink = (post) => (event) => {
    if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      onOpenPost(post.id);
    }
  };

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  useEffect(() => { setCurrentPage(1); }, [search, category]);

  return (
    <div className="wb min-h-screen">
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-[96px] sm:px-5 sm:pt-[104px]">
        <section className="relative overflow-hidden rounded-3xl border border-[#C9D3CD] bg-white px-5 py-8 sm:px-10 sm:py-12">
          <div className="wb-grid wb-grid-fade absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <span className="wb-mono inline-flex items-center gap-2 rounded-full border border-[#C9D3CD] bg-white px-3.5 py-1.5 text-xs font-medium text-[#0B5A44]">
              <Library className="h-3.5 w-3.5" /> {t.knowledgeLibrary}
            </span>
            <h1 className="wb-head mt-5 text-3xl font-bold leading-tight text-[#0F1A17] sm:text-5xl">{t.knowledgeTitle}</h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#33423C] sm:text-base">{t.knowledgeIntro}</p>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-[#C9D3CD] bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E1F0E8] text-[#0B5A44]"><BookOpen className="h-5 w-5" /></div>
            <div>
              <h2 className="wb-head font-bold text-[#0F1A17]">{t.knowledgeNotice}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-[#33423C]">
                {t.knowledgeNoticeParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A5A54]" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t.knowledgeSearch} className="w-full rounded-full border border-[#C9D3CD] bg-white py-3 pl-11 pr-4 text-sm text-[#0F1A17] outline-none placeholder:text-[#66756F] focus:border-[#0B5A44] focus:ring-4 focus:ring-[#0B5A44]/15" />
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-full border border-[#C9D3CD] bg-white px-5 py-3 text-sm text-[#0F1A17] outline-none focus:border-[#0B5A44] focus:ring-4 focus:ring-[#0B5A44]/15">
            <option value="__all__">{t.allTopics}</option>
            {categories.map((item) => <option key={item} value={item}>{getCategoryLabel(item, language)}</option>)}
          </select>
        </section>

        {!featuredPost ? (
          <section className="mt-8 rounded-2xl border border-dashed border-[#C9D3CD] bg-white px-5 py-16 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-[#0B5A44]" />
            <h2 className="wb-head mt-4 text-xl font-bold">{t.noKnowledge}</h2>
            <p className="mt-2 text-sm text-[#4A5A54]">{t.noKnowledgeText}</p>
          </section>
        ) : (
          <>
            <section className="mt-8">
              <p className="wb-mono mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A8540F]">{t.selectedPost}</p>
              <a href={getPostUrl(featuredPost.id)} onClick={openLink(featuredPost)} className="group grid w-full overflow-hidden rounded-3xl border border-[#C9D3CD] bg-white text-left transition hover:border-[#0B5A44] hover:shadow-[0_22px_44px_-26px_rgba(11,90,68,0.55)] lg:grid-cols-[0.42fr_0.58fr]">
                <div className="h-56 overflow-hidden bg-[#E9EEEA] lg:h-auto">
                  {featuredPost.image_url ? <img src={featuredPost.image_url} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><FlaskConical className="h-14 w-14 text-[#0B5A44]/50" /></div>}
                </div>
                <div className="p-5 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#4A5A54]">
                    <span className="wb-mono rounded-full bg-[#E1F0E8] px-3 py-1 font-semibold uppercase tracking-wider text-[#0B5A44]">{getCategoryLabel(featuredPost.category, language)}</span>
                    {featuredPost.is_translation_fallback && <span className="rounded-full bg-[#FFF1BF] px-3 py-1 font-semibold text-[#6B5200]">{t.translationFallbackShort}</span>}
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featuredPost.read_time || "5 Min."}</span>
                  </div>
                  <h2 className="wb-head mt-4 text-2xl font-bold leading-tight text-[#0F1A17] sm:text-3xl">{featuredPost.title}</h2>
                  <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-[#33423C]">{featuredPost.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B5A44]">{t.readPost} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </div>
              </a>
            </section>

            {listPosts.length > 0 && <section className="mt-10">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div><p className="wb-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#A8540F]">{t.archive}</p><h2 className="wb-head mt-2 text-2xl font-bold">{t.morePosts}</h2></div>
                <span className="text-sm text-[#4A5A54]">{filteredPosts.length} {t.posts}</span>
              </div>
              <div className="grid gap-3">
                {paginatedPosts.map((post) => (
                  <a key={post.id} href={getPostUrl(post.id)} onClick={openLink(post)} className="group grid gap-4 rounded-2xl border border-[#C9D3CD] bg-white p-4 text-left transition hover:border-[#0B5A44] sm:grid-cols-[140px_1fr_auto] sm:items-center">
                    <div className="hidden h-24 overflow-hidden rounded-xl bg-[#E9EEEA] sm:block">
                      {post.image_url ? <img src={post.image_url} alt="" className="h-full w-full object-cover transition group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><GraduationCap className="h-8 w-8 text-[#0B5A44]/50" /></div>}
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 text-xs text-[#4A5A54]"><span className="font-bold text-[#0B5A44]">{getCategoryLabel(post.category, language)}</span><span>{formatDate(post.created_at, language)}</span><span>{post.read_time || "5 Min."}</span></div>
                      {post.is_translation_fallback && <span className="mt-2 inline-flex rounded-full bg-[#FFF1BF] px-2.5 py-1 text-xs font-semibold text-[#6B5200]">{t.translationFallbackShort}</span>}
                      <h3 className="wb-head mt-2 text-lg font-bold leading-tight text-[#0F1A17]">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#33423C]">{post.excerpt}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-[#0B5A44] sm:block" />
                  </a>
                ))}
              </div>
              {totalPages > 1 && <div className="mt-6 flex justify-center gap-2">{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button key={number} type="button" onClick={() => setCurrentPage(number)} className={`h-10 w-10 rounded-xl text-sm font-bold ${currentPage === number ? "bg-[#0B5A44] text-white" : "border border-[#C9D3CD] bg-white text-[#33423C]"}`}>{number}</button>)}</div>}
            </section>}
          </>
        )}
      </main>
    </div>
  );
}

function KnowledgeDetailPage({ post, onBack, language }) {
  const t = getUiText(language);
  useEffect(() => { window.scrollTo({ top: 0 }); }, [post.id]);
  return (
    <div className="wb min-h-screen">
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-[96px] sm:px-5 sm:pt-[104px]">
        <WbBackButton onClick={onBack}>{t.backKnowledge}</WbBackButton>
        <article className="overflow-hidden rounded-3xl border border-[#C9D3CD] bg-white shadow-[0_30px_60px_-44px_rgba(11,90,68,0.45)]">
          {post.image_url && <img src={post.image_url} alt={post.title} className="h-56 w-full object-cover sm:h-80" />}
          <div className="p-5 sm:p-8 lg:p-10">
            {post.is_translation_fallback && (
              <p className="mb-5 rounded-xl border border-[#E8CB6B] bg-[#FFF1BF] px-4 py-3 text-sm leading-6 text-[#6B5200]">{t.translationFallback}</p>
            )}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#4A5A54]">
              <span className="wb-mono rounded-full bg-[#E1F0E8] px-3 py-1 font-semibold uppercase tracking-wider text-[#0B5A44]">{getCategoryLabel(post.category, language)}</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.created_at, language)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.read_time || "5 Min."}</span>
            </div>
            <h1 className="wb-head mt-5 text-3xl font-bold leading-tight text-[#0F1A17] sm:text-5xl">{post.title}</h1>
            <p className="mt-5 border-l-4 border-[#A8540F] pl-4 text-base font-medium leading-8 text-[#33423C] sm:text-lg">{post.excerpt}</p>
            <div className="mt-8 text-[15px] leading-8 text-[#33423C] sm:text-base sm:leading-9">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={WB_MD}>{post.content}</ReactMarkdown>
            </div>
            {post.external_link && <a href={post.external_link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0B5A44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#083D2F]">{t.externalSource} <ExternalLink className="h-4 w-4" /></a>}
          </div>
        </article>
      </main>
    </div>
  );
}

function DropUpload({ label, hint, subfolder, accept = "image/*", icon: Icon = Upload, uploadImage, onUploaded, multiple = false, busyLabel = "...", compact = false, className = "" }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);

  const accepts = (file) => (accept === "image/*" ? file.type.startsWith("image/") : accept.split(",").some((type) => file.type === type.trim()));

  const handleFiles = async (fileList) => {
    const files = Array.from(fileList || []).filter(accepts);
    if (!files.length || busy) return;

    setBusy(true);
    try {
      for (const file of multiple ? files : files.slice(0, 1)) {
        const url = await uploadImage(file, subfolder);
        if (url) onUploaded(url);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(event) => {
          const files = event.target.files;
          handleFiles(files);
          event.target.value = "";
        }}
      />
      <button
        type="button"
        disabled={busy}
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => { event.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(event) => { event.preventDefault(); setOver(false); handleFiles(event.dataTransfer.files); }}
        className={`flex w-full flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed text-center text-sm font-bold transition disabled:cursor-wait disabled:opacity-60 ${compact ? "px-3 py-3" : "px-4 py-5"} ${over ? "border-cyan-300 bg-cyan-300/10 text-cyan-100" : "border-white/15 text-zinc-300 hover:border-cyan-300/60 hover:text-white"} ${className}`}
      >
        <Icon className="h-5 w-5 text-cyan-300" />
        <span>{busy ? busyLabel : label}</span>
        {hint && !busy && <span className="text-xs font-normal text-zinc-500">{hint}</span>}
      </button>
    </>
  );
}

function DeployStatusBanner({ state, onDismiss, language = "de" }) {
  if (!state) return null;

  const t = EDITOR_TEXT[language] || EDITOR_TEXT.de;
  const isFailed = state.status === "failed";
  const isSuccess = state.status === "success";
  const isTimeout = state.status === "timeout";
  const isDone = isFailed || isSuccess;

  const Icon = isFailed ? AlertTriangle : isSuccess ? ShieldCheck : Clock;
  const label = isFailed
    ? t.deployFailed
    : isTimeout
      ? t.deployTimeout
      : isSuccess
        ? t.deploySuccess
        : t.deployWaiting;

  const tone = isFailed
    ? "border-red-400/30 bg-red-400/10 text-red-100"
    : isSuccess
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
      : "border-cyan-400/30 bg-cyan-400/10 text-cyan-100";

  return (
    <div className={`mx-auto flex max-w-7xl items-center gap-3 border-t px-4 py-2.5 text-sm font-bold sm:px-5 ${tone}`}>
      <Icon className={`h-4 w-4 shrink-0 ${isDone ? "" : "animate-pulse"}`} />
      <span className="flex-1">{label}</span>
      {state.url && (
        <a href={state.url} target="_blank" rel="noopener noreferrer" className="shrink-0 underline underline-offset-4 hover:text-white">
          {isFailed ? t.deployErrorDetails : t.deployDetails}
        </a>
      )}
      {isSuccess && (
        <a href={`https://${GITHUB_REPO_OWNER}.github.io/${GITHUB_REPO_NAME}/`} target="_blank" rel="noopener noreferrer" className="shrink-0 underline underline-offset-4 hover:text-white">
          {t.deploySeeSite}
        </a>
      )}
      <button type="button" onClick={onDismiss} className="shrink-0 rounded-lg p-1 hover:bg-white/10"><X className="h-3.5 w-3.5" /></button>
    </div>
  );
}

const ALL_TEXT_KEYS = [...WB_TEXT_GROUPS, ...UI_TEXT_GROUPS].flatMap(([, keys]) => keys);

const createSiteTextsFile = (draft, language) => `---
type: site_texts
language: ${language}
${ALL_TEXT_KEYS.filter((key) => String(draft[key] || "").trim()).map((key) => `${key}: ${singleLine(String(draft[key]).trim())}`).join("\n")}
---
`;

const normalizeTextDraft = (draft) => Object.fromEntries(
  ALL_TEXT_KEYS.filter((key) => String(draft?.[key] || "").trim()).map((key) => [key, String(draft[key]).trim()]),
);

// Beschriftungen der Admin-Bereiche „Website-Texte“ sowie „Logo & Website“ (de / en / vi).
const SITE_TEXT_UI = {
  de: {
    nav: "Website-Texte", sub: "Alle Beschriftungen der Website ändern. Leer lassen = Standardtext",
    hint: "Jedes Feld zeigt den Standardtext grau an. Nur ausgefüllte Felder ersetzen ihn. Mit „Zurücksetzen“ gilt wieder der Standard.",
    search: "Feld oder Text suchen…", reset: "Zurücksetzen", none: "Keine passenden Felder.",
    groups: { groupNav: "Menü", groupHero: "Kopfbereich: Schaltflächen und Hinweise", groupProjects: "Projekte", groupLive: "Live und zum Ausprobieren", groupSkills: "Kompetenzen (Listen mit Komma getrennt)", groupPath: "Mein Weg (Zeitleiste)", groupKnowledge: "Wissen und Forschung (Startseite)", groupContact: "Kontakt und Fußzeile", groupSite: "Allgemein", groupPostPage: "Projektseite", groupKnowledgePage: "Wissensbibliothek", groupContactInfo: "Kontakt-Angaben", groupLegal: "Rechtliches und Zurück", groupCookie: "Datenschutzhinweis (Cookie-Banner)" },
    logoTitle: "Logo und Name", logoImage: "Logo-Bild", logoImageHint: "Leer = Textlogo", logoText: "Text im Logo (ohne Bild)", siteName: "Name in der Kopfzeile", logoRemove: "Logo-Bild entfernen",
    heroTitle: "Porträt im Kopfbereich", heroRemove: "Standardbild verwenden",
    contactTitle: "Kontakt und Live-Kacheln", contactEmail: "Kontakt-E-Mail", liveTiles: "Live-Kacheln (ID oder ID|Kurzname, mit Komma getrennt)", liveAutoplay: "Live-Kacheln langsam automatisch weiterlaufen lassen (6 Sekunden, stoppt bei Mausberührung)", liveTilesHint: "Die ID steht im Beitrag unter „Erweitert“ (gemeinsame Beitrags-ID). Mit „ID|Kurzname“ legen Sie den angezeigten Namen fest, zum Beispiel local-post-1779957810945|GeldPilot. Reihenfolge = Reihenfolge auf der Startseite.",
    legalNote: "Impressum und Datenschutzerklärung sind rechtliche Texte und stehen fest im Programm.",
  },
  en: {
    nav: "Website texts", sub: "Change every label on the website. Empty = default text",
    hint: "Each field shows the default text in grey. Only filled-in fields replace it. \"Reset\" brings the default back.",
    search: "Search field or text…", reset: "Reset", none: "No matching fields.",
    groups: { groupNav: "Menu", groupHero: "Hero: buttons and notes", groupProjects: "Projects", groupLive: "Live and ready to try", groupSkills: "Skills (comma-separated lists)", groupPath: "My path (timeline)", groupKnowledge: "Knowledge and research (home page)", groupContact: "Contact and footer", groupSite: "General", groupPostPage: "Project page", groupKnowledgePage: "Knowledge library", groupContactInfo: "Contact details", groupLegal: "Legal and back", groupCookie: "Privacy notice (cookie banner)" },
    logoTitle: "Logo and name", logoImage: "Logo image", logoImageHint: "Empty = text logo", logoText: "Text in the logo (without image)", siteName: "Name in the header", logoRemove: "Remove logo image",
    heroTitle: "Portrait in the hero", heroRemove: "Use the default image",
    contactTitle: "Contact and live tiles", contactEmail: "Contact e-mail", liveTiles: "Live tiles (ID or ID|short name, comma-separated)", liveAutoplay: "Let the live tiles advance slowly by themselves (6 seconds, stops on mouse-over)", liveTilesHint: "The ID is shown in the post under \"Advanced\" (shared post ID). With \"ID|short name\" you set the displayed name, for example local-post-1779957810945|GeldPilot. Order = order on the home page.",
    legalNote: "The legal notice and privacy policy are legal texts and are fixed in the program.",
  },
  vi: {
    nav: "Chữ trên website", sub: "Đổi mọi nhãn của website. Để trống = dùng chữ mặc định",
    hint: "Mỗi ô hiện chữ mặc định màu xám. Chỉ ô nào có nội dung mới thay thế chữ đó. Bấm \"Đặt lại\" để dùng lại chữ mặc định.",
    search: "Tìm ô hoặc nội dung…", reset: "Đặt lại", none: "Không có ô phù hợp.",
    groups: { groupNav: "Menu", groupHero: "Đầu trang: nút và ghi chú", groupProjects: "Dự án", groupLive: "Chạy thật và dùng thử", groupSkills: "Năng lực (danh sách cách nhau bằng dấu phẩy)", groupPath: "Hành trình (dòng thời gian)", groupKnowledge: "Kiến thức và nghiên cứu (trang chủ)", groupContact: "Liên hệ và chân trang", groupSite: "Chung", groupPostPage: "Trang dự án", groupKnowledgePage: "Thư viện kiến thức", groupContactInfo: "Thông tin liên hệ", groupLegal: "Pháp lý và quay lại", groupCookie: "Thông báo quyền riêng tư (cookie)" },
    logoTitle: "Logo và tên", logoImage: "Ảnh logo", logoImageHint: "Để trống = logo chữ", logoText: "Chữ trong logo (khi không có ảnh)", siteName: "Tên ở thanh đầu trang", logoRemove: "Gỡ ảnh logo",
    heroTitle: "Ảnh chân dung ở đầu trang", heroRemove: "Dùng ảnh mặc định",
    contactTitle: "Liên hệ và các ô chạy thật", contactEmail: "E-mail liên hệ", liveTiles: "Các ô chạy thật (ID hoặc ID|tên ngắn, cách nhau bằng dấu phẩy)", liveAutoplay: "Cho các ô chạy thật tự chuyển chậm (6 giây, dừng khi rê chuột)", liveTilesHint: "ID nằm trong bài viết, mục \"Nâng cao\" (ID bài viết chung). Dùng \"ID|tên ngắn\" để đặt tên hiển thị, ví dụ local-post-1779957810945|GeldPilot. Thứ tự = thứ tự trên trang chủ.",
    legalNote: "Thông tin pháp lý và chính sách quyền riêng tư là văn bản pháp lý và được cố định trong chương trình.",
  },
};

const ADMIN_UI = {
  de: {
    navOverview: "Übersicht", navContent: "Inhalte", navPosts: "Beiträge", navOrder: "Reihenfolge", navHomepage: "Startseite",
    navHomeText: "Startseiten-Texte", navGallery: "Galerie", navJourney: "Persönlicher Weg", navSite: "Gesamte Website", navLook: "Logo, Porträt & Lebenslauf", navSettings: "Einstellungen",
    pages: {
      home: ["Übersicht", "Was möchten Sie heute tun?"],
      posts: ["Beiträge", "Beitrag zum Bearbeiten wählen oder neu schreiben"],
      editorSub: "Änderungen werden erst mit „Veröffentlichen“ live",
      order: ["Reihenfolge", "Der oberste Beitrag erscheint zuerst im Blog"],
      hometext: ["Startseiten-Texte", "Titel, Einleitung und Feature-Karten"],
      gallery: ["Galerie", "Bilder im Showcase der Startseite"],
      journey: ["Persönlicher Weg", "Die Karte über Sie auf der Startseite"],
      look: ["Logo, Porträt & Lebenslauf", "Logo, Name, Porträt, Kontakt-E-Mail, Live-Kacheln, Lebenslauf, Hintergrund"],
      settings: ["Einstellungen", "GitHub-Verbindung, Passwort, Sprache"],
    },
    greet: "Willkommen zurück", greetSub: "Wählen Sie eine Aufgabe. Alles andere finden Sie links in der Navigation.",
    tileNew: "Neuen Beitrag schreiben", tileNewSub: "Projekt oder Wissen, in 3 Sprachen",
    tileHome: "Startseite bearbeiten", tileHomeSub: "Texte, Galerie, persönlicher Weg",
    tileLook: "Hintergrund oder Lebenslauf ändern", tileLookSub: "Eine Datei ablegen, fertig",
    tileOrder: "Beiträge sortieren", tileOrderSub: "Welcher Beitrag steht oben?",
    recent: "Zuletzt erstellt", viewAll: "Alle anzeigen",
    searchPosts: "Beitrag suchen…", filterAll: "Alle", filterProjects: "Projekte", filterKnowledge: "Wissen", newPost: "Neuer Beitrag", noPostsFound: "Keine Beiträge gefunden.", edit: "Bearbeiten",
    newPostTitle: "Neuer Beitrag", publish: "Veröffentlichen", publishing: "Wird gespeichert…", upToDate: "Alles ist live",
    pending: (n) => `${n} ungespeicherte Änderung${n === 1 ? "" : "en"}`,
    menuExport: "Als .md exportieren", menuDiscard: "Alle Änderungen verwerfen", menuLogout: "Abmelden",
    discardConfirm: "Ungespeicherte Änderungen an diesem Beitrag gehen verloren. Fortfahren?",
    discardAllConfirm: "Wirklich alle ungespeicherten Änderungen verwerfen?",
    githubOk: "GitHub verbunden", githubMissing: "GitHub nicht verbunden", viewSite: "Website ansehen", reload: "Neu laden",
    dropImage: "Bild hier ablegen oder klicken", dropHint: "Wird automatisch hochgeladen", dropPdf: "PDF hier ablegen oder klicken", dropMulti: "Bilder hier ablegen oder klicken",
    uploading: "Lädt hoch…", remove: "Entfernen", mainImageBadge: "Hauptbild", moveLeft: "Nach vorne", moveRight: "Nach hinten",
    addLanguageHint: "Noch nicht übersetzt – klicken, um die Version anzulegen", saveFirstHint: "Erst den Beitrag veröffentlichen, dann können weitere Sprachen angelegt werden.",
    descHelp: "Erscheint auf der Blog-Karte, maximal 3 Zeilen.", bodyHelp: "In Markdown schreiben. Rechts sehen Sie die echte Vorschau.",
    slugHelp: "Wird aus dem Titel erzeugt. Nur ändern, wenn nötig.", translationHelp: "Verbindet die Sprachversionen desselben Beitrags.",
    orderHint: "Mit den Pfeilen verschieben. Die Reihenfolge gilt für alle drei Sprachen.", galleryHint: "Mehrere Bilder gleichzeitig ablegen. Das erste Bild ist das große Hauptbild.",
    homeTextHint: "Rechts sehen Sie sofort, wie die Startseite aussieht.", journeyHint: "Bilder und Text der Karte über Ihren Weg.",
    groupHero: "Kopfbereich", groupTransparency: "Transparenz", groupCards: "Feature-Karten", groupNotice: "Projekt-Hinweis", groupCollab: "Zusammenarbeit", groupStats: "Kennzahlen-Leiste",
    bgTitle: "Hintergrundbild", bgRemove: "Hintergrund entfernen", resumeTitle: "Lebenslauf (PDF)", resumeLive: "Auf der Website sichtbar", resumeOpen: "Datei öffnen",
    resumeReplace: "Ersetzen", resumeRemove: "Entfernen", resumeNote: "Beim Ersetzen wird die alte Datei automatisch von GitHub gelöscht.",
    setGithubOk: "Verbunden", setGithubMissing: "Nicht verbunden", changeToken: "Token ändern", enterToken: "Token eintragen", hideToken: "Schließen",
    passwordTitle: "Admin-Passwort", passwordDesc: "Wird nur in diesem Browser gespeichert.", passwordBtn: "Passwort ändern", uiLangTitle: "Sprache der Admin-Oberfläche",
    typeLabel: "Typ", openNav: "Menü öffnen",
  },
  en: {
    navOverview: "Overview", navContent: "Content", navPosts: "Posts", navOrder: "Order", navHomepage: "Home page",
    navHomeText: "Home page text", navGallery: "Gallery", navJourney: "Personal journey", navSite: "Whole site", navLook: "Logo, portrait & resume", navSettings: "Settings",
    pages: {
      home: ["Overview", "What would you like to do today?"],
      posts: ["Posts", "Pick a post to edit or write a new one"],
      editorSub: "Changes only go live when you press Publish",
      order: ["Order", "The top post appears first on the blog"],
      hometext: ["Home page text", "Title, intro and feature cards"],
      gallery: ["Gallery", "Images in the home page showcase"],
      journey: ["Personal journey", "The card about you on the home page"],
      look: ["Logo, portrait & resume", "Logo, name, portrait, contact e-mail, live tiles, resume, background"],
      settings: ["Settings", "GitHub connection, password, language"],
    },
    greet: "Welcome back", greetSub: "Pick a task. Everything else is in the navigation on the left.",
    tileNew: "Write a new post", tileNewSub: "Project or knowledge, in 3 languages",
    tileHome: "Edit the home page", tileHomeSub: "Text, gallery, personal journey",
    tileLook: "Change background or resume", tileLookSub: "Drop one file and you are done",
    tileOrder: "Sort posts", tileOrderSub: "Which post goes first?",
    recent: "Recently created", viewAll: "View all",
    searchPosts: "Search posts…", filterAll: "All", filterProjects: "Projects", filterKnowledge: "Knowledge", newPost: "New post", noPostsFound: "No posts found.", edit: "Edit",
    newPostTitle: "New post", publish: "Publish", publishing: "Saving…", upToDate: "Everything is live",
    pending: (n) => `${n} unsaved change${n === 1 ? "" : "s"}`,
    menuExport: "Export as .md", menuDiscard: "Discard all changes", menuLogout: "Log out",
    discardConfirm: "Unsaved changes to this post will be lost. Continue?",
    discardAllConfirm: "Really discard all unsaved changes?",
    githubOk: "GitHub connected", githubMissing: "GitHub not connected", viewSite: "View website", reload: "Reload",
    dropImage: "Drop an image here or click", dropHint: "Uploads automatically", dropPdf: "Drop a PDF here or click", dropMulti: "Drop images here or click",
    uploading: "Uploading…", remove: "Remove", mainImageBadge: "Main", moveLeft: "Move earlier", moveRight: "Move later",
    addLanguageHint: "Not translated yet – click to create this version", saveFirstHint: "Publish the post first, then you can add more languages.",
    descHelp: "Shown on the blog card, up to 3 lines.", bodyHelp: "Write in Markdown. The real preview is on the right.",
    slugHelp: "Generated from the title. Only change if needed.", translationHelp: "Links the language versions of the same post.",
    orderHint: "Move with the arrows. The order applies to all three languages.", galleryHint: "Drop several images at once. The first image is the large main image.",
    homeTextHint: "The preview on the right updates as you type.", journeyHint: "Images and text of the card about your path.",
    groupHero: "Hero", groupTransparency: "Transparency", groupCards: "Feature cards", groupNotice: "Project notice", groupCollab: "Collaboration", groupStats: "Key figures strip",
    bgTitle: "Background image", bgRemove: "Remove background", resumeTitle: "Resume (PDF)", resumeLive: "Visible on the website", resumeOpen: "Open file",
    resumeReplace: "Replace", resumeRemove: "Remove", resumeNote: "Replacing the file deletes the old one from GitHub automatically.",
    setGithubOk: "Connected", setGithubMissing: "Not connected", changeToken: "Change token", enterToken: "Enter token", hideToken: "Close",
    passwordTitle: "Admin password", passwordDesc: "Stored only in this browser.", passwordBtn: "Change password", uiLangTitle: "Admin interface language",
    typeLabel: "Type", openNav: "Open menu",
  },
  vi: {
    navOverview: "Tổng quan", navContent: "Nội dung", navPosts: "Bài viết", navOrder: "Thứ tự bài", navHomepage: "Trang chủ",
    navHomeText: "Chữ trang chủ", navGallery: "Gallery", navJourney: "Hành trình", navSite: "Toàn site", navLook: "Logo, ảnh & CV", navSettings: "Cài đặt",
    pages: {
      home: ["Tổng quan", "Hôm nay bạn muốn làm gì?"],
      posts: ["Bài viết", "Chọn một bài để sửa hoặc viết bài mới"],
      editorSub: "Thay đổi chỉ lên web khi bạn bấm Đăng lên web",
      order: ["Thứ tự bài", "Bài ở trên cùng sẽ hiện đầu trang blog"],
      hometext: ["Chữ trang chủ", "Tiêu đề, giới thiệu và các thẻ tính năng"],
      gallery: ["Gallery", "Ảnh hiện ở khu trình diễn trang chủ"],
      journey: ["Hành trình", "Thẻ giới thiệu bản thân trên trang chủ"],
      look: ["Logo, ảnh & CV", "Logo, tên, ảnh chân dung, e-mail liên hệ, ô chạy thật, CV, ảnh nền"],
      settings: ["Cài đặt", "Kết nối GitHub, mật khẩu, ngôn ngữ"],
    },
    greet: "Chào mừng quay lại", greetSub: "Chọn một việc. Mọi thứ khác nằm ở thanh bên trái.",
    tileNew: "Viết bài mới", tileNewSub: "Dự án hoặc kiến thức, 3 ngôn ngữ",
    tileHome: "Sửa trang chủ", tileHomeSub: "Chữ, gallery, hành trình",
    tileLook: "Đổi ảnh nền hoặc CV", tileLookSub: "Thả một file là xong",
    tileOrder: "Sắp xếp bài", tileOrderSub: "Bài nào lên đầu?",
    recent: "Bài mới nhất", viewAll: "Xem tất cả",
    searchPosts: "Tìm bài…", filterAll: "Tất cả", filterProjects: "Dự án", filterKnowledge: "Kiến thức", newPost: "Bài mới", noPostsFound: "Không tìm thấy bài viết.", edit: "Sửa",
    newPostTitle: "Bài mới", publish: "Đăng lên web", publishing: "Đang lưu…", upToDate: "Mọi thứ đã lên web",
    pending: (n) => `${n} thay đổi chưa đăng`,
    menuExport: "Xuất file .md", menuDiscard: "Hủy mọi thay đổi", menuLogout: "Đăng xuất",
    discardConfirm: "Các thay đổi chưa lưu của bài này sẽ mất. Tiếp tục?",
    discardAllConfirm: "Hủy toàn bộ thay đổi chưa lưu?",
    githubOk: "GitHub đã kết nối", githubMissing: "GitHub chưa kết nối", viewSite: "Xem trang web", reload: "Tải lại",
    dropImage: "Thả ảnh vào đây hoặc bấm chọn", dropHint: "Tự động tải lên", dropPdf: "Thả file PDF vào đây hoặc bấm chọn", dropMulti: "Thả nhiều ảnh vào đây hoặc bấm chọn",
    uploading: "Đang tải lên…", remove: "Gỡ", mainImageBadge: "Ảnh chính", moveLeft: "Đưa lên trước", moveRight: "Đưa ra sau",
    addLanguageHint: "Chưa dịch – bấm để tạo bản này", saveFirstHint: "Hãy đăng bài trước, sau đó mới thêm được ngôn ngữ khác.",
    descHelp: "Hiện trên thẻ blog, tối đa 3 dòng.", bodyHelp: "Viết bằng Markdown. Bên phải là bản xem trước thật.",
    slugHelp: "Tự tạo từ tiêu đề. Chỉ sửa khi cần.", translationHelp: "Nối các bản ngôn ngữ của cùng một bài.",
    orderHint: "Dùng mũi tên để đổi chỗ. Thứ tự áp dụng cho cả 3 ngôn ngữ.", galleryHint: "Thả nhiều ảnh cùng lúc. Ảnh đầu tiên là ảnh lớn ở khu trình diễn.",
    homeTextHint: "Bên phải cập nhật ngay khi bạn gõ.", journeyHint: "Ảnh và nội dung của thẻ giới thiệu bản thân.",
    groupHero: "Đầu trang", groupTransparency: "Minh bạch", groupCards: "Thẻ tính năng", groupNotice: "Lưu ý dự án", groupCollab: "Hợp tác", groupStats: "Dải số liệu",
    bgTitle: "Ảnh nền", bgRemove: "Gỡ ảnh nền", resumeTitle: "CV (PDF)", resumeLive: "Đang hiện trên web", resumeOpen: "Mở file",
    resumeReplace: "Thay file", resumeRemove: "Gỡ CV", resumeNote: "Khi thay file, bản cũ tự bị xóa khỏi GitHub.",
    setGithubOk: "Đã kết nối", setGithubMissing: "Chưa kết nối", changeToken: "Đổi token", enterToken: "Nhập token", hideToken: "Đóng",
    passwordTitle: "Mật khẩu admin", passwordDesc: "Chỉ lưu trong trình duyệt này.", passwordBtn: "Đổi mật khẩu", uiLangTitle: "Ngôn ngữ giao diện admin",
    typeLabel: "Loại", openNav: "Mở menu",
  },
};

const HOME_TEXT_GROUPS = [
  ["groupHero", ["hero_badge", "hero_title", "hero_text"]],
  ["groupNotice", ["warning_one"]],
  ["groupStats", ["stat_1_value", "stat_1_label", "stat_2_value", "stat_2_label", "stat_3_value", "stat_3_label", "stat_4_value", "stat_4_label"]],
  ["groupCollab", ["collaboration_title", "collaboration_text"]],
];

function HelpTip({ text }) {
  return (
    <span tabIndex={0} aria-label={text} className="group relative inline-flex h-4 w-4 shrink-0 cursor-help items-center justify-center rounded-full border border-white/25 text-[10px] font-bold text-zinc-400 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
      ?
      <span role="tooltip" className="pointer-events-none absolute left-5 top-0 z-30 hidden w-56 rounded-lg bg-zinc-100 px-2.5 py-1.5 text-left text-xs font-normal normal-case leading-5 text-zinc-900 shadow-xl group-hover:block group-focus:block">{text}</span>
    </span>
  );
}

function AdminField({ label, help, children, className = "", plain = false }) {
  const head = (
    <span className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-zinc-400">{label}{help && <HelpTip text={help} />}</span>
  );
  if (plain) return <div className={className}>{head}{children}</div>;
  return <label className={`block ${className}`}>{head}{children}</label>;
}

function AdminLangTabs({ tabs, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.language}
          type="button"
          role="tab"
          aria-selected={tab.state === "current"}
          data-lang-tab={tab.language}
          disabled={tab.state === "locked"}
          title={tab.title}
          onClick={() => onSelect(tab.language)}
          className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-40 ${tab.state === "current" ? "border-cyan-300 bg-cyan-300/15 text-white" : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"}`}
        >
          {tab.language.toUpperCase()}
          {tab.state === "missing" || tab.state === "locked"
            ? <Plus className="h-3.5 w-3.5 text-zinc-500" />
            : <Check className="h-3.5 w-3.5 text-emerald-300" />}
        </button>
      ))}
    </div>
  );
}

function ImageListEditor({ images, onChange, onAdd, uploadImage, subfolder, ui, hint }) {
  const move = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= images.length) return;
    const next = [...images];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div className="grid gap-3">
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((image, index) => (
            <div key={`${image}-${index}`} data-gallery-item className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <img src={image} alt="" className="h-full w-full object-cover" />
              {index === 0 && <span className="absolute left-2 top-2 rounded-full bg-cyan-400 px-2 py-0.5 text-[10px] font-black text-black">{ui.mainImageBadge}</span>}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 bg-gradient-to-t from-black/85 to-transparent p-1.5 sm:opacity-0 sm:transition sm:group-focus-within:opacity-100 sm:group-hover:opacity-100">
                <div className="flex gap-1">
                  <button type="button" disabled={index === 0} onClick={() => move(index, -1)} aria-label={ui.moveLeft} className="rounded-md bg-black/60 p-1 text-white disabled:opacity-30"><ChevronLeft className="h-4 w-4" /></button>
                  <button type="button" disabled={index === images.length - 1} onClick={() => move(index, 1)} aria-label={ui.moveRight} className="rounded-md bg-black/60 p-1 text-white disabled:opacity-30"><ChevronRight className="h-4 w-4" /></button>
                </div>
                <button type="button" onClick={() => onChange(images.filter((_, i) => i !== index))} aria-label={ui.remove} className="rounded-md bg-red-500/85 p-1 text-white"><X className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      )}
      <DropUpload multiple label={ui.dropMulti} hint={hint} subfolder={subfolder} uploadImage={uploadImage} busyLabel={ui.uploading} onUploaded={onAdd} />
    </div>
  );
}

const splitLines = (value) => String(value || "").split("\n").map((item) => item.trim()).filter(Boolean);

const buildLanguageDrafts = (entries, getLocalized) => Object.fromEntries(
  LANGUAGES.map((language) => [language, { ...(entries.find((entry) => entry.language === language) || getLocalized(language)), language }]),
);

function MarkdownEditorPage({ onLogout = () => {} }) {
  const [uiLanguage, setUiLanguage] = useState(() => {
    const saved = window.localStorage.getItem(ADMIN_UI_LANGUAGE_KEY);
    return LANGUAGES.includes(saved) ? saved : "de";
  });
  const t = EDITOR_TEXT[uiLanguage] || EDITOR_TEXT.de;
  const changeUiLanguage = (language) => {
    setUiLanguage(language);
    window.localStorage.setItem(ADMIN_UI_LANGUAGE_KEY, language);
  };
  const [form, setForm] = useState(emptyEditorForm);
  const [slugEdited, setSlugEdited] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [githubToken, setGithubToken] = useState(() => window.localStorage.getItem(GITHUB_TOKEN_KEY) || "");
  const [showGithubToken, setShowGithubToken] = useState(() => !window.localStorage.getItem(GITHUB_TOKEN_KEY));
  const [tokenSaved, setTokenSaved] = useState(() => !!window.localStorage.getItem(GITHUB_TOKEN_KEY));
  const [view, setView] = useState("home");
  const [navOpen, setNavOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [postFilter, setPostFilter] = useState("all");
  const [postSearch, setPostSearch] = useState("");
  const [postBase, setPostBase] = useState(() => JSON.stringify(form));
  const [homeLang, setHomeLang] = useState("de");
  const [homeDrafts, setHomeDrafts] = useState(() => buildLanguageDrafts(HOME_CONTENTS, getLocalizedHomeContent));
  const [homeBase, setHomeBase] = useState(() => buildLanguageDrafts(HOME_CONTENTS, getLocalizedHomeContent));
  const [textLang, setTextLang] = useState("de");
  const [textSearch, setTextSearch] = useState("");
  const [textDrafts, setTextDrafts] = useState(() => Object.fromEntries(LANGUAGES.map((language) => [language, normalizeTextDraft(getSiteTextOverrides(language))])));
  const [textBase, setTextBase] = useState(() => Object.fromEntries(LANGUAGES.map((language) => [language, normalizeTextDraft(getSiteTextOverrides(language))])));
  const homeContentForm = homeDrafts[homeLang];
  const setHomeContentForm = (updater) => setHomeDrafts((current) => ({
    ...current,
    [homeLang]: typeof updater === "function" ? updater(current[homeLang]) : updater,
  }));
  const [wayLang, setWayLang] = useState("de");
  const [wayDrafts, setWayDrafts] = useState(() => buildLanguageDrafts(PERSONAL_WAYS, getLocalizedPersonalWay));
  const [wayBase, setWayBase] = useState(() => buildLanguageDrafts(PERSONAL_WAYS, getLocalizedPersonalWay));
  const personalWayForm = wayDrafts[wayLang];
  const setPersonalWayForm = (updater) => setWayDrafts((current) => ({
    ...current,
    [wayLang]: typeof updater === "function" ? updater(current[wayLang]) : updater,
  }));
  const [siteSettingsForm, setSiteSettingsForm] = useState(SITE_SETTINGS);
  const [siteBase, setSiteBase] = useState(SITE_SETTINGS);
  const [savedResumeUrl, setSavedResumeUrl] = useState(SITE_SETTINGS.resume_url || "");
  const initialGallery = (GALLERY_IMAGES.length ? GALLERY_IMAGES : DEFAULT_GALLERY_IMAGES).join("\n");
  const [galleryImagesForm, setGalleryImagesForm] = useState(initialGallery);
  const [galleryBase, setGalleryBase] = useState(initialGallery);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  const [deployState, setDeployState] = useState(null);
  const [projectOrderLanguage, setProjectOrderLanguage] = useState("de");
  const initialOrderIds = getLocalizedContentPosts("de")
    .filter((post) => post.content_type !== "knowledge")
    .map((post) => post.translation_id);
  const [projectOrderIds, setProjectOrderIds] = useState(initialOrderIds);
  const [orderBase, setOrderBase] = useState(initialOrderIds.join("|"));
  const ui = ADMIN_UI[uiLanguage] || ADMIN_UI.de;
  const stui = SITE_TEXT_UI[uiLanguage] || SITE_TEXT_UI.de;

  const update = (key, value) => {
    setForm((current) => {
      const next = { ...current, [key]: value };
      if (key === "title" && !slugEdited) next.slug = slugify(value);
      return next;
    });
  };

  const getMarkdownExport = (overrides = {}) => {
    const slug = form.slug || slugify(form.title);
    if (!slug || !form.title.trim() || !form.excerpt.trim() || !form.content.trim()) {
      window.alert(t.validationRequiredFields);
      return null;
    }

    const markdown = createMarkdownFile({
      ...form,
      ...overrides,
      slug,
      translation_id: form.translation_id || slug,
      image_gallery: form.image_gallery.split("\n").map((item) => item.trim()).filter(Boolean),
      tags: form.tags.split(",").map((item) => item.trim()).filter(Boolean),
    });
    return { filename: `${slug}.md`, directory: form.language, markdown };
  };

  const exportPost = () => {
    const output = getMarkdownExport();
    if (!output) return;
    downloadTextFile(output.filename, output.markdown);
  };

  const saveGithubToken = () => {
    const token = githubToken.trim();
    if (!token) {
      window.localStorage.removeItem(GITHUB_TOKEN_KEY);
      setTokenSaved(false);
      setSaveMessage(t.tokenRemovedMessage);
      return;
    }

    window.localStorage.setItem(GITHUB_TOKEN_KEY, token);
    setTokenSaved(true);
    setShowGithubToken(false);
    setSaveMessage(t.tokenSavedMessage);
  };

  const getGithubErrorMessage = async (response, fallback) => {
    try {
      const data = await response.json();
      return `${fallback} (${response.status}): ${data.message || t.noGithubDetails}`;
    } catch {
      return `${fallback} (${response.status}).`;
    }
  };

  const testGithubToken = async () => {
    const token = githubToken.trim() || window.localStorage.getItem(GITHUB_TOKEN_KEY);
    if (!token) {
      setShowGithubToken(true);
      setView("settings");
      setSaveMessage(t.noTokenMessage);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (!response.ok) {
        throw new Error(await getGithubErrorMessage(response, t.tokenTestFailedPrefix));
      }

      setSaveMessage(t.tokenWorksMessage);
    } catch (error) {
      setSaveMessage(
        error instanceof TypeError
          ? t.githubBlockedMessage
          : error.message
      );
    }
  };

  const getGithubAuth = () => {
    const token = githubToken.trim() || window.localStorage.getItem(GITHUB_TOKEN_KEY);
    if (!token) {
      setShowGithubToken(true);
      setView("settings");
      setSaveMessage(t.noTokenMessage);
      return null;
    }

    return {
      token,
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    };
  };

  const fetchLatestActionsRun = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/actions/runs?branch=${GITHUB_REPO_BRANCH}&per_page=1`);
      if (!response.ok) return null;
      const data = await response.json();
      return data.workflow_runs?.[0] || null;
    } catch {
      return null;
    }
  };

  const watchDeployment = async (previousRunId) => {
    setDeployState({ status: "waiting", url: null });
    const deadline = Date.now() + 5 * 60 * 1000;
    let trackedRunId = null;

    while (Date.now() < deadline) {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const run = await fetchLatestActionsRun();
      if (!run) continue;

      if (!trackedRunId) {
        if (run.id === previousRunId) continue;
        trackedRunId = run.id;
      }
      if (run.id !== trackedRunId) continue;

      if (run.status === "completed") {
        setDeployState({ status: run.conclusion === "success" ? "success" : "failed", url: run.html_url });
        return;
      }
      setDeployState({ status: run.status, url: run.html_url });
    }

    setDeployState((current) => (current?.status === "success" || current?.status === "failed" ? current : { status: "timeout", url: null }));
  };

  const saveOutputsToGitHub = async (outputs, commitMessage) => {
    const auth = getGithubAuth();
    if (!auth) return false;

    const previousRun = await fetchLatestActionsRun();

    try {
      for (const output of outputs) {
        const path = getGithubContentPath(output);
        const apiPath = encodeGithubPath(path);
        const fileUrl = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${apiPath}?ref=${GITHUB_REPO_BRANCH}`;
        let sha = null;
        const currentFile = await fetch(fileUrl, { headers: auth.headers });

        if (currentFile.ok) {
          const currentData = await currentFile.json();
          sha = currentData.sha;
        } else if (currentFile.status !== 404) {
          throw new Error(await getGithubErrorMessage(currentFile, `GitHub konnte ${path} nicht lesen`));
        }

        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${apiPath}`, {
          method: "PUT",
          headers: {
            ...auth.headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            branch: GITHUB_REPO_BRANCH,
            message: commitMessage || `Update ${path}`,
            content: textToBase64(output.markdown),
            ...(sha ? { sha } : {}),
          }),
        });

        if (!response.ok) {
          throw new Error(await getGithubErrorMessage(response, `GitHub konnte ${path} nicht speichern`));
        }
      }

      setSaveMessage(t.savedFilesMessage(outputs.length));
      watchDeployment(previousRun?.id ?? null);
      return true;
    } catch (error) {
      setSaveMessage(
        error instanceof TypeError
          ? t.githubBlockedMessage
          : error.message || t.githubSaveFailedGeneric
      );
      return false;
    }
  };

  const saveMarkdownToGitHub = async (output) =>
    saveOutputsToGitHub([output], `Update ${getGithubContentPath(output)}`);

  const deleteGithubFile = async (path, commitMessage) => {
    const auth = getGithubAuth();
    if (!auth) throw new Error(t.noGithubTokenError);

    const apiPath = encodeGithubPath(path);
    const fileUrl = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${apiPath}?ref=${GITHUB_REPO_BRANCH}`;
    const currentFile = await fetch(fileUrl, { headers: auth.headers });

    if (currentFile.status === 404) return;
    if (!currentFile.ok) {
      throw new Error(await getGithubErrorMessage(currentFile, `GitHub konnte ${path} nicht lesen`));
    }

    const { sha } = await currentFile.json();
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${apiPath}`, {
      method: "DELETE",
      headers: { ...auth.headers, "Content-Type": "application/json" },
      body: JSON.stringify({
        branch: GITHUB_REPO_BRANCH,
        message: commitMessage || `Delete ${path}`,
        sha,
      }),
    });

    if (!response.ok) {
      throw new Error(await getGithubErrorMessage(response, `GitHub konnte ${path} nicht löschen`));
    }
  };

  const uploadFileToGithub = async (file, folder) => {
    const auth = getGithubAuth();
    if (!auth) return null;

    const path = `public/${folder}/${Date.now()}-${slugifyFilename(file.name)}`;
    const apiPath = encodeGithubPath(path);
    const previousRun = await fetchLatestActionsRun();

    try {
      const buffer = await file.arrayBuffer();
      const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${apiPath}`, {
        method: "PUT",
        headers: { ...auth.headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          branch: GITHUB_REPO_BRANCH,
          message: `Upload file ${path}`,
          content: bytesToBase64(new Uint8Array(buffer)),
        }),
      });

      if (!response.ok) {
        setSaveMessage(await getGithubErrorMessage(response, t.fileUploadFailedPrefix));
        return null;
      }

      const publicUrl = `/my-electronics-blog/${folder}/${path.split("/").pop()}`;
      setSaveMessage(t.fileUploadedMessage(publicUrl));
      watchDeployment(previousRun?.id ?? null);
      return publicUrl;
    } catch (error) {
      setSaveMessage(
        error instanceof TypeError
          ? t.githubBlockedMessageShort
          : error.message || t.fileUploadFailedPrefix
      );
      return null;
    }
  };

  const uploadImageToGithub = (file, subfolder) => uploadFileToGithub(file, `images/${subfolder}`);

  const moveProjectOrder = (translationId, direction) => {
    setProjectOrderIds((current) => {
      const index = current.indexOf(translationId);
      const targetIndex = index + direction;
      if (index < 0 || targetIndex < 0 || targetIndex >= current.length) return current;
      const next = [...current];
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next;
    });
  };

  const deletePostFromGitHub = async () => {
    if (!form.source_path) return;

    const confirmed = window.confirm(t.deleteConfirm(form.title || form.slug, `src/content/${form.source_path}`));
    if (!confirmed) return;

    const previousRun = await fetchLatestActionsRun();

    try {
      await deleteGithubFile(`src/content/${form.source_path}`, `Delete ${form.source_path}`);
      setSaveMessage(t.postDeletedMessage(`src/content/${form.source_path}`));
      loadForm(emptyEditorForm(), false);
      setView("posts");
      watchDeployment(previousRun?.id ?? null);
    } catch (error) {
      setSaveMessage(t.deleteFailedMessage(error.message));
    }
  };

  const getHomeContentExport = () => ({
    filename: "home-content.md",
    directory: homeContentForm.language,
    markdown: createHomeContentFile(homeContentForm),
  });

  const exportHomeContent = () => {
    const output = getHomeContentExport();
    downloadTextFile(output.filename, output.markdown);
  };

  const getPersonalWayExport = () => {
    if (!personalWayForm.title.trim() || !personalWayForm.content.trim()) {
      window.alert(t.personalWayValidation);
      return null;
    }

    return {
      filename: "personal-way.md",
      directory: personalWayForm.language,
      markdown: createPersonalWayFile(personalWayForm),
    };
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

  const exportSiteSettings = () => {
    const output = getSiteSettingsExport();
    downloadTextFile(output.filename, output.markdown);
  };

  const handleResumeUploaded = async (url) => {
    const previousResumeUrl = siteSettingsForm.resume_url;
    setSiteSettingsForm((current) => ({ ...current, resume_url: url }));

    // Only safe to delete right away if the previous file was never the saved/live one -
    // otherwise wait for the next save, so the live site is never left pointing at a deleted file.
    if (previousResumeUrl && previousResumeUrl !== url && previousResumeUrl !== savedResumeUrl) {
      const repoPath = previousResumeUrl.replace("/my-electronics-blog/", "public/");
      try {
        await deleteGithubFile(repoPath, `Delete superseded resume upload ${repoPath}`);
      } catch {
        // best-effort cleanup; a stray file here is harmless and can be removed manually if it fails
      }
    }
  };

  const deleteResumeFromGithub = async () => {
    const previousResumeUrl = siteSettingsForm.resume_url;
    if (!previousResumeUrl) return;

    const confirmed = window.confirm(t.deleteConfirm(t.resumeLabel, previousResumeUrl));
    if (!confirmed) return;

    const nextForm = { ...siteSettingsForm, resume_url: "" };
    setSiteSettingsForm(nextForm);

    const saved = await saveMarkdownToGitHub({ filename: "site-settings.md", markdown: createSiteSettingsFile(nextForm) });
    if (!saved) return;
    setSavedResumeUrl("");

    const repoPath = previousResumeUrl.replace("/my-electronics-blog/", "public/");
    try {
      await deleteGithubFile(repoPath, `Delete ${repoPath}`);
      setSaveMessage((current) => `${current}${t.renameRemovedOldFile(repoPath)}`);
    } catch (error) {
      setSaveMessage((current) => `${current}${t.renameRemoveFailedNote(repoPath, error.message)}`);
    }
  };

  const getGallerySettingsExport = () => ({
    filename: "gallery-settings.md",
    markdown: createGallerySettingsFile(galleryImagesForm.split("\n").map((item) => item.trim()).filter(Boolean)),
  });

  const exportGallerySettings = () => {
    const output = getGallerySettingsExport();
    downloadTextFile(output.filename, output.markdown);
  };

  const loadForm = (nextForm, nextSlugEdited) => {
    setForm(nextForm);
    setPostBase(JSON.stringify(nextForm));
    setSlugEdited(nextSlugEdited);
  };

  const inputClass = "w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-2.5 text-sm text-white outline-none ring-cyan-400/30 placeholder:text-zinc-600 focus:border-cyan-300/60 focus:ring-4";
  const cardClass = "rounded-2xl border border-white/10 bg-[#0a1424] p-5";
  const secondaryButton = "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40";
  const PreviewIcon = getCategoryIcon(form.category);
  const previewTags = form.tags.split(",").map((item) => item.trim()).filter(Boolean);
  const previewIsIdea = form.content_type !== "knowledge" && isIdea(form);
  const translationLanguages = getTranslationLanguages(form.translation_id || form.slug);
  const projectOrderPosts = projectOrderIds.map((translationId) => {
    const variants = CONTENT_POSTS.filter((post) => post.translation_id === translationId && post.content_type !== "knowledge");
    return variants.find((post) => post.language === projectOrderLanguage)
      || variants.find((post) => post.language === "de")
      || variants[0];
  }).filter(Boolean);

  // ── Unsaved-change tracking (compares every editor against what is currently live) ──
  const postDirty = JSON.stringify(form) !== postBase;
  const homeDirtyLanguages = LANGUAGES.filter((language) => JSON.stringify(homeDrafts[language]) !== JSON.stringify(homeBase[language]));
  const textDirtyLanguages = LANGUAGES.filter((language) => JSON.stringify(normalizeTextDraft(textDrafts[language])) !== JSON.stringify(normalizeTextDraft(textBase[language])));
  const wayDirtyLanguages = LANGUAGES.filter((language) => JSON.stringify(wayDrafts[language]) !== JSON.stringify(wayBase[language]));
  const siteDirty = JSON.stringify(siteSettingsForm) !== JSON.stringify(siteBase);
  const galleryDirty = splitLines(galleryImagesForm).join("\n") !== splitLines(galleryBase).join("\n");
  const orderDirty = projectOrderIds.join("|") !== orderBase;
  const navDirty = {
    posts: postDirty,
    order: orderDirty,
    hometext: homeDirtyLanguages.length > 0,
    sitetexts: textDirtyLanguages.length > 0,
    gallery: galleryDirty,
    journey: wayDirtyLanguages.length > 0,
    look: siteDirty,
  };
  const dirtyCount = Object.values(navDirty).filter(Boolean).length;

  useEffect(() => {
    if (!dirtyCount) return undefined;
    const warn = (event) => { event.preventDefault(); event.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirtyCount]);

  useEffect(() => {
    if (!saveMessage) return undefined;
    const timer = window.setTimeout(() => setSaveMessage(""), 9000);
    return () => window.clearTimeout(timer);
  }, [saveMessage]);

  const postGroups = useMemo(() => {
    const groups = new Map();
    CONTENT_POSTS.forEach((post) => {
      const id = `${post.content_type}:${post.translation_id || post.slug}`;
      if (!groups.has(id)) groups.set(id, { id, variants: {} });
      groups.get(id).variants[post.language] = post;
    });
    return [...groups.values()]
      .map((group) => ({ ...group, main: group.variants.de || Object.values(group.variants)[0] }))
      .sort((a, b) => (a.main.sort_order ?? 100) - (b.main.sort_order ?? 100));
  }, []);

  const visibleGroups = postGroups.filter((group) => {
    if (postFilter === "project" && group.main.content_type === "knowledge") return false;
    if (postFilter === "knowledge" && group.main.content_type !== "knowledge") return false;
    const needle = postSearch.trim().toLowerCase();
    return !needle || Object.values(group.variants).some((post) => post.title.toLowerCase().includes(needle));
  });
  const recentGroups = [...postGroups]
    .sort((a, b) => new Date(b.main.created_at || 0) - new Date(a.main.created_at || 0))
    .slice(0, 3);

  const confirmDiscardPost = () => !postDirty || window.confirm(ui.discardConfirm);

  const openPostVariant = (post) => {
    if (!confirmDiscardPost()) return;
    loadForm(postToEditorForm(post), true);
    setShowAdvancedFields(false);
    setView("editor");
  };

  const startNewPost = () => {
    if (view === "editor" && !form.source_path && !postDirty) return;
    if (!confirmDiscardPost()) return;
    loadForm(emptyEditorForm(), false);
    setShowAdvancedFields(false);
    setView("editor");
  };

  const switchPostLanguage = (language) => {
    if (language === form.language) return;
    if (!form.source_path && !form.translation_id) {
      update("language", language);
      return;
    }
    if (!confirmDiscardPost()) return;
    const variant = CONTENT_POSTS.find((post) => post.translation_id === form.translation_id && post.language === language);
    if (variant) {
      loadForm(postToEditorForm(variant), true);
      return;
    }
    loadForm({
      ...emptyEditorForm(),
      content_type: form.content_type,
      translation_id: form.translation_id,
      language,
      category: form.category,
      image_url: form.image_url,
      image_gallery: form.image_gallery,
      tags: form.tags,
      read_time: form.read_time,
      external_link: form.external_link,
      project_status: form.project_status,
      sort_order: form.sort_order,
      content: "",
    }, false);
  };

  const getProjectOrderOutputs = () => {
    const orderByTranslationId = new Map(projectOrderIds.map((translationId, index) => [translationId, (index + 1) * 10]));
    return CONTENT_POSTS
      .filter((post) => post.content_type !== "knowledge" && orderByTranslationId.has(post.translation_id))
      .map((post) => ({
        filename: `${post.slug}.md`,
        directory: post.language,
        markdown: createMarkdownFile({ ...post, sort_order: orderByTranslationId.get(post.translation_id) }),
      }));
  };

  // One button saves everything that changed, in a single batch of commits.
  const publishAll = async () => {
    if (publishing || !dirtyCount) return;

    const outputs = new Map();
    const addOutput = (output) => outputs.set(`${output.directory || ""}/${output.filename}`, output);
    const orderByTranslationId = new Map(projectOrderIds.map((translationId, index) => [translationId, (index + 1) * 10]));

    if (orderDirty) getProjectOrderOutputs().forEach(addOutput);

    let postOverrides = {};
    let postOutput = null;
    if (postDirty) {
      const postKey = form.translation_id || form.slug || slugify(form.title);
      if (orderDirty && form.content_type !== "knowledge" && orderByTranslationId.has(postKey)) {
        postOverrides = { sort_order: orderByTranslationId.get(postKey) };
      }
      postOutput = getMarkdownExport(postOverrides);
      if (!postOutput) {
        setView("editor");
        return;
      }
      addOutput(postOutput);
    }

    homeDirtyLanguages.forEach((language) => addOutput({
      filename: "home-content.md",
      directory: language,
      markdown: createHomeContentFile({ ...homeDrafts[language], language }),
    }));

    textDirtyLanguages.forEach((language) => addOutput({
      filename: "site-texts.md",
      directory: language,
      markdown: createSiteTextsFile(textDrafts[language], language),
    }));

    for (const language of wayDirtyLanguages) {
      const draft = { ...wayDrafts[language], language };
      if (!draft.title?.trim() || !draft.content?.trim()) {
        window.alert(t.personalWayValidation);
        setWayLang(language);
        setView("journey");
        return;
      }
      addOutput({ filename: "personal-way.md", directory: language, markdown: createPersonalWayFile(draft) });
    }

    if (siteDirty) addOutput(getSiteSettingsExport());
    if (galleryDirty) addOutput(getGallerySettingsExport());

    setPublishing(true);
    const saved = await saveOutputsToGitHub([...outputs.values()], `Update ${outputs.size} file${outputs.size === 1 ? "" : "s"} via admin`)
      .finally(() => setPublishing(false));
    if (!saved) return;

    setHomeBase(homeDrafts);
    setTextBase(textDrafts);
    setWayBase(wayDrafts);
    setSiteBase(siteSettingsForm);
    setGalleryBase(galleryImagesForm);
    setOrderBase(projectOrderIds.join("|"));

    if (postOutput) {
      const previousSourcePath = form.source_path;
      const newSourcePath = `${postOutput.directory}/${postOutput.filename}`;
      const slug = postOutput.filename.replace(/\.md$/, "");
      const savedForm = { ...form, ...postOverrides, slug, translation_id: form.translation_id || slug, source_path: newSourcePath };
      loadForm(savedForm, true);

      if (previousSourcePath && previousSourcePath !== newSourcePath) {
        try {
          await deleteGithubFile(`src/content/${previousSourcePath}`, `Remove old file after rename to ${newSourcePath}`);
          setSaveMessage((current) => `${current}${t.renameRemovedOldFile(`src/content/${previousSourcePath}`)}`);
        } catch (error) {
          setSaveMessage((current) => `${current}${t.renameRemoveFailedNote(`src/content/${previousSourcePath}`, error.message)}`);
        }
      }
    }

    if (siteDirty) {
      const newResumeUrl = siteSettingsForm.resume_url || "";
      if (savedResumeUrl && savedResumeUrl !== newResumeUrl) {
        const repoPath = savedResumeUrl.replace("/my-electronics-blog/", "public/");
        try {
          await deleteGithubFile(repoPath, `Delete old resume ${repoPath}`);
          setSaveMessage((current) => `${current}${t.renameRemovedOldFile(repoPath)}`);
        } catch (error) {
          setSaveMessage((current) => `${current}${t.renameRemoveFailedNote(repoPath, error.message)}`);
        }
      }
      setSavedResumeUrl(newResumeUrl);
    }
  };

  const discardAll = () => {
    setMoreOpen(false);
    if (!dirtyCount || !window.confirm(ui.discardAllConfirm)) return;
    setHomeDrafts(homeBase);
    setTextDrafts(textBase);
    setWayDrafts(wayBase);
    setSiteSettingsForm(siteBase);
    setGalleryImagesForm(galleryBase);
    setProjectOrderIds(orderBase ? orderBase.split("|") : []);
    const baseForm = JSON.parse(postBase);
    setForm(baseForm);
    setSlugEdited(Boolean(baseForm.source_path));
  };

  const canExport = ["editor", "hometext", "journey", "look", "gallery"].includes(view);
  const exportCurrent = () => {
    setMoreOpen(false);
    if (view === "editor") exportPost();
    else if (view === "hometext") exportHomeContent();
    else if (view === "journey") exportPersonalWay();
    else if (view === "look") exportSiteSettings();
    else if (view === "gallery") exportGallerySettings();
  };

  const goTo = (nextView) => {
    setView(nextView);
    setNavOpen(false);
    setMoreOpen(false);
  };

  const navGroups = [
    { items: [{ id: "home", icon: LayoutDashboard, label: ui.navOverview }] },
    { title: ui.navContent, items: [
      { id: "posts", icon: Newspaper, label: ui.navPosts, badge: postGroups.length },
      { id: "order", icon: ListOrdered, label: ui.navOrder },
    ] },
    { title: ui.navHomepage, items: [
      { id: "hometext", icon: PenLine, label: ui.navHomeText },
      { id: "gallery", icon: Images, label: ui.navGallery, badge: splitLines(galleryImagesForm).length },
      { id: "journey", icon: Route, label: ui.navJourney },
    ] },
    { title: ui.navSite, items: [
      { id: "look", icon: Palette, label: ui.navLook },
      { id: "sitetexts", icon: Pencil, label: stui.nav },
      { id: "settings", icon: Settings, label: ui.navSettings },
    ] },
  ];

  const [pageTitle, pageSub] = view === "editor"
    ? [form.title || ui.newPostTitle, ui.pages.editorSub]
    : view === "sitetexts" ? [stui.nav, stui.sub] : ui.pages[view];

  const isGalleryEditorPost = splitLines(form.image_gallery);

  // ── Views ──
  const renderPostRows = (groups) => (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1424]">
      {groups.length === 0 && <p className="p-6 text-center text-sm text-zinc-500">{ui.noPostsFound}</p>}
      {groups.map((group) => {
        const post = group.main;
        const isKnowledge = post.content_type === "knowledge";
        return (
          <div key={group.id} data-post-row className="flex flex-wrap items-center gap-3 border-t border-white/10 px-4 py-3 first:border-t-0 hover:bg-white/[0.03] sm:flex-nowrap">
            {post.image_url
              ? <img src={post.image_url} alt="" className="h-11 w-16 shrink-0 rounded-lg object-cover" />
              : <div className="flex h-11 w-16 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-[10px] font-black text-cyan-200">{String(post.category || "").slice(0, 4).toUpperCase()}</div>}
            <div className="min-w-0 flex-1">
              <p className="truncate font-bold">{post.title}</p>
              <p className="text-xs text-zinc-500">{isKnowledge ? ui.filterKnowledge : ui.filterProjects} · {getCategoryLabel(post.category, uiLanguage)}</p>
            </div>
            <div className="flex gap-1">
              {LANGUAGES.map((language) => {
                const variant = group.variants[language];
                return variant ? (
                  <button key={language} type="button" onClick={() => openPostVariant(variant)} className="rounded-md border border-emerald-400/40 px-1.5 py-0.5 text-[10px] font-black text-emerald-300 hover:bg-emerald-400/10">{language.toUpperCase()}</button>
                ) : (
                  <span key={language} className="rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] font-black text-zinc-600">{language.toUpperCase()}</span>
                );
              })}
            </div>
            {!isKnowledge && <span className={`hidden rounded-full border px-2.5 py-0.5 text-xs font-bold sm:inline ${getStatusClasses(post.project_status)}`}>{getStatusLabel(post.project_status, uiLanguage)}</span>}
            <button type="button" onClick={() => openPostVariant(group.variants.de || post)} className={secondaryButton}>{ui.edit}</button>
          </div>
        );
      })}
    </div>
  );

  const renderHome = () => (
    <div className="mx-auto max-w-5xl p-4 sm:p-6">
      <h2 className="text-2xl font-black">{ui.greet}</h2>
      <p className="mt-1 text-sm text-zinc-400">{ui.greetSub}</p>
      <div className="my-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { id: "new", icon: Pencil, title: ui.tileNew, sub: ui.tileNewSub, main: true, action: startNewPost },
          { id: "home", icon: PenLine, title: ui.tileHome, sub: ui.tileHomeSub, action: () => goTo("hometext") },
          { id: "look", icon: Palette, title: ui.tileLook, sub: ui.tileLookSub, action: () => goTo("look") },
          { id: "order", icon: ListOrdered, title: ui.tileOrder, sub: ui.tileOrderSub, action: () => goTo("order") },
        ].map((tile) => (
          <button key={tile.id} type="button" data-tile={tile.id} onClick={tile.action} className={`flex min-h-[8.5rem] flex-col items-start gap-2 rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${tile.main ? "border-cyan-300 bg-cyan-300 text-black" : "border-white/10 bg-[#0a1424] hover:border-cyan-300/60"}`}>
            <tile.icon className={`h-6 w-6 ${tile.main ? "text-black" : "text-cyan-300"}`} />
            <span className="font-black">{tile.title}</span>
            <span className={`text-xs ${tile.main ? "text-black/70" : "text-zinc-400"}`}>{tile.sub}</span>
          </button>
        ))}
      </div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-black">{ui.recent}</h3>
        <button type="button" onClick={() => goTo("posts")} className={`${secondaryButton} !py-1 text-xs`}>{ui.viewAll}</button>
      </div>
      {renderPostRows(recentGroups)}
    </div>
  );

  const renderPosts = () => (
    <div className="mx-auto max-w-5xl p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input aria-label={ui.searchPosts} className={`${inputClass} !w-64 max-w-full`} placeholder={ui.searchPosts} value={postSearch} onChange={(event) => setPostSearch(event.target.value)} />
        <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
          {[["all", ui.filterAll], ["project", ui.filterProjects], ["knowledge", ui.filterKnowledge]].map(([id, label]) => (
            <button key={id} type="button" onClick={() => setPostFilter(id)} className={`rounded-full px-3 py-1 text-xs font-bold ${postFilter === id ? "bg-cyan-400 text-black" : "text-zinc-400 hover:text-white"}`}>{label}</button>
          ))}
        </div>
        <button type="button" onClick={startNewPost} className="ml-auto inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-black hover:bg-cyan-300"><Plus className="h-4 w-4" /> {ui.newPost}</button>
      </div>
      {renderPostRows(visibleGroups)}
    </div>
  );

  const editorLangTabs = LANGUAGES.map((language) => {
    const isCurrent = form.language === language;
    const exists = CONTENT_POSTS.some((post) => post.translation_id === form.translation_id && post.language === language);
    const freeChoice = !form.source_path && !form.translation_id;
    return {
      language,
      state: isCurrent ? "current" : exists ? "exists" : freeChoice ? "missing" : "missing",
      title: isCurrent || exists || freeChoice ? undefined : ui.addLanguageHint,
    };
  });

  const renderEditor = () => (
    <div className="grid gap-0 lg:grid-cols-2">
      <div className="space-y-4 border-white/10 p-4 sm:p-6 lg:border-r">
        <AdminLangTabs tabs={editorLangTabs} onSelect={switchPostLanguage} />
        <AdminField label={t.titleLabelRequired}>
          <input id="post-title" className={inputClass} value={form.title} onChange={(event) => update("title", event.target.value)} placeholder={t.titlePlaceholder} />
        </AdminField>
        <div className="grid gap-4 sm:grid-cols-2">
          <AdminField label={t.contentTypeLabel}>
            <select className={inputClass} value={form.content_type} onChange={(event) => update("content_type", event.target.value)}>
              <option value="project">{ui.filterProjects}</option>
              <option value="knowledge">{ui.filterKnowledge}</option>
            </select>
          </AdminField>
          {form.content_type !== "knowledge" ? (
            <AdminField label={t.statusLabel}>
              <select className={inputClass} value={form.project_status} onChange={(event) => update("project_status", event.target.value)}>
                <option value="idea">{getStatusLabel("idea", uiLanguage)}</option>
                <option value="in_progress">{getStatusLabel("in_progress", uiLanguage)}</option>
                <option value="done">{getStatusLabel("done", uiLanguage)}</option>
              </select>
            </AdminField>
          ) : (
            <AdminField label={t.categoryLabel}>
              <input className={inputClass} value={form.category} onChange={(event) => update("category", event.target.value)} />
            </AdminField>
          )}
        </div>
        {form.content_type !== "knowledge" && (
          <AdminField label={t.categoryLabel}>
            <input className={inputClass} value={form.category} onChange={(event) => update("category", event.target.value)} />
          </AdminField>
        )}
        <AdminField label={t.excerptLabel} help={ui.descHelp}>
          <textarea className={inputClass} rows={3} value={form.excerpt} onChange={(event) => update("excerpt", event.target.value)} />
        </AdminField>
        <AdminField label={t.mainImageLabel} plain>
          {form.image_url && (
            <div className="relative mb-2 h-36 overflow-hidden rounded-xl border border-white/10">
              <img src={form.image_url} alt="" className="h-full w-full object-cover" />
              <button type="button" onClick={() => update("image_url", "")} aria-label={ui.remove} className="absolute right-2 top-2 rounded-md bg-black/70 p-1"><X className="h-4 w-4" /></button>
            </div>
          )}
          <DropUpload label={ui.dropImage} hint={ui.dropHint} subfolder="posts" uploadImage={uploadImageToGithub} busyLabel={ui.uploading} compact={Boolean(form.image_url)} onUploaded={(url) => update("image_url", url)} />
        </AdminField>
        <AdminField label={t.galleryImagesLabel} plain>
          <ImageListEditor
            images={isGalleryEditorPost}
            ui={ui}
            subfolder="posts"
            uploadImage={uploadImageToGithub}
            onChange={(list) => update("image_gallery", list.join("\n"))}
            onAdd={(url) => setForm((current) => ({ ...current, image_gallery: current.image_gallery ? `${current.image_gallery}\n${url}` : url }))}
          />
        </AdminField>
        <div className="grid gap-4 sm:grid-cols-2">
          <AdminField label={t.tagsLabel}>
            <input className={inputClass} value={form.tags} onChange={(event) => update("tags", event.target.value)} placeholder={t.tagsPlaceholder} />
          </AdminField>
          <AdminField label={t.readTimeLabel}>
            <input className={inputClass} value={form.read_time} onChange={(event) => update("read_time", event.target.value)} />
          </AdminField>
        </div>
        <AdminField label={form.content_type === "knowledge" ? t.externalLinkLabelKnowledge : t.externalLinkLabelProject}>
          <input className={inputClass} value={form.external_link} onChange={(event) => update("external_link", event.target.value)} placeholder="https://..." />
        </AdminField>
        <AdminField label={t.markdownContentLabelRequired} help={ui.bodyHelp}>
          <textarea id="post-content" className={`${inputClass} min-h-[380px] font-mono leading-6`} value={form.content} onChange={(event) => update("content", event.target.value)} />
        </AdminField>
        <button type="button" onClick={() => setShowAdvancedFields((current) => !current)} className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white">
          {showAdvancedFields ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />} {t.advancedToggleLabel}
        </button>
        {showAdvancedFields && (
          <div className="grid gap-4 sm:grid-cols-2">
            <AdminField label={t.translationIdLabel} help={ui.translationHelp}>
              <input className={inputClass} value={form.translation_id} onChange={(event) => update("translation_id", slugify(event.target.value))} placeholder={t.translationIdPlaceholder} />
              <span className="mt-1 block text-xs text-zinc-500">{t.translationIdAvailable}{translationLanguages.length ? translationLanguages.map((item) => item.toUpperCase()).join(", ") : t.translationIdNone}</span>
            </AdminField>
            <AdminField label={t.slugLabel} help={ui.slugHelp}>
              <input className={inputClass} value={form.slug} onChange={(event) => { setSlugEdited(true); update("slug", slugify(event.target.value)); }} placeholder={t.slugPlaceholder} />
            </AdminField>
            <AdminField label={t.sortOrderLabel}>
              <input className={inputClass} type="number" value={form.sort_order} onChange={(event) => update("sort_order", event.target.value)} />
            </AdminField>
          </div>
        )}
        <label className="flex items-center gap-3 text-sm font-bold text-zinc-300">
          <input type="checkbox" checked={form.published} onChange={(event) => update("published", event.target.checked)} />
          {t.publishedLabel}
        </label>
        {form.source_path && (
          <button type="button" onClick={deletePostFromGitHub} className="inline-flex items-center gap-2 rounded-xl border border-red-400/30 px-4 py-2 text-sm font-bold text-red-200 hover:bg-red-400/10">
            <Trash2 className="h-4 w-4" /> {t.deleteButton}
          </button>
        )}
      </div>

      <div className="space-y-5 bg-[#07101f] p-4 sm:p-6">
        <p className="text-xs font-bold uppercase text-zinc-500">{t.blogCardLabel}</p>
        <GradientBorder
          gradient={previewIsIdea ? "from-zinc-600 via-zinc-500 to-zinc-600" : "from-cyan-400 via-cyan-500 to-cyan-400"}
          rounded="rounded-[1.4rem] sm:rounded-[2rem]"
          className="flex"
          innerClassName="flex flex-1 flex-col overflow-hidden rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl"
        >
          <div className="h-44 w-full shrink-0 bg-black/30 sm:h-52">
            {form.image_url ? (
              <img src={form.image_url} alt="" className={`h-full w-full object-cover ${previewIsIdea ? "grayscale opacity-70" : ""}`} />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-zinc-600">{t.noMainImageText}</div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 font-black text-black">{createElement(PreviewIcon, { className: "h-3.5 w-3.5" })} {form.category || t.categoryPlaceholder}</span>
              {form.content_type !== "knowledge" && <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-bold ${getStatusClasses(form.project_status)}`}>{getStatusLabel(form.project_status, form.language)}</span>}
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(form.created_at)}</span>
            </div>
            <h3 data-preview-title className="text-lg font-black leading-tight sm:text-2xl">{form.title || t.titlePlaceholderPreview}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{form.excerpt || t.excerptPlaceholderPreview}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {previewTags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">#{tag}</span>)}
            </div>
            <div className="mt-auto pt-6">
              <span className="block rounded-2xl bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-black">{t.readPostButtonPreview}</span>
            </div>
          </div>
        </GradientBorder>
        <div className="border-t border-white/10 pt-5">
          <p className="mb-3 text-xs font-bold uppercase text-zinc-500">{t.markdownContentLabel}</p>
          <div data-preview-content className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-li:text-zinc-300">
            <ReactMarkdown>{form.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrder = () => (
    <div className="mx-auto max-w-3xl p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-400">{ui.orderHint}</p>
        <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
          {LANGUAGES.map((language) => (
            <button key={language} type="button" onClick={() => setProjectOrderLanguage(language)} className={`rounded-full px-3 py-1 text-xs font-black uppercase ${projectOrderLanguage === language ? "bg-cyan-400 text-black" : "text-zinc-400 hover:text-white"}`}>{language}</button>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {projectOrderPosts.map((post, index) => (
          <div key={post.translation_id} data-order-item className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0a1424] p-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm font-black">{index + 1}</span>
            {post.image_url && <img src={post.image_url} alt="" className="h-12 w-[4.5rem] shrink-0 rounded-lg object-cover" />}
            <div className="min-w-0 flex-1">
              <p className="truncate font-bold">{post.title}</p>
              <p className="text-xs text-zinc-500">{getCategoryLabel(post.category, projectOrderLanguage)} · {getStatusLabel(post.project_status, projectOrderLanguage)}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-1">
              <button type="button" disabled={index === 0} onClick={() => moveProjectOrder(post.translation_id, -1)} className="rounded-md border border-white/10 p-1 text-zinc-300 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30" aria-label={t.moveUpAria}><ChevronUp className="h-4 w-4" /></button>
              <button type="button" disabled={index === projectOrderPosts.length - 1} onClick={() => moveProjectOrder(post.translation_id, 1)} className="rounded-md border border-white/10 p-1 text-zinc-300 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30" aria-label={t.moveDownAria}><ChevronDown className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const homeLangTabs = LANGUAGES.map((language) => ({ language, state: homeLang === language ? "current" : "exists" }));
  const wayLangTabs = LANGUAGES.map((language) => ({ language, state: wayLang === language ? "current" : "exists" }));
  const longTextFields = new Set(["hero_text", "warning_one", "collaboration_text"]);

  const renderHomeText = () => (
    <div className="grid lg:grid-cols-2">
      <div className="space-y-4 border-white/10 p-4 sm:p-6 lg:border-r">
        <AdminLangTabs tabs={homeLangTabs} onSelect={setHomeLang} />
        <p className="text-sm text-zinc-400">{ui.homeTextHint}</p>
        {HOME_TEXT_GROUPS.map(([groupKey, keys], groupIndex) => (
          <details key={groupKey} open={groupIndex === 0} className="rounded-2xl border border-white/10 bg-[#0a1424] p-4">
            <summary className="cursor-pointer select-none font-black">{ui[groupKey]}</summary>
            <div className="mt-4 grid gap-4">
              {keys.map((key) => (
                <AdminField key={key} label={getHomeContentFieldLabel(key, uiLanguage)}>
                  {longTextFields.has(key)
                    ? <textarea className={`${inputClass} leading-6`} rows={3} value={homeContentForm[key] || ""} onChange={(event) => setHomeContentForm((current) => ({ ...current, [key]: event.target.value }))} />
                    : <input className={inputClass} value={homeContentForm[key] || ""} onChange={(event) => setHomeContentForm((current) => ({ ...current, [key]: event.target.value }))} />}
                </AdminField>
              ))}
            </div>
          </details>
        ))}
      </div>
      <div className="bg-[#07101f] p-4 sm:p-6">
        <p className="mb-3 text-xs font-bold uppercase text-zinc-500">{t.livePreviewLabel}</p>
        <div className="wb space-y-4 rounded-xl border border-[#C9D3CD] p-4">
          <div>
            <p data-preview-badge className="wb-mono text-xs font-semibold uppercase tracking-widest text-[#0B5A44]">{homeContentForm.hero_badge}</p>
            <h2 data-preview-hero-title className="wb-head mt-2 text-2xl font-bold leading-tight text-[#0F1A17]">{homeContentForm.hero_title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#33423C]">{homeContentForm.hero_text}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-[#C9D3CD] bg-white p-3">
            {[1, 2, 3, 4].map((n) => {
              const value = (homeContentForm[`stat_${n}_value`] || "").trim() || (n === 1 ? "auto" : "");
              if (!value) return null;
              return (
                <div key={n}>
                  <p className="wb-head text-2xl font-bold text-[#0B5A44]">{value}</p>
                  <p className="text-xs text-[#4A5A54]">{homeContentForm[`stat_${n}_label`]}</p>
                </div>
              );
            })}
          </div>
          <div className="rounded-xl border border-[#C9D3CD] bg-white p-3 text-sm leading-6 text-[#4A5A54]">
            <p>{homeContentForm.warning_one}</p>
          </div>
          <div className="rounded-xl bg-[#0B5A44] p-4 text-white">
            <h3 className="wb-head font-bold">{homeContentForm.collaboration_title}</h3>
            <p className="mt-1 text-sm leading-6 text-white/80">{homeContentForm.collaboration_text}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const galleryList = splitLines(galleryImagesForm);
  const renderGallery = () => (
    <div className="mx-auto max-w-4xl space-y-4 p-4 sm:p-6">
      <p className="text-sm text-zinc-400">{ui.galleryHint}</p>
      <ImageListEditor
        images={galleryList}
        ui={ui}
        subfolder="galerie"
        uploadImage={uploadImageToGithub}
        onChange={(list) => setGalleryImagesForm(list.join("\n"))}
        onAdd={(url) => setGalleryImagesForm((current) => (current.trim() ? `${current}\n${url}` : url))}
      />
    </div>
  );

  const renderJourney = () => (
    <div className="grid lg:grid-cols-2">
      <div className="space-y-4 border-white/10 p-4 sm:p-6 lg:border-r">
        <AdminLangTabs tabs={wayLangTabs} onSelect={setWayLang} />
        <p className="text-sm text-zinc-400">{ui.journeyHint}</p>
        <AdminField label={t.titleLabelRequired}>
          <input className={inputClass} value={personalWayForm.title} onChange={(event) => setPersonalWayForm((current) => ({ ...current, title: event.target.value }))} />
        </AdminField>
        <div className="grid gap-4 sm:grid-cols-2">
          {[["image_1", t.image1Label], ["image_2", t.image2Label]].map(([key, label]) => (
            <AdminField key={key} label={label} plain>
              {personalWayForm[key] && (
                <div className="relative mb-2 h-28 overflow-hidden rounded-xl border border-white/10">
                  <img src={personalWayForm[key]} alt="" className="h-full w-full object-cover" />
                </div>
              )}
              <DropUpload compact label={ui.dropImage} subfolder="personal-way" uploadImage={uploadImageToGithub} busyLabel={ui.uploading} onUploaded={(url) => setPersonalWayForm((current) => ({ ...current, [key]: url }))} />
            </AdminField>
          ))}
        </div>
        <AdminField label={t.markdownContentLabelRequired} help={ui.bodyHelp}>
          <textarea className={`${inputClass} min-h-[320px] font-mono leading-6`} value={personalWayForm.content} onChange={(event) => setPersonalWayForm((current) => ({ ...current, content: event.target.value }))} />
        </AdminField>
      </div>
      <div className="bg-[#07101f] p-4 sm:p-6">
        <p className="mb-3 text-xs font-bold uppercase text-zinc-500">{t.previewLabel}</p>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-3">
            {personalWayForm.image_1 && <img src={personalWayForm.image_1} alt="" className="h-36 w-full rounded-xl object-cover" />}
            {personalWayForm.image_2 && <img src={personalWayForm.image_2} alt="" className="h-36 w-full rounded-xl object-cover" />}
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-cyan-300">{t.personalWayPreviewLabel}</p>
            <h2 className="mt-2 text-xl font-black leading-tight">{personalWayForm.title}</h2>
            <div className="prose prose-invert mt-4 max-w-none text-sm leading-6 prose-p:my-3 prose-p:text-zinc-300">
              <ReactMarkdown>{personalWayForm.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLook = () => (
    <div className="mx-auto grid max-w-4xl gap-6 p-4 sm:p-6 md:grid-cols-2">
      <section className={cardClass}>
        <h3 className="mb-3 font-black">{ui.bgTitle}</h3>
        <div className="relative mb-3 h-40 overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">
          {siteSettingsForm.background_image
            ? <img src={siteSettingsForm.background_image} alt="" className="h-full w-full object-cover opacity-70" />
            : <div className="flex h-full items-center justify-center px-3 text-center text-sm text-zinc-500">{t.noBackgroundText}</div>}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-900/30 to-fuchsia-600/20" />
        </div>
        <DropUpload compact label={ui.dropImage} hint={ui.dropHint} subfolder="background" uploadImage={uploadImageToGithub} busyLabel={ui.uploading} onUploaded={(url) => setSiteSettingsForm((current) => ({ ...current, background_image: url }))} />
        {siteSettingsForm.background_image && (
          <button type="button" onClick={() => setSiteSettingsForm((current) => ({ ...current, background_image: "" }))} className={`${secondaryButton} mt-3 !py-1.5 text-xs`}>{ui.bgRemove}</button>
        )}
      </section>
      <section className={cardClass}>
        <h3 className="mb-3 font-black">{ui.resumeTitle}</h3>
        {siteSettingsForm.resume_url ? (
          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#07111f] p-3">
              <FileText className="h-8 w-8 shrink-0 text-cyan-300" />
              <div className="min-w-0 flex-1">
                <p data-resume-name className="truncate text-sm font-bold">{siteSettingsForm.resume_url.split("/").pop()}</p>
                <span className="mt-1 inline-block rounded-full bg-emerald-400/15 px-2 py-0.5 text-[11px] font-bold text-emerald-300">{ui.resumeLive}</span>
              </div>
              <a href={siteSettingsForm.resume_url} target="_blank" rel="noopener noreferrer" className={`${secondaryButton} !px-3 !py-1.5 text-xs`}><ExternalLink className="h-3.5 w-3.5" /> {ui.resumeOpen}</a>
            </div>
            <DropUpload compact icon={FileText} accept="application/pdf" label={ui.resumeReplace} hint={ui.dropPdf} uploadImage={(file) => uploadFileToGithub(file, "documents")} busyLabel={ui.uploading} onUploaded={handleResumeUploaded} />
            <button type="button" onClick={deleteResumeFromGithub} className="inline-flex w-fit items-center gap-2 rounded-xl border border-red-400/30 px-3 py-1.5 text-xs font-bold text-red-200 hover:bg-red-400/10"><Trash2 className="h-3.5 w-3.5" /> {ui.resumeRemove}</button>
            <p className="text-xs text-zinc-500">{ui.resumeNote}</p>
            <a href={siteSettingsForm.resume_url} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 px-4 py-2 text-sm font-black text-black"><FileText className="h-4 w-4" /> {t.resumeButton}</a>
          </div>
        ) : (
          <DropUpload icon={FileText} accept="application/pdf" label={ui.dropPdf} hint={ui.dropHint} uploadImage={(file) => uploadFileToGithub(file, "documents")} busyLabel={ui.uploading} onUploaded={handleResumeUploaded} />
        )}
      </section>
      <section className={cardClass}>
        <h3 className="mb-3 font-black">{stui.logoTitle}</h3>
        <div className="mb-3 flex items-center gap-3 rounded-xl border border-white/10 bg-[#07111f] p-3">
          {siteSettingsForm.logo_image
            ? <img src={siteSettingsForm.logo_image} alt="" className="h-12 w-12 rounded-lg object-contain" />
            : <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B5A44] text-sm font-black text-white">{siteSettingsForm.logo_text || "NND"}</span>}
          <p className="text-sm font-bold">{siteSettingsForm.site_name || "Nguyen Nhan Do"}</p>
        </div>
        <DropUpload compact label={stui.logoImage} hint={stui.logoImageHint} subfolder="logo" uploadImage={uploadImageToGithub} busyLabel={ui.uploading} onUploaded={(url) => setSiteSettingsForm((current) => ({ ...current, logo_image: url }))} />
        {siteSettingsForm.logo_image && (
          <button type="button" onClick={() => setSiteSettingsForm((current) => ({ ...current, logo_image: "" }))} className={`${secondaryButton} mt-3 !py-1.5 text-xs`}>{stui.logoRemove}</button>
        )}
        <div className="mt-4 grid gap-3">
          <AdminField label={stui.logoText}><input className={inputClass} value={siteSettingsForm.logo_text || ""} placeholder="NND" onChange={(event) => setSiteSettingsForm((current) => ({ ...current, logo_text: event.target.value }))} /></AdminField>
          <AdminField label={stui.siteName}><input className={inputClass} value={siteSettingsForm.site_name || ""} placeholder="Nguyen Nhan Do" onChange={(event) => setSiteSettingsForm((current) => ({ ...current, site_name: event.target.value }))} /></AdminField>
        </div>
      </section>
      <section className={cardClass}>
        <h3 className="mb-3 font-black">{stui.heroTitle}</h3>
        <div className="mb-3 h-44 overflow-hidden rounded-xl border border-white/10 bg-[#07111f]">
          <img src={siteSettingsForm.hero_image || SITE_DEFAULTS.hero_image} alt="" className="h-full w-full object-cover object-top" />
        </div>
        <DropUpload compact label={ui.dropImage} hint={ui.dropHint} subfolder="portrait" uploadImage={uploadImageToGithub} busyLabel={ui.uploading} onUploaded={(url) => setSiteSettingsForm((current) => ({ ...current, hero_image: url }))} />
        {siteSettingsForm.hero_image && (
          <button type="button" onClick={() => setSiteSettingsForm((current) => ({ ...current, hero_image: "" }))} className={`${secondaryButton} mt-3 !py-1.5 text-xs`}>{stui.heroRemove}</button>
        )}
      </section>
      <section className={`${cardClass} md:col-span-2`}>
        <h3 className="mb-3 font-black">{stui.contactTitle}</h3>
        <div className="grid gap-3 md:grid-cols-2">
          <AdminField label={stui.contactEmail}><input className={inputClass} type="email" value={siteSettingsForm.contact_email || ""} placeholder={SITE_DEFAULTS.contact_email} onChange={(event) => setSiteSettingsForm((current) => ({ ...current, contact_email: event.target.value }))} /></AdminField>
          <label className="flex items-center gap-3 md:col-span-2"><input type="checkbox" className="h-4 w-4 accent-cyan-400" checked={String(siteSettingsForm.live_autoplay ?? "").trim().toLowerCase() !== "off"} onChange={(event) => setSiteSettingsForm((current) => ({ ...current, live_autoplay: event.target.checked ? "on" : "off" }))} /><span className="text-sm text-zinc-300">{stui.liveAutoplay}</span></label>
          <AdminField label={stui.liveTiles} help={stui.liveTilesHint}><textarea className={`${inputClass} leading-6`} rows={3} value={siteSettingsForm.live_tiles || ""} placeholder={SITE_DEFAULTS.live_tiles} onChange={(event) => setSiteSettingsForm((current) => ({ ...current, live_tiles: event.target.value }))} /></AdminField>
        </div>
      </section>
    </div>
  );

  const renderSiteTexts = () => {
    const wbDefaults = getWbDefaults(textLang);
    const uiDefaults = getUiDefaults(textLang);
    const draft = textDrafts[textLang] || {};
    const query = textSearch.trim().toLowerCase();
    const setValue = (key, value) => setTextDrafts((current) => ({ ...current, [textLang]: { ...current[textLang], [key]: value } }));
    const textLangTabs = LANGUAGES.map((language) => ({ language, state: textLang === language ? "current" : "exists" }));
    const sections = [
      ...WB_TEXT_GROUPS.map(([groupKey, keys]) => [groupKey, keys, wbDefaults]),
      ...UI_TEXT_GROUPS.map(([groupKey, keys]) => [groupKey, keys, uiDefaults]),
    ].map(([groupKey, keys, defaults]) => [groupKey, keys.filter((key) => {
      if (!query) return true;
      return key.toLowerCase().includes(query) || String(defaults[key] || "").toLowerCase().includes(query) || String(draft[key] || "").toLowerCase().includes(query);
    }), defaults]).filter(([, keys]) => keys.length > 0);

    return (
      <div className="mx-auto grid max-w-4xl gap-4 p-4 sm:p-6">
        <AdminLangTabs tabs={textLangTabs} onSelect={setTextLang} />
        <p className="text-sm text-zinc-400">{stui.hint}</p>
        <p className="text-xs text-zinc-500">{stui.legalNote}</p>
        <input className={inputClass} value={textSearch} placeholder={stui.search} onChange={(event) => setTextSearch(event.target.value)} aria-label={stui.search} />
        {sections.length === 0 && <p className="text-sm text-zinc-500">{stui.none}</p>}
        {sections.map(([groupKey, keys, defaults], index) => (
          <details key={groupKey} open={Boolean(query) || index === 0} className="rounded-2xl border border-white/10 bg-[#0a1424] p-4">
            <summary className="cursor-pointer select-none font-black">{stui.groups[groupKey]}</summary>
            <div className="mt-4 grid gap-4">
              {keys.map((key) => (
                <div key={key}>
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-400">{key}</span>
                    {draft[key] && <button type="button" onClick={() => setValue(key, "")} className="text-xs font-bold text-cyan-300 hover:text-cyan-200">{stui.reset}</button>}
                  </div>
                  {LONG_TEXT_KEYS.has(key)
                    ? <textarea className={`${inputClass} leading-6`} rows={3} value={draft[key] || ""} placeholder={String(defaults[key] || "")} onChange={(event) => setValue(key, event.target.value)} />
                    : <input className={inputClass} value={draft[key] || ""} placeholder={String(defaults[key] || "")} onChange={(event) => setValue(key, event.target.value)} />}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    );
  };

  const renderSettings = () => (
    <div className="mx-auto grid max-w-3xl gap-4 p-4 sm:p-6">
      <section className={cardClass}>
        <div className="flex flex-wrap items-center gap-3">
          <span className={`h-2.5 w-2.5 rounded-full ${tokenSaved ? "bg-emerald-400" : "bg-red-400"}`} />
          <div className="flex-1">
            <h3 className="font-black">GitHub</h3>
            <p data-github-status className="text-xs text-zinc-400">{tokenSaved ? ui.setGithubOk : ui.setGithubMissing}</p>
          </div>
          <button type="button" onClick={() => setShowGithubToken((current) => !current)} className={secondaryButton}>
            {showGithubToken ? ui.hideToken : tokenSaved ? ui.changeToken : ui.enterToken}
          </button>
          <button type="button" onClick={testGithubToken} className={secondaryButton}><Code2 className="h-4 w-4" /> {t.testTokenButton}</button>
        </div>
        {showGithubToken && (
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4">
            <p className="text-sm leading-6 text-zinc-300">
              {t.githubTokenIntroPre}<span className="font-bold text-white">Contents: Read and write</span>{t.githubTokenIntroMid}<span className="font-bold text-white">{GITHUB_REPO_OWNER}/{GITHUB_REPO_NAME}</span>{t.githubTokenIntroPost}
            </p>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input type="password" aria-label="GitHub token" value={githubToken} onChange={(event) => setGithubToken(event.target.value)} className={inputClass} placeholder="github_pat_..." />
              <button type="button" onClick={saveGithubToken} className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-2 text-sm font-black text-black hover:bg-sky-300"><Save className="h-4 w-4" /> {t.saveTokenButton}</button>
            </div>
          </div>
        )}
      </section>
      <section className={`${cardClass} flex flex-wrap items-center gap-3`}>
        <KeyRound className="h-5 w-5 text-cyan-300" />
        <div className="flex-1">
          <h3 className="font-black">{ui.passwordTitle}</h3>
          <p className="text-xs text-zinc-400">{ui.passwordDesc}</p>
        </div>
        <button type="button" onClick={() => setShowPasswordModal(true)} className={secondaryButton}>{ui.passwordBtn}</button>
      </section>
      <section className={`${cardClass} flex flex-wrap items-center gap-3`}>
        <h3 className="flex-1 font-black">{ui.uiLangTitle}</h3>
        <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
          {LANGUAGES.map((language) => (
            <button key={language} type="button" onClick={() => changeUiLanguage(language)} className={`rounded-full px-3 py-1.5 text-xs font-black uppercase ${uiLanguage === language ? "bg-cyan-400 text-black" : "text-zinc-400 hover:text-white"}`}>{language}</button>
          ))}
        </div>
      </section>
    </div>
  );

  const viewBody = {
    home: renderHome,
    posts: renderPosts,
    editor: renderEditor,
    order: renderOrder,
    hometext: renderHomeText,
    gallery: renderGallery,
    journey: renderJourney,
    look: renderLook,
    sitetexts: renderSiteTexts,
    settings: renderSettings,
  }[view]();

  return (
    <div className="flex h-screen overflow-hidden bg-[#050816] text-white">
      {navOpen && <button type="button" aria-label="Close menu" className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setNavOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col gap-1 overflow-y-auto border-r border-white/10 bg-[#07101f] p-3 transition-transform lg:static lg:translate-x-0 ${navOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-3 px-2 pb-4 pt-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 text-black"><CircuitBoard className="h-5 w-5" /></div>
          <span className="font-black">ElektronikLab</span>
          <button type="button" onClick={() => setNavOpen(false)} aria-label="Close menu" className="ml-auto rounded-md p-1 text-zinc-400 lg:hidden"><X className="h-5 w-5" /></button>
        </div>
        {navGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="grid gap-0.5">
            {group.title && <p className="px-3 pb-1 pt-4 text-[10.5px] font-bold uppercase tracking-wider text-zinc-500">{group.title}</p>}
            {group.items.map((item) => {
              const active = item.id === view || (item.id === "posts" && view === "editor");
              return (
                <button
                  key={item.id}
                  type="button"
                  data-nav={item.id}
                  aria-current={active ? "page" : undefined}
                  onClick={() => goTo(item.id)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition ${active ? "bg-cyan-400/15 font-bold text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"}`}
                >
                  <item.icon className="h-[18px] w-[18px] shrink-0" />
                  <span className="flex-1 truncate">{item.label}</span>
                  {navDirty[item.id] && <span title={ui.pending(1)} className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />}
                  {item.badge !== undefined && <span className="rounded-full border border-white/10 px-2 text-[11px] text-zinc-400">{item.badge}</span>}
                </button>
              );
            })}
          </div>
        ))}
        <div className="mt-auto grid gap-1 border-t border-white/10 px-2 pt-3 text-xs text-zinc-400">
          <button type="button" onClick={() => goTo("settings")} className="flex items-center gap-2 text-left hover:text-white">
            <span className={`h-2 w-2 rounded-full ${tokenSaved ? "bg-emerald-400" : "bg-red-400"}`} />
            {tokenSaved ? ui.githubOk : ui.githubMissing}
          </button>
          <a href={`/${GITHUB_REPO_NAME}/`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-cyan-300 hover:text-cyan-200">{ui.viewSite} <ExternalLink className="h-3 w-3" /></a>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="relative z-20 flex flex-wrap items-center gap-3 border-b border-white/10 bg-[#07101f] px-4 py-3 sm:px-6">
          <button type="button" onClick={() => setNavOpen(true)} aria-label={ui.openNav} className="rounded-lg border border-white/10 p-2 lg:hidden"><Menu className="h-5 w-5" /></button>
          <div className="min-w-0 flex-1">
            <h1 data-page-title className="truncate text-lg font-black">{pageTitle}</h1>
            <p className="truncate text-xs text-zinc-400">{pageSub}</p>
          </div>
          <span data-dirty-state={dirtyCount ? "dirty" : "clean"} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold ${dirtyCount ? "border-amber-400/40 text-amber-300" : "border-white/10 text-zinc-400"}`}>
            <span className={`h-2 w-2 rounded-full ${dirtyCount ? "bg-amber-400" : "bg-emerald-400"}`} />
            {dirtyCount ? ui.pending(dirtyCount) : ui.upToDate}
          </span>
          <div className="relative">
            <button type="button" aria-label="More" aria-expanded={moreOpen} onClick={() => setMoreOpen((current) => !current)} className="rounded-xl border border-white/10 p-2 hover:bg-white/10"><Ellipsis className="h-5 w-5" /></button>
            {moreOpen && (
              <>
                <button type="button" aria-label="Close" className="fixed inset-0 z-10 cursor-default" onClick={() => setMoreOpen(false)} />
                <div className="absolute right-0 top-full z-20 mt-2 grid w-60 gap-0.5 rounded-xl border border-white/10 bg-[#0c1627] p-1.5 shadow-2xl">
                  {canExport && <button type="button" onClick={exportCurrent} className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-white/10"><Download className="h-4 w-4" /> {ui.menuExport}</button>}
                  <button type="button" disabled={!dirtyCount} onClick={discardAll} className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-white/10 disabled:opacity-40"><X className="h-4 w-4" /> {ui.menuDiscard}</button>
                  <button type="button" onClick={onLogout} className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-white/10"><LogOut className="h-4 w-4" /> {ui.menuLogout}</button>
                </div>
              </>
            )}
          </div>
          <button
            type="button"
            data-publish
            disabled={!dirtyCount || publishing}
            onClick={publishAll}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Upload className="h-4 w-4" /> {publishing ? ui.publishing : ui.publish}{dirtyCount > 0 && !publishing ? ` (${dirtyCount})` : ""}
          </button>
        </header>
        <DeployStatusBanner state={deployState} onDismiss={() => setDeployState(null)} language={uiLanguage} />
        <main className="min-h-0 flex-1 overflow-y-auto">{viewBody}</main>
      </div>

      {saveMessage && (
        <div role="status" data-toast className="fixed bottom-4 left-1/2 z-50 flex w-[min(92vw,34rem)] -translate-x-1/2 items-start gap-3 rounded-xl border border-cyan-300/40 bg-[#0c1627] px-4 py-3 text-sm shadow-2xl">
          <span className="flex-1 leading-6">{saveMessage}</span>
          <button type="button" aria-label="Close" onClick={() => setSaveMessage("")} className="rounded-md p-1 hover:bg-white/10"><X className="h-4 w-4" /></button>
        </div>
      )}
      {showPasswordModal && <AdminPasswordModal onClose={() => setShowPasswordModal(false)} language={uiLanguage} />}
    </div>
  );
}

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// HOME PAGE — "Werkbank"
// ─────────────────────────────────────────────
const WB_PILL = {
  live: "bg-[#DDF3E8] text-[#0A5A3A]",
  store: "bg-[#DCE8FA] text-[#1C4A94]",
  demo: "bg-[#FBE7D3] text-[#8A4410]",
  idea: "bg-[#E4E8E5] text-[#33423C]",
  in_progress: "bg-[#FFF1BF] text-[#6B5200]",
  done: "bg-[#E1F0E8] text-[#0B5A44]",
};

const getWbField = (post) => (/web|software/i.test(String(post.category || "")) ? "sw" : "hw");

const getWbPill = (post, w, language) => {
  const link = String(post.external_link || "");
  if (link.includes("online.tavrion.de")) return { label: w.st_live, cls: WB_PILL.live };
  if (link.includes("demo.tavrion.de") || link.includes("provisionpro.tavrion.de")) return { label: w.st_demo, cls: WB_PILL.demo };
  if (link.includes("microsoft.com")) return { label: w.st_store, cls: WB_PILL.store };
  const status = normalizeStatus(post.project_status);
  return { label: getStatusLabel(status, language), cls: WB_PILL[status] };
};

function WbSectionHead({ eyebrow, title, lead }) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="wb-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#A8540F]">{eyebrow}</p>
      <h2 className="wb-head mt-2 text-3xl font-bold leading-tight text-[#0F1A17] sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#4A5A54] sm:text-base">{lead}</p>}
    </div>
  );
}

const liveStep = (track) => {
  const first = track?.children?.[0];
  return first ? first.getBoundingClientRect().width + 16 : 0;
};

function LiveCarousel({ tiles, w, getPostUrl, autoplay }) {
  const trackRef = useRef(null);
  const hoverRef = useRef(false);
  const [active, setActive] = useState(0);
  const [overflow, setOverflow] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === "undefined") return undefined;
    const update = () => setOverflow(track.scrollWidth > track.clientWidth + 4);
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => observer.disconnect();
  }, [tiles.length]);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * liveStep(track), behavior: reduceMotion ? "auto" : "smooth" });
  };
  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    if (direction > 0 && atEnd) scrollToIndex(0);
    else track.scrollBy({ left: direction * liveStep(track), behavior: reduceMotion ? "auto" : "smooth" });
  };

  useEffect(() => {
    if (!autoplay || paused || reduceMotion || !overflow) return undefined;
    const timer = setInterval(() => {
      if (hoverRef.current || document.hidden) return;
      const track = trackRef.current;
      if (!track) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: liveStep(track), behavior: "smooth" });
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay, paused, reduceMotion, overflow]);

  const onScroll = (event) => {
    const track = event.currentTarget;
    const step = liveStep(track) || 1;
    setActive(Math.min(tiles.length - 1, Math.round(track.scrollLeft / step)));
  };
  const controlClass = "flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white text-[#083D2F] shadow transition hover:bg-[#F2B279] disabled:opacity-40";

  return (
    <div data-live-carousel className="mt-9" onMouseEnter={() => { hoverRef.current = true; }} onMouseLeave={() => { hoverRef.current = false; }} onFocus={() => { hoverRef.current = true; }} onBlur={() => { hoverRef.current = false; }} onTouchStart={() => { hoverRef.current = true; }} onTouchEnd={() => { setTimeout(() => { hoverRef.current = false; }, 4000); }}>
      <div ref={trackRef} data-live-track onScroll={onScroll} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tiles.map(({ post, name, host, kind, hint }) => (
          <a key={post.id} href={post.external_link || getPostUrl(post.id)} target="_blank" rel="noopener noreferrer" className="group flex h-[128px] shrink-0 basis-[88%] snap-start items-center gap-3.5 rounded-2xl border border-white/20 bg-white/[0.06] p-3 transition hover:border-[#F2B279] hover:bg-white/[0.1] min-[620px]:basis-[calc(50%-8px)] lg:basis-[calc(33.333%-11px)]">
            <img src={post.image_url} alt="" loading="lazy" className="h-[100px] w-[132px] shrink-0 rounded-xl border border-white/15 object-cover object-top" />
            <span className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
              <span className="wb-mono inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/70"><span className={`h-1.5 w-1.5 shrink-0 rounded-full ${kind === "store" ? "bg-[#7FB2F5]" : "bg-[#38D39A]"}`} />{kind === "live" ? w.st_live : kind === "demo" ? w.st_demo : w.st_store}</span>
              <span className="wb-head line-clamp-2 text-base font-bold leading-tight">{name}</span>
              <span className="wb-mono truncate text-[11px] text-[#F2B279]">{host}</span>
              {hint && <span className="truncate text-[10.5px] text-white/65" title={w.demo_hint}>{w.demo_hint}</span>}
              <span className="mt-0.5 inline-flex items-center gap-1 text-[13px] font-semibold">{w.open} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span>
            </span>
          </a>
        ))}
      </div>
      {overflow && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="tablist">
            {tiles.map(({ post, name }, index) => (
              <button key={post.id} type="button" role="tab" aria-selected={index === active} aria-label={name} onClick={() => scrollToIndex(index)} className={`h-2.5 rounded-full transition-all ${index === active ? "w-6 bg-[#F2B279]" : "w-2.5 bg-white/40 hover:bg-white/70"}`} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            {autoplay && !reduceMotion && (
              <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? w.carousel_play : w.carousel_pause} title={paused ? w.carousel_play : w.carousel_pause} className={controlClass}>
                {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
            )}
            <button type="button" onClick={() => move(-1)} aria-label={w.carousel_prev} className={controlClass}><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" onClick={() => move(1)} aria-label={w.carousel_next} className={controlClass}><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

function HomePage({ posts, galleryImages, onOpenPost, getPostUrl, onGoImpressum, onGoDatenschutz, onGoKnowledge, language }) {
  const INITIAL_COUNT = 9;
  const t = getUiText(language);
  const w = getWbText(language);
  const personalWay = getPersonalWay(language);
  const site = getSiteConfig();
  const email = site.email;
  const skills = getWbSkills(language);

  const [search, setSearch] = useState("");
  const [field, setField] = useState("all");
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const [galleryLightbox, setGalleryLightbox] = useState(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [pathOpen, setPathOpen] = useState(false);

  const sortedPosts = useMemo(() => [...posts].sort((a, b) => {
    const oA = isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
    const oB = isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
    return oA !== oB ? oA - oB : new Date(b.created_at || 0) - new Date(a.created_at || 0);
  }), [posts]);

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return sortedPosts.filter((p) => {
      const tags = Array.isArray(p.tags) ? p.tags : [];
      const matchField = field === "all" || getWbField(p) === field;
      const matchText = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.content.toLowerCase().includes(q) || tags.some((tag) => tag.toLowerCase().includes(q));
      return matchField && matchText;
    });
  }, [sortedPosts, search, field]);

  const liveTiles = site.liveTiles.map((entry) => ({ entry, post: posts.find((p) => p.id === entry.id) })).filter((item) => item.post).map(({ entry, post }) => {
    const link = String(post.external_link || "");
    const kind = link.includes("microsoft.com") ? "store" : (link.includes("demo.tavrion.de") || link.includes("provisionpro.tavrion.de")) ? "demo" : "live";
    const host = link.includes("microsoft.com") ? "Microsoft Store" : link.replace(/^https?:\/\//, "").split("/")[0];
    return { post, name: entry.name || post.title.split(/\s[–—-]\s/)[0], host, kind, hint: link.includes("demo.tavrion.de") };
  });
  const featured = filteredPosts.find((p) => !["Über mich", "Grundlagen"].includes(p.category));
  const showFeatured = Boolean(featured) && !search.trim();
  const restPosts = showFeatured ? filteredPosts.filter((p) => p.id !== featured.id) : filteredPosts;
  const gridPosts = restPosts.slice(0, visible);
  const hiddenCount = restPosts.length - gridPosts.length;
  const gallerySideImages = galleryImages.map((image, index) => ({ image, index })).filter(({ index }) => index !== selectedGalleryIndex).slice(0, 2);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const openPostLink = (post) => (event) => {
    if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      onOpenPost(post.id);
    }
  };

  const FIELD_FILTERS = [["all", w.f_all], ["hw", w.f_hw], ["sw", w.f_sw]];
  const stats = (t.stats || [])
    .map((item, index) => [item.value || (index === 0 ? String(posts.length) : ""), item.label || [w.s1, w.s2, w.s3, w.s4][index]])
    .filter(([value]) => value);

  const renderCard = (post) => {
    const pill = getWbPill(post, w, language);
    const idea = isIdea(post);
    return (
      <a key={post.id} href={getPostUrl(post.id)} onClick={openPostLink(post)} className="group flex flex-col overflow-hidden rounded-2xl border border-[#C9D3CD] bg-white transition duration-200 hover:-translate-y-1 hover:border-[#0B5A44] hover:shadow-[0_18px_34px_-22px_rgba(11,90,68,0.55)]">
        <div className="relative h-48 overflow-hidden bg-[#E9EEEA]">
          <img src={post.image_url} alt={post.title} loading="lazy" className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] ${idea ? "grayscale opacity-80" : ""}`} />
          <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-sm ${pill.cls}`}>{pill.label}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="wb-mono text-[11px] uppercase tracking-wider text-[#4A5A54]">{getCategoryLabel(post.category, language)} · {post.created_at ? new Date(post.created_at).getFullYear() : ""}</div>
          <h3 className="wb-head mt-2 text-xl font-bold leading-snug text-[#0F1A17]">{post.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#33423C]">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {(post.tags || []).slice(0, 4).map((tag) => <span key={tag} className="wb-mono rounded-md border border-[#D5DDD8] bg-[#F3F5F2] px-2 py-0.5 text-[11px] text-[#33423C]">{tag}</span>)}
          </div>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#0B5A44]">{w.read} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
        </div>
      </a>
    );
  };

  return (
    <div className="wb min-h-screen overflow-x-hidden">
      <main className="pt-[72px] sm:pt-[80px]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#D5DDD8]">
          <div className="wb-grid wb-grid-fade absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <span className="wb-mono inline-flex items-center gap-2 rounded-full border border-[#C9D3CD] bg-white px-3.5 py-1.5 text-xs font-medium text-[#0B5A44]">
                <CircuitBoard className="h-3.5 w-3.5" /> {t.heroBadge}
              </span>
              <h1 className="wb-head mt-5 text-[2.2rem] font-bold leading-[1.05] text-[#0F1A17] sm:text-5xl lg:text-[3.5rem]">{t.heroTitle}</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#33423C] sm:text-lg sm:leading-8">{t.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={() => go("projekte")} className="inline-flex items-center gap-2 rounded-xl bg-[#0B5A44] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#083D2F]">{w.cta_projects} <ArrowRight className="h-4 w-4" /></button>
                <button type="button" onClick={() => go("kontakt")} className="inline-flex items-center gap-2 rounded-xl border border-[#0F1A17] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F1A17] transition hover:bg-[#0F1A17] hover:text-white">{w.cta_contact}</button>
                {site.resumeUrl && (
                  <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#C9D3CD] bg-white px-6 py-3.5 text-sm font-semibold text-[#0B5A44] transition hover:border-[#0B5A44]"><FileText className="h-4 w-4" /> {t.resumeButton}</a>
                )}
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-[#4A5A54]"><span className="h-2.5 w-2.5 rounded-full bg-[#1FA971] shadow-[0_0_0_4px_rgba(31,169,113,0.18)]" /> {w.available}</p>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-[#C9D3CD] bg-white p-3 shadow-[0_30px_60px_-34px_rgba(11,90,68,0.5)]">
                <img src={site.heroImage} alt={site.siteName} className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
              </div>
              <div className="absolute -left-2 top-8 flex items-center gap-2.5 rounded-xl border border-[#C9D3CD] bg-white px-3.5 py-2.5 shadow-lg sm:-left-6">
                <span className="h-2.5 w-2.5 rounded-full bg-[#1FA971]" />
                <div><p className="text-xs font-bold text-[#0F1A17]">{w.chip_live}</p><p className="wb-mono text-[11px] text-[#4A5A54]">{w.chip_live_sub}</p></div>
              </div>
              <div className="absolute -right-2 bottom-10 flex items-center gap-2.5 rounded-xl border border-[#0B5A44] bg-[#0B5A44] px-3.5 py-2.5 text-white shadow-lg sm:-right-6">
                <CircuitBoard className="h-4 w-4 text-[#F2B279]" />
                <div><p className="text-xs font-bold">{w.chip_board}</p><p className="wb-mono text-[11px] text-white/75">{w.chip_board_sub}</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-b border-[#D5DDD8] bg-white">
          <div className={`mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-7 sm:px-5 ${stats.length === 3 ? "lg:grid-cols-3" : stats.length === 2 ? "lg:grid-cols-2" : stats.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-4"}`}>
            {stats.map(([value, label], index) => (
              <div key={label} className={`px-2 sm:px-6 ${index > 0 ? "lg:border-l lg:border-[#D5DDD8]" : ""}`}>
                <p className="wb-head text-4xl font-bold text-[#0B5A44]">{value}</p>
                <p className="mt-1 text-sm text-[#4A5A54]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projekte" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-5 sm:py-20">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <WbSectionHead eyebrow={t.technicalBlog} title={w.sec_projects} />
            <div className="-mt-4 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-0 lg:mb-10">
              <div className="flex flex-wrap gap-2">
                {FIELD_FILTERS.map(([key, label]) => (
                  <button key={key} type="button" onClick={() => { setField(key); setVisible(INITIAL_COUNT); }} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${field === key ? "border-[#0B5A44] bg-[#0B5A44] text-white" : "border-[#C9D3CD] bg-white text-[#33423C] hover:border-[#0B5A44]"}`}>{label}</button>
                ))}
              </div>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A5A54]" />
                <input value={search} onChange={(e) => { setSearch(e.target.value); setVisible(INITIAL_COUNT); }} placeholder={w.search} aria-label={w.search} className="w-full rounded-full border border-[#C9D3CD] bg-white py-2.5 pl-10 pr-4 text-sm text-[#0F1A17] outline-none placeholder:text-[#66756F] focus:border-[#0B5A44] focus:ring-4 focus:ring-[#0B5A44]/15 sm:w-60" />
              </div>
            </div>
          </div>

          {filteredPosts.length === 0 && <div className="rounded-2xl border border-dashed border-[#C9D3CD] bg-white py-16 text-center text-[#4A5A54]">{w.none}</div>}

          {showFeatured && (() => {
            const pill = getWbPill(featured, w, language);
            return (
              <a href={getPostUrl(featured.id)} onClick={openPostLink(featured)} className="group mb-6 grid overflow-hidden rounded-3xl border border-[#C9D3CD] bg-white transition duration-200 hover:border-[#0B5A44] hover:shadow-[0_22px_44px_-26px_rgba(11,90,68,0.55)] md:grid-cols-[1.1fr_1fr]">
                <div className="relative min-h-[240px] overflow-hidden bg-[#E9EEEA]">
                  <img src={featured.image_url} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <span className="wb-mono absolute left-4 top-4 rounded-full bg-[#A8540F] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">{w.featured}</span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-9">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${pill.cls}`}>{pill.label}</span>
                    <span className="wb-mono text-[11px] uppercase tracking-wider text-[#4A5A54]">{getCategoryLabel(featured.category, language)}</span>
                  </div>
                  <h3 className="wb-head mt-4 text-2xl font-bold leading-tight text-[#0F1A17] sm:text-3xl">{featured.title}</h3>
                  <p className="mt-3 line-clamp-4 text-[15px] leading-7 text-[#33423C]">{featured.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {(featured.tags || []).slice(0, 5).map((tag) => <span key={tag} className="wb-mono rounded-md border border-[#D5DDD8] bg-[#F3F5F2] px-2 py-0.5 text-[11px] text-[#33423C]">{tag}</span>)}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B5A44]">{w.read} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </div>
              </a>
            );
          })()}

          <div className="grid gap-5 min-[620px]:grid-cols-2 lg:grid-cols-3">{gridPosts.map(renderCard)}</div>

          {hiddenCount > 0 && (
            <div className="mt-9 text-center">
              <button type="button" onClick={() => setVisible((v) => v + INITIAL_COUNT)} className="rounded-full border border-[#0F1A17] bg-white px-7 py-3 text-sm font-semibold text-[#0F1A17] transition hover:bg-[#0F1A17] hover:text-white">{w.more} ({hiddenCount})</button>
            </div>
          )}
          <p className="mt-8 max-w-3xl text-sm leading-6 text-[#4A5A54]">{t.warningOne}</p>
        </section>

        {/* Live */}
        {liveTiles.length > 0 && (
          <section className="bg-[#083D2F] text-white">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-16">
              <p className="wb-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#F2B279]">{w.sec_live}</p>
              <h2 className="wb-head mt-2 text-3xl font-bold sm:text-4xl">{w.sec_live}</h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/75">{w.live_sub}</p>
              <LiveCarousel tiles={liveTiles} w={w} getPostUrl={getPostUrl} autoplay={site.liveAutoplay} />
            </div>
          </section>
        )}

        {/* Skills */}
        <section id="kompetenzen" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-5 sm:py-20">
          <WbSectionHead eyebrow={w.nav_skills} title={w.sec_skills} />
          <div className="grid gap-5 lg:grid-cols-3">
            {[["hw", w.sk_hw, CircuitBoard], ["emb", w.sk_emb, Cpu], ["sw", w.sk_sw, Code2]].map(([key, title, Icon]) => (
              <div key={key} className="rounded-2xl border border-[#C9D3CD] bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E1F0E8] text-[#0B5A44]"><Icon className="h-5 w-5" /></div>
                <h3 className="wb-head mt-5 text-xl font-bold">{title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills[key].map((skill) => <span key={skill} className="wb-mono rounded-md border border-[#D5DDD8] bg-[#F3F5F2] px-2.5 py-1 text-xs text-[#33423C]">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Path + Knowledge */}
        <section id="weg" className="scroll-mt-24 border-y border-[#D5DDD8] bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-5 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <WbSectionHead eyebrow={w.nav_path} title={w.sec_path} lead={w.path_lead} />
              <ol className="relative ml-3 space-y-6 border-l-2 border-[#D5DDD8] pl-7">
                {w.path.map((step, index) => (
                  <li key={step} className="relative">
                    <span className={`absolute -left-[37px] top-1 h-4 w-4 rounded-full border-[3px] border-white ${index === w.path.length - 1 ? "bg-[#A8540F]" : "bg-[#0B5A44]"} shadow-[0_0_0_1.5px_#C9D3CD]`} />
                    <p className="text-[15px] font-medium leading-6 text-[#0F1A17] sm:text-base">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-2xl border border-[#C9D3CD] bg-[#F3F5F2]">
                {(personalWay.image_1 || personalWay.image_2) && (
                  <div className={`grid ${personalWay.image_1 && personalWay.image_2 ? "grid-cols-2" : "grid-cols-1"}`}>
                    {personalWay.image_1 && <img src={personalWay.image_1} alt="Nguyen Nhan Do" loading="lazy" className="h-56 w-full object-cover sm:h-64" />}
                    {personalWay.image_2 && <img src={personalWay.image_2} alt="" loading="lazy" className="h-56 w-full object-cover sm:h-64" />}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="wb-head text-xl font-bold">{personalWay.title}</h3>
                  <div className={`prose mt-3 max-w-none text-sm leading-7 text-[#33423C] prose-p:my-3 ${pathOpen ? "" : "max-h-32 overflow-hidden"}`} style={pathOpen ? undefined : { maskImage: "linear-gradient(#000 55%, transparent)", WebkitMaskImage: "linear-gradient(#000 55%, transparent)" }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{personalWay.content}</ReactMarkdown>
                  </div>
                  <button type="button" onClick={() => setPathOpen((v) => !v)} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B5A44]">
                    {pathOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />} {w.read_more}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-[#083D2F] p-6 text-white">
                <BookOpen className="h-6 w-6 text-[#F2B279]" />
                <h3 className="wb-head mt-4 text-xl font-bold">{w.sec_know}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{w.know_text}</p>
                <button type="button" onClick={onGoKnowledge} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#083D2F] transition hover:bg-[#F2B279]">{w.know_cta} <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <section id="galerie" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-5 sm:py-20">
            <WbSectionHead eyebrow={t.gallery} title={t.projectImages} />
            <div className="rounded-3xl border border-[#C9D3CD] bg-white p-3 sm:p-4">
              <div className="grid gap-3 lg:h-[420px] lg:grid-cols-[1.85fr_1fr]">
                <button type="button" onClick={() => setGalleryLightbox({ images: galleryImages, index: selectedGalleryIndex })} className="group relative block h-[240px] w-full overflow-hidden rounded-2xl text-left sm:h-[360px] lg:h-full">
                  <img src={galleryImages[selectedGalleryIndex] || galleryImages[0]} alt={`${t.image} ${selectedGalleryIndex + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
                  <span className="wb-mono absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0F1A17]">{t.image} {selectedGalleryIndex + 1} / {galleryImages.length}</span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-[#0B5A44] px-3 py-1.5 text-xs font-semibold text-white">{t.enlarge}</span>
                </button>
                <div className="hidden min-h-0 gap-3 lg:grid lg:grid-rows-2">
                  {gallerySideImages.map(({ image, index }) => (
                    <button key={`${image}-${index}`} type="button" onClick={() => setSelectedGalleryIndex(index)} className="group relative min-h-0 overflow-hidden rounded-xl border border-[#C9D3CD]">
                      <img src={image} alt={`${t.image} ${index + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-3 overflow-x-auto border-t border-[#D5DDD8] pt-4 pb-1">
                {galleryImages.map((image, index) => (
                  <button key={`${image}-${index}`} type="button" onClick={() => setSelectedGalleryIndex(index)} className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-24 sm:w-36 ${selectedGalleryIndex === index ? "border-[#0B5A44]" : "border-transparent opacity-70 hover:opacity-100"}`}>
                    <img src={image} alt={`${t.image} ${index + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        <section id="kontakt" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-14 sm:px-5 sm:pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#0B5A44] p-6 text-white sm:p-10 lg:p-14">
            <div className="wb-grid absolute inset-0 opacity-[0.07] [filter:invert(1)]" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="wb-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#F2B279]">{w.sec_contact}</p>
                <h2 className="wb-head mt-3 text-3xl font-bold leading-tight sm:text-5xl">{t.collaborationTitle}</h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/80 sm:text-lg sm:leading-8">{t.collaborationText}</p>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">{w.contact_note}</p>
                <a href={`mailto:${email}`} className="mt-7 inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#083D2F] transition hover:bg-[#F2B279]"><Mail className="h-4 w-4" /> {w.contact_label}</a>
                <p className="wb-mono mt-3 break-all text-xs text-white/70">{email}</p>
              </div>
              <div className="grid gap-3">
                {[[Globe, t.location, t.country], [CircuitBoard, t.focus, t.focusValue], [Wrench, t.tools, t.toolsValue]].map(([Icon, label, value]) => (
                  <div key={label} className="flex items-center gap-4 rounded-xl border border-white/20 bg-white/[0.07] p-4">
                    <Icon className="h-5 w-5 shrink-0 text-[#F2B279]" />
                    <div className="min-w-0"><p className="text-xs text-white/65">{label}</p><p className="text-sm font-semibold">{value}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#C9D3CD] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[#4A5A54] sm:px-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="max-w-xl text-xs leading-5">{w.foot}</p>
            <p className="mt-2 text-xs">© {new Date().getFullYear()} {site.siteName}</p>
          </div>
          <div className="flex gap-6">
            <button type="button" onClick={onGoImpressum} className="font-medium transition hover:text-[#0B5A44]">{t.legalNotice}</button>
            <button type="button" onClick={onGoDatenschutz} className="font-medium transition hover:text-[#0B5A44]">{t.privacy}</button>
          </div>
        </div>
      </footer>

      {galleryLightbox && <Lightbox images={galleryLightbox.images} index={galleryLightbox.index} onClose={() => setGalleryLightbox(null)} />}
    </div>
  );
}


// ─────────────────────────────────────────────
// LEGAL PAGES
// ─────────────────────────────────────────────
function LegalPageLayout({ title, children, onBack, onNavigate, language, onLanguageChange }) {
  const t = getUiText(language);
  return (
    <div className="wb min-h-screen overflow-x-hidden">
      <SiteHeader
        onNavigate={onNavigate}
        currentPage="legal"
        language={language}
        onLanguageChange={onLanguageChange}
      />

      <main className="mx-auto max-w-4xl px-4 pb-20 pt-[96px] sm:px-5 sm:pt-[104px]">
        <WbBackButton onClick={onBack}>{t.back}</WbBackButton>

        <article className="rounded-3xl border border-[#C9D3CD] bg-white p-6 shadow-[0_30px_60px_-44px_rgba(11,90,68,0.45)] sm:p-10">
          <h1 className="wb-head text-3xl font-bold text-[#0F1A17] sm:text-5xl">{title}</h1>
          <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#33423C] sm:text-base [&_a]:font-semibold [&_a]:text-[#0B5A44] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:wb-head [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#0F1A17] [&_h3]:wb-head [&_h3]:font-bold [&_h3]:text-[#0F1A17]">
            {children}
          </div>
        </article>
      </main>
    </div>
  );
}

function ImpressumPage({ onBack, onNavigate, language, onLanguageChange }) {
  if (language !== "de") {
    const copy = language === "vi" ? {
      title: "Thông tin pháp lý",
      sections: [
        ["Thông tin theo § 5 DDG", "Nguyen Nhan Do\nHugo-Sinzheimerstr. 15\n60437 Frankfurt am Main\nĐức"],
        ["Liên hệ", "E-Mail: donguyennhan.de@gmail.com"],
        ["Chịu trách nhiệm về nội dung theo § 18 khoản 2 MStV", "Nguyen Nhan Do\nHugo-Sinzheimerstr. 15\n60437 Frankfurt am Main\nĐức"],
        ["Lưu ý về nội dung", "Website này là portfolio cá nhân và blog kỹ thuật. Nội dung được sử dụng để ghi lại các dự án riêng, thử nghiệm kỹ thuật, nghiên cứu, quá trình học tập và trao đổi chuyên môn. Website không cung cấp hoặc bán hàng hóa hay dịch vụ."],
        ["Trách nhiệm đối với nội dung", "Nội dung website được xây dựng cẩn thận nhất có thể. Tuy nhiên, tôi không thể đảm bảo tính chính xác, đầy đủ và cập nhật của toàn bộ nội dung."],
        ["Trách nhiệm đối với liên kết", "Website có chứa liên kết đến các website bên ngoài của bên thứ ba. Tôi không kiểm soát nội dung của các trang đó. Đơn vị vận hành từng website chịu trách nhiệm về nội dung được liên kết."],
        ["Bản quyền", "Nội dung và tác phẩm được công bố trên website tuân theo luật bản quyền Đức. Mọi hình thức sử dụng ngoài phạm vi luật bản quyền cần có sự đồng ý trước bằng văn bản của tác giả hoặc chủ sở hữu quyền."],
      ],
    } : {
      title: "Legal Notice",
      sections: [
        ["Information pursuant to § 5 DDG", "Nguyen Nhan Do\nHugo-Sinzheimerstr. 15\n60437 Frankfurt am Main\nGermany"],
        ["Contact", "E-Mail: donguyennhan.de@gmail.com"],
        ["Responsible for content pursuant to § 18 para. 2 MStV", "Nguyen Nhan Do\nHugo-Sinzheimerstr. 15\n60437 Frankfurt am Main\nGermany"],
        ["Content notice", "This website is a personal portfolio and technical blog. Its content documents private projects, technical experiments, research, continuing education and professional exchange. No goods or services are offered or sold through this website."],
        ["Liability for content", "The content of this website has been prepared with the greatest possible care. However, no guarantee can be given for its accuracy, completeness or timeliness."],
        ["Liability for links", "This website contains links to external third-party websites. I have no control over their content. The respective operators are solely responsible for the content of linked pages."],
        ["Copyright", "The content and works published on this website are subject to German copyright law. Any use beyond the limits of copyright law requires prior written consent from the respective author or rights holder."],
      ],
    };
    return <LegalPageLayout title={copy.title} onBack={onBack} onNavigate={onNavigate} language={language} onLanguageChange={onLanguageChange}>{copy.sections.map(([title, text]) => <section key={title}><p className="wb-head font-bold text-[#0F1A17]">{title}</p><p className="whitespace-pre-line">{text}</p></section>)}</LegalPageLayout>;
  }
  return (
    <LegalPageLayout
      title="Impressum"
      onBack={onBack}
      onNavigate={onNavigate}
      language={language}
      onLanguageChange={onLanguageChange}
    >
      <section>
        <p className="wb-head font-bold text-[#0F1A17]">Angaben gemäß § 5 DDG</p>
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
        <p className="wb-head font-bold text-[#0F1A17]">Kontakt</p>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:donguyennhan.de@gmail.com"
            className="text-[#0B5A44] underline hover:text-[#0B5A44]"
          >
            donguyennhan.de@gmail.com
          </a>
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">
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
        <p className="wb-head font-bold text-[#0F1A17]">Hinweis zum Inhalt</p>
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
        <p className="wb-head font-bold text-[#0F1A17]">Haftung für Inhalte</p>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
          erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
          Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">Haftung für Links</p>
        <p>
          Diese Website enthält Links zu externen Websites Dritter. Auf deren
          Inhalte habe ich keinen Einfluss. Für die Inhalte der verlinkten
          Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">Urheberrecht</p>
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

function DatenschutzPage({ onBack, onNavigate, language, onLanguageChange }) {
  if (language !== "de") {
    const sections = language === "vi" ? [
      ["1. Đơn vị chịu trách nhiệm", "Nguyen Nhan Do\nHugo-Sinzheimerstr. 15\n60437 Frankfurt am Main\nĐức\nE-Mail: donguyennhan.de@gmail.com"],
      ["2. Thông tin chung", "Website này là portfolio cá nhân và blog kỹ thuật. Website không bán hàng hóa hoặc dịch vụ, không có tài khoản người dùng, newsletter hay biểu mẫu liên hệ."],
      ["3. Hosting qua GitHub Pages", "Website được host bằng GitHub Pages, một dịch vụ của GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. Khi truy cập, GitHub có thể xử lý dữ liệu kỹ thuật như địa chỉ IP, thời gian truy cập, thông tin trình duyệt, hệ điều hành và các trang đã mở. Việc xử lý nhằm cung cấp website ổn định và an toàn theo Điều 6 khoản 1 điểm f GDPR."],
      ["4. Cookie và lưu trữ cục bộ", "Website không sử dụng cookie theo dõi, quảng cáo hoặc phân tích. localStorage chỉ được dùng để lưu cục bộ các thiết lập kỹ thuật hoặc chức năng, ví dụ lựa chọn thông báo quyền riêng tư và ngôn ngữ. Dữ liệu không được dùng cho quảng cáo hoặc chuyển cho bên thứ ba."],
      ["5. Không sử dụng công cụ phân tích", "Website không sử dụng Google Analytics, Meta Pixel, Hotjar hoặc các dịch vụ theo dõi tương tự."],
      ["6. Liên hệ qua e-mail", "Nếu bạn liên hệ qua e-mail, dữ liệu gửi kèm chỉ được xử lý để trả lời yêu cầu. Dữ liệu không được chuyển cho bên thứ ba trừ khi pháp luật yêu cầu."],
      ["7. Liên kết bên ngoài", "Website chứa liên kết đến GitHub, Google Drive và các tài nguyên kỹ thuật khác. Khi mở liên kết ngoài, bạn rời website này. Nhà cung cấp tương ứng chịu trách nhiệm về việc xử lý dữ liệu trên website của họ."],
      ["8. Quyền của bạn", "Theo GDPR, bạn có quyền được cung cấp thông tin, chỉnh sửa, xóa, hạn chế xử lý, chuyển dữ liệu và phản đối việc xử lý. Bạn có thể liên hệ qua e-mail: donguyennhan.de@gmail.com."],
      ["9. Quyền khiếu nại", "Bạn có quyền khiếu nại với cơ quan giám sát bảo vệ dữ liệu nếu cho rằng dữ liệu cá nhân của mình bị xử lý trái với GDPR. Cơ quan phụ trách: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden, Đức."],
      ["10. Cập nhật tuyên bố này", "Tuyên bố quyền riêng tư có thể được điều chỉnh khi website, các dịch vụ được sử dụng hoặc yêu cầu pháp lý thay đổi."],
    ] : [
      ["1. Controller", "Nguyen Nhan Do\nHugo-Sinzheimerstr. 15\n60437 Frankfurt am Main\nGermany\nE-Mail: donguyennhan.de@gmail.com"],
      ["2. General information", "This website is a personal portfolio and technical blog. No goods or services are offered or sold. There are no user accounts, newsletter or contact form."],
      ["3. Hosting via GitHub Pages", "This website is hosted through GitHub Pages, a service provided by GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. When visiting the website, GitHub may process technical data such as IP address, access time, browser information, operating system information and requested pages. Processing is necessary to provide the website securely and reliably under Art. 6 para. 1 lit. f GDPR."],
      ["4. Cookies and local storage", "This website does not use tracking, advertising or analytics cookies. localStorage is only used locally for technical or functional settings, such as remembering the privacy notice and selected language. This data is not used for advertising or transferred to third parties."],
      ["5. No analytics tools", "This website does not use Google Analytics, Meta Pixel, Hotjar or comparable tracking services."],
      ["6. Contact by e-mail", "If you contact me by e-mail, the transmitted data will only be processed to respond to your request. It will not be passed to third parties unless required by law."],
      ["7. External links", "This website contains links to GitHub, Google Drive and other technical resources. When opening an external link, you leave this website. The respective provider is responsible for data processing on the linked website."],
      ["8. Your rights", "Under the GDPR, you have the right to access, rectification, erasure, restriction of processing, data portability and objection. You can contact me by e-mail: donguyennhan.de@gmail.com."],
      ["9. Right to lodge a complaint", "You have the right to lodge a complaint with a data protection supervisory authority if you believe that your personal data has been processed in breach of the GDPR. Competent authority: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden, Germany."],
      ["10. Updates to this statement", "This privacy statement may be updated if the website, the services used or legal requirements change."],
    ];
    return <LegalPageLayout title={language === "vi" ? "Quyền riêng tư" : "Privacy Policy"} onBack={onBack} onNavigate={onNavigate} language={language} onLanguageChange={onLanguageChange}>{sections.map(([title, text]) => <section key={title}><p className="wb-head font-bold text-[#0F1A17]">{title}</p><p className="whitespace-pre-line">{text}</p></section>)}</LegalPageLayout>;
  }
  return (
    <LegalPageLayout
      title="Datenschutz"
      onBack={onBack}
      onNavigate={onNavigate}
      language={language}
      onLanguageChange={onLanguageChange}
    >
      <section>
        <p className="wb-head font-bold text-[#0F1A17]">1. Verantwortlicher</p>

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
            className="text-[#0B5A44] underline hover:text-[#0B5A44]"
          >
            donguyennhan.de@gmail.com
          </a>
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">2. Allgemeine Hinweise</p>

        <p>
          Diese Website ist ein persönliches Portfolio sowie ein technischer
          Blog. Es werden keine Waren oder Dienstleistungen über diese Website
          angeboten oder verkauft. Es werden keine Nutzerkonten, kein Newsletter
          und kein Kontaktformular betrieben.
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">3. Hosting über GitHub Pages</p>

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
            className="text-[#0B5A44] underline hover:text-[#0B5A44]"
          >
            GitHub Privacy Statement
          </a>
          .
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">
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
        <p className="wb-head font-bold text-[#0F1A17]">5. Keine Analyse-Tools</p>

        <p>
          Auf dieser Website werden keine Analyse-Tools wie Google Analytics,
          Meta Pixel, Hotjar oder vergleichbare Tracking-Dienste eingesetzt.
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">6. Kontaktaufnahme per E-Mail</p>

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
        <p className="wb-head font-bold text-[#0F1A17]">7. Externe Links</p>

        <p>
          Diese Website enthält Links zu externen Websites, insbesondere zu
          GitHub, Google Drive oder anderen technischen Ressourcen. Wenn Sie
          einen externen Link anklicken, verlassen Sie diese Website. Für die
          Datenverarbeitung auf den verlinkten Websites sind ausschließlich die
          jeweiligen Anbieter verantwortlich.
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">8. Ihre Rechte</p>

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
            className="text-[#0B5A44] underline hover:text-[#0B5A44]"
          >
            donguyennhan.de@gmail.com
          </a>
          .
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">
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
            className="text-[#0B5A44] underline hover:text-[#0B5A44]"
          >
            datenschutz.hessen.de
          </a>
        </p>
      </section>

      <section>
        <p className="wb-head font-bold text-[#0F1A17]">10. Aktualität dieser Erklärung</p>

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
  const isAdminRequest = new URLSearchParams(window.location.search).get("admin") === "1";
  const isMarkdownEditor = isAdminRequest;
  const [showAdminAccess, setShowAdminAccess] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => window.localStorage.getItem(ADMIN_SESSION_KEY) === "active");
  const [page, setPage] = useState("home"); // "home" | "post" | "knowledge" | "knowledge-post" | "impressum" | "datenschutz"
  const [currentPostId, setCurrentPostId] = useState(null);
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem("site-language");
    return LANGUAGES.includes(savedLanguage) ? savedLanguage : "de";
  });

  useEffect(() => {
    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language]);

  // ── Data state ──
  const localizedContentPosts = useMemo(() => getLocalizedContentPosts(language), [language]);
  const posts = useMemo(() => localizedContentPosts.filter((post) => post.content_type !== "knowledge"), [localizedContentPosts]);
  const knowledgePosts = useMemo(() => localizedContentPosts.filter((post) => post.content_type === "knowledge"), [localizedContentPosts]);
  const galleryImages = GALLERY_IMAGES.length ? GALLERY_IMAGES : DEFAULT_GALLERY_IMAGES;
  const currentPost = useMemo(() => posts.find(p => String(p.id) === String(currentPostId)) || null, [posts, currentPostId]);
  const currentKnowledgePost = useMemo(() => knowledgePosts.find(p => String(p.id) === String(currentPostId)) || null, [knowledgePosts, currentPostId]);

  const buildRouteUrl = useCallback((nextPage, postId = null) => {
    const params = new URLSearchParams();

    if (nextPage === "post" && postId) params.set("post", postId);
    else if (nextPage === "knowledge-post" && postId) params.set("knowledge", postId);
    else if (nextPage === "knowledge") params.set("page", "knowledge");
    else if (nextPage === "impressum") params.set("page", "impressum");
    else if (nextPage === "datenschutz") params.set("page", "datenschutz");

    const query = params.toString();
    return query ? `${window.location.pathname}?${query}` : window.location.pathname;
  }, []);

  const parseRouteFromLocation = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("post");
    const knowledgeId = params.get("knowledge");
    const pageParam = params.get("page");

    if (postId) return { page: "post", currentPostId: postId };
    if (knowledgeId) return { page: "knowledge-post", currentPostId: knowledgeId };
    if (pageParam === "knowledge") return { page: "knowledge", currentPostId: null };
    if (pageParam === "impressum") return { page: "impressum", currentPostId: null };
    if (pageParam === "datenschutz") return { page: "datenschutz", currentPostId: null };
    return { page: "home", currentPostId: null };
  }, []);

  useEffect(() => {
    if (isAdminRequest) return undefined;

    const route = parseRouteFromLocation();
    setPage(route.page);
    setCurrentPostId(route.currentPostId);
    window.history.replaceState({}, "", buildRouteUrl(route.page, route.currentPostId));

    const onPopState = () => {
      const nextRoute = parseRouteFromLocation();
      setPage(nextRoute.page);
      setCurrentPostId(nextRoute.currentPostId);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [buildRouteUrl, isAdminRequest, parseRouteFromLocation]);

  const setRouteState = useCallback((nextPage, postId = null, replace = false) => {
    setPage(nextPage);
    setCurrentPostId(postId);
    const nextUrl = buildRouteUrl(nextPage, postId);
    if (replace) window.history.replaceState({}, "", nextUrl);
    else window.history.pushState({}, "", nextUrl);
  }, [buildRouteUrl]);

  const getPostUrl = useCallback((id) => `?post=${encodeURIComponent(id)}`, []);
  const getKnowledgePostUrl = useCallback((id) => `?knowledge=${encodeURIComponent(id)}`, []);

  // ── Navigation ──
  const openPost = useCallback((id) => setRouteState("post", id), [setRouteState]);

  const openKnowledgePost = useCallback((id) => setRouteState("knowledge-post", id), [setRouteState]);

  const navigate = useCallback((nextPage) => setRouteState(nextPage, null), [setRouteState]);

  const goHome = useCallback(() => setRouteState("home", null), [setRouteState]);

  const goImpressum = useCallback(() => setRouteState("impressum", null), [setRouteState]);

  const goDatenschutz = useCallback(() => setRouteState("datenschutz", null), [setRouteState]);

  const openAdminAccess = useCallback(() => {
    if (isAdminAuthenticated) {
      window.location.assign(`${window.location.pathname}?admin=1`);
      return;
    }

    setShowAdminAccess(true);
  }, [isAdminAuthenticated]);

  const handleAdminAuthenticated = useCallback(() => {
    setIsAdminAuthenticated(true);
    window.location.assign(`${window.location.pathname}?admin=1`);
  }, []);

  const handleAdminLogout = useCallback(() => {
    setAdminSession(false);
    setIsAdminAuthenticated(false);
    window.location.assign(window.location.pathname);
  }, []);

  const closeAdminAccess = useCallback(() => {
    setShowAdminAccess(false);
    if (isAdminRequest) window.location.assign(window.location.pathname);
  }, [isAdminRequest]);

  if (isMarkdownEditor) {
    if (isAdminAuthenticated) return <MarkdownEditorPage onLogout={handleAdminLogout} />;
    return <AdminAccessPanel language={language} onLanguageChange={setLanguage} onAuthenticated={handleAdminAuthenticated} onBack={closeAdminAccess} />;
  }

  if (showAdminAccess) {
    return <AdminAccessPanel language={language} onLanguageChange={setLanguage} onAuthenticated={handleAdminAuthenticated} onBack={closeAdminAccess} />;
  }

  if (page === "impressum") {
  return (
    <ImpressumPage
      onBack={goHome}
      onNavigate={setPage}
      language={language}
      onLanguageChange={setLanguage}
    />
  );
}

if (page === "datenschutz") {
  return (
    <DatenschutzPage
      onBack={goHome}
      onNavigate={setPage}
      language={language}
      onLanguageChange={setLanguage}
    />
  );
}

  return (
    <>
     <CookieBanner language={language} />
      <SiteHeader onNavigate={navigate} currentPage={page} language={language} onLanguageChange={setLanguage} onAdminAccess={openAdminAccess} isAdminAuthenticated={isAdminAuthenticated} />

      {page === "post" && currentPost ? (
        <PostDetailPage post={currentPost} onBack={goHome} language={language} />
      ) : page === "knowledge-post" && currentKnowledgePost ? (
        <KnowledgeDetailPage post={currentKnowledgePost} onBack={() => navigate("knowledge")} language={language} />
      ) : page === "knowledge" ? (
        <KnowledgePage posts={knowledgePosts} onOpenPost={openKnowledgePost} getPostUrl={getKnowledgePostUrl} language={language} />
      ) : (
        <HomePage
          posts={posts}
          galleryImages={galleryImages}
          onOpenPost={openPost}
          getPostUrl={getPostUrl}
          onGoImpressum={goImpressum}
          onGoDatenschutz={goDatenschutz}
          onGoKnowledge={() => { navigate("knowledge"); window.scrollTo({ top: 0 }); }}
          language={language}
        />
      )}
    </>
  );
}

export default App;
