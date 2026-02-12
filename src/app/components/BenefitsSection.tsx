import styles from "../styles/BeneficioSection.module.css";

export default function BeneficioSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Beneficio Estratégico para su Empresa</h2>

        <p className={styles.subtitle}>
          La App PRAVICE convierte la gestión jurídica en un sistema medible,
          transparente, controlable y trazable. Funciona como su departamento
          jurídico externalizado, con acceso permanente.
        </p>

        <div className={styles.grid}>
          {/* Columna izquierda */}
          <div className={styles.left}>
            <div className={styles.sideCard}>
              <div className={styles.icon}></div>
              <div>
                <h3>Visibilidad</h3>
                <p>Control en tiempo real de todos sus procesos</p>
              </div>
            </div>

            <div className={styles.sideCard}>
              <div className={styles.icon}></div>
              <div>
                <h3>Trazabilidad</h3>
                <p>Historial completo documentado</p>
              </div>
            </div>

            <div className={styles.sideCard}>
              <div className={styles.icon}></div>
              <div>
                <h3>Eficiencia</h3>
                <p>Decisiones informadas basadas en datos</p>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className={styles.right}>
            <h3 className={styles.sectionTitle}>Enfoque Empresarial</h3>

            <div className={styles.infoCard}>
              <h4>Proyectar recaudo</h4>
              <p>Anticipe flujos de caja basados en estado procesal</p>
            </div>

            <div className={styles.infoCard}>
              <h4>Medir desempeño jurídico</h4>
              <p>Indicadores de gestión y tiempos procesales</p>
            </div>

            <div className={styles.infoCard}>
              <h4>Detectar cuellos de botella</h4>
              <p>Identifique retrasos y tome acción correctiva</p>
            </div>

            <div className={styles.infoCard}>
              <h4>Tomar decisiones informadas</h4>
              <p>Información completa para estrategia financiera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
