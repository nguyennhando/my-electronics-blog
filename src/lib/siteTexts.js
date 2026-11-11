// Texte der öffentlichen Website, die im Admin (Bereich „Website-Texte“) überschrieben werden können.
// Die Standardwerte stehen im Code, überschrieben wird per Datei src/content/<sprache>/site-texts.md.
import { getWbText, WB_SKILLS } from "./werkbankText";

// Schlüssel der Werkbank-Texte (WB_TEXT), gruppiert für den Admin.
export const WB_TEXT_GROUPS = [
  ["groupNav", ["nav_projects", "nav_skills", "nav_path", "nav_contact"]],
  ["groupHero", ["cta_projects", "cta_contact", "available", "chip_live", "chip_live_sub", "chip_board", "chip_board_sub"]],
  ["groupProjects", ["sec_projects", "f_all", "f_hw", "f_sw", "search", "more", "featured", "read", "none"]],
  ["groupLive", ["sec_live", "live_sub", "open", "demo_hint", "st_live", "st_store", "st_demo", "carousel_prev", "carousel_next", "carousel_pause", "carousel_play"]],
  ["groupSkills", ["sec_skills", "sk_hw", "skills_hw", "sk_emb", "skills_emb", "sk_sw", "skills_sw"]],
  ["groupPath", ["sec_path", "path_lead", "path_1", "path_2", "path_3", "path_4", "path_5", "path_6", "read_more"]],
  ["groupKnowledge", ["sec_know", "know_text", "know_cta"]],
  ["groupContact", ["sec_contact", "contact_note", "contact_label", "foot"]],
];

// Schlüssel der allgemeinen Oberflächentexte (UI_TEXT in App.jsx).
export const UI_TEXT_GROUPS = [
  ["groupSite", ["tagline", "knowledge", "technicalBlog", "gallery", "projectImages", "enlarge", "image"]],
  ["groupPostPage", ["backBlog", "openProject", "downloadPdf", "readPost", "conceptProject", "noProjectLink", "translationFallback", "externalSource", "resumeButton"]],
  ["groupKnowledgePage", ["knowledgeLibrary", "knowledgeTitle", "knowledgeIntro", "knowledgeNotice", "kn_1", "kn_2", "kn_3", "knowledgeSearch", "allTopics", "selectedPost", "archive", "morePosts", "posts", "backKnowledge", "noKnowledge", "noKnowledgeText"]],
  ["groupContactInfo", ["location", "country", "focus", "focusValue", "tools", "toolsValue"]],
  ["groupLegal", ["legalNotice", "privacy", "back"]],
  ["groupCookie", ["cookie_title", "cookie_text", "cookie_button"]],
];

export const LONG_TEXT_KEYS = new Set(["live_sub", "demo_hint", "contact_note", "foot", "know_text", "path_lead", "knowledgeIntro", "kn_1", "kn_2", "kn_3", "translationFallback", "cookie_text", "skills_hw", "skills_emb", "skills_sw"]);

export const getWbDefaults = (language) => {
  const w = getWbText(language, {});
  const out = { ...w };
  (w.path || []).forEach((step, index) => { out[`path_${index + 1}`] = step; });
  out.skills_hw = WB_SKILLS.hw.join(", ");
  out.skills_emb = WB_SKILLS.emb.join(", ");
  out.skills_sw = WB_SKILLS.sw.join(", ");
  return out;
};

// Texte des Datenschutzhinweises (Cookie-Banner).
export const COOKIE_TEXT = {
  de: { title: "Datenschutzhinweis", text: "Diese Website verwendet keine Tracking-Cookies, keine Werbe-Cookies und keine Analyse-Cookies. Es wird lediglich eine lokale Speicherung im Browser verwendet, um diese Datenschutzhinweis-Auswahl zu speichern. Weitere Informationen finden Sie in der Datenschutzerklärung.", button: "Verstanden" },
  en: { title: "Privacy Notice", text: "This website does not use tracking, advertising or analytics cookies. Browser storage is only used locally to remember this privacy notice selection. More information is available in the privacy policy.", button: "Understood" },
  vi: { title: "Thông báo quyền riêng tư", text: "Website này không sử dụng cookie theo dõi, quảng cáo hoặc phân tích. Bộ nhớ cục bộ của trình duyệt chỉ được dùng để lưu lựa chọn cho thông báo quyền riêng tư này. Bạn có thể xem thêm thông tin trong chính sách quyền riêng tư.", button: "Đã hiểu" },
};
