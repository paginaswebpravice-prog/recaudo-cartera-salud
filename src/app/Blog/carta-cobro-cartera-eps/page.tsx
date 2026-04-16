import CartaCobroEPS from "./CartaCobroEPS";

export const metadata = {
  title:
    "Carta para cobro de cartera a EPS en Colombia | Modelo editable para IPS y clínicas",
  description:
    "Descarga modelo de carta para cobro de cartera a EPS en Colombia. Guía profesional para IPS, clínicas y proveedores de salud en Bogotá y todo el país. Mejora tu recaudo prejurídico y reduce la mora.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/carta-cobro-cartera-eps",
  },
  openGraph: {
    title: "Carta para cobro de cartera a EPS en Colombia | Modelo editable",
    description:
      "Modelo profesional de carta para cobro de cartera a EPS en Colombia para IPS y clínicas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/carta-cobro-cartera-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Carta para cobro de cartera a EPS en Colombia | Modelo editable para IPS y clínicas",
    description:
      "Guía práctica y modelo editable de carta para cobro de cartera a EPS en Colombia para IPS, clínicas y proveedores de salud.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/carta-cobro-cartera-eps",
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
      <CartaCobroEPS />
    </>
  );
}
