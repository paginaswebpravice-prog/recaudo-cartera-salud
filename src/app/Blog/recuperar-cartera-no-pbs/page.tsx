import type { Metadata } from "next";
import RecuperarCarteraNoPBS from "./RecuperarCarteraNoPBS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/recuperar-cartera-no-pbs";

export const metadata: Metadata = {
  title:
    "Cómo recuperar cartera NO PBS en Colombia y reclamar pagos correctamente | Guía 2026",
  description:
    "Aprenda cómo recuperar cartera NO PBS en Colombia, reclamar pagos pendientes y reducir riesgos financieros en IPS y clínicas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cómo recuperar cartera NO PBS en Colombia y reclamar pagos correctamente",
    description:
      "Guía jurídica sobre recuperación de cartera NO PBS, reclamaciones y cobro de servicios de salud en Colombia.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Recuperación de cartera NO PBS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cómo recuperar cartera NO PBS en Colombia y reclamar pagos correctamente",
    description:
      "Estrategias jurídicas para recuperar cartera NO PBS en Colombia.",
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
  headline:
    "Cómo recuperar cartera NO PBS en Colombia y reclamar pagos correctamente",
  description:
    "Aprenda cómo funciona el cobro de cartera NO PBS en Colombia y qué estrategias ayudan a recuperar pagos pendientes en el sector salud.",
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
  articleSection: "Cartera NO PBS",
  keywords: [
    "cartera NO PBS",
    "recuperar cartera NO PBS",
    "cobro NO PBS Colombia",
    "cartera EPS Colombia",
    "ADRES NO PBS",
    "reclamaciones NO PBS",
    "IPS cartera vencida",
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

      <RecuperarCarteraNoPBS />
    </>
  );
}
