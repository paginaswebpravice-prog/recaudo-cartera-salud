import MedidasCautelaresCobroEps from "./MedidasCautelaresCobroEps";

export const metadata = {
  title:
    "Medidas cautelares contra EPS en Colombia | Embargos y recaudo efectivo de cartera en salud",
  description:
    "Descubra cómo aplicar medidas cautelares para el cobro de cartera a EPS en Colombia: embargos, retención de recursos e investigación patrimonial para IPS y clínicas en Bogotá.",

  alternates: {
    canonical:
      "https://tudominio.com/blog/medidas-cautelares-cobro-cartera-eps-colombia",
  },

  openGraph: {
    title:
      "Embargos y medidas cautelares contra EPS en Colombia | Recuperación de cartera",
    description:
      "Estrategias legales de embargos, retenciones e investigación patrimonial para el recaudo efectivo de cartera EPS en Colombia.",
    type: "article",
    url: "https://tudominio.com/blog/medidas-cautelares-cobro-cartera-eps-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Medidas cautelares contra EPS en Colombia | Embargos y recaudo efectivo de cartera",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <MedidasCautelaresCobroEps />
    </>
  );
}
