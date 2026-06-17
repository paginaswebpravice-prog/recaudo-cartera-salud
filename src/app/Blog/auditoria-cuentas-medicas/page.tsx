import AuditoriaCuentasMedicas from "./AuditoriaCuentasMedicas";

export const metadata = {
  title:
    "Auditoría de cuentas médicas: cómo prepararse correctamente en Colombia",
  description:
    "Guía para IPS, clínicas y hospitales sobre auditoría de cuentas médicas, reducción de glosas, control documental y fortalecimiento del recaudo de cartera en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/auditoria-cuentas-medicas",
  },
  openGraph: {
    title:
      "Auditoría de cuentas médicas: cómo prepararse correctamente en Colombia",
    description:
      "Aprenda cómo prepararse para auditorías de cuentas médicas y reducir glosas en IPS, clínicas y hospitales.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/auditoria-cuentas-medicas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Auditoría de cuentas médicas: cómo prepararse correctamente en Colombia",
    description:
      "Guía práctica para IPS, clínicas y hospitales sobre auditoría de cuentas médicas, documentación, glosas y recuperación de cartera.",
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
      "IPS Colombia",
      "facturación médica",
      "cartera EPS",
      "recaudo de cartera",
      "hospitales Colombia",
      "clínicas Colombia",
      "auditoría EPS",
      "devoluciones médicas",
      "control documental salud",
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
