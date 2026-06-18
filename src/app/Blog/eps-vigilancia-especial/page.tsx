import EPSVigilanciaEspecial from "./EPSVigilanciaEspecial";

export const metadata = {
  title:
    "EPS bajo vigilancia especial: qué significa para los prestadores de salud | Colombia",
  description:
    "Conozca qué implica que una EPS esté bajo vigilancia especial y cómo puede afectar la cartera, liquidez y estabilidad financiera de IPS, clínicas y hospitales en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/eps-vigilancia-especial",
  },
  openGraph: {
    title:
      "EPS bajo vigilancia especial: qué significa para los prestadores de salud",
    description:
      "Consecuencias financieras y operativas para IPS, hospitales y clínicas cuando una EPS entra en vigilancia especial.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/eps-vigilancia-especial",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "EPS bajo vigilancia especial: qué significa para los prestadores de salud",
    description:
      "Guía para IPS, hospitales y clínicas sobre los efectos de la vigilancia especial de EPS y las estrategias para proteger la recuperación de cartera en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/eps-vigilancia-especial",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "EPS vigilancia especial",
      "Superintendencia Nacional de Salud",
      "cartera EPS",
      "riesgos financieros IPS",
      "hospitales Colombia",
      "clínicas Colombia",
      "recuperación de cartera",
      "EPS intervenidas",
      "liquidez IPS",
      "sector salud colombiano",
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

      <EPSVigilanciaEspecial />
    </>
  );
}
