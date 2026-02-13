"use client";

import { motion } from "framer-motion";
import styles from "../styles/DocumentationSection.module.css";

type Step = {
  number: number;
  title: string;
  description: string;
};

const stepsRow1: Step[] = [
  {
    number: 1,
    title: "Base de Datos de Cartera",
    description:
      "Excel o sistema con relación de facturas pendientes, identificando deudor, valor, fecha y estado",
  },
  {
    number: 2,
    title: "Facturas y Soportes",
    description:
      "Copias digitales de facturas con sus anexos técnicos y administrativos",
  },
  {
    number: 1,
    title: "Glosas y Contra-Glosas",
    description:
      "Documentación completa del proceso de glosa, respuestas y comunicaciones",
  },
  {
    number: 2,
    title: "Estados Financieros",
    description:
      "Mayor y balances que soporten la existencia y cuantía de la cartera",
  },
];

const stepsRow2: Step[] = [
  {
    number: 3,
    title: "Radicados y Respuestas",
    description:
      "Constancias de radicación ante EPS, ADRES o entidades deudoras",
  },
  {
    number: 3,
    title: "Poder Legal",
    description: "Representación legal para actuar en nombre de su institución",
  },
];

export default function DocumentationSection() {
  return (
    <section className={styles.section}>
      {/* TÍTULO */}
      <motion.h2
        className={styles.title}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Documentación Necesaria para Iniciar
      </motion.h2>

      {/* SUBTÍTULO */}
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Para comenzar el diagnóstico estratégico de su cartera, necesitamos
        información básica que toda institución de salud maneja. Nuestro equipo
        le guiará en la organización de estos documentos.
      </motion.p>

      {/* FILA 1 */}
      <motion.div
        className={styles.timeline}
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
        <div className={styles.row}>
          {stepsRow1.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={styles.circle}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 180 }}
                viewport={{ once: true }}
              >
                {step.number}
              </motion.div>

              <motion.div
                className={styles.card}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FILA 2 */}
      <motion.div
        className={styles.timeline}
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
        <div className={styles.row}>
          {stepsRow2.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={styles.circle}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 180 }}
                viewport={{ once: true }}
              >
                {step.number}
              </motion.div>

              <motion.div className={styles.card} whileHover={{ y: -5 }}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FOOTER */}
      <motion.p
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        No se preocupe si no cuenta con toda la documentación completa. Parte de
        nuestro servicio incluye ayudarle a organizar y completar los
        expedientes.
      </motion.p>
    </section>
  );
}
