import { Metadata } from "next";
import TiposGlosasMedicasColombia from "./TiposGlosasMedicasColombia";

export const metadata: Metadata = {
  title:
    "Tipos de glosas médicas en Colombia: las más comunes y cómo reducirlas",
  description:
    "Conozca los tipos de glosas médicas más frecuentes en Colombia, por qué se generan y qué pueden hacer las IPS y clínicas para reducir devoluciones, rechazos y cartera pendiente.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/tipos-glosas-medicas-colombia",
  },
  openGraph: {
    title:
      "Tipos de glosas médicas en Colombia: las más comunes y cómo reducirlas",
    description:
      "Guía práctica para IPS y clínicas sobre glosas médicas, errores de facturación, soportes, devoluciones y estrategias para evitar que afecten la cartera.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/tipos-glosas-medicas-colombia",
    locale: "es_CO",
    siteName: "PRAVICE",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Tipos de glosas médicas en Colombia: las más comunes y cómo reducirlas",
    description:
      "Guía para IPS, clínicas y prestadores de servicios de salud sobre los tipos de glosas médicas más frecuentes en Colombia, sus principales causas y las estrategias para reducir devoluciones, rechazos y cartera pendiente.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://recaudocarteraipsyeps.com/Blog/tipos-glosas-medicas-colombia",
    },
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "tipos de glosas médicas Colombia",
      "glosas médicas",
      "glosas EPS",
      "cómo evitar glosas médicas",
      "devoluciones de facturas médicas",
      "rechazo de cuentas médicas",
      "facturación IPS",
      "cartera IPS",
      "auditoría de cuentas médicas",
      "respuesta a glosas EPS",
      "recuperación de cartera salud",
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

      <TiposGlosasMedicasColombia />
    </>
  );
}
