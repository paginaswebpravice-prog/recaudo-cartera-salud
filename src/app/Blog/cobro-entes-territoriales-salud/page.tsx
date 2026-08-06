import CobroEntesTerritoriales from "./CobroEntesTerritoriales";

export const metadata = {
  title:
    "Cobro de cartera a entes territoriales en Colombia (2026): Cómo recuperar pagos de Secretarías de Salud, departamentos y municipios",

  description:
    "Aprenda cómo recuperar cartera de Secretarías de Salud, departamentos, municipios y demás entes territoriales. Guía completa para IPS, clínicas y hospitales sobre conciliación, cobro administrativo, cobro prejurídico y procesos judiciales en Colombia.",

  keywords: [
    "cobro de cartera entes territoriales",
    "recuperar cartera secretaría de salud",
    "cobro cartera departamentos",
    "cobro cartera municipios",
    "cartera sector salud público",
    "cobro judicial entidades públicas",
    "conciliación cartera salud",
    "IPS cartera entes territoriales",
    "recuperación de cartera Colombia",
    "abogados cobro cartera salud",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/cobro-entes-territoriales-salud",
  },

  openGraph: {
    title:
      "Cómo cobrar cartera a entes territoriales en Colombia | Guía completa para IPS y clínicas",

    description:
      "Descubra cómo recuperar pagos pendientes de Secretarías de Salud, gobernaciones y entidades públicas mediante estrategias administrativas y jurídicas.",

    type: "article",

    url: "https://recaudocarteraipsyeps.com/Blog/cobro-entes-territoriales-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Cobro de cartera a entes territoriales en Colombia: guía completa para IPS, hospitales y clínicas",

    description:
      "Aprenda cómo recuperar cartera frente a Secretarías de Salud, departamentos, municipios y demás entidades públicas mediante estrategias administrativas, conciliaciones y acciones judiciales.",

    inLanguage: "es-CO",

    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cobro-entes-territoriales-salud",

    keywords: [
      "cobro cartera entes territoriales",
      "cartera salud Colombia",
      "secretaría de salud",
      "IPS Colombia",
      "recuperación cartera hospitales",
      "cobro judicial entidades públicas",
      "conciliación cartera",
      "cobro prejurídico",
      "recuperación cartera sector salud",
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

      <CobroEntesTerritoriales />
    </>
  );
}
