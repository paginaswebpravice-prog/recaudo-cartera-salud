import CobroCarteraEPSIntervenidas from "./CobroCarteraEPSIntervenidas";

export const metadata = {
  title:
    "Cómo cobrar cartera de EPS intervenidas o en liquidación en Colombia | Guía para IPS y clínicas",
  description:
    "Aprenda cómo recuperar cartera frente a EPS intervenidas, liquidadas o bajo vigilancia estatal en Colombia mediante estrategias jurídicas y financieras.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-eps-intervenidas",
  },
  openGraph: {
    title:
      "Cómo cobrar cartera de EPS intervenidas o en liquidación en Colombia",
    description:
      "Guía práctica para IPS y clínicas sobre recuperación de cartera frente a EPS intervenidas o liquidadas en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-eps-intervenidas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo cobrar cartera de EPS intervenidas o en liquidación en Colombia",
    description:
      "Guía jurídica y financiera para IPS y clínicas sobre recuperación de cartera frente a EPS intervenidas o liquidadas.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-eps-intervenidas",
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
      <CobroCarteraEPSIntervenidas />
    </>
  );
}
