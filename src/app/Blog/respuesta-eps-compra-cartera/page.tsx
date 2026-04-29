import { Metadata } from "next";
import RespuestaEpsCompraCartera from "./RespuestaEpsCompraCartera";

export const metadata: Metadata = {
  title:
    "Cómo responder a una EPS que quiere comprar su cartera en Colombia (sin perder dinero) | Guía IPS Bogotá",
  description:
    "Aprenda cómo responder a una EPS cuando propone compra de cartera en Colombia. Estrategias legales para IPS y clínicas en Bogotá para evitar descuentos y recuperar el 100% del valor de la cartera.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/respuesta-eps-compra-cartera",
  },
  openGraph: {
    title: "Cómo responder a una EPS que quiere comprar su cartera en Colombia",
    description:
      "Estrategias legales para IPS y clínicas en Bogotá para evitar descuentos y proteger el valor total de la cartera.",
    url: "https://recaudocarteraipsyeps.com/Blog/respuesta-eps-compra-cartera",
    type: "article",
    locale: "es_CO",
    siteName: "PRAVICE",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo responder a una EPS que quiere comprar su cartera en Colombia sin perder dinero",
    description:
      "Guía para IPS y clínicas en Bogotá sobre cómo responder a propuestas de compra de cartera EPS y proteger el valor real.",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/respuesta-eps-compra-cartera",
    },
    inLanguage: "es-CO",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RespuestaEpsCompraCartera />
    </>
  );
}
