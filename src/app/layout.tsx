import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { TAGLINE } from "@/lib/content";

const instrument = localFont({
  src: "../fonts/instrument-sans.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "callisto",
  description: TAGLINE,
  icons: {
    icon: [{ url: "/logo-removebg-preview.png", type: "image/png" }],
    apple: "/logo-removebg-preview.png",
  },
};

const CONTRACT = `<!--
THESIS: A quiet operator colophon on a dark field; refuses the SaaS marketing landing and the oversized moon hero.
OWN-WORLD: Near-black ground, Instrument Sans, a modest living crescent of orbs with dust, lowercase hairline links, measured rows.
STORY: A visitor understands Callisto builds and operates software, services and internet businesses, then opens work or notes or writes.
FIRST VIEWPORT: Flat dark field. Optical-center cluster: 64px orb, then callisto, then the sentence. Bottom: work, notes, contact.
FORM: Quiet studio colophon (canon). Seed f531ae74.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrument.variable}>
      <body className={instrument.className}>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        {process.env.NODE_ENV === "development" ? (
          <Script
            src="https://mcp.figma.com/mcp/html-to-design/capture.js"
            strategy="afterInteractive"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
