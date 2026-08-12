import InteresesMoratoriosCarteraEPS from "./InteresesMoratoriosCarteraEPS";

export const metadata = {
  title:
    "Intereses moratorios de cartera EPS: cómo calcular y reclamar | Guía Colombia 2026",

  description:
    "¿Una EPS le debe dinero a su IPS? Conozca cuándo pueden reclamarse intereses moratorios, cómo calcularlos, qué soportes necesita y cómo incluirlos en la recuperación de cartera en Colombia.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/intereses-moratorios-cartera-eps",
  },

  openGraph: {
    title:
      "Intereses moratorios de cartera EPS: cómo calcular y reclamar en Colombia",
    description:
      "Guía para IPS sobre intereses moratorios de cartera EPS: requisitos, liquidación, errores frecuentes y alternativas para recuperar capital e intereses.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/intereses-moratorios-cartera-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "Intereses moratorios de cartera EPS: cómo calcular y reclamar en Colombia",

    description:
      "Guía para IPS, clínicas y hospitales sobre intereses moratorios derivados de cartera EPS vencida, incluyendo requisitos, liquidación, documentación y alternativas de recuperación.",

    inLanguage: "es-CO",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/intereses-moratorios-cartera-eps",
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
      "intereses moratorios EPS",
      "intereses cartera EPS",
      "cartera vencida EPS",
      "cobro de cartera EPS",
      "cartera IPS Colombia",
      "intereses moratorios IPS",
      "liquidación de intereses",
      "recuperación de cartera salud",
      "proceso ejecutivo EPS",
      "cobro jurídico EPS",
      "facturas EPS",
      "cartera de salud Colombia",
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

      <InteresesMoratoriosCarteraEPS />
    </>
  );
}
