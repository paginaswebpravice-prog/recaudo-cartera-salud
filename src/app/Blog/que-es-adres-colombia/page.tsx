import QueEsADRESColombia from "./QueEsADRESColombia";

export const metadata = {
  title:
    "Qué es ADRES y cuál es su función en el sistema de salud colombiano | Guía completa",
  description:
    "Conozca qué es ADRES, cuáles son sus funciones, cómo administra los recursos de salud en Colombia y cuál es su impacto para IPS, clínicas y hospitales.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/que-es-adres-colombia",
  },
  openGraph: {
    title:
      "Qué es ADRES y cuál es su función en el sistema de salud colombiano",
    description:
      "Guía práctica sobre ADRES, administración de recursos de salud, giro directo y funcionamiento financiero del sistema colombiano.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/que-es-adres-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Qué es ADRES y cuál es su función en el sistema de salud colombiano",
    description:
      "Guía completa sobre ADRES, sus funciones, competencias y papel dentro del sistema de salud colombiano.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/que-es-adres-colombia",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "ADRES",
      "qué es ADRES",
      "funciones de ADRES",
      "ADRES Colombia",
      "giro directo ADRES",
      "IPS Colombia",
      "sistema de salud colombiano",
      "recursos públicos salud",
      "cartera salud",
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

      <QueEsADRESColombia />
    </>
  );
}
