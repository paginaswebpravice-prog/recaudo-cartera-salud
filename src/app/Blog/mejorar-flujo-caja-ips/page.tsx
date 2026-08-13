import type { Metadata } from "next";
import MejorarFlujoCajaIPS from "./MejorarFlujoCajaIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/mejorar-flujo-caja-ips";

export const metadata: Metadata = {
  title: "Cómo mejorar el flujo de caja de una IPS: cartera vencida y recaudo",

  description:
    "Conozca cómo mejorar el flujo de caja de una IPS en Colombia, reducir cartera vencida y acelerar el recaudo de obligaciones pendientes de EPS.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cómo mejorar el flujo de caja de una IPS y reducir la cartera vencida",
    description:
      "Estrategias financieras, administrativas y jurídicas para mejorar la liquidez de una IPS y recuperar cartera pendiente de EPS en Colombia.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo mejorar el flujo de caja de una IPS y recuperar cartera vencida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cómo mejorar el flujo de caja de una IPS y reducir la cartera vencida",
    description:
      "Estrategias para mejorar la liquidez, controlar la cartera vencida y fortalecer el recaudo de una IPS en Colombia.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
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
    "Cómo mejorar el flujo de caja de una IPS y reducir la cartera vencida",

  description:
    "Guía práctica para IPS, clínicas y prestadores de salud sobre cómo mejorar el flujo de caja, controlar la cartera vencida y fortalecer la recuperación de obligaciones pendientes.",

  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",

  author: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    url: "https://recaudocarteraipsyeps.com",
  },

  publisher: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    url: "https://recaudocarteraipsyeps.com",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },

  datePublished: "2026-05-12",
  dateModified: "2026-08-13",

  inLanguage: "es-CO",

  articleSection: "Flujo de caja y recuperación de cartera IPS",

  keywords: [
    "flujo de caja IPS",
    "mejorar flujo de caja IPS",
    "cartera vencida IPS",
    "recuperación de cartera IPS",
    "cartera EPS",
    "cobro de cartera EPS",
    "liquidez IPS",
    "flujo de caja clínica",
    "recaudo sector salud",
    "gestión de cartera IPS",
    "IPS Colombia",
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
