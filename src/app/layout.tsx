import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { fallbackSettings } from "@/lib/fallback";
import type { Settings } from "@/lib/types";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const s = (await sanityFetch<Settings>(settingsQuery)) ?? fallbackSettings;
  const title = s.seo?.metaTitle || `${s.companyName} — ${s.tagline}`;
  const description =
    s.seo?.metaDescription ||
    "MRK adalah agensi IT yang membangun website, aplikasi, dan sistem digital modern untuk bisnis Anda.";

  return {
    metadataBase: new URL("https://mrksolution.id"),
    title: {
      default: title,
      template: `%s | ${s.shortName || "MRK"}`,
    },
    description,
    keywords: [
      "agensi IT",
      "jasa pembuatan website",
      "aplikasi mobile",
      "software house",
      "MRK",
      "PT Maulida Rafa Kurnia",
    ],
    openGraph: {
      title,
      description,
      url: "https://mrksolution.id",
      siteName: s.companyName,
      locale: "id_ID",
      type: "website",
      images: s.seo?.ogImage?.url ? [{ url: s.seo.ogImage.url }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description },
    icons: { icon: "/favicon.ico" },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${jakarta.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
