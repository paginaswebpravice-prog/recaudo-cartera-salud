"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function IPSContent() {
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
            Análisis financiero del sector salud en Colombia
          </span>

          <h1 className={styles.title}>
            IPS en Colombia: cartera EPS, flujo de caja y sostenibilidad
            financiera del sector salud
          </h1>

          <p className={styles.description}>
            Las IPS en Colombia enfrentan desafíos relacionados con cartera EPS,
            glosas, retrasos en pagos y presión sobre el flujo de caja. Este
            contenido analiza el impacto financiero y operativo que estas
            situaciones generan sobre la sostenibilidad institucional.
          </p>

          <div className={styles.actions}>
            <a href="#contenido" className={styles.primary}>
              Explorar análisis
            </a>

            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
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
      <main id="contenido" className={styles.container}>
        {/* PROBLEMÁTICA */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Principales problemas financieros de las IPS en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Las Instituciones Prestadoras de Salud dependen de una operación
            financiera estable para garantizar continuidad en la atención.
            Problemas administrativos y retrasos en recaudo afectan directamente
            la liquidez institucional.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Incremento de cartera vencida con EPS",
              "Glosas frecuentes sobre facturación médica",
              "Retrasos prolongados en pagos",
              "Procesos administrativos fragmentados",
              "Dificultades de conciliación y auditoría",
              "Dependencia financiera de terceros pagadores",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.warningBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ⚠ El crecimiento de la cartera EPS puede afectar directamente la
            estabilidad operativa y financiera de las IPS.
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
            Impacto del flujo de caja y la cartera EPS en las IPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Cuando el recaudo no ingresa oportunamente, las IPS deben sostener
            altos costos operativos mientras continúan prestando servicios de
            salud en condiciones de presión financiera.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Menor liquidez operativa",
                text: "Dificultad para cubrir gastos administrativos, nómina e insumos médicos.",
              },
              {
                title: "✔ Riesgo financiero institucional",
                text: "Desbalance entre ingresos proyectados y recaudo efectivo.",
              },
              {
                title: "✔ Restricción de crecimiento",
                text: "Limitaciones para ampliar infraestructura o servicios.",
              },
              {
                title: "✔ Presión sobre la operación",
                text: "Incremento de cargas administrativas y financieras.",
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ✔ La sostenibilidad financiera de las IPS depende cada vez más de
            procesos eficientes de gestión de cartera y recaudo.
          </motion.div>
        </section>

        {/* TIPOS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tipos de IPS y desafíos operativos en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cada tipo de IPS enfrenta retos financieros distintos según su nivel
            de complejidad, volumen de facturación y estructura administrativa.
          </motion.p>

          <div className={styles.grid}>
            {[
              "IPS ambulatorias y centros médicos",
              "IPS especializadas de mediana complejidad",
              "Redes integradas de prestación de servicios",
              "Prestadores independientes",
              "IPS con alta facturación mensual",
              "Instituciones con alta carga administrativa",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RECURSOS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Recursos especializados sobre cartera EPS y recaudo para IPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Este contenido tiene un enfoque informativo y de análisis sectorial.
            Para profundizar específicamente en recuperación de cartera y
            estrategias especializadas de recaudo en salud, consulte los
            siguientes recursos.
          </motion.p>

          <div className={styles.resourcesBox}>
            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Recuperación de cartera para IPS y clínicas en Colombia
            </a>

            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Estrategias de recaudo y gestión de cartera en salud
            </a>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>
              Conozca más sobre recuperación de cartera para IPS
            </h2>

            <p className={styles.ctaText}>
              Acceda a contenido especializado sobre recaudo, cartera EPS,
              sostenibilidad financiera y gestión operativa para instituciones
              del sector salud en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Ir al sitio principal
              </a>

              <a
                href="https://recaudodecartera.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Ver más recursos
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
