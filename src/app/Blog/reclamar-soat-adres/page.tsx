import ReclamarSOATADRES from "./ReclamarSOATADRES";

export const metadata = {
  title:
    "Cómo reclamar servicios de accidentes de tránsito ante ADRES en Colombia | Guía para IPS y clínicas",
  description:
    "Aprenda cómo reclamar servicios derivados de accidentes de tránsito ante ADRES en Colombia. Requisitos, documentos, etapas del proceso y errores que generan rechazos.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/reclamar-soat-adres",
  },
  openGraph: {
    title:
      "Cómo reclamar servicios de accidentes de tránsito ante ADRES en Colombia",
    description:
      "Guía práctica para IPS, hospitales y clínicas sobre reclamaciones de servicios derivados de accidentes de tránsito ante ADRES.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/reclamar-soat-adres",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo reclamar servicios de accidentes de tránsito ante ADRES en Colombia",
    description:
      "Guía completa para IPS y clínicas sobre reclamaciones derivadas de accidentes de tránsito ante ADRES.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/reclamar-soat-adres",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "ADRES",
      "SOAT",
      "accidentes de tránsito",
      "reclamaciones ADRES",
      "IPS Colombia",
      "cartera salud",
      "hospitales Colombia",
      "clínicas Colombia",
      "recuperación de recursos salud",
      "servicios de accidentes de tránsito",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <ReclamarSOATADRES />
    </>
  );
}
