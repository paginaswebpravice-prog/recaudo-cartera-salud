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
          App Legal PRAVICE: Control Total de su Cartera y Procesos Jurídicos
          24/7
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
          La App Legal PRAVICE es nuestra plataforma tecnológica exclusiva
          diseñada para que IPS, hospitales y empresas del sector salud
          supervisen en tiempo real el estado de sus procesos de recuperación de
          cartera frente a EPS, ADRES y entidades públicas.
        </motion.p>

        <motion.p
          className={styles.description}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Más que un portal de consulta, es una herramienta estratégica de
          transparencia y trazabilidad jurídica que permite acceso permanente a
          reportes, documentos y comunicación directa con nuestro equipo
          especializado en cobro judicial del sector salud.
        </motion.p>

        {/* GRID */}
        <motion.div className={styles.grid}>
          {[
            {
              title: "Seguimiento 24/7 a procesos judiciales",
              text: "Acceda en cualquier momento al estado actualizado de demandas ejecutivas y actuaciones procesales.",
            },
            {
              title: "Solicitud de asesorías online",
              text: "Realice consultas jurídicas directamente desde la plataforma con respuesta oportuna.",
            },
            {
              title: "Chat jurídico directo y seguro",
              text: "Comunicación interna con el equipo legal encargado de su cartera.",
            },
            {
              title: "Gestión digital de documentos",
              text: "Cargue facturas electrónicas, contratos, pagarés y soportes para iniciar procesos de cobro.",
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
          Para conocer el funcionamiento completo de la plataforma, visualice
          nuestra demostración oficial haciendo clic en
          <strong> “Ver Video de la App Legal PRAVICE”</strong>. El contenido se
          abrirá en una nueva ventana.
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
          App jurídica para seguimiento de procesos de cobro a EPS en Colombia.
          Plataforma digital para recuperación de cartera hospitalaria y control
          de demandas del sector salud.
        </p>
      </motion.div>
    </section>
  );
}
