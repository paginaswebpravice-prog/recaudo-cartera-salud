import FabianCardonaPresidenteEpsSanitas from "./FabianCardonaPresidenteEpsSanitas";

export const metadata = {
  title:
    "Fabián Cardona nuevo presidente de EPS Sanitas en Colombia | Impacto en cartera y pagos a IPS",
  description:
    "Análisis del nombramiento de Fabián Cardona en EPS Sanitas y su impacto en el cobro de cartera a EPS en Colombia, especialmente para IPS y clínicas en Bogotá.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/fabian-cardona-eps-sanitas-impacto-cartera",
  },
  openGraph: {
    title:
      "Fabián Cardona nuevo presidente de EPS Sanitas | Impacto en cartera IPS Colombia",
    description:
      "Impacto del nuevo liderazgo en EPS Sanitas sobre cartera, pagos y flujo financiero de IPS en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/fabian-cardona-eps-sanitas-impacto-cartera",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Fabián Cardona nuevo presidente de EPS Sanitas en Colombia | Impacto en cartera IPS",
    description:
      "Análisis del nombramiento en EPS Sanitas y su impacto en la gestión de cartera en el sector salud colombiano.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/fabian-cardona-eps-sanitas-impacto-cartera",
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

      <FabianCardonaPresidenteEpsSanitas />
    </>
  );
}
