import type { Metadata } from "next";
import ComoDemandarEPSColombiaContent from "./ComoDemandarEPSColombiaContent";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/como-demandar-eps-colombia";

export const metadata: Metadata = {
  title:
    "Cómo demandar una EPS en Colombia paso a paso por cartera vencida | Guía 2026",
  description:
    "Aprenda cómo demandar una EPS en Colombia por cartera vencida. Guía jurídica para IPS, clínicas y prestadores de salud.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo demandar una EPS en Colombia paso a paso por cartera vencida",
    description:
      "Proceso jurídico para recuperar cartera vencida contra EPS en Colombia.",
    url: canonicalUrl,
    siteName: "Blog Jurídico Salud",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo demandar una EPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo demandar una EPS en Colombia paso a paso por cartera vencida",
    description:
      "Guía jurídica para IPS y clínicas sobre recuperación de cartera EPS.",
    images: ["https://recaudocarteraipsyeps.com/og-image.jpg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline: "Cómo demandar una EPS en Colombia paso a paso por cartera vencida",
  description:
    "Guía completa sobre cómo demandar una EPS en Colombia y recuperar cartera vencida en el sector salud.",
  image: "https://recaudocarteraipsyeps.com/og-image.jpg",
  author: {
    "@type": "Organization",
    name: "Blog Jurídico Salud",
    url: "https://recaudocarteraipsyeps.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Blog Jurídico Salud",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  inLanguage: "es-CO",
  articleSection: "Cobro de cartera EPS",
  keywords: [
    "demandar EPS Colombia",
    "cartera vencida EPS",
    "cobro judicial EPS",
    "IPS demandar EPS",
    "proceso ejecutivo EPS",
    "recuperar cartera salud",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ComoDemandarEPSColombiaContent />
    </>
  );
}
