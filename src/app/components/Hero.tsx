"use client";

import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h1>
          Su cartera en salud no es un problema jurídico. Es un problema de
          recaudo.
        </h1>

        <p>
          Recuperación estratégica de cartera para IPS, clínicas, hospitales y
          proveedores del sector salud en Colombia. Enfoque doble carril,
          comisión por resultados y cobertura nacional.
        </p>

        <div className={styles.buttons}>
          <a href="#contacto" className={styles.primaryBtn}>
            Solicitar diagnóstico estratégico
          </a>

          <a href="#metodologia" className={styles.secondaryBtn}>
            Conocer nuestra metodología
          </a>
        </div>
      </div>
    </section>
  );
}
