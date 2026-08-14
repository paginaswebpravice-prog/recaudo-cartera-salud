import ProcesoEjecutivoEPS from "./ProcesoEjecutivoEPS";

export const metadata = {
  title:
    "Proceso ejecutivo contra EPS en Colombia: requisitos y cómo recuperar cartera",
  description:
    "¿Una EPS no paga la cartera de su IPS? Conozca cuándo procede el proceso ejecutivo, qué documentos necesita, cuáles son sus etapas y cómo proteger el recaudo.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/proceso-ejecutivo-contra-eps",
  },
  openGraph: {
    title:
      "Proceso ejecutivo contra EPS: requisitos para recuperar cartera en Colombia",
    description:
      "Guía práctica para IPS, clínicas y hospitales: requisitos, documentos, etapas, medidas cautelares y errores frecuentes al cobrar judicialmente una cartera EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/proceso-ejecutivo-contra-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Proceso ejecutivo contra EPS en Colombia: requisitos y cómo recuperar cartera",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre el proceso ejecutivo contra EPS, sus requisitos, documentación, etapas, medidas cautelares y recuperación de cartera.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/proceso-ejecutivo-contra-eps",
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
      "proceso ejecutivo contra EPS",
      "demandar una EPS",
      "proceso ejecutivo EPS Colombia",
      "cobro judicial cartera EPS",
      "recuperación de cartera EPS",
      "cartera vencida IPS",
      "requisitos proceso ejecutivo",
      "título ejecutivo EPS",
      "medidas cautelares contra EPS",
      "cobro de cartera IPS",
      "cartera EPS Colombia",
      "abogado cartera EPS",
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

      <ProcesoEjecutivoEPS />
    </>
  );
}
