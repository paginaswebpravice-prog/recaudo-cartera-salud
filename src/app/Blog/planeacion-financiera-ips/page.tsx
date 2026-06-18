import PlaneacionFinancieraIPS from "./PlaneacionFinancieraIPS";

export const metadata = {
  title:
    "Planeación financiera para IPS: errores que ponen en riesgo la operación | Guía para clínicas e IPS en Colombia",
  description:
    "Conozca los errores más comunes en la planeación financiera de IPS y clínicas en Colombia. Aprenda a construir presupuestos, proyecciones y estrategias financieras más precisas.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/planeacion-financiera-ips",
  },
  openGraph: {
    title:
      "Planeación financiera para IPS: errores que ponen en riesgo la operación",
    description:
      "Guía práctica para mejorar presupuestos, proyecciones financieras y sostenibilidad de IPS y clínicas en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/planeacion-financiera-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Planeación financiera para IPS: errores que ponen en riesgo la operación",
    description:
      "Errores frecuentes en presupuestos, proyecciones financieras y gestión económica de IPS, clínicas y hospitales en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/planeacion-financiera-ips",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "planeación financiera IPS",
      "presupuesto IPS Colombia",
      "flujo de caja IPS",
      "gestión financiera salud",
      "proyección financiera IPS",
      "cartera vencida IPS",
      "sostenibilidad financiera IPS",
      "clínicas Colombia",
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

      <PlaneacionFinancieraIPS />
    </>
  );
}
