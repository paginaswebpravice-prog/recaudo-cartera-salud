import GlosasPertinenciaClinica from "./GlosasPertinenciaClinica";

const canonical =
  "https://recaudocarteraipsyeps.com/Blog/glosas-pertinencia-clinica";

export const metadata = {
  title:
    "Glosas por pertinencia clínica: cómo responderlas y recuperar cartera | Colombia",
  description:
    "¿Te glosaron una cuenta por pertinencia clínica? Conoce cómo analizar la objeción, qué soportes presentar y cómo responder glosas médicas para proteger el recaudo de tu IPS.",
  alternates: {
    canonical,
  },
  openGraph: {
    title:
      "Glosas por pertinencia clínica: cómo responderlas y recuperar cartera",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre análisis, respuesta y seguimiento de glosas por pertinencia clínica en Colombia.",
    type: "article",
    url: canonical,
    locale: "es_CO",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Glosas por pertinencia clínica: cómo responderlas y recuperar cartera",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre cómo analizar, sustentar y responder glosas por pertinencia clínica en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
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
      "glosas por pertinencia clínica",
      "cómo responder glosas",
      "glosas médicas",
      "glosas EPS",
      "respuesta a glosas",
      "pertinencia clínica",
      "auditoría médica",
      "glosas en salud",
      "facturación en salud",
      "recuperación de cartera",
      "cartera EPS",
      "IPS Colombia",
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

      <GlosasPertinenciaClinica />
    </>
  );
}
