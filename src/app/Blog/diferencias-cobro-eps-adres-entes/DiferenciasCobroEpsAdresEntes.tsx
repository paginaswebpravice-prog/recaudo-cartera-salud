"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function DiferenciasCobroEpsAdresEntes() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            ADRES • EPS • Entidades Territoriales
          </span>

          <h1 className={styles.title}>
            Diferencias entre cobro a EPS, ADRES y entidades territoriales en
            Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca cuándo corresponde reclamar una cartera ante una EPS, cuándo
            debe dirigirse a ADRES y en qué casos la obligación puede recaer
            sobre departamentos, distritos o municipios dentro del sistema de
            salud colombiano.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            ¿Por qué es importante identificar correctamente al responsable del
            pago?
          </h2>

          <p>
            Uno de los errores más frecuentes en los procesos de recuperación de
            cartera en Colombia consiste en iniciar reclamaciones contra la
            entidad equivocada. Esto genera retrasos, pérdida de tiempo,
            reprocesos administrativos e incluso riesgos de prescripción.
          </p>

          <p>
            Antes de adelantar cualquier gestión de cobro, resulta fundamental
            identificar quién tiene la obligación legal de reconocer y pagar los
            servicios prestados. Dependiendo del caso concreto, la obligación
            puede corresponder a una EPS, a ADRES o a una entidad territorial.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Cuándo corresponde cobrar a una EPS?</h2>

          <p>
            Las EPS son responsables de gestionar el aseguramiento en salud y,
            en la mayoría de los casos, constituyen el principal deudor de las
            IPS, clínicas y hospitales.
          </p>

          <ul className={styles.checklist}>
            <li>Servicios prestados a afiliados del régimen contributivo.</li>
            <li>Servicios prestados a afiliados del régimen subsidiado.</li>
            <li>Facturación derivada de contratos vigentes con EPS.</li>
            <li>Servicios incluidos dentro de la cobertura correspondiente.</li>
            <li>
              Obligaciones derivadas de acuerdos de prestación de servicios.
            </li>
            <li>Pagos asociados a procesos de conciliación de cartera.</li>
          </ul>

          <p>
            En estos casos, la IPS normalmente debe adelantar primero gestiones
            administrativas y posteriormente mecanismos jurídicos cuando exista
            mora o incumplimiento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>¿Cuándo corresponde reclamar ante ADRES?</h2>

          <p>
            La Administradora de los Recursos del Sistema General de Seguridad
            Social en Salud (ADRES) administra importantes recursos públicos del
            sistema y participa en diferentes procesos de reconocimiento y pago.
          </p>

          <p>
            Dependiendo de la naturaleza del servicio, la reclamación puede
            requerir radicación directa ante ADRES, especialmente cuando la
            normatividad así lo establece.
          </p>

          <ul className={styles.checklist}>
            <li>Reclamaciones derivadas de accidentes de tránsito.</li>
            <li>Procesos relacionados con recursos administrados por ADRES.</li>
            <li>Algunas reclamaciones históricas del sector salud.</li>
            <li>
              Procesos derivados de saneamiento financiero y reconocimiento de
              recursos públicos.
            </li>
            <li>Casos expresamente definidos por la regulación colombiana.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Cuándo intervienen las entidades territoriales?</h2>

          <p>
            Los departamentos, distritos y municipios pueden asumir
            responsabilidades financieras relacionadas con determinadas
            poblaciones o servicios específicos financiados con recursos
            territoriales.
          </p>

          <p>
            En estos casos, las IPS deben identificar la fuente de financiación
            y verificar qué entidad tiene la obligación legal de realizar el
            reconocimiento económico correspondiente.
          </p>

          <ul className={styles.checklist}>
            <li>Servicios financiados con recursos territoriales.</li>
            <li>Programas especiales de salud pública.</li>
            <li>Poblaciones con esquemas particulares de atención.</li>
            <li>
              Servicios cuya financiación no corresponde directamente a una EPS.
            </li>
            <li>
              Obligaciones derivadas de competencias específicas de las
              entidades territoriales.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Errores frecuentes al definir el deudor correcto</h2>

          <ul className={styles.checklist}>
            <li>Presentar reclamaciones ante la entidad equivocada.</li>
            <li>No verificar la fuente real de financiación.</li>
            <li>Desconocer cambios normativos recientes.</li>
            <li>Perder términos por falta de seguimiento.</li>
            <li>No documentar adecuadamente la prestación del servicio.</li>
            <li>No identificar correctamente la población atendida.</li>
            <li>Duplicar reclamaciones sin soporte suficiente.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Cómo identificar correctamente quién debe pagar una cuenta médica
          </h2>

          <p>
            Para determinar el responsable del pago es necesario analizar varios
            factores: tipo de usuario atendido, régimen de afiliación,
            naturaleza del servicio, fuente de financiación, normatividad
            aplicable y documentación contractual existente.
          </p>

          <p>
            Una revisión jurídica y financiera previa permite evitar errores de
            radicación y aumentar las probabilidades de recuperación efectiva de
            la cartera.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Estrategias para recuperar cartera ante EPS, ADRES y entidades
            territoriales
          </h2>

          <p>
            Cada entidad posee procedimientos, requisitos y mecanismos de
            reclamación diferentes. Por esta razón, la estrategia de cobro debe
            adaptarse al origen de la obligación y a la normativa que regula el
            respectivo proceso.
          </p>

          <p>
            Las IPS que desarrollan procesos organizados de conciliación,
            auditoría documental, seguimiento administrativo y cobro jurídico
            suelen obtener mejores resultados en la recuperación de recursos.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> asesora a IPS, clínicas y hospitales en
            recuperación de cartera ante EPS, ADRES, departamentos, municipios y
            demás entidades responsables de pagos dentro del sistema de salud en
            Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
