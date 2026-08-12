import ImpactoIntervencionEPSIPS from "./ImpactoIntervencionEPSIPS";

export const metadata = {
  title:
    "Intervención de una EPS: ¿qué pasa con la cartera de las IPS? | Guía 2026",
  description:
    "¿Qué pasa con las IPS cuando una EPS es intervenida? Conozca los riesgos sobre la cartera, los pagos y el flujo de caja, y cómo proteger las cuentas por cobrar.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/impacto-intervencion-eps-ips",
  },
  openGraph: {
    title: "Intervención de una EPS: ¿qué pasa con la cartera de las IPS?",
    description:
      "Guía para IPS, clínicas y hospitales sobre cartera pendiente, retrasos de pago, flujo de caja y gestión financiera frente a la intervención de una EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/impacto-intervencion-eps-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Intervención de una EPS: ¿qué pasa con la cartera de las IPS?",
    description:
      "Guía para IPS, clínicas y hospitales sobre los efectos financieros de la intervención de una EPS, el manejo de cartera pendiente y las medidas para reducir riesgos.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/impacto-intervencion-eps-ips",
    },
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    dateModified: "2026-08-12",
    keywords: [
      "intervención EPS",
      "EPS intervenida",
      "cartera de IPS",
      "cartera EPS",
      "intervención de EPS Colombia",
      "riesgo financiero IPS",
      "pagos EPS",
      "cartera vencida EPS",
      "recuperación de cartera",
      "IPS Colombia",
      "hospitales Colombia",
      "clínicas Colombia",
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

      <ImpactoIntervencionEPSIPS />
    </>
  );
}
