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
          Soluciones especializadas para recuperar cartera de IPS, clínicas y
          hospitales
        </motion.span>

        {/* TITULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recuperación de cartera hospitalaria para IPS, clínicas y hospitales
          mediante conciliación con EPS, gestión de glosas y estrategias
          jurídicas
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Cada proceso de recuperación de cartera requiere un análisis
          diferente. No todas las cuentas médicas pueden gestionarse de la misma
          manera, ya que intervienen factores como el estado de la facturación,
          la existencia de glosas, las auditorías realizadas por la EPS, los
          soportes documentales y los términos legales aplicables. Por eso
          desarrollamos estrategias técnicas, financieras y jurídicas adaptadas
          a cada caso, con el objetivo de acelerar el recaudo, proteger el
          derecho al cobro y fortalecer el flujo de caja de IPS, clínicas,
          hospitales y demás prestadores de servicios de salud en Colombia.
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
            ¿Tu empresa pertenece a otro sector económico y necesita recuperar
            cartera comercial o empresarial?
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce nuestra firma especializada en recuperación y recaudo de
            cartera empresarial →
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
            Cobro ejecutivo de cuentas médicas exigibles
          </motion.div>

          <motion.div
            className={styles.lane}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Gestión integral de glosas, objeciones y controversias con EPS
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
            <h3>Recuperación judicial de cartera con facturación exigible</h3>

            <p>
              Cuando las cuentas médicas cumplen los requisitos legales para su
              cobro, implementamos estrategias orientadas a recuperar los
              recursos mediante actuaciones jurídicas, conciliaciones y, cuando
              resulta procedente, procesos ejecutivos. Nuestro objetivo es
              acelerar el recaudo sin perder de vista la protección financiera
              de la institución prestadora de salud.
            </p>
          </motion.div>

          <motion.div
            className={styles.box}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Gestión especializada de glosas y cuentas médicas objetadas</h3>

            <p>
              Las glosas administrativas y técnicas no siempre significan que la
              cuenta médica sea improcedente. Analizamos la documentación
              clínica y administrativa, fortalecemos los soportes necesarios y
              diseñamos la mejor estrategia para sustentar el reconocimiento y
              pago de la facturación ante las EPS y demás entidades
              responsables.
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
              title: "Conciliación efectiva con EPS",
              text: "Representamos a las instituciones durante procesos de conciliación, buscando acuerdos que permitan recuperar recursos de manera más ágil y reducir tiempos de espera.",
            },
            {
              title: "Respuesta técnica a glosas médicas",

              text: "Analizamos cada observación administrativa o técnica para construir respuestas sólidas que incrementen las posibilidades de reconocimiento y pago.",
            },
            {
              title: "Seguimiento estratégico de la cartera",

              text: "Controlamos términos, vencimientos y estado de cada cuenta para disminuir riesgos de prescripción y mejorar la recuperación financiera.",
            },
            {
              title: "Fortalecimiento documental",

              text: "Organizamos la información clínica y administrativa necesaria para respaldar el cobro de las cuentas médicas y facilitar los procesos de conciliación o reclamación.",
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
          Nuestro equipo acompaña a IPS, hospitales, clínicas, laboratorios,
          centros médicos y demás prestadores de servicios de salud en procesos
          de recuperación de cartera hospitalaria, conciliaciones con EPS,
          gestión de glosas, seguimiento de cuentas por cobrar, validación de
          facturación médica y estrategias jurídicas para el recaudo de
          recursos. Trabajamos con un enfoque integral que combina análisis
          documental, conocimiento normativo y experiencia en el sector salud
          para reducir la antigüedad de la cartera, fortalecer el flujo de caja
          y mejorar los indicadores de recuperación financiera de cada
          institución.
        </p>
      </motion.div>
    </section>
  );
}
