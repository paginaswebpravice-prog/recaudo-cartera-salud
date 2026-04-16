"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function EtapasCobroCarteraEPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Guía estratégica</span>

          <h1 className={styles.title}>
            Cobro de cartera EPS en Colombia: etapas para un recaudo efectivo
          </h1>

          <p className={styles.subtitle}>
            Estrategia integral para IPS, clínicas y prestadores de salud en
            Bogotá y Colombia que buscan recuperar cartera vencida frente a EPS
            mediante gestión administrativa y acciones jurídicas efectivas.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Cobro de cartera EPS en el sector salud en Colombia</h2>

          <p>
            El cobro de cartera a EPS en Colombia es un proceso crítico para la
            sostenibilidad financiera de IPS, clínicas y prestadores de salud.
          </p>

          <p>
            En ciudades como Bogotá, la acumulación de cartera vencida impacta
            directamente el flujo de caja y la operación de las instituciones.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Etapa 1: Diagnóstico y segmentación de la cartera</h2>

          <p>
            Se analiza antigüedad, radicación, saldos, glosas y riesgo de
            prescripción para definir estrategia de cobro.
          </p>

          <p>
            Esto permite priorizar cartera exigible en IPS y clínicas en
            Colombia.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Etapa 2: Cobro prejurídico estructurado</h2>

          <p>
            Se realizan requerimientos formales de pago y negociaciones con
            trazabilidad.
          </p>

          <p>
            Esta etapa permite recuperar cartera sin necesidad de proceso
            judicial.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Etapa 3: Proceso ejecutivo</h2>

          <p>
            Cuando la obligación es exigible, se inicia proceso ejecutivo con
            mandamiento de pago.
          </p>

          <p>
            Esto permite activar medidas judiciales para garantizar el recaudo.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Etapa 4: Medidas cautelares</h2>

          <p>
            Se identifican cuentas, activos y fuentes de pago para embargos
            estratégicos.
          </p>

          <p>
            Esto aumenta la probabilidad de recuperación efectiva de cartera en
            Colombia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Una estrategia integral marca la diferencia</h2>

          <p>
            El éxito no depende solo de demandar, sino de estructurar todo el
            proceso de recuperación.
          </p>

          <p>
            Las IPS que aplican estrategia integral logran mayor recaudo en el
            sector salud.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            PRAVICE no compra cartera. La recupera mediante estrategias legales
            en Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
