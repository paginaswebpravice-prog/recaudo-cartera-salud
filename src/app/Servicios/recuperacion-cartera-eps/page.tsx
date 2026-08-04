import { Metadata } from "next";
import RecuperacionCarteraEpsContent from "./RecuperacionCarteraEpsContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera EPS en Colombia: cómo reducir mora, glosas y problemas de liquidez en IPS",

  description:
    "Conozca estrategias para la recuperación de cartera EPS en Colombia, gestión de glosas, control de cuentas pendientes y acciones para mejorar el flujo de caja de IPS y clínicas.",

  keywords: [
    "recuperación cartera EPS Colombia",
    "cobro cartera EPS",
    "cartera vencida IPS",
    "cartera hospitalaria Colombia",
    "glosas EPS Colombia",
    "gestión cartera IPS",
    "recuperación cartera salud",
    "problemas liquidez clínicas",
    "flujo de caja IPS",
    "cobranza sector salud",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
  },

  openGraph: {
    title:
      "Recuperación de cartera EPS en Colombia | Estrategias para IPS y clínicas",

    description:
      "Guía sobre cartera EPS, glosas, mora en pagos y alternativas para mejorar la recuperación de recursos en instituciones de salud.",

    url: "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",

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
        "Recuperación de cartera EPS en Colombia: estrategias para mejorar liquidez en IPS y clínicas",

      description:
        "Información especializada sobre recuperación de cartera EPS, glosas, mora en pagos y sostenibilidad financiera de instituciones prestadoras de salud.",

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
          "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
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

          name: "Recuperación de cartera EPS",

          item: "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
        },
      ],
    },

    {
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",

          name: "¿Qué es la recuperación de cartera EPS?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La recuperación de cartera EPS comprende las acciones administrativas, financieras y jurídicas destinadas a gestionar cuentas pendientes de pago que afectan a IPS, clínicas y prestadores de servicios de salud.",
          },
        },

        {
          "@type": "Question",

          name: "¿Por qué las IPS acumulan cartera vencida con las EPS?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La cartera puede aumentar por retrasos en pagos, procesos de auditoría, glosas, diferencias en facturación, conciliaciones pendientes y falta de seguimiento oportuno.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo afectan las glosas EPS al flujo de caja de una IPS?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Las glosas pueden retrasar el reconocimiento y pago de servicios prestados, generando presión financiera sobre la operación de clínicas e instituciones de salud.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué estrategias existen para recuperar cartera EPS?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Las estrategias pueden incluir seguimiento administrativo, conciliación de cuentas, gestión documental, análisis jurídico y acciones judiciales cuando sea necesario.",
          },
        },

        {
          "@type": "Question",

          name: "¿Por qué es importante gestionar oportunamente la cartera en salud?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Una gestión adecuada permite mejorar liquidez, reducir riesgos financieros y fortalecer la sostenibilidad de IPS y clínicas.",
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

      <RecuperacionCarteraEpsContent />
    </>
  );
}
