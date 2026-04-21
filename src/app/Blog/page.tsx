import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title:
    "Cómo recuperar cartera EPS en Colombia | Blog jurídico para IPS y clínicas",
  description:
    "Blog jurídico especializado en cómo recuperar cartera EPS en Colombia. Guías sobre cobro de cartera, ADRES, procesos ejecutivos, medidas cautelares y estrategias legales para IPS y clínicas en Bogotá y Colombia.",

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog",
  },

  openGraph: {
    title:
      "Cómo recuperar cartera EPS en Colombia | Blog jurídico para IPS y clínicas",
    description:
      "Guías legales prácticas para recuperar cartera EPS, ADRES y procesos judiciales en Colombia.",
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
    name: "Blog jurídico: cómo recuperar cartera EPS en Colombia",
    description:
      "Artículos especializados sobre recuperación de cartera EPS, ADRES y procesos ejecutivos en Colombia para IPS y clínicas.",
    url: "https://recaudocarteraipsyeps.com/Blog",
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
      url: "https://recaudocarteraipsyeps.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <BlogClient />
    </>
  );
}
