import type { Metadata } from "next";
import EPSMas180DiasSinPagar from "./EPSMas180DiasSinPagar";

const canonicalUrl =
  "https://recaudocarteraipsyeps.com/Blog/eps-mas-180-dias-sin-pagar";

export const metadata: Metadata = {
  title:
    "EPS lleva más de 180 días sin pagar: ¿qué puede hacer una IPS? | Guía 2026",

  description:
    "¿Una EPS lleva más de 180 días sin pagar? Conozca cómo revisar la cartera, gestionar el cobro prejurídico, negociar, conciliar y evaluar acciones judiciales para recuperar recursos de una IPS.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "EPS lleva más de 180 días sin pagar: ¿qué puede hacer una IPS?",
    description:
      "Guía práctica para IPS, clínicas y prestadores de salud con cartera vencida frente a EPS. Conozca qué revisar antes de pasar del cobro administrativo al jurídico.",
    type: "article",
    url: canonicalUrl,
    siteName: "Recaudo Cartera IPS y EPS",
    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",
    title: "EPS lleva más de 180 días sin pagar: ¿qué puede hacer una IPS?",
    description:
      "Pasos para gestionar cartera EPS con mora prolongada, fortalecer el cobro y evaluar alternativas jurídicas para recuperar los recursos.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline: "EPS lleva más de 180 días sin pagar: ¿qué puede hacer una IPS?",

  description:
    "Guía práctica para IPS, clínicas y prestadores de salud sobre qué hacer cuando una EPS mantiene cartera vencida durante más de 180 días.",

  inLanguage: "es-CO",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  author: {
    "@type": "Organization",
    name: "PRAVICE",
  },

  publisher: {
    "@type": "Organization",
    name: "PRAVICE",
  },

  articleSection: "Recuperación de cartera EPS",

  keywords: [
    "EPS lleva más de 180 días sin pagar",
    "EPS no paga cartera a IPS",
    "cartera vencida EPS",
    "recuperación de cartera EPS",
    "cobro de cartera a EPS",
    "cobro prejurídico EPS",
    "cobro judicial EPS",
    "IPS cartera vencida",
    "EPS morosa Colombia",
    "proceso ejecutivo contra EPS",
    "cartera EPS más de 180 días",
    "medidas cautelares EPS",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <EPSMas180DiasSinPagar />
    </>
  );
}
