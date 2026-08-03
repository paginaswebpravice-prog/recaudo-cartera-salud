"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/AppSection.module.css";

export default function AppSection() {
  return (
    <section className={styles.section} id="app-legal">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* TITLE */}
        <motion.h2
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          App Legal PRAVICE: plataforma para el seguimiento de la recuperación
          de cartera hospitalaria y procesos jurídicos
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          La App Legal PRAVICE es una plataforma desarrollada para que IPS,
          clínicas, hospitales y demás prestadores de servicios de salud puedan
          consultar en un solo lugar el estado de sus procesos de recuperación
          de cartera, conciliaciones, actuaciones jurídicas y documentación
          relacionada. Nuestro propósito es que cada cliente tenga acceso
          permanente a la información de sus casos, con mayor transparencia,
          trazabilidad y control durante todo el proceso.
        </motion.p>

        <motion.p
          className={styles.description}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Más que una plataforma de consulta, la App Legal PRAVICE funciona como
          un espacio de trabajo donde nuestros clientes pueden revisar
          documentos, consultar avances, realizar solicitudes, hacer seguimiento
          a cada actuación y mantener una comunicación directa con el equipo
          encargado de la recuperación de cartera. Esto permite una gestión
          mucho más organizada, disminuye tiempos de respuesta y facilita la
          toma de decisiones basada en información actualizada.
        </motion.p>

        {/* GRID */}
        <motion.div className={styles.grid}>
          {[
            {
              title: "Seguimiento en tiempo real de la recuperación de cartera",
              text: "Consulte el estado actualizado de conciliaciones, procesos jurídicos, actuaciones y demás gestiones relacionadas con la recuperación de cartera hospitalaria desde cualquier lugar.",
            },
            {
              title: "Solicitudes y asesoría jurídica en línea",
              text: "Realice consultas directamente desde la plataforma, envíe requerimientos y haga seguimiento a las respuestas del equipo encargado de su caso.",
            },
            {
              title: "Comunicación segura con nuestro equipo",
              text: "Mantenga contacto permanente con los profesionales responsables de la gestión de su cartera mediante un canal privado, seguro y organizado.",
            },
            {
              title: "Centralización y gestión documental",
              text: "Almacene y consulte facturas, contratos, soportes, pagarés y demás documentos necesarios para la gestión de conciliaciones y procesos de recuperación de cartera.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* VIDEO DESCRIPTION */}
        <motion.p
          className={styles.videoNote}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Descubra cómo funciona la App Legal PRAVICE y conozca las herramientas
          que permiten realizar seguimiento a la recuperación de cartera,
          consultar documentación, revisar actuaciones y mantener comunicación
          directa con nuestro equipo. Haga clic en{" "}
          <strong>"Ver Video de la App Legal PRAVICE"</strong> para visualizar
          una demostración de la plataforma.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.buttonGroup}>
            {/* LOGIN BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://legalapp.pravice.co/login.php"
                className={styles.ctaButton}
                target="_blank"
              >
                🚀 Ingresar a la App Legal PRAVICE
              </Link>
            </motion.div>

            {/* VIDEO BUTTON */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1IIEGEpqNm_FiPhvKKWBSnr_iLbDXcBWV/view"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoButton}
            >
              ▶ Ver Video de la App Legal PRAVICE
            </motion.a>
          </div>
        </motion.div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          La App Legal PRAVICE es una plataforma desarrollada para facilitar el
          seguimiento de la recuperación de cartera hospitalaria, conciliaciones
          con EPS, procesos jurídicos, cuentas médicas y documentación
          relacionada. IPS, hospitales, clínicas, laboratorios y demás
          prestadores de servicios de salud pueden consultar el estado de sus
          casos, acceder a reportes, revisar soportes y mantener una
          comunicación permanente con nuestro equipo, fortaleciendo la
          transparencia, el control de la información y la gestión integral de
          la cartera.
        </p>
      </motion.div>
    </section>
  );
}
