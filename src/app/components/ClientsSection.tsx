"use client";

import { motion } from "framer-motion";
import styles from "../styles/ClientsSection.module.css";

export default function ClientsSection() {
  return (
    <section className={styles.section} id="clientes">
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
        {/* TITLE SEO */}
        <motion.h2
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Nuestros Clientes en el Sector Salud en Colombia
        </motion.h2>

        {/* INTRO OPTIMIZADO */}
        <motion.p
          className={styles.intro}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Representamos instituciones prestadoras de servicios de salud con
          cartera pendiente frente a EPS, ADRES y entidades públicas. Nuestra
          experiencia en cobro jurídico y recuperación de cartera hospitalaria
          nos permite adaptarnos a la estructura financiera y regulatoria de
          cada organización.
        </motion.p>

        {/* GRID */}
        <motion.div className={styles.grid}>
          {[
            {
              img: "/IpsClinicas.jpg",
              alt: "IPS y clínicas en Colombia con cartera en EPS",
              title: "IPS y Clínicas",
              text: "Instituciones prestadoras de servicios de salud con cuentas por cobrar frente a EPS, ADRES y aseguradoras.",
            },
            {
              img: "/Hospitales.jpg",
              alt: "Hospitales públicos y privados en Colombia",
              title: "Hospitales Públicos y Privados",
              text: "Centros hospitalarios de mediana y alta complejidad con cartera acumulada y procesos de glosas.",
            },
            {
              img: "/Tecnologia.jpg",
              alt: "Empresas proveedoras de tecnología médica",
              title: "Proveedores de Tecnologías en Salud",
              text: "Empresas que suministran dispositivos médicos, equipos diagnósticos y servicios especializados al sistema.",
            },
            {
              img: "/Laboratorio.jpg",
              alt: "Laboratorios clínicos y centros de diagnóstico",
              title: "Prestadores de Servicios Especializados",
              text: "Laboratorios clínicos, centros de diagnóstico y otras entidades con facturación pendiente ante aseguradoras.",
            },
          ].map((client, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <motion.img
                src={client.img}
                alt={client.alt}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              <h3>{client.title}</h3>
              <p>{client.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* HIGHLIGHT ESTRATÉGICO */}
        <motion.div
          className={styles.highlight}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.icon}>▣</span>
          <p>
            <strong>Especialización sectorial real:</strong> Conocemos la
            regulación del sistema de salud colombiano, los procesos de
            auditoría, las glosas, los recobros y las dinámicas financieras
            entre IPS, EPS y entidades estatales.
          </p>
        </motion.div>

        {/* TEXTO SEO OCULTO */}
        <p className={styles.seoText}>
          Abogados especializados en recuperación de cartera para IPS,
          hospitales, laboratorios y proveedores del sector salud en Colombia.
          Cobro jurídico a EPS, ADRES y aseguradoras bajo modelo de comisión por
          éxito.
        </p>
      </motion.div>
    </section>
  );
}
