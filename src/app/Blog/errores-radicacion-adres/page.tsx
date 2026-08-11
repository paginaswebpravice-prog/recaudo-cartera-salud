import ErroresRadicacionADRES from "./ErroresRadicacionADRES";

export const metadata = {
  title:
    "Radicación ante ADRES: 10 errores que pueden causar rechazos | Guía para IPS",
  description:
    "¿Tu cuenta ante ADRES fue devuelta o rechazada? Conoce 10 errores frecuentes en la radicación de cuentas y cómo prevenir inconsistencias que retrasan la recuperación de recursos.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/errores-radicacion-adres",
  },
  openGraph: {
    title: "Radicación ante ADRES: 10 errores que pueden causar rechazos",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre errores documentales, administrativos y de facturación que pueden generar devoluciones o rechazos ante ADRES.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/errores-radicacion-adres",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Radicación ante ADRES: 10 errores que pueden causar rechazos",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre los errores más frecuentes en la radicación de cuentas ante ADRES y las medidas que pueden ayudar a prevenir devoluciones, rechazos y retrasos en la recuperación de recursos.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://recaudocarteraipsyeps.com/Blog/errores-radicacion-adres",
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
      "ADRES",
      "radicación ante ADRES",
      "radicación de cuentas ADRES",
      "errores radicación ADRES",
      "rechazo de cuentas ADRES",
      "devoluciones ADRES",
      "reclamaciones ante ADRES",
      "IPS Colombia",
      "auditoría de cuentas médicas",
      "facturación médica",
      "cartera IPS",
      "recuperación de recursos en salud",
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
