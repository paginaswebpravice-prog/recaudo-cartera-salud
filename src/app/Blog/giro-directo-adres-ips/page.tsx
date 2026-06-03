import GiroDirectoADRESIPS from "./GiroDirectoADRESIPS";

export const metadata = {
  title:
    "Cómo funciona el giro directo ADRES y cómo afecta a las IPS | Guía financiera para clínicas e IPS",
  description:
    "Conozca cómo funciona el giro directo ADRES en Colombia y cuál es su impacto financiero en IPS, clínicas y hospitales.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/giro-directo-adres-ips",
  },
  openGraph: {
    title: "Cómo funciona el giro directo ADRES y cómo afecta a las IPS",
    description:
      "Guía práctica sobre el impacto financiero del giro directo ADRES en clínicas, hospitales e IPS en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/giro-directo-adres-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo funciona el giro directo ADRES y cómo afecta a las IPS",
    description:
      "Guía financiera sobre el funcionamiento del giro directo ADRES y su impacto en IPS y clínicas en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/giro-directo-adres-ips",
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
      <GiroDirectoADRESIPS />
    </>
  );
}
