import CapitalTrabajoIPS from "./CapitalTrabajoIPS";

export const metadata = {
  title:
    "Capital de trabajo para IPS: qué es y cómo administrarlo correctamente | Guía financiera para IPS en Colombia",
  description:
    "Aprenda qué es el capital de trabajo en una IPS, cómo calcularlo y qué estrategias implementar para mejorar la liquidez y estabilidad financiera en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/capital-trabajo-ips",
  },
  openGraph: {
    title:
      "Capital de trabajo para IPS: qué es y cómo administrarlo correctamente",
    description:
      "Guía práctica para fortalecer la liquidez, controlar la cartera y mejorar la estabilidad financiera de IPS y clínicas en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/capital-trabajo-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Capital de trabajo para IPS: qué es y cómo administrarlo correctamente",
    description:
      "Buenas prácticas para administrar el capital de trabajo, mejorar la liquidez y fortalecer la sostenibilidad financiera de IPS y clínicas en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/capital-trabajo-ips",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "capital de trabajo IPS",
      "liquidez IPS Colombia",
      "gestión financiera IPS",
      "flujo de caja IPS",
      "cartera vencida salud",
      "administración financiera clínicas",
      "capital de trabajo hospitales",
      "recuperación cartera EPS",
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

      <CapitalTrabajoIPS />
    </>
  );
}
