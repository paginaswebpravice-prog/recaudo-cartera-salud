import RequerimientoDocumentalDemandar from "./RequerimientoDocumentalDemandar";

export const metadata = {
  title:
    "Documentos para demandar una EPS por cartera en Colombia (Checklist completo para IPS y clínicas en Bogotá)",
  description:
    "Checklist completo de documentos para demandar una EPS por cartera en Colombia. Requisitos reales para IPS y clínicas en Bogotá: facturas, soportes, radicación y estrategia para proceso ejecutivo exitoso.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/requerimiento-documental-demandar-eps",
  },
  openGraph: {
    title:
      "Documentos para demandar una EPS por cartera en Colombia | Checklist legal completo",
    description:
      "Checklist de requisitos reales para demandas ejecutivas contra EPS en Colombia para IPS y clínicas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/requerimiento-documental-demandar-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Documentos para demandar una EPS por cartera en Colombia | Checklist legal para IPS y clínicas",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <RequerimientoDocumentalDemandar />
    </>
  );
}
