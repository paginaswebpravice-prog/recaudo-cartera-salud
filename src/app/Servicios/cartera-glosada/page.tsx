import { Metadata } from "next";
import CarteraGlosadaContent from "./CarteraGlosadaContent";

export const metadata: Metadata = {
  title:
    "Cartera glosada en Colombia: impacto financiero de las glosas EPS en IPS y clínicas",
  description:
    "Conozca cómo las glosas EPS afectan la cartera, el flujo de caja y la sostenibilidad financiera de IPS y clínicas en Colombia.",

  keywords: [
    "cartera glosada Colombia",
    "glosas EPS Colombia",
    "cartera IPS",
    "flujo de caja IPS",
    "glosas clínicas Colombia",
    "problemas de cartera EPS",
    "sector salud Colombia",
  ],

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
  },

  openGraph: {
    title:
      "Cartera glosada en IPS y clínicas: impacto de las glosas EPS en Colombia",
    description:
      "Aprenda cómo las glosas EPS afectan la liquidez y sostenibilidad financiera de IPS y clínicas en Colombia.",
    url: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
    siteName: "PRAVICE",
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
            "@type": "Article",

            headline:
              "Cartera glosada en Colombia y su impacto financiero en IPS y clínicas",

            description:
              "Contenido informativo sobre glosas EPS, cartera glosada y sostenibilidad financiera en IPS y clínicas en Colombia.",

            mainEntityOfPage:
              "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",

            author: {
              "@type": "Organization",
              name: "PRAVICE",
            },

            publisher: {
              "@type": "Organization",
              name: "PRAVICE",
            },

            about: [
              "Glosas EPS",
              "Cartera glosada",
              "IPS en Colombia",
              "Clínicas en Colombia",
              "Flujo de caja en salud",
            ],

            mentions: [
              {
                "@type": "WebPage",
                name: "Cobro de glosas EPS en Colombia",
                url: "https://recaudodecartera.com/cobro-glosas-eps-colombia.html",
              },
            ],

            inLanguage: "es-CO",
          }),
        }}
      />

      <CarteraGlosadaContent />
    </>
  );
}
