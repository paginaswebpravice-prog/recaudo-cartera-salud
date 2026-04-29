import ClinicaContent from "./ClinicaContent";

export const metadata = {
  title:
    "Clínicas en Colombia 2026: cómo mejorar rentabilidad, flujo de caja y recaudo EPS | Guía PRAVICE",
  description:
    "Guía estratégica para clínicas en Colombia: mejora de facturación, cartera EPS, flujo de caja y rentabilidad. Estrategias reales para optimizar recaudo y sostenibilidad financiera.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
  },

  openGraph: {
    title:
      "Clínicas en Colombia 2026: rentabilidad, flujo de caja y cartera EPS optimizada",
    description:
      "Estrategias avanzadas para clínicas en Colombia: mejora de recaudo EPS, control de cartera vencida y optimización del flujo de caja.",
    url: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
    siteName: "PRAVICE",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ClinicaPage() {
  return <ClinicaContent />;
}
