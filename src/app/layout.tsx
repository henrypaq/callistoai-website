import type { Metadata } from "next";
import { Poppins, Geist_Mono, Pacifico, Archivo, Red_Hat_Display, JetBrains_Mono, Plus_Jakarta_Sans, Inter, TikTok_Sans, Playfair_Display, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import ComingSoon from "@/components/ComingSoon";
import { SITE_PAUSE } from "@/lib/site-pause";

// Poppins for body text
const poppins = Poppins({
  variable: "--font-body-raw",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Archivo for headings and hero headlines
const archivo = Archivo({
  variable: "--font-heading-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const tiktokSans = TikTok_Sans({
  variable: "--font-tiktok-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_PAUSE ? "Callisto" : "Callisto - AI-Powered Business Solutions",
  description: SITE_PAUSE
    ? "A new Callisto is on the way. Reach us anytime."
    : "Empowering businesses with AI-driven solutions for automation, analytics, and intelligent decision making.",
  icons: {
    icon: [
      { url: '/logo-removebg-preview.png', sizes: 'any', type: 'image/png' },
      { url: '/logo-removebg-preview.png', type: 'image/png' },
    ],
    shortcut: '/logo-removebg-preview.png',
    apple: '/logo-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${archivo.variable} ${geistMono.variable} ${pacifico.variable} ${redHatDisplay.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} ${inter.variable} ${tiktokSans.variable} ${playfairDisplay.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {SITE_PAUSE ? <ComingSoon /> : <Layout>{children}</Layout>}
      </body>
    </html>
  );
}
