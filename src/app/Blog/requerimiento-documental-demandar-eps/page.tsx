import RequerimientoDocumentalDemandar from "./RequerimientoDocumentalDemandar";

export const metadata = {
  title:
    "Documentos para demandar una EPS por cartera en Colombia | Checklist para IPS y clínicas en Bogotá",
  description:
    "Checklist completo de documentos para demandar una EPS por cartera en Colombia. Requisitos para IPS y clínicas en Bogotá: facturas, soportes, radicación y proceso ejecutivo.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/requerimiento-documental-demandar-eps",
  },
  openGraph: {
    title: "Documentos para demandar una EPS por cartera en Colombia",
    description:
      "Checklist de requisitos para demandas ejecutivas contra EPS en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/requerimiento-documental-demandar-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Documentos para demandar una EPS por cartera en Colombia",
    description:
      "Guía sobre requisitos documentales para estructurar demandas ejecutivas contra EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/requerimiento-documental-demandar-eps",
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
      <RequerimientoDocumentalDemandar />
    </>
  );
}
