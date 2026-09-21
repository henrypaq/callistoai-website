import { notes, SITE_URL, work } from "@/lib/content";

export default function sitemap() {
  return [
    { url: SITE_URL, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/notes`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly" as const, priority: 0.5 },
    ...work.map((item) => ({
      url: `${SITE_URL}/work/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...notes.map((item) => ({
      url: `${SITE_URL}/notes/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
