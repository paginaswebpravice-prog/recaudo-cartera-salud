// page.tsx

import type { Metadata } from "next";
import IPSContent from "./IPSContent";

export const metadata: Metadata = {
  title:
    "IPS en Colombia: cartera EPS, flujo de caja y sostenibilidad financiera | PRAVICE",

  description:
    "Análisis especializado sobre IPS en Colombia: cartera EPS, glosas, flujo de caja y sostenibilidad financiera en el sector salud.",

  keywords: [
    "IPS en Colombia",
    "cartera EPS IPS",
    "flujo de caja IPS",
    "sostenibilidad financiera IPS",
    "glosas EPS",
    "sector salud Colombia",
    "gestión de cartera IPS",
  ],

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/ips",
  },

  openGraph: {
    title: "IPS en Colombia: cartera EPS, sostenibilidad y flujo de caja",
    description:
      "Contenido especializado sobre cartera EPS, liquidez y sostenibilidad financiera para IPS en Colombia.",
    url: "https://recaudocarteraipsyeps.com/Sectores/ips",
    siteName: "PRAVICE",
    locale: "es_CO",
    type: "article",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "IPS en Colombia: cartera EPS y sostenibilidad financiera",
            description:
              "Análisis especializado sobre cartera EPS, liquidez y sostenibilidad financiera para IPS en Colombia.",
            author: {
              "@type": "Organization",
              name: "PRAVICE",
            },
            publisher: {
              "@type": "Organization",
              name: "PRAVICE",
            },
            mainEntityOfPage: "https://recaudocarteraipsyeps.com/Sectores/ips",
            about: [
              "IPS en Colombia",
              "Cartera EPS",
              "Flujo de caja en salud",
              "Sostenibilidad financiera",
            ],
          }),
        }}
      />

      <IPSContent />
    </>
  );
}
