import type { Metadata } from "next";
import ComoDemandarEPSColombiaContent from "./ComoDemandarEPSColombiaContent";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/como-demandar-eps-colombia";

export const metadata: Metadata = {
  title:
    "¿Cómo demandar una EPS en Colombia por cartera vencida? Guía 2026 para IPS",
  description:
    "¿Una EPS no le paga a su IPS? Conozca cuándo demandar, qué documentos necesita, cómo funciona el cobro judicial y qué opciones existen para recuperar cartera vencida en Colombia.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "¿Cómo demandar una EPS por cartera vencida? Guía para IPS y clínicas",
    description:
      "Conozca cuándo conviene demandar una EPS, qué documentos necesita una IPS y cómo funciona el cobro judicial de cartera vencida en Colombia.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo demandar una EPS en Colombia por cartera vencida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "¿Cómo demandar una EPS por cartera vencida? Guía para IPS y clínicas",
    description:
      "Guía 2026 para IPS y clínicas: documentos, cobro prejurídico, proceso ejecutivo y opciones para recuperar cartera vencida de EPS.",
    images: ["https://recaudocarteraipsyeps.com/og-image.jpg"],
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
    "¿Cómo demandar una EPS por cartera vencida? Guía para IPS y clínicas en Colombia",
  description:
    "Guía jurídica sobre cómo demandar una EPS en Colombia por cartera vencida, qué documentos necesita una IPS, cuándo acudir al cobro judicial y qué aspectos deben revisarse antes de iniciar un proceso.",
  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
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
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },
  datePublished: "2026-05-12",
  dateModified: "2026-08-10",
  inLanguage: "es-CO",
  articleSection: "Cobro de cartera EPS",
  keywords: [
    "cómo demandar una EPS",
    "demandar EPS Colombia",
    "cartera vencida EPS",
    "cobro judicial EPS",
    "cobro jurídico EPS",
    "proceso ejecutivo contra EPS",
    "IPS demandar EPS",
    "recuperación de cartera EPS",
    "cobro de cartera salud",
    "cartera IPS",
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

      <ComoDemandarEPSColombiaContent />
    </>
  );
}
