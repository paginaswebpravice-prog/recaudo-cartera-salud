"use client";
import styles from "../styles/FinalCtaSection.module.css";

export default function FinalCtaSection() {
  return (
    <section className={styles.section}>
      {/* TITULO SUPERIOR */}
      <h2 className={styles.mainTitle}>
        Recuperar Cartera no es Litigar. Es Proteger la Sostenibilidad de su
        Institución.
      </h2>

      <p className={styles.intro}>
        Cada peso de cartera sin recaudar es un servicio de salud que prestó y
        no le pagaron. Es inversión en equipos, personal, insumos y estructura
        que comprometió su flujo de caja. En PRAVICE ABOGADOS entendemos que
        recuperar cartera es defender la viabilidad financiera de su operación.
      </p>

      {/* CONTENEDOR DOS COLUMNAS */}
      <div className={styles.grid}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.leftBox}>
          <h3>No permita que la cartera envejecida ahogue su institución</h3>

          <p>
            El tiempo corre en su contra. Cada día que pasa sin gestión
            estratégica es un día más cerca de la prescripción. Cada mes sin
            recaudo es un mes más de deterioro en su flujo de caja.
          </p>

          <p className={styles.bold}>
            Actúe ahora. Agende su diagnóstico estratégico sin costo.
          </p>
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.rightBox}>
          <h3 className={styles.company}>PRAVICE ABOGADOS S.A.S.</h3>
          <p className={styles.area}>
            Área de Recuperación de Cartera en Salud
          </p>

          <ul className={styles.list}>
            <li>Certificados ante Superintendencia Nacional de Salud</li>
            <li>Cobertura nacional en Colombia</li>
            <li>Equipo especializado en sector salud</li>
            <li>Modelo de comisión por resultados</li>
            <li>Estrategia doble carril ejecutivo/declarativo</li>
          </ul>

          <button className={styles.button}>
            Agendar diagnóstico gratuito
          </button>
        </div>
      </div>

      {/* FRASE FINAL */}
      <p className={styles.quote}>
        “La cartera vencida no es un problema contable. Es un problema de
        supervivencia institucional. Y la supervivencia requiere acción
        estratégica inmediata.”
      </p>
    </section>
  );
}
