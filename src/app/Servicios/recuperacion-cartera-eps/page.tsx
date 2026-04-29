import { Metadata } from "next";
import RecuperacionCarteraEpsContent from "./RecuperacionCarteraEpsContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera EPS en Colombia | Cómo recuperar pagos de IPS y clínicas rápido y sin pérdida de dinero",
  description:
    "Aprenda cómo recuperar cartera EPS en Colombia con estrategias jurídicas, prejurídicas y judiciales. Servicio especializado para IPS, clínicas y prestadores de salud.",

  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Servicios/recuperacion-cartera-eps",
  },

  openGraph: {
    title:
      "Cómo recuperar cartera EPS en Colombia rápido | Estrategias legales para IPS y clínicas",
    description:
      "Mejore su flujo de caja aprendiendo cómo recuperar cartera EPS en Colombia con estrategias legales y financieras especializadas.",
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
              name: "Recuperación de cartera EPS en Colombia para IPS, clínicas y prestadores de salud",
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
                  name: "¿Cómo recuperar cartera EPS en Colombia rápidamente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Con una estrategia jurídica estructurada que incluya gestión prejurídica, negociación y procesos judiciales si es necesario.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es posible recuperar cartera EPS antigua en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, siempre que la obligación no haya prescrito y exista soporte documental suficiente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué hacer si la EPS no paga la cartera en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se pueden iniciar acciones jurídicas, procesos ejecutivos y medidas cautelares para asegurar el pago.",
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
