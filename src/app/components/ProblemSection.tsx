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
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          El Problema Real del Sector Salud en Colombia
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
              El problema no es que no le deban
            </motion.p>

            <motion.p
              className={styles.highlightStrong}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              El problema es que no le pagan
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
              Las instituciones de salud en Colombia enfrentan desafíos críticos
              que amenazan su sostenibilidad financiera y operativa. Estos no
              son problemas aislados, sino una realidad sistémica que afecta el
              flujo de caja y la capacidad de prestación del servicio.
            </motion.p>

            {[
              {
                title: "Glosas que nunca cierran",
                text: "Procesos de revisión interminables que inmovilizan recursos durante meses o años",
              },
              {
                title: "ADRES sin respuesta definitiva",
                text: "Trámites administrativos que se extienden sin cronogramas claros de pago",
              },
              {
                title: "EPS que dilatan sistemáticamente",
                text: "Estrategias de postergación que envejecen la cartera y debilitan la posición jurídica",
              },
              {
                title: "Riesgo inminente de prescripción",
                text: "Pérdida definitiva del derecho de cobro por vencimiento de términos legales",
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
      </motion.div>
    </section>
  );
}
