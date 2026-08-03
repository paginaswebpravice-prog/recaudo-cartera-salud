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
      title: "Diagnóstico integral de la cartera hospitalaria",
      highlight: "Priorizamos obligaciones críticas",
      icon: faMagnifyingGlass,
      bullets: [
        "Clasificación de cartera según antigüedad, riesgo y probabilidad de recaudo.",
        "Identificación de glosas, devoluciones, auditorías y cuentas críticas.",
        "Revisión documental para determinar la mejor estrategia de recuperación.",
      ],
    },
    {
      number: "02",
      title: "Conciliación y gestión prejurídica con EPS",
      highlight: "Buscamos acuerdos antes de acudir a instancias judiciales",
      icon: faHandshake,
      bullets: [
        "Requerimientos formales y acercamientos con las entidades responsables del pago.",
        "Negociación técnica de cuentas médicas y seguimiento de compromisos.",
        "Control de términos para reducir riesgos de prescripción.",
      ],
    },
    {
      number: "03",
      title: "Estrategia jurídica para la recuperación de cartera",
      highlight: "Protegemos el derecho al cobro de la institución",
      icon: faScaleBalanced,
      bullets: [
        "Definición de la estrategia jurídica más adecuada para cada caso.",
        "Fortalecimiento documental y probatorio de la facturación médica.",
        "Acompañamiento durante procesos ejecutivos, declarativos y demás actuaciones que resulten necesarias.",
      ],
    },
    {
      number: "04",
      title: "Seguimiento, medición y mejora continua",
      highlight: "Analizamos resultados para optimizar el recaudo",
      icon: faChartLine,
      bullets: [
        "Seguimiento permanente al estado de cada cuenta.",
        "Indicadores de recuperación y trazabilidad del proceso.",
        "Recomendaciones para fortalecer la gestión futura de la cartera.",
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
          Metodología especializada para recuperar cartera de IPS, clínicas y
          hospitales
        </motion.span>

        {/* TITLE */}
        <h2 className={styles.title}>
          ¿Cómo recuperamos la cartera hospitalaria de IPS, clínicas y
          hospitales?
          <span>
            Una metodología de 4 fases que combina análisis técnico,
            conciliación con EPS, gestión jurídica y seguimiento permanente del
            recaudo
          </span>
        </h2>

        {/* INTRO */}
        <p className={styles.intro}>
          La recuperación de cartera en el sector salud exige mucho más que
          realizar requerimientos de pago. Cada cuenta médica debe analizarse de
          acuerdo con su estado, los soportes disponibles, las glosas
          existentes, las auditorías realizadas y los términos legales
          aplicables. Por esta razón desarrollamos una metodología propia que
          integra análisis documental, conciliaciones con EPS, gestión técnica
          de glosas, acompañamiento jurídico y seguimiento continuo de los
          resultados, permitiendo aumentar las probabilidades de recuperación y
          fortalecer el flujo de caja de IPS, clínicas, hospitales y demás
          prestadores de servicios de salud en Colombia.
        </p>

        {/* APOYO SEO */}
        <div className={styles.supportBox}>
          <p>
            ¿Tu empresa pertenece a otro sector económico y necesita recuperar
            cartera comercial o empresarial?
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce nuestra firma especializada en recuperación y recaudo de
            cartera →
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
          Nuestra metodología ha sido diseñada específicamente para
          instituciones del sector salud que necesitan recuperar cartera
          hospitalaria de manera técnica, organizada y jurídicamente sustentada.
          Acompañamos procesos de conciliación con EPS, gestión de glosas,
          revisión de facturación médica, seguimiento de cuentas por cobrar y
          estrategias legales para fortalecer el recaudo. Este enfoque integral
          permite mejorar el flujo de caja, reducir la antigüedad de la cartera
          y optimizar la gestión financiera de IPS, hospitales, clínicas,
          laboratorios y demás prestadores de servicios de salud en Colombia.
        </p>
      </motion.div>
    </section>
  );
}
