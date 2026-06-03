import ComoResponderGlosasMedicas from "./ComoResponderGlosasMedicas";

export const metadata = {
  title:
    "Cómo responder glosas médicas en Colombia y recuperar pagos rechazados | Guía para IPS y clínicas",
  description:
    "Aprenda cómo responder glosas médicas en Colombia y recuperar pagos rechazados por EPS. Guía jurídica y financiera para IPS, clínicas y prestadores de salud.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/como-responder-glosas-medicas-colombia",
  },
  openGraph: {
    title:
      "Cómo responder glosas médicas en Colombia y recuperar pagos rechazados",
    description:
      "Guía práctica para IPS y clínicas sobre glosas médicas, cartera rechazada y recuperación de pagos frente a EPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/como-responder-glosas-medicas-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo responder glosas médicas en Colombia y recuperar pagos rechazados",
    description:
      "Guía completa para IPS y clínicas sobre respuesta de glosas médicas y recuperación de cartera rechazada por EPS.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/como-responder-glosas-medicas-colombia",
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
      <ComoResponderGlosasMedicas />
    </>
  );
}
