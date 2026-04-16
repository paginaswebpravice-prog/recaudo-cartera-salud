"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function MedidasCautelaresEPS() {
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
            Medidas cautelares para cobro de cartera a EPS en Colombia
          </h1>

          <p className={styles.subtitle}>
            Estrategias jurídicas para IPS, clínicas y prestadores de salud en
            Bogotá y Colombia que buscan asegurar el recaudo efectivo mediante
            embargos e investigación patrimonial.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Cobro de cartera a EPS en Colombia: la importancia de las medidas
            cautelares
          </h2>

          <p>
            Las medidas cautelares son fundamentales para garantizar el pago en
            procesos de cobro de cartera a EPS en Colombia.
          </p>

          <p>
            No basta con demandar: es necesario asegurar activos desde etapas
            tempranas del proceso ejecutivo.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Qué son las medidas cautelares?</h2>

          <p>
            Son decisiones judiciales que permiten asegurar bienes o recursos
            del deudor para garantizar el cumplimiento de una obligación.
          </p>

          <p>
            En el sector salud, estas medidas aceleran el pago y reducen riesgos
            de evasión.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Embargos más efectivos contra EPS</h2>

          <ul className={styles.checklist}>
            <li>Embargo de cuentas bancarias</li>
            <li>Embargo de créditos</li>
            <li>Embargo de bienes registrables</li>
            <li>Retención de recursos contractuales</li>
          </ul>

          <p>
            Elegir correctamente estas medidas mejora el recaudo y reduce
            tiempos.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Investigación patrimonial</h2>

          <p>Permite identificar activos y fuentes de ingreso del deudor.</p>

          <p>
            Es clave para solicitar embargos efectivos y evitar medidas
            inútiles.
          </p>
        </section>

        <section className={styles.sectionHighlight}>
          <h2>Estrategia cautelar desde el inicio</h2>

          <p>La estrategia debe incluir medidas cautelares desde la demanda.</p>

          <p>Esto maximiza la probabilidad de recaudo efectivo en Colombia.</p>
        </section>

        <section className={styles.section}>
          <h2>Recuperación efectiva de cartera EPS</h2>

          <p>
            Integrar medidas cautelares en la estrategia jurídica aumenta el
            recaudo y reduce pérdidas en el sector salud.
          </p>
        </section>
      </article>
    </main>
  );
}
