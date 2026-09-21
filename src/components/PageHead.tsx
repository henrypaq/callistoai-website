import Link from "next/link";

export function PageHead({
  title,
  back,
}: {
  title: string;
  back: string;
}) {
  return (
    <div className="page-head">
      <Link href={back} className="page-back">
        back
      </Link>
      <h1>{title}</h1>
    </div>
  );
}
