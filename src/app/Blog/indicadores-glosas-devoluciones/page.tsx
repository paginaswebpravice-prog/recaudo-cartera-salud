import IndicadoresGlosasDevoluciones from "./IndicadoresGlosasDevoluciones";

export const metadata = {
  title:
    "Indicadores de glosas y devoluciones en IPS: 12 KPIs para mejorar el recaudo",
  description:
    "Conozca 12 indicadores de glosas y devoluciones que pueden ayudar a una IPS a detectar errores de facturación, controlar cartera y mejorar la recuperación de recursos frente a EPS.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/indicadores-glosas-devoluciones",
  },
  openGraph: {
    title:
      "Indicadores de glosas y devoluciones en IPS: 12 KPIs para mejorar el recaudo",
    description:
      "Guía práctica para medir glosas, devoluciones, respuestas, recuperación de cartera y causas recurrentes en IPS, clínicas y hospitales de Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/indicadores-glosas-devoluciones",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Indicadores de glosas y devoluciones en IPS: 12 KPIs para mejorar el recaudo",
    description:
      "Guía práctica para identificar, medir y analizar indicadores de glosas y devoluciones en IPS, clínicas y hospitales, con enfoque en facturación, cartera y recuperación de recursos.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/indicadores-glosas-devoluciones",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "indicadores de glosas",
      "indicadores de devoluciones",
      "KPIs de glosas",
      "glosas IPS",
      "glosas médicas",
      "devoluciones de facturación",
      "gestión de glosas",
      "facturación en salud",
      "cartera EPS",
      "recuperación de cartera",
      "auditoría de cuentas médicas",
      "indicadores financieros IPS",
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

      <IndicadoresGlosasDevoluciones />
    </>
  );
}
