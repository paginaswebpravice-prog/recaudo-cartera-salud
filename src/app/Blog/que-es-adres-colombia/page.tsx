import QueEsADRESColombia from "./QueEsADRESColombia";

export const metadata = {
  title:
    "¿Qué es ADRES y qué hace en Colombia? Funciones, pagos y giro directo | Guía 2026",
  description:
    "¿Qué es ADRES y para qué sirve? Conozca sus funciones, qué recursos administra, cómo funciona el giro directo y qué relación tiene con EPS, IPS, clínicas y hospitales en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/que-es-adres-colombia",
  },
  openGraph: {
    title:
      "¿Qué es ADRES y qué hace en Colombia? Funciones, pagos y giro directo",
    description:
      "Guía práctica para entender qué es ADRES, qué funciones cumple, cómo administra los recursos de salud y cuál es su relación con EPS e IPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/que-es-adres-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "¿Qué es ADRES y qué hace en Colombia? Funciones, pagos y giro directo",
    description:
      "Guía completa para entender qué es ADRES, cuáles son sus funciones, qué recursos administra, cómo funciona el giro directo y cuál es su relación con EPS, IPS, clínicas y hospitales en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://recaudocarteraipsyeps.com/Blog/que-es-adres-colombia",
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
      "qué es ADRES",
      "ADRES Colombia",
      "qué hace ADRES",
      "funciones de ADRES",
      "para qué sirve ADRES",
      "ADRES y EPS",
      "ADRES e IPS",
      "giro directo ADRES",
      "recursos ADRES",
      "pagos ADRES",
      "sistema de salud colombiano",
      "IPS Colombia",
      "cartera IPS",
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

      <QueEsADRESColombia />
    </>
  );
}
