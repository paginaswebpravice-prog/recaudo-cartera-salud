import JuezCompetenteDemandasEPS from "./JuezCompetenteDemandasEPS";

export const metadata = {
  title:
    "Qué juez conoce las demandas por cartera contra EPS en Colombia | Competencia judicial para IPS",
  description:
    "Conozca qué juez es competente para tramitar demandas por cartera contra EPS en Colombia. Guía para IPS, clínicas y hospitales sobre competencia judicial, cuantía y jurisdicción.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/juez-competente-demandas-eps",
  },
  openGraph: {
    title: "Qué juez conoce las demandas por cartera contra EPS en Colombia",
    description:
      "Competencia judicial, cuantía y jurisdicción en procesos de recuperación de cartera contra EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/juez-competente-demandas-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Qué juez conoce las demandas por cartera contra EPS en Colombia",
    description:
      "Guía jurídica para IPS, clínicas y hospitales sobre competencia judicial en demandas por recuperación de cartera contra EPS.",
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
      "juez competente EPS",
      "demanda contra EPS",
      "cartera EPS Colombia",
      "proceso ejecutivo EPS",
      "competencia judicial EPS",
      "IPS Colombia",
      "cobro jurídico EPS",
      "recuperación de cartera salud",
      "Bogotá",
      "Colombia",
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
