import ConciliacionCarteraIPSEPS from "./ConciliacionCarteraIPSEPS";

export const metadata = {
  title:
    "Conciliación de cartera entre IPS y EPS en Colombia | Cómo funciona y cómo recuperar cartera",
  description:
    "Conozca cómo funciona la conciliación de cartera entre IPS y EPS en Colombia, acuerdos de pago y estrategias para recuperación efectiva de cartera en salud.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/conciliacion-cartera-ips-eps",
  },
  openGraph: {
    title: "Conciliación de cartera entre IPS y EPS en Colombia",
    description:
      "Proceso de conciliación financiera, acuerdos de pago y recuperación efectiva de cartera en salud.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/conciliacion-cartera-ips-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación de cartera entre IPS y EPS en Colombia",
    description:
      "Guía sobre conciliación de cartera, acuerdos de pago y recuperación financiera para IPS y clínicas en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/conciliacion-cartera-ips-eps",
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
      <ConciliacionCarteraIPSEPS />
    </>
  );
}
