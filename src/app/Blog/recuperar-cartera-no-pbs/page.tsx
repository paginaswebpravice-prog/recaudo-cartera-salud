import type { Metadata } from "next";
import RecuperarCarteraNoPBS from "./RecuperarCarteraNoPBS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-no-pbs";

export const metadata: Metadata = {
  title:
    "Recuperar cartera NO PBS en Colombia: guía para IPS, clínicas y hospitales | 2026",

  description:
    "Aprenda cómo organizar, gestionar y recuperar cartera NO PBS en Colombia. Guía práctica para IPS, clínicas y hospitales sobre soportes, reclamaciones, conciliación y cobro de pagos pendientes.",

  keywords: [
    "recuperar cartera NO PBS",
    "cartera NO PBS Colombia",
    "cobro cartera NO PBS",
    "recuperación cartera IPS",
    "cartera servicios NO PBS",
    "reclamaciones NO PBS",
    "pagos pendientes IPS",
    "cartera vencida sector salud",
    "cobro servicios y tecnologías NO PBS",
    "gestión cartera IPS Colombia",
    "recuperar pagos sector salud",
    "cartera clínicas hospitales",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cómo recuperar cartera NO PBS en Colombia: guía práctica para IPS y clínicas",
    description:
      "Conozca cómo organizar soportes, gestionar reclamaciones y mejorar la recuperación de pagos pendientes por servicios y tecnologías NO PBS.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Recuperación de cartera NO PBS para IPS, clínicas y hospitales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Recuperar cartera NO PBS en Colombia: guía para IPS, clínicas y hospitales",
    description:
      "Guía práctica para gestionar y recuperar pagos pendientes por cartera NO PBS en el sector salud colombiano.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },

    headline:
      "Recuperar cartera NO PBS en Colombia: guía para IPS, clínicas y hospitales",

    alternativeHeadline:
      "Cómo gestionar reclamaciones, soportes y pagos pendientes por servicios NO PBS",

    description:
      "Guía práctica para IPS, clínicas y hospitales sobre organización documental, gestión de reclamaciones, conciliación y estrategias para recuperar cartera NO PBS en Colombia.",

    image: "https://recaudocarteraipsyeps.com/logo_pravice.png",

    author: {
      "@type": "Organization",
      name: "Recaudo Cartera IPS y EPS",
      url: "https://recaudocarteraipsyeps.com",
    },

    publisher: {
      "@type": "Organization",
      name: "Recaudo Cartera IPS y EPS",
      logo: {
        "@type": "ImageObject",
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
      },
    },

    datePublished: "2026-05-12",

    dateModified: "2026-08-19",

    inLanguage: "es-CO",

    articleSection: "Recuperación de cartera en el sector salud",

    about: [
      "Cartera NO PBS",
      "Recuperación de cartera",
      "IPS",
      "Clínicas",
      "Hospitales",
      "Sector salud colombiano",
    ],

    keywords: [
      "recuperar cartera NO PBS",
      "cartera NO PBS Colombia",
      "cobro cartera IPS",
      "pagos pendientes servicios NO PBS",
      "reclamaciones NO PBS",
      "gestión de cartera sector salud",
      "IPS clínicas hospitales",
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué es la cartera NO PBS?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La cartera NO PBS corresponde a valores pendientes relacionados con servicios, tecnologías o prestaciones en salud cuya financiación y mecanismo de reconocimiento deben analizarse según las condiciones específicas de cada caso. Para una IPS o clínica, la recuperación depende de factores como los soportes disponibles, la radicación, el estado de auditoría y la identificación de la entidad responsable del pago.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cómo puede una IPS recuperar cartera NO PBS?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El proceso normalmente comienza con la depuración de la cartera y la revisión de facturas, soportes, radicaciones, respuestas a glosas y demás documentos disponibles. Después pueden desarrollarse acciones de seguimiento, reclamación, conciliación y cobro según el estado específico de cada obligación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Por qué se demora el pago de la cartera NO PBS?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Las demoras pueden estar relacionadas con inconsistencias documentales, procesos de auditoría, glosas, devoluciones, diferencias sobre los valores reclamados, falta de soportes o retrasos dentro de los procedimientos administrativos de reconocimiento y pago.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos son importantes para reclamar cartera NO PBS?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso, pueden ser relevantes las facturas, soportes de prestación, autorizaciones cuando correspondan, constancias de radicación, respuestas a glosas, comunicaciones entre las partes, estados de cuenta y documentos que permitan demostrar la existencia y el valor de la obligación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es recomendable esperar para iniciar la gestión de cartera NO PBS?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No conviene dejar la cartera sin seguimiento. Una gestión temprana permite identificar inconsistencias, recuperar documentos, responder requerimientos y definir la estrategia adecuada antes de que la cartera continúe envejeciendo.",
        },
      },

      {
        "@type": "Question",

        name: "¿La cartera NO PBS puede requerir gestión jurídica?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí, dependiendo de las características de la obligación y de las gestiones previas realizadas, algunos casos pueden requerir una evaluación jurídica. Sin embargo, la estrategia debe definirse individualmente después de revisar los documentos, el estado de la cuenta y los mecanismos disponibles.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <RecuperarCarteraNoPBS />
    </>
  );
}
