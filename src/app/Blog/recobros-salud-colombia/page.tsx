import RecobrosSaludColombia from "./RecobrosSaludColombia";

export const metadata = {
  title:
    "Recobros en salud en Colombia: requisitos, ADRES, MIPRES y cómo evitar rechazos",
  description:
    "Recobros en salud en Colombia: conozca qué son, cuándo aplican, requisitos, documentos, MIPRES, ADRES, auditoría y cómo reducir rechazos para IPS, clínicas y hospitales.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/recobros-salud-colombia",
  },
  openGraph: {
    title:
      "Recobros en salud en Colombia: requisitos, ADRES y cómo evitar rechazos",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre recobros en salud, ADRES, MIPRES, documentos, auditoría y recuperación de recursos.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/recobros-salud-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Recobros en salud en Colombia: requisitos, ADRES, MIPRES y cómo evitar rechazos",
    description:
      "Guía práctica sobre recobros en salud en Colombia, su relación con ADRES y MIPRES, requisitos documentales, auditoría, errores frecuentes y recuperación de recursos para IPS, clínicas y hospitales.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://recaudocarteraipsyeps.com/Blog/recobros-salud-colombia",
    },
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "recobros en salud",
      "recobros en salud Colombia",
      "recobro ADRES",
      "recobros ADRES",
      "recobros No UPC",
      "MIPRES",
      "requisitos recobro ADRES",
      "documentos recobro ADRES",
      "rechazo de recobros",
      "auditoría de recobros",
      "IPS Colombia",
      "clínicas Colombia",
      "hospitales Colombia",
      "recuperación de recursos en salud",
      "cartera salud Colombia",
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

      <RecobrosSaludColombia />
    </>
  );
}
