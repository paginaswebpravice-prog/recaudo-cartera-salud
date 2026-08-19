import type { Metadata } from "next";
import RequerimientoDocumentalDemandar from "./RequerimientoDocumentalDemandar";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/requerimiento-documental-demandar-eps";

export const metadata: Metadata = {
  title:
    "Documentos para demandar una EPS por cartera: checklist para IPS y clínicas | Colombia",
  description:
    "Conozca qué documentos conviene revisar antes de iniciar una demanda por cartera contra una EPS: facturas, soportes, radicación, glosas, saldos y demás pruebas para IPS y clínicas en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "¿Qué documentos necesito para demandar una EPS por cartera? Checklist para IPS",
    description:
      "Revise los documentos y soportes que una IPS o clínica debe organizar antes de evaluar una demanda o proceso de cobro por cartera frente a una EPS en Colombia.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Documentos para demandar una EPS por cartera en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Documentos para demandar una EPS por cartera: checklist para IPS y clínicas",
    description:
      "Guía para organizar facturas, soportes, radicaciones y demás documentos antes de iniciar un proceso de cobro contra una EPS.",
    images: ["https://recaudocarteraipsyeps.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "Documentos para demandar una EPS por cartera: checklist para IPS y clínicas",
  description:
    "Guía práctica para organizar y revisar la documentación relacionada con cartera pendiente antes de evaluar una demanda o proceso de cobro contra una EPS en Colombia.",
  image: "https://recaudocarteraipsyeps.com/logo.png",
  author: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    url: "https://recaudocarteraipsyeps.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  inLanguage: "es-CO",
  articleSection: "Cobro jurídico y recuperación de cartera en salud",
  keywords: [
    "documentos para demandar una EPS",
    "demandar EPS por cartera",
    "documentos proceso ejecutivo EPS",
    "requisitos demanda EPS IPS",
    "cobro jurídico cartera salud",
    "facturas para demandar EPS",
    "soportes cartera IPS",
    "pruebas deuda EPS",
    "cartera vencida IPS",
    "proceso ejecutivo cartera salud",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué documentos se deben revisar antes de demandar una EPS por cartera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es necesario revisar, entre otros documentos, las facturas o documentos que soportan la obligación, las constancias de radicación, los soportes de los servicios prestados, las respuestas a glosas o devoluciones, los pagos parciales, las conciliaciones y los documentos que permitan establecer la existencia, cuantía y exigibilidad de la obligación. Los documentos concretos dependen de cada caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Una factura es suficiente para iniciar un proceso contra una EPS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesariamente. La viabilidad de una acción depende de las características de la obligación y de los documentos disponibles. Antes de iniciar un proceso es importante revisar el conjunto de soportes, la exigibilidad de la obligación, los pagos realizados, las objeciones existentes y las particularidades del caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si faltan soportes de una factura de cartera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La ausencia de soportes puede dificultar la acreditación de determinados hechos o valores. Por eso conviene realizar una revisión documental antes de iniciar gestiones de cobro y, cuando sea posible, completar, organizar o reconstruir la información disponible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es necesario conciliar la cartera antes de demandar una EPS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de las circunstancias del caso y de la estrategia de recuperación. Las conciliaciones pueden ayudar a depurar saldos, identificar diferencias y documentar acuerdos, pero la necesidad de adelantar actuaciones previas debe evaluarse según la naturaleza de la obligación y la vía de cobro que corresponda.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([schemaData, faqSchema]),
        }}
      />

      <RequerimientoDocumentalDemandar />
    </>
  );
}
