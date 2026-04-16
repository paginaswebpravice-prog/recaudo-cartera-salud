import type { Metadata } from "next";
import IPSContent from "./IPSContent";

export const metadata: Metadata = {
  title:
    "IPS en Colombia: desafíos financieros y sostenibilidad operativa | Cartera y flujo de caja",
  description:
    "Análisis de las IPS en Colombia: problemas de cartera, flujo de caja y sostenibilidad financiera. Estrategias para mejorar el recaudo y la estabilidad operativa.",
  keywords: [
    "IPS en Colombia",
    "cartera IPS Colombia",
    "flujo de caja IPS",
    "problemas financieros IPS",
    "sector salud Colombia",
    "EPS IPS cartera",
    "recaudo IPS Colombia",
  ],
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/ips",
  },
  openGraph: {
    title: "IPS en Colombia: desafíos financieros y sostenibilidad operativa",
    description:
      "Descubra los principales desafíos financieros de las IPS en Colombia y cómo mejorar su flujo de caja y recaudo.",
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
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "IPS en Colombia: desafíos financieros y sostenibilidad operativa",
            description:
              "Información sobre la situación financiera, cartera y sostenibilidad de las IPS en Colombia.",
            url: "https://recaudocarteraipsyeps.com/Sectores/ips",
            inLanguage: "es",
            about: [
              "IPS en Colombia",
              "Cartera en el sector salud",
              "Flujo de caja IPS",
              "Sostenibilidad financiera en salud",
            ],
          }),
        }}
      />

      <IPSContent />
    </>
  );
}
