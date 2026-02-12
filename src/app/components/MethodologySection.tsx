import styles from "../page.module.css";

export default function MethodologySection() {
  return (
    <section className={styles.section} aria-labelledby="methodology-title">
      <div className={styles.container}>
        <h2 id="methodology-title">Metodología de Trabajo</h2>

        <ol className={styles.steps}>
          <li>
            <strong>Diagnóstico Inicial:</strong> Análisis integral de la
            cartera y priorización estratégica.
          </li>
          <li>
            <strong>Plan de Acción:</strong> Definición de ruta jurídica y
            administrativa personalizada.
          </li>
          <li>
            <strong>Ejecución y Seguimiento:</strong> Gestión permanente con
            informes técnicos periódicos.
          </li>
        </ol>
      </div>
    </section>
  );
}
