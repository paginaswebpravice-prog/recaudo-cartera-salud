import { Metadata } from "next";
import ClinicaContent from "./ClinicaContent";

const SITE_URL = "https://recaudocarteraipsyeps.com";
const PAGE_URL = `${SITE_URL}/Sectores/clinicas`;

export const metadata: Metadata = {
  title:
    "Recuperación de cartera para clínicas en Colombia | Gestión de cartera EPS, flujo de caja y sostenibilidad financiera",

  description:
    "Conozca estrategias para optimizar la recuperación de cartera de clínicas e IPS, reducir la cartera vencida frente a las EPS, mejorar el flujo de caja y fortalecer la sostenibilidad financiera mediante procesos administrativos y jurídicos especializados.",

  keywords: [
    "recuperación de cartera clínicas",
    "recuperación de cartera IPS",
    "gestión de cartera EPS",
    "cartera hospitalaria",
    "cartera vencida EPS",
    "cartera sector salud",
    "recaudo de cartera",
    "cobro de cartera hospitalaria",
    "cobro jurídico EPS",
    "flujo de caja clínicas",
    "liquidez IPS",
    "glosas EPS",
    "auditoría médica",
    "facturación hospitalaria",
    "cuentas por cobrar clínicas",
    "gestión financiera clínicas",
    "sostenibilidad financiera IPS",
    "indicadores financieros hospitales",
    "administración de cartera",
    "PRAVICE",
  ],

  authors: [
    {
      name: "PRAVICE",
      url: SITE_URL,
    },
  ],

  creator: "PRAVICE",

  publisher: "PRAVICE",

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Recuperación de cartera para clínicas e IPS | Gestión estratégica de cartera EPS",

    description:
      "Aprenda cómo fortalecer la liquidez de una clínica mediante una adecuada gestión de cartera, recuperación de cuentas por cobrar y estrategias para disminuir la cartera vencida frente a las EPS.",

    url: PAGE_URL,

    siteName: "PRAVICE",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: `${SITE_URL}/logo_pravice.png`,
        width: 1200,
        height: 630,
        alt: "Gestión de cartera para clínicas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Gestión de cartera para clínicas | Recuperación de cartera EPS",

    description:
      "Descubra estrategias para mejorar el recaudo de cartera hospitalaria, optimizar el flujo de caja y fortalecer la estabilidad financiera de clínicas e IPS.",

    images: [`${SITE_URL}/logo_pravice.png`],
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

  category: "Healthcare Financial Services",
};

export default function ClinicaPage() {
  return (
    <>
      {/* ======================= SCHEMA SEO ======================= */}

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

                description:
                  "PRAVICE ofrece soluciones especializadas para la recuperación de cartera en IPS, clínicas, hospitales y demás entidades del sector salud colombiano.",

                areaServed: {
                  "@type": "Country",
                  name: "Colombia",
                },

                sameAs: [SITE_URL],
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

                name: "Recuperación de cartera para clínicas en Colombia",

                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },

                about: {
                  "@id": `${SITE_URL}/#organization`,
                },

                primaryImageOfPage: {
                  "@type": "ImageObject",

                  url: `${SITE_URL}/logo_pravice.png`,
                },

                description:
                  "Guía especializada sobre recuperación de cartera hospitalaria, cartera EPS, flujo de caja, sostenibilidad financiera y administración de cuentas por cobrar para clínicas e IPS en Colombia.",

                inLanguage: "es-CO",
              },
              {
                "@type": "Article",

                "@id": `${PAGE_URL}#article`,

                headline:
                  "Recuperación de cartera para clínicas en Colombia: estrategias para fortalecer el flujo de caja y la sostenibilidad financiera",

                alternativeHeadline:
                  "Cómo optimizar la gestión de cartera EPS en clínicas e IPS colombianas",

                description:
                  "Conozca las principales estrategias para mejorar la recuperación de cartera frente a las EPS, disminuir la cartera vencida y fortalecer la estabilidad financiera de clínicas e IPS en Colombia.",

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

                articleSection: "Sector Salud",

                keywords: [
                  "recuperación de cartera clínicas",
                  "gestión de cartera EPS",
                  "cartera hospitalaria",
                  "cartera vencida",
                  "recaudo de cartera",
                  "flujo de caja",
                  "glosas",
                  "auditoría médica",
                  "cuentas por cobrar",
                  "liquidez",
                  "IPS",
                  "clínicas",
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

                    name: "Clínicas",

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

                    name: "¿Por qué la recuperación de cartera es tan importante para una clínica?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Una adecuada recuperación de cartera permite mejorar la liquidez, fortalecer el flujo de caja, reducir el riesgo financiero y garantizar la continuidad de la operación médica sin depender excesivamente del endeudamiento.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué factores generan el crecimiento de la cartera vencida en las clínicas?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Entre las principales causas se encuentran las demoras en los pagos por parte de las EPS, las glosas, las devoluciones de facturación, los procesos de auditoría y la falta de seguimiento permanente a las cuentas por cobrar.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Cómo mejorar el flujo de caja de una clínica sin aumentar el endeudamiento?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Implementando una gestión eficiente de cartera, fortaleciendo el recaudo oportuno, realizando conciliaciones periódicas, disminuyendo las glosas y apoyándose en procesos especializados de recuperación de cartera cuando sea necesario.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué beneficios ofrece una adecuada gestión de cartera hospitalaria?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Permite mejorar la liquidez, incrementar la capacidad de inversión, optimizar la operación financiera, reducir la cartera vencida y fortalecer la sostenibilidad financiera de la institución.",
                    },
                  },

                  {
                    "@type": "Question",

                    name: "¿Qué indicadores ayudan a medir la gestión de cartera en una clínica?",

                    acceptedAnswer: {
                      "@type": "Answer",

                      text: "Algunos de los indicadores más utilizados son la rotación de cartera, los días promedio de recaudo, el porcentaje de cartera vencida, el índice de recuperación y el comportamiento del flujo de caja.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ClinicaContent />
    </>
  );
}
