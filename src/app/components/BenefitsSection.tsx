"use client";

import { motion } from "framer-motion";
import styles from "../styles/BeneficioSection.module.css";

export default function BeneficioSection() {
  const sideItems = [
    {
      title: "Seguimiento permanente de la recuperación de cartera",
      text: "Consulte en tiempo real el estado de conciliaciones, actuaciones jurídicas, procesos administrativos y avances relacionados con la recuperación de cartera frente a EPS y demás entidades del sistema de salud.",
    },
    {
      title: "Documentación organizada y disponible",
      text: "Acceda fácilmente a contratos, facturación, soportes, comunicaciones, reportes y demás documentos necesarios para cada proceso de recuperación.",
    },
    {
      title: "Mayor control para la gestión financiera",
      text: "La disponibilidad permanente de información actualizada facilita el seguimiento de las cuentas médicas y fortalece la planeación financiera de la institución.",
    },
  ];

  const infoItems = [
    {
      title: "Visualización del estado de la cartera",
      text: "Obtenga una perspectiva clara sobre el comportamiento de las cuentas médicas, conciliaciones y procesos en curso para facilitar la toma de decisiones.",
    },
    {
      title: "Indicadores de gestión y seguimiento",
      text: "Consulte información relacionada con tiempos de respuesta, actuaciones realizadas y evolución de cada proceso para medir su avance.",
    },
    {
      title: "Detección de procesos que requieren atención",
      text: "Identifique oportunamente cuentas, conciliaciones o actuaciones pendientes para mantener una gestión organizada y reducir retrasos.",
    },
    {
      title: "Información que respalda las decisiones institucionales",
      text: "La plataforma centraliza la información necesaria para apoyar la planeación financiera y el seguimiento de las estrategias implementadas.",
    },
  ];

  return (
    <section className={styles.section} id="beneficios-app">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TITULO SEO */}
        <motion.h2
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Por qué la App Legal PRAVICE facilita el seguimiento de la
          recuperación de cartera hospitalaria en IPS, clínicas y hospitales?
        </motion.h2>

        {/* SUBTITLE OPTIMIZADO */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          La App Legal PRAVICE fue desarrollada para ofrecer a IPS, hospitales,
          clínicas, laboratorios y demás prestadores de servicios de salud una
          visión clara del estado de sus procesos de recuperación de cartera.
          Desde una sola plataforma es posible consultar avances, acceder a
          documentación, comunicarse con el equipo encargado de cada gestión y
          realizar seguimiento a conciliaciones, actuaciones jurídicas y demás
          procesos relacionados con la recuperación de cuentas médicas. Esto
          permite una administración mucho más organizada de la información y
          facilita la toma de decisiones basada en datos actualizados.
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
              Información estratégica para fortalecer la gestión financiera
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

        {/* SEO SEMÁNTICO OCULTO */}
        <p className={styles.seoText}>
          La App Legal PRAVICE es una plataforma especializada para el
          seguimiento de la recuperación de cartera hospitalaria en Colombia.
          Permite a IPS, hospitales, clínicas, laboratorios y demás prestadores
          de servicios de salud consultar el estado de conciliaciones con EPS,
          revisar documentos, acceder a reportes, realizar seguimiento a
          procesos jurídicos y fortalecer la gestión financiera mediante
          información organizada y actualizada. La plataforma complementa las
          estrategias de recuperación de cartera, gestión de cuentas médicas y
          control documental dentro del sector salud colombiano.
        </p>
      </motion.div>
    </section>
  );
}
