"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function JuezCompetenteDemandasEPS() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Competencia judicial para demandas contra EPS
          </span>

          <h1 className={styles.title}>
            Qué juez conoce las demandas por cartera contra EPS en Colombia
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y hospitales sobre competencia
            judicial, jurisdicción, cuantía y factores procesales que determinan
            ante qué juez debe presentarse una demanda por recuperación de
            cartera contra una EPS en Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            ¿Por qué es importante identificar correctamente el juez competente?
          </h2>

          <p>
            Uno de los errores más costosos dentro de los procesos de
            recuperación de cartera en Colombia consiste en presentar la demanda
            ante una autoridad judicial que no tiene competencia para conocer el
            asunto.
          </p>

          <p>
            Cuando esto ocurre, el proceso puede sufrir retrasos importantes,
            devoluciones, declaraciones de falta de competencia o incluso
            nulidades procesales que afectan la recuperación efectiva de los
            recursos adeudados por las EPS.
          </p>

          <p>
            Determinar correctamente el juez competente permite acelerar el
            proceso ejecutivo, disminuir riesgos procesales y aumentar las
            probabilidades de obtener medidas cautelares oportunas.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Factores que determinan la competencia judicial en Colombia</h2>

          <p>
            La competencia judicial se determina principalmente por varios
            factores establecidos en la legislación procesal colombiana.
          </p>

          <ul className={styles.checklist}>
            <li>La naturaleza del proceso.</li>
            <li>La cuantía de la obligación reclamada.</li>
            <li>El domicilio de la entidad demandada.</li>
            <li>La ubicación donde debe cumplirse la obligación.</li>
            <li>Las reglas especiales previstas por la ley.</li>
          </ul>

          <p>
            Estos criterios deben analizarse de manera conjunta antes de iniciar
            cualquier acción judicial contra una EPS.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            ¿Las demandas por cartera contra EPS se presentan ante jueces
            civiles?
          </h2>

          <p>
            En la mayoría de los casos, las demandas ejecutivas por recuperación
            de cartera derivadas de servicios de salud son conocidas por la
            jurisdicción ordinaria civil.
          </p>

          <p>
            Cuando la IPS cuenta con documentos que constituyen título
            ejecutivo, como facturas, acuerdos de pago, conciliaciones,
            reconocimientos de deuda u otros soportes exigibles, normalmente la
            competencia corresponde a los jueces civiles.
          </p>

          <p>
            La determinación específica dependerá además de la cuantía del
            proceso y de las reglas territoriales aplicables.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Competencia según la cuantía del proceso ejecutivo contra EPS</h2>

          <p>
            La cuantía tiene un impacto directo en la definición del despacho
            judicial competente.
          </p>

          <ul className={styles.checklist}>
            <li>Procesos de menor cuantía.</li>
            <li>Procesos de mayor cuantía.</li>
            <li>Demandas con múltiples obligaciones acumuladas.</li>
            <li>Procesos derivados de acuerdos de pago incumplidos.</li>
          </ul>

          <p>
            Antes de radicar una demanda resulta indispensable realizar una
            evaluación jurídica de la cuantía total reclamable para identificar
            correctamente el juez competente.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Competencia territorial en demandas contra EPS en Colombia</h2>

          <p>
            Además de la cuantía, debe analizarse la competencia territorial.
          </p>

          <p>
            Dependiendo de las circunstancias del caso, la demanda puede
            presentarse considerando el domicilio de la EPS, el lugar donde se
            encuentra la sede responsable del pago o el sitio de cumplimiento de
            la obligación.
          </p>

          <p>
            Una evaluación estratégica de la competencia territorial puede tener
            efectos importantes sobre los tiempos procesales y la efectividad de
            las medidas cautelares.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Qué ocurre si la demanda se presenta ante un juez incompetente
          </h2>

          <p>
            Cuando el despacho judicial considera que carece de competencia,
            normalmente ordenará remitir el expediente al juez que estime
            competente.
          </p>

          <p>
            Aunque el proceso no necesariamente se pierde, sí pueden generarse
            retrasos significativos que afectan la recuperación de cartera y la
            posibilidad de obtener medidas cautelares tempranas.
          </p>

          <p>
            Por esta razón, una adecuada estructuración procesal desde el inicio
            es fundamental para proteger los intereses financieros de la IPS.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Recomendaciones para IPS antes de iniciar una demanda contra una EPS
          </h2>

          <ul className={styles.checklist}>
            <li>Verificar la existencia de un título ejecutivo válido.</li>
            <li>Determinar correctamente la cuantía.</li>
            <li>Analizar la competencia territorial aplicable.</li>
            <li>Evaluar la viabilidad de medidas cautelares.</li>
            <li>Revisar posibles acuerdos o conciliaciones previas.</li>
            <li>Conservar toda la trazabilidad documental.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Recuperación judicial de cartera EPS en Bogotá y Colombia</h2>

          <p>
            Las IPS, clínicas y hospitales que enfrentan mora prolongada por
            parte de las EPS deben diseñar una estrategia procesal sólida antes
            de acudir a los tribunales.
          </p>

          <p>
            Identificar correctamente el juez competente constituye uno de los
            primeros pasos para lograr una recuperación efectiva de cartera,
            reducir tiempos de litigio y maximizar las posibilidades de éxito
            dentro del proceso ejecutivo.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Recuperamos cartera EPS
            mediante estrategias jurídicas, procesos ejecutivos y medidas
            cautelares en Bogotá y toda Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
