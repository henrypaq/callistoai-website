import { PageHead } from "@/components/PageHead";
import { TransitionLink } from "@/components/TransitionLink";
import { work } from "@/lib/content";

export const metadata = {
  title: "work",
  description:
    "Selected work from Callisto (Callisto AI / CallistoAI): software and projects we build and operate.",
};

export default function WorkPage() {
  return (
    <main className="list-page">
      <PageHead title="selected work" />
      {work.map((item) => (
        <TransitionLink key={item.slug} href={`/work/${item.slug}`} className="row">
          <div className="row-top">
            <span className="row-title">{item.title}</span>
            <span className="row-meta">
              {item.kind}
              {item.synthetic ? " · placeholder" : ""}
            </span>
          </div>
          <p className="row-summary">{item.summary}</p>
        </TransitionLink>
      ))}
    </main>
  );
}
