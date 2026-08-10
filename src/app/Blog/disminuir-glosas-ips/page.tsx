import type { Metadata } from "next";
import DisminuirGlosasIPS from "./DisminuirGlosasIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/disminuir-glosas-ips";

export const metadata: Metadata = {
  title: "Cómo reducir las glosas en una IPS en Colombia: 10 estrategias",
  description:
    "¿Cómo reducir las glosas en una IPS? Conozca 10 estrategias para mejorar la facturación, prevenir errores, responder glosas y acelerar el recaudo de cartera frente a las EPS.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Cómo reducir las glosas en una IPS en Colombia: 10 estrategias",
    description:
      "Guía práctica para reducir glosas médicas, mejorar la facturación y fortalecer el recaudo de cartera de IPS, clínicas y hospitales.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Cómo reducir las glosas en una IPS en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo reducir las glosas en una IPS en Colombia: 10 estrategias",
    description:
      "Estrategias para prevenir glosas, mejorar la facturación y recuperar cartera de las EPS.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline: "Cómo reducir las glosas en una IPS en Colombia: 10 estrategias",
  description:
    "Guía práctica para IPS, clínicas y hospitales sobre prevención de glosas, auditoría de cuentas médicas, facturación y recuperación de cartera.",
  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
  author: {
    "@type": "Organization",
    name: "PRAVICE",
    url: "https://pravice.co",
  },
  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  inLanguage: "es-CO",
  articleSection: "Gestión de glosas y cartera en salud",
  keywords: [
    "cómo reducir glosas en una IPS",
    "disminuir glosas IPS",
    "porcentaje de glosas",
    "glosas médicas",
    "glosas EPS",
    "gestión de glosas",
    "auditoría de cuentas médicas",
    "facturación médica Colombia",
    "recuperación de cartera IPS",
    "cartera EPS",
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

      <DisminuirGlosasIPS />
    </>
  );
}
