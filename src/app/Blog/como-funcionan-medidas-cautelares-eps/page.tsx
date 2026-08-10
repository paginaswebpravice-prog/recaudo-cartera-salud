import type { Metadata } from "next";
import ComoFuncionanMedidasCautelaresEPS from "./ComoFuncionanMedidasCautelaresEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/como-funcionan-medidas-cautelares-eps";

export const metadata: Metadata = {
  title:
    "Medidas cautelares contra EPS en Colombia: cómo funcionan y cuándo aplican | Guía 2026",

  description:
    "¿Se pueden pedir medidas cautelares contra una EPS? Conozca cómo funcionan los embargos en procesos de cobro de cartera, qué debe acreditar una IPS y qué límites existen sobre los recursos del sistema de salud.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Medidas cautelares contra EPS: cómo funcionan y cuándo pueden solicitarse",

    description:
      "Guía 2026 para IPS y clínicas sobre medidas cautelares, embargo de recursos, procesos ejecutivos y recuperación de cartera frente a EPS en Colombia.",

    url: canonicalUrl,

    siteName: "Recaudo Cartera IPS y EPS",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Medidas cautelares contra EPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Medidas cautelares contra EPS: cómo funcionan y cuándo pueden solicitarse",

    description:
      "Conozca cuándo una IPS puede solicitar medidas cautelares dentro de un proceso de cobro de cartera contra una EPS en Colombia.",

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
    "Medidas cautelares contra EPS en Colombia: cómo funcionan y cuándo aplican",

  description:
    "Guía sobre el funcionamiento de las medidas cautelares en procesos de recuperación de cartera contra EPS en Colombia, sus requisitos, límites y principales consideraciones para IPS y prestadores de salud.",

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
    "medidas cautelares EPS",
    "medidas cautelares contra EPS",
    "embargo EPS Colombia",
    "embargo recursos EPS",
    "cartera vencida EPS",
    "demanda EPS",
    "proceso ejecutivo EPS",
    "cobro jurídico EPS",
    "recuperación cartera IPS",
    "cobro cartera salud",
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

      <ComoFuncionanMedidasCautelaresEPS />
    </>
  );
}
