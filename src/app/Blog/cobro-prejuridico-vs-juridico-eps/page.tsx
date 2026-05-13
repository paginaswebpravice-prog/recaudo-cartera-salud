import type { Metadata } from "next";
import CobroPrejuridicoVsJuridicoEPS from "./CobroPrejuridicoVsJuridicoEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/cobro-prejuridico-vs-juridico-eps";

export const metadata: Metadata = {
  title:
    "Cobro prejurídico vs cobro jurídico a EPS: diferencias y ventajas | Guía 2026",
  description:
    "Conozca las diferencias entre el cobro prejurídico y el cobro jurídico a EPS en Colombia, sus ventajas y cuándo aplicar cada estrategia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cobro prejurídico vs cobro jurídico a EPS: diferencias y ventajas",
    description:
      "Aprenda cuándo usar cobro prejurídico o jurídico para recuperar cartera EPS en Colombia.",
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
    title: "Cobro prejurídico vs cobro jurídico a EPS: diferencias y ventajas",
    description:
      "Diferencias entre cobro prejurídico y jurídico para recuperar cartera EPS.",
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
  headline: "Cobro prejurídico vs cobro jurídico a EPS: diferencias y ventajas",
  description:
    "Guía completa sobre las diferencias entre cobro prejurídico y cobro jurídico a EPS en Colombia.",
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
  articleSection: "Cobro de cartera EPS",
  keywords: [
    "cobro prejurídico EPS",
    "cobro jurídico EPS",
    "cartera EPS Colombia",
    "demanda contra EPS",
    "recuperación cartera salud",
    "IPS cartera vencida",
    "cobranza EPS",
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
