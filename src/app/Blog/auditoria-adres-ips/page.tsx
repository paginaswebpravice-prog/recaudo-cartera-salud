import type { Metadata } from "next";
import AuditoriaAdresIps from "./AuditoriaAdresIps";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/auditoria-adres-ips";

export const metadata: Metadata = {
  title: "Auditoría ADRES para IPS: qué revisa, etapas y cómo evitar glosas",
  description:
    "Conozca cómo funciona la auditoría de ADRES para IPS, qué documentos se revisan, cuáles son las causas de glosas y cómo preparar mejor las reclamaciones para reducir rechazos y demoras.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Auditoría ADRES para IPS: qué revisa, etapas y cómo evitar glosas",
    description:
      "Guía práctica para IPS sobre auditoría ADRES, revisión de cuentas médicas, glosas, documentos y estrategias para mejorar el reconocimiento y recaudo.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Auditoría ADRES para IPS en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auditoría ADRES para IPS: qué revisa, etapas y cómo evitar glosas",
    description:
      "Qué revisa ADRES, cuáles son los errores más frecuentes y cómo preparar mejor las reclamaciones de una IPS.",
    images: ["https://recaudocarteraipsyeps.com/logo.png"],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Auditoría ADRES para IPS: qué revisa, etapas y cómo evitar glosas",
    description:
      "Guía práctica para IPS sobre el proceso de auditoría de ADRES, los documentos revisados, las principales causas de glosas y las recomendaciones para mejorar la gestión de reclamaciones.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
      url: "https://pravice.co",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
      url: "https://pravice.co",
      logo: {
        "@type": "ImageObject",
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
      },
    },
    articleSection: "Recuperación de cartera en salud",
    keywords: [
      "auditoría ADRES",
      "auditoría ADRES IPS",
      "qué revisa ADRES",
      "glosas ADRES",
      "reclamaciones ADRES",
      "cuentas médicas ADRES",
      "IPS Colombia",
      "auditoría cuentas médicas",
      "recuperación de cartera IPS",
      "cartera sector salud",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <AuditoriaAdresIps />
    </>
  );
}
