import styles from "../styles/SolutionSection.module.css";

export default function SolutionSection() {
  return (
    <section className={styles.section} id="solucion">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Nuestra Solución: Estrategia Doble Carril
        </h2>

        <p className={styles.intro}>
          En PRAVICE ABOGADOS entendemos que no toda la cartera es igual.
          Mezclar rutas procesales es el error más común y costoso en
          recuperación de cartera en salud. Nuestra metodología separa
          estratégicamente cada tipo de obligación para maximizar el recaudo.
        </p>

        {/* CARRILES VISUALES */}
        <div className={styles.lanes}>
          <div className={styles.lane}>Carril 1 - Ejecutivo</div>
          <div className={styles.lane}>Carril 2 - Declarativo</div>
        </div>

        {/* DESCRIPCIÓN DE CARRILES */}
        <div className={styles.grid}>
          <div>
            <h3>Carril 1 - Ejecutivo</h3>
            <p>
              Para facturas exigibles con título ejecutivo claro. Sin glosa
              efectiva o con glosa rechazada. Proceso rápido con medidas
              cautelares inmediatas para asegurar el patrimonio del deudor y
              acelerar el pago.
            </p>
          </div>

          <div>
            <h3>Carril 2 - Declarativo</h3>
            <p>
              Para cartera glosada, repetitiva o improcedente según el deudor.
              Construcción probatoria detallada por cada factura. Reconstrucción
              técnica de la prestación del servicio con soporte médico y
              administrativo robusto.
            </p>
          </div>
        </div>

        {/* TARJETAS INFERIORES */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Medidas cautelares preventivas</h4>
            <p>Aseguramiento patrimonial antes de sentencia</p>
          </div>

          <div className={styles.card}>
            <h4>Construcción probatoria por factura</h4>
            <p>Cada obligación con su expediente completo</p>
          </div>

          <div className={styles.card}>
            <h4>Control contable permanente</h4>
            <p>Trazabilidad financiera en tiempo real</p>
          </div>

          <div className={styles.card}>
            <h4>Investigación patrimonial del deudor</h4>
            <p>Identificación de activos ejecutables</p>
          </div>
        </div>
      </div>
    </section>
  );
}
