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
        {/* BADGE */}
        <motion.span
          className={styles.badge}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Experiencia enfocada en instituciones y proveedores del sector salud
        </motion.span>

        {/* TITLE */}
        <motion.h2
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Instituciones y Organizaciones del Sector Salud que Requieren Gestión
          Estratégica de Cartera
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Trabajamos con organizaciones del sector salud que necesitan
          fortalecer procesos de conciliación, validación documental y gestión
          financiera frente a EPS, aseguradoras y entidades relacionadas con el
          sistema de salud colombiano.
        </motion.p>

        {/* SUPPORT BOX */}
        <motion.div
          className={styles.supportBox}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Para procesos generales de recuperación de cartera empresarial en
            otros sectores económicos:
          </p>

          <a
            href="https://recaudodecartera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar sitio especializado en recaudo empresarial →
          </a>
        </motion.div>

        {/* GRID */}
        <motion.div className={styles.grid}>
          {[
            {
              img: "/IpsClinicas.jpg",
              alt: "IPS y clínicas en Colombia",
              title: "IPS y Clínicas",
              text: "Instituciones prestadoras de servicios de salud que requieren fortalecer conciliaciones, organización documental y procesos de cartera frente a EPS y aseguradoras.",
            },
            {
              img: "/Hospitales.jpg",
              alt: "Hospitales públicos y privados",
              title: "Hospitales Públicos y Privados",
              text: "Centros hospitalarios con procesos administrativos, glosas médicas y cuentas por gestionar dentro del ecosistema financiero del sector salud.",
            },
            {
              img: "/Tecnologia.jpg",
              alt: "Empresas proveedoras de tecnología médica",
              title: "Proveedores de Tecnologías en Salud",
              text: "Empresas relacionadas con dispositivos médicos, tecnología hospitalaria y servicios especializados vinculados a facturación y cuentas médicas.",
            },
            {
              img: "/Laboratorio.jpg",
              alt: "Laboratorios clínicos y centros de diagnóstico",
              title: "Prestadores de Servicios Especializados",
              text: "Laboratorios, centros diagnósticos y prestadores especializados que requieren mejorar trazabilidad y gestión de cartera institucional.",
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

        {/* HIGHLIGHT */}
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
            <strong>Especialización enfocada en el sector salud:</strong>{" "}
            Entendemos dinámicas relacionadas con glosas médicas,
            conciliaciones, cuentas hospitalarias, auditoría documental y
            procesos administrativos asociados a IPS, EPS y entidades del
            sistema de salud colombiano.
          </p>
        </motion.div>

        {/* SEO TEXT */}
        <p className={styles.seoText}>
          Sitio especializado en gestión de cartera hospitalaria, conciliaciones
          con EPS, cuentas médicas y validación documental para IPS, hospitales,
          laboratorios y proveedores del sector salud en Colombia. Complementa
          servicios generales de recuperación de cartera empresarial mediante un
          enfoque exclusivo para el sector salud.
        </p>
      </motion.div>
    </section>
  );
}
