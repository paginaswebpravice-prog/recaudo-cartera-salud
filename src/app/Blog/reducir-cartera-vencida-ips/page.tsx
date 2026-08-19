import type { Metadata } from "next";
import ReducirCarteraVencidaIPS from "./ReducirCarteraVencidaIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/reducir-cartera-vencida-ips";

export const metadata: Metadata = {
  title:
    "Cómo reducir la cartera vencida en una IPS: 10 estrategias para mejorar el recaudo",
  description:
    "Descubre cómo reducir la cartera vencida en una IPS con estrategias de facturación, seguimiento, glosas, conciliación y recuperación de pagos en Colombia.",

  keywords: [
    "cómo reducir cartera vencida en una IPS",
    "reducir cartera vencida IPS",
    "gestión de cartera IPS",
    "recaudo IPS Colombia",
    "cartera vencida sector salud",
    "cómo mejorar el recaudo de una IPS",
    "recuperación de cartera EPS",
    "cobro de cartera IPS",
    "gestión financiera IPS",
    "cartera hospitalaria",
    "disminuir cartera vencida clínica",
    "cuentas por cobrar IPS",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo reducir la cartera vencida en una IPS y mejorar el recaudo",
    description:
      "10 estrategias prácticas para controlar la cartera vencida, mejorar el recaudo y fortalecer la liquidez de IPS, clínicas y hospitales.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo reducir la cartera vencida en una IPS y mejorar el recaudo",
    description:
      "Estrategias prácticas para IPS, clínicas y hospitales que buscan reducir la cartera vencida y mejorar su liquidez.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Cómo reducir la cartera vencida en una IPS: 10 estrategias para mejorar el recaudo",
      description:
        "Guía práctica para IPS, clínicas y hospitales sobre cómo reducir la cartera vencida, mejorar el recaudo y fortalecer la gestión de cuentas por cobrar en Colombia.",
      inLanguage: "es-CO",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
      author: {
        "@type": "Organization",
        name: "PRAVICE",
      },
      publisher: {
        "@type": "Organization",
        name: "PRAVICE",
      },
      articleSection: "Gestión de cartera para IPS",
      keywords: [
        "reducir cartera vencida IPS",
        "gestión de cartera IPS",
        "recaudo IPS",
        "cartera vencida salud Colombia",
        "recuperación de cartera EPS",
        "gestión financiera IPS",
        "cuentas por cobrar IPS",
        "cartera hospitalaria",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo puede una IPS reducir su cartera vencida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Una IPS puede reducir su cartera vencida mejorando la facturación y radicación, clasificando las cuentas por antigüedad, haciendo seguimiento periódico a los pagadores, gestionando oportunamente las glosas, realizando conciliaciones y definiendo rutas de escalamiento para los casos que no avanzan.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es la mejor estrategia para recuperar cartera vencida en una IPS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No existe una única estrategia para toda la cartera. Lo recomendable es segmentar las cuentas según su antigüedad, valor, estado documental y comportamiento del pagador. La cartera reciente puede requerir seguimiento administrativo, mientras que los casos más antiguos o críticos pueden necesitar conciliación, gestión prejurídica o evaluación jurídica.",
          },
        },
        {
          "@type": "Question",
          name: "¿Por qué una IPS puede tener mucha cartera vencida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La cartera vencida puede crecer por errores en facturación, radicaciones incompletas, glosas sin gestionar, falta de conciliación, demoras de los pagadores, ausencia de indicadores y falta de seguimiento sistemático a las cuentas por cobrar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué indicadores debe revisar una IPS para controlar su cartera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entre los indicadores útiles se encuentran los días promedio de cartera, la cartera por rangos de antigüedad, el porcentaje de recaudo, la rotación de cartera, el valor recuperado mediante conciliación, el comportamiento de las glosas y la concentración de cartera por pagador.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuándo debería una IPS escalar una cuenta a gestión jurídica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La decisión depende del estado particular de la obligación, sus soportes, la gestión previa realizada y la viabilidad de las acciones disponibles. Generalmente conviene evaluar el escalamiento cuando las gestiones administrativas y conciliatorias no producen avances o cuando existen riesgos asociados al paso del tiempo.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <ReducirCarteraVencidaIPS />
    </>
  );
}
