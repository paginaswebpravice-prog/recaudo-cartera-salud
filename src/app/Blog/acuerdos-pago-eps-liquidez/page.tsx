import AcuerdosPagoEPSLiquidez from "./AcuerdosPagoEPSLiquidez";

export const metadata = {
  title:
    "Acuerdos de pago con EPS en Colombia: cómo negociar sin afectar la liquidez de su IPS",
  description:
    "Aprenda cómo negociar acuerdos de pago con EPS en Colombia, qué cláusulas revisar, qué errores evitar y cómo proteger la liquidez de su IPS mientras recupera cartera de manera estratégica. Guía completa para clínicas, hospitales y prestadores de servicios de salud.",
  keywords: [
    "acuerdos de pago EPS",
    "negociar acuerdos de pago EPS",
    "cómo negociar con una EPS",
    "recuperación de cartera IPS",
    "recuperación de cartera EPS",
    "liquidez IPS",
    "flujo de caja IPS",
    "cartera vencida EPS",
    "cobro jurídico EPS",
    "gestión financiera IPS",
    "hospitales Colombia",
    "clínicas Colombia",
    "acuerdos de pago sector salud",
    "recaudo de cartera",
    "cartera en salud Colombia",
  ],
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/acuerdos-pago-eps-liquidez",
  },

  openGraph: {
    title:
      "Acuerdos de pago con EPS: cómo negociar y proteger la liquidez de su IPS",
    description:
      "Descubra cómo estructurar acuerdos de pago con EPS, reducir riesgos financieros y recuperar cartera sin afectar la operación de su IPS, clínica u hospital.",
    url: "https://recaudocarteraipsyeps.com/Blog/acuerdos-pago-eps-liquidez",
    type: "article",
    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo negociar acuerdos de pago con EPS sin afectar la liquidez",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre negociación de cartera, flujo de caja y recuperación de recursos.",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Cómo negociar acuerdos de pago con EPS sin afectar la liquidez de su IPS",

    description:
      "Guía completa para IPS, hospitales y clínicas sobre acuerdos de pago con EPS, recuperación de cartera, negociación financiera y estrategias jurídicas en Colombia.",

    inLanguage: "es-CO",

    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/acuerdos-pago-eps-liquidez",

    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },

    keywords: [
      "acuerdos de pago EPS",
      "negociar EPS",
      "recuperación de cartera",
      "IPS",
      "hospitales",
      "clínicas",
      "liquidez",
      "flujo de caja",
      "proceso ejecutivo",
      "cobro jurídico",
      "sector salud",
      "Colombia",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Conviene aceptar cualquier acuerdo de pago con una EPS?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No. Antes de aceptar cualquier acuerdo es recomendable evaluar el plazo, las garantías, el impacto sobre la liquidez, el historial de cumplimiento de la EPS y la viabilidad financiera de la negociación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué debe contener un acuerdo de pago?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Debe establecer el valor reconocido, cronograma de pagos, garantías, tratamiento de intereses, responsables y consecuencias en caso de incumplimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es mejor negociar o demandar una EPS?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende de cada caso. Cuando existen incumplimientos reiterados o riesgo de insolvencia, puede ser recomendable evaluar acciones judiciales además de la negociación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cómo proteger la liquidez durante un acuerdo de pago?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es importante negociar pagos iniciales representativos, cronogramas realistas, garantías suficientes y realizar seguimiento permanente al cumplimiento del acuerdo.",
        },
      },
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

        name: "Cómo negociar acuerdos de pago con EPS sin afectar la liquidez",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <AcuerdosPagoEPSLiquidez />
    </>
  );
}
