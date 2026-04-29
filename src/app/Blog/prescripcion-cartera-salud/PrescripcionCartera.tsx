"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function PrescripcionCarteraSalud() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Riesgo crítico en cartera EPS</span>

          <h1 className={styles.title}>
            Prescripción de cartera en salud en Colombia: cómo evitar perder
            millones por vencimiento del cobro
          </h1>

          <p className={styles.subtitle}>
            Estrategias legales para IPS, clínicas y prestadores de salud en
            Bogotá y Colombia que buscan evitar la pérdida del derecho de cobro
            frente a EPS.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Prescripción de cartera EPS en Colombia: el riesgo que puede hacerle
            perder todo el cobro
          </h2>

          <p>
            La prescripción es uno de los mayores riesgos financieros para IPS y
            clínicas en Colombia.
          </p>

          <p>
            Cuando se vencen los términos legales, se pierde el derecho de
            cobro.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            El error más costoso en el sector salud: no actuar antes del
            vencimiento
          </h2>

          <p>La falta de gestión oportuna reduce la probabilidad de recaudo.</p>

          <p>
            Muchas entidades confían en el pago sin activar mecanismos
            jurídicos.
          </p>

          <p>Esto puede llevar a la pérdida total de la cartera.</p>
        </section>

        <section className={styles.section}>
          <h2>
            Cómo evitar la prescripción de cartera en Colombia (guía práctica)
          </h2>

          <ul className={styles.checklist}>
            <li>Segmentar cartera por antigüedad</li>
            <li>Enviar requerimientos formales</li>
            <li>Documentar acuerdos de pago</li>
            <li>Iniciar proceso ejecutivo a tiempo</li>
            <li>Controlar términos legales</li>
          </ul>

          <p>Estas acciones protegen el derecho de cobro en Colombia.</p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Interrupción de la prescripción: cómo proteger legalmente su cartera
          </h2>

          <p>
            Puede lograrse mediante requerimientos formales o procesos
            judiciales.
          </p>

          <p>Por eso, la estrategia jurídica es clave en el sector salud.</p>
        </section>

        <section className={styles.sectionHighlight}>
          <h2>Estrategia preventiva para no perder cartera EPS en Colombia</h2>

          <p>
            La prescripción se evita con control temprano y acciones oportunas.
          </p>

          <p>No se debe esperar al vencimiento del término.</p>
        </section>

        <section className={styles.section}>
          <h2>
            Cómo proteger y maximizar el recaudo de cartera en el sector salud
          </h2>

          <p>
            Una estrategia adecuada permite maximizar el recaudo y reducir
            pérdidas.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>
              Proteja su derecho de cobro con estrategia legal en Colombia.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
