import type { Metadata } from "next";
import EquipoRespuestaGlosas from "./EquipoRespuestaGlosas";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/equipo-respuesta-glosas";

export const metadata: Metadata = {
  title:
    "Respuesta a glosas médicas: cómo crear un equipo efectivo en una IPS | Guía 2026",

  description:
    "Aprenda cómo organizar un equipo de respuesta a glosas médicas en una IPS: roles, proceso, indicadores y estrategias para recuperar cartera y reducir pérdidas frente a las EPS.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Respuesta a glosas médicas: cómo organizar un equipo efectivo",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre roles, procesos, indicadores y estrategias para responder glosas y recuperar cartera.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Respuesta a glosas médicas en IPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Respuesta a glosas médicas: cómo organizar un equipo efectivo",
    description:
      "Roles, procesos e indicadores para mejorar la respuesta a glosas y recuperar cartera de IPS frente a las EPS.",
    images: ["https://recaudocarteraipsyeps.com/logo-pravice.png"],
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
    "Respuesta a glosas médicas: cómo organizar un equipo efectivo en una IPS",

  description:
    "Guía práctica para IPS, clínicas y hospitales sobre cómo organizar equipos de respuesta a glosas médicas, mejorar la gestión de las objeciones y proteger la recuperación de cartera.",

  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",

  author: {
    "@type": "Organization",
    name: "PRAVICE",
    url: "https://recaudocarteraipsyeps.com",
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
  dateModified: "2026-08-11",

  inLanguage: "es-CO",

  articleSection: "Gestión de glosas y recuperación de cartera",

  keywords: [
    "respuesta a glosas médicas",
    "cómo responder glosas",
    "gestión de glosas médicas",
    "equipo de glosas",
    "glosas EPS",
    "glosas médicas Colombia",
    "recuperación de cartera IPS",
    "auditoría de glosas",
    "cartera IPS",
    "facturación médica",
    "respuesta a glosas EPS",
    "gestión de cartera en salud",
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

      <EquipoRespuestaGlosas />
    </>
  );
}
