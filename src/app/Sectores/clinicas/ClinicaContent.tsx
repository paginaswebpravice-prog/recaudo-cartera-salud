"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function ClinicasContent() {
  return (
    <>
      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Gestión de cartera y sostenibilidad financiera para clínicas en Colombia",
            description:
              "Contenido especializado sobre cartera EPS, flujo de caja y sostenibilidad financiera para clínicas del sector salud colombiano.",
            author: {
              "@type": "Organization",
              name: "PRAVICE",
            },
            publisher: {
              "@type": "Organization",
              name: "PRAVICE",
            },
            mainEntityOfPage:
              "https://recaudocarteraipsyeps.com/Sectores/clinicas",
          }),
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Contenido especializado para clínicas
          </span>

          <h1 className={styles.title}>
            Clínicas en Colombia: sostenibilidad financiera, flujo de caja y
            gestión estratégica de cartera EPS
          </h1>

          <p className={styles.description}>
            Las clínicas privadas enfrentan retos permanentes relacionados con
            recaudo, glosas, liquidez y presión operativa. Esta guía reúne
            información estratégica sobre administración de cartera y
            estabilidad financiera en el sector salud colombiano.
          </p>

          <div className={styles.actions}>
            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver solución especializada
            </a>

            <a
              href="https://recaudodecartera.com/"
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir al sitio principal
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* PROBLEMÁTICA */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Factores que afectan la liquidez y sostenibilidad de clínicas en
            Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La estabilidad financiera de una clínica depende de múltiples
            variables relacionadas con facturación, recaudo, auditoría médica,
            glosas y eficiencia administrativa.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Incremento de cartera vencida frente a EPS",
              "Demoras en conciliaciones y auditorías",
              "Presión sobre flujo de caja operativo",
              "Altos costos administrativos y asistenciales",
              "Procesos manuales de seguimiento de cartera",
              "Dificultades para recuperar cuentas antiguas",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.warningBox}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Una alta facturación no garantiza liquidez si existen problemas
            estructurales en recuperación de cartera y recaudo efectivo.
          </motion.div>
        </section>

        {/* IMPACTO */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Cómo impacta la cartera EPS en el crecimiento financiero de las
            clínicas
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La acumulación de cuentas pendientes afecta decisiones estratégicas,
            inversión tecnológica, expansión de servicios y estabilidad
            operativa.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Liquidez operativa",
                text: "Menor capacidad para cubrir obligaciones y costos fijos.",
              },
              {
                title: "✔ Rentabilidad institucional",
                text: "Reducción de márgenes financieros por retrasos de pago.",
              },
              {
                title: "✔ Inversión y crecimiento",
                text: "Limitaciones para ampliar infraestructura y servicios.",
              },
              {
                title: "✔ Riesgo administrativo",
                text: "Incremento de presión sobre áreas financieras y jurídicas.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            El recaudo efectivo y la administración de cartera son variables
            fundamentales para la sostenibilidad financiera del sector salud.
          </motion.div>
        </section>

        {/* CONTENIDO ESTRATÉGICO */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Recursos y estrategias sobre recuperación de cartera para clínicas
          </motion.h2>

          <motion.p className={styles.text}>
            Si busca una solución jurídica y estratégica especializada en
            recuperación de cartera hospitalaria, procesos ejecutivos y cobro a
            EPS, puede consultar el portal principal especializado.
          </motion.p>

          <div className={styles.resourcesBox}>
            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Recuperación de cartera para IPS y clínicas
            </a>

            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Portal principal de recuperación de cartera
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <motion.div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Acceda a contenido especializado para clínicas e IPS
            </h2>

            <p className={styles.ctaText}>
              Explore recursos relacionados con cartera hospitalaria, recaudo
              EPS, glosas y sostenibilidad financiera en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://recaudodecartera.com/"
                className={styles.primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al portal principal
              </a>

              <a
                href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
                target="_blank"
                className={styles.secondary}
                rel="noopener noreferrer"
              >
                Ver servicio especializado
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
