"use client";

import { motion } from "framer-motion";
import styles from "../styles/WhyChoosingUs.module.css";

export default function WhyChoosingUs() {
  const items = [
    {
      img: "/icon-team.jpg",
      alt: "Equipo jurídico especializado en salud",
      title: "Equipo Jurídico Especializado en Salud",
      text: "Nuestros abogados conocen profundamente la normativa sectorial, los procesos administrativos de EPS, ADRES y entidades territoriales. No somos cobradores tradicionales, somos estrategas jurídicos del sector salud.",
    },
    {
      img: "/icon-cert.jpg",
      alt: "Certificación Superintendencia Nacional de Salud",
      title: "Certificación Superintendencia Nacional de Salud",
      text: "Cumplimos todos los requisitos técnicos, éticos y operativos exigidos por el ente regulador. Esta certificación garantiza que nuestros procesos cumplen los más altos estándares del sector.",
    },
    {
      img: "/icon-demand.jpg",
      alt: "Solidez en presentación de demandas",
      title: "Solidez en Presentación de Demandas",
      text: "Cada demanda es construida con rigor técnico y probatorio. Nuestros escritos judiciales están diseñados para resistir excepciones y acelerar los procesos hacia sentencia favorable.",
    },
    {
      img: "/icon-strategy.jpg",
      alt: "Recuperación eficiente y personalizada",
      title: "Recuperación Eficiente y Personalizada",
      text: "Entendemos que cada institución tiene necesidades diferentes. Diseñamos estrategias adaptadas a su realidad operativa, prioridades financieras y capacidad de gestión documental.",
    },
  ];

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
          ¿Por Qué Elegir PRAVICE ABOGADOS?
        </motion.h2>

        {/* GRID DE CARDS */}
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
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className={styles.icon}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src={item.img} alt={item.alt} />
              </motion.div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* HIGHLIGHT FINAL */}
        <motion.div
          className={styles.highlight}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.highlightLine}
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <p>
            <strong>Menos demandas, más resultados.</strong> Nuestra filosofía
            es judicializar solo cuando es estratégicamente necesario,
            priorizando siempre el recaudo efectivo sobre la actividad procesal
            sin propósito.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
