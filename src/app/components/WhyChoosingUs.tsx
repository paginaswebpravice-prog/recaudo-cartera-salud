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
      title: "Experiencia enfocada exclusivamente en el sector salud",
      text: "Trabajamos con IPS, hospitales, clínicas, laboratorios y demás prestadores de servicios de salud, comprendiendo los retos que generan las glosas, las conciliaciones con EPS, la facturación médica y la recuperación de cuentas por cobrar dentro del sistema de salud colombiano.",
    },
    {
      icon: faShieldHalved,
      title: "Estrategias adaptadas a la normativa del sector salud",
      text: "Cada proceso se desarrolla teniendo en cuenta el marco normativo, la documentación disponible y el estado de la cartera, buscando que cada actuación se encuentre debidamente soportada y orientada a incrementar las posibilidades de recuperación.",
    },
    {
      icon: faScaleBalanced,
      title: "Análisis jurídico y documental para cada cuenta médica",
      text: "Antes de definir una estrategia revisamos la documentación clínica y administrativa, evaluamos las glosas existentes y determinamos el camino más adecuado para lograr el reconocimiento y pago de las obligaciones.",
    },
    {
      icon: faChartLine,
      title: "Procesos orientados a mejorar el flujo de caja",
      text: "Nuestro objetivo no es únicamente recuperar recursos pendientes. También buscamos contribuir a una gestión más organizada de la cartera, disminuir la antigüedad de las cuentas por cobrar y fortalecer la sostenibilidad financiera de la institución.",
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
          Especialistas en recuperación de cartera para IPS, clínicas y
          hospitales
        </motion.span>

        {/* TITLE */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Por qué elegir una empresa especializada en recuperación de cartera
          para IPS, clínicas y hospitales?
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          La recuperación de cartera en el sector salud implica enfrentar
          glosas, auditorías, conciliaciones con EPS, diferencias en la
          validación de cuentas médicas y procesos administrativos que requieren
          experiencia técnica y jurídica. Contar con un equipo especializado
          permite identificar oportunidades de recuperación, fortalecer los
          soportes documentales, reducir riesgos y desarrollar estrategias
          orientadas a mejorar el flujo de caja y la estabilidad financiera de
          IPS, clínicas, hospitales y demás prestadores de servicios de salud en
          Colombia.
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
            ¿Necesitas recuperar cartera empresarial en un sector diferente al
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
              Recuperar cartera no consiste únicamente en cobrar; consiste en
              proteger la estabilidad financiera de la institución.
            </strong>{" "}
            Una gestión especializada permite priorizar las cuentas con mayor
            potencial de recuperación, fortalecer los soportes documentales,
            agilizar conciliaciones con EPS y desarrollar estrategias que
            contribuyan a mejorar el recaudo y el flujo de caja de IPS,
            clínicas, hospitales y demás prestadores de servicios de salud.
          </p>
        </motion.div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Somos un equipo especializado en recuperación de cartera hospitalaria,
          conciliaciones con EPS, gestión de glosas médicas, validación
          documental de facturación, seguimiento de cuentas por cobrar y
          estrategias jurídicas para IPS, hospitales, clínicas, laboratorios y
          demás prestadores de servicios de salud en Colombia. Nuestro enfoque
          combina análisis técnico, experiencia jurídica y acompañamiento
          permanente para fortalecer el recaudo, mejorar el flujo de caja y
          contribuir a la sostenibilidad financiera de las instituciones del
          sector salud.
        </p>
      </motion.div>
    </section>
  );
}
