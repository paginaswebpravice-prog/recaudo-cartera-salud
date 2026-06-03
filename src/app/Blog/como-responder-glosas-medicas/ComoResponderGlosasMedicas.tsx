"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function ComoResponderGlosasMedicas() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Guía jurídica y financiera para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            Cómo responder glosas médicas en Colombia y recuperar pagos
            rechazados
          </h1>

          <p className={styles.subtitle}>
            Guía completa para IPS, clínicas y prestadores de salud en Colombia
            sobre cómo responder glosas médicas correctamente, reducir pérdidas
            financieras y recuperar cartera rechazada por EPS.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Qué son las glosas médicas en Colombia</h2>

          <p>
            Las glosas médicas son objeciones realizadas por las EPS frente a
            facturas o cuentas presentadas por IPS, clínicas y prestadores de
            servicios de salud en Colombia. Estas observaciones pueden afectar
            significativamente el flujo de caja y aumentar la cartera vencida
            cuando no se responden de manera oportuna y estratégica.
          </p>

          <p>
            En muchos casos, las glosas no significan una pérdida definitiva del
            dinero. Sin embargo, una respuesta incompleta, fuera de términos o
            sin soporte documental adecuado puede generar rechazo definitivo del
            pago y complicaciones financieras para la institución.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principales tipos de glosas médicas en IPS y clínicas</h2>

          <ul className={styles.checklist}>
            <li>Glosas por facturación incorrecta</li>
            <li>Errores en soportes clínicos o administrativos</li>
            <li>Falta de autorizaciones o inconsistencias documentales</li>
            <li>Glosas por tarifas o contratos</li>
            <li>Servicios considerados no pertinentes por la EPS</li>
            <li>Errores en radicación de cuentas médicas</li>
          </ul>

          <p>
            Identificar correctamente el tipo de glosa es fundamental para
            construir una respuesta efectiva y aumentar las probabilidades de
            recuperación de la cartera rechazada.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Cómo responder glosas médicas correctamente en Colombia paso a paso
          </h2>

          <div className={styles.box}>
            <h3>Paso 1: Analizar el motivo exacto de la glosa</h3>

            <p>
              Antes de responder, la IPS debe revisar detalladamente la causal
              de la glosa, verificando si corresponde a errores documentales,
              administrativos, contractuales o clínicos.
            </p>

            <h3>Paso 2: Reunir soportes y evidencia documental</h3>

            <p>
              Es indispensable consolidar historia clínica, autorizaciones,
              soportes de atención, radicaciones, contratos y demás documentos
              que permitan demostrar la validez del cobro.
            </p>

            <h3>Paso 3: Elaborar respuesta técnica y jurídica</h3>

            <p>
              La respuesta debe ser clara, argumentada y soportada, explicando
              por qué la glosa debe levantarse y el pago debe realizarse.
            </p>

            <h3>Paso 4: Radicar dentro de los términos establecidos</h3>

            <p>
              El incumplimiento de tiempos puede generar aceptación automática
              de la glosa y pérdida de la cartera reclamada.
            </p>

            <h3>Paso 5: Hacer seguimiento permanente</h3>

            <p>
              Muchas IPS pierden dinero por no realizar seguimiento oportuno a
              las respuestas enviadas y a los compromisos adquiridos por la EPS.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Errores más comunes al responder glosas médicas en Colombia</h2>

          <ul className={styles.checklist}>
            <li>Responder fuera de los tiempos establecidos</li>
            <li>No adjuntar soportes suficientes</li>
            <li>Enviar respuestas genéricas sin argumentación técnica</li>
            <li>No conservar trazabilidad de radicación</li>
            <li>No escalar casos reiterativos o abusivos</li>
            <li>Permitir acumulación de cartera glosada</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cómo evitar pérdidas financieras por glosas médicas en IPS</h2>

          <p>
            La mejor estrategia para reducir pérdidas por glosas médicas es
            combinar controles administrativos, auditoría interna, trazabilidad
            documental y acompañamiento jurídico especializado.
          </p>

          <p>
            Las IPS que implementan procesos adecuados de facturación,
            conciliación y seguimiento de cartera logran disminuir la mora y
            mejorar significativamente su flujo financiero frente a EPS en
            Colombia.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Qué hacer si la EPS mantiene el rechazo del pago después de la
            respuesta
          </h2>

          <p>
            Cuando la EPS mantiene la glosa o rechaza el pago de manera
            injustificada, la IPS puede iniciar procesos de conciliación,
            reclamación formal, cobro prejurídico o acciones judiciales para
            recuperar la cartera.
          </p>

          <p>
            Una estrategia jurídica adecuada permite proteger el flujo de caja y
            evitar que la cartera continúe deteriorándose por dilaciones
            administrativas o negativas reiteradas de pago.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Recuperación de cartera rechazada por EPS en Colombia</h2>

          <p>
            La recuperación de cartera en salud requiere un manejo integral que
            combine respuesta técnica de glosas, conciliación financiera,
            gestión documental y acciones legales oportunas.
          </p>

          <p>
            Una respuesta adecuada a las glosas médicas puede marcar la
            diferencia entre perder millones en cartera vencida o recuperar
            efectivamente los recursos de la institución.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Ayuda a IPS y clínicas
            en Colombia a recuperar cartera mediante estrategias jurídicas,
            financieras y procesos efectivos de recaudo frente a EPS.
          </p>
        </footer>
      </article>
    </main>
  );
}
