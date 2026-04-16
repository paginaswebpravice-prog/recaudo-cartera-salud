import { Metadata } from "next";
import CarteraGlosadaContent from "./CarteraGlosadaContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera glosada en Colombia | Gestión de glosas EPS para IPS y clínicas",
  description:
    "Recupere cartera glosada en Colombia. Servicio especializado para IPS y clínicas: gestión, respuesta y levantamiento de glosas EPS con enfoque técnico y jurídico.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cartera-glosada",
  },

  openGraph: {
    title:
      "Recuperación de cartera glosada en EPS para IPS y clínicas en Colombia",
    description:
      "Gestione y recupere glosas en Colombia con estrategia técnica y jurídica. Mejore su recaudo y reduzca pérdidas.",
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
            name: "Recuperación de cartera glosada en Colombia",
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
