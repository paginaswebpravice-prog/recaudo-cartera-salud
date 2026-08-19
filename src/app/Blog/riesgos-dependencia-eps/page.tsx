import type { Metadata } from "next";
import RiesgosDependenciaEPS from "./RiesgosDependenciaEPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/riesgos-dependencia-eps";

export const metadata: Metadata = {
  title:
    "¿Su IPS depende de una sola EPS? 7 riesgos financieros que debe controlar",
  description:
    "Descubra los riesgos de depender demasiado de una sola EPS: cartera vencida, problemas de liquidez, retrasos en pagos y estrategias para proteger la estabilidad financiera de su IPS.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "¿Su IPS depende de una sola EPS? Riesgos financieros y cómo reducirlos",
    description:
      "La concentración de ingresos en una sola EPS puede aumentar el riesgo de cartera y afectar el flujo de caja. Conozca las principales señales de alerta.",
    type: "article",
    url: canonicalUrl,
    locale: "es_CO",
    siteName: "Recaudo Cartera IPS y EPS",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Riesgos financieros para IPS que dependen de una sola EPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "¿Su IPS depende de una sola EPS? Riesgos financieros que debe conocer",
    description:
      "Cómo la dependencia de una sola EPS puede afectar la cartera, la liquidez y la estabilidad financiera de una IPS.",
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
    "¿Su IPS depende de una sola EPS? 7 riesgos financieros que debe controlar",
  description:
    "Guía para IPS, clínicas y hospitales sobre los riesgos financieros de depender de una sola EPS y las estrategias para reducir la concentración de cartera y proteger el flujo de caja.",
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
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  inLanguage: "es-CO",
  articleSection: "Gestión financiera y cartera para IPS",
  keywords: [
    "riesgos financieros IPS",
    "dependencia de una EPS",
    "IPS depende de una EPS",
    "concentración de cartera EPS",
    "cartera vencida IPS",
    "liquidez IPS",
    "flujo de caja IPS",
    "riesgo financiero sector salud",
    "gestión de cartera EPS",
    "diversificación de pagadores IPS",
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

      <RiesgosDependenciaEPS />
    </>
  );
}
