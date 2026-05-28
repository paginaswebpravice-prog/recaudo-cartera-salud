"use client";

import { motion } from "framer-motion";
import styles from "../styles/HonorariosSection.module.css";

export default function HonorariosSection() {
  return (
    <section className={styles.section} id="honorarios">
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
          Modelo financiero orientado a recuperación efectiva
        </motion.span>

        {/* TÍTULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Esquema de Honorarios para Gestión de Cartera Hospitalaria y Cuentas
          Médicas
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Diseñamos modelos de acompañamiento orientados a IPS, clínicas,
          hospitales y proveedores médicos que buscan fortalecer procesos de
          recaudo, conciliación y organización de cartera frente a EPS y
          entidades del sector salud colombiano.
        </motion.p>

        <div className={styles.content}>
          {/* LEFT SIDE */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.circleWrapper}>
              <motion.div
                className={styles.circle}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  IPS
                </motion.span>
              </motion.div>
            </div>

            <p className={styles.comision}>
              Estrategias adaptadas al flujo financiero hospitalario
            </p>

            <p className={styles.bold}>
              Modelos estructurados para acompañar procesos de conciliación,
              recaudo y fortalecimiento documental.
            </p>

            {/* BOX ENLACE MADRE */}
            <div className={styles.supportBox}>
              <p>Para recuperación de cartera empresarial en otros sectores:</p>

              <a
                href="https://recaudodecartera.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer soluciones generales de recaudo →
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className={styles.right}
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
            <motion.h3
              className={styles.subtitle}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Acompañamiento Estratégico para Cartera del Sector Salud
            </motion.h3>

            <motion.p
              className={styles.description}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Cada institución de salud posee necesidades diferentes en materia
              de conciliación, validación documental, cuentas médicas y gestión
              de cartera. Por ello, estructuramos esquemas ajustados al tamaño,
              complejidad y comportamiento financiero de cada operación.
            </motion.p>

            <div className={styles.cards}>
              {[
                {
                  title: "Modelos ajustados al sector salud",
                  text: "Las estrategias se adaptan a la realidad operativa y financiera de IPS y hospitales.",
                },
                {
                  title: "Seguimiento técnico y documental",
                  text: "La gestión incorpora trazabilidad, control documental y validación de soportes.",
                },
                {
                  title: "Enfoque orientado a sostenibilidad",
                  text: "Las acciones buscan fortalecer liquidez y optimizar procesos de recaudo institucional.",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.fullCard}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.01 }}
            >
              <h4>Transparencia y control operativo</h4>

              <p>
                Implementamos seguimiento detallado de conciliaciones,
                validaciones documentales y avances estratégicos relacionados
                con cartera hospitalaria y cuentas médicas.
              </p>
            </motion.div>

            <motion.p
              className={styles.bottomText}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              La especialización en cartera del sector salud permite construir
              procesos más eficientes para IPS, clínicas y hospitales que
              requieren fortalecer su capacidad de recuperación financiera y
              organización documental.
            </motion.p>
          </motion.div>
        </div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Sitio especializado en gestión de cartera hospitalaria, conciliación
          con EPS, cuentas médicas, validación documental y estrategias de
          recuperación financiera para IPS y hospitales en Colombia. Complementa
          soluciones generales de recaudo empresarial mediante enfoque exclusivo
          para el sector salud.
        </p>
      </motion.div>
    </section>
  );
}
