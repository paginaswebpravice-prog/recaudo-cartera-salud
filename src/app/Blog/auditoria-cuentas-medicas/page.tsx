import AuditoriaCuentasMedicas from "./AuditoriaCuentasMedicas";

export const metadata = {
  title:
    "Auditoría de cuentas médicas en Colombia: cómo reducir glosas y evitar errores",
  description:
    "Guía práctica para IPS, clínicas y hospitales sobre auditoría de cuentas médicas, revisión documental, glosas, devoluciones y estrategias para mejorar el recaudo.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/auditoria-cuentas-medicas",
  },
  openGraph: {
    title: "Auditoría de cuentas médicas en Colombia: cómo reducir glosas",
    description:
      "Aprenda qué revisar antes de una auditoría de cuentas médicas, cuáles son los errores más frecuentes y cómo preparar su IPS para reducir glosas y devoluciones.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/auditoria-cuentas-medicas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Auditoría de cuentas médicas en Colombia: cómo reducir glosas y evitar errores",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre preparación para auditorías de cuentas médicas, revisión documental, reducción de glosas y fortalecimiento del recaudo.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/auditoria-cuentas-medicas",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "auditoría de cuentas médicas",
      "auditoría médica",
      "glosas médicas",
      "auditoría de cuentas médicas Colombia",
      "cómo reducir glosas",
      "facturación médica",
      "IPS Colombia",
      "auditoría EPS",
      "devoluciones de cuentas médicas",
      "cartera EPS",
      "recaudo de cartera",
      "control documental en salud",
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

      <AuditoriaCuentasMedicas />
    </>
  );
}
