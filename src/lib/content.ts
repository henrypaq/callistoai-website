export type WorkKind = "software" | "project";

export type WorkItem = {
  slug: string;
  title: string;
  kind: WorkKind;
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

export const TAGLINE =
  "we build and operate software, services and internet businesses.";

export const work: WorkItem[] = [
  {
    slug: "cortex",
    title: "cortex",
    kind: "software",
    summary: "an intelligence layer for decisions inside an operation.",
    body: [
      "cortex sits on the data a business already has and turns it into something people can act on.",
      "it is software we build and then stay with: dashboards only where they earn their place, models only where they change a decision.",
    ],
  },
  {
    slug: "steward",
    title: "steward",
    kind: "software",
    summary: "operations that keep moving after the call is missed.",
    body: [
      "steward handles the conversations and bookings that used to wait on someone picking up.",
      "we build it around the actual hours of a service business, then operate it so it stays current.",
    ],
  },
  {
    slug: "ledger",
    title: "ledger",
    kind: "project",
    summary: "a quiet system for following money through a service business.",
    body: [
      "invoices, collections, and the work they refer to, held in one place.",
      "this entry is a placeholder so the list can be judged. replace it with a real project when you have one to publish.",
    ],
    synthetic: true,
  },
  {
    slug: "switchboard",
    title: "switchboard",
    kind: "software",
    summary: "voice and message handling that stays on after hours.",
    body: [
      "a small stack for inbound calls and texts, routed to whoever should see them.",
      "this entry is a placeholder so the list can be judged. replace it with a real project when you have one to publish.",
    ],
    synthetic: true,
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
