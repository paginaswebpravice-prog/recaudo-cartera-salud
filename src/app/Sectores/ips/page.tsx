import type { Metadata } from "next";
import IPSContent from "./IPSContent";

export const metadata: Metadata = {
  title:
    "IPS en Colombia: crisis financiera, cartera y flujo de caja | Cómo mejorar sostenibilidad",
  description:
    "Análisis de las IPS en Colombia: crisis de cartera, problemas de flujo de caja y estrategias para mejorar la sostenibilidad financiera y el recaudo.",
  keywords: [
    "IPS en Colombia",
    "cartera IPS Colombia",
    "flujo de caja IPS",
    "crisis financiera IPS",
    "problemas EPS IPS",
    "sector salud Colombia",
    "recaudo IPS Colombia",
  ],
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/ips",
  },
  openGraph: {
    title: "IPS en Colombia: crisis financiera, cartera y flujo de caja",
    description:
      "Descubre los principales problemas financieros de las IPS en Colombia y cómo mejorar su sostenibilidad y recaudo.",
    url: "https://recaudocarteraipsyeps.com/Sectores/ips",
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "website",
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
            "@type": "WebPage",
            name: "IPS en Colombia: crisis financiera, cartera y flujo de caja",
            description:
              "Análisis del impacto financiero, cartera y sostenibilidad de las IPS en Colombia.",
            url: "https://recaudocarteraipsyeps.com/Sectores/ips",
            inLanguage: "es",
            about: [
              "IPS en Colombia",
              "Cartera IPS",
              "Flujo de caja en salud",
              "Sostenibilidad financiera IPS",
            ],
          }),
        }}
      />

      <IPSContent />
    </>
  );
}
