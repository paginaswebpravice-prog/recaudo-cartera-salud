import CobroCarteraADRES from "./CobroCarteraAdres";

export const metadata = {
  title:
    "Cómo cobrar cartera ante ADRES en Colombia | Guía para recuperar pagos retenidos y negados (IPS y clínicas)",
  description:
    "Cobro de cartera ante ADRES en Colombia: reclamación, soportes, objeciones y ruta jurídica completa para lograr el pago efectivo. PRAVICE Abogados sector salud.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",
  },
  openGraph: {
    title:
      "Cómo recuperar cartera ante ADRES en Colombia | Guía legal para IPS y clínicas",
    description:
      "Reclamación administrativa, respuesta a objeciones y ruta jurídica completa para lograr el recaudo efectivo ante ADRES.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/cobro-cartera-adres",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo cobrar cartera ante ADRES en Colombia | Guía para recuperar pagos retenidos y negados",
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
