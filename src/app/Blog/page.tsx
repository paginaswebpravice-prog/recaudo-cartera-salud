import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera EPS en Colombia: guías, estrategias y soluciones para IPS",

  description:
    "Blog especializado en cartera EPS en Colombia para IPS, clínicas y prestadores de salud. Encuentre guías sobre glosas, ADRES, cobro jurídico, procesos ejecutivos y estrategias para mejorar el recaudo.",

  keywords: [
    "recuperación de cartera EPS Colombia",
    "cartera EPS IPS",
    "cartera vencida salud Colombia",
    "glosas EPS Colombia",
    "cobro jurídico IPS",
    "proceso ejecutivo EPS",
    "ADRES cartera salud",
    "gestión de cartera clínica",
    "recuperación cartera hospitales",
  ],

  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog",
  },

  openGraph: {
    title: "Recuperación de cartera EPS en Colombia: guías para IPS y clínicas",

    description:
      "Aprenda cómo gestionar cartera EPS, reducir glosas y fortalecer la recuperación de recursos en IPS y prestadores de salud.",

    url: "https://recaudocarteraipsyeps.com/Blog",

    type: "website",

    locale: "es_CO",

    siteName: "Recaudo Cartera IPS y EPS",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Blog",

    name: "Blog de recuperación de cartera EPS para IPS y clínicas en Colombia",

    description:
      "Contenido jurídico y financiero sobre recuperación de cartera EPS, glosas, ADRES, procesos ejecutivos y gestión de cartera en instituciones de salud.",

    url: "https://recaudocarteraipsyeps.com/Blog",

    publisher: {
      "@type": "Organization",

      name: "PRAVICE ABOGADOS S.A.S.",

      url: "https://recaudocarteraipsyeps.com",
    },

    about: [
      "Recuperación de cartera EPS",

      "Cartera vencida IPS",

      "Cobro jurídico salud",

      "Glosas médicas",

      "Procesos ejecutivos contra EPS",

      "ADRES Colombia",
    ],

    inLanguage: "es-CO",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <BlogClient />
    </>
  );
}
