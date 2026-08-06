import CausasRechazoFacturasMedicas from "./CausasRechazoFacturasMedicas";

export const metadata = {
  title:
    "10 causas de rechazo de facturas médicas en Colombia (y cómo evitarlas) | Guía para IPS, clínicas y hospitales",

  description:
    "Descubra las 10 principales causas de rechazo de facturas médicas por parte de las EPS, cómo prevenir glosas, devoluciones y retrasos en los pagos. Guía completa para IPS, clínicas y hospitales en Colombia.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/causas-rechazo-facturas-medicas",
  },

  openGraph: {
    title:
      "10 causas de rechazo de facturas médicas en Colombia (Guía completa para IPS)",

    description:
      "Aprenda cuáles son los errores que más rechazan las EPS y cómo reducir devoluciones, glosas y cartera vencida mediante una correcta facturación médica.",

    type: "article",

    url: "https://recaudocarteraipsyeps.com/Blog/causas-rechazo-facturas-medicas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "10 causas de rechazo de facturas médicas en Colombia: cómo evitarlas y reducir glosas en IPS, clínicas y hospitales",
    description:
      "Guía completa para IPS, clínicas y hospitales sobre las principales causas de rechazo de facturas médicas, devoluciones, glosas y estrategias para mejorar el recaudo de cartera.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/causas-rechazo-facturas-medicas",
    keywords: [
      "rechazo de facturas médicas",

      "facturas médicas rechazadas",

      "glosas médicas",

      "causas de glosas",

      "devoluciones de facturas",

      "facturación médica Colombia",

      "errores de facturación",

      "cartera EPS",

      "recaudo IPS",

      "cómo evitar glosas",

      "cómo evitar rechazo de facturas",

      "auditoría médica",

      "auditoría de cuentas",

      "IPS Colombia",

      "hospitales Colombia",

      "clínicas Colombia",

      "recuperación de cartera",

      "cartera sector salud",

      "facturación hospitalaria",

      "errores administrativos IPS",
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
