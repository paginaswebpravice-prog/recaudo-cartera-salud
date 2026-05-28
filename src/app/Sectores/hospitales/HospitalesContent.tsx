"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function HospitalesContent() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Sector hospitalario y sostenibilidad financiera en Colombia
          </span>

          <h1 className={styles.title}>
            Hospitales en Colombia 2026: sostenibilidad financiera, flujo de
            caja y desafíos administrativos del sector salud
          </h1>

          <p className={styles.description}>
            Los hospitales en Colombia enfrentan retos relacionados con
            liquidez, presión operativa, cartera acumulada y sostenibilidad
            institucional. La eficiencia administrativa y financiera se ha
            convertido en un factor clave para garantizar continuidad en la
            prestación de servicios médicos.
          </p>

          <div className={styles.actions}>
            <a href="#recursos" className={styles.primary}>
              Ver recursos del sector
            </a>

            <a
              href="https://recaudodecartera.com/recuperacion-cartera-hospitales.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Ver solución especializada
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* CONTEXTO */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Situación financiera y operativa de los hospitales en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            El sistema hospitalario colombiano opera bajo altos niveles de
            exigencia asistencial, presión presupuestal y dependencia de flujos
            de pago provenientes de EPS y entidades responsables del sistema de
            salud.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Incremento de cartera hospitalaria acumulada",
              "Demoras en pagos por parte de EPS",
              "Altos costos operativos y administrativos",
              "Sobrecarga asistencial en servicios médicos",
              "Dificultades de liquidez y flujo de caja",
              "Presión sobre infraestructura y talento humano",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.warningBox}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            ⚠ La acumulación de cartera y los retrasos en recaudo pueden afectar
            directamente la capacidad operativa y financiera de los hospitales.
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
            Impacto de la cartera EPS en la sostenibilidad hospitalaria
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La estabilidad financiera hospitalaria depende de la capacidad de
            transformar la facturación en flujo de caja efectivo que permita
            mantener operación, talento humano e infraestructura médica.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Presión sobre el flujo de caja",
                text: "Los retrasos en recaudo afectan operación y liquidez institucional.",
              },
              {
                title: "✔ Riesgo de sostenibilidad financiera",
                text: "El crecimiento de cartera incrementa el riesgo operativo.",
              },
              {
                title: "✔ Impacto en expansión hospitalaria",
                text: "Se limita la inversión en tecnología e infraestructura.",
              },
              {
                title: "✔ Afectación del servicio médico",
                text: "La presión financiera impacta procesos asistenciales y administrativos.",
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            ✔ La sostenibilidad hospitalaria depende directamente de una gestión
            eficiente del recaudo y del flujo financiero institucional.
          </motion.div>
        </section>

        {/* OPERACIÓN */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Complejidad administrativa y operativa en hospitales colombianos
          </motion.h2>

          <motion.p className={styles.text}>
            Los hospitales deben coordinar procesos médicos, administrativos y
            financieros de manera simultánea, lo que aumenta la complejidad de
            gestión dentro del sistema de salud.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Operación hospitalaria continua 24/7",
              "Gestión de múltiples EPS y entidades",
              "Procesos extensos de auditoría y glosas",
              "Altos volúmenes de facturación hospitalaria",
              "Coordinación de servicios de alta complejidad",
              "Dependencia de recursos públicos y privados",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ scale: 1.03 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RECURSOS */}
        <section id="recursos" className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Recursos y estrategias sobre recuperación de cartera hospitalaria
          </motion.h2>

          <motion.p className={styles.text}>
            Si desea profundizar sobre estrategias legales y financieras
            relacionadas con recuperación de cartera hospitalaria y recaudo EPS,
            puede consultar los siguientes recursos especializados.
          </motion.p>

          <div className={styles.resourcesBox}>
            <a
              href="https://recaudodecartera.com/recuperacion-cartera-hospitales.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Recuperación de cartera para hospitales en Colombia →
            </a>

            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Soluciones de recuperación de cartera en el sector salud →
            </a>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <motion.div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Consulte recursos especializados sobre cartera hospitalaria
            </h2>

            <p className={styles.ctaText}>
              Acceda a información especializada relacionada con sostenibilidad
              financiera, recuperación de cartera y flujo de caja en hospitales
              de Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://recaudodecartera.com/recuperacion-cartera-hospitales.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Ver estrategia especializada
              </a>

              <a
                href="https://recaudodecartera.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Ir al sitio principal
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
