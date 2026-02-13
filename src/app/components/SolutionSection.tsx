"use client";

import { motion } from "framer-motion";
import styles from "../styles/SolutionSection.module.css";

export default function SolutionSection() {
  return (
    <section className={styles.section} id="solucion">
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
          Nuestra Solución: Estrategia Doble Carril
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          En PRAVICE ABOGADOS entendemos que no toda la cartera es igual.
          Mezclar rutas procesales es el error más común y costoso en
          recuperación de cartera en salud. Nuestra metodología separa
          estratégicamente cada tipo de obligación para maximizar el recaudo.
        </motion.p>

        {/* CARRILES VISUALES */}
        <motion.div
          className={styles.lanes}
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
          <motion.div
            className={styles.lane}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Carril 1 - Ejecutivo
          </motion.div>

          <motion.div
            className={styles.lane}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Carril 2 - Declarativo
          </motion.div>
        </motion.div>

        {/* GRID DESCRIPTIVO */}
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Carril 1 - Ejecutivo</h3>
            <p>
              Para facturas exigibles con título ejecutivo claro. Sin glosa
              efectiva o con glosa rechazada. Proceso rápido con medidas
              cautelares inmediatas para asegurar el patrimonio del deudor y
              acelerar el pago.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Carril 2 - Declarativo</h3>
            <p>
              Para cartera glosada, repetitiva o improcedente según el deudor.
              Construcción probatoria detallada por cada factura. Reconstrucción
              técnica de la prestación del servicio con soporte médico y
              administrativo robusto.
            </p>
          </motion.div>
        </div>

        {/* TARJETAS */}
        <motion.div
          className={styles.cards}
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
          {[
            {
              title: "Medidas cautelares preventivas",
              text: "Aseguramiento patrimonial antes de sentencia",
            },
            {
              title: "Construcción probatoria por factura",
              text: "Cada obligación con su expediente completo",
            },
            {
              title: "Control contable permanente",
              text: "Trazabilidad financiera en tiempo real",
            },
            {
              title: "Investigación patrimonial del deudor",
              text: "Identificación de activos ejecutables",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
