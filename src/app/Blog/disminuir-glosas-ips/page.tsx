import DisminuirGlosasIPS from "./DisminuirGlosasIPS";

export const metadata = {
  title:
    "Cómo disminuir el porcentaje de glosas en una IPS en Colombia | Estrategias para mejorar el recaudo",
  description:
    "Aprenda cómo disminuir el porcentaje de glosas médicas en IPS, clínicas y hospitales en Colombia. Indicadores, auditoría preventiva y estrategias para mejorar la facturación.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/disminuir-glosas-ips",
  },
  openGraph: {
    title: "Cómo disminuir el porcentaje de glosas en una IPS en Colombia",
    description:
      "Estrategias para reducir glosas médicas, mejorar la facturación y fortalecer el flujo de caja de las IPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/disminuir-glosas-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo disminuir el porcentaje de glosas en una IPS en Colombia",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre reducción de glosas, auditoría preventiva e indicadores de calidad en facturación médica.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/disminuir-glosas-ips",
    keywords: [
      "glosas médicas",
      "disminuir glosas IPS",
      "facturación médica Colombia",
      "glosas EPS",
      "auditoría de cuentas médicas",
      "cartera EPS",
      "IPS Colombia",
      "gestión de glosas",
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <DisminuirGlosasIPS />
    </>
  );
}
