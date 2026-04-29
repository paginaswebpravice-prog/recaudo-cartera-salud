import { Metadata } from "next";
import CobroAdresContent from "./CobroAdresContent";

export const metadata: Metadata = {
  title:
    "Cómo cobrar cartera ante ADRES en Colombia 2026: guía para IPS y clínicas (SOAT, NO PBS y ECAT)",
  description:
    "Recupere cartera ante ADRES en Colombia sin devoluciones. Estrategia técnica y jurídica para IPS y clínicas en SOAT, NO PBS, ECAT y recobros.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
  },

  openGraph: {
    title:
      "Cobro ADRES en Colombia: cómo evitar devoluciones y recuperar cartera EPS (SOAT, NO PBS, ECAT)",
    description:
      "Guía para IPS y clínicas en Colombia sobre cobro ante ADRES con enfoque técnico y jurídico para aumentar recaudo y evitar devoluciones.",
    url: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
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
            name: "Cobro de cartera ante ADRES en Colombia para IPS y clínicas",
            description:
              "Servicio especializado para IPS y clínicas en la recuperación de cartera ante ADRES: SOAT, NO PBS, ECAT y recobros.",

            url: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",

            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },

            provider: {
              "@type": "Organization",
              name: "PRAVICE ABOGADOS S.A.S.",
              url: "https://recaudocarteraipsyeps.com",
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
            },
          }),
        }}
      />

      <CobroAdresContent />
    </>
  );
}
