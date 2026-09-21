import { PageHead } from "@/components/PageHead";
import { SiteShell } from "@/components/SiteShell";
import { CONTACT_EMAIL } from "@/lib/content";

export const metadata = {
  title: "contact — callisto",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="colophon">
        <PageHead title="contact" back="/" />
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </main>
    </SiteShell>
  );
}
