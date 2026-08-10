import type { Metadata } from "next";
import ComoResponderGlosasMedicas from "./ComoResponderGlosasMedicas";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/como-responder-glosas-medicas-colombia";

export const metadata: Metadata = {
  title:
    "Cómo responder glosas médicas en Colombia y recuperar pagos | Guía 2026",
  description:
    "Aprenda cómo responder glosas médicas en Colombia, qué soportes revisar, cuáles son los errores más frecuentes y qué hacer si una EPS mantiene el rechazo del pago.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "Cómo responder glosas médicas en Colombia y recuperar pagos | Guía 2026",
    description:
      "Guía práctica para IPS, clínicas y prestadores sobre respuesta de glosas, soportes, seguimiento y recuperación de cartera frente a EPS.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo responder glosas médicas en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cómo responder glosas médicas en Colombia y recuperar pagos | Guía 2026",
    description:
      "Conozca cómo analizar, responder y hacer seguimiento a las glosas médicas para proteger la cartera de IPS y clínicas.",
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
    "Cómo responder glosas médicas en Colombia y recuperar pagos | Guía 2026",
  description:
    "Guía práctica sobre cómo responder glosas médicas en Colombia, organizar soportes, hacer seguimiento y recuperar pagos rechazados por EPS.",
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
  articleSection: "Recuperación de cartera en salud",
  keywords: [
    "cómo responder glosas médicas",
    "glosas médicas Colombia",
    "respuesta de glosas EPS",
    "glosas EPS",
    "recuperación de cartera por glosas",
    "cartera glosada IPS",
    "cómo recuperar pagos rechazados por EPS",
    "respuesta a glosas médicas",
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

      <ComoResponderGlosasMedicas />
    </>
  );
}
