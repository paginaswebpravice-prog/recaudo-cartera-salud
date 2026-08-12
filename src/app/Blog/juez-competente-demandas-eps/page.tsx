import JuezCompetenteDemandasEPS from "./JuezCompetenteDemandasEPS";

export const metadata = {
  title: "¿Qué juez conoce una demanda contra una EPS por cartera? Guía 2026",

  description:
    "¿Una IPS puede demandar a una EPS por cartera vencida? Conozca qué juez puede ser competente, cómo influyen la cuantía y el domicilio, y qué revisar antes de iniciar un proceso ejecutivo en Colombia.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/juez-competente-demandas-eps",
  },

  openGraph: {
    title: "¿Qué juez conoce una demanda contra una EPS por cartera? Guía 2026",

    description:
      "Guía práctica para IPS, clínicas y hospitales sobre juez competente, cuantía, competencia territorial y proceso ejecutivo para recuperar cartera frente a EPS.",

    type: "article",

    url: "https://recaudocarteraipsyeps.com/Blog/juez-competente-demandas-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "¿Qué juez conoce una demanda contra una EPS por cartera en Colombia?",

    description:
      "Guía práctica para IPS, clínicas y hospitales sobre competencia judicial, cuantía, competencia territorial y procesos ejecutivos relacionados con recuperación de cartera contra EPS en Colombia.",

    inLanguage: "es-CO",

    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/juez-competente-demandas-eps",

    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    keywords: [
      "qué juez conoce demanda contra EPS",
      "juez competente demanda EPS",
      "demanda contra EPS por cartera",
      "cartera EPS Colombia",
      "proceso ejecutivo contra EPS",
      "competencia judicial EPS",
      "IPS Colombia",
      "cobro jurídico EPS",
      "recuperación de cartera salud",
      "juez civil EPS",
      "demanda de IPS contra EPS",
      "cobro de cartera EPS",
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

      <JuezCompetenteDemandasEPS />
    </>
  );
}
