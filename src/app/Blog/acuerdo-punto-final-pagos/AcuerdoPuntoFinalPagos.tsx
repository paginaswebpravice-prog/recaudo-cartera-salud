"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function AcuerdoPuntoFinalPagos() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            ADRES • Acuerdo de Punto Final Colombia
          </span>

          <h1 className={styles.title}>
            Cómo reclamar pagos pendientes del Acuerdo de Punto Final en
            Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca qué es el Acuerdo de Punto Final, cuáles son los requisitos
            para reclamar recursos pendientes, qué documentos debe presentar una
            IPS y cuáles son las alternativas cuando existen cuentas aún no
            reconocidas o pagadas.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué es el Acuerdo de Punto Final?</h2>

          <p>
            El Acuerdo de Punto Final es una estrategia implementada por el
            Gobierno colombiano para sanear deudas históricas acumuladas dentro
            del sistema de salud. Su propósito fue identificar, auditar,
            reconocer y pagar obligaciones pendientes derivadas de servicios y
            tecnologías en salud que no habían sido financiadas oportunamente.
          </p>

          <p>
            Gracias a este mecanismo, numerosas IPS, clínicas, hospitales y
            prestadores lograron recuperar recursos que permanecían pendientes
            desde años anteriores, mejorando su liquidez y sostenibilidad
            financiera.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Quiénes pueden reclamar recursos pendientes?</h2>

          <p>
            Dependiendo del origen de la obligación, pueden existir cuentas aún
            pendientes de reconocimiento o pago relacionadas con servicios
            prestados por:
          </p>

          <ul className={styles.checklist}>
            <li>IPS públicas y privadas.</li>
            <li>Clínicas y hospitales.</li>
            <li>Prestadores especializados.</li>
            <li>Proveedores del sector salud.</li>
            <li>Instituciones con reclamaciones auditadas parcialmente.</li>
            <li>Entidades con cuentas observadas o pendientes de revisión.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Por qué pueden existir pagos pendientes?</h2>

          <p>
            Aunque el Acuerdo de Punto Final permitió avanzar significativamente
            en el saneamiento financiero del sector salud, algunas cuentas
            continúan presentando observaciones, inconsistencias documentales o
            procesos de validación que retrasan el reconocimiento definitivo de
            los recursos.
          </p>

          <p>
            En otros casos, pueden existir diferencias entre los valores
            reclamados y los valores finalmente reconocidos, generando la
            necesidad de adelantar procesos adicionales de revisión o defensa
            técnica y jurídica.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Documentos que debe revisar una IPS</h2>

          <ul className={styles.checklist}>
            <li>Facturas radicadas y soportes de presentación.</li>
            <li>Historias clínicas y documentos asistenciales.</li>
            <li>Resultados de auditorías previas.</li>
            <li>Actas de conciliación o acuerdos suscritos.</li>
            <li>Respuestas emitidas por ADRES o entidades territoriales.</li>
            <li>Soportes financieros relacionados con los pagos recibidos.</li>
            <li>Certificaciones de cartera pendiente.</li>
            <li>Comunicaciones oficiales asociadas al proceso.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cómo reclamar recursos pendientes del Acuerdo de Punto Final</h2>

          <p>
            El primer paso consiste en identificar con precisión las cuentas que
            continúan pendientes de reconocimiento o pago. Para ello es
            fundamental realizar una revisión documental completa y comparar la
            información radicada con los valores efectivamente reconocidos.
          </p>

          <p>
            Posteriormente, la institución debe consolidar los soportes
            necesarios para sustentar la reclamación y verificar el estado
            administrativo de cada cuenta dentro de los procesos de auditoría y
            validación correspondientes.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Errores frecuentes que dificultan la recuperación de recursos</h2>

          <ul className={styles.checklist}>
            <li>No realizar conciliaciones periódicas de cartera.</li>
            <li>Perder trazabilidad de las radicaciones.</li>
            <li>Presentar soportes incompletos.</li>
            <li>
              No responder observaciones dentro de los plazos establecidos.
            </li>
            <li>Desconocer el estado real de cada reclamación.</li>
            <li>No documentar adecuadamente diferencias de valores.</li>
            <li>Falta de seguimiento jurídico y financiero.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Importancia de la gestión jurídica en reclamaciones pendientes
          </h2>

          <p>
            Cuando existen recursos importantes aún sin reconocer o pagar, una
            estrategia jurídica adecuada puede facilitar la defensa de los
            derechos económicos de la institución y contribuir a acelerar los
            procesos de recuperación.
          </p>

          <p>
            La combinación de auditoría documental, conciliación financiera y
            acompañamiento legal suele generar mejores resultados para las IPS,
            especialmente cuando se trata de cuentas complejas o con múltiples
            observaciones.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera derivada del Acuerdo de Punto Final en
            Colombia
          </h2>

          <p>
            Los recursos asociados al Acuerdo de Punto Final continúan siendo un
            componente relevante para muchas instituciones de salud que buscan
            fortalecer su flujo de caja y recuperar obligaciones históricas.
          </p>

          <p>
            Una adecuada gestión documental, financiera y jurídica permite
            maximizar las posibilidades de éxito en las reclamaciones y mejorar
            la recuperación efectiva de cartera en el sector salud colombiano.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            procesos de recuperación de cartera, reclamaciones ante ADRES,
            conciliaciones financieras y estrategias jurídicas de recaudo en
            Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
