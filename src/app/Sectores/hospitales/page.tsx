import type { Metadata } from "next";
import HospitalesContent from "./HospitalesContent";

export const metadata: Metadata = {
  title:
    "Hospitales en Colombia 2026: crisis financiera, cartera EPS y flujo de caja (guía completa)",
  description:
    "Análisis del sector hospitalario en Colombia: sostenibilidad, crisis financiera, cartera con EPS y estrategias para mejorar flujo de caja y operación hospitalaria.",
  keywords: [
    "hospitales en Colombia",
    "cartera hospitales Colombia",
    "crisis financiera hospitales",
    "flujo de caja hospitales",
    "sector salud Colombia",
    "EPS hospitales cartera",
    "sostenibilidad hospitalaria Colombia",
  ],
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
  },
  openGraph: {
    title:
      "Hospitales en Colombia 2026: crisis financiera, cartera EPS y sostenibilidad",
    description:
      "Descubre los principales problemas financieros de los hospitales en Colombia y cómo mejorar su sostenibilidad y flujo de caja.",
    url: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
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
            name: "Hospitales en Colombia 2026: crisis financiera, cartera EPS y sostenibilidad hospitalaria",
            description:
              "Análisis del sector hospitalario en Colombia: problemas financieros, cartera con EPS y sostenibilidad institucional.",
            url: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
            inLanguage: "es",
            about: [
              "Hospitales en Colombia",
              "Cartera hospitalaria",
              "Sostenibilidad financiera en salud",
            ],
          }),
        }}
      />

      <HospitalesContent />
    </>
  );
}
