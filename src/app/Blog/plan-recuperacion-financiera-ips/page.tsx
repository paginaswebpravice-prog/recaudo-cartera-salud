import PlanRecuperacionFinancieraIPS from "./PlanRecuperacionFinancieraIPS";

export const metadata = {
  title:
    "Cómo elaborar un plan de recuperación financiera para una IPS en Colombia",
  description:
    "Aprenda cómo diseñar un plan de recuperación financiera para IPS, clínicas y hospitales en Colombia. Estrategias para mejorar liquidez, recuperar cartera y fortalecer la sostenibilidad institucional.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/plan-recuperacion-financiera-ips",
  },
  openGraph: {
    title: "Cómo elaborar un plan de recuperación financiera para una IPS",
    description:
      "Guía práctica para IPS sobre recuperación financiera, liquidez y cartera en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/plan-recuperacion-financiera-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo elaborar un plan de recuperación financiera para una IPS",
    description:
      "Guía para IPS, clínicas y hospitales sobre recuperación financiera, flujo de caja, liquidez y recuperación de cartera en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/plan-recuperacion-financiera-ips",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "plan de recuperación financiera IPS",
      "liquidez IPS Colombia",
      "recuperación financiera sector salud",
      "flujo de caja IPS",
      "recuperación de cartera EPS",
      "planeación financiera IPS",
      "gestión financiera clínicas",
      "sostenibilidad financiera hospitales",
      "cartera vencida IPS",
      "indicadores financieros IPS",
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

      <PlanRecuperacionFinancieraIPS />
    </>
  );
}
