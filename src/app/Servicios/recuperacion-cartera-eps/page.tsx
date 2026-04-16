import { Metadata } from "next";
import RecuperacionCarteraEpsContent from "./RecuperacionCarteraEpsContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera EPS en Colombia y Bogotá | Servicio para IPS y clínicas",
  description:
    "Recupere cartera EPS en Colombia con estrategias jurídicas, prejurídicas y judiciales. Servicio especializado para IPS, clínicas y prestadores de salud.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
  },

  openGraph: {
    title: "Recuperación de cartera EPS en Colombia para IPS y clínicas",
    description:
      "Mejore su flujo de caja recuperando cartera EPS en Colombia con estrategias legales y financieras especializadas.",
    url: "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
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
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Recuperación de cartera EPS en Colombia",
              description:
                "Servicio especializado en recuperación de cartera EPS para IPS, clínicas y prestadores de salud en Colombia.",
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              provider: {
                "@type": "Organization",
                name: "PRAVICE ABOGADOS S.A.S.",
                url: "https://recaudocarteraipsyeps.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo tarda recuperar cartera EPS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Depende del estado de la cartera, pudiendo ir desde gestión prejurídica hasta procesos judiciales de mediano plazo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede recuperar cartera antigua?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, siempre que no haya prescrito y exista soporte documental adecuado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si la EPS no paga?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se pueden iniciar procesos ejecutivos y aplicar medidas cautelares para garantizar el pago.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <RecuperacionCarteraEpsContent />
    </>
  );
}
