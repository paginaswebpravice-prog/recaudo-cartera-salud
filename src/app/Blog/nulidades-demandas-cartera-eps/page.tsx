import NulidadesDemandasEPS from "./NulidadesDemandasEPS";

export const metadata = {
  title:
    "Cómo evitar nulidades en demandas contra EPS por cartera vencida | Guía para IPS y clínicas",
  description:
    "Conozca los errores procesales que pueden generar nulidades en demandas contra EPS por cartera vencida en Colombia y cómo evitarlos para agilizar la recuperación judicial.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/nulidades-demandas-cartera-eps",
  },
  openGraph: {
    title: "Cómo evitar nulidades en demandas contra EPS por cartera vencida",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre errores procesales que pueden retrasar la recuperación judicial de cartera.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/nulidades-demandas-cartera-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo evitar nulidades en demandas contra EPS por cartera vencida",
    description:
      "Guía especializada para IPS, clínicas y hospitales sobre nulidades procesales en demandas contra EPS y recuperación de cartera en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/nulidades-demandas-cartera-eps",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "nulidades demanda EPS",
      "cartera vencida EPS",
      "proceso ejecutivo EPS",
      "errores procesales EPS",
      "demanda contra EPS Colombia",
      "cobro judicial IPS",
      "recuperación de cartera EPS",
      "nulidad procesal Colombia",
      "proceso ejecutivo salud",
      "abogados cobro cartera EPS",
    ],
  };

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
