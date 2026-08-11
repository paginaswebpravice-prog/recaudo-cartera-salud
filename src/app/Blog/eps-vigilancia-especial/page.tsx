import type { Metadata } from "next";
import EPSVigilanciaEspecial from "./EPSVigilanciaEspecial";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/eps-vigilancia-especial";

export const metadata: Metadata = {
  title:
    "EPS bajo vigilancia especial: qué significa para las IPS y su cartera | Guía 2026",

  description:
    "¿Qué pasa cuando una EPS entra en vigilancia especial? Conozca los riesgos para IPS, clínicas y hospitales, cómo monitorear la cartera y qué hacer para proteger el recaudo en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "EPS bajo vigilancia especial: ¿qué pasa con la cartera de las IPS?",
    description:
      "Guía para IPS, clínicas y hospitales sobre vigilancia especial de EPS, riesgos de cartera, liquidez y medidas para proteger el recaudo en Colombia.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "EPS bajo vigilancia especial y riesgos para la cartera de las IPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EPS bajo vigilancia especial: ¿qué pasa con la cartera de las IPS?",
    description:
      "Conozca qué significa la vigilancia especial de una EPS y cómo pueden prepararse las IPS, clínicas y hospitales frente a posibles riesgos de cartera.",
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
    "EPS bajo vigilancia especial: qué significa para las IPS y su cartera",

  description:
    "Guía para IPS, clínicas y hospitales sobre qué significa que una EPS esté bajo vigilancia especial, cómo puede afectar la gestión de cartera y qué medidas pueden adoptarse para reducir riesgos financieros.",

  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",

  author: {
    "@type": "Organization",
    name: "PRAVICE",
  },

  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },

  datePublished: "2026-05-12",
  dateModified: "2026-05-12",

  inLanguage: "es-CO",

  articleSection: "Recuperación de cartera en salud",

  keywords: [
    "EPS bajo vigilancia especial",
    "qué significa vigilancia especial EPS",
    "vigilancia especial EPS Colombia",
    "cartera de EPS",
    "cartera IPS",
    "riesgo financiero EPS",
    "IPS y EPS",
    "recuperación de cartera EPS",
    "Superintendencia Nacional de Salud",
    "EPS intervenida",
    "liquidez IPS",
    "cobro de cartera EPS",
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

      <EPSVigilanciaEspecial />
    </>
  );
}
