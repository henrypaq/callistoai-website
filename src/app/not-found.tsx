import { PageHead } from "@/components/PageHead";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="colophon">
        <PageHead title="not found" back="/" />
        <p>that page is not here.</p>
      </main>
    </SiteShell>
  );
}
