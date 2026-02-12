import styles from "../styles/HonorariosSection.module.css";

export default function HonorariosSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Modelo de Honorarios: Alineación Total con sus Resultados
        </h2>

        <div className={styles.content}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <div className={styles.circleWrapper}>
              <div className={styles.circle}>
                <span>10%</span>
              </div>
            </div>

            <p className={styles.comision}>Comisión sobre recaudo efectivo</p>
            <p className={styles.bold}>PRAVICE gana cuando usted cobra.</p>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            <h3 className={styles.subtitle}>
              Transparencia y Alineación de Intereses
            </h3>

            <p className={styles.description}>
              Nuestro modelo de honorarios elimina cualquier conflicto de
              interés. Solo cobramos el 10% sobre el valor que efectivamente
              ingresa a sus cuentas. Esto significa que nuestro esfuerzo está
              completamente alineado con su objetivo: recuperar su dinero.
            </p>

            <div className={styles.cards}>
              <div className={styles.card}>
                <h4>Sin costos ocultos</h4>
                <p>No hay pagos iniciales ni cuotas mensuales</p>
              </div>

              <div className={styles.card}>
                <h4>Sin riesgo financiero</h4>
                <p>Solo paga cuando recuperamos su cartera</p>
              </div>

              <div className={styles.card}>
                <h4>Incentivo al recaudo rápido</h4>
                <p>Nuestro modelo nos impulsa a conseguir resultados ágiles</p>
              </div>
            </div>

            <div className={styles.fullCard}>
              <h4>Reportes de comisión claros</h4>
              <p>Cada pago con su detalle y cálculo transparente</p>
            </div>

            <p className={styles.bottomText}>
              Este esquema ha demostrado ser el más efectivo en recuperación de
              cartera, porque garantiza que trabajamos con la misma intensidad
              en cada peso que usted necesita cobrar. No nos interesa prolongar
              procesos sin sentido, sino lograr recaudos concretos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
