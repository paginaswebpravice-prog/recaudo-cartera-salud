import GiroDirectoADRESIPS from "./GiroDirectoADRESIPS";

export const metadata = {
  title:
    "Giro directo ADRES: cómo funciona, requisitos e impacto en IPS | Colombia 2026",

  description:
    "Giro directo ADRES para IPS: conozca cómo funciona, quiénes pueden recibirlo, requisitos, impacto en el flujo de caja y qué hacer cuando persisten saldos pendientes.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/giro-directo-adres-ips",
  },

  openGraph: {
    title:
      "Giro directo ADRES para IPS: cómo funciona y qué impacto tiene en la cartera",
    description:
      "Guía actualizada para IPS, clínicas y hospitales sobre giro directo ADRES, requisitos, flujo de recursos y manejo de cartera pendiente.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/giro-directo-adres-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      "Giro directo ADRES para IPS: cómo funciona, requisitos y qué pasa con la cartera",

    description:
      "Guía para IPS, clínicas y hospitales sobre el giro directo ADRES, su funcionamiento, requisitos, impacto financiero y manejo de cartera pendiente en Colombia.",

    inLanguage: "es-CO",

    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/giro-directo-adres-ips",

    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    keywords: [
      "giro directo ADRES",
      "giro directo ADRES IPS",
      "giro directo para IPS",
      "giro directo EPS",
      "requisitos giro directo ADRES",
      "cómo funciona el giro directo ADRES",
      "ADRES pagos IPS",
      "cartera IPS",
      "cartera EPS",
      "flujo de caja IPS",
      "recuperación de cartera salud",
      "giro directo Colombia 2026",
    ],
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
      <GiroDirectoADRESIPS />
    </>
  );
}
