import PreparacionLiquidacionEPS from "./PreparacionLiquidacionEPS";

export const metadata = {
  title:
    "¿Qué hacer si una EPS puede ser liquidada? Guía para IPS y clínicas | PRAVICE",
  description:
    "¿Una EPS presenta problemas financieros o está en intervención? Conozca qué debe hacer una IPS para proteger su cartera, documentar acreencias y prepararse ante una posible liquidación en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/preparacion-liquidacion-eps",
  },
  openGraph: {
    title:
      "¿Qué hacer si una EPS puede ser liquidada? Proteja la cartera de su IPS",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre cartera, acreencias, liquidez y recuperación de recursos frente a una posible liquidación de EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/preparacion-liquidacion-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "¿Qué hacer si una EPS puede ser liquidada? Guía para IPS sobre cartera y pagos",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre cómo proteger y gestionar su cartera frente a una posible intervención o liquidación de una EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/preparacion-liquidacion-eps",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "liquidación EPS",
      "qué hacer si liquidan una EPS",
      "cartera EPS",
      "cartera IPS",
      "intervención EPS",
      "acreencias EPS",
      "recuperación de cartera EPS",
      "IPS y EPS Colombia",
      "riesgo financiero IPS",
      "cobro de cartera EPS",
      "pagos de EPS a IPS",
      "liquidación de EPS Colombia",
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

      <PreparacionLiquidacionEPS />
    </>
  );
}
