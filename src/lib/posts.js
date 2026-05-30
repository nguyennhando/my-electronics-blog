const files = import.meta.glob("../content/*.md", {
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

    const idx = line.indexOf(":");
    if (idx === -1) continue;

    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();

    currentKey = key;

    if (value === "") {
      data[key] = [];
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

export const POSTS = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || path.split("/").pop().replace(/\.md$/, "");

    return {
      ...data,
      id: data.id || slug,
      slug,
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
  })
  .filter((post) => post.published !== false)
  .sort((a, b) => {
    const orderA = Number.isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
    const orderB = Number.isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;

    if (orderA !== orderB) return orderA - orderB;

    return new Date(b.created_at || 0) - new Date(a.created_at || 0);
  });