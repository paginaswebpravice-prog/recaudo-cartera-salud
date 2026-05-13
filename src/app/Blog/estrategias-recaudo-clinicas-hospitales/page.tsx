import type { Metadata } from "next";
import EstrategiasRecaudoClinicasHospitales from "./EstrategiasRecaudoClinicasHospitales";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/estrategias-recaudo-clinicas-hospitales";

export const metadata: Metadata = {
  title:
    "Estrategias de recaudo para clínicas y hospitales en Colombia | Guía 2026",
  description:
    "Conozca estrategias efectivas de recaudo para clínicas y hospitales en Colombia. Mejore el flujo de caja, reduzca cartera vencida y optimice pagos de EPS.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Estrategias de recaudo para clínicas y hospitales en Colombia",
    description:
      "Guía especializada para IPS, clínicas y hospitales sobre recuperación de cartera y recaudo eficiente en Colombia.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Estrategias de recaudo para clínicas y hospitales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Estrategias de recaudo para clínicas y hospitales en Colombia",
    description:
      "Cómo mejorar el recaudo y reducir cartera vencida en el sector salud.",
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
  headline: "Estrategias de recaudo para clínicas y hospitales en Colombia",
  description:
    "Conozca estrategias efectivas de recaudo para clínicas y hospitales en Colombia. Mejore el flujo de caja, reduzca cartera vencida y optimice pagos de EPS.",
  image: "https://recaudocarteraipsyeps.com/logo.png",
  author: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
  },
  publisher: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  inLanguage: "es-CO",
  articleSection: "Recaudo en Salud",
  keywords: [
    "estrategias de recaudo IPS",
    "recaudo clínicas Colombia",
    "cartera hospitales Colombia",
    "cobro EPS clínicas",
    "flujo de caja IPS",
    "cartera vencida hospitales",
    "recaudo sector salud",
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

      <EstrategiasRecaudoClinicasHospitales />
    </>
  );
}
