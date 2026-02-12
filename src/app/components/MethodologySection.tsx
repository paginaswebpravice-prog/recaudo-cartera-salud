import styles from "../styles/MethodologySection.module.css";

export default function MethodologySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Metodología PRAVICE: 4 Fases para el Recaudo Efectivo
        </h2>

        <p className={styles.intro}>
          Nuestro proceso está diseñado para maximizar la recuperación mientras
          minimizamos el desgaste judicial innecesario. Cada fase tiene
          objetivos medibles y entregables específicos que garantizan
          transparencia y control total para nuestros clientes.
        </p>

        <div className={styles.grid}>
          <div className={styles.phase}>
            <span className={styles.number}>01</span>
            <div className={styles.line}></div>
            <h3>Diagnóstico y Segmentación Estratégica</h3>
            <p>
              Construcción de matriz maestra de cartera. Clasificación por ruta
              procesal óptima. Análisis de riesgo de prescripción por
              obligación. Identificación de facturas con mejor probabilidad de
              recaudo inmediato.
            </p>
          </div>

          <div className={styles.phase}>
            <span className={styles.number}>02</span>
            <div className={styles.line}></div>
            <h3>Gestión Prejurídica Estratégica</h3>
            <p>
              Requerimiento formal técnicamente estructurado. Mesas de trabajo
              con deudores dispuestos a negociar. Acuerdos de pago con garantías
              reales. Documentación que fortalece la posición judicial futura.
            </p>
          </div>

          <div className={styles.phase}>
            <span className={styles.number}>03</span>
            <div className={styles.line}></div>
            <h3>Judicialización Inteligente</h3>
            <p>
              Procesos ejecutivos homogéneos para agilizar trámite. Demandas
              declarativas con construcción probatoria robusta. Solicitud
              inmediata de medidas cautelares. Seguimiento activo de términos
              procesales.
            </p>
          </div>

          <div className={styles.phase}>
            <span className={styles.number}>04</span>
            <div className={styles.line}></div>
            <h3>Seguimiento y Control Continuo</h3>
            <p>
              Indicadores de recaudo actualizados mensualmente. Reportes
              periódicos con estado por factura. Trazabilidad documental
              completa. Comunicación permanente con el cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
