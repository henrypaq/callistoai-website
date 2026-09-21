export type WorkKind = "software" | "project" | "experiment";

export type WorkItem = {
  slug: string;
  title: string;
  kind: WorkKind;
  status?: string;
  summary: string;
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
    slug: "frame",
    title: "frame",
    kind: "software",
    summary: "a configurator for products with more decisions than a form can handle.",
    body: [
      "frame was built for a prefab building company selling a product that changes with size, layout, finishes and options.",
      "customers can work through those decisions visually, see the configuration take shape and send the result through as a quote request.",
      "behind it is a back office for managing products, options, images and pricing without touching the site.",
    ],
  },
  {
    slug: "vault",
    title: "vault",
    kind: "software",
    summary: "a media library built around how a team actually looks for its files.",
    body: [
      "vault was built for an ecommerce company with a growing archive of product and creative assets.",
      "files can be uploaded, organized and tagged, including with image recognition, then searched using the language the team already uses to describe the work.",
      "the result is a faster way to move through a large media library without relying on folder structure or filenames alone.",
    ],
  },
  {
    slug: "intake",
    title: "intake",
    kind: "software",
    summary: "a single place to get a new client from signed to ready to work.",
    body: [
      "intake was designed around an agency onboarding process where starting work meant collecting information, files and access across several different platforms.",
      "it brings those steps into one place so the team can see what has been provided, what is still missing and what needs attention before work begins.",
    ],
  },
  {
    slug: "herme5",
    title: "herme5",
    kind: "experiment",
    summary: "an agent for work that should not need another chat window.",
    body: [
      "we already have chatgpt to interpret a message, rewrite an email or answer a question.",
      "herme5 is aimed at the part after that.",
      "give it a task, let it move between the tools involved, and only bring you back in when something actually needs your input.",
    ],
  },
];

export function workLabel(item: WorkItem) {
  return item.status ? `${item.kind} · ${item.status}` : item.kind;
}

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
