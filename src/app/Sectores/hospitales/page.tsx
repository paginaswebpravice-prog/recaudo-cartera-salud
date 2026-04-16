import type { Metadata } from "next";
import HospitalesContent from "./HospitalesContent";

export const metadata: Metadata = {
  title:
    "Hospitales en Colombia: sostenibilidad, presupuesto y operación | Recaudo y cartera",
  description:
    "Análisis del sector hospitalario en Colombia: sostenibilidad, presupuesto, cartera y operación. Estrategias para mejorar el flujo de caja y la estabilidad financiera.",
  keywords: [
    "hospitales en Colombia",
    "cartera hospitales Colombia",
    "sostenibilidad hospitalaria",
    "flujo de caja hospitales",
    "sector salud Colombia",
    "EPS hospitales cartera",
    "problemas financieros hospitales Colombia",
  ],
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
  },
  openGraph: {
    title: "Hospitales en Colombia: sostenibilidad, presupuesto y operación",
    description:
      "Descubra los principales desafíos financieros y operativos de los hospitales en Colombia y cómo mejorar su sostenibilidad.",
    url: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "website", // ✅ correcto para landing
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
            name: "Hospitales en Colombia: sostenibilidad, presupuesto y operación",
            description:
              "Información sobre los desafíos financieros, operativos y de cartera en hospitales en Colombia.",
            url: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
            inLanguage: "es",
            about: [
              "Hospitales en Colombia",
              "Cartera en el sector salud",
              "Sostenibilidad hospitalaria",
            ],
          }),
        }}
      />

      <HospitalesContent />
    </>
  );
}
