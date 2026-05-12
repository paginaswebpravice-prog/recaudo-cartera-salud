import type { Metadata } from "next";
import ComoFuncionanMedidasCautelaresEPS from "./ComoFuncionanMedidasCautelaresEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/como-funcionan-medidas-cautelares-eps";

export const metadata: Metadata = {
  title:
    "Cómo funcionan las medidas cautelares contra EPS en Colombia | Guía 2026",
  description:
    "Aprenda cómo funcionan las medidas cautelares contra EPS en Colombia, cuándo pueden solicitarse y cómo ayudan a recuperar cartera en el sector salud.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo funcionan las medidas cautelares contra EPS en Colombia",
    description:
      "Guía jurídica sobre embargos y medidas cautelares contra EPS para recuperación de cartera en salud.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Medidas cautelares contra EPS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo funcionan las medidas cautelares contra EPS en Colombia",
    description:
      "Conozca cómo operan los embargos y medidas cautelares en procesos contra EPS.",
    images: ["https://recaudocarteraipsyeps.com/logo.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline: "Cómo funcionan las medidas cautelares contra EPS en Colombia",
  description:
    "Aprenda cómo funcionan las medidas cautelares contra EPS en Colombia, cuándo pueden solicitarse y cómo ayudan a recuperar cartera en el sector salud.",
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
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  inLanguage: "es-CO",
  articleSection: "Recuperación de Cartera en Salud",
  keywords: [
    "medidas cautelares EPS",
    "embargo EPS Colombia",
    "demanda EPS cartera",
    "proceso ejecutivo EPS",
    "cobro jurídico EPS",
    "recuperación cartera salud",
    "IPS demanda EPS",
    "medidas cautelares cartera EPS",
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

      <ComoFuncionanMedidasCautelaresEPS />
    </>
  );
}
