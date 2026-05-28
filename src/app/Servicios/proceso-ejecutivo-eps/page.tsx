import { Metadata } from "next";
import ProcesoEjecutivoEpsContent from "./ProcesoEjecutivoEpsContent";

export const metadata: Metadata = {
  title:
    "Proceso ejecutivo contra EPS en Colombia | Guía informativa sobre recuperación de cartera en salud",

  description:
    "Conozca cómo funciona el proceso ejecutivo contra EPS en Colombia, sus etapas, requisitos y aspectos jurídicos relacionados con la recuperación de cartera en IPS y clínicas.",

  keywords: [
    "proceso ejecutivo contra EPS",
    "cobro judicial EPS",
    "cartera vencida EPS",
    "demanda contra EPS Colombia",
    "recuperación de cartera salud",
    "IPS cartera EPS",
    "cobranzas empresariales Colombia",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
  },

  openGraph: {
    title: "Proceso ejecutivo contra EPS en Colombia y recuperación de cartera",
    description:
      "Información sobre procesos ejecutivos, cobro judicial y recuperación de cartera para IPS y clínicas en Colombia.",

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

export default function Page() {
  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Proceso ejecutivo contra EPS en Colombia y recuperación de cartera",

              description:
                "Guía informativa sobre procesos ejecutivos y mecanismos de recuperación de cartera en el sector salud colombiano.",

              author: {
                "@type": "Organization",
                name: "PRAVICE ABOGADOS S.A.S.",
              },

              publisher: {
                "@type": "Organization",
                name: "PRAVICE ABOGADOS S.A.S.",
              },

              mainEntityOfPage:
                "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es un proceso ejecutivo contra EPS?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un mecanismo judicial utilizado para exigir el pago de obligaciones claras, expresas y exigibles derivadas de cartera en el sector salud.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Cuándo puede una IPS iniciar un proceso ejecutivo?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Generalmente cuando existen facturas vencidas, acuerdos incumplidos o cartera con mora prolongada frente a una EPS.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué documentos se requieren para un proceso ejecutivo?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del caso, pueden requerirse facturas, contratos, actas, soportes de radicación y demás documentos que acrediten la obligación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué riesgos existen si no se gestiona la cartera a tiempo?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La cartera puede aumentar su nivel de riesgo, afectar el flujo financiero de la institución e incluso enfrentar prescripción.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ProcesoEjecutivoEpsContent />
    </>
  );
}
