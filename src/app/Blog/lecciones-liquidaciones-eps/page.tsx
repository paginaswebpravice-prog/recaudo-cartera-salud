import LeccionesLiquidacionesEPS from "./LeccionesLiquidacionesEPS";

export const metadata = {
  title: "Liquidación de EPS en Colombia: 7 lecciones para las IPS",
  description:
    "¿Qué puede aprender una IPS de la liquidación de una EPS? Conozca 7 lecciones para proteger la cartera, anticipar riesgos y mejorar el recaudo en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/lecciones-liquidaciones-eps",
  },
  openGraph: {
    title: "Liquidación de EPS en Colombia: 7 lecciones para las IPS",
    description:
      "Conozca las principales lecciones que dejan las liquidaciones de EPS y cómo las IPS pueden proteger su cartera, anticipar riesgos y fortalecer su liquidez.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/lecciones-liquidaciones-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Liquidación de EPS en Colombia: 7 lecciones para las IPS",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre las principales lecciones que dejan las liquidaciones de EPS y las estrategias para proteger la cartera y reducir riesgos financieros.",
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
    keywords: [
      "liquidación de EPS en Colombia",
      "liquidación EPS",
      "cartera IPS",
      "cartera EPS",
      "recuperación de cartera EPS",
      "riesgos financieros IPS",
      "acreencias IPS",
      "liquidación de EPS y cartera",
      "cobro de cartera salud",
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

      <LeccionesLiquidacionesEPS />
    </>
  );
}
