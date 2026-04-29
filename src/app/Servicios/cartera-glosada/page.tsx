import { Metadata } from "next";
import CarteraGlosadaContent from "./CarteraGlosadaContent";

export const metadata: Metadata = {
  title:
    "Cartera glosada en Colombia 2026: cómo recuperar dinero retenido por EPS en IPS y clínicas",
  description:
    "Recupere cartera glosada en Colombia con estrategias técnicas y jurídicas. Gestión de glosas EPS para IPS y clínicas enfocada en maximizar el recaudo y evitar pérdidas financieras.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
  },

  openGraph: {
    title:
      "Cómo recuperar cartera glosada en EPS en Colombia (guía para IPS y clínicas)",
    description:
      "Estrategia especializada para recuperar glosas en Colombia. Aumente el recaudo de su IPS o clínica y recupere dinero retenido por EPS.",
    url: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
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
            "@type": "Service",
            name: "Recuperación de cartera glosada en Colombia para IPS y clínicas",
            description:
              "Servicio de gestión, respuesta y levantamiento de glosas para IPS y clínicas en Colombia.",

            url: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",

            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },

            provider: {
              "@type": "Organization",
              name: "PRAVICE ABOGADOS S.A.S.",
              url: "https://recaudocarteraipsyeps.com",
            },
          }),
        }}
      />

      <CarteraGlosadaContent />
    </>
  );
}
