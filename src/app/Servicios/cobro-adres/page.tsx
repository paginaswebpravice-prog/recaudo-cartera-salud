import { Metadata } from "next";
import CobroAdresContent from "./CobroAdresContent";

export const metadata: Metadata = {
  title:
    "Cobro ADRES para IPS y Clínicas en Colombia | Recuperación de Recobros NO PBS, SOAT, ECAT y Reclamaciones 2026",

  description:
    "Optimice el cobro ante ADRES en Colombia. Conozca cómo recuperar recobros NO PBS, reclamaciones SOAT, ECAT y demás recursos para IPS, clínicas y hospitales mediante procesos técnicos, jurídicos y administrativos que reduzcan devoluciones y mejoren el flujo de caja.",

  keywords: [
    "cobro ADRES",
    "ADRES Colombia",
    "cómo cobrar ADRES",
    "recobro ADRES",
    "recobros NO PBS",
    "NO PBS Colombia",
    "cobro SOAT ADRES",
    "ECAT ADRES",
    "reclamaciones ADRES",
    "devoluciones ADRES",
    "radicación ADRES",
    "IPS Colombia",
    "clínicas Colombia",
    "hospitales Colombia",
    "cartera ADRES",
    "recuperación de cartera salud",
    "recaudo cartera IPS",
    "recuperación recursos ADRES",
    "auditoría documental ADRES",
    "servicios de salud Colombia",
    "facturación en salud",
    "cartera EPS",
    "flujo de caja IPS",
    "consultoría ADRES",
    "procesos ADRES",
    "gestión de reclamaciones ADRES",
    "cobro de reclamaciones SOAT",
    "reclamaciones ECAT",
    "reconocimiento económico ADRES",
    "prestadores de servicios de salud",
    "gestión de cartera hospitalaria",
    "recobro servicios NO PBS",
  ],

  authors: [
    {
      name: "PRAVICE ABOGADOS S.A.S.",
      url: "https://recaudocarteraipsyeps.com",
    },
  ],

  creator: "PRAVICE ABOGADOS S.A.S.",

  publisher: "PRAVICE ABOGADOS S.A.S.",

  metadataBase: new URL("https://recaudocarteraipsyeps.com"),

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
  },

  category: "Servicios Jurídicos",

  openGraph: {
    title:
      "Cobro ADRES para IPS, Clínicas y Hospitales | Recuperación de Recursos en Colombia",

    description:
      "Conozca cómo optimizar la radicación de reclamaciones, disminuir devoluciones y fortalecer la recuperación de recursos ante ADRES mediante procesos técnicos y jurídicos especializados.",

    url: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",

    siteName: "Recaudo Cartera IPS y EPS",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cobro ADRES para IPS y Clínicas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cobro ADRES en Colombia para IPS, Clínicas y Hospitales",

    description:
      "Aprenda cómo optimizar los procesos de cobro ante ADRES y mejorar la recuperación de recursos del sector salud.",

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
};

export default function Page() {
  return (
    <>
      {/* ====================== SCHEMA SEO ====================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            /* ============================================================
               SERVICE
            ============================================================ */
            {
              "@context": "https://schema.org",
              "@type": "Service",

              name: "Servicio de Cobro ADRES para IPS, Clínicas y Hospitales en Colombia",

              url: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",

              description:
                "Servicio especializado en gestión técnica, administrativa y jurídica para procesos de cobro ante ADRES, incluyendo reclamaciones SOAT, ECAT, recobros NO PBS, auditoría documental, radicación y recuperación de recursos para IPS, clínicas y hospitales en Colombia.",

              serviceType: [
                "Cobro ADRES",
                "Recobros NO PBS",
                "Reclamaciones SOAT",
                "Reclamaciones ECAT",
                "Auditoría documental",
                "Recuperación de cartera",
                "Recuperación de recursos del sector salud",
                "Consultoría en procesos ADRES",
              ],

              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },

              provider: {
                "@type": "Organization",
                name: "PRAVICE ABOGADOS S.A.S.",
                url: "https://recaudocarteraipsyeps.com",
              },
            },

            /* ============================================================
               ARTICLE
            ============================================================ */

            {
              "@context": "https://schema.org",

              "@type": "Article",

              headline:
                "Cobro ADRES en Colombia: guía sobre reclamaciones, recobros NO PBS, SOAT, ECAT y recuperación de recursos",

              description:
                "Guía especializada para IPS, clínicas y hospitales sobre los procesos de cobro ante ADRES, reducción de devoluciones, auditoría documental y fortalecimiento del recaudo.",

              author: {
                "@type": "Organization",
                name: "PRAVICE ABOGADOS S.A.S.",
              },

              publisher: {
                "@type": "Organization",
                name: "PRAVICE ABOGADOS S.A.S.",
              },

              mainEntityOfPage:
                "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",

              inLanguage: "es-CO",

              about: [
                "Cobro ADRES",
                "Recobros NO PBS",
                "SOAT",
                "ECAT",
                "IPS",
                "Clínicas",
                "Hospitales",
                "Recuperación de cartera",
                "Sector salud colombiano",
              ],
            },

            /* ============================================================
               WEBPAGE
            ============================================================ */

            {
              "@context": "https://schema.org",

              "@type": "WebPage",

              name: "Cobro ADRES para IPS y Clínicas en Colombia",

              url: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",

              description:
                "Información especializada sobre procesos de cobro ante ADRES, radicación de reclamaciones, recuperación de recursos y optimización del recaudo para prestadores de servicios de salud.",

              inLanguage: "es-CO",

              isPartOf: {
                "@type": "WebSite",
                name: "Recaudo Cartera IPS y EPS",
                url: "https://recaudocarteraipsyeps.com",
              },
            },
            /* ============================================================
               BREADCRUMB
            ============================================================ */

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
                  name: "Cobro ADRES",
                  item: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
                },
              ],
            },

            /* ============================================================
               FAQ PAGE
            ============================================================ */

            {
              "@context": "https://schema.org",

              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",

                  name: "¿Qué es ADRES en Colombia?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La Administradora de los Recursos del Sistema General de Seguridad Social en Salud (ADRES) administra recursos del sistema de salud y realiza el reconocimiento y pago de diferentes reclamaciones y recobros definidos por la normativa colombiana.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué tipo de reclamaciones pueden presentarse ante ADRES?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Dependiendo del caso, pueden presentarse reclamaciones relacionadas con tecnologías y servicios NO PBS, accidentes de tránsito cubiertos por SOAT, eventos catastróficos (ECAT) y otros conceptos establecidos por la regulación vigente.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué ADRES puede devolver una reclamación?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Las devoluciones normalmente se producen por inconsistencias documentales, errores de radicación, incumplimiento de requisitos técnicos, soportes incompletos o diferencias encontradas durante la auditoría.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué son los recobros NO PBS?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Corresponden a tecnologías y servicios de salud que no hacen parte de los beneficios financiados con la UPC y que, bajo determinados requisitos, pueden ser objeto de reconocimiento económico.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Cómo reducir las devoluciones en los procesos de cobro ante ADRES?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "La revisión técnica de la documentación, la correcta estructuración del expediente, la validación previa de soportes y el seguimiento permanente al proceso ayudan a disminuir el riesgo de devoluciones.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Por qué es importante una auditoría documental antes de radicar?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una auditoría documental permite identificar inconsistencias antes de la radicación, reduciendo reprocesos, tiempos de respuesta y posibles devoluciones.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Las IPS y clínicas pueden mejorar sus procesos de recuperación de recursos?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Sí. La implementación de procesos organizados de auditoría, seguimiento, conciliación y control documental puede fortalecer significativamente la recuperación de recursos y el flujo de caja.",
                  },
                },

                {
                  "@type": "Question",

                  name: "¿Qué beneficios aporta optimizar el proceso de cobro ante ADRES?",

                  acceptedAnswer: {
                    "@type": "Answer",

                    text: "Una mejor gestión puede reducir devoluciones, agilizar el recaudo, fortalecer la liquidez institucional, disminuir reprocesos administrativos y mejorar la sostenibilidad financiera de IPS, clínicas y hospitales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobroAdresContent />
    </>
  );
}
