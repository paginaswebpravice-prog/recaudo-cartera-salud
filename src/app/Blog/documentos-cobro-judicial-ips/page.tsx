import type { Metadata } from "next";
import DocumentosCobroJudicialIPS from "./DocumentosCobroJudicialIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/documentos-cobro-judicial-ips";

export const metadata: Metadata = {
  title:
    "Documentos que necesita una IPS para cobrar cartera judicialmente | Guía 2026",
  description:
    "Conozca qué documentos necesita una IPS para iniciar cobro judicial de cartera en Colombia. Requisitos clave para demandar EPS y recuperar pagos.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Documentos que necesita una IPS para cobrar cartera judicialmente",
    description:
      "Guía completa sobre los documentos y soportes necesarios para recuperar cartera EPS mediante procesos judiciales en Colombia.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Documentos para cobro judicial IPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Documentos que necesita una IPS para cobrar cartera judicialmente",
    description:
      "Requisitos y soportes necesarios para iniciar cobro judicial contra EPS en Colombia.",
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
  headline: "Documentos que necesita una IPS para cobrar cartera judicialmente",
  description:
    "Conozca qué documentos necesita una IPS para iniciar cobro judicial de cartera en Colombia.",
  image: "https://recaudocarteraipsyeps.com/logo.png",
  author: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
  },
  publisher: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  inLanguage: "es-CO",
  articleSection: "Cobro Judicial IPS",
  keywords: [
    "documentos cobro judicial IPS",
    "demanda EPS documentos",
    "requisitos cobrar EPS",
    "cartera judicial IPS",
    "soportes cartera EPS",
    "proceso ejecutivo EPS",
    "documentación IPS Colombia",
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
