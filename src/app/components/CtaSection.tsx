import styles from "../page.module.css";

export default function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2>Solicite una evaluación institucional</h2>

        <p>
          Nuestro equipo analizará su cartera y propondrá una estrategia
          personalizada para su institución.
        </p>

        <a href="#contacto" className={styles.ctaButton}>
          Solicitar contacto
        </a>
      </div>
    </section>
  );
}
