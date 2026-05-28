"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faShieldHalved,
  faScaleBalanced,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/WhyChoosingUs.module.css";

export default function WhyChoosingUs() {
  const items = [
    {
      icon: faUserGroup,
      title: "Enfoque Exclusivo en Cartera del Sector Salud",
      text: "Trabajamos sobre problemáticas propias de IPS, clínicas, hospitales y proveedores médicos. Analizamos glosas, conciliaciones, facturación médica y procesos administrativos relacionados con EPS y entidades del sistema de salud colombiano.",
    },
    {
      icon: faShieldHalved,
      title: "Metodologías Alineadas con el Entorno Regulatorio",
      text: "Nuestra gestión se desarrolla bajo lineamientos aplicables al sector salud, priorizando trazabilidad documental, soporte técnico y procesos estructurados orientados a la recuperación estratégica de cartera hospitalaria.",
    },
    {
      icon: faScaleBalanced,
      title: "Gestión Jurídica y Documental Especializada",
      text: "Estructuramos estrategias para cuentas médicas exigibles, conciliaciones y cartera glosada mediante validación documental, fortalecimiento probatorio y acompañamiento jurídico especializado.",
    },
    {
      icon: faChartLine,
      title: "Optimización del Flujo Financiero Institucional",
      text: "Diseñamos procesos orientados a mejorar indicadores de recaudo, reducir envejecimiento de cartera y fortalecer la sostenibilidad financiera de instituciones prestadoras de salud.",
    },
  ];

  return (
    <section className={styles.section} id="por-que-elegirnos">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* BADGE */}
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Especialización jurídica y financiera para IPS y hospitales
        </motion.span>

        {/* TITLE */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Por qué trabajar una estrategia especializada para cartera
          hospitalaria y cuentas médicas?
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera en salud requiere análisis técnico,
          validación documental y conocimiento del funcionamiento operativo de
          EPS, IPS y procesos asociados a facturación médica. Un enfoque
          especializado permite optimizar conciliaciones, reducir riesgos y
          fortalecer estrategias de recaudo institucional.
        </motion.p>

        {/* SUPPORT BOX */}
        <motion.div
          className={styles.supportBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            Para servicios generales de recuperación de cartera empresarial en
            otros sectores:
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar firma especializada en recaudo de cartera →
          </a>
        </motion.div>

        {/* GRID */}
        <motion.div
          className={styles.grid}
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
                <FontAwesomeIcon icon={item.icon} />
              </motion.div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* HIGHLIGHT */}
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
            <strong>
              Menos desgaste operativo, más organización financiera.
            </strong>{" "}
            Una estrategia especializada en cartera hospitalaria permite mejorar
            conciliaciones, fortalecer soportes documentales y optimizar la
            gestión financiera de IPS, clínicas y hospitales frente a entidades
            del sistema de salud.
          </p>
        </motion.div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Sitio especializado en cartera hospitalaria, conciliaciones con EPS,
          glosas médicas, validación documental de facturación y gestión
          estratégica de cuentas médicas para IPS y hospitales en Colombia.
          Complementa soluciones generales de recaudo empresarial mediante un
          enfoque exclusivo para el sector salud.
        </p>
      </motion.div>
    </section>
  );
}
