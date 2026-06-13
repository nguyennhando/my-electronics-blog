import CookieBanner from "./components/CookieBanner";
import { createElement, useEffect, useMemo, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { CONTENT_POSTS, GALLERY_IMAGES, HOME_CONTENTS, PERSONAL_WAY, PERSONAL_WAYS, SITE_SETTINGS, getLocalizedContentPosts, getLocalizedHomeContent, getLocalizedPersonalWay, getTranslationLanguages } from "./lib/posts";

import {
  CircuitBoard, Cpu, RadioTower, Bot, Globe, Gauge, Search, Menu, X,
  CalendarDays, ArrowRight, ShieldCheck,
  Wrench, Mail, MonitorSmartphone, Workflow, AlertTriangle, ExternalLink,
  ChevronLeft, ChevronRight, Code2, ArrowLeft, Clock, Download, FileText, Image as ImageIcon, Pencil, Save,
  BookOpen, Library, FlaskConical, GraduationCap, ChevronUp, ChevronDown,
  LogIn, LogOut, LockKeyhole, KeyRound,
} from "lucide-react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const SLIDE_INTERVAL = 5000;
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
  },
};
const getUiText = (language) => {
  const uiText = UI_TEXT[language] || UI_TEXT.de;
  const homeContent = getLocalizedHomeContent(language);

  if (!homeContent) return uiText;

  return {
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

const textToBase64 = (text) => {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary);
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
];

const createHomeContentFile = (homeContent) => `---
type: home_content
language: ${singleLine(homeContent.language || "de")}
${HOME_CONTENT_FIELDS.map(([key]) => `${key}: ${singleLine(homeContent[key])}`).join("\n")}
---
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
const FEATURES = {
  de: [
    { icon: Cpu, title: "Elektronik & Embedded Systems", text: "Eigene Lernprojekte rund um Mikrocontroller, Sensorik und hardwarenahe Entwicklung zur praktischen Erweiterung meines technischen Wissens." },
    { icon: Workflow, title: "Automatisierung & Steuerung", text: "Praktische Übungen und kleinere Projekte, um industrielle Abläufe, Steuerungstechnik und technische Prozesse besser zu verstehen." },
    { icon: ShieldCheck, title: "Technisches Lernen", text: "Dokumentation meines Lernwegs, technischer Erfahrungen und neuer Themen, mit denen ich mich kontinuierlich beschäftige." },
    { icon: MonitorSmartphone, title: "Eigene Entwicklung", text: "Diese Website dient als persönliche Plattform, um Projekte, Ideen und technische Fortschritte übersichtlich festzuhalten." },
  ],
  en: [
    { icon: Cpu, title: "Electronics & Embedded Systems", text: "Personal learning projects involving microcontrollers, sensors and hardware-oriented development to expand my technical knowledge through practice." },
    { icon: Workflow, title: "Automation & Control", text: "Practical exercises and smaller projects to better understand industrial workflows, control technology and technical processes." },
    { icon: ShieldCheck, title: "Technical Learning", text: "Documentation of my learning journey, technical experience and new topics that I continuously explore." },
    { icon: MonitorSmartphone, title: "Personal Development", text: "This website is my personal platform for documenting projects, ideas and technical progress in a clear format." },
  ],
  vi: [
    { icon: Cpu, title: "Điện tử & Hệ thống nhúng", text: "Các dự án học tập cá nhân về vi điều khiển, cảm biến và phát triển gần phần cứng nhằm mở rộng kiến thức kỹ thuật qua thực hành." },
    { icon: Workflow, title: "Tự động hóa & Điều khiển", text: "Các bài thực hành và dự án nhỏ để hiểu rõ hơn quy trình công nghiệp, kỹ thuật điều khiển và các quá trình kỹ thuật." },
    { icon: ShieldCheck, title: "Học tập kỹ thuật", text: "Ghi lại hành trình học tập, kinh nghiệm kỹ thuật và những chủ đề mới mà tôi liên tục tìm hiểu." },
    { icon: MonitorSmartphone, title: "Phát triển cá nhân", text: "Website này là nền tảng cá nhân để lưu lại dự án, ý tưởng và tiến bộ kỹ thuật một cách rõ ràng." },
  ],
};

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

const FEATURE_ICONS = [Cpu, Workflow, ShieldCheck, MonitorSmartphone];

const getFeatures = (language) => {
  const homeContent = getLocalizedHomeContent(language);

  if (!homeContent) return FEATURES[language] || FEATURES.de;

  return FEATURE_ICONS.map((icon, index) => ({
    icon,
    title: homeContent[`feature_${index + 1}_title`],
    text: homeContent[`feature_${index + 1}_text`],
  }));
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

function AdminPasswordModal({ onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [message, setMessage] = useState("");

  const changePassword = async (event) => {
    event.preventDefault();
    const config = readAdminConfig();
    if (!config) {
      setMessage("Chua co cau hinh admin.");
      return;
    }
    if (newPassword.length < 8) {
      setMessage("Mat khau moi can it nhat 8 ky tu.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("Mat khau xac nhan khong khop.");
      return;
    }

    const currentHash = await hashAdminSecret(currentPassword, config.salt);
    if (currentHash !== config.passwordHash) {
      setMessage("Mat khau hien tai khong dung.");
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
    setMessage("Da doi mat khau. Hay luu ma khoi phuc moi.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <form onSubmit={changePassword} className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#07111f] p-6 text-white shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-cyan-300">Admin</p>
            <h2 className="mt-1 text-xl font-black">Doi mat khau</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-xl border border-white/10 p-2 text-zinc-300 hover:bg-white/10"><X className="h-4 w-4" /></button>
        </div>
        <div className="mt-5 grid gap-4">
          <input type="password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} placeholder="Mat khau hien tai" className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" />
          <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="Mat khau moi" className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" />
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Nhap lai mat khau moi" className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 focus:ring-4" />
          {recoveryCode && <div className="rounded-xl border border-emerald-300/25 bg-emerald-300/10 p-3 font-mono text-sm font-bold text-emerald-100">{recoveryCode}</div>}
          {message && <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">{message}</p>}
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-black text-slate-950 transition hover:bg-white">
            <Save className="h-4 w-4" /> Luu mat khau moi
          </button>
        </div>
      </form>
    </div>
  );
}

function SiteHeader({ onNavigate, currentPage, language = "de", onLanguageChange = () => {}, onAdminAccess = null, isAdminAuthenticated = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = getUiText(language);

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
            <p className="text-[10px] leading-tight text-zinc-400 sm:text-xs">{t.tagline}</p>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {[["blog", "Blog"], ["projekte", t.gallery], ["kontakt", t.contact]].map(([id, label]) => (
            <button key={id} type="button" onClick={() => scrollTo(id)} className="text-sm text-zinc-300 transition hover:text-cyan-300">{label}</button>
          ))}
          <button type="button" onClick={goKnowledge} className="inline-flex items-center gap-2 rounded-full border border-slate-300/30 bg-slate-300/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-slate-200/60 hover:bg-slate-300/20">
            <BookOpen className="h-4 w-4" /> {t.knowledge}
          </button>
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
            {LANGUAGES.map((item) => <button key={item} type="button" onClick={() => onLanguageChange(item)} className={`rounded-full px-2 py-1 text-[11px] font-black uppercase transition ${language === item ? "bg-cyan-400 text-black" : "text-zinc-400 hover:text-white"}`}>{item}</button>)}
          </div>
          {onAdminAccess && (
            <button type="button" onClick={() => { setMenuOpen(false); onAdminAccess(); }} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20">
              <LogIn className="h-4 w-4" /> {isAdminAuthenticated ? "Admin" : "Login"}
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
            {[["blog", "Blog"], ["projekte", t.projects], ["kontakt", t.contact]].map(([id, label]) => (
              <button key={id} type="button" onClick={() => scrollTo(id)} className="rounded-xl px-3 py-2 text-left text-zinc-200 hover:bg-white/10 hover:text-cyan-300">{label}</button>
            ))}
            <button type="button" onClick={goKnowledge} className="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-300/30 bg-slate-300/10 px-3 py-2 text-left font-bold text-slate-200">
              <BookOpen className="h-4 w-4" /> {t.knowledge}
            </button>
            {onAdminAccess && (
              <button type="button" onClick={() => { setMenuOpen(false); onAdminAccess(); }} className="mt-2 inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-left font-bold text-cyan-100">
                <LogIn className="h-4 w-4" /> {isAdminAuthenticated ? "Admin" : "Login"}
              </button>
            )}
            <div className="mt-2 flex w-fit rounded-xl border border-white/10 bg-white/5 p-1">
              {LANGUAGES.map((item) => <button key={item} type="button" onClick={() => onLanguageChange(item)} className={`rounded-lg px-3 py-1.5 text-xs font-black uppercase transition ${language === item ? "bg-cyan-400 text-black" : "text-zinc-400"}`}>{item}</button>)}
            </div>
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

function HeroSlideshow({ slides, onDiscover, onOpenPost, language }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const t = getUiText(language);

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
          <span className="text-sm font-medium text-cyan-300">{t.heroBadge}</span>
        </div>
        <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{t.heroTitle}</h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-9">{t.heroText}</p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <button type="button" onClick={onDiscover} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 text-sm font-bold text-black shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300 sm:w-auto sm:px-7 sm:py-4 sm:text-base">
            {t.discover} <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
          <a href="https://drive.google.com/drive/folders/1y6MZUhoZJCIou-SL9BHbkA-CjpXxKGz5?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex min-w-0 items-center justify-center gap-2 rounded-2xl border border-zinc-600/40 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 px-3 py-4 text-center text-sm font-bold text-zinc-100 shadow-xl shadow-black/40 transition hover:border-zinc-400/50 sm:gap-3 sm:px-6 sm:text-base">
            <ExternalLink className="h-5 w-5" /> {t.docs}
          </a>
          <a href="https://github.com/nguyennhando?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex min-w-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-3 py-4 text-center text-sm font-bold text-black shadow-xl shadow-orange-500/30 transition hover:from-orange-400 hover:to-amber-300 sm:gap-3 sm:px-6 sm:text-base">
            <Code2 className="h-5 w-5" /> {t.sourceCode}
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
                    <span className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black text-black shadow-lg">{getCategoryLabel(slide.category, language)}</span>
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
                    <motion.div variants={textItemVariants} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">{t.openProject} <ArrowRight className="h-4 w-4" /></motion.div>
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
function PostDetailPage({ post, onBack, language }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const allImages = [post.image_url, ...normalizeImageList(post.image_gallery)];
  const t = getUiText(language);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [post.id]);

  return (
    <div className="min-h-screen text-white"
  style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }}>
      <Background />
      <main className="mx-auto max-w-5xl px-4 pt-[110px] pb-20 sm:px-5">
        {/* Back Button */}
        <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} type="button" onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-cyan-300">
          <ArrowLeft className="h-4 w-4" /> {t.backBlog}
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
                <span className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black text-black">{getCategoryLabel(post.category, language)}</span>
                <span className={`rounded-full border px-3 py-1.5 text-xs font-bold ${getStatusClasses(post.project_status)}`}>{getStatusLabel(post.project_status, language)}</span>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              {post.is_translation_fallback && (
                <p className="mb-5 rounded-xl border border-yellow-400/25 bg-yellow-400/10 px-4 py-3 text-sm leading-6 text-yellow-100">{t.translationFallback}</p>
              )}
              {/* Meta */}
              <div className="mb-5 flex flex-wrap gap-3 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{formatDate(post.created_at, language)}</span>
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
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-300">{t.projectImages}</p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {normalizeImageList(post.image_gallery).map((url, i) => (
                      <img key={url} src={url} alt={`${t.image} ${i + 1}`} onClick={() => setLightboxIndex(i + 1)}
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
                    {t.openProject} <ExternalLink className="h-5 w-5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-zinc-400">
                    {isIdea(post) ? t.conceptProject : t.noProjectLink}
                  </span>
                )}
                <button type="button" onClick={onBack}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-bold text-zinc-200 transition hover:bg-white/10">
                  <ArrowLeft className="h-5 w-5" /> {t.backBlog}
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
              <Library className="h-4 w-4" /> {t.knowledgeLibrary}
            </div>
            <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">{t.knowledgeTitle}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">{t.knowledgeIntro}</p>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-300/20 bg-slate-300/[0.07] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-300/25 bg-slate-300/10 text-slate-200">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-black text-slate-100">{t.knowledgeNotice}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-300">
                {t.knowledgeNoticeParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-[#07111f]/90 p-4 sm:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t.knowledgeSearch} className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-sm outline-none ring-slate-300/30 placeholder:text-zinc-500 focus:ring-4" />
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-white/10 bg-[#050816] px-5 py-3 text-sm outline-none ring-slate-300/30 focus:ring-4">
            <option value="__all__">{t.allTopics}</option>
            {categories.map((item) => <option key={item} value={item}>{getCategoryLabel(item, language)}</option>)}
          </select>
        </section>

        {!featuredPost ? (
          <section className="mt-8 rounded-2xl border border-dashed border-slate-300/30 bg-slate-300/5 px-5 py-16 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-slate-300" />
            <h2 className="mt-4 text-xl font-black">{t.noKnowledge}</h2>
            <p className="mt-2 text-sm text-zinc-400">{t.noKnowledgeText}</p>
          </section>
        ) : (
          <>
            <section className="mt-8">
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-slate-300">{t.selectedPost}</p>
              <a href={getPostUrl(featuredPost.id)} onClick={(event) => {
                if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                  event.preventDefault();
                  onOpenPost(featuredPost.id);
                }
              }} className="group grid w-full overflow-hidden rounded-[2rem] border border-slate-300/25 bg-[#0b1023]/95 text-left transition hover:border-slate-200/60 lg:grid-cols-[0.42fr_0.58fr]">
                <div className="h-56 overflow-hidden bg-slate-950/30 lg:h-auto">
                  {featuredPost.image_url ? <img src={featuredPost.image_url} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><FlaskConical className="h-14 w-14 text-slate-300/60" /></div>}
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span className="rounded-full bg-slate-200 px-3 py-1 font-black text-slate-950">{getCategoryLabel(featuredPost.category, language)}</span>
                    {featuredPost.is_translation_fallback && <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 font-bold text-yellow-200">{t.translationFallbackShort}</span>}
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featuredPost.read_time || "5 Min."}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">{featuredPost.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400 sm:text-base">{featuredPost.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-200">{t.readPost} <ArrowRight className="h-4 w-4" /></span>
                </div>
              </a>
            </section>

            {listPosts.length > 0 && <section className="mt-10">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div><p className="text-xs font-black uppercase tracking-widest text-slate-300">{t.archive}</p><h2 className="mt-2 text-2xl font-black">{t.morePosts}</h2></div>
                <span className="text-sm text-zinc-500">{filteredPosts.length} {t.posts}</span>
              </div>
              <div className="grid gap-3">
                {paginatedPosts.map((post) => (
                  <a key={post.id} href={getPostUrl(post.id)} onClick={(event) => {
                    if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                      event.preventDefault();
                      onOpenPost(post.id);
                    }
                  }} className="group grid gap-4 rounded-2xl border border-white/10 bg-[#07111f]/90 p-4 text-left transition hover:border-slate-300/50 sm:grid-cols-[140px_1fr_auto] sm:items-center">
                    <div className="hidden h-24 overflow-hidden rounded-xl bg-slate-950/30 sm:block">
                      {post.image_url ? <img src={post.image_url} alt="" className="h-full w-full object-cover transition group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><GraduationCap className="h-8 w-8 text-slate-300/60" /></div>}
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 text-xs text-zinc-500"><span className="font-bold text-slate-300">{getCategoryLabel(post.category, language)}</span><span>{formatDate(post.created_at, language)}</span><span>{post.read_time || "5 Min."}</span></div>
                      {post.is_translation_fallback && <span className="mt-2 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-2.5 py-1 text-xs font-bold text-yellow-200">{t.translationFallbackShort}</span>}
                      <h3 className="mt-2 text-lg font-black leading-tight group-hover:text-slate-200">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">{post.excerpt}</p>
                    </div>
                    <ArrowRight className="hidden h-5 w-5 text-slate-300 sm:block" />
                  </a>
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

function KnowledgeDetailPage({ post, onBack, language }) {
  const t = getUiText(language);
  useEffect(() => { window.scrollTo({ top: 0 }); }, [post.id]);
  return (
    <div className="min-h-screen text-white">
      <Background />
      <main className="mx-auto max-w-4xl px-4 pb-20 pt-[110px] sm:px-5">
        <button type="button" onClick={onBack} className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300/25 bg-slate-300/10 px-5 py-2.5 text-sm font-bold text-slate-200 transition hover:bg-slate-300/20"><ArrowLeft className="h-4 w-4" /> {t.backKnowledge}</button>
        <article className="overflow-hidden rounded-[2rem] border border-slate-300/20 bg-[#07111f]/95 shadow-2xl shadow-slate-950/20">
          {post.image_url && <img src={post.image_url} alt={post.title} className="h-56 w-full object-cover sm:h-80" />}
          <div className="p-5 sm:p-8 lg:p-10">
            {post.is_translation_fallback && (
              <p className="mb-5 rounded-xl border border-yellow-400/25 bg-yellow-400/10 px-4 py-3 text-sm leading-6 text-yellow-100">{t.translationFallback}</p>
            )}
            <div className="flex flex-wrap gap-3 text-xs text-zinc-400">
              <span className="rounded-full bg-slate-200 px-3 py-1 font-black text-slate-950">{getCategoryLabel(post.category, language)}</span>
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.created_at, language)}</span>
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
            {post.external_link && <a href={post.external_link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-200 px-5 py-3 font-black text-slate-950 transition hover:bg-white">{t.externalSource} <ExternalLink className="h-4 w-4" /></a>}
          </div>
        </article>
      </main>
    </div>
  );
}

function MarkdownEditorPage({ onLogout = () => {} }) {
  const [form, setForm] = useState(emptyEditorForm);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);
  const [contentDirectory, setContentDirectory] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [githubToken, setGithubToken] = useState(() => window.localStorage.getItem(GITHUB_TOKEN_KEY) || "");
  const [showGithubToken, setShowGithubToken] = useState(() => !window.localStorage.getItem(GITHUB_TOKEN_KEY));
  const [showHomeContentEditor, setShowHomeContentEditor] = useState(false);
  const [homeContentForm, setHomeContentForm] = useState(() => getLocalizedHomeContent("de"));
  const [showPersonalWayEditor, setShowPersonalWayEditor] = useState(false);
  const [personalWayForm, setPersonalWayForm] = useState(PERSONAL_WAY);
  const [showSiteSettingsEditor, setShowSiteSettingsEditor] = useState(false);
  const [siteSettingsForm, setSiteSettingsForm] = useState(SITE_SETTINGS);
  const [showGalleryEditor, setShowGalleryEditor] = useState(false);
  const [galleryImagesForm, setGalleryImagesForm] = useState((GALLERY_IMAGES.length ? GALLERY_IMAGES : DEFAULT_GALLERY_IMAGES).join("\n"));
  const [showProjectOrderEditor, setShowProjectOrderEditor] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [projectOrderLanguage, setProjectOrderLanguage] = useState("de");
  const [projectOrderIds, setProjectOrderIds] = useState(() => getLocalizedContentPosts("de")
    .filter((post) => post.content_type !== "knowledge")
    .map((post) => post.translation_id));

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
      setSaveMessage("GitHub token wurde entfernt.");
      return;
    }

    window.localStorage.setItem(GITHUB_TOKEN_KEY, token);
    setShowGithubToken(false);
    setSaveMessage("GitHub token wurde lokal im Browser gespeichert.");
  };

  const getGithubErrorMessage = async (response, fallback) => {
    try {
      const data = await response.json();
      return `${fallback} (${response.status}): ${data.message || "Keine Details von GitHub."}`;
    } catch {
      return `${fallback} (${response.status}).`;
    }
  };

  const testGithubToken = async () => {
    const token = githubToken.trim() || window.localStorage.getItem(GITHUB_TOKEN_KEY);
    if (!token) {
      setShowGithubToken(true);
      setSaveMessage("Bitte zuerst einen GitHub token eintragen.");
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
        throw new Error(await getGithubErrorMessage(response, "Token-Test fehlgeschlagen"));
      }

      setSaveMessage("Token funktioniert. GitHub API ist erreichbar.");
    } catch (error) {
      setSaveMessage(
        error instanceof TypeError
          ? "GitHub API ist vom Browser blockiert oder nicht erreichbar. Bitte Chrome/Edge testen, Adblock/Tracking-Schutz pruefen, oder MD exportieren verwenden."
          : error.message
      );
    }
  };

  const saveOutputsToGitHub = async (outputs, commitMessage) => {
    const token = githubToken.trim() || window.localStorage.getItem(GITHUB_TOKEN_KEY);
    if (!token) {
      setShowGithubToken(true);
      setSaveMessage("Bitte zuerst einen GitHub token eintragen.");
      return;
    }

    try {
      for (const output of outputs) {
        const path = getGithubContentPath(output);
        const apiPath = encodeGithubPath(path);
        const fileUrl = `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${apiPath}?ref=${GITHUB_REPO_BRANCH}`;
        const headers = {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        };
        let sha = null;
        const currentFile = await fetch(fileUrl, { headers });

        if (currentFile.ok) {
          const currentData = await currentFile.json();
          sha = currentData.sha;
        } else if (currentFile.status !== 404) {
          throw new Error(await getGithubErrorMessage(currentFile, `GitHub konnte ${path} nicht lesen`));
        }

        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contents/${apiPath}`, {
          method: "PUT",
          headers: {
            ...headers,
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

      setSaveMessage(`${outputs.length} Datei(en) wurden auf GitHub gespeichert. GitHub Pages danach kurz neu laden.`);
    } catch (error) {
      setSaveMessage(
        error instanceof TypeError
          ? "GitHub API ist vom Browser blockiert oder nicht erreichbar. Bitte Chrome/Edge testen, Adblock/Tracking-Schutz pruefen, oder MD exportieren verwenden."
          : error.message || "GitHub speichern ist fehlgeschlagen."
      );
    }
  };

  const saveMarkdownToGitHub = async (output) => {
    await saveOutputsToGitHub([output], `Update ${getGithubContentPath(output)}`);
  };

  const getContentDirectory = async () => {
    if (!window.showDirectoryPicker) {
      window.alert("Direktes Speichern wird von diesem Browser nicht unterstützt. Bitte verwenden Sie MD exportieren.");
      return null;
    }

    const directory = contentDirectory || await window.showDirectoryPicker({ mode: "readwrite" });
    if (directory.name !== "content") {
      setContentDirectory(null);
      window.alert("Bitte wählen Sie genau den Ordner src/content aus, nicht einen Sprachordner wie de, en oder vi.");
      return null;
    }
    if (!contentDirectory) setContentDirectory(directory);
    return directory;
  };

  const writeMarkdownToDirectory = async (directory, output) => {
    const targetDirectory = output.directory
      ? await directory.getDirectoryHandle(output.directory, { create: true })
      : directory;
      const file = await targetDirectory.getFileHandle(output.filename, { create: true });
      const writable = await file.createWritable();
      await writable.write(output.markdown);
      await writable.close();
  };

  const saveMarkdownToDirectory = async (output) => {
    try {
      const directory = await getContentDirectory();
      if (!directory) return;
      await writeMarkdownToDirectory(directory, output);
      setSaveMessage(`${output.directory ? `${output.directory}/` : ""}${output.filename} wurde gespeichert.`);
    } catch (error) {
      if (error.name !== "AbortError") {
        window.alert("Die Datei konnte nicht gespeichert werden. Bitte verwenden Sie MD exportieren.");
      }
    }
  };

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

  const saveProjectOrderToDirectory = async () => {
    try {
      const orderByTranslationId = new Map(projectOrderIds.map((translationId, index) => [translationId, (index + 1) * 10]));
      const projectVariants = CONTENT_POSTS.filter((post) => post.content_type !== "knowledge" && orderByTranslationId.has(post.translation_id));

      const outputs = projectVariants.map((post) => ({
        filename: `${post.slug}.md`,
        directory: post.language,
        markdown: createMarkdownFile({ ...post, sort_order: orderByTranslationId.get(post.translation_id) }),
      }));

      await saveOutputsToGitHub(outputs, "Update project card order");

    } catch (error) {
      if (error.name !== "AbortError") {
        window.alert("Die Reihenfolge konnte nicht gespeichert werden.");
      }
    }
  };

  const savePostToDirectory = async () => {
    const output = getMarkdownExport();
    if (!output) return;
    await saveMarkdownToGitHub(output);
  };

  const selectHomeContentLanguage = (language) => {
    const localizedContent = HOME_CONTENTS.find((entry) => entry.language === language)
      || getLocalizedHomeContent(language);
    setHomeContentForm({ ...localizedContent, language });
  };

  const getHomeContentExport = () => ({
    filename: "home-content.md",
    directory: homeContentForm.language,
    markdown: createHomeContentFile(homeContentForm),
  });

  const saveHomeContentToDirectory = async () => {
    await saveMarkdownToGitHub(getHomeContentExport());
  };

  const exportHomeContent = () => {
    const output = getHomeContentExport();
    downloadTextFile(output.filename, output.markdown);
  };

  const selectPersonalWayLanguage = (language) => {
    const localizedPersonalWay = PERSONAL_WAYS.find((entry) => entry.language === language)
      || getLocalizedPersonalWay(language);
    setPersonalWayForm({ ...localizedPersonalWay, language });
  };

  const getPersonalWayExport = () => {
    if (!personalWayForm.title.trim() || !personalWayForm.content.trim()) {
      window.alert("Titel und Inhalt sind Pflichtfelder.");
      return null;
    }

    return {
      filename: "personal-way.md",
      directory: personalWayForm.language,
      markdown: createPersonalWayFile(personalWayForm),
    };
  };

  const savePersonalWayToDirectory = async () => {
    const output = getPersonalWayExport();
    if (!output) return;
    await saveMarkdownToGitHub(output);
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
    await saveMarkdownToGitHub(getSiteSettingsExport());
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
    await saveMarkdownToGitHub(getGallerySettingsExport());
  };

  const exportGallerySettings = () => {
    const output = getGallerySettingsExport();
    downloadTextFile(output.filename, output.markdown);
  };

  const selectPost = (sourcePath) => {
    setSelectedSlug(sourcePath);
    if (!sourcePath) {
      setForm(emptyEditorForm());
      setSlugEdited(false);
      return;
    }

    const post = CONTENT_POSTS.find((item) => item.source_path === sourcePath);
    if (!post) return;
    setForm(postToEditorForm(post));
    setSlugEdited(true);
  };

  const inputClass = "w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-white outline-none ring-cyan-400/30 placeholder:text-zinc-600 focus:ring-4";
  const labelClass = "mb-2 block text-xs font-bold uppercase text-zinc-400";
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
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button type="button" onClick={() => setShowPasswordModal(true)} className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300/10">
              <KeyRound className="h-4 w-4" /> Passwort
            </button>
            <button type="button" onClick={onLogout} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
              <LogOut className="h-4 w-4" /> Logout
            </button>
            <a href="/my-electronics-blog/" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" /> Blog
            </a>
          </div>
        </div>
      </header>
      {showPasswordModal && <AdminPasswordModal onClose={() => setShowPasswordModal(false)} />}

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="space-y-5">
          <div className="rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5">
            <button type="button" onClick={() => setShowGithubToken((current) => !current)} className="flex w-full items-center justify-between gap-3 text-left">
              <span>
                <span className="block text-xs font-bold uppercase text-sky-300">GitHub</span>
                <span className="mt-1 block font-black">Direkt auf GitHub speichern</span>
              </span>
              <Code2 className="h-5 w-5 text-sky-300" />
            </button>
            {showGithubToken && (
              <div className="mt-5 grid gap-4 border-t border-white/10 pt-5">
                <p className="text-sm leading-6 text-zinc-300">
                  Tragen Sie einen GitHub fine-grained token mit <span className="font-bold text-white">Contents: Read and write</span> fuer <span className="font-bold text-white">nguyennhando/my-electronics-blog</span> ein. Der Token wird nur lokal in diesem Browser gespeichert.
                </p>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
                  <input
                    type="password"
                    value={githubToken}
                    onChange={(event) => setGithubToken(event.target.value)}
                    className={inputClass}
                    placeholder="github_pat_..."
                  />
                  <button type="button" onClick={saveGithubToken} className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-3 text-sm font-black text-black transition hover:bg-sky-300">
                    <Save className="h-4 w-4" /> Token speichern
                  </button>
                  <button type="button" onClick={testGithubToken} className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-300/30 px-4 py-3 text-sm font-bold text-sky-100 transition hover:bg-sky-300/10">
                    <Code2 className="h-4 w-4" /> Token testen
                  </button>
                </div>
              </div>
            )}
          </div>

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
                    <Code2 className="h-4 w-4" /> Auf GitHub speichern
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
                    <li>Kopieren Sie die Bilddatei in den Ordner <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">public/images/galerie</code>.</li>
                    <li>Tragen Sie den Bildpfad ein, zum Beispiel <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">/my-electronics-blog/images/galerie/dateiname.webp</code>.</li>
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
                    <Code2 className="h-4 w-4" /> Auf GitHub speichern
                  </button>
                  <button type="button" onClick={exportGallerySettings} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
                    <Download className="h-4 w-4" /> MD exportieren
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5">
            <button type="button" onClick={() => setShowProjectOrderEditor((current) => !current)} className="flex w-full items-center justify-between gap-3 text-left">
              <span>
                <span className="block text-xs font-bold uppercase text-orange-300">Blog</span>
                <span className="mt-1 block font-black">Reihenfolge der Projektkarten bearbeiten</span>
              </span>
              <ChevronUp className="h-5 w-5 text-orange-300" />
            </button>

            {showProjectOrderEditor && (
              <div className="mt-5 grid gap-4 border-t border-white/10 pt-5">
                <div className="rounded-xl border border-orange-400/20 bg-orange-400/[0.07] p-4 text-sm leading-6 text-zinc-300">
                  <p className="font-black text-orange-200">Projektkarten visuell sortieren</p>
                  <p className="mt-2">Verschieben Sie Karten mit den Pfeilen nach oben oder unten. Beim Speichern wird die Reihenfolge automatisch für alle Sprachversionen übernommen.</p>
                  <p className="mt-2 text-xs text-zinc-400">Mit „Reihenfolge speichern“ wird die neue Sortierung direkt auf GitHub gespeichert.</p>
                </div>
                <div>
                  <label className={labelClass}>Vorschau-Sprache</label>
                  <select className={inputClass} value={projectOrderLanguage} onChange={(e) => setProjectOrderLanguage(e.target.value)}>
                    <option value="de">DE - Deutsch</option>
                    <option value="en">EN - English</option>
                    <option value="vi">VI - Tiếng Việt</option>
                  </select>
                </div>
                <div className="grid gap-3">
                  {projectOrderPosts.map((post, index) => (
                    <div key={post.translation_id} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#07111f]/95 p-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-sm font-black text-orange-200">{index + 1}</span>
                      {post.image_url && <img src={post.image_url} alt="" className="h-14 w-20 shrink-0 rounded-lg object-cover" />}
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-black text-white">{post.title}</p>
                        <p className="mt-1 text-xs text-zinc-500">{getCategoryLabel(post.category, projectOrderLanguage)} · {getStatusLabel(post.project_status, projectOrderLanguage)}</p>
                      </div>
                      <div className="flex shrink-0 flex-col gap-1">
                        <button type="button" disabled={index === 0} onClick={() => moveProjectOrder(post.translation_id, -1)} className="rounded-lg border border-white/10 p-1.5 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30" aria-label="Nach oben verschieben">
                          <ChevronUp className="h-4 w-4" />
                        </button>
                        <button type="button" disabled={index === projectOrderPosts.length - 1} onClick={() => moveProjectOrder(post.translation_id, 1)} className="rounded-lg border border-white/10 p-1.5 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30" aria-label="Nach unten verschieben">
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={saveProjectOrderToDirectory} className="inline-flex w-fit items-center gap-2 rounded-xl bg-orange-400 px-4 py-2 text-sm font-black text-black transition hover:bg-orange-300">
                  <Code2 className="h-4 w-4" /> Reihenfolge speichern
                </button>
                {saveMessage && <p className="text-xs font-bold text-emerald-300">{saveMessage}</p>}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5">
            <button type="button" onClick={() => setShowHomeContentEditor((current) => !current)} className="flex w-full items-center justify-between gap-3 text-left">
              <span>
                <span className="block text-xs font-bold uppercase text-blue-300">Startseite</span>
                <span className="mt-1 block font-black">Startseiten-Inhalte bearbeiten</span>
              </span>
              <Pencil className="h-5 w-5 text-blue-300" />
            </button>

            {showHomeContentEditor && (
              <div className="mt-5 grid gap-4 border-t border-white/10 pt-5">
                <div className="rounded-xl border border-blue-400/20 bg-blue-400/[0.07] p-4 text-sm leading-6 text-zinc-300">
                  <p className="font-black text-blue-200">Speicherort der Markdown-Datei</p>
                  <p className="mt-2">Speichern Sie die Datei abhängig von der ausgewählten Sprache unter:</p>
                  <ul className="mt-2 ml-5 list-disc space-y-1">
                    <li>Deutsch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-blue-100">src/content/de/home-content.md</code></li>
                    <li>Englisch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-blue-100">src/content/en/home-content.md</code></li>
                    <li>Vietnamesisch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-blue-100">src/content/vi/home-content.md</code></li>
                  </ul>
                  <p className="mt-3 text-xs text-zinc-400">Mit „Auf GitHub speichern“ wird diese Datei direkt in den passenden Sprachordner unter <code className="rounded bg-black/30 px-1.5 py-0.5 text-blue-100">src/content</code> geschrieben.</p>
                  <p className="mt-2 text-xs text-zinc-400">Nach dem Speichern lädt GitHub Pages die Änderung nach kurzer Zeit neu.</p>
                </div>
                <div>
                  <label className={labelClass}>Sprache</label>
                  <select className={inputClass} value={homeContentForm.language} onChange={(e) => selectHomeContentLanguage(e.target.value)}>
                    <option value="de">DE - Deutsch</option>
                    <option value="en">EN - English</option>
                    <option value="vi">VI - Tiếng Việt</option>
                  </select>
                </div>
                {HOME_CONTENT_FIELDS.map(([key, label]) => (
                  <div key={key}>
                    <label className={labelClass}>{label}</label>
                    <textarea className={`${inputClass} min-h-[88px] leading-6`} value={homeContentForm[key] || ""} onChange={(e) => setHomeContentForm((current) => ({ ...current, [key]: e.target.value }))} />
                  </div>
                ))}
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={saveHomeContentToDirectory} className="inline-flex items-center gap-2 rounded-xl bg-blue-400 px-4 py-2 text-sm font-black text-black transition hover:bg-blue-300">
                    <Code2 className="h-4 w-4" /> Auf GitHub speichern
                  </button>
                  <button type="button" onClick={exportHomeContent} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:bg-white/10">
                    <Download className="h-4 w-4" /> MD exportieren
                  </button>
                </div>
                {saveMessage && <p className="text-xs font-bold text-emerald-300">{saveMessage}</p>}
                <div className="border-t border-white/10 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase text-zinc-500">Live-Vorschau</p>
                  <div className="space-y-4 rounded-xl border border-white/10 bg-[#07111f]/95 p-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">{homeContentForm.hero_badge}</p>
                      <h2 className="mt-2 text-2xl font-black leading-tight">{homeContentForm.hero_title}</h2>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{homeContentForm.hero_text}</p>
                    </div>
                    <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3">
                      <h3 className="font-black text-yellow-200">{homeContentForm.transparency_title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{homeContentForm.transparency_text}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-yellow-200">{homeContentForm.transparency_strong}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {FEATURE_ICONS.map((Icon, index) => (
                        <div key={index} className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3">
                          <Icon className="h-5 w-5 text-cyan-300" />
                          <h3 className="mt-2 font-black">{homeContentForm[`feature_${index + 1}_title`]}</h3>
                          <p className="mt-1 text-sm leading-6 text-zinc-400">{homeContentForm[`feature_${index + 1}_text`]}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-3 text-sm leading-6 text-zinc-300">
                      <p>{homeContentForm.warning_one}</p>
                      <p className="mt-2">{homeContentForm.warning_two}</p>
                    </div>
                    <div className="rounded-xl bg-cyan-300 p-3 text-black">
                      <h3 className="font-black">{homeContentForm.collaboration_title}</h3>
                      <p className="mt-1 text-sm leading-6 text-black/75">{homeContentForm.collaboration_text}</p>
                    </div>
                  </div>
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
                <div className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/[0.07] p-4 text-sm leading-6 text-zinc-300">
                  <p className="font-black text-fuchsia-200">Speicherort der Markdown-Datei</p>
                  <p className="mt-2">Speichern Sie die Datei abhängig von der ausgewählten Sprache unter:</p>
                  <ul className="mt-2 ml-5 list-disc space-y-1">
                    <li>Deutsch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-fuchsia-100">src/content/de/personal-way.md</code></li>
                    <li>Englisch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-fuchsia-100">src/content/en/personal-way.md</code></li>
                    <li>Vietnamesisch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-fuchsia-100">src/content/vi/personal-way.md</code></li>
                  </ul>
                  <p className="mt-3 text-xs text-zinc-400">Mit „Auf GitHub speichern“ wird diese Datei direkt in den passenden Sprachordner unter <code className="rounded bg-black/30 px-1.5 py-0.5 text-fuchsia-100">src/content</code> geschrieben.</p>
                </div>
                <div>
                  <label className={labelClass}>Sprache</label>
                  <select className={inputClass} value={personalWayForm.language || "de"} onChange={(e) => selectPersonalWayLanguage(e.target.value)}>
                    <option value="de">DE - Deutsch</option>
                    <option value="en">EN - English</option>
                    <option value="vi">VI - Tiếng Việt</option>
                  </select>
                </div>
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
                    <Code2 className="h-4 w-4" /> Auf GitHub speichern
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
              {CONTENT_POSTS.map((post) => <option key={post.source_path} value={post.source_path}>[{post.language.toUpperCase()}] {post.content_type === "knowledge" ? "[Wissen]" : "[Projekt]"} {post.title}</option>)}
            </select>
          </div>

          <div className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 sm:grid-cols-2">
            <div className="sm:col-span-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] p-4 text-sm leading-6 text-zinc-300">
              <p className="font-black text-cyan-200">Mehrsprachige Beiträge speichern</p>
              <p className="mt-2">Verwenden Sie für alle Sprachversionen desselben Beitrags dieselbe <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">translation_id</code>. Wählen Sie beim Speichern genau den Ordner <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">src/content</code>, nicht einen Sprachordner. Der Editor legt die Datei automatisch unter <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">de</code>, <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">en</code> oder <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">vi</code> ab.</p>
              <p className="mt-3 font-bold text-cyan-100">Speicherort abhängig von Sprache und Slug:</p>
              <ul className="mt-2 ml-5 list-disc space-y-1">
                <li>Deutsch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">src/content/de/slug.md</code></li>
                <li>Englisch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">src/content/en/slug.md</code></li>
                <li>Vietnamesisch: <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">src/content/vi/slug.md</code></li>
              </ul>
              <p className="mt-3 text-xs text-zinc-400">Bei „MD exportieren“ wird nur die Datei heruntergeladen. Verschieben Sie sie anschließend manuell in den passenden Sprachordner.</p>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Inhaltstyp</label>
              <select className={inputClass} value={form.content_type} onChange={(e) => update("content_type", e.target.value)}>
                <option value="project">Projektbeitrag für den Blog</option>
                <option value="knowledge">Wissen, Lernmaterial oder Forschung</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Sprache</label>
              <select className={inputClass} value={form.language} onChange={(e) => update("language", e.target.value)}>
                <option value="de">DE - Deutsch</option>
                <option value="en">EN - English</option>
                <option value="vi">VI - Tiếng Việt</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Translation ID</label>
              <input className={inputClass} value={form.translation_id} onChange={(e) => update("translation_id", slugify(e.target.value))} placeholder="gemeinsame-beitrags-id" />
              <p className="mt-2 text-xs leading-5 text-zinc-500">Vorhanden: {translationLanguages.length ? translationLanguages.map((item) => item.toUpperCase()).join(", ") : "noch keine Sprachversion"}</p>
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
                  <Code2 className="h-4 w-4" /> Auf GitHub speichern
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
                innerClassName="flex flex-1 flex-col overflow-hidden rounded-[1.35rem] sm:rounded-[1.95rem] bg-[#07111f]/95 backdrop-blur-xl"
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
function HomePage({ posts, galleryImages, onOpenPost, getPostUrl, onGoImpressum, onGoDatenschutz, language }) {
  const POSTS_PER_PAGE = 15;
  const t = getUiText(language);
  const personalWay = getPersonalWay(language);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("__all__");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightbox, setLightbox] = useState(null); // { images, index }
  const [galleryLightbox, setGalleryLightbox] = useState(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const gallerySideImages = galleryImages.map((image, index) => ({ image, index })).filter(({ index }) => index !== selectedGalleryIndex).slice(0, 2);

  const heroSlides = useMemo(() =>
    [...posts].sort((a, b) => {
      const oA = isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
      const oB = isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
      return oA !== oB ? oA - oB : new Date(b.created_at || 0) - new Date(a.created_at || 0);
    }).slice(0, 6).map(p => ({ id: p.id, image: p.image_url, category: p.category, readTime: p.read_time || "5 Min.", title: p.title, text: p.excerpt, tags: Array.isArray(p.tags) ? p.tags : [] })),
    [posts]
  );

  const categories = useMemo(() => [...new Set(posts.map(p => p.category))], [posts]);

  const filteredPosts = useMemo(() => {
    const q = search.toLowerCase();
    return posts.filter(p => {
      const tags = Array.isArray(p.tags) ? p.tags : [];
      return (category === "__all__" || p.category === category)
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
        <HeroSlideshow slides={heroSlides} onDiscover={() => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" })} onOpenPost={onOpenPost} language={language} />

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
                    <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-yellow-300">{t.transparency}</span>
                    <h2 className="text-2xl font-black text-white sm:text-3xl">{t.transparencyTitle}</h2>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">
                    {t.transparencyText}
                    <span className="mt-4 block font-semibold text-yellow-200">{t.transparencyStrong}</span>
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
                <img src={personalWay.image_1} alt="Nguyen Nhan Do" className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]" />
                <img src={personalWay.image_2} alt="Elektronik" className="h-56 w-full rounded-[1.5rem] object-cover sm:h-72 lg:h-full lg:min-h-[260px]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">{t.personalWay}</p>
                <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">{personalWay.title}</h2>
                <div className="prose prose-invert mt-5 max-w-none text-sm leading-7 text-zinc-300 prose-p:my-4 prose-p:text-zinc-300 sm:text-base sm:leading-8">
                  <ReactMarkdown>{personalWay.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </GradientBorder>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-10">
          <div className="grid gap-3 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {getFeatures(language).map(f => {
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
                    <AlertTriangle className="h-4 w-4" /> {t.importantNotice}
                  </div>
                  <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">{t.importantTitle}</h2>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-zinc-300 sm:text-base sm:leading-6">
                    <p><span className="font-bold text-yellow-300">{t.importantNotice}:</span> {t.warningOne}</p>
                    <p>{t.warningTwo}</p>
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
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">{t.technicalBlog}</p>
              <h2 className="mt-2 text-[1.75rem] font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">{t.blogTitle}</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input value={search} onChange={e => { setSearch(e.target.value); setCurrentPage(1); }} placeholder={t.search} className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-3 pl-11 pr-4 text-sm outline-none ring-cyan-400/30 placeholder:text-zinc-500 focus:ring-4 sm:w-72" />
              </div>
              <select value={category} onChange={e => { setCategory(e.target.value); setCurrentPage(1); }} className="rounded-2xl border border-white/10 bg-[#050816] px-5 py-3 outline-none ring-cyan-400/30 focus:ring-4">
                <option value="__all__">{t.all}</option>
                {categories.map(c => <option key={c} value={c}>{getCategoryLabel(c, language)}</option>)}
              </select>
            </div>
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-zinc-500">{t.noPosts}</div>
          )}

          <div className="grid gap-4 min-[620px]:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {paginatedPosts.map(post => {
              const Icon = getCategoryIcon(post.category);
              const idea = isIdea(post);
              return (
                <motion.div whileHover={idea ? undefined : { y: -5 }} key={post.id} className="group flex min-[620px]:h-full">
                  <GradientBorder
                    gradient={idea ? "from-zinc-600 via-zinc-500 to-zinc-600" : "from-cyan-400 via-cyan-500 to-cyan-400"}
                    rounded="rounded-[1.4rem] sm:rounded-[2rem]"
                    className="flex flex-1"
                    innerClassName="flex flex-1 flex-col overflow-hidden rounded-[1.35rem] bg-[#07111f]/95 backdrop-blur-xl sm:rounded-[1.95rem]"
                  >
                    <img src={post.image_url} alt={post.title}
                      onClick={() => setLightbox({ images: [post.image_url, ...normalizeImageList(post.image_gallery)], index: 0 })}
                      className={`h-44 w-full shrink-0 cursor-zoom-in object-cover transition duration-300 hover:brightness-110 sm:h-56 ${idea ? "grayscale opacity-70" : ""}`} />
                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                        <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1 font-black text-black"><Icon className="h-3.5 w-3.5" /> {getCategoryLabel(post.category, language)}</span>
                        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-bold ${getStatusClasses(post.project_status)}`}>{getStatusLabel(post.project_status, language)}</span>
                        {post.is_translation_fallback && <span className="inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 font-bold text-yellow-200">{t.translationFallbackShort}</span>}
                        <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {formatDate(post.created_at, language)}</span>
                      </div>
                      <h3 className="text-lg font-black leading-tight sm:text-2xl">{post.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">{post.excerpt}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {(post.tags || []).map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">#{tag}</span>)}
                      </div>
                      <div className="flex gap-2 pt-6 sm:mt-auto sm:gap-3">
                        <a href={getPostUrl(post.id)} onClick={(event) => {
                          if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                            event.preventDefault();
                            onOpenPost(post.id);
                          }
                        }} className="flex-1 rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-cyan-300 sm:px-5 sm:text-base">
                          {t.readPost}
                        </a>
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
      {t.page} {currentPage} {t.of} {totalPages}
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
        {t.previous}
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
        {t.next}
      </button>
    </div>
  </div>
)}
        </section>

        {/* ── Gallery ── */}
        <section id="projekte" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">{t.gallery}</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">{t.projectImages}</h2>
            </div>
          </div>

          {galleryImages.length > 0 && (
            <div className="rounded-[2rem] border border-white/10 bg-[#07111f]/90 p-3 shadow-2xl shadow-cyan-950/20 sm:p-4">
              <div className="grid gap-3 lg:h-[430px] lg:grid-cols-[1.85fr_1fr]">
                <button type="button" onClick={() => setGalleryLightbox({ images: galleryImages, index: selectedGalleryIndex })} className="group relative block h-[260px] w-full overflow-hidden rounded-[1.55rem] text-left sm:h-[380px] lg:h-full">
                  <img src={galleryImages[selectedGalleryIndex] || galleryImages[0]} alt="Galeriebild" className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110" />
                  <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-5">
                    <span className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-black">{t.gallery}</span>
                    <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-bold text-zinc-200 backdrop-blur">
                      {t.image} {selectedGalleryIndex + 1} / {galleryImages.length}
                    </span>
                  </div>
                  <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-bold text-zinc-200 backdrop-blur sm:bottom-5 sm:right-5">{t.enlarge}</span>
                </button>

                <div className="hidden min-h-0 gap-3 lg:grid lg:grid-rows-2">
                  {gallerySideImages.map(({ image, index }) => (
                    <button key={`${image}-${index}`} type="button" onClick={() => setSelectedGalleryIndex(index)} className="group relative min-h-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30 transition hover:border-cyan-400/50">
                      <img src={image} alt={`Galeriebild ${index + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110" />
                      <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-xs font-bold text-zinc-200 backdrop-blur">{t.image} {index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex gap-3 overflow-x-auto border-t border-white/10 pt-4 pb-1">
                {galleryImages.map((image, index) => (
                  <button key={`${image}-${index}`} type="button" onClick={() => setSelectedGalleryIndex(index)} className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-24 sm:w-36 ${selectedGalleryIndex === index ? "border-cyan-300 shadow-lg shadow-cyan-500/20" : "border-white/10 opacity-70 hover:border-cyan-400/50 hover:opacity-100"}`}>
                    <img src={image} alt={`Galeriebild ${index + 1}`} className="h-full w-full object-cover" />
                    <span className="absolute bottom-1 right-1 rounded bg-black/65 px-1.5 py-0.5 text-[10px] font-bold text-zinc-200">{index + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── Contact ── */}
        <section id="kontakt" className="mx-auto max-w-7xl px-4 pb-12 sm:px-5 sm:pb-24">
          <div className="rounded-[1.5rem] bg-cyan-400 p-4 text-black shadow-2xl shadow-cyan-500/30 sm:rounded-[2.5rem] sm:p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-widest">{t.contact}</p>
                <h2 className="mt-3 text-[1.85rem] font-black leading-tight sm:text-5xl lg:text-6xl">{t.collaborationTitle}</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-black/80 sm:text-lg">{t.collaborationText}</p>
              </div>
              <div className="rounded-[1.25rem] sm:rounded-[2rem] p-[1.5px] bg-gradient-to-br from-cyan-400/60 via-cyan-500/40 to-cyan-400/60">
                <div className="rounded-[1.2rem] sm:rounded-[1.95rem] bg-[#050816] p-3 sm:p-8 text-white">
                  <div className="grid gap-5">
                    {[
                      {icon: Code2, label: "GitHub", value: "github.com/nguyennhando"},
                      { icon: Globe, label: t.location, value: t.country },
                      { icon: CircuitBoard, label: t.focus, value: t.focusValue },
                      { icon: Wrench, label: t.tools, value: t.toolsValue },
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
          <button type="button" onClick={onGoImpressum} className="transition hover:text-cyan-400">{t.legalNotice}</button>
          <button type="button" onClick={onGoDatenschutz} className="transition hover:text-cyan-400">{t.privacy}</button>
        </div>
        <p className="mt-4 text-xs text-zinc-500">{t.footer}</p>
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
function LegalPageLayout({ title, children, onBack, onNavigate, language, onLanguageChange }) {
  const t = getUiText(language);
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <Background />

      <SiteHeader
        onNavigate={onNavigate}
        currentPage="legal"
        language={language}
        onLanguageChange={onLanguageChange}
      />

      <main className="mx-auto max-w-5xl px-4 pt-[110px] pb-20 sm:px-5">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-white/10 hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" /> {t.back}
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
    return <LegalPageLayout title={copy.title} onBack={onBack} onNavigate={onNavigate} language={language} onLanguageChange={onLanguageChange}>{copy.sections.map(([title, text]) => <section key={title}><p className="font-bold text-white">{title}</p><p className="whitespace-pre-line">{text}</p></section>)}</LegalPageLayout>;
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
    return <LegalPageLayout title={language === "vi" ? "Quyền riêng tư" : "Privacy Policy"} onBack={onBack} onNavigate={onNavigate} language={language} onLanguageChange={onLanguageChange}>{sections.map(([title, text]) => <section key={title}><p className="font-bold text-white">{title}</p><p className="whitespace-pre-line">{text}</p></section>)}</LegalPageLayout>;
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
          language={language}
        />
      )}
    </>
  );
}

export default App;
