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
        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            Problemáticas financieras del sector salud
          </span>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Cartera hospitalaria, glosas y retrasos de pago: desafíos que
            afectan a IPS, clínicas y hospitales en Colombia
          </motion.h2>
        </motion.div>

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
              El problema no es únicamente la existencia de cartera vencida
            </motion.p>

            <motion.p
              className={styles.highlightStrong}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              El verdadero riesgo está en la falta de gestión especializada
              sobre glosas, conciliaciones y procesos de cobro frente a EPS y
              entidades del sistema de salud
            </motion.p>

            {/* APOYO SEO */}
            <div className={styles.supportCard}>
              <p>
                Para procesos generales de recuperación de cartera empresarial
                en otros sectores:
              </p>

              <a
                href="https://recaudodecartera.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar firma especializada →
              </a>
            </div>
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
              Las IPS, clínicas, hospitales y proveedores médicos enfrentan
              retrasos constantes en pagos, devoluciones, auditorías y
              objeciones administrativas que afectan el flujo financiero del
              sector salud. La acumulación de cartera hospitalaria genera
              presión operativa, riesgo jurídico y dificultades de
              sostenibilidad institucional.
            </motion.p>

            {[
              {
                title: "Glosas médicas y devoluciones prolongadas",
                text: "Objeciones administrativas y técnicas que ralentizan el reconocimiento y pago de facturación médica en las instituciones prestadoras de salud.",
              },
              {
                title: "Retrasos en conciliaciones y procesos con EPS",
                text: "Procesos extensos de validación y auditoría que impactan directamente la liquidez y el flujo de caja hospitalario.",
              },
              {
                title: "Cartera envejecida en el sector salud",
                text: "Facturación pendiente durante largos periodos que incrementa el riesgo financiero y limita la capacidad operativa de las IPS.",
              },
              {
                title: "Riesgo jurídico y prescripción de cuentas médicas",
                text: "La ausencia de seguimiento especializado puede generar pérdida de capacidad de cobro y afectaciones económicas relevantes.",
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

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Sitio especializado en cartera hospitalaria, conciliaciones con EPS,
          gestión de glosas, auditoría de facturación médica y problemáticas
          financieras del sector salud colombiano. Complementa servicios
          generales de recuperación de cartera empresarial mediante enfoque
          especializado en IPS y hospitales.
        </p>
      </motion.div>
    </section>
  );
}
