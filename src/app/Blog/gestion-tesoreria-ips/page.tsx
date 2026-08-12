import GestionTesoreriaIPS from "./GestionTesoreriaIPS";

export const metadata = {
  title:
    "Gestión de tesorería en IPS: cómo mejorar liquidez y flujo de caja en Colombia",
  description:
    "Guía práctica sobre gestión de tesorería en IPS, flujo de caja, liquidez, cartera de EPS y recaudo. Conozca cómo anticipar faltantes de efectivo y fortalecer las finanzas de clínicas y hospitales en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/gestion-tesoreria-ips",
  },
  openGraph: {
    title: "Gestión de tesorería en IPS: cómo mejorar liquidez y flujo de caja",
    description:
      "Conozca cómo mejorar la tesorería de una IPS mediante una mejor planeación del flujo de caja, control de cartera y estrategias de recaudo.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/gestion-tesoreria-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Gestión de tesorería en IPS: cómo mejorar liquidez y flujo de caja en Colombia",
    description:
      "Guía práctica sobre gestión de tesorería en IPS, flujo de caja, liquidez, cartera de EPS, recaudo y sostenibilidad financiera de clínicas y hospitales en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://recaudocarteraipsyeps.com/Blog/gestion-tesoreria-ips",
    },
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "gestión de tesorería IPS",
      "tesorería IPS Colombia",
      "flujo de caja IPS",
      "liquidez IPS",
      "gestión financiera IPS",
      "cartera EPS",
      "recaudo sector salud",
      "cuentas por cobrar IPS",
      "cartera vencida EPS",
      "tesorería clínicas",
      "flujo de efectivo IPS",
      "recuperación de cartera salud",
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

      <GestionTesoreriaIPS />
    </>
  );
}
