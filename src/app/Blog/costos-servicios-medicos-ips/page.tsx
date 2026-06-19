import type { Metadata } from "next";
import CostoServiciosIPS from "./CostoServiciosIPS";

export const metadata: Metadata = {
  title:
    "Cómo calcular el costo real de los servicios médicos en una IPS en Colombia | Guía financiera",
  description:
    "Aprende cómo calcular el costo real de los servicios médicos en una IPS en Colombia. Metodologías de costeo, rentabilidad y control financiero para clínicas y hospitales.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/costos-servicios-medicos-ips",
  },
  openGraph: {
    title:
      "Cómo calcular el costo real de los servicios médicos en una IPS en Colombia",
    description:
      "Guía financiera para IPS en Colombia sobre costeo de servicios médicos y rentabilidad.",
    url: "https://recaudocarteraipsyeps.com/Blog/costos-servicios-medicos-ips",
    type: "article",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo calcular el costo real de los servicios médicos en una IPS en Colombia",
    description:
      "Guía práctica para calcular costos reales de servicios médicos en IPS en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/costos-servicios-medicos-ips",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <CostoServiciosIPS />
    </>
  );
}
