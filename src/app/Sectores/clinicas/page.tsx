import ClinicaContent from "./ClinicaContent";

export const metadata = {
  title:
    "Clínicas en Colombia: rentabilidad, facturación y flujo de caja | PRAVICE",
  description:
    "Análisis de clínicas en Colombia: facturación, cartera, flujo de caja y estrategias para mejorar el recaudo en Bogotá y el país.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
  },

  openGraph: {
    title: "Clínicas en Colombia: rentabilidad, facturación y flujo de caja",
    description:
      "Estrategias para mejorar el recaudo y la rentabilidad en clínicas en Colombia.",
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
