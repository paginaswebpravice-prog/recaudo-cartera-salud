"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function ComoRecuperarCarteraEPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Guía práctica sector salud</span>

          <h1 className={styles.title}>
            Cómo recuperar la cartera de las EPS en Colombia
          </h1>

          <p className={styles.subtitle}>
            Estrategia jurídica aplicada para IPS, clínicas y proveedores de
            salud en Bogotá y Colombia: desde el cobro prejurídico hasta el
            proceso ejecutivo con enfoque en recaudo efectivo.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Cobro de cartera a EPS en Colombia: el reto del sector salud</h2>

          <p>
            El cobro de cartera a EPS en Colombia es uno de los principales
            desafíos financieros para IPS, clínicas y proveedores de servicios
            de salud, especialmente en ciudades como Bogotá donde la operación
            asistencial es más alta.
          </p>

          <p>
            Una estrategia adecuada permite transformar cuentas en mora en
            ingresos reales y evitar pérdidas por prescripción o negociaciones
            desfavorables.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>El problema real en el recaudo de cartera EPS</h2>

          <p>
            En Colombia, las EPS suelen retrasar pagos mediante glosas,
            auditorías extensas e inconsistencias documentales.
          </p>

          <p>
            Sin estrategia legal, muchas IPS acumulan cartera envejecida que
            pierde valor.
          </p>

          <p>
            La clave está en identificar cartera exigible y activar mecanismos
            jurídicos oportunos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Etapas estratégicas para recuperar cartera EPS en Colombia</h2>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <span>1</span>
              <h3>Diagnóstico y control de términos</h3>
              <p>
                Análisis de antigüedad, radicación, saldos y riesgo de
                prescripción.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>2</span>
              <h3>Cobro prejurídico estructurado</h3>
              <p>
                Requerimientos formales, negociación y acuerdos con
                trazabilidad.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>3</span>
              <h3>Proceso ejecutivo con medidas cautelares</h3>
              <p>
                Demanda ejecutiva, mandamiento de pago y embargos para recaudo.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Modelo de carta de cobro prejurídico a EPS</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Asunto:</strong> Requerimiento formal de pago - Cartera
              vencida sector salud
            </p>

            <p>
              Señores
              <br />
              [Nombre EPS]
              <br />
              Área de Cartera - Colombia
            </p>

            <p>
              Se requiere el pago de facturas relacionadas en anexo por valor de
              $______.
            </p>

            <p>Solicitud de pago dentro de cinco (5) días hábiles.</p>

            <p>
              En caso de incumplimiento, se iniciarán acciones legales en
              Colombia.
            </p>
          </div>
        </section>

        <section className={styles.sectionHighlight}>
          <h2>El proceso ejecutivo: la vía más efectiva</h2>

          <ul className={styles.highlightList}>
            <li>Mandamiento de pago</li>
            <li>Embargo de cuentas</li>
            <li>Consignaciones judiciales</li>
            <li>Acuerdos de pago</li>
          </ul>

          <p className={styles.statement}>
            PRAVICE no compra cartera. Implementa estrategias legales de recaudo
            en Colombia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Errores comunes en el cobro de cartera en salud</h2>

          <ul className={styles.checklist}>
            <li>No separar cartera exigible</li>
            <li>Falta de trazabilidad documental</li>
            <li>Prescripción de obligaciones</li>
            <li>No planear medidas cautelares</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Recuperación de cartera EPS en Bogotá y Colombia</h2>

          <p>
            La recuperación de cartera requiere gestión administrativa y
            acciones jurídicas oportunas en Colombia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Preguntas frecuentes</h2>

          <details className={styles.faq}>
            <summary>¿Cuándo iniciar proceso ejecutivo?</summary>
            <p>Cuando la obligación es clara, expresa y exigible.</p>
          </details>

          <details className={styles.faq}>
            <summary>¿Funciona el cobro prejurídico?</summary>
            <p>Sí, si está bien estructurado.</p>
          </details>

          <details className={styles.faq}>
            <summary>¿PRAVICE compra cartera?</summary>
            <p>No, solo recuperación legal.</p>
          </details>
        </section>
      </article>
    </main>
  );
}
