import TransformacionDigitalFinancieraIPS from "./TransformacionDigitalFinancieraIPS";

export const metadata = {
  title:
    "Transformación digital financiera para IPS en Colombia | Recaudo, facturación y control financiero",
  description:
    "Conozca cómo la transformación digital financiera ayuda a las IPS en Colombia a optimizar recaudo, cartera, facturación médica, glosas y flujo de caja.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/transformacion-digital-financiera-ips",
  },
  openGraph: {
    title: "Transformación digital financiera para IPS en Colombia",
    description:
      "Tecnología aplicada a recaudo, cartera, facturación y sostenibilidad financiera para IPS y clínicas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/transformacion-digital-financiera-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Transformación digital financiera para IPS en Colombia",
    description:
      "Guía sobre digitalización financiera para IPS, clínicas y hospitales en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/transformacion-digital-financiera-ips",
    keywords: [
      "transformación digital financiera IPS",
      "tecnología para IPS",
      "digitalización financiera salud",
      "gestión de cartera IPS",
      "facturación médica electrónica",
      "recaudo EPS",
      "flujo de caja IPS",
      "salud Colombia",
      "automatización financiera IPS",
      "software financiero para IPS",
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
