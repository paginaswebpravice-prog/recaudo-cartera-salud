import type { Metadata } from "next";
import SenalesInsolvenciaEPS from "./SenalesInsolvenciaEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/senales-insolvencia-eps";

export const metadata: Metadata = {
  title:
    "¿Una EPS tiene problemas financieros? 9 señales de alerta para IPS en Colombia",
  description:
    "Aprenda a identificar señales de riesgo financiero en una EPS: retrasos en pagos, aumento de cartera, incumplimiento de acuerdos y otras alertas que pueden afectar a IPS y clínicas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "¿Una EPS tiene problemas financieros? 9 señales de alerta para IPS",
    description:
      "Retrasos en pagos, cartera acumulada, incumplimiento de acuerdos y otras señales que pueden indicar dificultades financieras en una EPS.",
    type: "article",
    url: canonicalUrl,
    locale: "es_CO",
    siteName: "Recaudo Cartera IPS y EPS",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Señales de alerta de una EPS con problemas financieros",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "¿Una EPS tiene problemas financieros? Señales de alerta para IPS",
    description:
      "Cómo identificar señales de deterioro financiero y proteger la cartera de una IPS frente a posibles dificultades de pago.",
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
    "¿Una EPS tiene problemas financieros? 9 señales de alerta para IPS en Colombia",
  description:
    "Guía para IPS, clínicas y hospitales sobre señales que pueden indicar dificultades financieras, problemas de pago, acumulación de cartera o mayor riesgo administrativo en una EPS.",
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
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  inLanguage: "es-CO",
  articleSection: "Riesgos financieros y cartera EPS",
  keywords: [
    "insolvencia EPS",
    "EPS con problemas financieros",
    "señales de alerta EPS",
    "riesgo financiero EPS",
    "EPS con dificultades de pago",
    "retrasos pagos EPS",
    "cartera IPS EPS",
    "intervención EPS",
    "liquidación EPS",
    "proteger cartera IPS",
    "riesgo financiero IPS",
    "EPS Colombia",
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

      <SenalesInsolvenciaEPS />
    </>
  );
}
