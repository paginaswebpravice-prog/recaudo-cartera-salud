import type { Metadata } from "next";
import DocumentosCobroJudicialIPS from "./DocumentosCobroJudicialIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/documentos-cobro-judicial-ips";

export const metadata: Metadata = {
  title:
    "Documentos para cobrar cartera a una EPS por vía judicial | Guía IPS 2026",

  description:
    "¿Qué documentos necesita una IPS para cobrar una cartera vencida a una EPS? Conozca los soportes, facturas, radicaciones, glosas y documentos jurídicos que conviene revisar antes de iniciar un cobro judicial en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Documentos para cobrar cartera a una EPS por vía judicial | Guía IPS 2026",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre los documentos y soportes que deben organizar antes de iniciar un cobro judicial de cartera contra una EPS.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Documentos para cobro judicial de cartera de IPS a EPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Documentos para cobrar cartera a una EPS por vía judicial",
    description:
      "Conozca qué documentos y soportes conviene revisar antes de iniciar el cobro judicial de cartera de una IPS contra una EPS en Colombia.",
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
    "Documentos para cobrar cartera a una EPS por vía judicial | Guía IPS 2026",

  description:
    "Guía práctica para IPS, clínicas y hospitales sobre la documentación que conviene organizar antes de iniciar un cobro judicial de cartera contra una EPS en Colombia.",

  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",

  author: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
  },

  publisher: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },

  datePublished: "2026-05-13",
  dateModified: "2026-08-11",

  inLanguage: "es-CO",

  articleSection: "Cobro Judicial de Cartera IPS",

  keywords: [
    "documentos cobro judicial IPS",
    "documentos para demandar una EPS",
    "cobro judicial cartera EPS",
    "cartera vencida IPS",
    "cobro de cartera a EPS",
    "proceso ejecutivo EPS",
    "facturas IPS EPS",
    "soportes cartera EPS",
    "radicación facturas EPS",
    "glosas EPS",
    "cobro jurídico IPS",
    "recuperación de cartera IPS",
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

      <DocumentosCobroJudicialIPS />
    </>
  );
}
