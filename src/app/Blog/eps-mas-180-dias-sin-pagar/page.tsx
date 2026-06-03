import EPSMas180DiasSinPagar from "./EPSMas180DiasSinPagar";

export const metadata = {
  title:
    "Qué hacer si una EPS lleva más de 180 días sin pagar en Colombia | Guía para IPS y clínicas",
  description:
    "Alternativas jurídicas y financieras para IPS y clínicas frente a mora prolongada de EPS en Colombia y recuperación de cartera vencida.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/eps-mas-180-dias-sin-pagar",
  },
  openGraph: {
    title: "Qué hacer si una EPS lleva más de 180 días sin pagar en Colombia",
    description:
      "Guía práctica para IPS y clínicas sobre recuperación de cartera y acciones frente a EPS morosas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/eps-mas-180-dias-sin-pagar",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Qué hacer si una EPS lleva más de 180 días sin pagar en Colombia",
    description:
      "Guía jurídica y financiera para IPS y clínicas frente a mora prolongada de EPS y recuperación de cartera en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/eps-mas-180-dias-sin-pagar",
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
      <EPSMas180DiasSinPagar />
    </>
  );
}
