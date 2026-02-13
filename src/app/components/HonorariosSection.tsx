"use client";

import { motion } from "framer-motion";
import styles from "../styles/HonorariosSection.module.css";

export default function HonorariosSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TÍTULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Modelo de Honorarios: Alineación Total con sus Resultados
        </motion.h2>

        <div className={styles.content}>
          {/* LEFT SIDE */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.circleWrapper}>
              <motion.div
                className={styles.circle}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  10%
                </motion.span>
              </motion.div>
            </div>

            <p className={styles.comision}>Comisión sobre recaudo efectivo</p>

            <p className={styles.bold}>PRAVICE gana cuando usted cobra.</p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className={styles.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h3
              className={styles.subtitle}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Transparencia y Alineación de Intereses
            </motion.h3>

            <motion.p
              className={styles.description}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Nuestro modelo de honorarios elimina cualquier conflicto de
              interés...
            </motion.p>

            <div className={styles.cards}>
              {[
                {
                  title: "Sin costos ocultos",
                  text: "No hay pagos iniciales ni cuotas mensuales",
                },
                {
                  title: "Sin riesgo financiero",
                  text: "Solo paga cuando recuperamos su cartera",
                },
                {
                  title: "Incentivo al recaudo rápido",
                  text: "Nuestro modelo nos impulsa a conseguir resultados ágiles",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.fullCard}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <h4>Reportes de comisión claros</h4>
              <p>Cada pago con su detalle y cálculo transparente</p>
            </motion.div>

            <motion.p
              className={styles.bottomText}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Este esquema ha demostrado ser el más efectivo...
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
