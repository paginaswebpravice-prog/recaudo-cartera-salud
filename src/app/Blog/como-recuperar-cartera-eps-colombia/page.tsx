import Link from "next/link";
import styles from "./Article.module.css";

export const metadata = {
  title:
    "Cómo recuperar cartera de EPS en Colombia | Guía legal para IPS y clínicas en Bogotá",
  description:
    "Aprenda cómo recuperar cartera de EPS en Colombia con estrategias legales efectivas. Guía para IPS y clínicas en Bogotá: cobro prejurídico, proceso ejecutivo y recuperación real de cartera en salud.",
};

export default function ArticlePage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Guía práctica sector salud</span>

          <h1 className={styles.title}>
            Cómo recuperar la cartera de las EPS en Colombia
          </h1>

          <p className={styles.subtitle}>
            Estrategia jurídica aplicada para IPS, clínicas y proveedores de
            salud en Bogotá y Colombia: desde el cobro prejurídico hasta el
            proceso ejecutivo con enfoque en recaudo efectivo.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO SEO */}
        <section className={styles.section}>
          <h2>Cobro de cartera a EPS en Colombia: el reto del sector salud</h2>

          <p>
            El cobro de cartera a EPS en Colombia es uno de los principales
            desafíos financieros para IPS, clínicas y proveedores de servicios
            de salud, especialmente en ciudades como Bogotá donde la operación
            asistencial es más alta. La acumulación de cartera vencida impacta
            directamente el flujo de caja y la sostenibilidad de las
            instituciones.
          </p>

          <p>
            Una estrategia adecuada de recuperación de cartera en el sector
            salud permite transformar cuentas en mora en ingresos reales,
            evitando pérdidas por prescripción o negociaciones desfavorables.
          </p>
        </section>

        {/* PROBLEMA */}
        <section className={styles.sectionAlt}>
          <h2>El problema real en el recaudo de cartera EPS</h2>

          <p>
            En Colombia, las EPS suelen retrasar pagos mediante glosas,
            devoluciones, auditorías extensas e inconsistencias documentales.
            Esto genera incertidumbre y dificulta la recuperación oportuna de la
            cartera.
          </p>

          <p>
            Sin una estrategia legal clara, muchas IPS y clínicas en Bogotá
            terminan acumulando cartera envejecida que pierde valor o se negocia
            con descuentos agresivos.
          </p>

          <p>
            La clave está en identificar qué cartera es exigible y activar
            mecanismos jurídicos oportunos para lograr el pago.
          </p>
        </section>

        {/* ETAPAS */}
        <section className={styles.section}>
          <h2>Etapas estratégicas para recuperar cartera EPS en Colombia</h2>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <span>1</span>
              <h3>Diagnóstico y control de términos</h3>
              <p>
                Análisis de antigüedad, radicación, saldos, glosas y riesgo de
                prescripción. Se define qué cartera va a cobro prejurídico y
                cuál debe pasar directamente a proceso ejecutivo.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>2</span>
              <h3>Cobro prejurídico estructurado</h3>
              <p>
                Envío de requerimientos formales, negociación estratégica y
                acuerdos de pago con trazabilidad verificable. Esta etapa es
                clave en el cobro de cartera en salud en Colombia.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>3</span>
              <h3>Proceso ejecutivo con medidas cautelares</h3>
              <p>
                Inicio de demanda ejecutiva, obtención de mandamiento de pago y
                aplicación de embargos para garantizar el recaudo efectivo de la
                cartera.
              </p>
            </div>
          </div>
        </section>

        {/* CARTA */}
        <section className={styles.section}>
          <h2>Modelo de carta de cobro prejurídico a EPS</h2>

          <p>
            Una carta de cobro bien estructurada aumenta significativamente la
            probabilidad de pago y fortalece la posición jurídica en Colombia
            ante un eventual proceso ejecutivo.
          </p>

          <div className={styles.tipBox}>
            Adjunte siempre relación detallada de facturas, fechas de
            radicación, vencimientos y saldos. La trazabilidad documental es
            clave en el cobro de cartera en el sector salud.
          </div>

          <div className={styles.letterBox}>
            <p>
              <strong>Asunto:</strong> Requerimiento formal de pago - Cartera
              vencida sector salud
            </p>
            <p>
              Señores
              <br />
              [Nombre EPS]
              <br />
              Área de Cartera - Colombia
            </p>
            <p>
              Por medio de la presente requerimos el pago de las facturas
              relacionadas en anexo, correspondientes a servicios de salud
              prestados y debidamente radicados, por un valor total de $______.
            </p>
            <p>
              Solicitamos realizar el pago dentro de los cinco (5) días hábiles
              siguientes a la recepción de esta comunicación.
            </p>
            <p>
              En caso de no obtener respuesta o pago, procederemos a iniciar las
              acciones legales correspondientes en Colombia, incluyendo proceso
              ejecutivo y medidas cautelares.
            </p>
            <p>
              Atentamente,
              <br />
              [IPS / Apoderado]
            </p>
          </div>
        </section>

        {/* EJECUTIVO */}
        <section className={styles.sectionHighlight}>
          <h2>
            El proceso ejecutivo: la vía más efectiva para recuperar cartera
          </h2>

          <ul className={styles.highlightList}>
            <li>Mandamiento de pago emitido por juez</li>
            <li>Embargo de cuentas bancarias y activos</li>
            <li>Consignaciones judiciales</li>
            <li>Acuerdos de pago con respaldo legal</li>
          </ul>

          <p className={styles.statement}>
            En PRAVICE no compramos cartera. Implementamos estrategias legales
            en Colombia para maximizar el recaudo y evitar pérdidas por
            descuentos.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores comunes en el cobro de cartera en salud</h2>

          <ul className={styles.checklist}>
            <li>No separar cartera exigible de la cartera en discusión.</li>
            <li>Falta de trazabilidad documental.</li>
            <li>Dejar vencer términos de prescripción.</li>
            <li>No planear medidas cautelares desde el inicio.</li>
          </ul>
        </section>

        {/* CIERRE SEO */}
        <section className={styles.section}>
          <h2>
            Recuperación de cartera EPS en Bogotá y Colombia con respaldo legal
          </h2>

          <p>
            La recuperación de cartera en el sector salud requiere una
            estrategia integral que combine gestión administrativa y acciones
            jurídicas oportunas. En PRAVICE acompañamos a IPS, clínicas y
            empresas del sector salud en Bogotá y toda Colombia en la
            estructuración de procesos efectivos de cobro.
          </p>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2>Preguntas frecuentes sobre cobro de cartera EPS</h2>

          <details className={styles.faq}>
            <summary>¿Cuándo iniciar un proceso ejecutivo en Colombia?</summary>
            <p>
              Cuando existe una obligación clara, expresa y exigible y no se ha
              obtenido pago tras el requerimiento formal.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿El cobro prejurídico realmente funciona en el sector salud?
            </summary>
            <p>
              Sí, cuando se estructura correctamente puede acelerar pagos y
              evitar procesos judiciales innecesarios.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>¿PRAVICE compra cartera EPS?</summary>
            <p>
              No. Nos enfocamos en la recuperación legal de cartera en Colombia
              mediante estrategias efectivas de recaudo.
            </p>
          </details>
        </section>
      </article>
    </main>
  );
}
