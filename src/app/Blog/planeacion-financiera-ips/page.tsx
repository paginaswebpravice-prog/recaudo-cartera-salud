import type { Metadata } from "next";
import PlaneacionFinancieraIPS from "./PlaneacionFinancieraIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/planeacion-financiera-ips";

export const metadata: Metadata = {
  title:
    "Planeación financiera para IPS en Colombia: 7 errores que afectan la liquidez",
  description:
    "Conozca 7 errores frecuentes en la planeación financiera de IPS en Colombia y cómo mejorar presupuestos, flujo de caja, cartera y proyecciones para fortalecer la sostenibilidad.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "Planeación financiera para IPS: 7 errores que pueden afectar la liquidez",
    description:
      "Guía práctica para IPS y clínicas en Colombia sobre presupuestos, flujo de caja, cartera vencida, proyecciones y gestión de riesgos financieros.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Planeación financiera para IPS en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Planeación financiera para IPS: 7 errores que pueden afectar la liquidez",
    description:
      "Errores frecuentes en presupuestos, flujo de caja y gestión financiera de IPS y clínicas en Colombia.",
    images: ["https://recaudocarteraipsyeps.com/logo.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Planeación financiera para IPS en Colombia: 7 errores que pueden afectar la liquidez",
  description:
    "Guía práctica sobre planeación financiera para IPS, presupuestos, flujo de caja, cartera vencida, proyecciones e indicadores financieros en Colombia.",
  image: "https://recaudocarteraipsyeps.com/logo.png",
  inLanguage: "es-CO",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  author: {
    "@type": "Organization",
    name: "PRAVICE",
    url: "https://recaudocarteraipsyeps.com",
  },
  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
    url: "https://recaudocarteraipsyeps.com",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo.png",
    },
  },
  articleSection: "Gestión financiera para IPS",
  keywords: [
    "planeación financiera IPS",
    "planeación financiera IPS Colombia",
    "presupuesto IPS",
    "presupuesto para IPS Colombia",
    "flujo de caja IPS",
    "liquidez IPS",
    "gestión financiera IPS",
    "proyección financiera IPS",
    "cartera vencida IPS",
    "sostenibilidad financiera IPS",
    "indicadores financieros IPS",
    "gestión financiera clínicas",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <PlaneacionFinancieraIPS />
    </>
  );
}
