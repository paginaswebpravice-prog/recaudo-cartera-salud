"use client";

import { motion } from "framer-motion";
import styles from "../styles/MethodologySection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHandshake,
  faScaleBalanced,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function MethodologySection() {
  const phases = [
    {
      number: "01",
      title: "Diagnóstico y Segmentación",
      highlight: "¿Qué debemos cobrar primero?",
      icon: faMagnifyingGlass,
      bullets: [
        "Analizamos tu cartera y clasificamos la deuda",
        "Identificamos riesgos y rutas de cobro",
        "Definimos la matriz maestra del hospital",
      ],
    },
    {
      number: "02",
      title: "Gestión Prejurídica",
      highlight: "Cobramos antes de ir a juicio",
      icon: faHandshake,
      bullets: [
        "Requerimientos formales a EPS",
        "Negociación de acuerdos de pago",
        "Protección completa contra prescripción",
      ],
    },
    {
      number: "03",
      title: "Cobro Jurídico Estratégico",
      highlight: "Mandamos deudas a juicio",
      icon: faScaleBalanced,
      bullets: [
        "Demandas y medidas cautelares",
        "Cobro firme y agresivo antes que prescriba",
        "Defensa legal y recuperación total",
      ],
    },
    {
      number: "04",
      title: "Monitoreo y Optimización",
      highlight: "Siempre mejoramos",
      icon: faChartLine,
      bullets: [
        "Reportes detallados y transparencia",
        "Indicadores para mejorar desempeño",
        "Mejora continua y cobranza efectiva",
      ],
    },
  ];

  return (
    <section className={styles.section} id="metodologia">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          Metodología Efectiva para Recuperación de Cartera en Colombia:
          <span> 4 Fases Clave</span>
        </h2>

        <p className={styles.intro}>
          Proceso probado en 4 pasos para maximizar recuperación, reducir
          tiempos de cobro y proteger tu derecho a pago frente a EPS y entidades
          públicas en Colombia.
        </p>

        <div className={styles.grid}>
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={styles.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <span className={styles.number}>{phase.number}</span>

              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={phase.icon} className={styles.icon} />
              </div>

              <h3>{phase.title}</h3>

              <ul>
                {phase.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className={styles.highlight}>{phase.highlight}</div>
            </motion.div>
          ))}
        </div>

        {/* BARRA SECUENCIAL */}
        <div className={styles.sequence}>
          {phases.map((phase, index) => (
            <div key={index} className={styles.sequenceItem}>
              <span>{phase.title}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
