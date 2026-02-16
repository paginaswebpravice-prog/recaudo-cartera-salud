"use client";

import { motion } from "framer-motion";
import styles from "../styles/BeneficioSection.module.css";

export default function BeneficioSection() {
  const sideItems = [
    {
      title: "Visibilidad Jurídica 24/7",
      text: "Control en tiempo real del estado de sus procesos de cobro frente a EPS y entidades públicas.",
    },
    {
      title: "Trazabilidad Documental",
      text: "Historial completo de actuaciones, reportes y soportes jurídicos.",
    },
    {
      title: "Eficiencia Financiera",
      text: "Decisiones estratégicas basadas en datos procesales y proyección de recaudo.",
    },
  ];

  const infoItems = [
    {
      title: "Proyección de recaudo",
      text: "Anticipe flujos de caja según etapa procesal y probabilidades de recuperación.",
    },
    {
      title: "Medición del desempeño jurídico",
      text: "Indicadores de gestión, tiempos procesales y efectividad en recuperación de cartera.",
    },
    {
      title: "Identificación de cuellos de botella",
      text: "Detecte retrasos en procesos judiciales o administrativos y actúe oportunamente.",
    },
    {
      title: "Decisiones financieras informadas",
      text: "Información consolidada para fortalecer su estrategia empresarial.",
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
          Beneficio Estratégico de la App Legal PRAVICE para su Empresa
        </motion.h2>

        {/* SUBTITLE OPTIMIZADO */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          La App Legal PRAVICE transforma la recuperación de cartera
          hospitalaria en un sistema medible, transparente y controlable.
          Funciona como un departamento jurídico externalizado con enfoque
          financiero y acceso permanente.
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
              Enfoque Empresarial y Financiero
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
          Beneficios de la App Legal PRAVICE para IPS y hospitales en Colombia.
          Sistema de control de procesos judiciales, recuperación de cartera a
          EPS y proyección financiera basada en gestión jurídica.
        </p>
      </motion.div>
    </section>
  );
}
