import styles from "../page.module.css";

export default function SolutionSection() {
  return (
    <section className={styles.sectionAlt} aria-labelledby="solution-title">
      <div className={styles.container}>
        <h2 id="solution-title">Nuestra Solución</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Auditoría Técnica de Cartera</h3>
            <p>
              Evaluación integral de cuentas médicas, soportes y procesos
              administrativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Gestión Prejurídica y Jurídica</h3>
            <p>
              Representación estratégica ante entidades responsables de pago,
              incluyendo cobro persuasivo y acciones judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliaciones Sectoriales</h3>
            <p>
              Participación en mesas de conciliación y estructuración de
              acuerdos de pago sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
