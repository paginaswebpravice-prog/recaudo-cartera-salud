import PrescripcionCartera from "./PrescripcionCartera";

export const metadata = {
  title:
    "Prescripción de cartera EPS: cómo evitar perder el derecho de cobro | Guía 2026",
  description:
    "¿Cuándo prescribe una cartera de una IPS frente a una EPS? Conozca los riesgos, términos, documentos y acciones jurídicas para proteger el cobro de facturas de servicios de salud en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/prescripcion-cartera-salud",
  },
  openGraph: {
    title:
      "Prescripción de cartera EPS: cómo evitar perder el derecho de cobro",
    description:
      "Guía para IPS, clínicas y prestadores sobre prescripción de facturas de servicios de salud, control de términos y recuperación de cartera.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/prescripcion-cartera-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Prescripción de cartera EPS: cómo evitar perder el derecho de cobro",
    description:
      "Guía práctica para IPS, clínicas y prestadores de servicios de salud sobre prescripción de cartera, facturas, control de términos y estrategias de recuperación en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/prescripcion-cartera-salud",
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
      "prescripción de cartera EPS",
      "prescripción cartera salud",
      "prescripción facturas servicios de salud",
      "cuándo prescribe una factura IPS",
      "cartera vencida EPS",
      "cobro cartera EPS",
      "proceso ejecutivo contra EPS",
      "recuperación cartera IPS",
      "prescripción cartera Colombia",
      "facturas IPS EPS",
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

      <PrescripcionCartera />
    </>
  );
}
