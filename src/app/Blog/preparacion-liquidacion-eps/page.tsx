import PreparacionLiquidacionEPS from "./PreparacionLiquidacionEPS";

export const metadata = {
  title:
    "Cómo prepararse ante una posible liquidación de una EPS | Guía para IPS y hospitales en Colombia",
  description:
    "Aprenda cómo proteger la cartera, reducir riesgos financieros y prepararse ante una posible liquidación de una EPS en Colombia. Guía práctica para IPS, clínicas y hospitales.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/preparacion-liquidacion-eps",
  },
  openGraph: {
    title:
      "Cómo prepararse ante una posible liquidación de una EPS en Colombia",
    description:
      "Estrategias preventivas para IPS, clínicas y hospitales frente al riesgo de liquidación de EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/preparacion-liquidacion-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo prepararse ante una posible liquidación de una EPS",
    description:
      "Guía para IPS, clínicas y hospitales sobre gestión de riesgos financieros y protección de cartera frente a una posible liquidación de EPS.",
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
      "cartera EPS",
      "IPS Colombia",
      "hospitales Colombia",
      "intervención EPS",
      "riesgo financiero IPS",
      "recuperación de cartera EPS",
      "sector salud Colombia",
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
