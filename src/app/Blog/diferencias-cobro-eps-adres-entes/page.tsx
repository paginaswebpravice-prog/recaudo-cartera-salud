import type { Metadata } from "next";
import DiferenciasCobroEpsAdresEntes from "./DiferenciasCobroEpsAdresEntes";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/diferencias-cobro-eps-adres-entes";

export const metadata: Metadata = {
  title: "¿A quién cobrar: EPS, ADRES o entidad territorial? | Guía 2026",
  description:
    "Conozca quién debe reconocer y pagar una cuenta de salud: EPS, ADRES o entidad territorial. Guía práctica para IPS sobre cartera, reclamaciones y cobro en Colombia.",
  keywords: [
    "cobro a EPS",
    "cobro a ADRES",
    "cobro entidades territoriales",
    "quién paga una cuenta médica",
    "cartera EPS Colombia",
    "recuperación de cartera IPS",
    "reclamaciones ADRES",
    "cartera sector salud",
    "cobro IPS Colombia",
    "entidades territoriales salud",
    "cuentas médicas Colombia",
    "recuperación cartera salud",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "¿A quién cobrar: EPS, ADRES o entidad territorial? Guía para IPS",
    description:
      "Aprenda a identificar quién debe responder por una cuenta de salud y cómo orientar correctamente el cobro ante EPS, ADRES o entidades territoriales.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
    images: [
      {
        url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cobro a EPS, ADRES o entidades territoriales en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿A quién cobrar: EPS, ADRES o entidad territorial?",
    description:
      "Guía para IPS sobre diferencias entre cobrar a una EPS, reclamar ante ADRES o gestionar obligaciones de entidades territoriales.",
    images: ["https://recaudocarteraipsyeps.com/logo_pravice.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "¿A quién cobrar: EPS, ADRES o entidad territorial? Guía para IPS en Colombia",
  description:
    "Guía práctica para IPS, clínicas y hospitales sobre cómo identificar si una cuenta de servicios de salud debe gestionarse ante una EPS, ADRES o una entidad territorial.",
  inLanguage: "es-CO",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  image: {
    "@type": "ImageObject",
    url: "https://recaudocarteraipsyeps.com/logo_pravice.png",
    width: 1200,
    height: 630,
  },
  author: {
    "@type": "Organization",
    name: "PRAVICE",
  },
  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
  },
  articleSection: "Recuperación de cartera en salud",
  keywords: [
    "cobro a EPS",
    "cobro a ADRES",
    "entidades territoriales",
    "recuperación de cartera IPS",
    "cartera EPS",
    "reclamaciones ADRES",
    "cuentas médicas",
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

      <DiferenciasCobroEpsAdresEntes />
    </>
  );
}
