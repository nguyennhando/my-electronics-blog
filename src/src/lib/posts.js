import matter from "gray-matter";

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

export const POSTS = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
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
      sort_order: Number.isFinite(Number(data.sort_order)) ? Number(data.sort_order) : 100,
    };
  })
  .sort((a, b) => {
    const orderA = Number.isFinite(Number(a.sort_order)) ? Number(a.sort_order) : 100;
    const orderB = Number.isFinite(Number(b.sort_order)) ? Number(b.sort_order) : 100;
    if (orderA !== orderB) return orderA - orderB;
    return new Date(b.created_at || 0) - new Date(a.created_at || 0);
  });
