import type { Metadata } from "next";
import RespuestaEpsCompraCartera from "./RespuestaEpsCompraCartera";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/respuesta-eps-compra-cartera";

export const metadata: Metadata = {
  title:
    "EPS propone comprar su cartera: qué responder y qué revisar antes de aceptar",
  description:
    "¿Una EPS le propuso comprar o negociar su cartera? Conozca qué revisar antes de aceptar descuentos, cómo evaluar la propuesta y qué alternativas tiene una IPS en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "EPS propone comprar su cartera: qué responder antes de aceptar la oferta",
    description:
      "Guía para IPS y clínicas en Colombia sobre compra de cartera, descuentos, negociación, acuerdos de pago y alternativas para recuperar cuentas pendientes.",
    url: canonicalUrl,
    type: "article",
    locale: "es_CO",
    siteName: "Recaudo Cartera IPS y EPS",
  },

  twitter: {
    card: "summary_large_image",
    title: "EPS propone comprar su cartera: qué revisar antes de aceptar",
    description:
      "Qué hacer cuando una EPS propone negociar o comprar la cartera de una IPS o clínica en Colombia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "EPS propone comprar su cartera: qué responder y qué revisar antes de aceptar",
    description:
      "Guía para IPS, clínicas y prestadores de salud en Colombia sobre cómo evaluar una propuesta de compra o negociación de cartera presentada por una EPS.",
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
    inLanguage: "es-CO",
    articleSection: "Recuperación de cartera en salud",
    keywords: [
      "EPS compra cartera",
      "compra de cartera EPS",
      "EPS propone comprar cartera",
      "negociar cartera con EPS",
      "descuento cartera EPS",
      "recuperación de cartera IPS",
      "cartera EPS IPS",
      "acuerdo de pago EPS",
      "cobro cartera sector salud",
      "recuperar cartera clínica",
      "cartera vencida EPS",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué hacer si una EPS propone comprar la cartera de una IPS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Antes de aceptar o rechazar la propuesta, conviene revisar qué obligaciones están incluidas, cuál es el descuento ofrecido, qué cuentas presentan glosas o controversias y cuál sería el valor real que recibiría la IPS frente a otras alternativas de recuperación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio aceptar una propuesta de compra de cartera de una EPS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. La conveniencia de una propuesta depende de las condiciones concretas de la negociación, del estado de la cartera, de los soportes disponibles y de las alternativas de cobro o acuerdo que existan.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué debe revisar una IPS antes de aceptar un descuento sobre su cartera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es importante identificar las facturas incluidas, el porcentaje de descuento, los valores reconocidos, las cuentas discutidas, las condiciones de pago, los efectos del acuerdo y cualquier cláusula relacionada con la renuncia a futuras reclamaciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué alternativas existen a la compra de cartera por parte de una EPS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, pueden evaluarse acuerdos de pago, conciliaciones, mesas de depuración de cartera, gestión prejurídica y acciones judiciales cuando existan los requisitos y soportes necesarios.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([schema, faqSchema]),
        }}
      />

      <RespuestaEpsCompraCartera />
    </>
  );
}
