import { Metadata } from "next";
import RecuperarCarteraEPSLiquidacion from "./RecuperarCarteraEPSLiquidacion";

export const metadata: Metadata = {
  title:
    "EPS en liquidación: cómo recuperar la cartera de una IPS en Colombia | Guía 2026",

  description:
    "¿Tu IPS tiene facturas pendientes con una EPS en liquidación? Conoce cómo organizar la cartera, presentar acreencias, evitar errores y mejorar las posibilidades de recuperación.",

  keywords: [
    "EPS en liquidación",
    "recuperar cartera EPS en liquidación",
    "cartera IPS EPS liquidada",
    "cómo reclamar cartera a EPS liquidada",
    "acreencias EPS en liquidación",
    "presentación de acreencias EPS",
    "recuperación de cartera IPS",
    "cartera hospitales EPS liquidación",
    "cartera clínicas EPS",
    "facturas pendientes EPS liquidada",
    "reclamación de acreencias salud",
    "liquidación EPS Colombia",
    "cobro cartera sector salud",
    "IPS cartera vencida EPS",
    "recuperación de cartera hospitalaria",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-eps-liquidacion",
  },

  openGraph: {
    title: "EPS en liquidación: qué hacer para recuperar la cartera de una IPS",

    description:
      "Guía práctica para IPS, clínicas y hospitales sobre cartera pendiente, presentación de acreencias, soportes y errores que pueden afectar la recuperación.",

    type: "article",

    url: "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-eps-liquidacion",

    siteName: "Recaudo Cartera IPS y EPS",

    locale: "es_CO",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",

      headline:
        "EPS en liquidación: cómo recuperar la cartera de una IPS en Colombia",

      alternativeHeadline:
        "Qué hacer cuando una IPS, clínica u hospital tiene facturas pendientes con una EPS en liquidación",

      description:
        "Guía práctica para IPS, clínicas y hospitales sobre cómo organizar la cartera pendiente, preparar soportes, presentar acreencias y realizar seguimiento cuando una EPS entra en liquidación.",

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-eps-liquidacion",
      },

      author: {
        "@type": "Organization",
        name: "PRAVICE",
      },

      publisher: {
        "@type": "Organization",
        name: "PRAVICE",
      },

      inLanguage: "es-CO",

      datePublished: "2025-01-01",

      dateModified: "2026-08-19",

      keywords: [
        "EPS en liquidación",
        "recuperar cartera EPS",
        "acreencias EPS",
        "IPS Colombia",
        "cartera sector salud",
        "reclamación de créditos",
        "liquidación de EPS",
      ],

      about: [
        "Recuperación de cartera",
        "EPS en liquidación",
        "IPS",
        "Acreencias",
        "Cartera del sector salud",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué pasa con la cartera de una IPS cuando una EPS entra en liquidación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "La entrada en liquidación de una EPS no significa automáticamente que las obligaciones pendientes desaparezcan. Sin embargo, la IPS debe identificar correctamente los valores adeudados, revisar los mecanismos definidos dentro del proceso y presentar oportunamente las reclamaciones o acreencias con sus respectivos soportes.",
          },
        },

        {
          "@type": "Question",
          name: "¿Cómo puede una IPS reclamar facturas pendientes a una EPS en liquidación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "La IPS debe consolidar la cartera pendiente, verificar la existencia y exigibilidad de cada obligación, reunir los soportes correspondientes y atender los mecanismos, requisitos y plazos establecidos dentro del proceso de liquidación.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué documentos sirven para respaldar una acreencia frente a una EPS en liquidación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependiendo del caso, pueden ser relevantes las facturas, soportes de prestación de servicios, constancias de radicación, respuestas a glosas, estados de cuenta, conciliaciones, acuerdos de pago, decisiones administrativas o judiciales y demás documentos que permitan demostrar la existencia y cuantía de la obligación.",
          },
        },

        {
          "@type": "Question",
          name: "¿Se pierde la cartera si una EPS entra en liquidación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "No necesariamente. La recuperación dependerá de factores como el reconocimiento de la obligación, la calidad de los soportes, el cumplimiento de los requisitos del proceso, la disponibilidad de recursos y las reglas aplicables durante la liquidación.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué ocurre si la IPS tiene una demanda o proceso de cobro en curso contra la EPS?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "La situación debe analizarse de acuerdo con el estado del proceso y las reglas aplicables al procedimiento de liquidación. Es importante revisar cómo coordinar las actuaciones judiciales existentes con la reclamación de la acreencia dentro del proceso correspondiente.",
          },
        },

        {
          "@type": "Question",
          name: "¿Cuál es uno de los errores más graves al reclamar cartera a una EPS en liquidación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Uno de los principales riesgos es dejar pasar los términos, presentar información incompleta o no conservar los documentos que permiten demostrar la existencia y el valor de la obligación. Por eso es importante organizar la cartera desde el inicio y realizar seguimiento permanente.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      <RecuperarCarteraEPSLiquidacion />
    </>
  );
}
