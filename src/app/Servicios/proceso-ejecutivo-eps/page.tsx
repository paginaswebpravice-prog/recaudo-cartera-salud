import { Metadata } from "next";
import ProcesoEjecutivoEpsContent from "./ProcesoEjecutivoEpsContent";

export const metadata: Metadata = {
  title:
    "Proceso ejecutivo contra EPS en Colombia | Demanda, embargo y recuperación de cartera para IPS",
  description:
    "Inicie proceso ejecutivo contra EPS en Colombia y recupere cartera vencida. Representación jurídica para IPS y clínicas con embargos, medidas cautelares y cobro efectivo.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
  },

  openGraph: {
    title:
      "Demanda ejecutiva contra EPS en Colombia | Recuperación de cartera para IPS y clínicas",
    description:
      "Recupere cartera vencida mediante proceso ejecutivo contra EPS en Colombia. Estrategias jurídicas con embargo y medidas cautelares.",
    url: "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
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
            name: "Proceso ejecutivo contra EPS en Colombia",
            description:
              "Servicio jurídico para recuperación de cartera mediante procesos ejecutivos contra EPS en Colombia.",
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

      <ProcesoEjecutivoEpsContent />
    </>
  );
}
