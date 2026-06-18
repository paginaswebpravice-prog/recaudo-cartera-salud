"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function CarteraEPSIntervenida() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Riesgos e intervención de EPS en Colombia
          </span>

          <h1 className={styles.title}>
            Qué pasa con la cartera cuando una EPS entra en intervención
          </h1>

          <p className={styles.subtitle}>
            Guía para IPS, clínicas y hospitales en Colombia sobre el impacto
            que tiene una intervención de EPS en la recuperación de cartera, los
            pagos pendientes, las reclamaciones y las acciones jurídicas que
            pueden adoptarse para proteger los recursos adeudados.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué significa que una EPS entre en intervención?</h2>

          <p>
            Cuando una EPS presenta dificultades financieras, administrativas o
            de cumplimiento frente a sus afiliados, la Superintendencia Nacional
            de Salud puede ordenar una intervención administrativa para intentar
            corregir las fallas detectadas y garantizar la continuidad de la
            prestación de los servicios.
          </p>

          <p>
            Durante este proceso la EPS continúa existiendo jurídicamente, pero
            ciertas decisiones pasan a ser administradas por un agente
            interventor designado por la autoridad competente.
          </p>

          <p>
            Para las IPS, hospitales y clínicas, una intervención suele generar
            incertidumbre respecto al pago de facturas pendientes,
            conciliaciones, glosas y recuperación de cartera acumulada.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿La intervención elimina las deudas de la EPS?</h2>

          <p>
            No. La intervención no extingue las obligaciones económicas que la
            EPS tenga con prestadores de servicios de salud.
          </p>

          <p>
            Las facturas válidamente radicadas, las obligaciones reconocidas,
            los acuerdos de pago y demás compromisos financieros continúan
            existiendo aun cuando la entidad esté bajo intervención.
          </p>

          <p>
            Sin embargo, los tiempos de respuesta, auditoría y desembolso pueden
            modificarse dependiendo de las medidas adoptadas por el interventor
            y del estado financiero de la entidad.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principales efectos sobre la cartera de las IPS</h2>

          <ul className={styles.checklist}>
            <li>Mayor revisión de cuentas médicas y soportes.</li>
            <li>Retrasos en cronogramas de pago previamente acordados.</li>
            <li>Suspensión temporal de algunos procesos administrativos.</li>
            <li>Reevaluación de acuerdos de conciliación existentes.</li>
            <li>Incremento del riesgo financiero para los prestadores.</li>
            <li>Necesidad de fortalecer el seguimiento documental.</li>
            <li>Mayor importancia de la gestión jurídica de cartera.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Se pueden seguir realizando cobros a una EPS intervenida?</h2>

          <p>
            Sí. Las IPS pueden continuar desarrollando actividades de cobro
            prejurídico y jurídico sobre las obligaciones pendientes, siempre
            que cuenten con los soportes documentales correspondientes.
          </p>

          <p>
            De hecho, en muchos casos resulta recomendable fortalecer las
            estrategias de recuperación para evitar que la cartera continúe
            envejeciendo mientras se desarrolla la intervención.
          </p>

          <p>
            La existencia de una intervención no implica que los acreedores
            deban permanecer inactivos frente a sus derechos económicos.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Documentación que debe conservar una IPS</h2>

          <div className={styles.letterBox}>
            <p>
              Una IPS que tenga cartera frente a una EPS intervenida debe
              mantener organizada la siguiente información:
            </p>

            <ul className={styles.checklist}>
              <li>Facturas radicadas.</li>
              <li>Constancias de radicación.</li>
              <li>Soportes clínicos y administrativos.</li>
              <li>Respuestas a glosas y devoluciones.</li>
              <li>Actas de conciliación.</li>
              <li>Acuerdos de pago firmados.</li>
              <li>Estados de cuenta y cruces de información.</li>
              <li>Comunicaciones oficiales con la EPS.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Riesgos financieros para hospitales y clínicas</h2>

          <p>
            Una EPS intervenida puede representar una concentración importante
            del riesgo financiero de una institución de salud.
          </p>

          <p>
            Cuando una parte significativa de los ingresos depende de una sola
            entidad pagadora, cualquier retraso en los desembolsos puede afectar
            el flujo de caja, el pago de proveedores, la nómina y la operación
            general de la organización.
          </p>

          <p>
            Por esta razón resulta fundamental monitorear permanentemente la
            exposición financiera frente a cada EPS y diseñar planes de
            contingencia oportunos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>¿Cuándo conviene iniciar acciones judiciales?</h2>

          <p>
            La decisión depende del estado de la cartera, la existencia de
            títulos ejecutivos, los acuerdos previamente celebrados y la
            estrategia financiera de la IPS.
          </p>

          <p>
            En muchos casos, iniciar oportunamente acciones judiciales permite
            proteger los derechos de cobro, interrumpir riesgos asociados a la
            prescripción y mejorar las probabilidades de recuperación efectiva
            de los recursos adeudados.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Estrategias para proteger la cartera durante una intervención</h2>

          <ul className={styles.checklist}>
            <li>Actualizar permanentemente el estado de la cartera.</li>
            <li>Realizar conciliaciones periódicas.</li>
            <li>Documentar toda comunicación con la EPS.</li>
            <li>Controlar términos de prescripción.</li>
            <li>Fortalecer procesos de auditoría interna.</li>
            <li>Evaluar acciones judiciales cuando corresponda.</li>
            <li>Diversificar fuentes de ingreso de la IPS.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en la recuperación de cartera frente a EPS intervenidas,
            procesos ejecutivos, conciliaciones y estrategias jurídicas para
            proteger los recursos del sector salud.
          </p>
        </footer>
      </article>
    </main>
  );
}
