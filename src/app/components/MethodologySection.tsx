"use client";

import { motion } from "framer-motion";
import styles from "../styles/MethodologySection.module.css";

export default function MethodologySection() {
  const phases = [
    {
      number: "01",
      title: "Diagnóstico y Segmentación Estratégica",
      text: "Construcción de matriz maestra de cartera. Clasificación por ruta procesal óptima. Análisis de riesgo de prescripción por obligación. Identificación de facturas con mejor probabilidad de recaudo inmediato.",
    },
    {
      number: "02",
      title: "Gestión Prejurídica Estratégica",
      text: "Requerimiento formal técnicamente estructurado. Mesas de trabajo con deudores dispuestos a negociar. Acuerdos de pago con garantías reales. Documentación que fortalece la posición judicial futura.",
    },
    {
      number: "03",
      title: "Judicialización Inteligente",
      text: "Procesos ejecutivos homogéneos para agilizar trámite. Demandas declarativas con construcción probatoria robusta. Solicitud inmediata de medidas cautelares. Seguimiento activo de términos procesales.",
    },
    {
      number: "04",
      title: "Seguimiento y Control Continuo",
      text: "Indicadores de recaudo actualizados mensualmente. Reportes periódicos con estado por factura. Trazabilidad documental completa. Comunicación permanente con el cliente.",
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
        {/* TITULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Metodología PRAVICE: 4 Fases para el Recaudo Efectivo
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro proceso está diseñado para maximizar la recuperación mientras
          minimizamos el desgaste judicial innecesario. Cada fase tiene
          objetivos medibles y entregables específicos que garantizan
          transparencia y control total para nuestros clientes.
        </motion.p>

        {/* FASES */}
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
              {/* NUMERO */}
              <motion.span
                className={styles.number}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {phase.number}
              </motion.span>

              {/* LINEA ANIMADA */}
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
      </motion.div>
    </section>
  );
}
