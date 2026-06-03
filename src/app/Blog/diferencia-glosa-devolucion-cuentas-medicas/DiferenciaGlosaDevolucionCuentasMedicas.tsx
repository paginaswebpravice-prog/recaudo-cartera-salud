"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function DiferenciaGlosaDevolucionCuentasMedicas() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Guía práctica para IPS y prestadores de salud
          </span>

          <h1 className={styles.title}>
            Diferencia entre glosa y devolución en cuentas médicas en Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca las diferencias entre glosas y devoluciones en cuentas
            médicas en Colombia, cómo afectan la recuperación de cartera y qué
            estrategias implementar para reducir riesgos financieros en IPS y
            clínicas.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Qué son las glosas y devoluciones en cuentas médicas en Colombia
          </h2>

          <p>
            Las glosas y devoluciones son mecanismos utilizados por las EPS para
            objetar cuentas médicas presentadas por IPS, clínicas y prestadores
            de servicios de salud en Colombia.
          </p>

          <p>
            Aunque muchas veces se confunden, ambas figuras tienen diferencias
            importantes en términos administrativos, financieros y jurídicos,
            especialmente en el proceso de recuperación de cartera.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Diferencia entre glosa y devolución en cuentas médicas</h2>

          <div className={styles.box}>
            <h3>Qué es una glosa</h3>

            <p>
              La glosa es una objeción parcial o total realizada por la EPS
              frente a determinados servicios, valores o soportes incluidos en
              una factura médica.
            </p>

            <p>
              En estos casos, la cuenta médica ya fue radicada y aceptada para
              revisión, pero la EPS identifica inconsistencias clínicas,
              administrativas o financieras que cuestionan el pago.
            </p>

            <h3>Qué es una devolución</h3>

            <p>
              La devolución ocurre cuando la EPS rechaza la cuenta médica antes
              de iniciar el proceso formal de auditoría o revisión, generalmente
              por incumplimiento de requisitos básicos de radicación.
            </p>

            <p>
              Esto significa que la cuenta no entra oficialmente al proceso de
              validación hasta que la IPS corrija los errores identificados.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Principales causas de glosas en IPS y clínicas en Colombia</h2>

          <ul className={styles.checklist}>
            <li>Errores de facturación</li>
            <li>Falta de soportes clínicos</li>
            <li>Inconsistencias en autorizaciones</li>
            <li>Diferencias tarifarias</li>
            <li>Servicios considerados no pertinentes</li>
            <li>Problemas de auditoría médica</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Principales causas de devolución de cuentas médicas</h2>

          <ul className={styles.checklist}>
            <li>Radicación fuera de tiempos establecidos</li>
            <li>Documentación incompleta</li>
            <li>Errores en datos del paciente</li>
            <li>Falta de anexos obligatorios</li>
            <li>Problemas de validación administrativa</li>
            <li>Inconsistencias formales en la factura</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Cómo afectan las glosas y devoluciones el flujo financiero de una
            IPS
          </h2>

          <p>
            Tanto las glosas como las devoluciones generan retrasos en pagos,
            aumento de cartera vencida y dificultades operativas para IPS y
            clínicas en Colombia.
          </p>

          <p>
            Cuando no existe un control adecuado sobre facturación y auditoría,
            las instituciones pueden acumular pérdidas significativas y afectar
            su sostenibilidad financiera.
          </p>

          <ul className={styles.checklist}>
            <li>Retrasos en recuperación de cartera</li>
            <li>Aumento de costos administrativos</li>
            <li>Dificultades de flujo de caja</li>
            <li>Mayor riesgo financiero</li>
            <li>Incremento de cuentas pendientes de pago</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cómo reducir glosas y devoluciones en cuentas médicas</h2>

          <p>
            La mejor estrategia para disminuir glosas y devoluciones es
            fortalecer los procesos de auditoría preventiva, validación
            documental y control de facturación antes de radicar cuentas ante
            las EPS.
          </p>

          <p>
            También es importante capacitar permanentemente al personal
            administrativo y clínico sobre requisitos documentales, tiempos y
            procedimientos de radicación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Qué hacer si la EPS mantiene glosas o rechaza nuevamente la cuenta
          </h2>

          <p>
            Cuando las glosas persisten o la EPS continúa rechazando cuentas
            médicas, las IPS pueden iniciar procesos de conciliación,
            reclamaciones formales o estrategias jurídicas para recuperar la
            cartera pendiente.
          </p>

          <p>
            Actuar oportunamente es fundamental para evitar acumulación de mora
            y proteger el flujo financiero de la institución.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Ayuda a IPS, clínicas y
            prestadores de salud en Colombia a recuperar cartera mediante
            estrategias jurídicas, conciliaciones y procesos efectivos de
            recaudo frente a EPS.
          </p>
        </footer>
      </article>
    </main>
  );
}
