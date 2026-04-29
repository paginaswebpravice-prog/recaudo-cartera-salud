"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function CarteraGlosadaContent() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Recuperación de cartera glosada en Colombia
          </span>

          {/* H1 OPTIMIZADO CTR */}
          <h1 className={styles.title}>
            Cómo recuperar cartera glosada en Colombia: dinero retenido por EPS
            en IPS y clínicas
          </h1>

          <p className={styles.description}>
            Defiende y recupera valores glosados por EPS en Colombia mediante
            estrategias técnicas y jurídicas. Apoyamos a IPS, clínicas y
            prestadores de salud en la gestión, respuesta y levantamiento de
            glosas para maximizar el recaudo efectivo.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>
            <a href="/Blog" className={styles.secondary}>
              Ver guías y artículos
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* PROBLEMA */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Errores más comunes en la gestión de cartera glosada por EPS en
            Colombia
          </motion.h2>

          <div className={styles.grid}>
            {[
              "Glosas injustificadas por parte de EPS",
              "Respuestas mal estructuradas que generan rechazo",
              "Pérdida de términos para controvertir glosas",
              "Falta de soportes clínicos y administrativos",
              "Alto volumen de cuentas sin gestión efectiva",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ Las glosas mal gestionadas pueden convertirse en pérdida directa
            de ingresos para las IPS en Colombia.
          </div>
        </section>

        {/* QUE ES GLOSA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Qué es una glosa EPS y cómo afecta la cartera de IPS y clínicas en
            Colombia
          </h2>

          <p className={styles.text}>
            Una glosa es una objeción realizada por una EPS sobre una factura
            presentada por una IPS. Estas pueden ser de carácter administrativo,
            técnico o médico, y si no se gestionan correctamente, impactan
            directamente el flujo de caja de la institución.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Glosas administrativas</h4>
              <p>
                Errores en facturación, datos incompletos o inconsistencias
                formales.
              </p>
            </div>

            <div>
              <h4>✔ Glosas médicas</h4>
              <p>
                Objeciones relacionadas con pertinencia, diagnósticos o
                tratamientos.
              </p>
            </div>

            <div>
              <h4>✔ Glosas técnicas</h4>
              <p>
                Diferencias en tarifas, cobros o interpretación de servicios.
              </p>
            </div>

            <div>
              <h4>✔ Glosas parciales o totales</h4>
              <p>Pueden afectar parte o la totalidad del valor facturado.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 Una glosa no gestionada correctamente puede terminar en
            incobrable.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicio especializado para recuperar cartera glosada en Colombia
            (EPS, IPS y clínicas)
          </h2>

          <p className={styles.text}>
            Implementamos un modelo especializado para la gestión, respuesta y
            levantamiento de glosas, combinando análisis técnico, conocimiento
            normativo y estrategia jurídica.
          </p>

          <div className={styles.grid}>
            {[
              "Análisis técnico de cada glosa",
              "Revisión de soportes clínicos y administrativos",
              "Estructuración de respuestas sólidas",
              "Seguimiento a tiempos y términos legales",
              "Escalamiento jurídico en caso de rechazo",
              "Optimización del proceso interno de cartera",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Cómo recuperar cartera glosada paso a paso en Colombia (metodología
            probada)
          </h2>

          <div className={styles.grid}>
            {[
              "Recepción y clasificación de glosas",
              "Auditoría técnica y documental",
              "Definición de estrategia de respuesta",
              "Radicación y seguimiento",
              "Negociación o escalamiento",
              "Recuperación del valor glosado",
            ].map((step, i) => (
              <motion.div key={i} className={styles.card}>
                <h3>Paso {i + 1}</h3>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de recuperar cartera glosada en EPS para IPS y clínicas
          </h2>

          <div className={styles.benefits}>
            <span>✔ Recuperación de valores glosados</span>
            <span>✔ Reducción de cartera castigada</span>
            <span>✔ Mejora en procesos internos</span>
            <span>✔ Respuestas técnicas más efectivas</span>
            <span>✔ Disminución de reprocesos</span>
            <span>✔ Acompañamiento jurídico estratégico</span>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Recupera cartera glosada en Colombia antes de que se pierda
            </h2>

            <p className={styles.ctaText}>
              Te ayudamos a gestionar y levantar glosas en Colombia con enfoque
              técnico y jurídico, aumentando la probabilidad de recuperación y
              reduciendo pérdidas para tu institución.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Contactar ahora
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
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
