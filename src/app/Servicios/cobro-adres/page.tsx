import { Metadata } from "next";
import CobroAdresContent from "./CobroAdresContent";

export const metadata: Metadata = {
  title:
    "Cómo cobrar cartera ante ADRES en Colombia: guía para IPS y clínicas (SOAT, NO PBS y ECAT)",
  description:
    "Recupere cartera ante ADRES en Colombia sin devoluciones. Estrategia técnica y jurídica para IPS y clínicas en SOAT, NO PBS, ECAT y recobros.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
  },

  openGraph: {
    title:
      "Cobro de cartera ADRES en Colombia: cómo evitar devoluciones y recuperar dinero de EPS",
    description:
      "Guía para IPS y clínicas en Colombia sobre cobro ante ADRES (SOAT, NO PBS, ECAT y recobros) con enfoque técnico y jurídico.",
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
            name: "Cobro de cartera ante ADRES en Colombia",
            description:
              "Servicio especializado para IPS y clínicas en la recuperación de cartera ante ADRES: NO PBS, SOAT, ECAT, recobros y reclamaciones.",

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
