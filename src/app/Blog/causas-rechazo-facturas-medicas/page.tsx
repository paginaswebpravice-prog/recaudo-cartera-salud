import CausasRechazoFacturasMedicas from "./CausasRechazoFacturasMedicas";

export const metadata = {
  title:
    "Las 10 principales causas de rechazo de facturas médicas en Colombia | Guía para IPS y clínicas",
  description:
    "Conozca las principales causas de rechazo de facturas médicas en Colombia y cómo prevenir devoluciones, glosas y retrasos en el recaudo de cartera de IPS y clínicas.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/causas-rechazo-facturas-medicas",
  },
  openGraph: {
    title:
      "Las 10 principales causas de rechazo de facturas médicas en Colombia",
    description:
      "Errores frecuentes que generan devoluciones, glosas y retrasos en los pagos de EPS a IPS y clínicas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/causas-rechazo-facturas-medicas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Las 10 principales causas de rechazo de facturas médicas en Colombia",
    description:
      "Guía para IPS, clínicas y hospitales sobre las causas más frecuentes de rechazo de cuentas médicas y estrategias para prevenirlas.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/causas-rechazo-facturas-medicas",
    keywords: [
      "rechazo de facturas médicas",
      "glosas médicas",
      "facturación médica Colombia",
      "IPS Colombia",
      "devoluciones de cuentas médicas",
      "auditoría médica",
      "cartera EPS",
      "recaudo en salud",
      "errores de facturación médica",
      "clínicas y hospitales Colombia",
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

      <CausasRechazoFacturasMedicas />
    </>
  );
}
