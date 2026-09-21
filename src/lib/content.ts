export type WorkKind = "software" | "automation";

export type WorkItem = {
  slug: string;
  title: string;
  kind: WorkKind;
  summary: string;
  lede: string;
  body: string[];
  synthetic?: boolean;
};

export type NoteItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string[];
  synthetic?: boolean;
};

export const CONTACT_EMAIL = "contact@aicallisto.com";

export const SITE_URL = "https://aicallisto.com";

export const SITE_NAME = "callisto";

export const SEO_ALTERNATE_NAMES = ["Callisto AI", "CallistoAI", "Callisto"] as const;

export const TAGLINE =
  "we build and operate software, services and internet businesses.";

export const SEO_DESCRIPTION =
  "Callisto builds and operates software, services and internet businesses. Also known as Callisto AI and CallistoAI.";

export const work: WorkItem[] = [
  {
    slug: "prefab-commerce",
    title: "prefab commerce",
    kind: "software",
    summary: "a configurator and internal catalogue system for a prefab builder.",
    lede: "commerce tooling for a prefab builder.",
    body: [
      "we built a customer-facing configurator for choosing models, finishes, foundations, and options, with pricing updated as the configuration changes.",
      "behind it is a separate internal system for managing products, pricing, images, and the catalogue without touching the code.",
      "the work also includes the handoff from configuration to quote request and the systems around what happens next.",
    ],
  },
  {
    slug: "ecommerce-operations",
    title: "ecommerce operations",
    kind: "software",
    summary: "internal tooling for files, products, and day-to-day operations.",
    lede: "internal tooling for an ecommerce business.",
    body: [
      "the existing workflow spread files, product information, and operational work across different tools.",
      "we built a lightweight internal system around how the team already worked: organizing files, keeping product information accessible, and reducing the manual movement between systems.",
    ],
  },
  {
    slug: "service-operations",
    title: "service operations",
    kind: "automation",
    summary: "customer inquiry and operational workflows for a service business.",
    lede: "customer and operational workflows for a service business.",
    body: [
      "we worked on the systems around incoming customer requests, follow-up, scheduling, and the internal work that happens after a new inquiry.",
      "the goal was simple: fewer things depending on someone remembering to move them forward manually.",
    ],
  },
];

export const notes: NoteItem[] = [
  {
    slug: "operating",
    title: "on building it and then running it",
    date: "2026-09-01",
    summary: "shipping is the start. the work is staying with what you shipped.",
    body: [
      "most software is abandoned at the moment it works. the interesting part is the year after that.",
      "callisto is set up to build and then operate: the same people who made the system keep it in production.",
      "this note is a placeholder so the list can be judged. replace it when you have something to publish.",
    ],
    synthetic: true,
  },
  {
    slug: "small-sites",
    title: "sites that can be edited by hand",
    date: "2026-08-12",
    summary: "a public site should be a file you can open, not a cms you have to remember.",
    body: [
      "work and notes on this site are ordinary typescript. add a row, write a few sentences, ship.",
      "that is slower than a dashboard and much harder to neglect.",
      "this note is a placeholder so the list can be judged. replace it when you have something to publish.",
    ],
    synthetic: true,
  },
  {
    slug: "quiet",
    title: "quiet as a working method",
    date: "2026-07-20",
    summary: "if a visitor needs a billboard, the sentence was not finished.",
    body: [
      "the useful test is whether someone can repeat what we do after one look.",
      "type stays small so the sentence has to carry the meaning.",
      "this note is a placeholder so the list can be judged. replace it when you have something to publish.",
    ],
    synthetic: true,
  },
];

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}

export function getNote(slug: string) {
  return notes.find((item) => item.slug === slug);
}

export function formatDate(date: string) {
  const [year, month] = date.split("-");
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const index = Number(month) - 1;
  return `${months[index]} ${year}`;
}
