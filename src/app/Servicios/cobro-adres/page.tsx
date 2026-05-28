import { Metadata } from "next";
import CobroAdresContent from "./CobroAdresContent";

export const metadata: Metadata = {
  title:
    "Cobro ADRES en Colombia: cómo radicar reclamaciones NO PBS, SOAT y ECAT para IPS",

  description:
    "Gestión especializada de cobro ADRES en Colombia para IPS y clínicas. Radicación, auditoría documental, devoluciones, SOAT, ECAT y recobros NO PBS.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Servicios/cobro-adres",
  },

  openGraph: {
    title: "Cobro ante ADRES en Colombia para IPS y clínicas",
    description:
      "Optimice procesos de radicación y recuperación de recursos ante ADRES con apoyo técnico y jurídico especializado.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Cobro ADRES para IPS y clínicas en Colombia",
              description:
                "Servicio especializado en radicación, auditoría y recuperación de recursos ante ADRES.",

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
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es ADRES en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la entidad encargada de administrar recursos del sistema de salud y reconocer determinados pagos y reclamaciones.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué ADRES devuelve reclamaciones?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las devoluciones suelen ocurrir por inconsistencias documentales, errores técnicos o incumplimiento de requisitos normativos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué es un recobro NO PBS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Corresponde a tecnologías y servicios no financiados con la UPC que pueden ser objeto de reconocimiento económico.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CobroAdresContent />
    </>
  );
}
