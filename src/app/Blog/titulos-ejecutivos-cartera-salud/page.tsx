import TitulosEjecutivosCarteraSalud from "./TitulosEjecutivosCarteraSalud";

export const metadata = {
  title:
    "Títulos ejecutivos válidos para cobrar cartera de salud en Colombia | Guía para IPS y clínicas",
  description:
    "Conozca cuáles son los títulos ejecutivos válidos para recuperar cartera de salud en Colombia. Facturas, acuerdos de pago, conciliaciones y demás documentos que permiten iniciar procesos ejecutivos contra EPS.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/titulos-ejecutivos-cartera-salud",
  },
  openGraph: {
    title:
      "Títulos ejecutivos válidos para cobrar cartera de salud en Colombia",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre documentos que permiten iniciar procesos ejecutivos para recuperar cartera.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/titulos-ejecutivos-cartera-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Títulos ejecutivos válidos para cobrar cartera de salud en Colombia",
    description:
      "Guía especializada sobre los documentos que permiten iniciar procesos ejecutivos para recuperar cartera de salud en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/titulos-ejecutivos-cartera-salud",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "título ejecutivo EPS",
      "proceso ejecutivo EPS",
      "factura electrónica título ejecutivo",
      "cartera salud Colombia",
      "demanda ejecutiva EPS",
      "cobro judicial IPS",
      "recuperación de cartera EPS",
      "facturas EPS Colombia",
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
