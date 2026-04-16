import EtapasCobroCarteraEPS from "./EtapasCobroCarteraEPS";

export const metadata = {
  title:
    "Cobro de cartera EPS en Colombia: etapas para un recaudo efectivo | IPS y clínicas en Bogotá",
  description:
    "Guía completa sobre el cobro de cartera a EPS en Colombia. Conozca las etapas: diagnóstico, cobro prejurídico, proceso ejecutivo y medidas cautelares para IPS y clínicas en Bogotá.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/etapas-cobro-cartera-eps",
  },
  openGraph: {
    title: "Cobro de cartera EPS en Colombia: etapas para un recaudo efectivo",
    description:
      "Estrategia integral de recuperación de cartera EPS en Colombia para IPS y clínicas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/etapas-cobro-cartera-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cobro de cartera EPS en Colombia: etapas para un recaudo efectivo",
    description:
      "Guía sobre etapas del cobro de cartera EPS en Colombia: diagnóstico, prejurídico, proceso ejecutivo y medidas cautelares.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/etapas-cobro-cartera-eps",
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
      <EtapasCobroCarteraEPS />
    </>
  );
}
