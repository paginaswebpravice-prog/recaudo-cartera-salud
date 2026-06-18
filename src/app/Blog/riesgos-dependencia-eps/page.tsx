import RiesgosDependenciaEPS from "./RiesgosDependenciaEPS";

export const metadata = {
  title:
    "Principales riesgos financieros para IPS que dependen de una sola EPS | Colombia",
  description:
    "Conozca los riesgos financieros de depender de una sola EPS y las estrategias para reducir la exposición a problemas de cartera, liquidez y sostenibilidad financiera en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/riesgos-dependencia-eps",
  },
  openGraph: {
    title:
      "Principales riesgos financieros para IPS que dependen de una sola EPS",
    description:
      "Cómo reducir la exposición financiera frente a retrasos de pago, intervenciones y crisis de EPS en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/riesgos-dependencia-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Principales riesgos financieros para IPS que dependen de una sola EPS",
    description:
      "Guía para IPS, clínicas y hospitales sobre los riesgos financieros asociados a la concentración de ingresos en una sola EPS y cómo mitigarlos.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/riesgos-dependencia-eps",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "riesgos financieros IPS",
      "dependencia EPS",
      "cartera EPS",
      "liquidez IPS",
      "flujo de caja IPS",
      "gestión financiera salud",
      "EPS intervenidas",
      "hospitales Colombia",
      "clínicas Colombia",
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

      <RiesgosDependenciaEPS />
    </>
  );
}
