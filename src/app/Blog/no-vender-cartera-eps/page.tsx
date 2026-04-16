import NoVenderCarteraEps from "./NoVenderCarteraEps";

export const metadata = {
  title: "¿Conviene vender la cartera a una EPS? Mejor recupérela | PRAVICE",
  description:
    "Por qué no conviene vender cartera EPS con descuento. PRAVICE no compra cartera: la recupera efectivamente con estrategia jurídica y proceso ejecutivo.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/no-vender-cartera-eps",
  },
  openGraph: {
    title: "¿Conviene vender la cartera a una EPS o recuperarla?",
    description:
      "Análisis estratégico sobre vender cartera EPS vs recuperarla jurídicamente en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/no-vender-cartera-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Conviene vender la cartera a una EPS? Mejor recupérela",
    description:
      "Análisis sobre por qué vender cartera EPS implica pérdida de valor frente a una estrategia jurídica de recuperación en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/no-vender-cartera-eps",
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
      <NoVenderCarteraEps />
    </>
  );
}
