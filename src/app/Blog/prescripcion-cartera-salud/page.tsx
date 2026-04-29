import PrescripcionCartera from "./PrescripcionCartera";

export const metadata = {
  title:
    "Prescripción de cartera en salud en Colombia: evite perder millones por vencimiento de cobro | IPS y clínicas Bogotá",
  description:
    "Evite la prescripción de cartera en el sector salud en Colombia. Estrategias legales para IPS y clínicas en Bogotá: control de términos, cobro prejurídico y proceso ejecutivo para no perder el derecho de cobro.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/prescripcion-cartera-salud",
  },
  openGraph: {
    title:
      "Prescripción de cartera en salud en Colombia: cómo evitar perder el cobro",
    description:
      "Estrategias legales para evitar la prescripción de cartera EPS en Colombia y proteger el recaudo en IPS y clínicas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/prescripcion-cartera-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Prescripción de cartera en el sector salud en Colombia: cómo evitar perder el cobro",
    description:
      "Guía para evitar la prescripción de cartera EPS en Colombia mediante control de términos y estrategias jurídicas.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/prescripcion-cartera-salud",
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

      <PrescripcionCartera />
    </>
  );
}
