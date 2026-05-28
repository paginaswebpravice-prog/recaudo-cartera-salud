"use client";

import { motion } from "framer-motion";
import styles from "../styles/SolutionSection.module.css";

export default function SolutionSection() {
  return (
    <section className={styles.section} id="solucion">
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
          Estrategias jurídicas especializadas para el sector salud
        </motion.span>

        {/* TITULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Gestión jurídica y recuperación estratégica de cartera hospitalaria
          para IPS, clínicas y hospitales en Colombia
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Aplicamos metodologías especializadas para cartera hospitalaria,
          conciliaciones con EPS, gestión de glosas y procesos jurídicos en el
          sector salud. Cada obligación requiere análisis técnico, validación
          documental y una estrategia procesal adecuada según el estado de la
          facturación médica y las objeciones existentes.
        </motion.p>

        {/* APOYO SEO */}
        <motion.div
          className={styles.supportBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            ¿Buscas soluciones generales de recuperación de cartera empresarial
            en otros sectores económicos?
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conocer firma especializada en recaudo de cartera →
          </a>
        </motion.div>

        {/* CARRILES */}
        <motion.div
          className={styles.lanes}
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
          <motion.div
            className={styles.lane}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Gestión Ejecutiva para Facturación Exigible
          </motion.div>

          <motion.div
            className={styles.lane}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Estrategia Declarativa para Glosas y Objeciones Médicas
          </motion.div>
        </motion.div>

        {/* GRID */}
        <div className={styles.grid}>
          <motion.div
            className={styles.box}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Gestión Ejecutiva frente a EPS</h3>

            <p>
              Aplicable a obligaciones con soporte documental validado y cuentas
              médicas exigibles. Permite avanzar en mecanismos judiciales y
              medidas cautelares orientadas a proteger el recaudo y agilizar el
              flujo financiero institucional.
            </p>
          </motion.div>

          <motion.div
            className={styles.box}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Gestión Técnica de Cartera Glosada</h3>

            <p>
              Diseñada para facturación objetada o cuentas médicas con glosas
              administrativas y técnicas. Incluye revisión documental,
              reconstrucción probatoria y acompañamiento jurídico especializado
              para sustentar el derecho de reconocimiento y pago.
            </p>
          </motion.div>
        </div>

        {/* CARDS */}
        <motion.div
          className={styles.cards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            {
              title: "Conciliaciones con EPS",
              text: "Acompañamiento técnico y jurídico en procesos de conciliación y validación de cuentas médicas.",
            },
            {
              title: "Gestión especializada de glosas",
              text: "Análisis jurídico y documental para responder objeciones administrativas y técnicas.",
            },
            {
              title: "Prevención de prescripción",
              text: "Seguimiento estratégico de términos y actuaciones relacionadas con cartera hospitalaria.",
            },
            {
              title: "Validación documental de facturación",
              text: "Organización y fortalecimiento probatorio de soportes médicos y administrativos.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Sitio especializado en cartera hospitalaria, conciliaciones con EPS,
          gestión jurídica de facturación médica, glosas y recuperación
          estratégica de cartera en el sector salud colombiano. Complementa
          soluciones generales de recaudo empresarial mediante enfoque exclusivo
          en IPS, clínicas y hospitales.
        </p>
      </motion.div>
    </section>
  );
}
