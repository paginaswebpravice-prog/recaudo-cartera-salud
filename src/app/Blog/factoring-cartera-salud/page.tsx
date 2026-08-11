import FactoringCarteraSalud from "./FactoringCarteraSalud";

export const metadata = {
  title:
    "Factoring de cartera en salud: ¿conviene para una IPS? | Guía Colombia 2026",

  description:
    "¿Una IPS debería vender su cartera mediante factoring? Conozca cómo funciona, sus ventajas, costos, riesgos y alternativas para recuperar cartera de EPS en Colombia.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/factoring-cartera-salud",
  },

  openGraph: {
    title: "Factoring de cartera en salud: ¿conviene para una IPS?",
    description:
      "Guía para IPS, clínicas y hospitales sobre factoring de cartera, liquidez, riesgos financieros y alternativas para recuperar cuentas pendientes de EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/factoring-cartera-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "Factoring de cartera en salud: ¿conviene para una IPS? | Guía Colombia 2026",

    description:
      "Guía sobre factoring de cartera en el sector salud, su funcionamiento, ventajas, riesgos financieros y alternativas para recuperar cartera de EPS en Colombia.",

    inLanguage: "es-CO",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://recaudocarteraipsyeps.com/Blog/factoring-cartera-salud",
    },

    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    articleSection: "Gestión financiera para IPS",

    keywords: [
      "factoring de cartera en salud",
      "factoring para IPS",
      "factoring de cartera EPS",
      "factoring Colombia",
      "venta de cartera EPS",
      "liquidez para IPS",
      "recuperación de cartera de salud",
      "cartera vencida EPS",
      "alternativas al factoring",
      "flujo de caja IPS",
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
