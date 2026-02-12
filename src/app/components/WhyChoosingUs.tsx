import styles from "../styles/WhyChoosingUs.module.css";

export default function WhyChoosingUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Por Qué Elegir PRAVICE ABOGADOS?</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                src="/icon-team.jpg"
                alt="Equipo jurídico especializado en salud"
              />
            </div>
            <h3>Equipo Jurídico Especializado en Salud</h3>
            <p>
              Nuestros abogados conocen profundamente la normativa sectorial,
              los procesos administrativos de EPS, ADRES y entidades
              territoriales. No somos cobradores tradicionales, somos estrategas
              jurídicos del sector salud.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                src="/icon-cert.jpg"
                alt="Certificación Superintendencia Nacional de Salud"
              />
            </div>
            <h3>Certificación Superintendencia Nacional de Salud</h3>
            <p>
              Cumplimos todos los requisitos técnicos, éticos y operativos
              exigidos por el ente regulador. Esta certificación garantiza que
              nuestros procesos cumplen los más altos estándares del sector.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                src="/icon-demand.jpg"
                alt="Solidez en presentación de demandas"
              />
            </div>
            <h3>Solidez en Presentación de Demandas</h3>
            <p>
              Cada demanda es construida con rigor técnico y probatorio.
              Nuestros escritos judiciales están diseñados para resistir
              excepciones y acelerar los procesos hacia sentencia favorable.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                src="/icon-strategy.jpg"
                alt="Recuperación eficiente y personalizada"
              />
            </div>
            <h3>Recuperación Eficiente y Personalizada</h3>
            <p>
              Entendemos que cada institución tiene necesidades diferentes.
              Diseñamos estrategias adaptadas a su realidad operativa,
              prioridades financieras y capacidad de gestión documental.
            </p>
          </div>
        </div>

        <div className={styles.highlight}>
          <div className={styles.highlightLine}></div>
          <p>
            <strong>Menos demandas, más resultados.</strong> Nuestra filosofía
            es judicializar solo cuando es estratégicamente necesario,
            priorizando siempre el recaudo efectivo sobre la actividad procesal
            sin propósito.
          </p>
        </div>
      </div>
    </section>
  );
}
