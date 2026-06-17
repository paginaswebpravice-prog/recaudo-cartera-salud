import ErroresFacturacionElectronicaSalud from "./ErroresFacturacionElectronicaSalud";

export const metadata = {
  title:
    "Facturación electrónica en salud: errores que generan glosas en Colombia",
  description:
    "Conozca los errores más frecuentes en la facturación electrónica en salud que generan glosas, devoluciones y retrasos en pagos de EPS. Guía práctica para IPS, clínicas y hospitales.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/errores-facturacion-electronica-salud",
  },
  openGraph: {
    title:
      "Facturación electrónica en salud: errores que generan glosas en Colombia",
    description:
      "Guía práctica para reducir glosas y devoluciones derivadas de errores en la facturación electrónica del sector salud.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/errores-facturacion-electronica-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Facturación electrónica en salud: errores que generan glosas en Colombia",
    description:
      "Guía especializada para IPS, clínicas y hospitales sobre errores frecuentes en facturación electrónica y estrategias para reducir glosas y devoluciones.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/errores-facturacion-electronica-salud",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "facturación electrónica en salud",
      "glosas médicas",
      "devoluciones de facturas",
      "IPS Colombia",
      "facturación EPS",
      "errores de facturación",
      "recaudo de cartera",
      "cartera EPS",
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

      <ErroresFacturacionElectronicaSalud />
    </>
  );
}
