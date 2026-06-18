import EPSSuspendePagos from "./EPSSuspendePagos";

export const metadata = {
  title:
    "Qué hacer si una EPS suspende pagos de manera inesperada | Guía para IPS y hospitales",
  description:
    "Conozca las acciones jurídicas y financieras que deben implementar las IPS, clínicas y hospitales cuando una EPS suspende pagos de forma inesperada en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/eps-suspende-pagos",
  },
  openGraph: {
    title: "Qué hacer si una EPS suspende pagos de manera inesperada",
    description:
      "Guía para proteger el flujo de caja y la recuperación de cartera cuando una EPS deja de pagar.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/eps-suspende-pagos",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Qué hacer si una EPS suspende pagos de manera inesperada",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre medidas financieras y jurídicas frente a la suspensión de pagos por parte de una EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/eps-suspende-pagos",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "EPS suspende pagos",
      "cartera EPS",
      "IPS Colombia",
      "hospitales Colombia",
      "flujo de caja IPS",
      "recuperación de cartera",
      "riesgo financiero EPS",
      "sector salud Colombia",
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

      <EPSSuspendePagos />
    </>
  );
}
