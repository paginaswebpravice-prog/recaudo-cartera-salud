import IndicadoresGlosasDevoluciones from "./IndicadoresGlosasDevoluciones";

export const metadata = {
  title:
    "Indicadores de glosas y devoluciones que toda IPS debe medir en Colombia | KPIs financieros",
  description:
    "Conozca los indicadores de glosas y devoluciones más importantes para IPS, clínicas y hospitales en Colombia. KPIs para mejorar el recaudo, reducir cartera vencida y fortalecer la gestión financiera.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/indicadores-glosas-devoluciones",
  },
  openGraph: {
    title: "Indicadores de glosas y devoluciones que toda IPS debe medir",
    description:
      "KPIs esenciales para controlar glosas, devoluciones y recuperación de cartera en el sector salud colombiano.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/indicadores-glosas-devoluciones",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Indicadores de glosas y devoluciones que toda IPS debe medir en Colombia",
    description:
      "Guía completa sobre KPIs de glosas, devoluciones, auditoría médica y recuperación de cartera para IPS, clínicas y hospitales colombianos.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/indicadores-glosas-devoluciones",
    keywords: [
      "indicadores glosas IPS",
      "KPIs glosas médicas",
      "devoluciones facturación médica",
      "gestión financiera IPS",
      "cartera EPS",
      "auditoría médica Colombia",
      "facturación médica",
      "indicadores sector salud",
      "glosas EPS",
      "recuperación de cartera salud",
    ],
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

      <IndicadoresGlosasDevoluciones />
    </>
  );
}
