import type { Metadata } from "next";
import CuandoPrescribeCarteraEPS from "./CuandoPrescribeCarteraEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/cuando-prescribe-cartera-eps";

export const metadata: Metadata = {
  title: "¿Cuándo prescribe la cartera de EPS? Plazos y cómo evitar perderla",
  description:
    "¿Cuándo prescribe una cartera de EPS en Colombia? Conozca qué determina el plazo, cómo revisar una cuenta vencida y qué acciones puede tomar una IPS antes de perder el derecho de cobro.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "¿Cuándo prescribe la cartera de EPS? Plazos y cómo evitar perderla",
    description:
      "Guía para IPS y prestadores de salud sobre prescripción de cartera EPS, facturas vencidas, términos de cobro y acciones para proteger la cartera.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Cuándo prescribe la cartera de EPS en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Cuándo prescribe la cartera de EPS? Plazos y cómo evitar perderla",
    description:
      "Conozca qué determina la prescripción de una cartera EPS y qué puede hacer una IPS para proteger sus cuentas por cobrar.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
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
    "¿Cuándo prescribe la cartera de EPS? Plazos y cómo evitar perderla",
  description:
    "Guía para IPS y prestadores de salud sobre prescripción de cartera EPS, facturas vencidas, términos de cobro y acciones para proteger las cuentas por cobrar.",
  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
  author: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    url: "https://recaudocarteraipsyeps.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    url: "https://recaudocarteraipsyeps.com",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },
  datePublished: "2026-05-12",
  dateModified: "2026-08-10",
  inLanguage: "es-CO",
  articleSection: "Prescripción de cartera EPS",
  keywords: [
    "cuándo prescribe la cartera EPS",
    "prescripción cartera EPS",
    "prescripción cartera IPS",
    "cartera EPS Colombia",
    "prescripción facturas EPS",
    "facturas vencidas EPS",
    "cobro cartera EPS",
    "recuperación cartera salud",
    "cartera vencida IPS",
    "demanda contra EPS",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <CuandoPrescribeCarteraEPS />
    </>
  );
}
