import { notFound } from "next/navigation";
import { PageHead } from "@/components/PageHead";
import { formatDate, getNote, notes } from "@/lib/content";

export function generateStaticParams() {
  return notes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNote(slug);
  if (!item) return { title: "callisto" };
  return {
    title: item.title,
    description: `${item.summary} A note from Callisto (Callisto AI).`,
  };
}

export default async function NoteItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNote(slug);
  if (!item) notFound();

  return (
    <article className="article">
      <PageHead title={item.title} back="/notes" />
      <p className="lede">
        {formatDate(item.date)}
        {item.synthetic ? " · placeholder" : ""}
        {` · ${item.summary}`}
      </p>
      <div className="body">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {item.synthetic ? (
        <p className="placeholder">placeholder. replace this note when you have something to publish.</p>
      ) : null}
    </article>
  );
}
