import styles from "../page.module.css";

export default function ProblemSection() {
  return (
    <section className={styles.section} aria-labelledby="problem-title">
      <div className={styles.container}>
        <h2 id="problem-title">Problemática del Sector</h2>

        <p>
          Las instituciones prestadoras de servicios de salud enfrentan retrasos
          significativos en el pago de cuentas médicas, generando impacto
          directo en el flujo de caja y la sostenibilidad financiera.
        </p>

        <p>
          La complejidad normativa, los procesos administrativos prolongados y
          las objeciones sistemáticas dificultan la recuperación efectiva de la
          cartera.
        </p>
      </div>
    </section>
  );
}
