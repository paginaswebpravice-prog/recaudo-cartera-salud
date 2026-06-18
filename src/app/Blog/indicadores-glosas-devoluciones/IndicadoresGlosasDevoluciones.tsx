"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function IndicadoresGlosasDevoluciones() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Indicadores financieros para IPS</span>

          <h1 className={styles.title}>
            Indicadores de glosas y devoluciones que toda IPS debe medir en
            Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca los KPIs más importantes para controlar glosas,
            devoluciones, calidad de facturación y recuperación de cartera en
            IPS, clínicas y hospitales colombianos.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Por qué medir indicadores de glosas y devoluciones?</h2>

          <p>
            Las glosas y devoluciones representan uno de los principales riesgos
            financieros para las IPS en Colombia. Cuando una entidad no mide
            adecuadamente sus indicadores, resulta difícil identificar errores
            recurrentes, cuantificar pérdidas y establecer planes de mejora que
            permitan aumentar el recaudo efectivo.
          </p>

          <p>
            Los indicadores de gestión permiten conocer el desempeño de los
            procesos de facturación, auditoría y respuesta a glosas, facilitando
            la toma de decisiones estratégicas para reducir la cartera vencida y
            fortalecer el flujo de caja.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI #1: Porcentaje de glosas sobre facturación radicada</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>Valor glosado ÷ Valor total facturado × 100</p>
          </div>

          <p>
            Este indicador muestra qué porcentaje de la producción facturada fue
            objetada por las EPS. Un aumento constante puede indicar problemas
            en procesos asistenciales, documentales o administrativos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI #2: Porcentaje de devoluciones</h2>

          <p>
            Permite medir la cantidad de cuentas rechazadas antes de iniciar el
            proceso formal de auditoría. Las devoluciones suelen reflejar
            problemas en documentación, soportes o requisitos de radicación.
          </p>

          <ul className={styles.checklist}>
            <li>Detecta errores tempranos de facturación.</li>
            <li>Permite mejorar procesos de radicación.</li>
            <li>Reduce retrasos en el recaudo.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI #3: Índice de aceptación de respuestas a glosas</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>
              Valor recuperado por respuestas aceptadas ÷ Valor total glosado ×
              100
            </p>
          </div>

          <p>
            Este indicador permite evaluar la efectividad del equipo encargado
            de responder glosas y recuperar recursos objetados por las EPS.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI #4: Tiempo promedio de respuesta a glosas</h2>

          <p>
            Mide el número de días que tarda la IPS en responder una glosa desde
            su recepción. Un tiempo excesivo puede generar pérdida de términos,
            dificultades probatorias y retrasos en el recaudo.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI #5: Valor recuperado por gestión de glosas</h2>

          <p>
            Este indicador permite conocer cuánto dinero logra recuperar la IPS
            después de los procesos de respuesta, conciliación y auditoría.
          </p>

          <p>
            Es uno de los KPIs más importantes para medir el impacto económico
            de la gestión de cartera y glosas.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI #6: Principales causas de glosas</h2>

          <p>
            Clasificar las glosas por tipo permite identificar patrones y
            establecer acciones preventivas.
          </p>

          <ul className={styles.checklist}>
            <li>Glosas administrativas.</li>
            <li>Glosas por pertinencia clínica.</li>
            <li>Glosas por autorizaciones.</li>
            <li>Glosas por documentación incompleta.</li>
            <li>Glosas por facturación electrónica.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI #7: Cartera asociada a glosas pendientes</h2>

          <p>
            Permite cuantificar cuánto dinero permanece retenido por glosas que
            aún no han sido resueltas.
          </p>

          <p>
            Este indicador ayuda a proyectar riesgos financieros y priorizar
            estrategias de recuperación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI #8: Porcentaje de glosas recurrentes</h2>

          <p>
            Cuando una misma causa aparece repetidamente, la organización puede
            estar enfrentando una falla estructural en sus procesos.
          </p>

          <p>
            Analizar este indicador permite implementar mejoras permanentes y no
            solamente acciones correctivas aisladas.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI #9: Tiempo promedio de recuperación de cartera glosada</h2>

          <p>
            Mide cuánto tarda una IPS en convertir nuevamente en ingresos una
            cuenta inicialmente objetada.
          </p>

          <p>
            Cuanto menor sea este tiempo, mayor será la eficiencia financiera de
            la institución.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI #10: Impacto financiero de glosas y devoluciones</h2>

          <p>
            Este indicador integra el valor total afectado por glosas,
            devoluciones, rechazos y pagos pendientes para medir el impacto
            global sobre la liquidez institucional.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Beneficios de monitorear estos indicadores</h2>

          <ul className={styles.checklist}>
            <li>Disminución de glosas y devoluciones.</li>
            <li>Mayor recuperación de cartera.</li>
            <li>Mejor flujo de caja.</li>
            <li>Mayor control financiero.</li>
            <li>Optimización de procesos de auditoría.</li>
            <li>Mejor negociación con EPS.</li>
            <li>Incremento de la rentabilidad institucional.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Indicadores clave para fortalecer la gestión financiera de una IPS
          </h2>

          <p>
            Las IPS que monitorean permanentemente indicadores de glosas y
            devoluciones tienen mayores probabilidades de reducir pérdidas,
            optimizar sus procesos de facturación y mejorar la recuperación de
            recursos provenientes de EPS y demás entidades pagadoras.
          </p>

          <p>
            La medición constante, acompañada de auditorías preventivas y planes
            de mejora, permite construir organizaciones más sostenibles y
            financieramente sólidas dentro del sistema de salud colombiano.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en recuperación de cartera, gestión de glosas,
            conciliaciones, auditoría de cuentas médicas y procesos jurídicos
            contra EPS.
          </p>
        </footer>
      </article>
    </main>
  );
}
