"use client";

import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Overlay animado sutil */}
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* TITULO */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Su cartera en salud no es un problema jurídico. Es un problema de
          recaudo.
        </motion.h1>

        {/* DESCRIPCIÓN */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Recuperación estratégica de cartera para IPS, clínicas, hospitales y
          proveedores del sector salud en Colombia. Enfoque doble carril,
          comisión por resultados y cobertura nacional.
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
          <motion.a
            href="#contacto"
            className={styles.primaryBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar diagnóstico estratégico
          </motion.a>

          <motion.a
            href="#metodologia"
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Conocer nuestra metodología
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
