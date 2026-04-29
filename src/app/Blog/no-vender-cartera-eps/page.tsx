import NoVenderCarteraEps from "./NoVenderCarteraEps";

export const metadata = {
  title:
    "¿Conviene vender la cartera EPS en Colombia? Mejor recupérela con estrategia jurídica | PRAVICE",
  description:
    "Descubra por qué vender cartera EPS implica pérdida de valor. PRAVICE recupera cartera con estrategia jurídica, proceso ejecutivo y resultados reales en Colombia.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/no-vender-cartera-eps",
  },

  openGraph: {
    title:
      "¿Vender cartera EPS o recuperarla en Colombia? Decisión estratégica clave",
    description:
      "Análisis jurídico y financiero sobre vender cartera EPS vs recuperarla con estrategias legales en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/no-vender-cartera-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "¿Conviene vender la cartera EPS en Colombia? Mejor recupérela con estrategia jurídica",
    description:
      "Análisis sobre por qué vender cartera EPS reduce el valor frente a la recuperación jurídica en Colombia.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <NoVenderCarteraEps />
    </>
  );
}
