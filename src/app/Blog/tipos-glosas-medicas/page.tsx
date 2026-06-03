import TiposGlosasMedicasColombia from "./TiposGlosasMedicasColombia";

export const metadata = {
  title:
    "Tipos de glosas médicas más comunes en Colombia y cómo evitarlas | Guía para IPS y clínicas",
  description:
    "Conozca los tipos de glosas médicas más frecuentes en Colombia y cómo reducir devoluciones y rechazos de EPS en IPS y clínicas.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/tipos-glosas-medicas-colombia",
  },
  openGraph: {
    title: "Tipos de glosas médicas más comunes en Colombia y cómo evitarlas",
    description:
      "Guía práctica sobre glosas médicas, devoluciones y errores frecuentes en IPS y clínicas en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/tipos-glosas-medicas-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Tipos de glosas médicas más comunes en Colombia y cómo evitarlas",
    description:
      "Guía completa sobre tipos de glosas médicas, errores frecuentes y estrategias para reducir devoluciones y rechazos de EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/tipos-glosas-medicas-colombia",
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
      <TiposGlosasMedicasColombia />
    </>
  );
}
