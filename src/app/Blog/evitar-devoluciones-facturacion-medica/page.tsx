import EvitarDevolucionesFacturacionMedica from "./EvitarDevolucionesFacturacionMedica";

export const metadata = {
  title:
    "Cómo evitar devoluciones de facturación médica en Colombia | Guía para IPS y clínicas",
  description:
    "Conozca cómo reducir devoluciones de facturación médica en Colombia y mejorar el recaudo de cartera en IPS, clínicas y hospitales.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/evitar-devoluciones-facturacion-medica",
  },
  openGraph: {
    title: "Cómo evitar devoluciones de facturación médica en Colombia",
    description:
      "Guía práctica para IPS y clínicas sobre devoluciones de facturación médica y recuperación de cartera.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/evitar-devoluciones-facturacion-medica",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo evitar devoluciones de facturación médica en Colombia",
    description:
      "Guía sobre devoluciones de facturación médica, auditoría preventiva y recuperación de cartera para IPS y clínicas en Colombia.",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/evitar-devoluciones-facturacion-medica",
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
      <EvitarDevolucionesFacturacionMedica />
    </>
  );
}
