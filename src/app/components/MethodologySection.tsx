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
      title: "Diagnóstico y Segmentación de Cartera",
      highlight: "Priorizamos obligaciones críticas",
      icon: faMagnifyingGlass,
      bullets: [
        "Clasificación estratégica de cartera hospitalaria",
        "Identificación de glosas, devoluciones y riesgos",
        "Análisis documental y validación de soportes",
      ],
    },
    {
      number: "02",
      title: "Gestión Prejurídica Especializada",
      highlight: "Conciliamos antes de judicializar",
      icon: faHandshake,
      bullets: [
        "Requerimientos formales y conciliaciones con EPS",
        "Negociación técnica de cuentas médicas",
        "Seguimiento preventivo frente a prescripción",
      ],
    },
    {
      number: "03",
      title: "Gestión Jurídica Estratégica",
      highlight: "Protegemos el derecho de cobro",
      icon: faScaleBalanced,
      bullets: [
        "Procesos ejecutivos y declarativos",
        "Fortalecimiento probatorio de facturación médica",
        "Estrategias cautelares y defensa jurídica",
      ],
    },
    {
      number: "04",
      title: "Monitoreo y Optimización",
      highlight: "Mejora continua del recaudo",
      icon: faChartLine,
      bullets: [
        "Indicadores y trazabilidad de cartera",
        "Reportes de gestión y seguimiento",
        "Optimización de procesos financieros",
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
        {/* BADGE */}
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Metodología especializada para IPS y hospitales
        </motion.span>

        {/* TITLE */}
        <h2 className={styles.title}>
          Metodología estratégica para gestión de cartera hospitalaria
          <span>4 fases enfocadas en el sector salud</span>
        </h2>

        {/* INTRO */}
        <p className={styles.intro}>
          Aplicamos un modelo especializado orientado a IPS, clínicas,
          hospitales y proveedores médicos. Nuestra metodología combina análisis
          documental, conciliación con EPS, gestión jurídica y seguimiento
          estratégico de cuentas médicas para optimizar procesos de recaudo en
          el sector salud colombiano.
        </p>

        {/* APOYO SEO */}
        <div className={styles.supportBox}>
          <p>
            ¿Necesitas soluciones generales de recuperación de cartera para
            otros sectores empresariales?
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar firma especializada en recaudo de cartera →
          </a>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={styles.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
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

        {/* SECUENCIA */}
        <div className={styles.sequence}>
          {phases.map((phase, index) => (
            <div key={index} className={styles.sequenceItem}>
              <span>{phase.title}</span>
            </div>
          ))}
        </div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Metodología especializada en cartera hospitalaria, conciliaciones con
          EPS, gestión de glosas, validación documental de facturación médica y
          recuperación estratégica de cartera en el sector salud colombiano.
          Sitio complementario enfocado exclusivamente en IPS, clínicas y
          hospitales.
        </p>
      </motion.div>
    </section>
  );
}
