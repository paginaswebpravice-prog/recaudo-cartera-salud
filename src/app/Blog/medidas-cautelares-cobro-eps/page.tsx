import MedidasCautelaresCobroEps from "./MedidasCautelaresCobroEps";

export const metadata = {
  title:
    "Medidas cautelares para cobro de cartera a EPS en Colombia | Embargos y recaudo efectivo en Bogotá",
  description:
    "Conozca las medidas cautelares para el cobro de cartera a EPS en Colombia: embargos, retenciones e investigación patrimonial para IPS y clínicas en Bogotá.",
  alternates: {
    canonical:
      "https://tudominio.com/blog/medidas-cautelares-cobro-cartera-eps-colombia",
  },
  openGraph: {
    title: "Medidas cautelares para cobro de cartera a EPS en Colombia",
    description:
      "Embargos, retenciones e investigación patrimonial para recuperación efectiva de cartera EPS en Colombia.",
    type: "article",
    url: "https://tudominio.com/blog/medidas-cautelares-cobro-cartera-eps-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Medidas cautelares para cobro de cartera a EPS en Colombia",
    description:
      "Guía sobre embargos, retenciones e investigación patrimonial para el cobro de cartera EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://tudominio.com/blog/medidas-cautelares-cobro-cartera-eps-colombia",
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
      <MedidasCautelaresCobroEps />
    </>
  );
}
