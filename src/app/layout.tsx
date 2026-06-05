import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://mrksolution.id";
const COMPANY = "PT Maulida Rafa Kurnia";
const BRAND = "MRK IT Solution";

const title = `${BRAND} — Jasa Pembuatan Website & Aplikasi Profesional`;
const description =
  "MRK IT Solution adalah software house & agensi IT di Indonesia yang membangun website, aplikasi mobile, dan sistem digital yang cepat, aman, dan siap scale. Konsultasi gratis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${BRAND}`,
  },
  description,
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi mobile",
    "software house Indonesia",
    "software house Yogyakarta",
    "agensi IT Indonesia",
    "jasa website profesional",
    "jasa pembuatan sistem informasi",
    "jasa pembuatan aplikasi android iOS",
    "vendor IT Indonesia",
    "jasa digitalisasi bisnis",
    "web development Indonesia",
    "custom software development",
    "jasa IT terpercaya",
    "jasa ERP",
    "jasa SaaS",
    "MRK IT Solution",
    "PT Maulida Rafa Kurnia",
  ],
  authors: [{ name: COMPANY, url: SITE_URL }],
  creator: COMPANY,
  publisher: COMPANY,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: BRAND,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@mrksolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY,
      alternateName: BRAND,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
      description:
        "Software house & agensi IT profesional di Indonesia. Membangun website, aplikasi mobile, dan sistem digital modern.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yogyakarta",
        addressRegion: "DI Yogyakarta",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "halo@mrksolution.id",
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"],
      },
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND,
      description,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "id-ID",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: BRAND,
      url: SITE_URL,
      description:
        "Jasa pembuatan website, aplikasi mobile, custom software, dan sistem digital profesional untuk bisnis di Indonesia.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Indonesia" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan IT MRK",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pengembangan Website",
              description:
                "Website company profile, landing page, dan portal yang cepat, responsif, dan SEO-friendly.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aplikasi Mobile Android & iOS",
              description:
                "Aplikasi mobile Android dan iOS yang intuitif untuk menjangkau pelanggan di mana saja.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software & SaaS",
              description:
                "Sistem internal, ERP, dan platform SaaS yang dirancang sesuai proses bisnis Anda.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud & DevOps",
              description:
                "Deployment, monitoring, dan infrastruktur cloud yang andal dengan biaya efisien.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design",
              description:
                "Riset pengguna, wireframe, hingga prototipe interaktif yang berfokus pada pengalaman.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Otomasi Bisnis",
              description:
                "Integrasi AI, chatbot, dan otomasi proses untuk meningkatkan produktivitas tim.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
