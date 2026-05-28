import ClinicaContent from "./ClinicaContent";

export const metadata = {
  title:
    "Gestión de cartera y sostenibilidad financiera para clínicas en Colombia | PRAVICE",
  description:
    "Contenido especializado sobre flujo de caja, cartera EPS y sostenibilidad financiera para clínicas en Colombia. Conozca estrategias jurídicas y administrativas aplicadas al sector salud.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
  },

  openGraph: {
    title: "Gestión de cartera EPS y flujo de caja para clínicas en Colombia",
    description:
      "Información especializada para clínicas sobre recaudo, cartera hospitalaria y sostenibilidad financiera en el sistema de salud colombiano.",
    url: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
    siteName: "PRAVICE",
    locale: "es_CO",
    type: "article",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ClinicaPage() {
  return <ClinicaContent />;
}
