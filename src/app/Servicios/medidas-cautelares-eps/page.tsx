import { Metadata } from "next";
import MedidasCautelaresEpsContent from "./MedidasCautelaresEpsContent";

export const metadata: Metadata = {
  title:
    "Medidas cautelares contra EPS en Colombia | Guía informativa sobre protección de cartera en salud",

  description:
    "Conozca cómo funcionan las medidas cautelares, embargos y mecanismos de protección de cartera contra EPS en Colombia para IPS, clínicas y prestadores de salud.",

  keywords: [
    "medidas cautelares EPS",
    "embargos EPS Colombia",
    "cartera sector salud",
    "protección de cartera IPS",
    "recuperación de cartera salud",
    "proceso ejecutivo EPS",
    "cartera EPS Colombia",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/medidas-cautelares-eps",
  },

  openGraph: {
    title:
      "Medidas cautelares y embargos contra EPS en Colombia para proteger cartera",

    description:
      "Información sobre medidas cautelares, embargos y protección de cartera en el sector salud colombiano.",

    url: "https://recaudocarteraipsyeps.com/Servicios/medidas-cautelares-eps",

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
                "Medidas cautelares contra EPS y protección de cartera en Colombia",

              description:
                "Contenido informativo sobre medidas cautelares, embargos y mecanismos jurídicos de protección de cartera en el sector salud.",

              author: {
                "@type": "Organization",
                name: "PRAVICE ABOGADOS S.A.S.",
              },

              publisher: {
                "@type": "Organization",
                name: "PRAVICE ABOGADOS S.A.S.",
              },

              mainEntityOfPage:
                "https://recaudocarteraipsyeps.com/Servicios/medidas-cautelares-eps",
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué son las medidas cautelares contra EPS?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Son mecanismos jurídicos utilizados para proteger el cumplimiento de obligaciones mientras se desarrolla un proceso judicial.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Qué tipo de medidas cautelares pueden utilizarse?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Dependiendo del caso, pueden incluir embargos, retenciones y otras medidas orientadas a proteger recursos y activos relacionados con la obligación.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Por qué son importantes las medidas cautelares en cartera EPS?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ayudan a reducir riesgos financieros y fortalecer las posibilidades de recuperación de cartera en procesos judiciales.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Las medidas cautelares garantizan el pago total?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cada proceso depende de múltiples factores jurídicos, financieros y documentales que deben analizarse individualmente.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <MedidasCautelaresEpsContent />
    </>
  );
}
