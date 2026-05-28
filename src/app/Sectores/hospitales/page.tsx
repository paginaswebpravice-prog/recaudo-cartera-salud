import type { Metadata } from "next";
import HospitalesContent from "./HospitalesContent";

export const metadata: Metadata = {
  title:
    "Hospitales en Colombia 2026: sostenibilidad financiera, flujo de caja y desafíos hospitalarios",

  description:
    "Análisis informativo sobre hospitales en Colombia, sostenibilidad financiera, flujo de caja, presión operativa y contexto de cartera en el sector salud.",

  keywords: [
    "hospitales en Colombia",
    "sostenibilidad hospitalaria",
    "flujo de caja hospitales",
    "sector hospitalario Colombia",
    "cartera EPS hospitales",
    "gestión hospitalaria",
    "administración hospitalaria",
  ],

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/hospitales",
  },

  openGraph: {
    title:
      "Hospitales en Colombia 2026: sostenibilidad financiera y operación hospitalaria",

    description:
      "Conozca los desafíos financieros y administrativos que enfrentan los hospitales en Colombia y el impacto de la cartera EPS.",

    url: "https://recaudocarteraipsyeps.com/Sectores/hospitales",

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Hospitales en Colombia 2026: sostenibilidad financiera y flujo de caja",
            description:
              "Contenido informativo sobre sostenibilidad hospitalaria, operación financiera y cartera en hospitales colombianos.",
            author: {
              "@type": "Organization",
              name: "PRAVICE",
            },
            publisher: {
              "@type": "Organization",
              name: "PRAVICE",
            },
            mainEntityOfPage:
              "https://recaudocarteraipsyeps.com/Sectores/hospitales",
          }),
        }}
      />

      <HospitalesContent />
    </>
  );
}
