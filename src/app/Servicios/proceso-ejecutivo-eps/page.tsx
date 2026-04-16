import { Metadata } from "next";
import ProcesoEjecutivoEpsContent from "./ProcesoEjecutivoEpsContent";

export const metadata: Metadata = {
  title:
    "Proceso ejecutivo contra EPS en Colombia | Cobro de cartera para IPS y clínicas",
  description:
    "Inicie proceso ejecutivo contra EPS en Colombia y recupere cartera vencida. Representación jurídica para IPS y clínicas con estrategias efectivas de cobro.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/proceso-ejecutivo-eps",
  },

  openGraph: {
    title: "Proceso ejecutivo para cobro de cartera EPS en Colombia",
    description:
      "Recupere cartera vencida mediante proceso ejecutivo contra EPS en Colombia. Estrategias jurídicas efectivas para IPS y clínicas.",
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
