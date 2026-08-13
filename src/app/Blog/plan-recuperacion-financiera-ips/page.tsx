import type { Metadata } from "next";
import PlanRecuperacionFinancieraIPS from "./PlanRecuperacionFinancieraIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/plan-recuperacion-financiera-ips";

export const metadata: Metadata = {
  title: "Plan de recuperación financiera para una IPS | Guía 2026",
  description:
    "Aprenda a diseñar un plan de recuperación financiera para una IPS: liquidez, flujo de caja, cartera vencida, recaudo y estrategias frente a EPS en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Plan de recuperación financiera para una IPS: guía práctica 2026",
    description:
      "Pasos para recuperar liquidez, controlar cartera vencida, mejorar el flujo de caja y fortalecer las finanzas de una IPS en Colombia.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Plan de recuperación financiera para una IPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Plan de recuperación financiera para una IPS | Guía 2026",
    description:
      "Pasos para mejorar liquidez, flujo de caja y recuperación de cartera en IPS de Colombia.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Plan de recuperación financiera para una IPS: guía práctica para mejorar liquidez y cartera",
  description:
    "Guía para IPS, clínicas y hospitales en Colombia sobre diagnóstico financiero, recuperación de cartera, flujo de caja, control de riesgos e indicadores de seguimiento.",
  inLanguage: "es-CO",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
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
    },
  },
  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
  articleSection: "Gestión financiera de IPS",
  keywords: [
    "plan de recuperación financiera IPS",
    "recuperación financiera IPS",
    "liquidez IPS Colombia",
    "flujo de caja IPS",
    "recuperación de cartera EPS",
    "cartera vencida IPS",
    "gestión financiera clínicas",
    "sostenibilidad financiera IPS",
    "planeación financiera IPS",
    "indicadores financieros IPS",
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

      <PlanRecuperacionFinancieraIPS />
    </>
  );
}
