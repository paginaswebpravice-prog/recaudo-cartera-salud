import type { Metadata } from "next";
import HospitalesContent from "./HospitalesContent";

const SITE_URL = "https://recaudocarteraipsyeps.com";
const PAGE_URL = `${SITE_URL}/Sectores/hospitales`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "Hospitales en Colombia: recuperación de cartera, flujo de caja y sostenibilidad financiera | Guía 2026",

  description:
    "Descubra cómo la recuperación de cartera, la gestión de cuentas por cobrar y el recaudo oportuno pueden fortalecer el flujo de caja y la sostenibilidad financiera de los hospitales en Colombia. Guía especializada para el sector hospitalario.",

  keywords: [
    "hospitales en Colombia",
    "hospitales Colombia",

    "recuperación de cartera hospitales",

    "gestión de cartera hospitalaria",

    "cartera hospitalaria",

    "cartera EPS hospitales",

    "cartera vencida hospitales",

    "cuentas por cobrar hospitales",

    "flujo de caja hospitales",

    "liquidez hospitales",

    "recaudo hospitales",

    "gestión financiera hospitalaria",

    "administración hospitalaria",

    "facturación hospitalaria",

    "glosas hospitales",

    "auditoría médica",

    "sostenibilidad financiera hospitales",

    "IPS",

    "sector salud Colombia",
  ],

  authors: [
    {
      name: "PRAVICE",
      url: SITE_URL,
    },
  ],

  creator: "PRAVICE",

  publisher: "PRAVICE",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Hospitales en Colombia: cómo fortalecer el flujo de caja y la recuperación de cartera",

    description:
      "Conozca estrategias para optimizar la recuperación de cartera, reducir la cartera vencida y mejorar la sostenibilidad financiera de los hospitales colombianos.",

    url: PAGE_URL,

    siteName: "PRAVICE",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "/logo_pravice.png",

        width: 1200,

        height: 630,

        alt: "Recuperación de cartera para hospitales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Hospitales en Colombia: recuperación de cartera y sostenibilidad financiera",

    description:
      "Guía especializada sobre cartera hospitalaria, recaudo, flujo de caja y estabilidad financiera en hospitales colombianos.",

    images: ["/logo_pravice.png"],
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

  category: "Healthcare",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@graph": [
              {
                "@type": "Organization",

                "@id": `${SITE_URL}/#organization`,

                name: "PRAVICE",

                url: SITE_URL,

                logo: {
                  "@type": "ImageObject",

                  url: `${SITE_URL}/logo_pravice.png`,
                },

                sameAs: [],

                knowsAbout: [
                  "Recuperación de cartera",

                  "Gestión de cartera hospitalaria",

                  "Cobro de cartera EPS",

                  "Recuperación jurídica",

                  "Sector salud",

                  "Hospitales",

                  "IPS",

                  "Flujo de caja",

                  "Gestión financiera",

                  "Sostenibilidad financiera",
                ],
              },

              {
                "@type": "WebSite",

                "@id": `${SITE_URL}/#website`,

                url: SITE_URL,

                name: "PRAVICE",

                publisher: {
                  "@id": `${SITE_URL}/#organization`,
                },

                inLanguage: "es-CO",
              },

              {
                "@type": "WebPage",

                "@id": `${PAGE_URL}#webpage`,

                url: PAGE_URL,

                name: "Hospitales en Colombia: recuperación de cartera y sostenibilidad financiera",

                description:
                  "Guía especializada sobre recuperación de cartera, cartera hospitalaria, flujo de caja y sostenibilidad financiera para hospitales colombianos.",

                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },

                about: {
                  "@id": `${SITE_URL}/#organization`,
                },

                breadcrumb: {
                  "@id": `${PAGE_URL}#breadcrumb`,
                },

                primaryImageOfPage: {
                  "@type": "ImageObject",

                  url: `${SITE_URL}/logo_pravice.png`,
                },

                inLanguage: "es-CO",
              },
              {
                "@type": "Article",

                "@id": `${PAGE_URL}#article`,

                headline:
                  "Recuperación de cartera para hospitales en Colombia: estrategias para fortalecer el flujo de caja y la sostenibilidad financiera",

                alternativeHeadline:
                  "Cómo optimizar la gestión de cartera hospitalaria y mejorar la liquidez de los hospitales colombianos",

                description:
                  "Guía especializada sobre recuperación de cartera, recaudo de cuentas por cobrar, flujo de caja, cartera EPS y sostenibilidad financiera para hospitales en Colombia.",

                mainEntityOfPage: {
                  "@id": `${PAGE_URL}#webpage`,
                },

                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },

                about: {
                  "@id": `${SITE_URL}/#organization`,
                },

                publisher: {
                  "@id": `${SITE_URL}/#organization`,
                },

                author: {
                  "@id": `${SITE_URL}/#organization`,
                },

                image: {
                  "@type": "ImageObject",

                  url: `${SITE_URL}/logo_pravice.png`,

                  width: 1200,

                  height: 630,
                },

                inLanguage: "es-CO",

                datePublished: "2026-08-04",

                dateModified: "2026-08-04",

                articleSection: "Hospitales",

                keywords: [
                  "hospitales en Colombia",
                  "recuperación de cartera hospitales",
                  "cartera hospitalaria",
                  "gestión de cartera",
                  "cartera EPS",
                  "flujo de caja hospitales",
                  "liquidez hospitales",
                  "cuentas por cobrar",
                  "recaudo hospitalario",
                  "glosas",
                  "auditoría médica",
                  "facturación hospitalaria",
                  "sostenibilidad financiera",
                  "sector salud",
                ],
              },

              {
                "@type": "BreadcrumbList",

                "@id": `${PAGE_URL}#breadcrumb`,

                itemListElement: [
                  {
                    "@type": "ListItem",

                    position: 1,

                    name: "Inicio",

                    item: SITE_URL,
                  },

                  {
                    "@type": "ListItem",

                    position: 2,

                    name: "Sectores",

                    item: `${SITE_URL}/Sectores`,
                  },

                  {
                    "@type": "ListItem",

                    position: 3,

                    name: "Hospitales",

                    item: PAGE_URL,
                  },
                ],
              },
              {
                "@type": "FAQPage",

                "@id": `${PAGE_URL}#faq`,

                mainEntity: [
                  {
                    "@type": "Question",

                    name: "¿Por qué la recuperación de cartera es fundamental para los hospitales en Colombia?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "La recuperación oportuna de cartera permite fortalecer el flujo de caja, garantizar la disponibilidad de recursos para la operación hospitalaria, disminuir la cartera vencida y mejorar la sostenibilidad financiera de los hospitales.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué factores afectan el flujo de caja de los hospitales?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Entre los principales factores se encuentran los retrasos en los pagos por parte de las EPS, las glosas, las devoluciones de facturación, los procesos de auditoría médica y el incremento de las cuentas por cobrar.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Cómo puede un hospital mejorar su gestión de cartera?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Mediante el seguimiento permanente de las cuentas por cobrar, la conciliación con las EPS, el control de indicadores financieros, la reducción de glosas y la implementación de estrategias especializadas de recuperación de cartera.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué beneficios aporta una adecuada gestión de cartera hospitalaria?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Una gestión eficiente contribuye a mejorar la liquidez, optimizar el flujo de caja, reducir el riesgo financiero, facilitar nuevas inversiones y fortalecer la sostenibilidad de los hospitales.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué indicadores permiten evaluar la recuperación de cartera en un hospital?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Algunos de los indicadores más utilizados son la rotación de cartera, los días promedio de recaudo, el porcentaje de cartera vencida, el índice de recuperación, el comportamiento del flujo de caja y la evolución de las cuentas por cobrar.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <HospitalesContent />
    </>
  );
}
