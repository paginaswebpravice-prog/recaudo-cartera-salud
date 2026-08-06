import CarteraPoblacionMigrante from "./CarteraPoblacionMigrante";

export const metadata = {
  title:
    "Recuperar cartera por atención a población migrante en Colombia: Guía para IPS, clínicas y hospitales (2026)",

  description:
    "Descubra cómo recuperar cartera por servicios prestados a población migrante en Colombia. Conozca quién paga la atención, cómo evitar glosas, qué documentos necesita una IPS y las mejores estrategias jurídicas y financieras para aumentar el recaudo.",

  keywords: [
    "recuperar cartera población migrante",
    "cartera población migrante Colombia",
    "cobro servicios población migrante",
    "IPS población migrante",
    "hospitales población migrante",
    "clínicas Colombia",
    "recuperación de cartera IPS",
    "recaudo cartera salud",
    "quién paga atención migrantes",
    "financiación atención población migrante",
    "ADRES población migrante",
    "entidades territoriales salud",
    "facturación población migrante",
    "glosas población migrante",
    "cobro cartera sector salud",
    "cartera IPS Colombia",
    "servicios de salud migrantes",
    "recuperación recursos sector salud",
    "gestión de cartera IPS",
    "PRAVICE",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/cartera-poblacion-migrante",
  },

  openGraph: {
    title:
      "¿Cómo recuperar cartera por atención a población migrante? Guía para IPS en Colombia",

    description:
      "Aprenda cómo recuperar recursos por servicios prestados a población migrante, reducir devoluciones, fortalecer el recaudo y mejorar la liquidez de su IPS.",

    url: "https://recaudocarteraipsyeps.com/Blog/cartera-poblacion-migrante",

    siteName: "PRAVICE",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Recuperación de cartera por atención a población migrante | Guía para IPS",

    description:
      "Conozca cómo recuperar recursos derivados de la atención a población migrante y fortalecer el flujo de caja de clínicas, hospitales e IPS.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Cómo recuperar cartera por atención a población migrante en Colombia: guía para IPS, clínicas y hospitales",

    alternativeHeadline:
      "Recuperación de cartera por servicios de salud prestados a población migrante",

    description:
      "Guía completa para IPS, clínicas y hospitales sobre recuperación de cartera derivada de la atención a población migrante en Colombia, incluyendo documentación, fuentes de financiación, reclamaciones, auditoría y estrategias jurídicas.",

    inLanguage: "es-CO",

    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cartera-poblacion-migrante",

    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    datePublished: "2026-01-01",

    dateModified: "2026-08-06",

    articleSection: "Recuperación de Cartera",

    wordCount: "4200",

    keywords: [
      "población migrante Colombia",
      "recuperación de cartera",
      "IPS Colombia",
      "hospitales Colombia",
      "clínicas Colombia",
      "ADRES",
      "entidades territoriales",
      "atención población migrante",
      "cartera sector salud",
      "cobro IPS",
      "recaudo cartera",
      "facturación servicios de salud",
      "financiación salud",
      "gestión financiera IPS",
      "auditoría cuentas médicas",
      "glosas",
      "devoluciones",
      "flujo de caja",
      "procesos jurídicos",
      "PRAVICE",
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

      <CarteraPoblacionMigrante />
    </>
  );
}
