"use client";

import { motion } from "framer-motion";
import styles from "../styles/MethodologySection.module.css";

export default function MethodologySection() {
  const phases = [
    {
      number: "01",
      title: "Diagnóstico y Segmentación de Cartera Hospitalaria",
      text: "Construcción de matriz maestra de cartera para IPS y hospitales. Clasificación por tipo de deudor (EPS, ADRES, entidades públicas). Análisis de riesgo de prescripción por factura y determinación de la ruta procesal óptima para maximizar el recaudo.",
    },
    {
      number: "02",
      title: "Gestión Prejurídica y Requerimiento Formal a EPS",
      text: "Estructuración de requerimientos formales técnicamente sustentados. Mesas de trabajo con EPS y aseguradores. Negociación de acuerdos de pago con garantías. Documentación estratégica que fortalece la futura acción judicial.",
    },
    {
      number: "03",
      title: "Cobro Jurídico y Judicialización Estratégica",
      text: "Interposición de procesos ejecutivos por facturas con título claro y demandas declarativas para cartera glosada. Solicitud inmediata de medidas cautelares, embargo de cuentas y seguimiento riguroso de términos procesales para evitar prescripción.",
    },
    {
      number: "04",
      title: "Seguimiento, Control y Reporte de Recaudo",
      text: "Indicadores mensuales de recuperación de cartera. Reportes detallados por factura. Trazabilidad documental completa y comunicación permanente con la institución de salud para garantizar transparencia y control financiero.",
    },
  ];

  return (
    <section className={styles.section} id="metodologia">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TITULO SEO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Metodología de Recuperación de Cartera para IPS y EPS en Colombia: 4
          Fases Estratégicas
        </motion.h2>

        {/* INTRO OPTIMIZADA */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro modelo combina gestión prejurídica y cobro jurídico
          especializado en el sector salud. Cada fase está diseñada para
          maximizar la recuperación de cartera hospitalaria, reducir tiempos de
          recaudo y proteger el derecho de cobro frente a EPS y entidades
          públicas bajo el marco normativo colombiano.
        </motion.p>

        {/* GRID FASES */}
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
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={styles.phase}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
            >
              <motion.span
                className={styles.number}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {phase.number}
              </motion.span>

              <motion.div
                className={styles.line}
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />

              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* TEXTO SEO ESTRUCTURAL */}
        <p className={styles.seoText}>
          Metodología especializada en cobro jurídico a EPS, gestión de glosas,
          procesos ejecutivos por facturas hospitalarias y recuperación de
          cartera vencida en IPS en Colombia con prevención de prescripción.
        </p>
      </motion.div>
    </section>
  );
}
