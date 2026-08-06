import CobroCarteraADRES from "./CobroCarteraAdres";

export const metadata = {
  title:
    "Cómo cobrar cartera ante ADRES en Colombia (Guía 2026) | Recuperar pagos retenidos, objetados o negados para IPS y clínicas",

  description:
    "Aprenda cómo recuperar cartera ante ADRES en Colombia. Descubra qué servicios pueden reclamarse, documentos necesarios, respuesta a objeciones, errores frecuentes, acciones jurídicas y estrategias para aumentar el recaudo en IPS, clínicas y hospitales.",

  keywords: [
    "cobro cartera ADRES",
    "cómo cobrar ADRES",
    "recuperar cartera ADRES",
    "ADRES Colombia",
    "reclamaciones ADRES",
    "IPS Colombia",
    "hospitales Colombia",
    "clínicas Colombia",
    "glosas ADRES",
    "objeciones ADRES",
    "facturación ADRES",
    "recaudo sector salud",
    "cobro cartera IPS",
    "cartera EPS",
    "recuperación cartera salud",
    "cartera hospitales",
    "cartera clínicas",
    "auditoría médica",
    "procesos ejecutivos EPS",
    "PRAVICE",
  ],

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",
  },

  openGraph: {
    title:
      "Cómo cobrar cartera ante ADRES en Colombia | Guía completa para IPS, hospitales y clínicas",

    description:
      "Conozca la ruta completa para recuperar pagos ante ADRES, responder objeciones, evitar devoluciones y aumentar el recaudo de cartera en el sector salud.",

    url: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",

    siteName: "PRAVICE",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo recuperar cartera ante ADRES | Guía para IPS y clínicas",

    description:
      "Aprenda cómo reclamar pagos ante ADRES, evitar devoluciones y recuperar cartera del sector salud en Colombia.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Cómo cobrar cartera ante ADRES en Colombia: guía completa para recuperar pagos retenidos, objetados o negados",

    description:
      "Guía especializada para IPS, clínicas y hospitales sobre recuperación de cartera ante ADRES, reclamaciones administrativas, respuesta a objeciones y estrategias jurídicas.",

    image:
      "https://recaudocarteraipsyeps.com/images/blog/cobro-cartera-adres.jpg",

    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    inLanguage: "es-CO",

    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",

    keywords: [
      "ADRES",
      "cobro cartera",
      "IPS",
      "clínicas",
      "hospitales",
      "glosas",
      "reclamaciones",
      "sector salud",
      "auditoría médica",
      "recuperación cartera",
    ],
  };

  const breadcrumbSchema = {
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
        name: "Blog",
        item: "https://recaudocarteraipsyeps.com/Blog",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: "Cobro de cartera ante ADRES",
        item: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué es la ADRES?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La ADRES es la entidad encargada de administrar diferentes recursos del Sistema General de Seguridad Social en Salud y participa en el reconocimiento económico de determinados servicios definidos por la normativa colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Todas las facturas médicas pueden cobrarse ante ADRES?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Cada caso debe analizarse para identificar la entidad responsable del reconocimiento económico según la regulación vigente.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos son necesarios para presentar una reclamación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se requiere factura, historia clínica, soportes administrativos, órdenes médicas y demás documentos exigidos según el tipo de reclamación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué hacer si ADRES rechaza una reclamación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Debe analizarse el motivo del rechazo para determinar si procede una subsanación, respuesta técnica, recurso administrativo o acción judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cómo aumentar la probabilidad de recuperar la cartera?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Mediante auditoría documental, seguimiento permanente, correcta radicación y una estrategia jurídica cuando sea necesaria.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <CobroCarteraADRES />
    </>
  );
}
