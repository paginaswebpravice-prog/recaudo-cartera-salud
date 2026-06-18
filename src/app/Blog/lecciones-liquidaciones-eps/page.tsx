import LeccionesLiquidacionesEPS from "./LeccionesLiquidacionesEPS";

export const metadata = {
  title:
    "Lecciones aprendidas de las liquidaciones de EPS en Colombia | Guía para IPS y clínicas",
  description:
    "Analice las principales lecciones que han dejado las liquidaciones de EPS en Colombia y conozca las estrategias que pueden implementar las IPS para proteger su cartera y estabilidad financiera.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/lecciones-liquidaciones-eps",
  },
  openGraph: {
    title: "Lecciones aprendidas de las liquidaciones de EPS en Colombia",
    description:
      "Recomendaciones para IPS, clínicas y hospitales frente a los riesgos derivados de las liquidaciones de EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/lecciones-liquidaciones-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lecciones aprendidas de las liquidaciones de EPS en Colombia",
    description:
      "Análisis de las principales enseñanzas que han dejado los procesos de liquidación de EPS y cómo las IPS pueden prepararse para reducir riesgos financieros.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/lecciones-liquidaciones-eps",
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

      <LeccionesLiquidacionesEPS />
    </>
  );
}
