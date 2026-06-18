import EquipoRespuestaGlosas from "./EquipoRespuestaGlosas";

export const metadata = {
  title:
    "Cómo construir un equipo efectivo de respuesta a glosas médicas | IPS y clínicas en Colombia",
  description:
    "Aprenda cómo estructurar un equipo de respuesta a glosas médicas en Colombia. Roles, indicadores, procesos y herramientas para mejorar la recuperación de cartera en IPS.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/equipo-respuesta-glosas",
  },
  openGraph: {
    title: "Cómo construir un equipo efectivo de respuesta a glosas médicas",
    description:
      "Roles, procesos y herramientas para fortalecer la recuperación de cartera mediante una gestión eficiente de glosas médicas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/equipo-respuesta-glosas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo construir un equipo efectivo de respuesta a glosas médicas",
    description:
      "Guía para IPS, clínicas y hospitales sobre cómo conformar equipos especializados en respuesta a glosas médicas y recuperación de cartera.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/equipo-respuesta-glosas",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "glosas médicas",
      "respuesta a glosas",
      "IPS Colombia",
      "recuperación de cartera",
      "auditoría médica",
      "facturación médica",
      "cartera EPS",
      "gestión financiera IPS",
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

      <EquipoRespuestaGlosas />
    </>
  );
}
