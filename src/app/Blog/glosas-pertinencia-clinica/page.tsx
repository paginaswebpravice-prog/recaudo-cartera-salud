import GlosasPertinenciaClinica from "./GlosasPertinenciaClinica";

export const metadata = {
  title:
    "Glosas médicas por pertinencia clínica: cómo responderlas en Colombia",
  description:
    "Guía práctica para IPS, clínicas y hospitales sobre cómo responder glosas por pertinencia clínica utilizando argumentos médicos, técnicos y jurídicos que faciliten la recuperación de cartera.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/glosas-pertinencia-clinica",
  },
  openGraph: {
    title:
      "Glosas médicas por pertinencia clínica: cómo responderlas en Colombia",
    description:
      "Aprenda a responder glosas clínicas con soporte médico, científico y jurídico para proteger los ingresos de su IPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/glosas-pertinencia-clinica",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Glosas médicas por pertinencia clínica: cómo responderlas en Colombia",
    description:
      "Guía especializada para responder glosas por pertinencia clínica y fortalecer la recuperación de cartera en IPS, clínicas y hospitales.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/glosas-pertinencia-clinica",
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
      "glosas médicas",
      "respuesta a glosas",
      "IPS Colombia",
      "auditoría médica",
      "recuperación de cartera",
      "facturación en salud",
      "glosas EPS",
      "cartera EPS",
      "hospitales Colombia",
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
