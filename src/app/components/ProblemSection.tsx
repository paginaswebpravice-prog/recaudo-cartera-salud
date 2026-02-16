"use client";

import { motion } from "framer-motion";
import styles from "../styles/ProblemSection.module.css";

export default function ProblemSection() {
  return (
    <section className={styles.section} id="problema">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TITULO OPTIMIZADO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Problemas de Cartera en IPS y Hospitales: La Crisis del Recaudo en el
          Sector Salud Colombiano
        </motion.h2>

        <div className={styles.grid}>
          {/* COLUMNA IZQUIERDA */}
          <motion.div
            className={styles.leftBox}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className={styles.highlight}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              El problema no es que exista cartera vencida en su IPS
            </motion.p>

            <motion.p
              className={styles.highlightStrong}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              El problema es la falta de recaudo efectivo frente a EPS y ADRES
            </motion.p>
          </motion.div>

          {/* COLUMNA DERECHA */}
          <motion.div
            className={styles.rightContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.p
              className={styles.intro}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Las IPS, clínicas y hospitales en Colombia enfrentan una crisis
              estructural de recuperación de cartera. La acumulación de deuda
              por parte de EPS y entidades públicas impacta directamente el
              flujo de caja, la capacidad operativa y la sostenibilidad
              financiera del sector salud.
            </motion.p>

            {[
              {
                title: "Glosas médicas que no se resuelven",
                text: "Objeciones técnicas y administrativas que inmovilizan cartera hospitalaria durante meses o años sin solución definitiva.",
              },
              {
                title: "Cartera con ADRES sin pago oportuno",
                text: "Procesos administrativos extensos que retrasan el recaudo efectivo y afectan la liquidez de las instituciones.",
              },
              {
                title: "EPS que dilatan el pago sistemáticamente",
                text: "Estrategias de postergación que envejecen la cartera vencida y debilitan la posición jurídica de la IPS.",
              },
              {
                title: "Riesgo de prescripción de cartera en salud",
                text: "Pérdida del derecho de cobro por vencimiento de términos legales si no existe gestión jurídica oportuna.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* TEXTO SEO ESTRUCTURAL */}
        <p className={styles.seoText}>
          La recuperación de cartera en el sector salud colombiano requiere
          estrategia jurídica especializada en cobro a EPS, gestión de glosas,
          procesos ante ADRES y prevención de prescripción de cartera
          hospitalaria.
        </p>
      </motion.div>
    </section>
  );
}
