import {
  CONTACT_EMAIL,
  SEO_ALTERNATE_NAMES,
  SEO_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        legalName: "Callisto",
        alternateName: [...SEO_ALTERNATE_NAMES],
        url: SITE_URL,
        email: CONTACT_EMAIL,
        logo: `${SITE_URL}/logo-removebg-preview.png`,
        sameAs: ["https://www.instagram.com/aicallisto/"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        name: SITE_NAME,
        alternateName: [...SEO_ALTERNATE_NAMES],
        url: SITE_URL,
        description: SEO_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#org` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
