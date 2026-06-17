import GlosasAdministrativasSalud from "./GlosasAdministrativasSalud";

export const metadata = {
  title:
    "Glosas administrativas en salud: causas y soluciones para IPS en Colombia",
  description:
    "Aprenda cuáles son las principales causas de glosas administrativas en salud, cómo prevenirlas y cómo responderlas para mejorar el recaudo de cartera en IPS, clínicas y hospitales de Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/glosas-administrativas-salud",
  },
  openGraph: {
    title:
      "Glosas administrativas en salud: causas y soluciones para IPS en Colombia",
    description:
      "Guía práctica para prevenir, responder y reducir glosas administrativas en el sector salud colombiano.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/glosas-administrativas-salud",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Glosas administrativas en salud: causas y soluciones para IPS en Colombia",
    description:
      "Guía completa sobre glosas administrativas, prevención, respuesta y recuperación de cartera para IPS, clínicas y hospitales.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/glosas-administrativas-salud",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "glosas administrativas",
      "glosas médicas",
      "facturación en salud",
      "IPS Colombia",
      "cartera EPS",
      "respuesta a glosas",
      "devoluciones médicas",
      "recaudo de cartera",
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

      <GlosasAdministrativasSalud />
    </>
  );
}
