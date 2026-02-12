import styles from "../styles/ProblemSection.module.css";

export default function ProblemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          El Problema Real del Sector Salud en Colombia
        </h2>

        <div className={styles.grid}>
          {/* Columna izquierda */}
          <div className={styles.leftBox}>
            <p className={styles.highlight}>
              El problema no es que no le deban
            </p>
            <p className={styles.highlightStrong}>
              El problema es que no le pagan
            </p>
          </div>

          {/* Columna derecha */}
          <div className={styles.rightContent}>
            <p className={styles.intro}>
              Las instituciones de salud en Colombia enfrentan desafíos críticos
              que amenazan su sostenibilidad financiera y operativa. Estos no
              son problemas aislados, sino una realidad sistémica que afecta el
              flujo de caja y la capacidad de prestación del servicio.
            </p>

            <div className={styles.item}>
              <h3>Glosas que nunca cierran</h3>
              <p>
                Procesos de revisión interminables que inmovilizan recursos
                durante meses o años
              </p>
            </div>

            <div className={styles.item}>
              <h3>ADRES sin respuesta definitiva</h3>
              <p>
                Trámites administrativos que se extienden sin cronogramas claros
                de pago
              </p>
            </div>

            <div className={styles.item}>
              <h3>EPS que dilatan sistemáticamente</h3>
              <p>
                Estrategias de postergación que envejecen la cartera y debilitan
                la posición jurídica
              </p>
            </div>

            <div className={styles.item}>
              <h3>Riesgo inminente de prescripción</h3>
              <p>
                Pérdida definitiva del derecho de cobro por vencimiento de
                términos legales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
