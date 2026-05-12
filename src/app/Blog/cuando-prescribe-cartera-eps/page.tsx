import type { Metadata } from "next";
import CuandoPrescribeCarteraEPS from "./CuandoPrescribeCarteraEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/cuando-prescribe-cartera-eps";

export const metadata: Metadata = {
  title:
    "Cuándo prescribe la cartera EPS en Colombia y cómo evitar perderla | Guía 2026",
  description:
    "Descubra cuándo prescribe la cartera EPS en Colombia, cuáles son los riesgos jurídicos y cómo evitar perder dinero por vencimiento de términos.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cuándo prescribe la cartera EPS en Colombia y cómo evitar perderla",
    description:
      "Guía jurídica sobre prescripción de cartera EPS en Colombia y estrategias para evitar perder cuentas por cobrar.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Prescripción de cartera EPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cuándo prescribe la cartera EPS en Colombia",
    description: "Cómo evitar perder cartera EPS por prescripción en Colombia.",
    images: ["https://recaudocarteraipsyeps.com/logo.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "Cuándo prescribe la cartera EPS en Colombia y cómo evitar perderla",
  description:
    "Aprenda cuándo prescribe la cartera EPS en Colombia y qué estrategias jurídicas ayudan a evitar la pérdida de cuentas por cobrar.",
  image: "https://recaudocarteraipsyeps.com/logo.png",
  author: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    url: "https://recaudocarteraipsyeps.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  inLanguage: "es-CO",
  articleSection: "Prescripción de cartera EPS",
  keywords: [
    "prescripción cartera EPS",
    "cartera EPS Colombia",
    "cobro cartera EPS",
    "demanda contra EPS",
    "prescripción facturas EPS",
    "recuperación cartera salud",
    "cartera vencida EPS",
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

      <CuandoPrescribeCarteraEPS />
    </>
  );
}
