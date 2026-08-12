import IndicadoresFinancierosIPS from "./IndicadoresFinancierosIPS";

export const metadata = {
  title:
    "Indicadores financieros para IPS en Colombia: 10 KPIs que debes controlar",
  description:
    "Conoce los principales indicadores financieros para IPS en Colombia: liquidez, cartera, recaudo, glosas, flujo de caja, rentabilidad y concentración por EPS.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/indicadores-financieros-ips",
  },
  openGraph: {
    title:
      "Indicadores financieros para IPS: 10 KPIs clave para controlar la salud financiera",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre liquidez, cartera, recaudo, glosas, flujo de caja y rentabilidad.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/indicadores-financieros-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Indicadores financieros para IPS en Colombia: 10 KPIs que debes controlar",
    description:
      "Guía práctica sobre los principales indicadores financieros que pueden utilizar IPS, clínicas y hospitales en Colombia para controlar liquidez, cartera, recaudo, glosas, flujo de caja y rentabilidad.",
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
      "indicadores financieros para IPS",
      "KPIs IPS Colombia",
      "indicadores financieros clínicas",
      "indicadores financieros hospitales",
      "liquidez IPS",
      "rentabilidad IPS",
      "cartera EPS",
      "gestión de cartera IPS",
      "flujo de caja IPS",
      "indicadores de recaudo",
      "glosas médicas",
      "cartera vencida IPS",
      "sostenibilidad financiera IPS",
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
