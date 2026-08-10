import type { Metadata } from "next";
import CuantoTardaDemandaEPSCartera from "./CuantoTardaDemandaEPSCartera";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/cuanto-tarda-demanda-eps-cartera";

export const metadata: Metadata = {
  title:
    "¿Cuánto tarda una demanda contra una EPS? Tiempos y etapas | Colombia 2026",

  description:
    "¿Cuánto tarda una demanda contra una EPS por cartera vencida? Conozca las etapas del proceso, qué puede retrasarlo y cómo preparar el cobro para recuperar cartera en salud.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "¿Cuánto tarda una demanda contra una EPS? Tiempos y etapas | Colombia 2026",

    description:
      "Conozca cuánto puede tardar una demanda contra una EPS por cartera vencida, cuáles son sus etapas y qué factores pueden acelerar o retrasar el recaudo.",

    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Demanda contra EPS por cartera vencida en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "¿Cuánto tarda una demanda contra una EPS? | Colombia 2026",

    description:
      "Etapas, tiempos, posibles retrasos y recomendaciones para recuperar cartera vencida de EPS mediante acciones de cobro.",

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
    "¿Cuánto tarda una demanda contra una EPS por cartera vencida en Colombia?",

  description:
    "Guía práctica sobre cuánto puede tardar una demanda contra una EPS por cartera vencida en Colombia, sus principales etapas, factores que afectan el proceso y estrategias para preparar adecuadamente la recuperación de cartera.",

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
  dateModified: "2026-08-10",

  inLanguage: "es-CO",

  articleSection: "Recuperación de cartera en salud",

  keywords: [
    "cuánto tarda una demanda contra una EPS",
    "demanda contra EPS por cartera vencida",
    "proceso ejecutivo contra EPS",
    "demanda IPS contra EPS",
    "cartera vencida EPS",
    "cobro de cartera EPS",
    "recuperación de cartera en salud",
    "demanda ejecutiva EPS Colombia",
    "cómo cobrar cartera a una EPS",
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

      <CuantoTardaDemandaEPSCartera />
    </>
  );
}
