import type { Metadata } from "next";
import EPSNoRespondeRequerimientos from "./EPSNoRespondeRequerimientos";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/eps-no-responde-requerimientos";

export const metadata: Metadata = {
  title: "¿EPS no responde un requerimiento de pago? Qué hacer | Guía 2026",

  description:
    "¿Una EPS no responde los requerimientos de pago de tu IPS? Conoce qué revisar, cómo documentar la mora y cuándo pasar del cobro administrativo al prejurídico o judicial.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "¿EPS no responde un requerimiento de pago? Qué hacer | Guía 2026",

    description:
      "Guía práctica para IPS, clínicas y prestadores de salud que enfrentan una EPS que no responde requerimientos ni paga cartera vencida.",

    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "EPS no responde requerimiento de pago",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "¿EPS no responde un requerimiento de pago? Qué hacer | Guía 2026",

    description:
      "Qué hacer cuando una EPS no responde los requerimientos de pago de una IPS y cómo preparar la cartera para su recuperación.",

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
    "¿EPS no responde un requerimiento de pago? Qué hacer para recuperar la cartera",

  description:
    "Guía práctica para IPS, clínicas y prestadores de salud que enfrentan una EPS que no responde requerimientos de pago y necesitan definir una estrategia para recuperar cartera vencida.",

  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",

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
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },

  datePublished: "2026-05-12",
  dateModified: "2026-08-11",

  inLanguage: "es-CO",

  articleSection: "Recuperación de Cartera en Salud",

  keywords: [
    "EPS no responde requerimiento de pago",
    "EPS no responde",
    "requerimiento de pago EPS",
    "cobro de cartera EPS",
    "cartera vencida EPS",
    "cobro prejurídico EPS",
    "cobro judicial EPS",
    "recuperación de cartera IPS",
    "IPS cartera vencida",
    "EPS no paga",
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

      <EPSNoRespondeRequerimientos />
    </>
  );
}
