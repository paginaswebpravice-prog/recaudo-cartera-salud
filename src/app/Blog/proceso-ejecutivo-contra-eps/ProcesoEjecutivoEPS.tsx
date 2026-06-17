"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function ProcesoEjecutivoEPS() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Recuperación judicial de cartera en salud
          </span>

          <h1 className={styles.title}>
            Proceso ejecutivo contra EPS en Colombia: requisitos y etapas para
            recuperar cartera
          </h1>

          <p className={styles.subtitle}>
            Guía completa para IPS, clínicas y hospitales que buscan recuperar
            cartera vencida mediante acciones judiciales efectivas contra EPS en
            Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué es un proceso ejecutivo contra una EPS?</h2>

          <p>
            El proceso ejecutivo es uno de los mecanismos judiciales más
            utilizados por IPS, clínicas, hospitales y prestadores de servicios
            de salud para recuperar cartera vencida cuando una EPS incumple sus
            obligaciones de pago.
          </p>

          <p>
            A diferencia de otros procesos declarativos, el proceso ejecutivo
            parte de la existencia de una obligación clara, expresa y exigible,
            permitiendo solicitar medidas cautelares desde las primeras etapas
            del proceso.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            ¿Cuándo una IPS puede iniciar un proceso ejecutivo contra una EPS?
          </h2>

          <p>
            Generalmente procede cuando existen facturas, conciliaciones,
            acuerdos de pago u otros documentos que constituyen título ejecutivo
            y demuestran una obligación pendiente de pago.
          </p>

          <ul className={styles.checklist}>
            <li>Facturas debidamente radicadas.</li>
            <li>Soportes de prestación del servicio.</li>
            <li>Actas de conciliación.</li>
            <li>Reconocimientos de deuda.</li>
            <li>Acuerdos de pago incumplidos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Requisitos para demandar una EPS mediante proceso ejecutivo</h2>

          <p>
            Antes de presentar la demanda es importante verificar que la
            documentación reúna los requisitos legales exigidos por la
            legislación colombiana.
          </p>

          <ul className={styles.checklist}>
            <li>Existencia de título ejecutivo.</li>
            <li>Obligación clara, expresa y exigible.</li>
            <li>Identificación precisa del deudor.</li>
            <li>Valor determinado de la obligación.</li>
            <li>Competencia del despacho judicial.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Etapas del proceso ejecutivo contra EPS</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>1. Revisión documental:</strong> análisis jurídico de la
              cartera y validación de títulos ejecutivos.
            </p>

            <p>
              <strong>2. Presentación de demanda:</strong> radicación ante el
              juez competente.
            </p>

            <p>
              <strong>3. Mandamiento de pago:</strong> decisión inicial mediante
              la cual el juez ordena pagar la obligación.
            </p>

            <p>
              <strong>4. Medidas cautelares:</strong> solicitud de embargos y
              otras garantías de recaudo.
            </p>

            <p>
              <strong>5. Excepciones:</strong> etapa donde la EPS puede ejercer
              su defensa.
            </p>

            <p>
              <strong>6. Sentencia y ejecución:</strong> recuperación efectiva
              de la cartera reconocida judicialmente.
            </p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Qué medidas cautelares pueden solicitarse?</h2>

          <p>
            Las medidas cautelares buscan proteger el resultado del proceso y
            evitar que la recuperación de la cartera se vea afectada por la
            falta de recursos disponibles.
          </p>

          <ul className={styles.checklist}>
            <li>Embargo de cuentas bancarias.</li>
            <li>Embargo de créditos y derechos económicos.</li>
            <li>Retención de recursos autorizados por la ley.</li>
            <li>Otras medidas permitidas por la normativa aplicable.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Cuánto tarda un proceso ejecutivo contra una EPS?</h2>

          <p>
            El tiempo depende de múltiples factores como el volumen de cartera,
            la congestión judicial, la complejidad documental y las defensas
            presentadas por la EPS.
          </p>

          <p>
            Sin embargo, una preparación adecuada de la documentación suele
            reducir significativamente retrasos procesales y riesgos de
            inadmisión.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Errores frecuentes que retrasan la recuperación de cartera</h2>

          <ul className={styles.checklist}>
            <li>Presentar títulos ejecutivos incompletos.</li>
            <li>No acreditar adecuadamente la radicación.</li>
            <li>Demorar el inicio de acciones judiciales.</li>
            <li>Descuidar la estrategia de medidas cautelares.</li>
            <li>No realizar auditoría documental previa.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera EPS en Bogotá y Colombia mediante proceso
            ejecutivo
          </h2>

          <p>
            Para IPS, clínicas y hospitales, el proceso ejecutivo continúa
            siendo una de las herramientas más efectivas para recuperar cartera
            vencida cuando las gestiones administrativas y conciliatorias no
            producen resultados.
          </p>

          <p>
            Una estrategia jurídica bien estructurada permite maximizar las
            probabilidades de recaudo y proteger la estabilidad financiera de la
            las instituciones prestadoras de servicios de salud.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Recuperamos cartera EPS
            mediante estrategias jurídicas, procesos ejecutivos y medidas
            cautelares en Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
