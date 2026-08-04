"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/OfficeLocation.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";

export default function OfficeLocation() {
  return (
    <section className={styles.section} id="ubicacion">
      <div className={styles.container}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Oficina principal en Bogotá con atención para recuperación de
            cartera hospitalaria en toda Colombia
          </h2>

          <p className={styles.description}>
            Nuestra oficina principal está ubicada en Bogotá, desde donde
            coordinamos estrategias jurídicas de recuperación de cartera para
            IPS, clínicas, hospitales, laboratorios, proveedores de servicios
            médicos y demás organizaciones del sector salud en todo el
            territorio nacional. Gracias a nuestros procesos digitales y
            acompañamiento especializado, prestamos atención sin importar la
            ciudad donde se encuentre su institución.
          </p>

          <p className={styles.description}>
            Combinamos experiencia jurídica, análisis documental y conocimiento
            del sistema de salud colombiano para diseñar estrategias orientadas
            a recuperar cuentas médicas, atender procesos de conciliación con
            EPS, gestionar glosas y fortalecer el flujo financiero de nuestros
            clientes.
          </p>
        </motion.div>

        {/* MAPA */}
        <motion.div
          className={styles.mapWrapper}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* TARJETA */}
        <motion.div
          className={styles.addressCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>
            PRAVICE ABOGADOS S.A.S. | Oficina principal de recuperación de
            cartera en salud
          </h3>

          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Bogotá D.C., Colombia
          </p>

          <p>
            <FontAwesomeIcon icon={faBuilding} /> Área especializada en cobro
            jurídico a EPS, recuperación de cartera hospitalaria y cuentas
            médicas para IPS, clínicas, hospitales y prestadores de servicios de
            salud.
          </p>

          <p>
            Atendemos clientes en Bogotá, Medellín, Cali, Barranquilla,
            Bucaramanga, Cartagena, Pereira, Manizales, Cúcuta, Ibagué, Santa
            Marta, Villavicencio y demás municipios del país mediante atención
            presencial y virtual.
          </p>
        </motion.div>

        {/* TEXTO SEO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className={styles.description}>
            Si su institución necesita apoyo para recuperar cartera hospitalaria
            frente a EPS, gestionar cuentas médicas pendientes de pago,
            responder glosas o iniciar procesos judiciales de recuperación,
            nuestro equipo puede realizar un diagnóstico jurídico inicial para
            identificar las alternativas más adecuadas según las características
            de su cartera y la documentación disponible.
          </p>
        </motion.div>

        {/* SEO */}
        <p className={styles.seoText}>
          Oficina principal de abogados especializados en recuperación de
          cartera hospitalaria en Bogotá con cobertura nacional. Servicios de
          cobro jurídico a EPS, recuperación de cuentas médicas, conciliaciones,
          gestión de glosas, demandas contra EPS, procesos ejecutivos y
          declarativos para IPS, clínicas, hospitales, laboratorios y
          prestadores de servicios de salud en Colombia.
        </p>
      </div>
    </section>
  );
}
