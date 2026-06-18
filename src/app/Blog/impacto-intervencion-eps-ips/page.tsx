import ImpactoIntervencionEPSIPS from "./ImpactoIntervencionEPSIPS";

export const metadata = {
  title:
    "Impacto de las intervenciones de EPS en hospitales y clínicas | Riesgos y estrategias para IPS",
  description:
    "Conozca cómo afectan las intervenciones de EPS a hospitales, clínicas e IPS en Colombia. Riesgos financieros, cartera pendiente y medidas para proteger la sostenibilidad institucional.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/impacto-intervencion-eps-ips",
  },
  openGraph: {
    title: "Impacto de las intervenciones de EPS en hospitales y clínicas",
    description:
      "Análisis de los efectos financieros y operativos de las intervenciones de EPS sobre las IPS en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/impacto-intervencion-eps-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Impacto de las intervenciones de EPS en hospitales y clínicas",
    description:
      "Guía para IPS, hospitales y clínicas sobre los efectos de las intervenciones de EPS y las estrategias para proteger la cartera y la estabilidad financiera.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/impacto-intervencion-eps-ips",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "intervención EPS",
      "IPS Colombia",
      "hospitales Colombia",
      "clínicas Colombia",
      "cartera EPS",
      "riesgo financiero IPS",
      "crisis EPS",
      "recuperación de cartera",
      "sector salud Colombia",
      "vigilancia especial EPS",
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

      <ImpactoIntervencionEPSIPS />
    </>
  );
}
