import CarteraEPSIntervenida from "./CarteraEPSIntervenida";

export const metadata = {
  title:
    "EPS intervenida: ¿qué pasa con la cartera de una IPS y cómo recuperar los pagos? | Guía 2026",

  description:
    "Descubra qué ocurre con la cartera cuando una EPS entra en intervención, si las deudas continúan vigentes, cómo realizar el cobro y qué estrategias ayudan a proteger los recursos de IPS, clínicas y hospitales en Colombia.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/cartera-eps-intervenida",
  },

  openGraph: {
    title:
      "EPS intervenida: cómo recuperar la cartera y proteger los pagos de una IPS",

    description:
      "Guía completa para IPS, clínicas y hospitales sobre recuperación de cartera frente a EPS intervenidas, riesgos financieros y estrategias jurídicas en Colombia.",

    type: "article",

    url: "https://recaudocarteraipsyeps.com/Blog/cartera-eps-intervenida",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "EPS intervenida: qué pasa con la cartera y cómo recuperar los pagos pendientes",

    description:
      "Guía completa para IPS, hospitales y clínicas sobre los efectos de la intervención de una EPS, recuperación de cartera, acciones de cobro, conciliaciones y estrategias para proteger el flujo de caja.",

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
      "intervención EPS",
      "Superintendencia Nacional de Salud",
      "cartera EPS",
      "cartera IPS",
      "recuperación de cartera EPS",
      "hospitales Colombia",
      "clínicas Colombia",
      "cobro cartera salud",
      "pagos EPS",
      "liquidez IPS",
      "proceso de intervención EPS",
      "deudas EPS",
      "acciones judiciales EPS",
      "riesgo financiero IPS",
      "conciliación EPS",
      "recuperación de pagos EPS",
      "intervención administrativa EPS",
      "prestadores de salud Colombia",
      "cartera sector salud",
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
