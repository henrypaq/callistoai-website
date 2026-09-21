import { notFound } from "next/navigation";
import { PageHead } from "@/components/PageHead";
import { getWork, work, workLabel } from "@/lib/content";

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
  if (!item) return { title: "callisto" };
  return {
    title: item.title,
    description: `${item.summary} Work by Callisto (Callisto AI).`,
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
    <article className="article">
      <PageHead title={item.title} back="/work" />
      <p className="lede">
        {workLabel(item)}
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
  );
}
