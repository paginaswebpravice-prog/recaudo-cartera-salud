"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

const articles = [
  {
    title:
      "EPS Sanitas cambia de presidente: impacto en pagos y cartera en Colombia",
    slug: "fabian-cardona-presidente-eps-sanitas",
    description:
      "El médico Fabián Cardona fue designado como nuevo presidente de EPS Sanitas tras una reorganización del grupo Keralty en Colombia.",
  },
  {
    title:
      "Cómo recuperar cartera EPS en Colombia y evitar pérdidas millonarias",
    slug: "como-recuperar-cartera-eps-colombia",
    description:
      "Estrategias legales para IPS y clínicas frente a mora prolongada de EPS.",
  },
  {
    title:
      "Carta de cobro a EPS en Colombia: modelo legal para recuperar cartera",
    slug: "carta-cobro-cartera-eps",
    description:
      "Modelo estratégico y checklist documental previo a proceso judicial.",
  },
  {
    title:
      "Cobro de cartera EPS paso a paso: del prejurídico al proceso ejecutivo",
    slug: "etapas-cobro-cartera-eps",
    description: "Desde el cobro prejurídico hasta el proceso ejecutivo.",
  },
  {
    title:
      "Cómo responder a una EPS que quiere comprar su cartera (sin perder dinero)",
    slug: "respuesta-eps-compra-cartera",
    description:
      "Qué implica la compra de cartera y cómo proteger su flujo financiero.",
  },
  {
    title:
      "Medidas cautelares contra EPS en Colombia: embargos y recuperación real",
    slug: "medidas-cautelares-cobro-eps",
    description: "Embargos y estrategias para garantizar recaudo efectivo.",
  },
  {
    title:
      "Cobro de cartera ante ADRES en Colombia: cómo reclamar y ganar el pago",
    slug: "cobro-cartera-adres",
    description: "Accidentes, NO PBS, negaciones y procedimientos especiales.",
  },
  {
    title:
      "Cobro a entes territoriales en salud: cómo recuperar cartera pública en Colombia",
    slug: "cobro-entes-territoriales-salud",
    description: "PNA y esfuerzo propio en el sector salud.",
  },
  {
    title:
      "Prescripción de cartera en salud: cómo evitar perder su dinero en Colombia",
    slug: "prescripcion-cartera-salud",
    description: "Cómo evitar perder la cartera por vencimiento de términos.",
  },
  {
    title:
      "¿Vender cartera EPS o recuperarla? Lo que nadie le dice en Colombia",
    slug: "no-vender-cartera-eps",
    description:
      "Alternativas jurídicas más rentables que la venta de cartera.",
  },
  {
    title:
      "Documentos para demandar una EPS en Colombia: checklist completo para IPS",
    slug: "requerimiento-documental-demandar-eps",
    description: "Checklist jurídico para reducir riesgos procesales.",
  },
];

export default function BlogClient() {
  return (
    <main className={styles.pageWrapper}>
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
            Cómo recuperar cartera EPS en Colombia y evitar pérdidas en el
            sector salud
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
            Blog jurídico especializado en cómo recuperar cartera EPS en
            Colombia. Encuentra guías completas sobre cobro de cartera en el
            sector salud, procesos ejecutivos, medidas cautelares, cartera ante
            ADRES, prescripción, compra de cartera y estrategias legales para
            IPS, clínicas y prestadores de servicios de salud.
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
          <motion.h2 className={styles.ctaTitle}>
            ¿Tiene cartera EPS pendiente de recuperación en Colombia?
          </motion.h2>

          <motion.p className={styles.ctaText}>
            Nuestro equipo jurídico especializado en recuperación de cartera en
            Colombia asesora a IPS, clínicas y prestadores de salud en procesos
            de cobro prejurídico, judicial, medidas cautelares y estrategias
            frente a EPS, ADRES y entidades territoriales.
          </motion.p>

          <div className={styles.ctaActions}>
            <Link
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría
            </Link>

            <a
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
