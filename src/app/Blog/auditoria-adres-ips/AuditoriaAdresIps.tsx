"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function AuditoriaAdresIps() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            ADRES • Auditoría y revisión de cuentas médicas
          </span>

          <h1 className={styles.title}>
            Proceso de auditoría de ADRES: qué debe saber una IPS en Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca cómo funciona la auditoría de ADRES, qué aspectos revisa la
            entidad, cuáles son los errores más frecuentes y cómo preparar la
            documentación para reducir rechazos, devoluciones y demoras en el
            reconocimiento de recursos en Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué es la auditoría de ADRES?</h2>

          <p>
            La auditoría realizada por ADRES es un procedimiento mediante el
            cual la entidad verifica la legalidad, pertinencia y suficiencia de
            los soportes presentados por las IPS, clínicas y hospitales que
            buscan el reconocimiento y pago de servicios financiados con
            recursos públicos del sistema de salud colombiano.
          </p>

          <p>
            El objetivo principal consiste en garantizar que los recursos del
            sistema sean utilizados correctamente y que únicamente se reconozcan
            servicios efectivamente prestados, debidamente soportados y
            ajustados a la normatividad vigente.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Qué aspectos revisa ADRES durante una auditoría?</h2>

          <ul className={styles.checklist}>
            <li>Facturas y documentos equivalentes.</li>
            <li>Historia clínica y soportes asistenciales.</li>
            <li>Autorizaciones cuando sean exigibles.</li>
            <li>Identificación correcta del paciente.</li>
            <li>Soportes de atención médica.</li>
            <li>Coherencia entre diagnóstico y procedimiento.</li>
            <li>Tarifas aplicadas y liquidación de valores.</li>
            <li>Cumplimiento de requisitos normativos.</li>
            <li>Documentos de radicación y trazabilidad.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Por qué ADRES rechaza o glosa cuentas?</h2>

          <p>
            Una parte importante de las observaciones realizadas por ADRES se
            origina en errores documentales, inconsistencias entre soportes o
            incumplimiento de requisitos establecidos para cada tipo de
            reclamación.
          </p>

          <p>
            También son frecuentes las devoluciones relacionadas con soportes
            incompletos, diferencias en identificación de usuarios, errores en
            valores facturados o ausencia de documentos exigidos por la
            regulación aplicable.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Errores frecuentes detectados en auditorías de ADRES</h2>

          <ul className={styles.checklist}>
            <li>Historias clínicas incompletas.</li>
            <li>Facturas con inconsistencias de información.</li>
            <li>Ausencia de soportes médicos obligatorios.</li>
            <li>Diferencias entre la factura y los documentos anexos.</li>
            <li>Errores en la identificación del paciente.</li>
            <li>Servicios sin evidencia suficiente de prestación.</li>
            <li>Radicaciones fuera de términos establecidos.</li>
            <li>Documentación ilegible o incompleta.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Cómo prepararse para una auditoría de ADRES de manera adecuada
          </h2>

          <p>
            La mejor estrategia consiste en implementar controles internos antes
            de radicar las cuentas. Una revisión documental previa permite
            detectar errores oportunamente y reducir significativamente el
            riesgo de devoluciones o glosas.
          </p>

          <p>
            Las IPS con procesos robustos de auditoría interna suelen obtener
            mejores resultados en la recuperación de recursos y menores tiempos
            de respuesta por parte de las entidades pagadoras.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Buenas prácticas para IPS y hospitales</h2>

          <ul className={styles.checklist}>
            <li>Realizar auditorías internas periódicas.</li>
            <li>Digitalizar y organizar soportes clínicos.</li>
            <li>Capacitar continuamente al personal de facturación.</li>
            <li>Verificar requisitos antes de cada radicación.</li>
            <li>Documentar adecuadamente todas las atenciones.</li>
            <li>Mantener trazabilidad completa del proceso.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Auditorías de ADRES y recuperación de cartera en Colombia</h2>

          <p>
            Una adecuada preparación frente a los procesos de auditoría de ADRES
            puede marcar la diferencia entre obtener el pago oportuno o
            enfrentar retrasos significativos en el recaudo de recursos.
          </p>

          <p>
            Para clínicas, hospitales e IPS en Bogotá y Colombia, fortalecer los
            controles documentales y financieros constituye una de las mejores
            herramientas para mejorar la recuperación de cartera y proteger la
            sostenibilidad institucional.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            procesos de recuperación de cartera, reclamaciones ante ADRES,
            auditorías documentales y estrategias jurídicas de recaudo en
            Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
