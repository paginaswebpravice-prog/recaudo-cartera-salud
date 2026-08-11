import type { Metadata } from "next";
import EPSSuspendePagos from "./EPSSuspendePagos";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/eps-suspende-pagos";

export const metadata: Metadata = {
  title: "EPS suspende pagos: ¿qué puede hacer una IPS? | Guía 2026",

  description:
    "¿Una EPS dejó de pagar a su IPS? Conozca qué hacer, cómo proteger la cartera vencida y cuándo pasar del cobro administrativo al cobro jurídico en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "EPS suspende pagos: qué puede hacer una IPS para recuperar cartera",
    description:
      "Guía práctica para IPS, clínicas y hospitales: qué revisar cuando una EPS deja de pagar, cómo documentar la deuda y cuándo evaluar acciones jurídicas.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Qué hacer cuando una EPS suspende pagos a una IPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EPS suspende pagos: ¿qué puede hacer una IPS?",
    description:
      "Qué hacer cuando una EPS deja de pagar cartera a una IPS y cómo preparar una estrategia de recuperación administrativa, prejurídica y judicial.",
    images: ["https://recaudocarteraipsyeps.com/logo.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline:
    "EPS suspende pagos: qué puede hacer una IPS para recuperar cartera",

  description:
    "Guía práctica para IPS, clínicas y hospitales sobre qué hacer cuando una EPS suspende o retrasa sus pagos, cómo proteger la cartera vencida y cuándo evaluar acciones jurídicas en Colombia.",

  image: "https://recaudocarteraipsyeps.com/logo.png",

  author: {
    "@type": "Organization",
    name: "PRAVICE",
  },

  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },

  inLanguage: "es-CO",

  articleSection: "Recuperación de Cartera EPS",

  keywords: [
    "EPS suspende pagos",
    "qué hacer si una EPS no paga",
    "cartera EPS",
    "cartera vencida IPS",
    "cobro de cartera EPS",
    "cobro prejurídico EPS",
    "cobro judicial EPS",
    "proceso ejecutivo EPS",
    "recuperación de cartera IPS",
    "IPS Colombia",
    "clínicas Colombia",
    "hospitales Colombia",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <EPSSuspendePagos />
    </>
  );
}
