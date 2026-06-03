"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function TiposGlosasMedicasColombia() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Guía práctica para IPS y clínicas en Colombia
          </span>

          <h1 className={styles.title}>
            Tipos de glosas médicas más comunes en Colombia y cómo evitarlas
          </h1>

          <p className={styles.subtitle}>
            Conozca cuáles son las glosas médicas más frecuentes en IPS y
            clínicas en Colombia, cómo afectan la recuperación de cartera y qué
            estrategias implementar para reducir devoluciones y rechazos de EPS.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Qué son las glosas médicas y por qué afectan a las IPS en Colombia
          </h2>

          <p>
            Las glosas médicas son objeciones o inconsistencias identificadas
            por las EPS frente a las cuentas médicas radicadas por IPS,
            hospitales y clínicas en Colombia. Estas observaciones pueden
            retrasar pagos, afectar el flujo de caja y aumentar la cartera
            vencida en el sector salud.
          </p>

          <p>
            En muchos casos, las glosas se originan por errores administrativos,
            inconsistencias documentales o problemas de facturación que pueden
            evitarse mediante controles internos adecuados.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Tipos de glosas médicas más comunes en Colombia</h2>

          <div className={styles.box}>
            <h3>1. Glosas por facturación incorrecta</h3>

            <p>
              Ocurren cuando existen errores en códigos, tarifas, cantidades,
              fechas o valores facturados frente a los contratos suscritos con
              la EPS.
            </p>

            <h3>2. Glosas por soportes incompletos</h3>

            <p>
              Son frecuentes cuando faltan autorizaciones, epicrisis,
              evoluciones médicas, órdenes o documentos obligatorios para
              soportar la prestación del servicio.
            </p>

            <h3>3. Glosas administrativas</h3>

            <p>
              Se generan por errores en radicación, inconsistencias de datos del
              paciente o problemas relacionados con validaciones administrativas
              exigidas por la EPS.
            </p>

            <h3>4. Glosas por pertinencia médica</h3>

            <p>
              La EPS considera que determinados procedimientos, medicamentos o
              servicios no eran necesarios o no estaban debidamente justificados
              clínicamente.
            </p>

            <h3>5. Glosas por cobertura o contratación</h3>

            <p>
              Surgen cuando existen diferencias sobre servicios cubiertos,
              exclusiones contractuales o límites pactados entre la IPS y la
              EPS.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Cómo afectan las glosas médicas el flujo financiero de una IPS
          </h2>

          <p>
            Las glosas médicas pueden generar retrasos prolongados en pagos,
            aumento de cartera vencida y dificultades operativas para clínicas e
            IPS en Colombia.
          </p>

          <p>
            Cuando no existe una gestión eficiente de glosas, las instituciones
            terminan acumulando cuentas pendientes que afectan la sostenibilidad
            financiera y limitan la capacidad de operación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Errores frecuentes que generan glosas médicas en Colombia</h2>

          <ul className={styles.checklist}>
            <li>Facturación con códigos erróneos</li>
            <li>Falta de soportes clínicos completos</li>
            <li>Errores en autorizaciones</li>
            <li>Inconsistencias en datos del paciente</li>
            <li>Radicación fuera de tiempos establecidos</li>
            <li>Problemas de auditoría documental</li>
            <li>Incumplimiento de requisitos contractuales</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cómo evitar glosas médicas y reducir devoluciones de EPS</h2>

          <p>
            La mejor estrategia para disminuir glosas médicas es implementar
            controles preventivos en facturación, auditoría interna y validación
            documental antes de radicar cuentas médicas ante las EPS.
          </p>

          <p>
            También es recomendable fortalecer los procesos de capacitación del
            personal administrativo y clínico, así como mantener seguimiento
            constante a respuestas y conciliaciones de cartera.
          </p>

          <ul className={styles.checklist}>
            <li>Validar soportes antes de radicar</li>
            <li>Implementar auditoría preventiva</li>
            <li>Capacitar equipos de facturación</li>
            <li>Actualizar procesos administrativos</li>
            <li>Hacer seguimiento continuo a glosas</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Qué hacer cuando la EPS rechaza una cuenta médica en Colombia</h2>

          <p>
            Cuando una EPS rechaza una cuenta médica, es fundamental responder
            oportunamente, consolidar soportes adecuados y dejar trazabilidad
            documental del proceso.
          </p>

          <p>
            En casos reiterativos o de alto impacto financiero, las IPS pueden
            acudir a conciliaciones, reclamaciones formales y estrategias
            jurídicas para recuperar cartera rechazada.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Ayuda a IPS, clínicas y
            prestadores de salud en Colombia a recuperar cartera y reducir
            pérdidas financieras mediante estrategias jurídicas y procesos
            efectivos de recaudo.
          </p>
        </footer>
      </article>
    </main>
  );
}
