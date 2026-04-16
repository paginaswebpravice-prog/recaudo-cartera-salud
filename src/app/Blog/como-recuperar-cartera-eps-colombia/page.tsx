import ComoRecuperarCarteraEPS from "./ComoRecuperarCarteraEPS";

export const metadata = {
  title:
    "Cómo recuperar cartera de EPS en Colombia | Guía legal para IPS y clínicas en Bogotá",
  description:
    "Aprenda cómo recuperar cartera de EPS en Colombia con estrategias legales efectivas. Guía para IPS y clínicas en Bogotá: cobro prejurídico, proceso ejecutivo y recuperación real de cartera en salud.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/como-recuperar-cartera-eps-colombia",
  },
  openGraph: {
    title:
      "Cómo recuperar cartera de EPS en Colombia | Guía legal para IPS y clínicas",
    description:
      "Estrategia jurídica aplicada para IPS, clínicas y proveedores de salud en Colombia desde cobro prejurídico hasta proceso ejecutivo.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/como-recuperar-cartera-eps-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo recuperar cartera de EPS en Colombia | Guía legal para IPS y clínicas en Bogotá",
    description:
      "Guía práctica sobre recuperación de cartera EPS en Colombia mediante estrategias legales y proceso ejecutivo.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/como-recuperar-cartera-eps-colombia",
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
      <ComoRecuperarCarteraEPS />
    </>
  );
}
