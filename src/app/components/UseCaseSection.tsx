"use client";

import { motion } from "framer-motion";
import styles from "../styles/UseCaseSection.module.css";

export default function UseCaseSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TÍTULO */}
        <motion.h2
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Casos de Uso: Escenarios Reales de Recuperación
        </motion.h2>

        {/* SUBTÍTULO */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Estas son situaciones representativas de los casos que manejamos
          diariamente. Cada institución tiene características particulares, pero
          los patrones de cartera envejecida son similares en todo el sector
          salud colombiano.
        </motion.p>

        {/* GRID */}
        <motion.div
          className={styles.grid}
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
          {/* CARD GRANDE */}
          <motion.div
            className={`${styles.card} ${styles.large}`}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <h3>IPS con Cartera Glosada Acumulada</h3>
            <p>
              Institución de mediana complejidad con $4.000 millones en facturas
              glosadas por EPS durante los últimos 3 años...
            </p>
            <p>
              Estrategia PRAVICE: Proceso declarativo con reconstrucción
              probatoria completa de cada atención...
            </p>
          </motion.div>

          {/* CARD DERECHA SUPERIOR */}
          <motion.div
            className={`${styles.card} ${styles.medium}`}
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <h3>Proveedor de Tecnología con Facturas Aceptadas sin Pago</h3>
            <p>
              Empresa proveedora de dispositivos médicos con $1.200 millones...
            </p>
            <p>
              Estrategia PRAVICE: Proceso ejecutivo inmediato con embargo
              preventivo...
            </p>
          </motion.div>

          {/* CARD INFERIOR */}
          <motion.div
            className={`${styles.card} ${styles.small}`}
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <h3>Clínica con Riesgo de Prescripción Inminente</h3>
            <p>
              Clínica especializada con $800 millones en cartera de ADRES...
            </p>
            <p>
              Estrategia PRAVICE: Radicación urgente de demandas ejecutivas...
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
