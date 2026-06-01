const files = import.meta.glob("../content/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const toArray = (value) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const parseValue = (value) => {
  const v = String(value || "").trim();

  if (v === "true") return true;
  if (v === "false") return false;
  if (v === "null") return null;
  if (v === "") return "";

  return v.replace(/^["']|["']$/g, "");
};

const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return {
      data: {},
      content: raw,
    };
  }

  const data = {};
  const lines = match[1].split(/\r?\n/);

  let currentKey = null;

  for (const line of lines) {
    if (!line.trim()) continue;

    const listMatch = line.match(/^\s*-\s+(.*)$/);

    if (listMatch && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(parseValue(listMatch[1]));
      continue;
    }

    if (/^\s+/.test(line) && currentKey && !Array.isArray(data[currentKey])) {
      data[currentKey] = `${data[currentKey] || ""} ${parseValue(line)}`.trim();
      continue;
    }

    const idx = line.indexOf(":");
    if (idx === -1) continue;

    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();

    currentKey = key;

    if (value === "") {
      data[key] = "";
    } else if (value === "[]") {
      data[key] = [];
    } else {
      data[key] = parseValue(value);
    }
  }

  return {
    data,
    content: match[2].trim(),
  };
};

const parsedFiles = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || path.split("/").pop().replace(/\.md$/, "");
    const directoryLanguage = path.match(/\/content\/(de|en|vi)\//)?.[1];
    const language = data.language || directoryLanguage || "de";
    const translationId = data.translation_id || data.id || slug;

    return {
      ...data,
      id: translationId,
      slug,
      language,
      translation_id: translationId,
      source_path: path.replace("../content/", ""),
      content,
      image_gallery: toArray(data.image_gallery),
      tags: toArray(data.tags),
      published: data.published !== false,
      external_link: data.external_link || null,
      created_at: data.created_at || new Date().toISOString(),
      sort_order: Number.isFinite(Number(data.sort_order))
        ? Number(data.sort_order)
        : 100,
    };
  });

export const PERSONAL_WAYS = parsedFiles.filter((entry) => entry.type === "personal_way");
export const PERSONAL_WAY = PERSONAL_WAYS.find((entry) => entry.language === "de") || PERSONAL_WAYS[0];
export const HOME_CONTENTS = parsedFiles.filter((entry) => entry.type === "home_content");
export const SITE_SETTINGS = parsedFiles.find((entry) => entry.type === "site_settings");
const gallerySettings = parsedFiles.find((entry) => entry.type === "gallery_settings");

const getLocalizedEntry = (entries, language = "de") => entries.find((entry) => entry.language === language)
  || entries.find((entry) => entry.language === "de")
  || entries[0];

export const getLocalizedPersonalWay = (language = "de") => getLocalizedEntry(PERSONAL_WAYS, language);
export const getLocalizedHomeContent = (language = "de") => getLocalizedEntry(HOME_CONTENTS, language);

export const GALLERY_IMAGES = (() => {
  if (!gallerySettings?.content) return [];

  try {
    const images = JSON.parse(gallerySettings.content);
    return Array.isArray(images) ? images.filter((image) => typeof image === "string" && image.trim()) : [];
  } catch {
    return [];
  }
})();

export const CONTENT_POSTS = parsedFiles
  .filter((post) => !["personal_way", "home_content", "site_settings", "gallery_settings"].includes(post.type))
  .sort((a, b) => {
    const orderA = Number.isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
    const orderB = Number.isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;

    if (orderA !== orderB) return orderA - orderB;

    return new Date(b.created_at || 0) - new Date(a.created_at || 0);
  });

const getAvailableLanguages = (posts, translationId) => [...new Set(posts
  .filter((post) => post.translation_id === translationId)
  .map((post) => post.language))];

export const getLocalizedContentPosts = (language = "de") => {
  const publishedPosts = CONTENT_POSTS.filter((post) => post.published !== false);
  const translationIds = [...new Set(publishedPosts.map((post) => post.translation_id))];

  return translationIds
    .map((translationId) => {
      const variants = publishedPosts.filter((post) => post.translation_id === translationId);
      const selectedPost = variants.find((post) => post.language === language)
        || variants.find((post) => post.language === "de")
        || variants[0];

      return {
        ...selectedPost,
        id: translationId,
        available_languages: getAvailableLanguages(publishedPosts, translationId),
        requested_language: language,
        is_translation_fallback: selectedPost.language !== language,
      };
    })
    .sort((a, b) => {
      const orderA = Number.isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
      const orderB = Number.isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;

      if (orderA !== orderB) return orderA - orderB;

      return new Date(b.created_at || 0) - new Date(a.created_at || 0);
    });
};

export const getTranslationLanguages = (translationId) => getAvailableLanguages(CONTENT_POSTS, translationId);
export const KNOWLEDGE_POSTS = getLocalizedContentPosts("de").filter((post) => post.content_type === "knowledge");
export const POSTS = getLocalizedContentPosts("de").filter((post) => post.content_type !== "knowledge");
