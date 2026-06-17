import ProcesoEjecutivoEPS from "./ProcesoEjecutivoEPS";

export const metadata = {
  title:
    "Proceso ejecutivo contra EPS en Colombia: requisitos, etapas y recuperación de cartera",
  description:
    "Guía completa sobre el proceso ejecutivo contra EPS en Colombia. Conozca requisitos, documentos, medidas cautelares, tiempos y estrategias para recuperar cartera de IPS, clínicas y hospitales.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/proceso-ejecutivo-contra-eps",
  },
  openGraph: {
    title: "Proceso ejecutivo contra EPS en Colombia: requisitos y etapas",
    description:
      "Aprenda cómo iniciar un proceso ejecutivo contra una EPS para recuperar cartera vencida en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/proceso-ejecutivo-contra-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Proceso ejecutivo contra EPS en Colombia: requisitos y etapas",
    description:
      "Guía práctica para IPS, clínicas y hospitales que buscan recuperar cartera mediante proceso ejecutivo contra EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/proceso-ejecutivo-contra-eps",
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

      <ProcesoEjecutivoEPS />
    </>
  );
}
