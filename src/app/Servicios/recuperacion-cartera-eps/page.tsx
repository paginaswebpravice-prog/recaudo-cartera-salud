import { Metadata } from "next";
import RecuperacionCarteraEpsContent from "./RecuperacionCarteraEpsContent";

export const metadata: Metadata = {
  title:
    "Cartera EPS en Colombia: impacto financiero, glosas y sostenibilidad para IPS y clínicas",

  description:
    "Conozca cómo la cartera EPS, las glosas y la mora en pagos afectan el flujo de caja y la sostenibilidad financiera de IPS y clínicas en Colombia.",

  keywords: [
    "cartera EPS Colombia",
    "cartera salud Colombia",
    "glosas EPS",
    "IPS y clínicas Colombia",
    "flujo de caja IPS",
    "sostenibilidad financiera salud",
    "cartera vencida EPS",
    "problemas financieros IPS",
  ],

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
  },

  openGraph: {
    title:
      "Cartera EPS en Colombia: impacto financiero y glosas en IPS y clínicas",

    description:
      "Información sobre cartera EPS, glosas y flujo de caja en instituciones de salud en Colombia.",

    url: "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",

    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",

              name: "Cartera EPS en Colombia: flujo de caja y sostenibilidad para IPS y clínicas",

              description:
                "Información sobre cartera EPS, glosas y sostenibilidad financiera para instituciones de salud en Colombia.",

              url: "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",

              inLanguage: "es",

              about: [
                "Cartera EPS",
                "Glosas en salud",
                "IPS en Colombia",
                "Flujo de caja en salud",
                "Sostenibilidad financiera",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la cartera EPS en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La cartera EPS corresponde a las cuentas pendientes de pago que las entidades promotoras de salud mantienen con IPS y clínicas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo afectan las glosas a las IPS?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las glosas pueden retrasar pagos y afectar el flujo de caja de las instituciones prestadoras de salud.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante la gestión de cartera en salud?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite mejorar la sostenibilidad financiera y reducir riesgos operativos en IPS y clínicas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué problemas genera la mora de EPS?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La mora puede limitar la liquidez, afectar pagos operativos y generar acumulación de cartera vencida.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionCarteraEpsContent />
    </>
  );
}
