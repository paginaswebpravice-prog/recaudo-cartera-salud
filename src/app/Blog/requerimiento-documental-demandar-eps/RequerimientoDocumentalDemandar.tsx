"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function RequerimientoDocumentalDemandar() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Checklist legal de demanda EPS</span>

          <h1 className={styles.title}>
            Documentos para demandar una EPS por cartera en Colombia: checklist
            completo para ganar el proceso ejecutivo
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y prestadores de salud en Bogotá y
            Colombia que buscan estructurar demandas sólidas y evitar errores
            que hacen perder el caso.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Por qué un expediente mal estructurado puede hacerle perder la
            demanda contra una EPS
          </h2>

          <p>
            Iniciar procesos sin documentación completa es uno de los errores
            más frecuentes en Colombia.
          </p>

          <p>
            Un expediente incompleto genera inadmisiones y retrasos en el
            recaudo.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Checklist de documentos obligatorios para demandar una EPS en
            Colombia
          </h2>

          <ul className={styles.checklist}>
            <li>Factura (PDF y XML si aplica)</li>
            <li>Prueba de radicación</li>
            <li>Soportes clínicos y administrativos</li>
            <li>Soportes de pagos parciales</li>
            <li>Relación consolidada de cartera</li>
          </ul>

          <p>
            Esta documentación permite demostrar la obligación y su
            exigibilidad.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Errores más comunes que hacen fracasar demandas contra EPS en
            Colombia
          </h2>

          <p>Demandas inadmitidas por falta de soportes o inconsistencias.</p>

          <p>Estos errores debilitan la posición jurídica frente a la EPS.</p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Qué revisar antes de demandar una EPS (evite perder el caso)</h2>

          <p>
            Verificar exigibilidad, controlar prescripción y definir estrategia.
          </p>

          <p>Evaluar medidas cautelares mediante investigación patrimonial.</p>
        </section>

        <section className={styles.sectionHighlight}>
          <h2>
            Expedientes sólidos: la diferencia entre ganar o perder una demanda
            EPS
          </h2>

          <p>
            Una demanda bien estructurada permite avanzar más rápido en el
            proceso ejecutivo.
          </p>

          <p>Improvisar puede generar pérdidas de tiempo y dinero.</p>
        </section>

        <section className={styles.section}>
          <h2>
            Cómo aumentar la probabilidad de recaudo en demandas contra EPS
          </h2>

          <p>
            Documentación completa = mayor probabilidad de recaudo en Colombia.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>
              Estructure correctamente su expediente para maximizar el recaudo.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
