import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title:
    "Blog Jurídico de Recuperación de Cartera EPS en Colombia | IPS y clínicas en Bogotá",
  description:
    "Blog especializado en cobro de cartera EPS en Colombia. Estrategias legales, procesos ejecutivos, ADRES, medidas cautelares y recuperación de cartera para IPS y clínicas en Bogotá.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog",
  },
  openGraph: {
    title: "Blog Jurídico - Recuperación de Cartera EPS en Colombia",
    description:
      "Guías legales para IPS y clínicas sobre cobro de cartera EPS, ADRES y procesos judiciales en Colombia.",
    url: "https://recaudocarteraipsyeps.com/Blog",
    type: "website",
    locale: "es_CO",
    siteName: "PRAVICE",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Jurídico - Recuperación de Cartera EPS",
    description:
      "Artículos especializados sobre recuperación de cartera EPS, ADRES y procesos ejecutivos para IPS y clínicas en Colombia.",
    url: "https://recaudocarteraipsyeps.com/Blog",
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
      url: "https://recaudocarteraipsyeps.com",
    },
  };

  return (
    <>
      {/* SCHEMA JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <BlogClient />
    </>
  );
}
