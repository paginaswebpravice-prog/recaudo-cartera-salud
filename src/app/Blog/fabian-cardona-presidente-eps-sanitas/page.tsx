import type { Metadata } from "next";
import FabianCardonaPresidenteEpsSanitas from "./FabianCardonaPresidenteEpsSanitas";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/fabian-cardona-presidente-eps-sanitas";

export const metadata: Metadata = {
  title: "Fabián Cardona asume en EPS Sanitas: ¿qué cambia para las IPS?",
  description:
    "Fabián Cardona asumió la presidencia de EPS Sanitas en medio de la reorganización de Keralty. Conozca qué significa para IPS, cartera, pagos y gestión financiera.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Fabián Cardona asume en EPS Sanitas: ¿qué cambia para las IPS?",
    description:
      "Conozca quién es Fabián Cardona, por qué llega a la presidencia de EPS Sanitas y qué aspectos deben vigilar las IPS frente a cartera y pagos.",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Fabián Cardona asume la presidencia de EPS Sanitas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabián Cardona asume en EPS Sanitas: ¿qué cambia para las IPS?",
    description:
      "Análisis del nuevo liderazgo de EPS Sanitas y sus posibles implicaciones para IPS, cartera y pagos en Colombia.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline: "Fabián Cardona asume en EPS Sanitas: ¿qué cambia para las IPS?",
  description:
    "Análisis del nombramiento de Fabián Cardona como presidente de EPS Sanitas y de los aspectos que las IPS deben considerar frente a cartera, pagos y gestión financiera.",
  image: "https://recaudocarteraipsyeps.com/logo_pravice.png",
  author: {
    "@type": "Organization",
    name: "PRAVICE",
  },
  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
    logo: {
      "@type": "ImageObject",
      url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    },
  },
  datePublished: "2026-03-16",
  dateModified: "2026-08-11",
  inLanguage: "es-CO",
  articleSection: "Riesgos, Intervenciones y Crisis de EPS",
  keywords: [
    "Fabián Cardona EPS Sanitas",
    "nuevo presidente EPS Sanitas",
    "EPS Sanitas",
    "EPS Sanitas cartera",
    "pagos a IPS",
    "cartera EPS Colombia",
    "Keralty Colombia",
    "cartera IPS",
    "recaudo sector salud",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <FabianCardonaPresidenteEpsSanitas />
    </>
  );
}
