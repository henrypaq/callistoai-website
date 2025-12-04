import type { Metadata } from "next";
import { Poppins, Geist_Mono, Pacifico, Archivo, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

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

export const metadata: Metadata = {
  title: "Callisto - AI-Powered Business Solutions",
  description: "Empowering businesses with AI-driven solutions for automation, analytics, and intelligent decision making.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/IMG_0075.PNG', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/IMG_0075.PNG',
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
        className={`${poppins.variable} ${archivo.variable} ${geistMono.variable} ${pacifico.variable} ${redHatDisplay.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
