import ReclamarSOATADRES from "./ReclamarSOATADRES";

export const metadata = {
  title:
    "Reclamación ADRES por accidente de tránsito sin SOAT: guía para IPS | Colombia 2026",
  description:
    "¿Una IPS atendió un accidente de tránsito sin SOAT? Conozca cómo reclamar ante ADRES, qué documentos preparar, cómo funciona la radicación, auditoría, glosas y pago.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/reclamar-soat-adres",
  },
  openGraph: {
    title:
      "Reclamación ADRES por accidente de tránsito sin SOAT: guía para IPS",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre reclamaciones ante ADRES por accidentes de tránsito sin SOAT: requisitos, soportes, auditoría, glosas y recuperación de recursos.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/reclamar-soat-adres",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Reclamación ADRES por accidente de tránsito sin SOAT: guía para IPS en Colombia",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre reclamaciones ante ADRES por atención a víctimas de accidentes de tránsito sin SOAT o con vehículos no identificados.",
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
      "reclamación ADRES",
      "reclamación ADRES accidente de tránsito",
      "accidente de tránsito sin SOAT",
      "ADRES SOAT",
      "reclamar ante ADRES",
      "reclamaciones ADRES IPS",
      "glosas ADRES",
      "IPS Colombia",
      "clínicas Colombia",
      "hospitales Colombia",
      "cartera ADRES",
      "recuperación de recursos ADRES",
      "servicios médicos accidentes de tránsito",
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
