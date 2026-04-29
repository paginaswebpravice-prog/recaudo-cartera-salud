import CobroEntesTerritoriales from "./CobroEntesTerritoriales";

export const metadata = {
  title:
    "Cómo cobrar cartera a entes territoriales en Colombia | Guía para IPS, clínicas y secretarías de salud",
  description:
    "Guía completa para el cobro de cartera a entes territoriales en Colombia. Estrategias administrativas, conciliación y cobro judicial para IPS y clínicas en Bogotá y todo el país.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/cobro-entes-territoriales-salud",
  },
  openGraph: {
    title:
      "Cómo recuperar cartera de entes territoriales en Colombia | IPS y clínicas",
    description:
      "Estrategia integral para recuperación de cartera frente a secretarías de salud y entidades públicas en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/cobro-entes-territoriales-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo cobrar cartera a entes territoriales en Colombia | Guía para IPS, clínicas y sector salud",
    description:
      "Guía sobre estrategias administrativas y jurídicas para el cobro de cartera a entes territoriales en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cobro-entes-territoriales-salud",
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
      <CobroEntesTerritoriales />
    </>
  );
}
