import ClinicaContent from "./ClinicaContent";

export const metadata = {
  title:
    "Clínicas en Colombia: cómo mejorar rentabilidad, facturación y flujo de caja (guía EPS 2026) | PRAVICE",
  description:
    "Análisis completo para clínicas en Colombia: facturación, cartera EPS, flujo de caja y estrategias para mejorar recaudo y rentabilidad en Bogotá y el país.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
  },

  openGraph: {
    title:
      "Clínicas en Colombia: rentabilidad, facturación y recaudo EPS optimizado",
    description:
      "Estrategias para mejorar flujo de caja, cartera y rentabilidad en clínicas privadas en Colombia.",
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
