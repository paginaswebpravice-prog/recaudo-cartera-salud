import TransformacionDigitalFinancieraIPS from "./TransformacionDigitalFinancieraIPS";

export const metadata = {
  title:
    "Transformación digital financiera para IPS: cómo mejorar cartera, recaudo y flujo de caja",
  description:
    "Descubra cómo la transformación digital financiera ayuda a las IPS en Colombia a mejorar la gestión de cartera, recaudo, facturación, glosas y flujo de caja mediante tecnología y automatización.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/transformacion-digital-financiera-ips",
  },
  openGraph: {
    title:
      "Transformación digital financiera para IPS: cartera, recaudo y flujo de caja",
    description:
      "Cómo aplicar tecnología y automatización para mejorar la facturación, reducir errores, controlar la cartera y fortalecer la gestión financiera de una IPS.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/transformacion-digital-financiera-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Transformación digital financiera para IPS: cómo mejorar cartera, recaudo y flujo de caja",
    description:
      "Guía para IPS, clínicas y hospitales en Colombia sobre transformación digital financiera, automatización de procesos, gestión de cartera, recaudo, facturación, glosas e indicadores financieros.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/transformacion-digital-financiera-ips",
    keywords: [
      "transformación digital financiera IPS",
      "digitalización financiera IPS",
      "tecnología para IPS",
      "automatización financiera salud",
      "gestión de cartera IPS",
      "recaudo EPS",
      "facturación médica",
      "gestión de glosas",
      "flujo de caja IPS",
      "software para IPS",
      "indicadores financieros IPS",
      "automatización de cartera",
      "digitalización sector salud Colombia",
      "gestión financiera clínicas",
      "tecnología financiera salud",
    ],
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

      <TransformacionDigitalFinancieraIPS />
    </>
  );
}
