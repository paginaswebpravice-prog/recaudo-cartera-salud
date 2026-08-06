import CobroCarteraEPSIntervenidas from "./CobroCarteraEPSIntervenidas";

export const metadata = {
  title:
    "Cómo recuperar cartera de EPS intervenidas o en liquidación en Colombia (Guía 2026 para IPS y hospitales)",

  description:
    "Descubra cómo cobrar cartera de EPS intervenidas, en liquidación o bajo medidas especiales en Colombia. Guía completa sobre conciliaciones, reclamaciones, acciones judiciales, documentos necesarios y estrategias para aumentar el recaudo de IPS, clínicas y hospitales.",

  keywords: [
    "cobro cartera EPS intervenidas",
    "EPS intervenidas Colombia",
    "EPS en liquidación",
    "recuperar cartera EPS",
    "cómo cobrar EPS liquidada",
    "cartera IPS",
    "cartera hospitales",
    "Superintendencia Nacional de Salud",
    "proceso de liquidación EPS",
    "recuperación cartera salud",
    "recaudo IPS",
    "glosas EPS",
    "conciliación cartera salud",
    "cobro prejurídico EPS",
    "proceso ejecutivo EPS",
    "abogados cartera salud",
    "cartera hospitalaria",
    "recursos IPS",
    "flujo de caja IPS",
    "cobro jurídico EPS",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-eps-intervenidas",
  },

  openGraph: {
    title:
      "Cómo recuperar cartera de EPS intervenidas o en liquidación | Guía completa para IPS (2026)",

    description:
      "Conozca el proceso para recuperar cartera de EPS intervenidas o liquidadas en Colombia, cómo responder glosas, cuándo iniciar acciones judiciales y qué hacer para proteger el flujo financiero de su institución.",

    url: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-eps-intervenidas",

    type: "article",

    locale: "es_CO",

    siteName: "PRAVICE",

    images: [
      {
        url: "/images/blog/cobro-cartera-eps-intervenidas.webp",
        width: 1200,
        height: 630,
        alt: "Cobro de cartera de EPS intervenidas o liquidadas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo recuperar cartera de EPS intervenidas o en liquidación",

    description:
      "Guía completa para IPS, hospitales y clínicas sobre recuperación de cartera, conciliaciones, cobro jurídico y estrategias de recaudo.",

    images: ["/images/blog/cobro-cartera-eps-intervenidas.webp"],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Cómo recuperar cartera de EPS intervenidas o en liquidación en Colombia",

    description:
      "Guía completa para IPS, hospitales y clínicas sobre recuperación de cartera frente a EPS intervenidas, en vigilancia especial o en liquidación.",

    inLanguage: "es-CO",

    datePublished: "2026-01-15",

    dateModified: "2026-08-06",

    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-eps-intervenidas",

    image:
      "https://recaudocarteraipsyeps.com/images/blog/cobro-cartera-eps-intervenidas.webp",

    articleSection: [
      "Recuperación de cartera",
      "EPS",
      "Sector Salud",
      "IPS",
      "Hospitales",
      "Cobro Jurídico",
    ],

    keywords: [
      "EPS intervenidas",
      "EPS en liquidación",
      "cobro cartera",
      "IPS",
      "hospitales",
      "clínicas",
      "cartera salud",
      "Superintendencia Nacional de Salud",
      "recuperación cartera",
      "conciliación",
      "proceso ejecutivo",
      "cobro prejurídico",
    ],

    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    about: [
      {
        "@type": "Thing",
        name: "Recuperación de cartera",
      },
      {
        "@type": "Thing",
        name: "EPS intervenidas",
      },
      {
        "@type": "Thing",
        name: "Liquidación de EPS",
      },
      {
        "@type": "Thing",
        name: "Cobro jurídico",
      },
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

      <CobroCarteraEPSIntervenidas />
    </>
  );
}
