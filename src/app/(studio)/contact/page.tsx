import { CONTACT_EMAIL } from "@/lib/content";

export const metadata = {
  title: "contact",
  description:
    "Contact Callisto (Callisto AI / CallistoAI) at contact@aicallisto.com.",
};

export default function ContactPage() {
  return (
    <main className="colophon">
      <h1>contact</h1>
      <p>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </main>
  );
}
