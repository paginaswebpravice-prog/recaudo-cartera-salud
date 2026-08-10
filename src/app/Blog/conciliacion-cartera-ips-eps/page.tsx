import type { Metadata } from "next";
import ConciliacionCarteraIPSEPS from "./ConciliacionCarteraIPSEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/conciliacion-cartera-ips-eps";

export const metadata: Metadata = {
  title:
    "Conciliación de cartera IPS y EPS en Colombia: cómo funciona y cómo recuperar el dinero",

  description:
    "Conozca cómo funciona la conciliación de cartera entre IPS y EPS en Colombia, cómo revisar facturas, glosas y saldos pendientes, y qué hacer para lograr acuerdos de pago y recuperar cartera vencida.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conciliación de cartera IPS y EPS en Colombia: cómo funciona y cómo recuperar el dinero",

    description:
      "Guía práctica para IPS, clínicas y prestadores de salud sobre conciliación de cartera, glosas, acuerdos de pago y recuperación de cartera vencida frente a EPS.",

    url: canonicalUrl,

    siteName: "Recaudo Cartera IPS y EPS",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conciliación de cartera entre IPS y EPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Conciliación de cartera IPS y EPS en Colombia: cómo funciona",

    description:
      "Aprenda cómo conciliar cartera con una EPS, revisar glosas y lograr acuerdos de pago para recuperar recursos de IPS y clínicas.",

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
    "Conciliación de cartera IPS y EPS en Colombia: cómo funciona y cómo recuperar el dinero",

  description:
    "Guía práctica sobre conciliación de cartera entre IPS y EPS en Colombia, revisión de facturas, glosas, acuerdos de pago y estrategias para recuperar cartera vencida.",

  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",

  author: {
    "@type": "Organization",
    name: "PRAVICE",
    url: "https://recaudocarteraipsyeps.com",
  },

  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
    url: "https://recaudocarteraipsyeps.com",

    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },

  datePublished: "2026-05-12",

  dateModified: "2026-08-04",

  inLanguage: "es-CO",

  articleSection: "Recuperación de cartera en salud",

  keywords: [
    "conciliación de cartera IPS EPS",
    "conciliación cartera EPS",
    "cartera IPS EPS",
    "acuerdos de pago EPS",
    "recuperación cartera EPS",
    "cartera vencida EPS",
    "glosas EPS",
    "cobro cartera IPS",
    "cobro prejurídico EPS",
    "cobro jurídico EPS",
    "recuperación cartera salud",
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

      <ConciliacionCarteraIPSEPS />
    </>
  );
}
