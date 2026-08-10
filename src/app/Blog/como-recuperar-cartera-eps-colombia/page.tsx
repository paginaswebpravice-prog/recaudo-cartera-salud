import type { Metadata } from "next";
import ComoRecuperarCarteraEPS from "./ComoRecuperarCarteraEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/como-recuperar-cartera-eps-colombia";

export const metadata: Metadata = {
  title:
    "Cómo recuperar cartera de EPS en Colombia: guía paso a paso para IPS | 2026",

  description:
    "¿Una EPS le debe dinero a su IPS o clínica? Conozca cómo recuperar cartera vencida en Colombia mediante diagnóstico, cobro prejurídico, conciliación y acciones judiciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Cómo recuperar cartera de EPS en Colombia: guía paso a paso para IPS",
    description:
      "Guía práctica para IPS, clínicas y prestadores de salud que necesitan recuperar cartera vencida de EPS mediante una estrategia administrativa y jurídica.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Cómo recuperar cartera de EPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cómo recuperar cartera de EPS en Colombia: guía para IPS y clínicas",
    description:
      "Conozca los pasos para recuperar cartera vencida de EPS en Colombia y cuándo escalar el cobro a una estrategia jurídica.",
    images: ["https://recaudocarteraipsyeps.com/logo.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",

  "@id": `${canonicalUrl}#article`,

  headline:
    "Cómo recuperar cartera de EPS en Colombia: guía paso a paso para IPS",

  description:
    "Guía práctica para IPS, clínicas y prestadores de salud sobre recuperación de cartera vencida de EPS en Colombia mediante diagnóstico, gestión prejurídica, conciliación y acciones judiciales.",

  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",

  inLanguage: "es-CO",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

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

  articleSection: "Cobro y recuperación de cartera en salud",

  keywords: [
    "cómo recuperar cartera de EPS",
    "recuperación de cartera EPS",
    "cartera vencida EPS Colombia",
    "cobro de cartera EPS",
    "cobro prejurídico EPS",
    "cobro jurídico EPS",
    "cobro judicial EPS",
    "IPS cartera vencida",
    "recuperar cartera de IPS",
    "demanda contra EPS",
    "proceso ejecutivo EPS",
    "medidas cautelares EPS",
    "cartera de clínicas",
    "recuperación cartera sector salud",
  ],

  datePublished: "2026-05-12",
  dateModified: "2026-08-10",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <ComoRecuperarCarteraEPS />
    </>
  );
}
