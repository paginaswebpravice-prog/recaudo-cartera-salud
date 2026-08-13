import type { Metadata } from "next";
import NulidadesDemandasEPS from "./NulidadesDemandasEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/nulidades-demandas-cartera-eps";

export const metadata: Metadata = {
  title:
    "Nulidad en demandas contra EPS: errores que pueden retrasar el cobro | Guía 2026",

  description:
    "¿Una demanda contra una EPS puede terminar en nulidad? Conozca los errores procesales más frecuentes al cobrar cartera vencida y cómo reducir riesgos antes de demandar.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Nulidad en demandas contra EPS: errores que pueden retrasar el cobro",
    description:
      "Guía para IPS, clínicas y hospitales sobre nulidades procesales, errores frecuentes y recomendaciones para preparar correctamente una demanda contra una EPS.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nulidad en demandas contra EPS: errores que pueden retrasar el cobro",
    description:
      "Conozca los errores procesales que pueden retrasar una demanda contra una EPS por cartera vencida y cómo prevenirlos.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline:
    "Nulidad en demandas contra EPS: errores que pueden retrasar el cobro",

  description:
    "Guía para IPS, clínicas y hospitales sobre nulidades procesales, errores frecuentes y preparación de demandas contra EPS por cartera vencida en Colombia.",

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
  },

  articleSection: "Recuperación de cartera de IPS y EPS",

  keywords: [
    "nulidad demanda contra EPS",
    "nulidades procesales EPS",
    "demanda contra EPS por cartera vencida",
    "proceso ejecutivo contra EPS",
    "errores procesales demanda EPS",
    "cobro judicial de cartera EPS",
    "recuperación de cartera EPS",
    "cartera vencida IPS",
    "cobro cartera IPS",
    "demanda EPS Colombia",
  ],
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

      <NulidadesDemandasEPS />
    </>
  );
}
