import { notFound } from "next/navigation";
import { PageHead } from "@/components/PageHead";
import { SiteShell } from "@/components/SiteShell";
import { getWork, work } from "@/lib/content";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  return {
    title: item ? `${item.title} — callisto` : "callisto",
  };
}

export default async function WorkItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  return (
    <SiteShell current="work">
      <article className="article">
        <PageHead title={item.title} back="/work" />
        <p className="lede">
          {item.kind}
          {item.synthetic ? " · placeholder" : ""}
          {` · ${item.summary}`}
        </p>
        <div className="body">
          {item.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {item.synthetic ? (
          <p className="placeholder">placeholder. replace this entry when the work is ready to publish.</p>
        ) : null}
      </article>
    </SiteShell>
  );
}
