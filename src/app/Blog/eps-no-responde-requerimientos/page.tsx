import type { Metadata } from "next";
import EPSNoRespondeRequerimientos from "./EPSNoRespondeRequerimientos";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/eps-no-responde-requerimientos";

export const metadata: Metadata = {
  title:
    "Qué hacer si una EPS no responde requerimientos de pago en Colombia | Guía 2026",
  description:
    "Conozca qué hacer cuando una EPS no responde requerimientos de pago en Colombia y cómo proteger la recuperación de cartera de IPS y clínicas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Qué hacer si una EPS no responde requerimientos de pago en Colombia",
    description:
      "Guía jurídica para IPS y clínicas sobre cómo actuar cuando una EPS ignora requerimientos de pago.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "EPS no responde requerimientos de pago",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Qué hacer si una EPS no responde requerimientos de pago en Colombia",
    description:
      "Cómo actuar jurídicamente cuando una EPS no responde cobros o requerimientos.",
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
    "Qué hacer si una EPS no responde requerimientos de pago en Colombia",
  description:
    "Conozca qué hacer cuando una EPS no responde requerimientos de pago en Colombia y cómo proteger la recuperación de cartera de IPS y clínicas.",
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
    "EPS no responde requerimientos",
    "requerimiento de pago EPS",
    "cobro cartera EPS",
    "IPS cartera vencida EPS",
    "demanda EPS Colombia",
    "recuperación cartera salud",
    "EPS mora pagos",
    "cobro jurídico EPS",
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
