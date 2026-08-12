import GlosasAdministrativasSalud from "./GlosasAdministrativasSalud";

export const metadata = {
  title:
    "Glosas administrativas en salud: causas y cómo reducirlas | IPS Colombia",

  description:
    "Conozca qué son las glosas administrativas en salud, por qué se presentan, cómo responderlas y qué hacer para reducir su impacto en la cartera de IPS en Colombia.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/glosas-administrativas-salud",
  },

  openGraph: {
    title:
      "Glosas administrativas en salud: causas y cómo reducirlas | IPS Colombia",

    description:
      "Guía práctica para IPS, clínicas y hospitales sobre causas de glosas administrativas, respuesta, prevención y recuperación de cartera.",

    type: "article",

    url: "https://recaudocarteraipsyeps.com/Blog/glosas-administrativas-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "Glosas administrativas en salud: causas y cómo reducirlas en IPS",

    description:
      "Guía práctica sobre las principales causas de glosas administrativas en salud, su impacto en la cartera de las IPS y las estrategias para prevenirlas, responderlas y reducir su impacto financiero.",

    inLanguage: "es-CO",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/glosas-administrativas-salud",
    },

    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    keywords: [
      "glosas administrativas en salud",
      "glosas administrativas IPS",
      "glosas médicas Colombia",
      "causas de glosas administrativas",
      "respuesta a glosas",
      "cómo evitar glosas",
      "cartera EPS",
      "recuperación de cartera IPS",
      "facturación en salud",
      "glosas Colombia",
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

      <GlosasAdministrativasSalud />
    </>
  );
}
