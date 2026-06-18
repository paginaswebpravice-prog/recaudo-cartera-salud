import ReducirCarteraVencidaIPS from "./ReducirCarteraVencidaIPS";

export const metadata = {
  title:
    "Cómo reducir la cartera vencida en una IPS de forma estratégica | Gestión financiera para IPS en Colombia",
  description:
    "Aprenda cómo reducir la cartera vencida en una IPS mediante estrategias de recaudo, conciliación, seguimiento financiero y recuperación jurídica en Colombia.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/reducir-cartera-vencida-ips",
  },
  openGraph: {
    title: "Cómo reducir la cartera vencida en una IPS de forma estratégica",
    description:
      "Guía práctica para IPS, clínicas y hospitales que buscan mejorar el recaudo y fortalecer su liquidez financiera.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/reducir-cartera-vencida-ips",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo reducir la cartera vencida en una IPS de forma estratégica",
    description:
      "Estrategias para disminuir la cartera vencida, mejorar el recaudo y fortalecer la sostenibilidad financiera de IPS y clínicas en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/reducir-cartera-vencida-ips",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "reducir cartera vencida IPS",
      "cartera vencida salud Colombia",
      "recaudo IPS",
      "gestión financiera IPS",
      "cobro cartera EPS",
      "liquidez IPS",
      "cartera hospitalaria",
      "indicadores financieros IPS",
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

      <ReducirCarteraVencidaIPS />
    </>
  );
}
