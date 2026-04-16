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

          <span className={styles.badge}>Proceso ejecutivo sector salud</span>

          <h1 className={styles.title}>
            Documentos para demandar una EPS por cartera en Colombia
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y prestadores de salud en Bogotá y
            Colombia que buscan estructurar demandas sólidas.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Importancia de un expediente bien estructurado</h2>

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
          <h2>Documentos mínimos por factura</h2>

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
          <h2>Errores comunes</h2>

          <p>Demandas inadmitidas por falta de soportes o inconsistencias.</p>

          <p>Estos errores debilitan la posición jurídica frente a la EPS.</p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Recomendaciones antes de demandar</h2>

          <p>
            Verificar exigibilidad, controlar prescripción y definir estrategia.
          </p>

          <p>Evaluar medidas cautelares mediante investigación patrimonial.</p>
        </section>

        <section className={styles.sectionHighlight}>
          <h2>Expedientes sin improvisación</h2>

          <p>
            Una demanda bien estructurada permite avanzar más rápido en el
            proceso ejecutivo.
          </p>

          <p>Improvisar puede generar pérdidas de tiempo y dinero.</p>
        </section>

        <section className={styles.section}>
          <h2>Preparación jurídica efectiva</h2>

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
