import CobroCarteraADRES from "./CobroCarteraAdres";

export const metadata = {
  title: "Cobro de cartera ante ADRES en Colombia | PRAVICE",
  description:
    "Cobro de cartera ante ADRES: reclamación, soportes, objeciones y ruta jurídica hasta lograr el pago. PRAVICE Abogados sector salud.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",
  },
  openGraph: {
    title: "Cobro de cartera ante ADRES en Colombia | PRAVICE",
    description:
      "Reclamación administrativa, respuesta a objeciones y ruta jurídica hasta lograr el recaudo efectivo.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cobro de cartera ante ADRES en Colombia | PRAVICE",
    description:
      "Guía sobre reclamación administrativa, objeciones y ruta jurídica para cobro de cartera ante ADRES en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",
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
      <CobroCarteraADRES />
    </>
  );
}
