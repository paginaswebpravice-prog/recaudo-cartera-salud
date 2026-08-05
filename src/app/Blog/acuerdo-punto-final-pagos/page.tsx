import AcuerdoPuntoFinalPagos from "./AcuerdoPuntoFinalPagos";

export const metadata = {
  title:
    "Acuerdo de Punto Final: cómo reclamar pagos pendientes y recuperar cartera en Colombia | Guía para IPS",

  description:
    "Descubra cómo reclamar pagos pendientes del Acuerdo de Punto Final en Colombia. Conozca qué documentos necesita una IPS, cómo identificar recursos sin reconocer, errores frecuentes y estrategias jurídicas para recuperar cartera y fortalecer el flujo de caja.",

  keywords: [
    "Acuerdo de Punto Final",
    "Acuerdo de Punto Final Colombia",
    "pagos pendientes Acuerdo de Punto Final",
    "recuperar cartera salud",
    "recuperación cartera IPS",
    "ADRES Colombia",
    "reclamaciones ADRES",
    "IPS Colombia",
    "hospitales Colombia",
    "clínicas Colombia",
    "cartera EPS",
    "cartera salud Colombia",
    "flujo de caja IPS",
    "recursos pendientes salud",
    "saneamiento financiero salud",
    "recobros salud",
    "sector salud Colombia",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/acuerdo-punto-final-pagos",
  },

  openGraph: {
    title:
      "Acuerdo de Punto Final: cómo reclamar pagos pendientes y recuperar cartera en Colombia",

    description:
      "Guía completa para IPS, clínicas y hospitales sobre el Acuerdo de Punto Final, pagos pendientes, ADRES y recuperación de recursos en Colombia.",

    type: "article",

    url: "https://recaudocarteraipsyeps.com/Blog/acuerdo-punto-final-pagos",

    locale: "es_CO",

    siteName: "PRAVICE",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",

      headline:
        "Acuerdo de Punto Final: cómo reclamar pagos pendientes y recuperar cartera en Colombia",

      description:
        "Guía especializada para IPS, clínicas y hospitales sobre reclamación de recursos pendientes del Acuerdo de Punto Final, ADRES y recuperación de cartera en Colombia.",

      inLanguage: "es-CO",

      mainEntityOfPage:
        "https://recaudocarteraipsyeps.com/Blog/acuerdo-punto-final-pagos",

      author: {
        "@type": "Organization",
        name: "PRAVICE",
      },

      publisher: {
        "@type": "Organization",
        name: "PRAVICE",
      },

      about: [
        "Acuerdo de Punto Final",
        "ADRES",
        "Recuperación de cartera",
        "IPS",
        "Hospitales",
        "Clínicas",
        "Sector salud",
      ],

      keywords: [
        "Acuerdo de Punto Final",
        "ADRES",
        "recuperación de cartera",
        "pagos pendientes",
        "IPS",
        "hospitales",
        "clínicas",
        "flujo de caja",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué fue el Acuerdo de Punto Final?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Fue una estrategia del Gobierno colombiano orientada al saneamiento financiero del sistema de salud mediante el reconocimiento y pago de obligaciones acumuladas durante varios años.",
          },
        },

        {
          "@type": "Question",

          name: "¿Todavía existen pagos pendientes relacionados con el Acuerdo de Punto Final?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Algunas cuentas continúan en procesos de auditoría, conciliación, validación documental o presentan diferencias entre los valores reclamados y los finalmente reconocidos.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué documentos debe revisar una IPS antes de presentar una reclamación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Es recomendable revisar facturas, soportes asistenciales, resultados de auditorías, conciliaciones, comunicaciones oficiales, certificaciones de cartera y demás documentos relacionados con cada cuenta.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cuál es la importancia de realizar seguimiento a los recursos pendientes?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Un seguimiento permanente facilita identificar diferencias, responder observaciones oportunamente y fortalecer la recuperación efectiva de recursos para mejorar la liquidez de las instituciones de salud.",
          },
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://recaudocarteraipsyeps.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://recaudocarteraipsyeps.com/Blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Acuerdo de Punto Final",
          item: "https://recaudocarteraipsyeps.com/Blog/acuerdo-punto-final-pagos",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <AcuerdoPuntoFinalPagos />
    </>
  );
}
