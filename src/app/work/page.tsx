import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { SiteShell } from "@/components/SiteShell";
import { work } from "@/lib/content";

export const metadata = {
  title: "work — callisto",
};

export default function WorkPage() {
  return (
    <SiteShell current="work">
      <main className="list-page">
        <PageHead title="selected work" back="/" />
        {work.map((item) => (
          <Link key={item.slug} href={`/work/${item.slug}`} className="row">
            <div className="row-top">
              <span className="row-title">{item.title}</span>
              <span className="row-meta">
                {item.kind}
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
