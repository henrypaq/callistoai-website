import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { SiteShell } from "@/components/SiteShell";
import { formatDate, notes } from "@/lib/content";

export const metadata = {
  title: "notes — callisto",
};

export default function NotesPage() {
  return (
    <SiteShell current="notes">
      <main className="list-page">
        <PageHead title="notes" back="/" />
        {notes.map((item) => (
          <Link key={item.slug} href={`/notes/${item.slug}`} className="row">
            <div className="row-top">
              <span className="row-title">{item.title}</span>
              <span className="row-meta">
                {formatDate(item.date)}
                {item.synthetic ? " · placeholder" : ""}
              </span>
            </div>
            <p className="row-summary">{item.summary}</p>
          </Link>
        ))}
      </main>
    </SiteShell>
  );
}
