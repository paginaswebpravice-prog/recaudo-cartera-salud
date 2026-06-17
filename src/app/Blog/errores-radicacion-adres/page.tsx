import ErroresRadicacionADRES from "./ErroresRadicacionADRES";

export const metadata = {
  title:
    "Radicación de cuentas ante ADRES: errores frecuentes que generan rechazo | Guía para IPS",
  description:
    "Conozca los errores más frecuentes en la radicación de cuentas ante ADRES en Colombia y cómo evitar devoluciones, rechazos y retrasos en la recuperación de recursos.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/errores-radicacion-adres",
  },
  openGraph: {
    title:
      "Radicación de cuentas ante ADRES: errores frecuentes que generan rechazo",
    description:
      "Guía práctica para IPS, hospitales y clínicas sobre devoluciones, rechazos y errores documentales ante ADRES.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/errores-radicacion-adres",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Radicación de cuentas ante ADRES: errores frecuentes que generan rechazo",
    description:
      "Principales causas de devolución o rechazo de cuentas radicadas ante ADRES en Colombia y recomendaciones para evitarlas.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/errores-radicacion-adres",
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
      "radicación ADRES",
      "errores radicación ADRES",
      "rechazo de cuentas ADRES",
      "devoluciones ADRES",
      "IPS Colombia",
      "auditoría de cuentas médicas",
      "cartera salud",
      "facturación médica",
      "recuperación de recursos salud",
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

      <ErroresRadicacionADRES />
    </>
  );
}
