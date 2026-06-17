import RecobrosSaludColombia from "./RecobrosSaludColombia";

export const metadata = {
  title:
    "Recobros en salud en Colombia: qué son y cómo gestionarlos correctamente | Guía para IPS y clínicas",
  description:
    "Aprenda qué son los recobros en salud en Colombia, cómo funcionan, cuál es el papel de ADRES y cómo evitar rechazos en procesos de recuperación de recursos para IPS, hospitales y clínicas.",
  alternates: {
    canonical: "https://recaudocarteraipsyeps.com/Blog/recobros-salud-colombia",
  },
  openGraph: {
    title:
      "Recobros en salud en Colombia: qué son y cómo gestionarlos correctamente",
    description:
      "Guía práctica sobre recobros en salud, ADRES, auditoría documental y recuperación de recursos para IPS y clínicas.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/recobros-salud-colombia",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Recobros en salud en Colombia: qué son y cómo gestionarlos correctamente",
    description:
      "Guía sobre recobros en salud, ADRES, auditoría documental y recuperación de recursos para IPS, hospitales y clínicas en Colombia.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/recobros-salud-colombia",
    keywords: [
      "recobros en salud",
      "ADRES",
      "recuperación de recursos",
      "IPS Colombia",
      "hospitales Colombia",
      "clínicas Colombia",
      "recobros ADRES",
      "auditoría ADRES",
      "cartera salud Colombia",
      "servicios de salud Colombia",
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

      <RecobrosSaludColombia />
    </>
  );
}
