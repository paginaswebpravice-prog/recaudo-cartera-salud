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
          <span className={styles.badge}>Sector hospitalario en Colombia</span>

          <h1 className={styles.title}>
            Hospitales en Colombia: crisis financiera, sostenibilidad y flujo de
            caja
          </h1>

          <p className={styles.description}>
            Los hospitales en Colombia enfrentan una alta presión operativa y
            financiera debido a la demanda de servicios, la limitada
            disponibilidad de recursos y la acumulación de cartera. La
            sostenibilidad institucional depende de una gestión eficiente que
            permita garantizar la continuidad en la atención y el equilibrio
            financiero.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Recibir orientación
            </a>
            <a href="/#solucion" className={styles.secondary}>
              Ver soluciones
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
            Principales problemas financieros y operativos en hospitales en
            Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Los hospitales operan en un entorno complejo donde deben atender
            grandes volúmenes de pacientes mientras enfrentan limitaciones
            presupuestales y retrasos en los flujos de ingreso.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Alta demanda de servicios de salud",
              "Limitaciones presupuestales",
              "Acumulación de cartera con EPS y entidades",
              "Retrasos en giros y pagos",
              "Sobrecarga operativa del personal",
              "Infraestructura y recursos limitados",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
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
            ⚠ La falta de recursos y el crecimiento de la cartera pueden afectar
            directamente la capacidad de atención de un hospital.
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
            Impacto de la crisis financiera en la sostenibilidad hospitalaria
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La acumulación de cartera y la falta de liquidez afectan la
            estabilidad institucional de los hospitales, generando dificultades
            para operar eficientemente y garantizar la prestación continua de
            servicios.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Déficit financiero en hospitales",
                text: "Desbalance entre ingresos proyectados y recursos disponibles.",
              },
              {
                title: "✔ Limitación en la atención de pacientes",
                text: "Restricciones para ampliar cobertura o mejorar servicios.",
              },
              {
                title: "✔ Afectación del talento humano en salud",
                text: "Dificultades en contratación y pago de personal médico.",
              },
              {
                title: "✔ Riesgo institucional en hospitales",
                text: "Impacto en la continuidad y calidad del servicio de salud.",
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

          <motion.div className={styles.highlightBox}>
            ✔ La sostenibilidad hospitalaria depende del flujo de caja y la
            eficiencia en la gestión de cartera.
          </motion.div>
        </section>

        {/* OPERACIÓN */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Complejidad operativa en hospitales de alta demanda en Colombia
          </motion.h2>

          <motion.p className={styles.text}>
            Los hospitales deben gestionar múltiples procesos simultáneamente,
            desde la atención de pacientes hasta la administración financiera,
            lo que incrementa la complejidad de su operación diaria.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Atención continua 24/7",
              "Gestión de urgencias y alta complejidad",
              "Coordinación de múltiples áreas médicas",
              "Procesos administrativos extensos",
              "Dependencia de recursos públicos o mixtos",
            ].map((item, i) => (
              <motion.div key={i} className={styles.card}>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NECESIDAD */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Estrategias para mejorar la sostenibilidad financiera hospitalaria
          </motion.h2>

          <motion.p className={styles.text}>
            Para garantizar su sostenibilidad, los hospitales requieren
            implementar estrategias que les permitan optimizar sus recursos,
            mejorar la gestión financiera y fortalecer su capacidad operativa.
          </motion.p>

          <motion.div className={styles.highlightBox}>
            Cada vez más hospitales en Colombia buscan fortalecer sus procesos
            internos para mejorar la eficiencia y garantizar la continuidad del
            servicio.
          </motion.div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <motion.div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Mejora la sostenibilidad de tu hospital en Colombia
            </h2>

            <p className={styles.ctaText}>
              Una gestión eficiente es clave para garantizar la continuidad en
              la prestación de servicios y la estabilidad financiera de los
              hospitales en Colombia.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Contactar ahora
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                target="_blank"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
