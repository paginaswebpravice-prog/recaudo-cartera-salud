import type { Metadata } from "next";
import ErroresCobroCarteraEPSIPS from "./ErroresCobroCarteraEPSIPS";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/errores-cobro-cartera-eps-ips";

export const metadata: Metadata = {
  title: "5 errores que hacen perder dinero a las IPS al cobrar a las EPS",
  description:
    "Conozca 5 errores frecuentes en el cobro de cartera a EPS que pueden retrasar pagos, aumentar glosas y dificultar la recuperación de recursos de IPS y clínicas en Colombia.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "5 errores que hacen perder dinero a las IPS al cobrar a las EPS",
    description:
      "Descubra los errores de facturación, glosas, seguimiento y cobro jurídico que pueden afectar la recuperación de cartera de IPS y clínicas.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Errores frecuentes en el cobro de cartera de IPS a EPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 errores que hacen perder dinero a las IPS al cobrar a las EPS",
    description:
      "Errores frecuentes de facturación, glosas, seguimiento y cobro que pueden afectar la recuperación de cartera de las IPS.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "5 errores que hacen perder dinero a las IPS al cobrar a las EPS",
    description:
      "Guía práctica sobre los principales errores administrativos, documentales, financieros y jurídicos que pueden afectar la recuperación de cartera de IPS y clínicas frente a EPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
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
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
      },
    },
    articleSection: "Recuperación de cartera en salud",
    keywords: [
      "errores cobro cartera EPS",
      "cobro de cartera a EPS",
      "cartera EPS",
      "recuperación de cartera IPS",
      "cartera vencida IPS",
      "cobro EPS Colombia",
      "glosas médicas",
      "facturación IPS",
      "cobro jurídico EPS",
      "IPS Colombia",
      "clínicas Colombia",
      "hospitales Colombia",
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

      <ErroresCobroCarteraEPSIPS />
    </>
  );
}
