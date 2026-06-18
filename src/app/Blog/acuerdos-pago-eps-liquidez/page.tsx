import AcuerdosPagoEPSLiquidez from "./AcuerdosPagoEPSLiquidez";

export const metadata = {
  title:
    "Cómo negociar acuerdos de pago con EPS sin afectar la liquidez | Guía para IPS en Colombia",
  description:
    "Aprenda cómo negociar acuerdos de pago con EPS en Colombia sin comprometer la liquidez de su IPS. Estrategias financieras y jurídicas para recuperar cartera de forma segura.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/acuerdos-pago-eps-liquidez",
  },
  openGraph: {
    title: "Cómo negociar acuerdos de pago con EPS sin afectar la liquidez",
    description:
      "Estrategias para recuperar cartera de EPS manteniendo la estabilidad financiera de IPS y clínicas en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/acuerdos-pago-eps-liquidez",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo negociar acuerdos de pago con EPS sin afectar la liquidez",
    description:
      "Guía para IPS, clínicas y hospitales sobre negociación de acuerdos de pago con EPS, recuperación de cartera y protección del flujo de caja.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/acuerdos-pago-eps-liquidez",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "acuerdos de pago EPS",
      "negociar cartera EPS",
      "liquidez IPS",
      "recuperación de cartera salud",
      "flujo de caja IPS",
      "cobro cartera EPS Colombia",
      "gestión financiera IPS",
      "acuerdos de pago sector salud",
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

      <AcuerdosPagoEPSLiquidez />
    </>
  );
}
