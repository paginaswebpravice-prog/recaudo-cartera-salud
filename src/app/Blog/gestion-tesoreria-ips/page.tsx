import GestionTesoreriaIPS from "./GestionTesoreriaIPS";

export const metadata = {
  title:
    "Gestión de tesorería en IPS: claves para evitar problemas de liquidez en Colombia",
  description:
    "Aprenda cómo optimizar la gestión de tesorería en IPS, clínicas y hospitales en Colombia. Estrategias para mejorar flujo de caja, recaudo y sostenibilidad financiera.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/gestion-tesoreria-ips",
  },
  openGraph: {
    title:
      "Gestión de tesorería en IPS: claves para evitar problemas de liquidez",
    description:
      "Guía práctica sobre flujo de caja, recaudo, liquidez y gestión financiera para IPS en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/gestion-tesoreria-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Gestión de tesorería en IPS: claves para evitar problemas de liquidez",
    description:
      "Guía para IPS, clínicas y hospitales sobre administración de tesorería, flujo de caja y sostenibilidad financiera en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/gestion-tesoreria-ips",
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
      "liquidez IPS Colombia",
      "flujo de caja IPS",
      "cartera EPS",
      "gestión financiera IPS",
      "recaudo sector salud",
      "tesorería clínicas Colombia",
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
