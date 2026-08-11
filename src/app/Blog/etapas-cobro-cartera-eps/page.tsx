import type { Metadata } from "next";
import EtapasCobroCarteraEPS from "./EtapasCobroCarteraEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/etapas-cobro-cartera-eps";

export const metadata: Metadata = {
  title: "Cómo cobrar cartera a EPS en Colombia: 4 etapas clave",
  description:
    "Aprenda cómo cobrar cartera a EPS en Colombia y recuperar cuentas vencidas de IPS mediante diagnóstico, cobro prejurídico, conciliación y acciones judiciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo cobrar cartera a EPS en Colombia: 4 etapas clave",
    description:
      "Guía práctica para IPS y clínicas sobre recuperación de cartera vencida, cobro prejurídico, conciliación y acciones judiciales frente a EPS.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo cobrar cartera a EPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo cobrar cartera a EPS en Colombia: 4 etapas clave",
    description:
      "Guía práctica para recuperar cartera vencida de IPS frente a EPS en Colombia.",
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

  headline: "Cómo cobrar cartera a EPS en Colombia: 4 etapas clave",

  description:
    "Guía práctica sobre cómo cobrar cartera a EPS en Colombia, desde el diagnóstico de las cuentas vencidas hasta la gestión prejurídica, conciliación y evaluación de acciones judiciales.",

  image: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],

  author: {
    "@type": "Organization",
    name: "PRAVICE",
  },

  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },

  datePublished: "2026-05-13",
  dateModified: "2026-08-11",

  inLanguage: "es-CO",

  articleSection: "Recaudo de cartera en salud",

  keywords: [
    "cómo cobrar cartera a EPS",
    "cobro de cartera EPS",
    "recuperación de cartera EPS",
    "cartera vencida IPS",
    "cobro prejurídico EPS",
    "cobro jurídico EPS",
    "cartera hospitalaria",
    "cuentas por cobrar IPS",
    "recaudo de cartera en salud",
    "recuperación de cartera en Colombia",
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

      <EtapasCobroCarteraEPS />
    </>
  );
}
