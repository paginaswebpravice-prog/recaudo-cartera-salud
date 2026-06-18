import IndicadoresFinancierosIPS from "./IndicadoresFinancierosIPS";

export const metadata = {
  title:
    "Indicadores financieros que toda IPS debe monitorear en Colombia | KPIs de liquidez y rentabilidad",
  description:
    "Conozca los indicadores financieros más importantes para IPS en Colombia. KPIs de liquidez, rentabilidad, cartera, glosas y sostenibilidad financiera.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/indicadores-financieros-ips",
  },
  openGraph: {
    title: "Indicadores financieros que toda IPS debe monitorear en Colombia",
    description:
      "KPIs financieros para medir liquidez, rentabilidad, recuperación de cartera y sostenibilidad financiera en IPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/indicadores-financieros-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Indicadores financieros que toda IPS debe monitorear en Colombia",
    description:
      "Guía sobre indicadores financieros para IPS, clínicas y hospitales en Colombia. KPIs para medir liquidez, cartera, rentabilidad y sostenibilidad financiera.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/indicadores-financieros-ips",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "indicadores financieros IPS",
      "KPIs IPS Colombia",
      "liquidez IPS",
      "rentabilidad IPS",
      "cartera EPS",
      "gestión financiera IPS",
      "flujo de caja IPS",
      "sostenibilidad financiera salud",
      "indicadores de recaudo",
      "glosas médicas",
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

      <IndicadoresFinancierosIPS />
    </>
  );
}
