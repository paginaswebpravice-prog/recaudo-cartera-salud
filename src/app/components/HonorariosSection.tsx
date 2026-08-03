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
          Modelo de acompañamiento adaptado a IPS, clínicas y hospitales
        </motion.span>

        {/* TÍTULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Cómo funciona nuestro modelo de honorarios para la recuperación de
          cartera hospitalaria?
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Cada institución de salud enfrenta necesidades diferentes en materia
          de recuperación de cartera. Por esta razón no trabajamos con esquemas
          estandarizados. Analizamos el volumen de la cartera, el estado de las
          cuentas médicas, la existencia de glosas, las conciliaciones
          pendientes y la complejidad del proceso para proponer un modelo de
          acompañamiento ajustado a la realidad operativa y financiera de cada
          IPS, clínica u hospital.
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
              Modelos de trabajo diseñados según las necesidades de cada
              institución
            </p>

            <p className={styles.bold}>
              Cada propuesta busca ofrecer un acompañamiento transparente,
              organizado y alineado con los objetivos de recuperación de
              cartera, conciliación con EPS, gestión de glosas y fortalecimiento
              documental.
            </p>

            {/* BOX ENLACE MADRE */}
            <div className={styles.supportBox}>
              <p>
                ¿Buscas recuperar cartera empresarial en un sector diferente al
                de salud?
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
              ¿Cómo definimos el modelo de acompañamiento para cada cliente?
            </motion.h3>

            <motion.p
              className={styles.description}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Cada IPS, clínica u hospital presenta características diferentes.
              Algunas instituciones requieren acompañamiento para conciliaciones
              con EPS, otras necesitan fortalecer la gestión documental,
              responder glosas médicas o avanzar en procesos jurídicos de
              recuperación. Analizamos estas variables para estructurar un
              modelo de trabajo claro, flexible y adaptado a los objetivos de
              cada organización.
            </motion.p>

            <div className={styles.cards}>
              {[
                {
                  title: "Acompañamiento ajustado a cada institución",
                  text: "No aplicamos soluciones idénticas para todos los clientes. Evaluamos el estado de la cartera, la documentación disponible y las necesidades específicas antes de definir la estrategia de trabajo.",
                },
                {
                  title: "Seguimiento técnico, jurídico y documental",
                  text: "Cada actuación incorpora control documental, seguimiento permanente y análisis técnico para facilitar la recuperación de cuentas médicas y mejorar la organización de la cartera.",
                },
                {
                  title: "Orientados a resultados sostenibles",
                  text: "Nuestro objetivo es contribuir al fortalecimiento del flujo de caja mediante procesos organizados que permitan mejorar el recaudo y optimizar la gestión financiera de la institución.",
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
              <h4>Transparencia durante todo el proceso</h4>

              <p>
                Mantenemos un seguimiento permanente del estado de la cartera,
                las conciliaciones adelantadas, la evolución de cada caso y las
                actuaciones realizadas, permitiendo que la institución tenga
                visibilidad sobre el avance del proceso y la información
                necesaria para la toma de decisiones.
              </p>
            </motion.div>

            <motion.p
              className={styles.bottomText}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Cada proceso de recuperación de cartera requiere una estrategia
              diferente. Nuestro objetivo es ofrecer un acompañamiento que
              combine experiencia técnica, conocimiento jurídico y una gestión
              organizada para aumentar las posibilidades de recuperación de
              recursos y fortalecer la estabilidad financiera de IPS, clínicas,
              hospitales y demás prestadores de servicios de salud.
            </motion.p>
          </motion.div>
        </div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Nuestro modelo de acompañamiento está orientado a instituciones que
          requieren recuperar cartera hospitalaria de forma organizada,
          transparente y adaptada a sus necesidades. Trabajamos con IPS,
          hospitales, clínicas, laboratorios y demás prestadores de servicios de
          salud en procesos de conciliación con EPS, gestión de glosas,
          seguimiento de cuentas por cobrar, validación documental y estrategias
          jurídicas para fortalecer el recaudo. Cada propuesta se estructura de
          acuerdo con las características de la cartera y los objetivos
          financieros de la institución, priorizando la sostenibilidad y la
          mejora del flujo de caja.
        </p>
      </motion.div>
    </section>
  );
}
