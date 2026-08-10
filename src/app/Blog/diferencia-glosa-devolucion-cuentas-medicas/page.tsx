import type { Metadata } from "next";
import DiferenciaGlosaDevolucionCuentasMedicas from "./DiferenciaGlosaDevolucionCuentasMedicas";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/diferencia-glosa-devolucion-cuentas-medicas";

export const metadata: Metadata = {
  title:
    "Glosa vs. devolución en cuentas médicas: diferencias y qué hacer | Colombia",
  description:
    "¿Glosa o devolución? Conozca las diferencias en cuentas médicas en Colombia, sus causas, efectos y cómo responder para proteger la cartera de IPS y clínicas.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Glosa vs. devolución en cuentas médicas: diferencias y qué hacer",
    description:
      "Guía práctica para IPS y clínicas sobre glosas, devoluciones, respuestas y recuperación de cartera en Colombia.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glosa vs. devolución en cuentas médicas: diferencias y qué hacer",
    description:
      "Conozca cuándo existe una glosa, cuándo procede una devolución y cómo actuar para proteger la cartera de una IPS.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Glosa vs. devolución en cuentas médicas: diferencias y qué hacer",
  description:
    "Guía práctica para IPS, clínicas y prestadores de salud sobre las diferencias entre glosas y devoluciones de cuentas médicas en Colombia.",
  inLanguage: "es-CO",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  author: {
    "@type": "Organization",
    name: "PRAVICE",
  },
  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
  },
  articleSection: "Gestión de cartera en salud",
  keywords: [
    "diferencia entre glosa y devolución",
    "glosa y devolución cuentas médicas",
    "qué es una glosa médica",
    "qué es una devolución de factura médica",
    "glosas médicas Colombia",
    "devoluciones cuentas médicas",
    "respuesta a glosas",
    "cartera IPS EPS",
    "recuperación de cartera en salud",
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

      <DiferenciaGlosaDevolucionCuentasMedicas />
    </>
  );
}
