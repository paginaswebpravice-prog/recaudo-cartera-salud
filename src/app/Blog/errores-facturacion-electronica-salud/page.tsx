import ErroresFacturacionElectronicaSalud from "./ErroresFacturacionElectronicaSalud";

export const metadata = {
  title:
    "10 errores de facturación electrónica en salud que generan glosas | IPS",
  description:
    "Conozca 10 errores de facturación electrónica en salud que pueden generar glosas, devoluciones y retrasos en pagos de EPS. Guía práctica para IPS, clínicas y hospitales en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/errores-facturacion-electronica-salud",
  },
  openGraph: {
    title: "10 errores de facturación electrónica en salud que generan glosas",
    description:
      "Identifique los errores más frecuentes en facturación electrónica, RIPS y soportes que pueden terminar en glosas, devoluciones o retrasos en el recaudo de las IPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/errores-facturacion-electronica-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "10 errores de facturación electrónica en salud que pueden generar glosas y retrasar pagos",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre los errores más frecuentes en facturación electrónica en salud, RIPS, soportes y procesos de radicación que pueden generar glosas, devoluciones y retrasos en los pagos.",
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
      "errores de facturación electrónica",
      "glosas médicas",
      "glosas en IPS",
      "RIPS",
      "facturación EPS",
      "devoluciones de facturas",
      "IPS Colombia",
      "cartera EPS",
      "recuperación de cartera",
      "facturación médica",
      "clínicas Colombia",
      "hospitales Colombia",
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
