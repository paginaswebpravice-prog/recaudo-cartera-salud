import CapitalTrabajoIPS from "./CapitalTrabajoIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/capital-trabajo-ips";

export const metadata = {
  title: "Capital de trabajo en IPS: cómo calcularlo y mejorar la liquidez",
  description:
    "Conozca qué es el capital de trabajo en una IPS, cómo calcularlo y qué hacer para mejorar la liquidez, controlar la cartera y fortalecer el flujo de caja.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Capital de trabajo en IPS: cómo calcularlo y mejorar la liquidez",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre capital de trabajo, liquidez, cartera vencida y flujo de caja en Colombia.",
    type: "article",
    url: canonicalUrl,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Capital de trabajo en IPS: cómo calcularlo y mejorar la liquidez",
    description:
      "Guía práctica para entender, calcular y administrar el capital de trabajo de una IPS, con estrategias para mejorar la liquidez, controlar la cartera y fortalecer el flujo de caja.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
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
      "capital de trabajo IPS",
      "capital de trabajo en clínicas",
      "capital de trabajo hospitales",
      "cómo calcular capital de trabajo",
      "liquidez IPS Colombia",
      "flujo de caja IPS",
      "gestión financiera IPS",
      "cartera vencida EPS",
      "recuperación de cartera IPS",
      "administración financiera clínicas",
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
