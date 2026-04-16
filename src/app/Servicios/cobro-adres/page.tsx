import { Metadata } from "next";
import CobroAdresContent from "./CobroAdresContent";

export const metadata: Metadata = {
  title: "Cobro de cartera ante ADRES en Colombia | IPS y clínicas",
  description:
    "Recupere cartera ante ADRES en Colombia. Servicio para IPS y clínicas: NO PBS, SOAT, ECAT, recobros y reclamaciones con enfoque técnico y jurídico.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
  },

  openGraph: {
    title: "Cobro de cartera ADRES en Colombia para IPS y clínicas",
    description:
      "Gestione y recupere cartera ante ADRES en Colombia evitando devoluciones y maximizando el recaudo efectivo.",
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
