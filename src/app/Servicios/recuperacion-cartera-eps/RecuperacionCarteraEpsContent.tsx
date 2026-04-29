"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function RecuperacionCarteraEpsContent() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Recuperación de cartera EPS en Bogotá y Colombia
          </span>

          <h1 className={styles.title}>
            Cómo recuperar cartera EPS en Colombia rápido: guía legal para IPS,
            clínicas y prestadores de salud
          </h1>

          <p className={styles.description}>
            Servicio jurídico especializado en recuperación de cartera en el
            sector salud en Colombia. Implementamos estrategias legales,
            prejurídicas y judiciales para maximizar el recaudo de cartera EPS,
            gestionar cuentas ante ADRES y proteger el flujo financiero de IPS,
            clínicas y prestadores de servicios de salud.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>
            <a href="/Blog" className={styles.secondary}>
              Ver guías legales
            </a>
          </div>
        </motion.div>
      </section>

      <main className={styles.container}>
        {/* ================= CONTEXTO ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Recuperación de cartera EPS en Colombia: qué es y cómo funciona
            realmente
          </h2>

          <p className={styles.text}>
            La recuperación de cartera EPS es el conjunto de estrategias
            jurídicas, financieras y administrativas orientadas a recuperar los
            valores adeudados por entidades promotoras de salud (EPS), ADRES y
            entidades territoriales a favor de IPS, clínicas y prestadores de
            servicios de salud en Colombia.
          </p>

          <div className={styles.highlightBox}>
            Este proceso incluye desde la gestión prejurídica hasta la ejecución
            de procesos judiciales, aplicación de medidas cautelares y
            estructuración documental para garantizar el pago efectivo de la
            cartera.
          </div>
        </section>

        {/* ================= PROBLEMAS ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Problemas que impiden recuperar cartera EPS en Colombia (y cómo
            evitarlos)
          </h2>

          <div className={styles.grid}>
            {[
              "Mora prolongada en pagos por parte de EPS",
              "Glosas injustificadas que afectan el recaudo",
              "Falta de soportes para iniciar procesos judiciales",
              "Errores en facturación y radicación",
              "Procesos administrativos ineficientes",
              "Cartera en riesgo de prescripción",
              "Dependencia financiera de pagos de EPS",
              "Falta de estrategia jurídica especializada",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ Muchas instituciones de salud en Colombia pierden recursos por no
            contar con una estrategia jurídica estructurada.
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section id="contacto" className={styles.cta}>
          <div>
            <h2 className={styles.ctaTitle}>
              Recupera cartera EPS en Colombia hoy con respaldo jurídico experto
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo especializado en recuperación de cartera EPS en
              Colombia ayuda a IPS, clínicas y prestadores de salud a mejorar su
              flujo financiero y recuperar recursos de manera efectiva.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Solicitar asesoría
              </a>

              <a
                href="https://api.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
