import type { Metadata } from "next";
import NoVenderCarteraEps from "./NoVenderCarteraEps";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/no-vender-cartera-eps";

export const metadata: Metadata = {
  title: "¿Vender cartera EPS o recuperarla? Lo que debe saber una IPS | 2026",

  description:
    "¿Conviene vender la cartera de una EPS? Conozca las diferencias entre vender y recuperar cartera, sus riesgos y cuándo una estrategia jurídica puede ser una mejor alternativa para una IPS.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "¿Vender cartera EPS o recuperarla? Una decisión clave para las IPS",
    description:
      "Analizamos qué implica vender cartera EPS, qué alternativas existen para recuperarla y qué debería revisar una IPS antes de tomar una decisión.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",
    title: "¿Vender cartera EPS o recuperarla? Una decisión clave para las IPS",
    description:
      "Qué debe evaluar una IPS antes de vender cartera EPS y cuándo puede ser conveniente recuperar las obligaciones por vías jurídicas.",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline: "¿Vender cartera EPS o recuperarla? Lo que debe saber una IPS",

  description:
    "Análisis práctico para IPS, clínicas y prestadores de salud sobre las diferencias entre vender cartera EPS y adelantar estrategias para recuperar las obligaciones pendientes.",

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
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },

  image: "https://recaudocarteraipsyeps.com/logo.png",

  datePublished: "2026-05-12",
  dateModified: "2026-08-13",

  inLanguage: "es-CO",

  articleSection: "Recuperación de cartera EPS",

  keywords: [
    "vender cartera EPS",
    "venta de cartera EPS",
    "cartera EPS Colombia",
    "recuperación de cartera EPS",
    "cartera vencida IPS",
    "cobro de cartera a EPS",
    "recuperar cartera IPS",
    "cartera de clínicas y hospitales",
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

      <NoVenderCarteraEps />
    </>
  );
}
