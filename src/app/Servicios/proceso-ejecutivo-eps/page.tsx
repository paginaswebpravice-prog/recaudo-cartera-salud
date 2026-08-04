import { Metadata } from "next";
import ProcesoEjecutivoEpsContent from "./ProcesoEjecutivoEpsContent";

export const metadata: Metadata = {
  title:
    "Proceso Ejecutivo contra EPS en Colombia: Recuperación Judicial de Cartera para IPS y Clínicas",

  description:
    "Conozca cómo iniciar un proceso ejecutivo contra una EPS en Colombia, requisitos, etapas, documentos necesarios y estrategias jurídicas para recuperar cartera vencida de IPS y clínicas.",

  keywords: [
    "proceso ejecutivo contra EPS Colombia",
    "demanda ejecutiva contra EPS",
    "cobro judicial EPS",
    "recuperación cartera IPS",
    "cartera vencida EPS",
    "proceso judicial sector salud",
    "cobro cartera hospitalaria",
    "recuperación cartera clínicas",
    "facturas EPS vencidas",
    "abogados recuperación cartera salud",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
  },

  openGraph: {
    title:
      "Proceso Ejecutivo contra EPS en Colombia | Cómo recuperar cartera vencida de IPS",

    description:
      "Guía especializada sobre procesos ejecutivos contra EPS, cobro judicial, requisitos y recuperación de cartera del sector salud colombiano.",

    url: "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",

    siteName: "Recaudo Cartera IPS y EPS",

    locale: "es_CO",

    type: "article",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",

      headline:
        "Proceso Ejecutivo contra EPS en Colombia: Recuperación Judicial de Cartera para IPS y Clínicas",

      description:
        "Información especializada sobre procesos ejecutivos contra EPS, requisitos legales, etapas y estrategias para recuperar cartera vencida en instituciones prestadoras de salud.",

      author: {
        "@type": "Organization",
        name: "PRAVICE ABOGADOS S.A.S.",
      },

      publisher: {
        "@type": "Organization",
        name: "PRAVICE ABOGADOS S.A.S.",
      },

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
      },
    },

    {
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://recaudocarteraipsyeps.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Proceso ejecutivo contra EPS",
          item: "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
        },
      ],
    },

    {
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",

          name: "¿Qué es un proceso ejecutivo contra una EPS en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Es un mecanismo judicial mediante el cual una IPS o prestador de servicios de salud puede exigir el pago de obligaciones claras, expresas y exigibles cuando existe cartera pendiente frente a una EPS.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cuándo puede una IPS iniciar un proceso ejecutivo contra una EPS?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Puede evaluarse cuando existen facturas pendientes de pago, obligaciones reconocidas, acuerdos incumplidos o cartera vencida que cumple con los requisitos necesarios para acudir a la vía judicial.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué documentos se necesitan para presentar un proceso ejecutivo contra una EPS?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Normalmente se requiere analizar facturas, soportes de prestación del servicio, contratos, radicaciones, respuestas a glosas, conciliaciones y demás documentos que permitan acreditar la obligación.",
          },
        },

        {
          "@type": "Question",

          name: "¿Un proceso ejecutivo contra EPS puede incluir medidas cautelares?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Dependiendo del caso concreto y del análisis jurídico correspondiente, dentro de un proceso ejecutivo pueden solicitarse medidas cautelares orientadas a garantizar el cumplimiento de la obligación reclamada.",
          },
        },

        {
          "@type": "Question",

          name: "¿Por qué es importante actuar oportunamente frente a cartera vencida de EPS?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Porque una gestión tardía puede afectar la liquidez de la IPS, aumentar el riesgo financiero y dificultar las acciones necesarias para recuperar los recursos adeudados.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cuánto tarda un proceso ejecutivo contra una EPS?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "El tiempo depende de factores como la documentación disponible, la complejidad del caso, las actuaciones procesales y la respuesta de la entidad demandada.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <ProcesoEjecutivoEpsContent />
    </>
  );
}
