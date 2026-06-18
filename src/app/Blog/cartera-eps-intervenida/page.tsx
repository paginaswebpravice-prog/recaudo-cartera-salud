import CarteraEPSIntervenida from "./CarteraEPSIntervenida";

export const metadata = {
  title:
    "Qué pasa con la cartera cuando una EPS entra en intervención | Impacto para IPS y hospitales en Colombia",
  description:
    "Conozca qué ocurre con la cartera de una IPS cuando una EPS entra en intervención. Riesgos, pagos pendientes, acciones de cobro y estrategias para proteger recursos en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/cartera-eps-intervenida",
  },
  openGraph: {
    title: "Qué pasa con la cartera cuando una EPS entra en intervención",
    description:
      "Impacto de las intervenciones de EPS sobre la cartera de IPS, clínicas y hospitales en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/cartera-eps-intervenida",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Qué pasa con la cartera cuando una EPS entra en intervención",
    description:
      "Guía para IPS, clínicas y hospitales sobre los efectos de las intervenciones de EPS en la recuperación de cartera en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cartera-eps-intervenida",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "EPS intervenida",
      "cartera EPS",
      "intervención EPS Colombia",
      "recuperación de cartera IPS",
      "hospitales Colombia",
      "clínicas Colombia",
      "cobro cartera salud",
      "Superintendencia Nacional de Salud",
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

      <CarteraEPSIntervenida />
    </>
  );
}
