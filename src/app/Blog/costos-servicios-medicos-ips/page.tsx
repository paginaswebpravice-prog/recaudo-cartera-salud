import type { Metadata } from "next";
import CostoServiciosIPS from "./CostoServiciosIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/costos-servicios-medicos-ips";

export const metadata: Metadata = {
  title:
    "¿Cuánto cuesta realmente un servicio médico en una IPS? Guía de costos 2026",
  description:
    "Aprende cómo calcular el costo real de un servicio médico en una IPS en Colombia. Conoce costos directos e indirectos, métodos de costeo, rentabilidad y errores que pueden generar pérdidas.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "¿Cuánto cuesta realmente un servicio médico en una IPS? Guía 2026",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre cómo calcular costos médicos, medir rentabilidad y tomar mejores decisiones financieras.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cálculo de costos de servicios médicos en una IPS en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Cuánto cuesta realmente un servicio médico en una IPS? Guía 2026",
    description:
      "Cómo calcular costos médicos, rentabilidad y margen real de los servicios prestados por una IPS en Colombia.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "¿Cuánto cuesta realmente un servicio médico en una IPS? Guía de costos 2026",
  description:
    "Guía práctica para calcular el costo real de los servicios médicos en una IPS en Colombia, identificar costos directos e indirectos y evaluar la rentabilidad.",
  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
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
  datePublished: "2026-05-12",
  dateModified: "2026-08-04",
  inLanguage: "es-CO",
  articleSection: "Gestión financiera para IPS",
  keywords: [
    "costos servicios médicos IPS",
    "cómo calcular costos de una IPS",
    "costo real servicio médico",
    "costeo IPS Colombia",
    "costos de servicios de salud",
    "rentabilidad IPS",
    "costos hospitalarios",
    "costos directos e indirectos IPS",
    "costeo ABC salud",
    "gestión financiera IPS",
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

      <CostoServiciosIPS />
    </>
  );
}
