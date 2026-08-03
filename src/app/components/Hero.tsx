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
          Especialistas en recuperación de cartera para IPS, clínicas y
          hospitales en Colombia
        </motion.span>

        {/* TITULO PRINCIPAL */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Recuperación de cartera para IPS, clínicas y hospitales: conciliación
          con EPS, gestión de glosas y estrategias jurídicas especializadas
        </motion.h1>

        {/* DESCRIPCIÓN */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Ayudamos a IPS, hospitales, clínicas, laboratorios, centros médicos y
          demás prestadores de servicios de salud a recuperar cartera vencida,
          fortalecer el recaudo de cuentas por cobrar y optimizar el flujo de
          caja mediante procesos de conciliación con EPS, gestión integral de
          glosas, seguimiento permanente de cartera y acompañamiento jurídico
          especializado. Nuestro equipo trabaja exclusivamente con el sector
          salud, desarrollando estrategias adaptadas a la realidad financiera y
          normativa del sistema colombiano para incrementar la recuperación de
          recursos y reducir los tiempos de recaudo.
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
            Solicitar diagnóstico gratuito de cartera
          </motion.a>

          {/* CTA SECUNDARIO */}
          <motion.a
            href="#metodologia"
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Conocer nuestra metodología
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

        {/* BLOQUE SEO */}
        <div className={styles.supportBox}>
          <p>
            ¿Tu empresa necesita soluciones de recuperación de cartera fuera del
            sector salud?
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce nuestra firma especializada en recuperación y recaudo de
            cartera empresarial →
          </a>
        </div>

        {/* TEXTO SEO */}
        <p className={styles.seoText}>
          Somos especialistas en recuperación de cartera hospitalaria,
          conciliaciones con EPS, gestión de glosas, cobro de facturación
          médica, seguimiento de cuentas por cobrar, auditoría de cartera,
          negociación de acuerdos de pago y estrategias jurídicas para IPS,
          hospitales, clínicas, laboratorios, centros de diagnóstico y demás
          prestadores de servicios de salud en Colombia. Nuestro objetivo es
          mejorar el flujo de caja, acelerar el recaudo y fortalecer la
          sostenibilidad financiera de las instituciones del sector salud
          mediante procesos eficientes, medibles y orientados a resultados.
        </p>
      </motion.div>
    </section>
  );
}
