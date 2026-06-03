import ErroresCobroCarteraEPSIPS from "./ErroresCobroCarteraEPSIPS";

export const metadata = {
  title:
    "Errores frecuentes que hacen perder dinero a las IPS en el cobro a EPS | Guía para clínicas e IPS",
  description:
    "Conozca los principales errores jurídicos, administrativos y documentales que afectan la recuperación de cartera y generan pérdidas financieras para IPS en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/errores-cobro-cartera-eps-ips",
  },
  openGraph: {
    title:
      "Errores frecuentes que hacen perder dinero a las IPS en el cobro a EPS",
    description:
      "Guía práctica sobre errores administrativos y jurídicos que afectan el recaudo de cartera en IPS y clínicas en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/errores-cobro-cartera-eps-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Errores frecuentes que hacen perder dinero a las IPS en el cobro a EPS",
    description:
      "Guía sobre errores administrativos, jurídicos y documentales que afectan el recaudo y recuperación de cartera en IPS y clínicas en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/errores-cobro-cartera-eps-ips",
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
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* CONTENT */}
      <ErroresCobroCarteraEPSIPS />
    </>
  );
}
