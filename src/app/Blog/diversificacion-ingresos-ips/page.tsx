import DiversificacionIngresosIPS from "./DiversificacionIngresosIPS";

export const metadata = {
  title:
    "Diversificación de ingresos para IPS en Colombia: cómo reducir riesgos financieros",
  description:
    "Aprenda cómo diversificar las fuentes de ingresos de una IPS en Colombia para reducir la dependencia de las EPS, fortalecer la liquidez y mejorar la sostenibilidad financiera.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/diversificacion-ingresos-ips",
  },
  openGraph: {
    title:
      "Diversificación de ingresos para IPS: cómo reducir riesgos financieros",
    description:
      "Estrategias para disminuir la dependencia de las EPS y fortalecer la estabilidad financiera de clínicas, hospitales e IPS en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/diversificacion-ingresos-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Diversificación de ingresos para IPS en Colombia: cómo reducir riesgos financieros",
    description:
      "Guía práctica para IPS, clínicas y hospitales que buscan diversificar ingresos, reducir riesgos financieros y mejorar su sostenibilidad.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/diversificacion-ingresos-ips",
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

      <DiversificacionIngresosIPS />
    </>
  );
}
