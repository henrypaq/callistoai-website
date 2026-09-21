import { TransitionLink } from "@/components/TransitionLink";

export function PageHead({
  title,
  back,
}: {
  title: string;
  back?: string;
}) {
  return (
    <div className="page-head">
      {back ? (
        <TransitionLink href={back} className="page-back">
          back
        </TransitionLink>
      ) : null}
      <h1>{title}</h1>
    </div>
  );
}
