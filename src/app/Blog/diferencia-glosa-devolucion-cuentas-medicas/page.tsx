import DiferenciaGlosaDevolucionCuentasMedicas from "./DiferenciaGlosaDevolucionCuentasMedicas";

export const metadata = {
  title:
    "Diferencia entre glosa y devolución en cuentas médicas en Colombia | Guía para IPS y clínicas",
  description:
    "Aprenda la diferencia entre glosas y devoluciones en cuentas médicas en Colombia y cómo reducir riesgos financieros y cartera vencida en IPS y clínicas.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/diferencia-glosa-devolucion-cuentas-medicas",
  },
  openGraph: {
    title: "Diferencia entre glosa y devolución en cuentas médicas en Colombia",
    description:
      "Guía práctica para IPS y clínicas sobre glosas, devoluciones y recuperación de cartera en Colombia.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/diferencia-glosa-devolucion-cuentas-medicas",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Diferencia entre glosa y devolución en cuentas médicas en Colombia",
    description:
      "Guía práctica sobre glosas, devoluciones y recuperación de cartera para IPS y prestadores de salud en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/diferencia-glosa-devolucion-cuentas-medicas",
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
      <DiferenciaGlosaDevolucionCuentasMedicas />
    </>
  );
}
