"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
              "Artículos especializados sobre recuperación de cartera EPS, ADRES y procesos ejecutivos para IPS y clínicas en Colombia.",
            url: "https://www.recaudocarteraipsyeps.com/Blog",
            publisher: {
              "@type": "Organization",
              name: "Recaudo Cartera IPS y EPS",
              url: "https://www.recaudocarteraipsyeps.com",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Blog Jurídico - Recuperación de Cartera EPS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/" className={styles.backLink}>
              ← Volver al inicio
            </Link>
          </motion.div>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Blog jurídico especializado en recuperación de cartera EPS en
            Colombia. Encuentra guías completas sobre cobro de cartera en el
            sector salud, procesos ejecutivos, medidas cautelares, cartera ante
            ADRES, prescripción, compra de cartera y estrategias legales para
            IPS, clínicas y prestadores de servicios de salud. Contenido
            diseñado para optimizar el recaudo, reducir la mora y proteger el
            flujo financiero de las instituciones de salud en Colombia.
          </motion.p>
        </motion.div>
      </section>

      {/* BLOG */}
      <section className={styles.blogSection}>
        <div className={styles.grid}>
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <Link href={`/Blog/${article.slug}`} className={styles.card}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <h2 className={styles.cardTitle}>{article.title}</h2>
                  <p className={styles.cardDescription}>
                    {article.description}
                  </p>
                  <span className={styles.readMore}>Leer artículo →</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            ¿Tienes cartera pendiente con EPS o entidades de salud?
          </motion.h2>

          <motion.p
            className={styles.ctaText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Nuestro equipo jurídico especializado en recuperación de cartera en
            Colombia asesora a IPS, clínicas y prestadores de salud en procesos
            de cobro prejurídico, judicial, medidas cautelares y estrategias
            frente a EPS, ADRES y entidades territoriales. Protege tu flujo
            financiero y optimiza tu recaudo con respaldo legal experto.
          </motion.p>

          <motion.div
            className={styles.ctaActions}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.ctaPrimary}
              >
                Solicitar asesoría
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                target="_blank"
                className={styles.ctaSecondary}
              >
                Hablar por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
