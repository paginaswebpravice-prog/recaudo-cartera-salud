"use client";

import { motion } from "framer-motion";
import styles from "../styles/BeneficioSection.module.css";

export default function BeneficioSection() {
  const sideItems = [
    {
      title: "Visibilidad",
      text: "Control en tiempo real de todos sus procesos",
    },
    {
      title: "Trazabilidad",
      text: "Historial completo documentado",
    },
    {
      title: "Eficiencia",
      text: "Decisiones informadas basadas en datos",
    },
  ];

  const infoItems = [
    {
      title: "Proyectar recaudo",
      text: "Anticipe flujos de caja basados en estado procesal",
    },
    {
      title: "Medir desempeño jurídico",
      text: "Indicadores de gestión y tiempos procesales",
    },
    {
      title: "Detectar cuellos de botella",
      text: "Identifique retrasos y tome acción correctiva",
    },
    {
      title: "Tomar decisiones informadas",
      text: "Información completa para estrategia financiera",
    },
  ];

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TITULO */}
        <motion.h2
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Beneficio Estratégico para su Empresa
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          La App PRAVICE convierte la gestión jurídica en un sistema medible,
          transparente, controlable y trazable. Funciona como su departamento
          jurídico externalizado, con acceso permanente.
        </motion.p>

        <div className={styles.grid}>
          {/* IZQUIERDA */}
          <motion.div
            className={styles.left}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {sideItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.sideCard}
                variants={{
                  hidden: { x: -40, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className={styles.icon}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* DERECHA */}
          <motion.div
            className={styles.right}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <motion.h3
              className={styles.sectionTitle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Enfoque Empresarial
            </motion.h3>

            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.infoCard}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
