"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function GiroDirectoADRESIPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Guía financiera para IPS y clínicas en Colombia
          </span>

          <h1 className={styles.title}>
            Cómo funciona el giro directo ADRES y cómo afecta a las IPS
          </h1>

          <p className={styles.subtitle}>
            Conozca cómo funciona el mecanismo de giro directo ADRES en
            Colombia, cuáles son sus implicaciones financieras y cómo impacta el
            flujo de caja de IPS, clínicas y hospitales.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Qué es el giro directo ADRES en Colombia</h2>

          <p>
            El giro directo es un mecanismo implementado en Colombia mediante el
            cual la ADRES realiza pagos directamente a IPS, clínicas y
            hospitales por servicios prestados a usuarios del sistema de salud,
            evitando que los recursos pasen inicialmente por las EPS.
          </p>

          <p>
            Este modelo busca mejorar el flujo financiero de los prestadores de
            salud, reducir riesgos de intermediación y disminuir problemas de
            mora en el pago de servicios médicos.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cómo funciona el giro directo para las IPS</h2>

          <div className={styles.box}>
            <h3>Reconocimiento de servicios de salud</h3>

            <p>
              Las IPS prestan los servicios médicos y realizan la respectiva
              facturación ante las EPS y entidades responsables de pago.
            </p>

            <h3>Validación y auditoría</h3>

            <p>
              Las cuentas médicas pasan por procesos de revisión, auditoría y
              validación documental antes de ser aprobadas para pago.
            </p>

            <h3>Giro de recursos por ADRES</h3>

            <p>
              Una vez aprobados determinados servicios o recursos, la ADRES
              puede realizar el pago directamente a las IPS sin intermediación
              completa de la EPS.
            </p>

            <h3>Impacto en flujo financiero</h3>

            <p>
              El objetivo es acelerar pagos y reducir retrasos que afectan la
              sostenibilidad financiera de hospitales, clínicas y prestadores.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Beneficios del giro directo ADRES para clínicas e IPS</h2>

          <ul className={styles.checklist}>
            <li>Mejorar flujo de caja</li>
            <li>Reducir intermediación financiera</li>
            <li>Disminuir mora de EPS</li>
            <li>Facilitar sostenibilidad operativa</li>
            <li>Reducir riesgos de cartera vencida</li>
            <li>Mayor trazabilidad de recursos</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Problemas frecuentes del giro directo en Colombia</h2>

          <p>
            Aunque el giro directo busca mejorar la liquidez de las IPS, muchas
            instituciones todavía enfrentan retrasos administrativos, glosas,
            devoluciones y dificultades de validación documental.
          </p>

          <p>
            Además, no toda la cartera necesariamente entra en esquemas de giro
            directo, por lo que muchas IPS continúan enfrentando procesos de
            cobro complejos frente a EPS morosas.
          </p>

          <ul className={styles.checklist}>
            <li>Demoras en validación de cuentas</li>
            <li>Problemas de auditoría médica</li>
            <li>Glosas y devoluciones recurrentes</li>
            <li>Pagos parciales o retrasados</li>
            <li>Dificultades de conciliación</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cómo afecta el giro directo la recuperación de cartera en IPS</h2>

          <p>
            El giro directo puede reducir parcialmente los riesgos financieros
            asociados a EPS con problemas de liquidez, intervención o mora
            prolongada.
          </p>

          <p>
            Sin embargo, las IPS aún deben mantener estrategias sólidas de
            control documental, auditoría y recuperación de cartera para evitar
            acumulación de cuentas pendientes.
          </p>

          <ul className={styles.checklist}>
            <li>Fortalecer auditoría preventiva</li>
            <li>Optimizar procesos de facturación</li>
            <li>Controlar tiempos de radicación</li>
            <li>Hacer seguimiento permanente a cartera</li>
            <li>Gestionar conciliaciones oportunamente</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Qué hacer si persisten retrasos de pago pese al giro directo</h2>

          <p>
            Cuando existen demoras prolongadas en pagos, las IPS pueden iniciar
            requerimientos formales, conciliaciones y estrategias de cobro
            prejurídico para proteger sus recursos financieros.
          </p>

          <p>
            En casos más complejos, puede ser necesario evaluar acciones
            jurídicas para recuperar cartera vencida frente a EPS o entidades
            responsables de pago.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Cómo mejorar la estabilidad financiera de una IPS en Colombia</h2>

          <p>
            El giro directo representa una herramienta importante para mejorar
            liquidez en el sector salud, pero debe complementarse con una
            adecuada gestión financiera, control de cartera y estrategias
            jurídicas oportunas.
          </p>

          <p>
            Las IPS que implementan controles preventivos y fortalecen sus
            procesos administrativos pueden reducir riesgos financieros y
            mejorar significativamente su sostenibilidad operativa.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Ayuda a IPS, clínicas y
            prestadores de salud en Colombia a recuperar cartera mediante
            estrategias jurídicas, conciliaciones y procesos efectivos frente a
            EPS morosas.
          </p>
        </footer>
      </article>
    </main>
  );
}
