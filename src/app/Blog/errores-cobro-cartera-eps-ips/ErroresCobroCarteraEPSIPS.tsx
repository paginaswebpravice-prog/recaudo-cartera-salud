"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function ErroresCobroCarteraEPSIPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Guía financiera y jurídica para IPS
          </span>

          <h1 className={styles.title}>
            Errores frecuentes que hacen perder dinero a las IPS en el cobro a
            EPS
          </h1>

          <p className={styles.subtitle}>
            Conozca los principales errores jurídicos, administrativos y
            documentales que afectan la recuperación de cartera y generan
            pérdidas financieras para IPS, clínicas y prestadores de salud en
            Colombia.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Por qué muchas IPS pierden dinero en el cobro de cartera a EPS
          </h2>

          <p>
            La recuperación de cartera en el sector salud no depende únicamente
            de que la EPS pague o no. En muchos casos, las propias IPS presentan
            errores administrativos, documentales o jurídicos que dificultan el
            recaudo y aumentan significativamente el riesgo financiero.
          </p>

          <p>
            Problemas en facturación, falta de seguimiento, glosas mal
            gestionadas y demoras en acciones legales son algunas de las causas
            más frecuentes que generan pérdidas económicas en clínicas,
            hospitales y prestadores de salud en Colombia.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Error #1: No hacer seguimiento permanente a la cartera vencida
          </h2>

          <div className={styles.box}>
            <p>
              Muchas IPS dejan acumular cuentas por meses sin implementar un
              control real de seguimiento y priorización de cartera.
            </p>

            <p>
              Cuando no existe monitoreo constante, las facturas vencidas
              aumentan, las conciliaciones se retrasan y el riesgo de pérdida de
              recursos se incrementa considerablemente.
            </p>

            <h3>Cómo evitarlo</h3>

            <ul className={styles.checklist}>
              <li>Implementar indicadores periódicos de recaudo</li>
              <li>Clasificar cartera por antigüedad</li>
              <li>Priorizar cuentas críticas</li>
              <li>Realizar seguimiento semanal a EPS morosas</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Error #2: Presentar facturas con errores o soportes incompletos
          </h2>

          <p>
            Las inconsistencias documentales son una de las principales causas
            de glosas y devoluciones en cuentas médicas en Colombia.
          </p>

          <p>
            Facturas mal radicadas, soportes clínicos incompletos o errores de
            validación generan retrasos importantes en los pagos y aumentan los
            costos administrativos de recuperación.
          </p>

          <ul className={styles.checklist}>
            <li>Verificar documentación antes de radicar</li>
            <li>Fortalecer auditoría interna</li>
            <li>Capacitar personal administrativo y asistencial</li>
            <li>Controlar tiempos y requisitos de facturación</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Error #3: No responder glosas oportunamente</h2>

          <p>
            Muchas IPS pierden recursos porque dejan vencer términos para
            responder glosas o no presentan argumentos técnicos y documentales
            suficientes frente a objeciones de las EPS.
          </p>

          <p>
            Una gestión inadecuada de glosas puede convertir cuentas
            recuperables en pérdidas financieras permanentes.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Error #4: Esperar demasiado tiempo antes de iniciar cobro jurídico
          </h2>

          <p>
            Algunas instituciones esperan durante años acuerdos informales o
            promesas de pago que nunca se cumplen, permitiendo que la cartera
            continúe deteriorándose.
          </p>

          <p>
            Cuando las EPS mantienen mora prolongada, es importante evaluar
            oportunamente estrategias de cobro prejurídico y acciones legales
            para proteger los recursos de la IPS.
          </p>

          <ul className={styles.checklist}>
            <li>Evitar acumulación excesiva de mora</li>
            <li>Formalizar requerimientos de pago</li>
            <li>Documentar incumplimientos de EPS</li>
            <li>Evaluar medidas cautelares cuando sea necesario</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Error #5: No tener control financiero ni análisis de riesgo</h2>

          <p>
            Muchas IPS dependen excesivamente de pocas EPS sin evaluar el nivel
            de riesgo financiero que representan para la institución.
          </p>

          <p>
            La falta de análisis financiero impide tomar decisiones preventivas
            frente a EPS con antecedentes de mora, intervención o problemas de
            liquidez.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Cómo reducir pérdidas financieras en el recaudo de cartera EPS
          </h2>

          <ul className={styles.checklist}>
            <li>Implementar auditoría preventiva de facturación</li>
            <li>Fortalecer trazabilidad documental</li>
            <li>Gestionar conciliaciones periódicas</li>
            <li>Iniciar cobro prejurídico oportunamente</li>
            <li>Monitorear indicadores financieros constantemente</li>
            <li>Actuar rápidamente frente a mora prolongada</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera EPS en Colombia con acompañamiento jurídico
          </h2>

          <p>
            La recuperación efectiva de cartera en salud requiere una estrategia
            integral que combine control administrativo, gestión financiera y
            acciones jurídicas oportunas frente a EPS morosas.
          </p>

          <p>
            Corregir errores internos y actuar preventivamente puede marcar la
            diferencia entre recuperar recursos o enfrentar pérdidas millonarias
            para IPS y clínicas en Colombia.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Ayuda a IPS, clínicas y
            prestadores de salud en Colombia a recuperar cartera mediante
            estrategias jurídicas, conciliaciones y procesos efectivos frente a
            EPS morosas.
          </p>
        </footer>
      </article>
    </main>
  );
}
