import { CallistoMark } from "@/components/CallistoMark";
import { SiteShell } from "@/components/SiteShell";
import { TAGLINE } from "@/lib/content";

export default function Home() {
  return (
    <SiteShell home>
      <section className="colophon">
        <CallistoMark />
        <h1>callisto</h1>
        <p>{TAGLINE}</p>
      </section>
    </SiteShell>
  );
}
