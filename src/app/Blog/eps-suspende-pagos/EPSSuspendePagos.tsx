"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function EPSSuspendePagos() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Riesgos, Intervenciones y Crisis de EPS
          </span>

          <h1 className={styles.title}>
            Qué hacer si una EPS suspende pagos de manera inesperada
          </h1>

          <p className={styles.subtitle}>
            Guía para IPS, clínicas y hospitales en Colombia sobre las acciones
            jurídicas, financieras y operativas que deben implementarse cuando
            una EPS deja de pagar de forma repentina y pone en riesgo la
            estabilidad financiera de los prestadores.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            ¿Qué implica la suspensión inesperada de pagos por parte de una EPS?
          </h2>

          <p>
            La suspensión repentina de pagos por parte de una EPS puede generar
            impactos inmediatos en el flujo de caja de las IPS, clínicas,
            hospitales y demás prestadores de servicios de salud. En muchos
            casos, esta situación se presenta antes de medidas de vigilancia
            especial, intervención o incluso procesos de liquidación.
          </p>

          <p>
            Cuando una EPS deja de cumplir oportunamente con sus obligaciones,
            los prestadores pueden enfrentar dificultades para cubrir nómina,
            proveedores, obligaciones tributarias y gastos operativos
            esenciales.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Primeras acciones que debe realizar una IPS</h2>

          <ul className={styles.checklist}>
            <li>Identificar el valor exacto de la cartera pendiente.</li>
            <li>Clasificar la deuda por edades de vencimiento.</li>
            <li>Verificar facturas radicadas y pendientes de auditoría.</li>
            <li>Consolidar soportes documentales de la cartera.</li>
            <li>Solicitar explicaciones formales a la EPS.</li>
            <li>Documentar todas las comunicaciones realizadas.</li>
            <li>Actualizar el estado de conciliaciones y acuerdos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Importancia de fortalecer la evidencia documental</h2>

          <p>
            Antes de iniciar cualquier estrategia de recuperación es fundamental
            contar con soportes completos. Facturas, radicaciones,
            conciliaciones, respuestas a glosas, acuerdos de pago y
            comunicaciones oficiales pueden convertirse en elementos clave para
            futuras reclamaciones administrativas o judiciales.
          </p>

          <p>
            Una documentación organizada permite actuar con mayor rapidez y
            reduce riesgos durante procesos de cobro prejurídico o ejecutivo.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Medidas financieras para proteger el flujo de caja</h2>

          <ul className={styles.checklist}>
            <li>Actualizar proyecciones de liquidez.</li>
            <li>Priorizar gastos críticos de operación.</li>
            <li>Revisar compromisos financieros vigentes.</li>
            <li>Evaluar fuentes alternativas de financiación.</li>
            <li>Fortalecer el recaudo con otros pagadores.</li>
            <li>Reducir gastos no esenciales temporalmente.</li>
            <li>Diversificar fuentes de ingreso institucional.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Cuándo iniciar acciones jurídicas?</h2>

          <p>
            Cuando la suspensión de pagos se prolonga y no existe una solución
            verificable, puede ser necesario evaluar mecanismos jurídicos para
            recuperar la cartera. La viabilidad de cada estrategia dependerá de
            la documentación disponible, la antigüedad de la deuda y las
            características particulares de cada obligación.
          </p>

          <p>
            Una actuación temprana suele ofrecer mejores oportunidades de
            recuperación que esperar largos periodos sin implementar medidas de
            protección patrimonial.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Señales que pueden indicar una crisis más profunda</h2>

          <p>
            La suspensión de pagos suele estar acompañada por otros indicadores
            de deterioro financiero. Entre ellos se encuentran retrasos
            recurrentes, incumplimientos de acuerdos, reducción de capacidad
            operativa, incremento de reclamaciones y dificultades para responder
            requerimientos de los prestadores.
          </p>

          <p>
            Detectar estas señales permite anticipar escenarios de mayor riesgo
            y fortalecer las medidas preventivas antes de que la situación se
            agrave.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Plan de contingencia recomendado para IPS y hospitales</h2>

          <div className={styles.letterBox}>
            <p>
              Toda institución de salud debería contar con un protocolo para
              responder ante incumplimientos de pago significativos. Dicho plan
              debe incluir monitoreo permanente de cartera, análisis de riesgo
              por pagador, estrategias de recuperación temprana, medidas de
              control financiero y mecanismos de seguimiento jurídico para
              proteger la sostenibilidad de la organización.
            </p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en la recuperación de cartera, gestión de riesgos
            financieros y estrategias jurídicas frente a EPS con incumplimientos
            o suspensión de pagos.
          </p>
        </footer>
      </article>
    </main>
  );
}
