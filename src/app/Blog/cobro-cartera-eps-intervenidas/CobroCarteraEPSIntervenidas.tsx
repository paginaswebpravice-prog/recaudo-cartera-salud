"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function CobroCarteraEPSIntervenidas() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Estrategias jurídicas para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            Cómo cobrar cartera de EPS intervenidas o en liquidación en Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca las estrategias legales y financieras para recuperar cartera
            frente a EPS intervenidas, liquidadas o bajo vigilancia estatal en
            Colombia y cómo proteger el flujo financiero de su IPS o clínica.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Qué ocurre cuando una EPS es intervenida o entra en liquidación
          </h2>

          <p>
            Cuando una EPS es intervenida por la Superintendencia Nacional de
            Salud o entra en proceso de liquidación, las IPS, clínicas y
            prestadores de salud enfrentan un escenario de alto riesgo
            financiero debido a la incertidumbre sobre el pago de la cartera
            pendiente.
          </p>

          <p>
            En muchos casos, las instituciones continúan prestando servicios
            mientras se acumulan cuentas vencidas, generando impactos graves en
            flujo de caja, operación y sostenibilidad financiera.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Riesgos de tener cartera con EPS intervenidas en Colombia</h2>

          <div className={styles.box}>
            <h3>Pérdida parcial de cartera</h3>

            <p>
              Algunas EPS intervenidas presentan problemas financieros severos
              que dificultan el pago completo de las obligaciones pendientes.
            </p>

            <h3>Procesos administrativos prolongados</h3>

            <p>
              Las reclamaciones pueden tardar meses o incluso años dependiendo
              del estado financiero y administrativo de la EPS.
            </p>

            <h3>Congelamiento de pagos</h3>

            <p>
              Durante ciertos procesos de intervención o liquidación, los pagos
              pueden suspenderse temporalmente mientras se reorganizan las
              obligaciones.
            </p>

            <h3>Dificultades de conciliación</h3>

            <p>
              Muchas IPS enfrentan problemas para validar cartera, glosas y
              soportes durante procesos de reorganización administrativa.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Cómo cobrar cartera a EPS intervenidas o liquidadas en Colombia
          </h2>

          <ul className={styles.checklist}>
            <li>Consolidar cartera total pendiente</li>
            <li>Validar soportes clínicos y administrativos</li>
            <li>Revisar glosas y conciliaciones pendientes</li>
            <li>Radicar reclamaciones completas y oportunas</li>
            <li>Hacer seguimiento permanente al proceso</li>
            <li>Priorizar cartera con mayor probabilidad de recuperación</li>
            <li>Evaluar acciones jurídicas y cautelares</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Importancia de la trazabilidad documental en procesos de liquidación
          </h2>

          <p>
            La trazabilidad documental es clave para aumentar las probabilidades
            de recuperación de cartera frente a EPS intervenidas o liquidadas en
            Colombia.
          </p>

          <p>
            Las IPS deben conservar soportes de facturación, radicación,
            contratos, autorizaciones, conciliaciones y respuestas de glosas
            para sustentar adecuadamente las reclamaciones.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Qué hacer si la EPS intervenida no responde reclamaciones de pago
          </h2>

          <p>
            Cuando la EPS no responde o mantiene retrasos injustificados, puede
            ser necesario iniciar estrategias jurídicas adicionales para
            proteger la recuperación de cartera.
          </p>

          <p>
            Dependiendo del caso, las IPS pueden acudir a procesos de
            conciliación, reclamaciones formales, acciones judiciales o medidas
            cautelares frente a recursos disponibles.
          </p>

          <ul className={styles.checklist}>
            <li>Enviar requerimientos formales de pago</li>
            <li>Solicitar conciliaciones financieras</li>
            <li>Escalar reclamaciones ante entidades competentes</li>
            <li>Iniciar cobro prejurídico</li>
            <li>Evaluar procesos ejecutivos</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cómo reducir el riesgo financiero frente a EPS intervenidas</h2>

          <p>
            Las IPS y clínicas deben implementar controles permanentes de riesgo
            financiero, seguimiento de cartera y evaluación continua de EPS con
            antecedentes de mora o vigilancia estatal.
          </p>

          <p>
            También es recomendable fortalecer auditorías internas, mejorar
            procesos documentales y actuar rápidamente frente a señales de
            deterioro financiero de las EPS.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera EPS en Colombia con acompañamiento jurídico
          </h2>

          <p>
            La recuperación de cartera frente a EPS intervenidas requiere una
            estrategia integral que combine gestión administrativa, análisis
            financiero y acciones legales oportunas.
          </p>

          <p>
            Actuar tempranamente puede aumentar significativamente las
            probabilidades de recuperar recursos y evitar pérdidas millonarias
            para IPS y clínicas en Colombia.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Ayuda a IPS, clínicas y
            prestadores de salud en Colombia a recuperar cartera mediante
            estrategias jurídicas, conciliaciones y procesos efectivos frente a
            EPS intervenidas o en liquidación.
          </p>
        </footer>
      </article>
    </main>
  );
}
