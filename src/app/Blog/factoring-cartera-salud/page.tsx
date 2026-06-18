import FactoringCarteraSalud from "./FactoringCarteraSalud";

export const metadata = {
  title:
    "Factoring de cartera en salud: ventajas, riesgos y alternativas para IPS en Colombia",
  description:
    "Conozca qué es el factoring de cartera en salud, sus ventajas, riesgos financieros y alternativas para IPS, clínicas y hospitales en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/factoring-cartera-salud",
  },
  openGraph: {
    title: "Factoring de cartera en salud: ventajas, riesgos y alternativas",
    description:
      "Guía para IPS, clínicas y hospitales sobre factoring de cartera, liquidez y recuperación financiera en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/factoring-cartera-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Factoring de cartera en salud: ventajas, riesgos y alternativas",
    description:
      "Análisis del factoring de cartera para IPS, clínicas y hospitales en Colombia, incluyendo riesgos, beneficios y alternativas de recuperación.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/factoring-cartera-salud",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "factoring cartera salud",
      "factoring IPS",
      "venta de cartera EPS",
      "liquidez IPS",
      "recuperación de cartera salud",
      "factoring Colombia",
      "cartera EPS",
      "flujo de caja IPS",
      "alternativas al factoring",
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

      <FactoringCarteraSalud />
    </>
  );
}
