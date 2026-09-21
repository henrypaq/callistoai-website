import { PageHead } from "@/components/PageHead";
import { TransitionLink } from "@/components/TransitionLink";
import { formatDate, notes } from "@/lib/content";

export const metadata = {
  title: "notes",
  description:
    "Notes from Callisto (Callisto AI / CallistoAI) on building and operating software.",
};

export default function NotesPage() {
  return (
    <main className="list-page">
      <PageHead title="notes" />
      {notes.map((item) => (
        <TransitionLink key={item.slug} href={`/notes/${item.slug}`} className="row">
          <div className="row-top">
            <span className="row-title">{item.title}</span>
            <span className="row-meta">
              {formatDate(item.date)}
              {item.synthetic ? " · placeholder" : ""}
            </span>
          </div>
          <p className="row-summary">{item.summary}</p>
        </TransitionLink>
      ))}
    </main>
  );
}
