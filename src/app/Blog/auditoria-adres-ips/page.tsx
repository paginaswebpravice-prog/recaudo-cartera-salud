import AuditoriaAdresIps from "./AuditoriaAdresIps";

export const metadata = {
  title:
    "Proceso de auditoría de ADRES: qué debe saber una IPS en Colombia | Guía completa",
  description:
    "Conozca cómo funciona la auditoría de ADRES, qué documentos revisa, errores frecuentes y recomendaciones para IPS, clínicas y hospitales en Colombia.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/auditoria-adres-ips",
  },
  openGraph: {
    title: "Proceso de auditoría de ADRES: qué debe saber una IPS en Colombia",
    description:
      "Guía sobre auditorías de ADRES, revisión documental, reclamaciones y recuperación de recursos para IPS y hospitales.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/auditoria-adres-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Proceso de auditoría de ADRES: qué debe saber una IPS en Colombia",
    description:
      "Guía completa sobre auditorías de ADRES para IPS, clínicas y hospitales en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/auditoria-adres-ips",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "auditoría ADRES",
      "ADRES Colombia",
      "auditoria cuentas medicas",
      "IPS Colombia",
      "reclamaciones ADRES",
      "cartera salud Colombia",
      "auditoria sector salud",
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

      <AuditoriaAdresIps />
    </>
  );
}
