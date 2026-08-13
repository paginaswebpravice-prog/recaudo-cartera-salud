import type { Metadata } from "next";
import MejorarLiquidezFinancieraIPS from "./MejorarLiquidezFinancieraIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/mejorar-liquidez-financiera-ips";

export const metadata: Metadata = {
  title:
    "Cómo mejorar la liquidez de una IPS en Colombia: 10 estrategias | Guía 2026",

  description:
    "¿Cómo mejorar la liquidez de una IPS? Conozca 10 estrategias para controlar cartera vencida, acelerar el recaudo, reducir riesgos y fortalecer la sostenibilidad financiera de clínicas y hospitales en Colombia.",

  keywords: [
    "cómo mejorar la liquidez de una IPS",
    "liquidez financiera IPS",
    "mejorar liquidez IPS",
    "liquidez de una IPS",
    "cartera vencida IPS",
    "cartera EPS IPS",
    "recuperación de cartera salud",
    "sostenibilidad financiera IPS",
    "gestión financiera IPS",
    "flujo de recursos IPS",
    "cartera hospitalaria",
    "cobro de cartera a EPS",
    "riesgos financieros IPS",
    "IPS Colombia",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo mejorar la liquidez de una IPS en Colombia: 10 estrategias",
    description:
      "Guía práctica para IPS, clínicas y hospitales que buscan mejorar su liquidez, controlar cartera vencida y acelerar el recaudo frente a EPS.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo mejorar la liquidez financiera de una IPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo mejorar la liquidez de una IPS en Colombia: 10 estrategias",
    description:
      "Estrategias para reducir cartera vencida, acelerar el recaudo y fortalecer la liquidez de IPS y clínicas en Colombia.",
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

  headline: "Cómo mejorar la liquidez de una IPS en Colombia: 10 estrategias",

  description:
    "Guía práctica sobre liquidez financiera, cartera vencida, recuperación de cartera y sostenibilidad financiera de IPS, clínicas y hospitales en Colombia.",

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

  articleSection: "Liquidez financiera y recuperación de cartera de IPS",

  keywords: [
    "liquidez financiera IPS",
    "cartera vencida IPS",
    "recuperación de cartera salud",
    "sostenibilidad financiera IPS",
    "cartera EPS",
    "gestión financiera IPS",
    "flujo de recursos IPS",
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

      <MejorarLiquidezFinancieraIPS />
    </>
  );
}
