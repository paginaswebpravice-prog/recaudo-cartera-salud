import DiferenciasCobroEpsAdresEntes from "./DiferenciasCobroEpsAdresEntes";

export const metadata = {
  title:
    "Diferencias entre cobro a EPS, ADRES y entidades territoriales en Colombia | Guía para IPS",
  description:
    "Aprenda cuándo corresponde reclamar pagos a EPS, ADRES o entidades territoriales. Guía práctica para IPS, clínicas y hospitales en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/diferencias-cobro-eps-adres-entes",
  },
  openGraph: {
    title:
      "Diferencias entre cobro a EPS, ADRES y entidades territoriales en Colombia",
    description:
      "Conozca quién debe pagar los servicios de salud y cómo recuperar cartera ante EPS, ADRES y entidades territoriales.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/diferencias-cobro-eps-adres-entes",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Diferencias entre cobro a EPS, ADRES y entidades territoriales en Colombia",
    description:
      "Guía para IPS, clínicas y hospitales sobre las diferencias entre reclamaciones dirigidas a EPS, ADRES y entidades territoriales.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/diferencias-cobro-eps-adres-entes",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "cobro a EPS",
      "ADRES Colombia",
      "entidades territoriales salud",
      "recuperación de cartera IPS",
      "cartera sector salud",
      "cobro entidades territoriales",
      "reclamaciones ADRES",
      "IPS Colombia",
      "hospitales Colombia",
      "cartera EPS",
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

      <DiferenciasCobroEpsAdresEntes />
    </>
  );
}
