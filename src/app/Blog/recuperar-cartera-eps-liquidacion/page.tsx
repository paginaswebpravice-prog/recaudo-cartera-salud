import RecuperarCarteraEPSLiquidacion from "./RecuperarCarteraEPSLiquidacion";

export const metadata = {
  title:
    "Cómo recuperar cartera de una EPS en liquidación | Guía para IPS y hospitales en Colombia",
  description:
    "Conozca cómo reclamar créditos y recuperar cartera cuando una EPS entra en liquidación. Guía para IPS, clínicas y hospitales en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-eps-liquidacion",
  },
  openGraph: {
    title: "Cómo recuperar cartera de una EPS en liquidación",
    description:
      "Procedimientos administrativos y jurídicos para reclamar acreencias frente a EPS en liquidación en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-eps-liquidacion",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo recuperar cartera de una EPS en liquidación",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre recuperación de cartera y reclamación de acreencias frente a EPS en liquidación en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-eps-liquidacion",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "EPS en liquidación",
      "recuperar cartera EPS",
      "acreencias EPS",
      "liquidación EPS Colombia",
      "cobro cartera salud",
      "IPS Colombia",
      "hospitales Colombia",
      "clínicas Colombia",
      "reclamación de créditos",
      "cartera sector salud",
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

      <RecuperarCarteraEPSLiquidacion />
    </>
  );
}
