import Link from "next/link";
import styles from "./Blog.module.css";

const articles = [
  {
    title: "Fabián Cardona asume la presidencia de EPS Sanitas",
    slug: "fabian-cardona-presidente-eps-sanitas",
    description:
      "El médico Fabián Cardona fue designado como nuevo presidente de EPS Sanitas tras una reorganización del grupo Keralty en Colombia.",
  },
  {
    title: "Cómo recuperar la cartera de las EPS en Colombia",
    slug: "como-recuperar-cartera-eps-colombia",
    description:
      "Estrategias legales para IPS y clínicas frente a mora prolongada de EPS.",
  },
  {
    title: "Carta para cobro de cartera a una EPS",
    slug: "carta-cobro-cartera-eps",
    description:
      "Modelo estratégico y checklist documental previo a proceso judicial.",
  },
  {
    title: "Cobro de cartera EPS: etapas",
    slug: "etapas-cobro-cartera-eps",
    description: "Desde el cobro prejurídico hasta el proceso ejecutivo.",
  },
  {
    title: "Cómo responder a una EPS por compra de cartera",
    slug: "respuesta-eps-compra-cartera",
    description:
      "Qué implica la compra de cartera y cómo proteger su flujo financiero.",
  },
  {
    title: "Medidas cautelares en cobro EPS",
    slug: "medidas-cautelares-cobro-eps",
    description: "Embargos y estrategias para garantizar recaudo efectivo.",
  },
  {
    title: "Cobro de cartera ante ADRES",
    slug: "cobro-cartera-adres",
    description: "Accidentes, NO PBS, negaciones y procedimientos especiales.",
  },
  {
    title: "Cobro a entes territoriales y secretarías de salud",
    slug: "cobro-entes-territoriales-salud",
    description: "PNA y esfuerzo propio en el sector salud.",
  },
  {
    title: "Prescripción en cartera salud",
    slug: "prescripcion-cartera-salud",
    description: "Cómo evitar perder la cartera por vencimiento de términos.",
  },
  {
    title: "Por qué NO vender su cartera EPS",
    slug: "no-vender-cartera-eps",
    description:
      "Alternativas jurídicas más rentables que la venta de cartera.",
  },
  {
    title: "Requerimiento documental mínimo para demandar una EPS",
    slug: "requerimiento-documental-demandar-eps",
    description: "Checklist jurídico para reducir riesgos procesales.",
  },
];

export const metadata = {
  title: "Blog Jurídico | Recuperación de Cartera EPS",
  description:
    "Artículos especializados sobre recuperación de cartera EPS, ADRES y procesos ejecutivos para IPS y clínicas.",
};

export default function BlogPage() {
  return (
    <main className={styles.pageWrapper}>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Jurídico - Recuperación de Cartera EPS",
            description:
              "Artículos especializados sobre recuperación de cartera EPS, ADRES y procesos ejecutivos para IPS y clínicas.",
            url: "https://www.recaudocarteraipsyeps.com/Blog",
            publisher: {
              "@type": "Organization",
              name: "Recaudo Cartera IPS y EPS",
              url: "https://www.recaudocarteraipsyeps.com",
            },
            blogPost: [
              {
                "@type": "BlogPosting",
                headline: "Fabián Cardona asume la presidencia de EPS Sanitas",
                url: "https://www.recaudocarteraipsyeps.com/Blog/fabian-cardona-presidente-eps-sanitas",
                description:
                  "El médico Fabián Cardona fue designado como nuevo presidente de EPS Sanitas tras una reorganización del grupo Keralty en Colombia.",
              },
              {
                "@type": "BlogPosting",
                headline: "Cómo recuperar la cartera de las EPS en Colombia",
                url: "https://www.recaudocarteraipsyeps.com/Blog/como-recuperar-cartera-eps-colombia",
                description:
                  "Estrategias legales para IPS y clínicas frente a mora prolongada de EPS.",
              },
              {
                "@type": "BlogPosting",
                headline: "Carta para cobro de cartera a una EPS",
                url: "https://www.recaudocarteraipsyeps.com/Blog/carta-cobro-cartera-eps",
                description:
                  "Modelo estratégico y checklist documental previo a proceso judicial.",
              },
              {
                "@type": "BlogPosting",
                headline: "Cobro de cartera EPS: etapas",
                url: "https://www.recaudocarteraipsyeps.com/Blog/etapas-cobro-cartera-eps",
                description:
                  "Desde el cobro prejurídico hasta el proceso ejecutivo.",
              },
              {
                "@type": "BlogPosting",
                headline: "Cómo responder a una EPS por compra de cartera",
                url: "https://www.recaudocarteraipsyeps.com/Blog/respuesta-eps-compra-cartera",
                description:
                  "Qué implica la compra de cartera y cómo proteger su flujo financiero.",
              },
              {
                "@type": "BlogPosting",
                headline: "Medidas cautelares en cobro EPS",
                url: "https://www.recaudocarteraipsyeps.com/Blog/medidas-cautelares-cobro-eps",
                description:
                  "Embargos y estrategias para garantizar recaudo efectivo.",
              },
              {
                "@type": "BlogPosting",
                headline: "Cobro a entes territoriales y secretarías de salud",
                url: "https://www.recaudocarteraipsyeps.com/Blog/cobro-entes-territoriales-salud",
                description: "PNA y esfuerzo propio en el sector salud.",
              },
              {
                "@type": "BlogPosting",
                headline: "Prescripción en cartera salud",
                url: "https://www.recaudocarteraipsyeps.com/Blog/prescripcion-cartera-salud",
                description:
                  "Alternativas jurídicas más rentables que la venta de cartera.",
              },
              {
                "@type": "BlogPosting",
                headline:
                  "Requerimiento documental mínimo para demandar una EPS",
                url: "https://www.recaudocarteraipsyeps.com/Blog/requerimiento-documental-demandar-eps",
                description:
                  "Checklist jurídico para reducir riesgos procesales.",
              },
            ],
          }),
        }}
      />

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Blog Jurídico - Recuperación de Cartera EPS
          </h1>
          {/* NUEVO BOTÓN */}
          <Link href="/" className={styles.backLink}>
            ← Volver al inicio
          </Link>
          <p className={styles.heroSubtitle}>
            Blog jurídico especializado en recuperación de cartera EPS en
            Colombia. Encuentra guías completas sobre cobro de cartera en el
            sector salud, procesos ejecutivos, medidas cautelares, cartera ante
            ADRES, prescripción, compra de cartera y estrategias legales para
            IPS, clínicas y prestadores de servicios de salud. Contenido
            diseñado para optimizar el recaudo, reducir la mora y proteger el
            flujo financiero de las instituciones de salud en Colombia.
          </p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className={styles.grid}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/Blog/${article.slug}`}
              className={styles.card}
            >
              <h2 className={styles.cardTitle}>{article.title}</h2>
              <p className={styles.cardDescription}>{article.description}</p>
              <span className={styles.readMore}>Leer artículo →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            ¿Tienes cartera pendiente con EPS o entidades de salud?
          </h2>

          <p className={styles.ctaText}>
            Nuestro equipo jurídico especializado en recuperación de cartera en
            Colombia asesora a IPS, clínicas y prestadores de salud en procesos
            de cobro prejurídico, judicial, medidas cautelares y estrategias
            frente a EPS, ADRES y entidades territoriales. Protege tu flujo
            financiero y optimiza tu recaudo con respaldo legal experto.
          </p>

          <div className={styles.ctaActions}>
            <Link
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              className={styles.ctaPrimary}
            >
              Solicitar asesoría
            </Link>

            <a
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              target="_blank"
              className={styles.ctaSecondary}
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
