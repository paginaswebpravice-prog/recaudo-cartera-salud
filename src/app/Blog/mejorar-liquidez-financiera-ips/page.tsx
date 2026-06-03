import MejorarLiquidezFinancieraIPS from "./MejorarLiquidezFinancieraIPS";

export const metadata = {
  title:
    "Cómo mejorar la liquidez financiera de una IPS en Colombia | Guía para clínicas y hospitales",
  description:
    "Estrategias para reducir cartera vencida, mejorar flujo de caja y fortalecer la sostenibilidad financiera de IPS y clínicas en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/mejorar-liquidez-financiera-ips",
  },
  openGraph: {
    title: "Cómo mejorar la liquidez financiera de una IPS en Colombia",
    description:
      "Guía práctica para IPS y clínicas sobre flujo de caja, cartera vencida y sostenibilidad financiera en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/mejorar-liquidez-financiera-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo mejorar la liquidez financiera de una IPS en Colombia",
    description:
      "Guía financiera y jurídica para IPS y clínicas sobre flujo de caja, sostenibilidad financiera y recuperación de cartera en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/mejorar-liquidez-financiera-ips",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
  };

  return (
    <>
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* CONTENT */}
      <MejorarLiquidezFinancieraIPS />
    </>
  );
}
