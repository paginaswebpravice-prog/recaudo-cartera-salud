"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";
import { articles } from "./Articles";

const groupedArticles = articles.reduce(
  (acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }

    acc[article.category].push(article);

    return acc;
  },
  {} as Record<string, typeof articles>,
);

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
            Blog jurídico especializado en recuperación de cartera EPS, procesos
            judiciales, glosas médicas, ADRES, flujo de caja para IPS,
            conciliaciones y estrategias de recaudo para clínicas y hospitales
            en Colombia.
          </motion.p>
        </motion.div>
      </section>

      {/* MENÚ DE CATEGORÍAS */}
      <section className={styles.categoryMenu}>
        {Object.keys(groupedArticles).map((category) => (
          <a
            key={category}
            href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
            className={styles.categoryChip}
          >
            {category}
          </a>
        ))}
      </section>

      {/* BLOG */}
      <section className={styles.blogSection}>
        {Object.entries(groupedArticles).map(([category, categoryArticles]) => (
          <section
            key={category}
            id={category.toLowerCase().replaceAll(" ", "-")}
            className={styles.categorySection}
          >
            <motion.h2
              className={styles.categoryTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {category}{" "}
            </motion.h2>

            <div className={styles.grid}>
              {categoryArticles.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <Link href={`/Blog/${article.slug}`} className={styles.card}>
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        y: -5,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                    >
                      <h3 className={styles.cardTitle}>{article.title}</h3>

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
        ))}
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
            Nuestro equipo jurídico especializado asesora a IPS, clínicas,
            hospitales y prestadores de servicios de salud en procesos de cobro
            prejurídico, judicial, medidas cautelares, conciliaciones,
            reclamaciones ante ADRES y recuperación efectiva de cartera.
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
