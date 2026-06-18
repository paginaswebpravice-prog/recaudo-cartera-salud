import SenalesInsolvenciaEPS from "./SenalesInsolvenciaEPS";

export const metadata = {
  title:
    "Señales de alerta de una EPS con riesgo de insolvencia | Guía para IPS y hospitales en Colombia",
  description:
    "Conozca las principales señales financieras, operativas y administrativas que pueden indicar riesgo de insolvencia en una EPS. Guía práctica para IPS, clínicas y hospitales en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/senales-insolvencia-eps",
  },
  openGraph: {
    title: "Señales de alerta de una EPS con riesgo de insolvencia",
    description:
      "Indicadores clave para identificar posibles problemas financieros en EPS y proteger la cartera de las IPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/senales-insolvencia-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Señales de alerta de una EPS con riesgo de insolvencia",
    description:
      "Guía para IPS, clínicas y hospitales sobre indicadores que pueden anticipar problemas financieros, intervenciones o liquidaciones de EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/senales-insolvencia-eps",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "insolvencia EPS",
      "riesgo financiero EPS",
      "cartera EPS",
      "IPS Colombia",
      "intervención EPS",
      "liquidación EPS",
      "hospitales Colombia",
      "sector salud Colombia",
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

      <SenalesInsolvenciaEPS />
    </>
  );
}
