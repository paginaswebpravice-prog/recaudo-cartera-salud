import CartaCobroEPS from "./CartaCobroEPS";

export const metadata = {
  title:
    "Carta de cobro a EPS: modelo para recuperar cartera de IPS | Colombia",
  description:
    "Modelo de carta de cobro a EPS para IPS y clínicas en Colombia. Aprende qué incluir, qué anexar y cómo hacer seguimiento a la cartera vencida.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/carta-cobro-cartera-eps",
  },
  openGraph: {
    title:
      "Carta de cobro a EPS: modelo para recuperar cartera de IPS en Colombia",
    description:
      "Guía y modelo de carta de cobro para IPS, clínicas y proveedores de salud que necesitan gestionar cartera vencida frente a EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/carta-cobro-cartera-eps",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Carta de cobro a EPS en Colombia: modelo para recuperar cartera de IPS",
    description:
      "Guía práctica para elaborar una carta de cobro a una EPS, organizar los soportes de cartera vencida y fortalecer el cobro prejurídico de IPS, clínicas y proveedores de salud en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/carta-cobro-cartera-eps",
    keywords: [
      "carta de cobro a EPS",
      "modelo carta cobro EPS",
      "cobro de cartera a EPS",
      "cartera vencida IPS",
      "cobro prejurídico EPS",
      "cobro cartera IPS",
      "modelo requerimiento de pago EPS",
      "recuperación de cartera IPS",
      "cobro a EPS Colombia",
      "carta cobro cartera IPS",
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <CartaCobroEPS />
    </>
  );
}
