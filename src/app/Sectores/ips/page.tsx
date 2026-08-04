import type { Metadata } from "next";
import IPSContent from "./IPSContent";

const SITE_URL = "https://recaudocarteraipsyeps.com";
const PAGE_URL = `${SITE_URL}/Sectores/ips`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "IPS en Colombia: recuperación de cartera, cartera EPS y sostenibilidad financiera | Guía 2026",

  description:
    "Conozca cómo fortalecer la recuperación de cartera, optimizar el flujo de caja y mejorar la sostenibilidad financiera de las IPS en Colombia. Guía especializada sobre cartera EPS, recaudo, glosas y cuentas por cobrar.",

  keywords: [
    "IPS en Colombia",
    "instituciones prestadoras de salud",
    "recuperación de cartera IPS",
    "cartera EPS IPS",
    "gestión de cartera IPS",
    "recaudo IPS",
    "cuentas por cobrar IPS",
    "flujo de caja IPS",
    "liquidez IPS",
    "glosas EPS",
    "auditoría médica",
    "facturación en salud",
    "cartera vencida IPS",
    "sostenibilidad financiera IPS",
    "administración financiera IPS",
    "sector salud Colombia",
    "prestadores de servicios de salud",
    "gestión financiera sector salud",
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
      "IPS en Colombia: cómo fortalecer la recuperación de cartera y el flujo de caja",

    description:
      "Guía especializada para IPS sobre recuperación de cartera, recaudo de cuentas por cobrar, glosas, liquidez y sostenibilidad financiera.",

    url: PAGE_URL,

    siteName: "PRAVICE",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "/logo_pravice.png",

        width: 1200,

        height: 630,

        alt: "Recuperación de cartera para IPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "IPS en Colombia: recuperación de cartera y sostenibilidad financiera",

    description:
      "Descubra estrategias para optimizar la cartera EPS, fortalecer el flujo de caja y mejorar la estabilidad financiera de las IPS.",

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
      {/* ================= SCHEMA SEO ================= */}

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

                  "Gestión de cartera para IPS",

                  "Cobro de cartera EPS",

                  "Recaudo de cartera",

                  "Sector salud",

                  "Instituciones Prestadoras de Salud",

                  "Flujo de caja",

                  "Liquidez",

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

                name: "IPS en Colombia: recuperación de cartera, cartera EPS y sostenibilidad financiera",

                description:
                  "Guía especializada sobre recuperación de cartera, recaudo, cartera EPS, flujo de caja y sostenibilidad financiera para las Instituciones Prestadoras de Servicios de Salud en Colombia.",

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
                  "IPS en Colombia: recuperación de cartera, flujo de caja y sostenibilidad financiera",

                alternativeHeadline:
                  "Guía para optimizar la gestión de cartera y fortalecer la liquidez de las IPS",

                description:
                  "Análisis especializado sobre recuperación de cartera, cuentas por cobrar, recaudo, glosas, liquidez y sostenibilidad financiera para las Instituciones Prestadoras de Servicios de Salud en Colombia.",

                mainEntityOfPage: {
                  "@id": `${PAGE_URL}#webpage`,
                },

                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },

                author: {
                  "@id": `${SITE_URL}/#organization`,
                },

                publisher: {
                  "@id": `${SITE_URL}/#organization`,
                },

                image: {
                  "@type": "ImageObject",

                  url: `${SITE_URL}/og-image.jpg`,
                },

                keywords: [
                  "IPS Colombia",
                  "recuperación de cartera",
                  "cartera EPS",
                  "gestión de cartera",
                  "flujo de caja",
                  "liquidez",
                  "glosas",
                  "cuentas por cobrar",
                  "sector salud",
                  "sostenibilidad financiera",
                ],

                articleSection: [
                  "Gestión financiera",

                  "Sector salud",

                  "Recuperación de cartera",

                  "IPS",

                  "Cartera EPS",
                ],

                about: [
                  {
                    "@type": "Thing",

                    name: "Instituciones Prestadoras de Servicios de Salud",
                  },
                  {
                    "@type": "Thing",

                    name: "Recuperación de cartera",
                  },
                  {
                    "@type": "Thing",

                    name: "Cartera EPS",
                  },
                  {
                    "@type": "Thing",

                    name: "Flujo de caja",
                  },
                  {
                    "@type": "Thing",

                    name: "Sostenibilidad financiera",
                  },
                ],

                inLanguage: "es-CO",
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

                    name: "IPS",

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

                    name: "¿Qué es una IPS en Colombia?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Una Institución Prestadora de Servicios de Salud (IPS) es la entidad encargada de prestar servicios médicos, asistenciales, diagnósticos, terapéuticos y de rehabilitación a los usuarios del Sistema General de Seguridad Social en Salud.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Por qué la recuperación de cartera es importante para las IPS?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "La recuperación de cartera permite mejorar la liquidez, fortalecer el flujo de caja, disminuir el impacto de la cartera vencida y garantizar la continuidad de la prestación de los servicios de salud.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Cómo afecta la cartera EPS a una IPS?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Cuando las cuentas por cobrar permanecen pendientes durante largos periodos, la institución puede enfrentar dificultades para financiar su operación, realizar inversiones y atender oportunamente sus obligaciones financieras.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué son las glosas en salud?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Las glosas corresponden a observaciones realizadas sobre la facturación presentada por las IPS, las cuales pueden retrasar el reconocimiento y pago de los servicios prestados mientras son revisadas o conciliadas.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Cómo mejorar la gestión de cartera en una IPS?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Una adecuada gestión de cartera incluye seguimiento permanente a las cuentas por cobrar, conciliaciones oportunas, control de indicadores, automatización de procesos y estrategias especializadas de recuperación cuando sea necesario.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué indicadores ayudan a evaluar la cartera de una IPS?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Entre los indicadores más utilizados se encuentran la rotación de cartera, días promedio de recaudo, porcentaje de cartera vencida, índice de recuperación, liquidez y comportamiento del flujo de caja.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué beneficios tiene una buena gestión financiera para una IPS?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Una adecuada gestión financiera facilita la estabilidad operativa, mejora la capacidad de inversión, fortalece la sostenibilidad institucional y contribuye a prestar servicios de salud con mayor continuidad y calidad.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué factores influyen en la sostenibilidad financiera de una IPS?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "La sostenibilidad depende de múltiples variables, entre ellas la eficiencia en el recaudo, la administración de la cartera, el control de costos, la gestión de glosas y la disponibilidad de flujo de caja.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <IPSContent />
    </>
  );
}
