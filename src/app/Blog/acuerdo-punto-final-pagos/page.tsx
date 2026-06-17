import AcuerdoPuntoFinalPagos from "./AcuerdoPuntoFinalPagos";

export const metadata = {
  title:
    "Cómo reclamar pagos pendientes del Acuerdo de Punto Final en Colombia | Guía para IPS y hospitales",
  description:
    "Conozca cómo reclamar recursos pendientes del Acuerdo de Punto Final, qué documentos revisar y cuáles son las estrategias para recuperar cartera en el sector salud colombiano.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/acuerdo-punto-final-pagos",
  },
  openGraph: {
    title:
      "Cómo reclamar pagos pendientes del Acuerdo de Punto Final en Colombia",
    description:
      "Guía para IPS, clínicas y hospitales sobre reclamaciones pendientes derivadas del Acuerdo de Punto Final.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/acuerdo-punto-final-pagos",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo reclamar pagos pendientes del Acuerdo de Punto Final en Colombia",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre recuperación de recursos pendientes relacionados con el Acuerdo de Punto Final.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/acuerdo-punto-final-pagos",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "Acuerdo de Punto Final",
      "ADRES Colombia",
      "cartera salud Colombia",
      "reclamaciones ADRES",
      "IPS Colombia",
      "hospitales Colombia",
      "pagos pendientes salud",
      "recuperación de cartera EPS",
      "saneamiento financiero salud",
      "sector salud Colombia",
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

      <AcuerdoPuntoFinalPagos />
    </>
  );
}
