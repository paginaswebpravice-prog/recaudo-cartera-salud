import type { Metadata } from "next";
import DiversificacionIngresosIPS from "./DiversificacionIngresosIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/diversificacion-ingresos-ips";

export const metadata: Metadata = {
  title:
    "Diversificación de ingresos en IPS: 9 estrategias para reducir riesgos",
  description:
    "Conozca cómo diversificar los ingresos de una IPS en Colombia, reducir la dependencia de las EPS, mejorar el flujo de caja y fortalecer la sostenibilidad financiera.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "Diversificación de ingresos en IPS: estrategias para reducir riesgos financieros",
    description:
      "Guía práctica para IPS, clínicas y hospitales que buscan nuevas fuentes de ingresos, menor dependencia de las EPS y mayor estabilidad financiera.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Diversificación de ingresos para IPS en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Diversificación de ingresos en IPS: estrategias para reducir riesgos",
    description:
      "Cómo reducir la dependencia de las EPS, generar nuevas fuentes de ingresos y fortalecer las finanzas de una IPS.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "Diversificación de ingresos en IPS: 9 estrategias para reducir riesgos",
  description:
    "Guía práctica para IPS, clínicas y hospitales que buscan diversificar sus fuentes de ingresos, reducir la dependencia de las EPS y fortalecer su sostenibilidad financiera.",
  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
  inLanguage: "es-CO",
  articleSection: "Gestión financiera para IPS",
  keywords: [
    "diversificación de ingresos IPS",
    "ingresos IPS Colombia",
    "sostenibilidad financiera IPS",
    "dependencia de EPS",
    "riesgos financieros IPS",
    "flujo de caja IPS",
    "gestión financiera clínicas",
    "nuevas fuentes de ingresos IPS",
    "cartera EPS",
    "recuperación de cartera IPS",
  ],
  author: {
    "@type": "Organization",
    name: "PRAVICE",
    url: "https://recaudocarteraipsyeps.com",
  },
  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
    url: "https://recaudocarteraipsyeps.com",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
      width: 1200,
      height: 630,
    },
  },
  datePublished: "2026-05-12",
  dateModified: "2026-08-10",
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

      <DiversificacionIngresosIPS />
    </>
  );
}
