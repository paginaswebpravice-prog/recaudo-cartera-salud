"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/OfficeLocation.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";

export default function OfficeLocation() {
  return (
    <section className={styles.section} id="ubicacion">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestra Ubicación</h2>

          <p className={styles.description}>
            Nuestro equipo jurídico atiende procesos de recuperación de cartera
            en todo el país. Nuestra oficina principal se encuentra ubicada en
            Colombia y desde aquí gestionamos procesos de recaudo para IPS,
            clínicas y hospitales.
          </p>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.addressCard}>
          <h3>Oficina Principal</h3>

          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} /> Consultoría Jurídica en
            Recaudo de Cartera
          </p>
        </div>
      </div>
    </section>
  );
}
