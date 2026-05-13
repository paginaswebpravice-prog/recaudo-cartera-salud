import type { Metadata } from "next";
import MejorarFlujoCajaIPS from "./MejorarFlujoCajaIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/mejorar-flujo-caja-ips";

export const metadata: Metadata = {
  title:
    "Cómo mejorar el flujo de caja de una IPS y reducir cartera vencida | Guía 2026",
  description:
    "Aprenda cómo mejorar el flujo de caja de una IPS en Colombia y reducir el impacto de la cartera vencida con estrategias financieras y jurídicas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo mejorar el flujo de caja de una IPS y reducir cartera vencida",
    description:
      "Guía para IPS y clínicas sobre recuperación de cartera, liquidez y reducción de mora en Colombia.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Flujo de caja en IPS y recuperación de cartera",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo mejorar el flujo de caja de una IPS y reducir cartera vencida",
    description:
      "Estrategias para IPS y clínicas que buscan reducir cartera vencida y mejorar liquidez.",
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
    "Cómo mejorar el flujo de caja de una IPS y reducir cartera vencida",
  description:
    "Guía sobre estrategias financieras y jurídicas para mejorar el flujo de caja de IPS y clínicas en Colombia.",
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
  articleSection: "Flujo de caja IPS",
  keywords: [
    "flujo de caja IPS",
    "cartera vencida IPS",
    "recuperación cartera salud",
    "mejorar liquidez IPS",
    "cobro cartera EPS",
    "IPS Colombia",
    "recaudo sector salud",
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

      <MejorarFlujoCajaIPS />
    </>
  );
}
