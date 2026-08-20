import { Metadata } from "next";
import TitulosEjecutivosCarteraSalud from "./TitulosEjecutivosCarteraSalud";

export const metadata: Metadata = {
  title:
    "¿Qué documentos sirven para cobrar una EPS por vía ejecutiva? | Guía IPS Colombia",
  description:
    "Conozca qué documentos pueden servir como título ejecutivo para cobrar cartera a una EPS en Colombia. Facturas, acuerdos de pago, actas de conciliación y requisitos antes de iniciar un proceso ejecutivo.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/titulos-ejecutivos-cartera-salud",
  },
  openGraph: {
    title: "¿Qué documentos sirven para cobrar una EPS por vía ejecutiva?",
    description:
      "Guía para IPS, clínicas y hospitales sobre facturas, acuerdos de pago, conciliaciones y otros documentos que pueden respaldar el cobro judicial de cartera.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/titulos-ejecutivos-cartera-salud",
    locale: "es_CO",
    siteName: "PRAVICE",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "¿Qué documentos sirven como título ejecutivo para cobrar una EPS en Colombia?",
    description:
      "Guía para IPS, clínicas y hospitales sobre los documentos que pueden respaldar un proceso ejecutivo para recuperar cartera de salud frente a EPS y otros responsables de pago.",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/titulos-ejecutivos-cartera-salud",
    },
    inLanguage: "es-CO",
    keywords: [
      "título ejecutivo EPS",
      "cómo cobrar una EPS judicialmente",
      "proceso ejecutivo contra EPS",
      "cartera de salud Colombia",
      "factura electrónica título ejecutivo",
      "acuerdo de pago EPS",
      "acta de conciliación cartera",
      "demanda ejecutiva IPS",
      "cobro judicial de cartera salud",
      "recuperación de cartera EPS",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <TitulosEjecutivosCarteraSalud />
    </>
  );
}
