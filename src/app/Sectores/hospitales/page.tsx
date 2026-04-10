"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function HospitalesPage() {
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
            Hospitales en Colombia: sostenibilidad, presupuesto y operación
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
          <h2 className={styles.subtitle}>
            Desafíos estructurales en hospitales
          </h2>

          <p className={styles.text}>
            Los hospitales operan en un entorno complejo donde deben atender
            grandes volúmenes de pacientes mientras enfrentan limitaciones
            presupuestales y retrasos en los flujos de ingreso.
          </p>

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
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ La falta de recursos y el crecimiento de la cartera pueden afectar
            directamente la capacidad de atención de un hospital.
          </div>
        </section>

        {/* IMPACTO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Impacto en la sostenibilidad hospitalaria
          </h2>

          <p className={styles.text}>
            La acumulación de cartera y la falta de liquidez afectan la
            estabilidad institucional de los hospitales, generando dificultades
            para operar eficientemente y garantizar la prestación continua de
            servicios.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Déficit financiero</h4>
              <p>
                Desbalance entre ingresos proyectados y recursos disponibles.
              </p>
            </div>

            <div>
              <h4>✔ Limitación en atención</h4>
              <p>Restricciones para ampliar cobertura o mejorar servicios.</p>
            </div>

            <div>
              <h4>✔ Afectación del personal</h4>
              <p>Dificultades en contratación y pago de talento humano.</p>
            </div>

            <div>
              <h4>✔ Riesgo institucional</h4>
              <p>Impacto en la continuidad y calidad del servicio de salud.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            ✔ La sostenibilidad de un hospital depende de su capacidad para
            gestionar recursos de manera eficiente y garantizar el flujo de
            ingresos.
          </div>
        </section>

        {/* OPERACIÓN */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Complejidad operativa hospitalaria
          </h2>

          <p className={styles.text}>
            Los hospitales deben gestionar múltiples procesos simultáneamente,
            desde la atención de pacientes hasta la administración financiera,
            lo que incrementa la complejidad de su operación diaria.
          </p>

          <div className={styles.grid}>
            {[
              "Atención continua 24/7",
              "Gestión de urgencias y alta complejidad",
              "Coordinación de múltiples áreas médicas",
              "Procesos administrativos extensos",
              "Dependencia de recursos públicos o mixtos",
            ].map((item, i) => (
              <div key={i} className={styles.card}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NECESIDAD */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Necesidad de gestión estratégica</h2>

          <p className={styles.text}>
            Para garantizar su sostenibilidad, los hospitales requieren
            implementar estrategias que les permitan optimizar sus recursos,
            mejorar la gestión financiera y fortalecer su capacidad operativa.
          </p>

          <div className={styles.highlightBox}>
            Cada vez más hospitales en Colombia buscan fortalecer sus procesos
            internos para mejorar la eficiencia y garantizar la continuidad del
            servicio.
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Fortalece la sostenibilidad de tu hospital
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
          </div>
        </section>
      </main>
    </>
  );
}
