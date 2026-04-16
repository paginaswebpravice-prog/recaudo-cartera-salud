"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function CobroEntesTerritoriales() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Sector salud público</span>

          <h1 className={styles.title}>
            Cobro de cartera a entes territoriales en Colombia
          </h1>

          <p className={styles.subtitle}>
            Estrategia integral para IPS, clínicas y proveedores de salud en
            Bogotá y Colombia que buscan recuperar cartera vencida frente a
            secretarías de salud y entidades públicas.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Cobro de cartera en el sector salud público en Colombia</h2>

          <p>
            El cobro de cartera a entes territoriales en Colombia es un proceso
            complejo que afecta directamente la liquidez de IPS, clínicas y
            prestadores de servicios de salud. En ciudades como Bogotá, donde el
            volumen de atención es alto, la recuperación oportuna de estos
            recursos es clave para la sostenibilidad financiera del sector.
          </p>

          <p>
            A diferencia del cobro a EPS, este tipo de cartera requiere una
            estrategia especializada que combine gestión administrativa,
            conocimiento normativo y una adecuada preparación para un eventual
            cobro jurídico ante la jurisdicción contencioso-administrativa.
          </p>
        </section>

        <section className={styles.section}>
          <h2>¿Qué tipo de cartera se puede cobrar a entes territoriales?</h2>

          <p>
            En Colombia, las obligaciones a cargo de entes territoriales y
            secretarías de salud pueden originarse en diferentes conceptos
            dentro del sistema de salud:
          </p>

          <ul className={styles.checklist}>
            <li>Atención a población pobre no asegurada (PNA)</li>
            <li>Servicios y tecnologías NO PBS</li>
            <li>Recursos por esfuerzo propio de las entidades territoriales</li>
            <li>Eventos especiales o emergencias sanitarias</li>
            <li>Obligaciones contractuales o convenios interadministrativos</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Principales dificultades en el recaudo</h2>

          <p>
            Muchas IPS y clínicas en Bogotá y Colombia enfrentan barreras como
            demoras administrativas, falta de trazabilidad documental o
            inconsistencias en soportes.
          </p>

          <p>
            Sin una estrategia clara, el cobro de cartera en el sector salud
            público puede prolongarse durante años o perderse por errores en la
            estructuración del expediente.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cómo estructurar una estrategia efectiva de cobro</h2>

          <ul className={styles.checklist}>
            <li>
              Consolidación de soportes administrativos, clínicos y financieros
            </li>
            <li>Validación de la exigibilidad de las obligaciones</li>
            <li>Radicación formal y seguimiento ante la entidad pública</li>
            <li>Gestión de conciliaciones cuando son procedentes</li>
            <li>
              Preparación de demanda para cobro judicial ante la jurisdicción
              competente
            </li>
          </ul>

          <p>
            Este enfoque permite reducir riesgos, mejorar la trazabilidad y
            aumentar la probabilidad de recaudo efectivo.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Un expediente sólido marca la diferencia</h2>

          <div className={styles.letterBox}>
            <p>
              El éxito en el cobro de cartera a entes territoriales en Colombia
              depende de la calidad del expediente. La correcta estructuración
              de soportes, el análisis contractual y la estrategia jurídica son
              determinantes para lograr el pago.
            </p>

            <p>
              En el sector salud, improvisar en el cobro puede generar pérdidas
              significativas.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera en Bogotá y Colombia con respaldo legal
          </h2>

          <p>
            La recuperación de cartera en el sector salud público exige
            experiencia, estrategia y conocimiento del marco normativo
            colombiano.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> La recupera mediante
            estrategias legales enfocadas en resultados reales en Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
