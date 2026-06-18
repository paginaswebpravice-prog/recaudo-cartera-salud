"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function EPSVigilanciaEspecial() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Riesgos e intervenciones de EPS en Colombia
          </span>

          <h1 className={styles.title}>
            EPS bajo vigilancia especial: qué significa para los prestadores de
            salud
          </h1>

          <p className={styles.subtitle}>
            Conozca qué implica que una EPS sea sometida a vigilancia especial,
            cuáles son las consecuencias para IPS, clínicas y hospitales en
            Colombia y qué medidas pueden adoptarse para proteger la cartera y
            reducir riesgos financieros.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué es una vigilancia especial sobre una EPS?</h2>

          <p>
            La vigilancia especial es una medida adoptada por la
            Superintendencia Nacional de Salud cuando identifica riesgos que
            pueden afectar la prestación de servicios, la estabilidad financiera
            o el cumplimiento de las obligaciones de una EPS.
          </p>

          <p>
            A diferencia de una intervención o liquidación, la EPS continúa
            operando normalmente, pero queda sometida a controles más estrictos,
            seguimiento permanente y planes de mejoramiento obligatorios.
          </p>

          <p>
            Para los prestadores de servicios de salud, esta situación suele ser
            una señal de alerta que exige fortalecer la gestión de cartera y el
            monitoreo financiero.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            ¿La vigilancia especial significa que la EPS va a desaparecer?
          </h2>

          <p>
            No necesariamente. La vigilancia especial busca corregir problemas
            antes de que la situación se agrave.
          </p>

          <p>
            Algunas EPS logran superar las observaciones realizadas por las
            autoridades y continúan operando con normalidad. Sin embargo,
            existen casos en los que los problemas persisten y posteriormente se
            adoptan medidas más severas como intervenciones administrativas o
            procesos de liquidación.
          </p>

          <p>
            Por ello, las IPS deben interpretar esta medida como una advertencia
            que requiere seguimiento constante.
          </p>
        </section>

        <section className={styles.section}>
          <h2>¿Cómo puede afectar la cartera de una IPS?</h2>

          <p>
            Cuando una EPS entra en vigilancia especial, muchas instituciones de
            salud comienzan a experimentar incertidumbre respecto a los tiempos
            de pago y al comportamiento futuro de la entidad.
          </p>

          <ul className={styles.checklist}>
            <li>Incremento de cartera vencida.</li>
            <li>Retrasos en pagos previamente programados.</li>
            <li>Mayor tiempo en conciliaciones financieras.</li>
            <li>Aumento de glosas y revisiones administrativas.</li>
            <li>Necesidad de fortalecer seguimiento documental.</li>
            <li>Riesgo de concentración financiera excesiva.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Impacto sobre la liquidez de hospitales y clínicas</h2>

          <p>
            Incluso cuando la EPS continúa funcionando, los retrasos en los
            pagos pueden afectar significativamente el flujo de caja de los
            prestadores.
          </p>

          <p>
            Los recursos pendientes de recaudo pueden limitar la capacidad de
            las IPS para atender obligaciones laborales, adquirir medicamentos,
            pagar proveedores y realizar inversiones necesarias para la
            operación.
          </p>

          <p>
            Por esta razón, las organizaciones con alta dependencia de una sola
            EPS suelen enfrentar mayores riesgos financieros.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Señales que una IPS debe monitorear</h2>

          <div className={styles.letterBox}>
            <p>
              Cuando una EPS se encuentra bajo vigilancia especial es
              recomendable monitorear permanentemente:
            </p>

            <ul className={styles.checklist}>
              <li>Cumplimiento de acuerdos de pago.</li>
              <li>Antigüedad de la cartera pendiente.</li>
              <li>Comportamiento de glosas y devoluciones.</li>
              <li>Tiempos promedio de recaudo.</li>
              <li>Noticias regulatorias y comunicados oficiales.</li>
              <li>Capacidad financiera de la EPS.</li>
              <li>Concentración de ingresos por pagador.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>¿Se pueden seguir realizando acciones de cobro?</h2>

          <p>
            Sí. La vigilancia especial no elimina ni suspende las obligaciones
            económicas de la EPS frente a los prestadores de servicios de salud.
          </p>

          <p>
            Las IPS pueden continuar adelantando procesos de conciliación,
            gestión prejurídica, reclamaciones administrativas y acciones
            judiciales cuando exista fundamento legal para ello.
          </p>

          <p>
            De hecho, mantener una gestión activa de cartera suele ser una de
            las mejores estrategias para reducir riesgos de recuperación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Medidas para reducir la exposición financiera</h2>

          <ul className={styles.checklist}>
            <li>Diversificar fuentes de ingreso.</li>
            <li>Reducir dependencia de una sola EPS.</li>
            <li>Fortalecer conciliaciones periódicas.</li>
            <li>Actualizar estados de cuenta constantemente.</li>
            <li>Controlar indicadores de cartera vencida.</li>
            <li>Implementar alertas tempranas de riesgo.</li>
            <li>Evaluar estrategias jurídicas oportunas.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>La importancia de actuar antes de una crisis mayor</h2>

          <p>
            Muchas IPS esperan hasta que una EPS entra en intervención o
            liquidación para fortalecer sus estrategias de recuperación de
            cartera.
          </p>

          <p>
            Sin embargo, las organizaciones financieramente más sólidas suelen
            actuar desde las primeras señales de riesgo, aprovechando periodos
            en los que todavía existen mayores posibilidades de negociación,
            conciliación y recuperación efectiva.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Gestión preventiva para proteger la sostenibilidad financiera</h2>

          <p>
            La vigilancia especial debe ser entendida como un indicador de
            riesgo que exige monitoreo constante, análisis financiero y
            fortalecimiento de las estrategias de recaudo.
          </p>

          <p>
            Una gestión preventiva permite a las IPS reducir la exposición a
            problemas futuros y mejorar su capacidad de respuesta frente a
            cambios dentro del sistema de salud colombiano.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en procesos de recuperación de cartera, conciliaciones,
            análisis de riesgo financiero, cobro jurídico y estrategias para
            proteger recursos frente a EPS con dificultades operativas o
            financieras.
          </p>
        </footer>
      </article>
    </main>
  );
}
