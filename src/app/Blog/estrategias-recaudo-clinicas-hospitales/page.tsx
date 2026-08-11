import type { Metadata } from "next";
import EstrategiasRecaudoClinicasHospitales from "./EstrategiasRecaudoClinicasHospitales";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/estrategias-recaudo-clinicas-hospitales";

export const metadata: Metadata = {
  title:
    "Estrategias de recaudo para IPS: cómo reducir cartera vencida y mejorar el flujo de caja",
  description:
    "Conozca estrategias de recaudo para clínicas, hospitales e IPS en Colombia: seguimiento de cartera, gestión de glosas, conciliación, cobro prejurídico y acciones para mejorar el flujo de caja.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "Estrategias de recaudo para IPS: reduzca cartera vencida y mejore su flujo de caja",
    description:
      "Guía práctica para clínicas, hospitales e IPS que buscan mejorar el recaudo, controlar cartera vencida y acelerar la recuperación de recursos frente a EPS.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Estrategias de recaudo para IPS, clínicas y hospitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Estrategias de recaudo para IPS: reduzca cartera vencida y mejore su flujo de caja",
    description:
      "Guía práctica sobre recaudo, cartera vencida, glosas, conciliaciones y cobro de cartera frente a EPS.",
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
    "Estrategias de recaudo para IPS: cómo reducir cartera vencida y mejorar el flujo de caja",
  description:
    "Guía práctica sobre estrategias de recaudo para clínicas, hospitales e IPS en Colombia, con recomendaciones para controlar cartera vencida, gestionar glosas, conciliar cuentas y mejorar el flujo de caja.",
  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
  author: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
  },
  publisher: {
    "@type": "Organization",
    name: "Recaudo Cartera IPS y EPS",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },
  datePublished: "2026-05-13",
  dateModified: "2026-08-11",
  inLanguage: "es-CO",
  articleSection: "Recaudo en Salud",
  keywords: [
    "estrategias de recaudo IPS",
    "recaudo para clínicas",
    "recaudo para hospitales",
    "recuperación de cartera EPS",
    "cartera vencida IPS",
    "cobro de cartera EPS",
    "flujo de caja IPS",
    "gestión de cartera en salud",
    "cobro prejurídico EPS",
    "recuperación de cartera en salud",
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
