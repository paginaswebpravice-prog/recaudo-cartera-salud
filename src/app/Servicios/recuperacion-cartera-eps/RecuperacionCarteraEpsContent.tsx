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
            Recuperación de cartera EPS en Colombia
          </span>

          <h1 className={styles.title}>
            Recuperación de cartera EPS en Colombia: desafíos financieros,
            glosas y sostenibilidad para IPS y clínicas
          </h1>

          <p className={styles.description}>
            Las IPS, clínicas y prestadores de salud en Colombia enfrentan
            dificultades constantes por la mora en pagos de EPS, acumulación de
            cartera y procesos administrativos complejos. Comprender cómo
            impacta la recuperación de cartera en el flujo financiero es clave
            para fortalecer la sostenibilidad institucional.
          </p>

          <div className={styles.actions}>
            <a href="#informacion" className={styles.primary}>
              Conocer más
            </a>

            <a
              href="https://recaudodecartera.com/recuperacion-de-cartera.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Ver recuperación de cartera
            </a>
          </div>
        </motion.div>
      </section>

      <main className={styles.container}>
        {/* ================= CONTEXTO ================= */}
        <section id="informacion" className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Qué es la recuperación de cartera EPS y por qué afecta a las IPS en
            Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera EPS hace referencia a los procesos
            administrativos, financieros y jurídicos relacionados con cuentas
            pendientes de pago en el sistema de salud colombiano. La acumulación
            de cartera impacta directamente el flujo de caja, la operación y la
            capacidad de crecimiento de IPS, clínicas y hospitales.
          </motion.p>

          <div className={styles.highlightBox}>
            En Colombia, la cartera en salud se ha convertido en uno de los
            principales factores que afectan la sostenibilidad financiera de las
            instituciones prestadoras de servicios médicos.
          </div>
        </section>

        {/* ================= PROBLEMÁTICAS ================= */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Principales problemas relacionados con cartera EPS en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Las instituciones de salud enfrentan múltiples barreras para lograr
            estabilidad financiera. La mora prolongada, las glosas y la falta de
            liquidez generan riesgos operativos y administrativos.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Mora prolongada en pagos de EPS",
              "Incremento de cartera vencida",
              "Alto volumen de glosas en salud",
              "Procesos administrativos extensos",
              "Dificultades de conciliación de cartera",
              "Falta de liquidez operativa",
              "Riesgos de sostenibilidad financiera",
              "Dependencia de recursos pendientes de pago",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ La acumulación de cartera EPS puede afectar la continuidad de la
            prestación de servicios médicos y comprometer la estabilidad de las
            instituciones de salud.
          </div>
        </section>

        {/* ================= IMPACTO ================= */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Impacto financiero de la cartera EPS en IPS y clínicas
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            La falta de recuperación oportuna de cartera puede generar efectos
            negativos en diferentes áreas operativas y financieras dentro de las
            instituciones prestadoras de salud.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Afectación del flujo de caja</h4>
              <p>
                La mora en pagos limita la capacidad de cubrir gastos
                operativos, nómina y proveedores.
              </p>
            </div>

            <div>
              <h4>✔ Incremento del riesgo financiero</h4>
              <p>
                El crecimiento de cartera vencida genera desbalance entre
                ingresos proyectados y recursos disponibles.
              </p>
            </div>

            <div>
              <h4>✔ Limitación de expansión institucional</h4>
              <p>
                Las IPS pueden ver restringidas sus inversiones en tecnología,
                infraestructura y cobertura.
              </p>
            </div>

            <div>
              <h4>✔ Sobrecarga administrativa</h4>
              <p>
                La gestión constante de cartera y glosas incrementa la carga
                operativa interna.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            ✔ Una adecuada gestión de cartera permite mejorar la estabilidad
            financiera y fortalecer la operación de las instituciones de salud.
          </div>
        </section>

        {/* ================= PROCESOS ================= */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Procesos relacionados con recuperación de cartera en el sector salud
          </motion.h2>

          <div className={styles.grid}>
            {[
              "Seguimiento a cuentas por cobrar",
              "Gestión de cartera administrativa",
              "Conciliación con EPS",
              "Control de glosas y devoluciones",
              "Auditoría documental y financiera",
              "Análisis de cartera vencida",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ y: -4 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= BENEFICIOS ================= */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Importancia de fortalecer la gestión de cartera EPS en Colombia
          </motion.h2>

          <div className={styles.benefits}>
            <span>✔ Mejor control financiero</span>
            <span>✔ Reducción de cartera vencida</span>
            <span>✔ Mayor liquidez operativa</span>
            <span>✔ Optimización administrativa</span>
            <span>✔ Fortalecimiento institucional</span>
            <span>✔ Mejor sostenibilidad en salud</span>
          </div>
        </section>

        {/* ================= RECURSOS ================= */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Recursos relacionados sobre recuperación de cartera en Colombia
          </motion.h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Recuperación de cartera en Colombia</h4>
              <p>
                Conozca información especializada sobre gestión y recuperación
                de cartera empresarial en Colombia.
              </p>
            </div>

            <div>
              <h4>✔ Gestión de glosas EPS</h4>
              <p>
                Las glosas representan uno de los principales factores que
                retrasan el recaudo de las instituciones prestadoras de salud.
              </p>
            </div>

            <div>
              <h4>✔ Flujo de caja en IPS y clínicas</h4>
              <p>
                La sostenibilidad financiera depende de procesos eficientes de
                control y seguimiento de cartera.
              </p>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href="https://recaudodecartera.com/recuperacion-de-cartera.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Ir al sitio principal
            </a>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre cartera EPS en Colombia
          </motion.h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>¿Qué es la cartera EPS?</h4>
              <p>
                Son las cuentas pendientes de pago que EPS u otras entidades
                mantienen con IPS, clínicas y prestadores de salud.
              </p>
            </div>

            <div>
              <h4>¿Por qué aumenta la cartera en salud?</h4>
              <p>
                Factores como glosas, mora en pagos, procesos administrativos y
                diferencias de auditoría pueden incrementar la cartera vencida.
              </p>
            </div>

            <div>
              <h4>¿Cómo afecta la cartera a las IPS?</h4>
              <p>
                Puede afectar el flujo de caja, limitar inversiones y generar
                riesgos operativos y financieros.
              </p>
            </div>

            <div>
              <h4>¿Qué relación existe entre glosas y cartera?</h4>
              <p>
                Las glosas generan retrasos en el reconocimiento y pago de las
                cuentas médicas presentadas por las IPS.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section id="contacto" className={styles.cta}>
          <div>
            <h2 className={styles.ctaTitle}>
              Información sobre recuperación de cartera EPS en Colombia
            </h2>

            <p className={styles.ctaText}>
              Conozca más sobre los desafíos financieros que enfrentan IPS,
              clínicas y prestadores de salud relacionados con cartera, glosas y
              sostenibilidad financiera en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://recaudodecartera.com/recuperacion-de-cartera.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Ver sitio principal
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
