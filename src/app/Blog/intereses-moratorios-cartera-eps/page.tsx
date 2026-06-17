import InteresesMoratoriosCarteraEPS from "./InteresesMoratoriosCarteraEPS";

export const metadata = {
  title:
    "Intereses moratorios en cartera EPS: cómo calcularlos correctamente en Colombia",
  description:
    "Guía para IPS, clínicas y hospitales sobre intereses moratorios en cartera EPS. Aprenda cómo calcularlos, reclamarlos y utilizarlos en procesos de recuperación de cartera en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/intereses-moratorios-cartera-eps",
  },
  openGraph: {
    title:
      "Intereses moratorios en cartera EPS: cómo calcularlos correctamente",
    description:
      "Aspectos legales y financieros para reclamar intereses moratorios derivados de cartera vencida de EPS en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/intereses-moratorios-cartera-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Intereses moratorios en cartera EPS: cómo calcularlos correctamente en Colombia",
    description:
      "Guía especializada sobre cálculo y reclamación de intereses moratorios en cartera EPS para IPS, clínicas y hospitales colombianos.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/intereses-moratorios-cartera-eps",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "intereses moratorios EPS",
      "cartera EPS Colombia",
      "cobro de cartera salud",
      "intereses cartera vencida EPS",
      "proceso ejecutivo EPS",
      "IPS Colombia",
      "hospitales Colombia",
      "clínicas Colombia",
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

      <InteresesMoratoriosCarteraEPS />
    </>
  );
}
