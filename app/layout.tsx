import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";
import "aos/dist/aos.css";
import { JsonLd } from "@/components/JsonLd";
import JsonLdSchemas from "@/utils/constant/JsonLdSchemas";
import LocaleProvider from "@/components/LocaleProvider";
import { NextIntlClientProvider } from "next-intl";

import AOSInit from '@/components/AOSInit';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title:
    "ITSupport.net.in – Trusted Remote IT Support & Technical Services | 20+ Years Experience",
  description:
    "ITSupport.net.in provides expert remote IT support services worldwide. With 20+ years experience, 50,000+ satisfied clients, and 3 lakh+ issues resolved.",
  applicationName: "IT Support",
  authors: [{ name: "ITSupport.net.in", url: "https://www.itsupport.net.in" }],
  metadataBase: new URL("https://www.itsupport.net.in"),
  robots: {
    index: true,
    follow: true,
  },
  other: {
    charset: "UTF-8", // adds <meta charset="UTF-8">
    "og:keywords":
      "IT support, Tech support, IT services, Technical support, Computer repair near me, Wifi help, Printer repair, Virus removal, Laptop repair, Home tech support",
    "twitter:image:type": "images/webp",
    author: "IT Support, L4RG US LLC",
    copyright: " 2025",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.webp", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.webp", sizes: "any" },
      { url: "/apple-icon-57x57.webp", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.webp", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.webp", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.webp", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.webp", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.webp", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.webp", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.webp", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.webp", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Home & Business IT Services | Wifi, Printer & Virus Help Near Me",
    description:
      "Get expert IT services at home or office. We fix wifi, printers, laptops, and remove viruses fast. Call now for reliable, local technical support near you.",
    siteName: "24/7 Online Tech Support | ITSupport.net.in",
    url: "https://www.itsupport.net.in/",
    type: "website",
    locale: "en_US",
    alternateLocale: [
      "en-US",
      "en-AE",
      "de-DE",
      "es-ES",
      "fr-FR",
      "pt-BR",
      "en-GB",
      "en-CA",
      "en-MY",
      "en-SG",
      "en-NG",
      "en-ID",
      "en-IE",
      "en-AU",
      "en-IN",
      "en-NZ",
      "en-PH",
      "en-ZA",
      "es-MX",
      "es-CO",
      "es-PE",
      "es-AR",
      "es-CL",
      "es-VE",
      "pt-PT",
      "fr-CA",
      "fr-BE",
    ],
    images: [
      {
        url: "https://l4rg.s3.us-east-2.amazonaws.com/tech-support.webp",
        secureUrl: "https://l4rg.s3.us-east-2.amazonaws.com/tech-support.webp",
        alt: "ITSupport.net.in - Online Tech Support",
        type: "image/webp",
        width: 1182, // replace "Fix Size" with actual width
        height: 619, // replace "Fix Size" with actual height
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Technical Support & IT Services | Local Repair Pros",
    description:
      "From computer repair to wifi and printer issues, our IT experts solve it all. Call now for fast, affordable tech support and home IT services near you.",
    images: [
      {
        url: "https://l4rg.s3.us-east-2.amazonaws.com/tech-support.webp",
        alt: "ITSupport.net.in - Online Tech Support",
      },
    ],
    creator: "@L4RGINDIA",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <JsonLd data={JsonLdSchemas} />
          <AOSInit />
          <div className="items-center justify-items-center min-h-screen">
            <Header />
            <main className="mt-16 md:mt-20  w-full">
              <div className="min-h-screen flex flex-col text-gray-900 font-[family-name:var(--font-geist-sans)]">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
