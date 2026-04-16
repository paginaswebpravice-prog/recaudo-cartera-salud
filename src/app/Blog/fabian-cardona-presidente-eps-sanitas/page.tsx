import FabianCardonaPresidenteEpsSanitas from "./FabianCardonaPresidenteEpsSanitas";

export const metadata = {
  title:
    "Fabián Cardona asume presidencia de EPS Sanitas: impacto en IPS y cartera en Colombia",
  description:
    "Análisis del nombramiento de Fabián Cardona en EPS Sanitas y su impacto en el cobro de cartera a EPS en Colombia, especialmente para IPS y clínicas en Bogotá.",
  alternates: {
    canonical:
      "https://tudominio.com/blog/fabian-cardona-eps-sanitas-impacto-cartera",
  },
  openGraph: {
    title: "Fabián Cardona asume presidencia de EPS Sanitas en Colombia",
    description:
      "Impacto del nuevo liderazgo en EPS Sanitas sobre cartera y pagos a IPS en Colombia.",
    type: "article",
    url: "https://tudominio.com/blog/fabian-cardona-eps-sanitas-impacto-cartera",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Fabián Cardona asume presidencia de EPS Sanitas: impacto en IPS y cartera en Colombia",
    description:
      "Análisis del nombramiento en EPS Sanitas y su impacto en la gestión de cartera en el sector salud colombiano.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://tudominio.com/blog/fabian-cardona-eps-sanitas-impacto-cartera",
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
      <FabianCardonaPresidenteEpsSanitas />
    </>
  );
}
