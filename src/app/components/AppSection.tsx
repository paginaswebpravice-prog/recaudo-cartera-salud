"use client";

import { motion } from "framer-motion";
import styles from "../styles/AppSection.module.css";

export default function AppSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
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
          APP LEGAL PRAVICE: Control Total de su Cartera y Procesos Jurídicos,
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
          La App Legal PRAVICE no es un simple portal de consulta...
        </motion.p>

        <motion.p
          className={styles.description}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Diseñada para empresas, IPS, gerencias financieras y compañías...
        </motion.p>

        {/* GRID */}
        <motion.div className={styles.grid}>
          {[
            {
              title: "Seguimiento 24 horas a sus procesos",
              text: "Acceda en cualquier momento al estado actualizado de procesos ejecutivos y declarativos...",
            },
            {
              title: "Solicitud de asesorías online",
              text: "Desde la misma plataforma puede solicitar asesoría jurídica inmediata...",
            },
            {
              title: "Chat jurídico directo",
              text: "La App incluye un chat interno exclusivo para solicitudes en tiempo real...",
            },
            {
              title: "Carga y gestión de documentos",
              text: "Adjunte directamente facturas electrónicas, contratos, pagarés...",
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
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
