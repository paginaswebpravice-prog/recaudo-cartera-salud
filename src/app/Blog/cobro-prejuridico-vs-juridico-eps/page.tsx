import type { Metadata } from "next";
import CobroPrejuridicoVsJuridicoEPS from "./CobroPrejuridicoVsJuridicoEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/cobro-prejuridico-vs-juridico-eps";

export const metadata: Metadata = {
  title:
    "Cobro prejurídico vs jurídico a EPS: ¿cuál conviene para recuperar cartera?",

  description:
    "Cobro prejurídico vs jurídico a EPS en Colombia: conozca sus diferencias, ventajas, costos, riesgos y cuándo conviene escalar la recuperación de cartera de una IPS.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cobro prejurídico vs jurídico a EPS: ¿cuál conviene para recuperar cartera?",
    description:
      "Conozca las diferencias entre cobro prejurídico y jurídico a EPS, cuándo utilizar cada estrategia y cómo proteger la cartera vencida de su IPS o clínica.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Cobro prejurídico y jurídico a EPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cobro prejurídico vs jurídico a EPS: ¿cuál conviene para recuperar cartera?",
    description:
      "Diferencias, ventajas y momento adecuado para pasar del cobro prejurídico al jurídico en la recuperación de cartera de IPS y clínicas.",
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
    "Cobro prejurídico vs jurídico a EPS: ¿cuál conviene para recuperar cartera?",

  description:
    "Guía práctica sobre las diferencias entre cobro prejurídico y jurídico a EPS en Colombia, sus ventajas, riesgos y el momento adecuado para escalar la recuperación de cartera.",

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
  dateModified: "2026-08-10",

  inLanguage: "es-CO",

  articleSection: "Cobro de cartera EPS",

  keywords: [
    "cobro prejurídico EPS",
    "cobro jurídico EPS",
    "cobro de cartera EPS",
    "cartera vencida EPS",
    "recuperación de cartera IPS",
    "cobranza EPS Colombia",
    "demanda contra EPS",
    "cobro judicial EPS",
    "conciliación de cartera EPS",
    "cartera de clínicas",
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

      <CobroPrejuridicoVsJuridicoEPS />
    </>
  );
}
