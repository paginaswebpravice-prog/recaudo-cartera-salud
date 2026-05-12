import type { Metadata } from "next";
import CuantoTardaDemandaEPSCartera from "./CuantoTardaDemandaEPSCartera";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/cuanto-tarda-demanda-eps-cartera";

export const metadata: Metadata = {
  title:
    "Cuánto tarda una demanda contra una EPS por cartera vencida en Colombia | Guía 2026",
  description:
    "Conozca cuánto puede tardar una demanda contra una EPS en Colombia por cartera vencida, qué factores afectan el proceso y cómo acelerar la recuperación de cartera en salud.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cuánto tarda una demanda contra una EPS por cartera vencida en Colombia",
    description:
      "Guía jurídica sobre tiempos, etapas y factores que afectan las demandas contra EPS por cartera vencida en Colombia.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Demanda contra EPS por cartera vencida en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cuánto tarda una demanda contra una EPS por cartera vencida en Colombia",
    description:
      "Conozca cuánto puede durar una demanda contra EPS y cómo acelerar el recaudo.",
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
    "Cuánto tarda una demanda contra una EPS por cartera vencida en Colombia",
  description:
    "Conozca cuánto puede tardar una demanda contra una EPS en Colombia por cartera vencida, qué factores afectan el proceso y cómo acelerar la recuperación de cartera en salud.",
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
  articleSection: "Recuperación de Cartera en Salud",
  keywords: [
    "cuánto tarda demanda contra EPS",
    "demanda EPS cartera vencida",
    "proceso ejecutivo EPS Colombia",
    "demanda IPS EPS",
    "cartera EPS Colombia",
    "recuperación cartera salud",
    "demanda ejecutiva EPS",
    "cobro cartera EPS",
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
