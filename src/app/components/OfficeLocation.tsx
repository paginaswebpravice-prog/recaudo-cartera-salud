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
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Nuestra Ubicación</h2>

          <p className={styles.description}>
            Nuestro equipo jurídico atiende procesos de recuperación de cartera
            en todo el país. Nuestra oficina principal se encuentra ubicada en
            Colombia y desde aquí gestionamos procesos de recaudo para IPS,
            clínicas y hospitales.
          </p>
        </motion.div>

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

        <motion.div
          className={styles.addressCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Oficina Principal</h3>

          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
          </p>

          <p>
            <FontAwesomeIcon icon={faBuilding} /> Consultoría Jurídica en
            Recaudo de Cartera
          </p>
        </motion.div>
      </div>
    </section>
  );
}
