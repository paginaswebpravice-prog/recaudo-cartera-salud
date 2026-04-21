import { Metadata } from "next";
import MedidasCautelaresEpsContent from "./MedidasCautelaresEpsContent";

export const metadata: Metadata = {
  title:
    "Medidas cautelares contra EPS en Colombia | Embargos y aseguramiento de cartera para IPS y clínicas",
  description:
    "Asegure el pago de cartera contra EPS en Colombia con medidas cautelares: embargo de cuentas, retención de recursos y estrategias jurídicas para IPS y clínicas.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/medidas-cautelares-eps",
  },

  openGraph: {
    title:
      "Embargos y medidas cautelares contra EPS en Colombia | Recuperación de cartera IPS",
    description:
      "Proteja su recaudo con embargos, retención de recursos y estrategias jurídicas efectivas contra EPS en Colombia.",
    url: "https://recaudocarteraipsyeps.com/Servicios/medidas-cautelares-eps",
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
            name: "Medidas cautelares contra EPS en Colombia",
            description:
              "Servicio jurídico para asegurar el pago de cartera mediante medidas cautelares como embargo de cuentas y retención de recursos contra EPS en Colombia.",
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

      <MedidasCautelaresEpsContent />
    </>
  );
}
