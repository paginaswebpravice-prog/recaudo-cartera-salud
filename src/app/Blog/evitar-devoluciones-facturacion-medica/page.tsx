import type { Metadata } from "next";
import EvitarDevolucionesFacturacionMedica from "./EvitarDevolucionesFacturacionMedica";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/evitar-devoluciones-facturacion-medica";

export const metadata: Metadata = {
  title:
    "Cómo evitar devoluciones de facturación médica | Guía para IPS y clínicas",

  description:
    "Aprenda cómo prevenir devoluciones de facturación médica en Colombia, detectar errores antes de radicar cuentas y mejorar el recaudo de IPS, clínicas y hospitales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo evitar devoluciones de facturación médica | Guía para IPS",

    description:
      "Guía práctica para identificar las causas de devolución de cuentas médicas, mejorar la radicación y reducir retrasos en el recaudo de IPS y clínicas.",

    type: "article",

    url: canonicalUrl,

    siteName: "Recaudo Cartera IPS y EPS",

    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo evitar devoluciones de facturación médica | Guía para IPS",

    description:
      "Conozca los errores que pueden generar devoluciones de cuentas médicas y cómo fortalecer la facturación y el recaudo de su IPS.",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Cómo evitar devoluciones de facturación médica en Colombia: guía práctica para IPS y clínicas",

    description:
      "Guía práctica para IPS, clínicas y hospitales sobre las causas de las devoluciones de facturación médica, controles preventivos, revisión documental y acciones para mejorar el recaudo de cartera.",

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

    articleSection: "Facturación médica y recaudo de cartera",

    keywords: [
      "devoluciones de facturación médica",
      "cómo evitar devoluciones de facturas médicas",
      "devolución de cuentas médicas",
      "facturación médica Colombia",
      "cuentas médicas IPS",
      "auditoría de cuentas médicas",
      "errores de facturación médica",
      "glosas y devoluciones",
      "recaudo de cartera IPS",
      "cartera EPS",
      "facturación IPS",
      "recuperación de cartera salud",
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

      <EvitarDevolucionesFacturacionMedica />
    </>
  );
}
