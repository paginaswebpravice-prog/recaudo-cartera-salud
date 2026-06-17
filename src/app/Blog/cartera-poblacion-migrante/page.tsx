import CarteraPoblacionMigrante from "./CarteraPoblacionMigrante";

export const metadata = {
  title:
    "Cómo recuperar cartera por servicios prestados a población migrante en Colombia | Guía para IPS",
  description:
    "Aprenda cómo recuperar cartera derivada de la atención a población migrante en Colombia. Conozca mecanismos de financiación, documentación necesaria y estrategias de recaudo para IPS y hospitales.",
  alternates: {
    canonical:
      "https://recaudocarteraipsyeps.com/Blog/cartera-poblacion-migrante",
  },
  openGraph: {
    title:
      "Cómo recuperar cartera por servicios prestados a población migrante en Colombia",
    description:
      "Guía para IPS, clínicas y hospitales sobre recuperación de recursos asociados a la atención de población migrante.",
    type: "article",
    url: "https://recaudocarteraipsyeps.com/Blog/cartera-poblacion-migrante",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cómo recuperar cartera por servicios prestados a población migrante en Colombia",
    description:
      "Guía práctica para IPS, hospitales y clínicas sobre recuperación de cartera asociada a la atención de población migrante.",
    inLanguage: "es-CO",
    mainEntityOfPage:
      "https://recaudocarteraipsyeps.com/Blog/cartera-poblacion-migrante",
    author: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    publisher: {
      "@type": "Organization",
      name: "PRAVICE",
    },
    keywords: [
      "población migrante Colombia",
      "cartera población migrante",
      "IPS Colombia",
      "hospitales Colombia",
      "recuperación de cartera salud",
      "atención a migrantes",
      "entidades territoriales salud",
      "ADRES Colombia",
      "cartera sector salud",
      "recaudo IPS",
      "cobro servicios migrantes",
      "financiación salud migrantes",
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

      <CarteraPoblacionMigrante />
    </>
  );
}
