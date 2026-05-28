"use client";

import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Overlay */}
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.88 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.18 },
          },
        }}
      >
        {/* BADGE */}
        <motion.span
          className={styles.badge}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Especialistas en cartera del sector salud en Colombia
        </motion.span>

        {/* TITULO PRINCIPAL */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Gestión y recuperación de cartera para IPS, clínicas y hospitales
          frente a EPS y entidades del sistema de salud
        </motion.h1>

        {/* DESCRIPCIÓN */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Acompañamos instituciones prestadoras de salud en procesos de
          conciliación, gestión de glosas, recuperación de cartera hospitalaria
          y estrategias jurídicas orientadas al flujo financiero del sector
          salud. Nuestro enfoque está especializado exclusivamente en IPS, EPS,
          hospitales, clínicas y proveedores médicos en Colombia.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          className={styles.buttons}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          {/* CTA PRINCIPAL */}
          <motion.a
            href="#contacto"
            className={styles.primaryBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar diagnóstico de cartera
          </motion.a>

          {/* CTA SECUNDARIO */}
          <motion.a
            href="#metodologia"
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver metodología especializada
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hablar con un especialista
          </motion.a>
        </motion.div>

        {/* BLOQUE SEO DE APOYO */}
        <div className={styles.supportBox}>
          <p>
            ¿Buscas soluciones generales de recuperación y recaudo de cartera
            empresarial?
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conocer firma especializada en recuperación de cartera →
          </a>
        </div>

        {/* TEXTO SEO */}
        <p className={styles.seoText}>
          Portal especializado en recuperación de cartera hospitalaria,
          conciliaciones con EPS, gestión de glosas, cobro de facturación médica
          y estrategias jurídicas aplicadas al sector salud en Colombia.
        </p>
      </motion.div>
    </section>
  );
}
