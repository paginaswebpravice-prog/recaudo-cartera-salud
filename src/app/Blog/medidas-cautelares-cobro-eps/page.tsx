import MedidasCautelaresCobroEps from "./MedidasCautelaresCobroEps";

export const metadata = {
  title:
    "Medidas cautelares contra EPS: embargos para recuperar cartera | Colombia",
  description:
    "¿Una EPS no paga la cartera de una IPS? Conozca cómo funcionan las medidas cautelares, embargos y otras herramientas judiciales para proteger y recuperar cartera en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/medidas-cautelares-cobro-cartera-eps-colombia",
  },
  openGraph: {
    title: "Medidas cautelares contra EPS: embargos para recuperar cartera",
    description:
      "Conozca cuándo pueden solicitarse medidas cautelares en el cobro judicial de cartera a EPS, qué bienes pueden ser objeto de embargo y qué debe revisar una IPS antes de solicitarlas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/medidas-cautelares-cobro-cartera-eps-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Medidas cautelares contra EPS: embargos para recuperar cartera en Colombia",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre medidas cautelares, embargos y estrategias judiciales para la recuperación de cartera frente a EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/medidas-cautelares-cobro-cartera-eps-colombia",
    keywords: [
      "medidas cautelares contra EPS",
      "embargo contra EPS",
      "embargo de EPS",
      "cartera EPS",
      "cobro de cartera EPS",
      "recuperación de cartera EPS",
      "proceso ejecutivo contra EPS",
      "medidas cautelares cartera",
      "IPS Colombia",
      "clínicas Colombia",
      "hospitales Colombia",
    ],
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <MedidasCautelaresCobroEps />
    </>
  );
}
