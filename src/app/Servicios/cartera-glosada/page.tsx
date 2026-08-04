import type { Metadata } from "next";
import CarteraGlosadaContent from "./CarteraGlosadaContent";

export const metadata: Metadata = {
  title:
    "Cartera Glosada en Colombia: Cómo Recuperar Glosas EPS y Mejorar el Flujo de Caja de IPS y Clínicas (Guía 2026) | PRAVICE",

  description:
    "Descubra qué es la cartera glosada, cuáles son las principales causas de las glosas EPS y cómo una adecuada gestión puede mejorar el recaudo, reducir pérdidas y fortalecer la sostenibilidad financiera de IPS y clínicas en Colombia.",

  keywords: [
    "cartera glosada",
    "cartera glosada Colombia",
    "glosas EPS",
    "glosas EPS Colombia",
    "gestión de glosas",
    "respuesta a glosas EPS",
    "recuperación de cartera glosada",
    "cobro de glosas",
    "glosas médicas",
    "glosas administrativas",
    "glosas por pertinencia",
    "glosas por soportes",
    "conciliación de glosas",
    "facturación en salud",
    "IPS Colombia",
    "clínicas Colombia",
    "cartera EPS",
    "flujo de caja IPS",
    "sector salud Colombia",
    "auditoría de cuentas médicas",
    "recuperación de cartera hospitalaria",
    "recaudo de cartera EPS",
  ],

  authors: [
    {
      name: "PRAVICE",
      url: "https://recaudocarteraipsyeps.com",
    },
  ],

  creator: "PRAVICE",

  publisher: "PRAVICE",

  metadataBase: new URL("https://recaudocarteraipsyeps.com"),

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
  },

  openGraph: {
    title:
      "Cartera Glosada en Colombia: Guía para Reducir Glosas EPS y Recuperar Cartera",

    description:
      "Conozca las principales causas de las glosas EPS, su impacto financiero y las mejores estrategias para optimizar la recuperación de cartera en IPS y clínicas colombianas.",

    url: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",

    siteName: "PRAVICE",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gestión de cartera glosada en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cartera Glosada en Colombia | Gestión de Glosas EPS",

    description:
      "Aprenda cómo reducir glosas EPS, optimizar el recaudo y fortalecer el flujo de caja de IPS y clínicas.",

    images: ["/og-image.jpg"],
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

export default function Page() {
  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",

              name: "PRAVICE",

              url: "https://recaudocarteraipsyeps.com",

              logo: "https://recaudocarteraipsyeps.com/logo.png",

              description:
                "PRAVICE ofrece información especializada sobre recuperación de cartera, glosas EPS, recaudo y sostenibilidad financiera para IPS, hospitales y clínicas en Colombia.",

              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },

              sameAs: ["https://recaudodecartera.com"],
            },

            {
              "@context": "https://schema.org",
              "@type": "WebSite",

              name: "PRAVICE",

              url: "https://recaudocarteraipsyeps.com",

              inLanguage: "es-CO",

              potentialAction: {
                "@type": "SearchAction",

                target:
                  "https://recaudocarteraipsyeps.com/?s={search_term_string}",

                "query-input": "required name=search_term_string",
              },
            },

            {
              "@context": "https://schema.org",
              "@type": "WebPage",

              name: "Cartera Glosada en Colombia | Gestión de Glosas EPS",

              url: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",

              isPartOf: {
                "@type": "WebSite",
                name: "PRAVICE",
              },

              about: [
                "Cartera glosada",
                "Glosas EPS",
                "Recuperación de cartera",
                "IPS",
                "Clínicas",
                "Hospitales",
                "Facturación en salud",
              ],

              primaryImageOfPage:
                "https://recaudocarteraipsyeps.com/og-image.jpg",

              inLanguage: "es-CO",
            },

            {
              "@context": "https://schema.org",
              "@type": "Article",

              headline:
                "Cartera Glosada en Colombia: Cómo Reducir las Glosas EPS y Mejorar el Recaudo",

              alternativeHeadline:
                "Guía sobre cartera glosada, recuperación de glosas y flujo de caja para IPS y clínicas.",

              description:
                "Contenido especializado sobre cartera glosada, glosas EPS, recuperación de cartera hospitalaria, recaudo y sostenibilidad financiera para instituciones prestadoras de servicios de salud.",

              author: {
                "@type": "Organization",
                name: "PRAVICE",
              },

              publisher: {
                "@type": "Organization",
                name: "PRAVICE",
              },

              mainEntityOfPage:
                "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",

              inLanguage: "es-CO",

              keywords: [
                "cartera glosada",
                "glosas EPS",
                "gestión de glosas",
                "cobro de glosas",
                "recuperación de cartera",
                "IPS Colombia",
                "clínicas Colombia",
                "flujo de caja",
                "sector salud",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,

                  name: "Inicio",

                  item: "https://recaudocarteraipsyeps.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,

                  name: "Servicios",

                  item: "https://recaudocarteraipsyeps.com/Servicios",
                },
                {
                  "@type": "ListItem",
                  position: 3,

                  name: "Cartera glosada",

                  item: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "Service",

              name: "Gestión y recuperación de cartera glosada para IPS y clínicas",

              serviceType: [
                "Recuperación de cartera glosada",
                "Respuesta a glosas EPS",
                "Cobro de glosas",
                "Gestión de cartera hospitalaria",
                "Conciliación de glosas",
                "Recuperación de cartera en salud",
              ],

              provider: {
                "@type": "Organization",

                name: "PRAVICE",

                url: "https://recaudocarteraipsyeps.com",
              },

              areaServed: {
                "@type": "Country",

                name: "Colombia",
              },

              audience: {
                "@type": "Audience",

                audienceType:
                  "IPS, clínicas, hospitales, empresas del sector salud",
              },

              description:
                "Servicio especializado orientado a fortalecer la recuperación de cartera glosada, optimizar el recaudo de cuentas por cobrar, disminuir el impacto financiero de las glosas EPS y mejorar el flujo de caja de las instituciones prestadoras de servicios de salud en Colombia.",

              offers: {
                "@type": "Offer",

                availability: "https://schema.org/InStock",
              },
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es la cartera glosada en una IPS o clínica?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La cartera glosada corresponde a las facturas o cuentas presentadas por una IPS o clínica que han sido objetadas parcial o totalmente por una EPS debido a diferencias administrativas, médicas, contractuales o documentales antes de autorizar su pago.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué las glosas afectan el flujo de caja?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Porque retrasan el recaudo esperado, aumentan el tiempo de recuperación de las cuentas por cobrar y reducen la disponibilidad de recursos para atender las obligaciones operativas de la institución.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cuáles son las glosas más frecuentes en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Entre las más comunes se encuentran las glosas administrativas, médicas, tarifarias, por soportes incompletos, por pertinencia y por inconsistencias en la facturación de servicios de salud.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo disminuir el volumen de glosas EPS?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Mediante procesos adecuados de facturación, auditoría preventiva, control documental, seguimiento permanente a las respuestas de glosas y estrategias especializadas de recuperación de cartera.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios genera una adecuada gestión de glosas?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Permite reducir la cartera retenida, mejorar el recaudo, fortalecer el flujo de caja, disminuir pérdidas financieras y contribuir a la sostenibilidad económica de IPS, hospitales y clínicas.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CarteraGlosadaContent />
    </>
  );
}
