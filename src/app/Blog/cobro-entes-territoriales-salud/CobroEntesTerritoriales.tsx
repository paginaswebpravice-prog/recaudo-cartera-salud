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

          <span className={styles.badge}>
            Cobro de cartera sector público en salud
          </span>

          <h1 className={styles.title}>
            Cobro de cartera a entes territoriales en Colombia: guía completa
            para recuperar pagos de secretarías de salud
          </h1>

          <p className={styles.subtitle}>
            Estrategia integral para IPS, clínicas y proveedores de salud en
            Bogotá y Colombia que buscan recuperar cartera vencida frente a
            entidades públicas.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Cómo funciona el cobro de cartera a entes territoriales en Colombia
          </h2>

          <p>
            El cobro de cartera a entes territoriales en Colombia es un proceso
            administrativo y jurídico que impacta directamente la sostenibilidad
            financiera de IPS, clínicas y prestadores de servicios de salud.
          </p>

          <p>
            En ciudades como Bogotá y en todo el país, este tipo de cartera
            suele depender de presupuestos públicos, lo que genera tiempos de
            pago más largos y mayor complejidad en la gestión del recaudo.
          </p>

          <p>
            Por esta razón, se requiere una estrategia especializada que combine
            gestión administrativa, análisis normativo y preparación jurídica
            desde etapas tempranas del proceso.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Qué tipo de cartera se puede cobrar a entes territoriales en
            Colombia
          </h2>

          <p>
            Las obligaciones que pueden ser objeto de cobro frente a entidades
            territoriales incluyen múltiples escenarios dentro del sistema de
            salud colombiano:
          </p>

          <ul className={styles.checklist}>
            <li>Atención a población pobre no asegurada (PNA)</li>
            <li>Servicios y tecnologías NO PBS</li>
            <li>Recursos por esfuerzo propio de las entidades territoriales</li>
            <li>Eventos especiales o emergencias sanitarias</li>
            <li>Obligaciones contractuales o convenios interadministrativos</li>
          </ul>

          <p>
            Cada uno de estos conceptos requiere un análisis específico para
            determinar su exigibilidad y viabilidad de cobro.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Errores más comunes que impiden el cobro de cartera pública en salud
          </h2>

          <p>
            Muchas IPS y clínicas en Colombia pierden recursos no por falta de
            derecho al cobro, sino por errores en la gestión documental y
            jurídica.
          </p>

          <p>
            Estos errores pueden generar demoras de años o incluso la pérdida
            total del derecho al recaudo.
          </p>

          <ul className={styles.checklist}>
            <li>Expedientes incompletos o mal organizados</li>
            <li>Falta de trazabilidad en soportes administrativos</li>
            <li>Errores en radicación de cuentas</li>
            <li>Ausencia de seguimiento institucional</li>
            <li>Falta de estrategia jurídica temprana</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Estrategia paso a paso para recuperar cartera ante entes
            territoriales
          </h2>

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
            Esta estrategia permite estructurar un proceso sólido y aumentar la
            probabilidad de recuperación efectiva de la cartera.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Importancia de un expediente sólido en el cobro de cartera pública
          </h2>

          <div className={styles.letterBox}>
            <p>
              El éxito en el cobro de cartera a entes territoriales en Colombia
              depende de la calidad del expediente. La correcta estructuración
              de soportes, el análisis contractual y la estrategia jurídica son
              determinantes para lograr el pago.
            </p>

            <p>
              En el sector salud, la falta de organización documental es una de
              las principales causas de pérdida de recursos públicos.
            </p>

            <p>
              Un expediente débil reduce significativamente las posibilidades de
              conciliación o éxito en un eventual proceso judicial.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera en Bogotá y Colombia con respaldo jurídico
          </h2>

          <p>
            La recuperación de cartera en el sector salud público exige
            experiencia, estrategia y conocimiento del marco normativo
            colombiano, especialmente cuando intervienen entidades estatales.
          </p>

          <p>
            Una gestión adecuada permite mejorar el flujo de caja y garantizar
            la sostenibilidad operativa de IPS y clínicas en todo el país.
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
