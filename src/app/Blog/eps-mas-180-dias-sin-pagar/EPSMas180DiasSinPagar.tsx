"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function EPSMas180DiasSinPagar() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Guía jurídica y financiera para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            Qué hacer si una EPS lleva más de 180 días sin pagar en Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca las alternativas jurídicas, financieras y estratégicas para
            IPS, clínicas y prestadores de salud frente a mora prolongada de EPS
            en Colombia y cómo recuperar cartera vencida efectivamente.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Qué significa tener cartera EPS con más de 180 días de mora</h2>

          <p>
            Cuando una EPS supera los 180 días sin realizar pagos, la cartera
            empieza a convertirse en un riesgo financiero importante para IPS,
            clínicas y hospitales en Colombia. Esta situación afecta el flujo de
            caja, limita la capacidad operativa y aumenta el riesgo de pérdida
            parcial o total de los recursos adeudados.
          </p>

          <p>
            Muchas instituciones dejan pasar demasiado tiempo esperando acuerdos
            informales o respuestas administrativas que finalmente no generan
            soluciones reales de pago.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Principales riesgos de una EPS con mora prolongada en Colombia
          </h2>

          <div className={styles.box}>
            <h3>Problemas de flujo de caja</h3>

            <p>
              La falta de pago impacta directamente la operación financiera de
              IPS y clínicas, afectando nómina, proveedores y capacidad de
              atención.
            </p>

            <h3>Aumento de cartera vencida</h3>

            <p>
              Entre más tiempo permanezca la deuda sin gestión efectiva, más
              difícil puede ser su recuperación.
            </p>

            <h3>Riesgo de intervención o liquidación de EPS</h3>

            <p>
              Algunas EPS presentan problemas financieros graves que pueden
              terminar en procesos de intervención o liquidación, afectando la
              recuperación de cartera.
            </p>

            <h3>Pérdida de capacidad operativa</h3>

            <p>
              La acumulación de cuentas pendientes puede obligar a reducir
              servicios, personal o cobertura operativa.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Qué hacer si una EPS lleva más de 180 días sin pagar</h2>

          <ul className={styles.checklist}>
            <li>Consolidar el estado completo de la cartera pendiente</li>
            <li>Validar soportes y trazabilidad documental</li>
            <li>Revisar glosas, devoluciones y conciliaciones</li>
            <li>Enviar requerimientos formales de pago</li>
            <li>Iniciar gestión de cobro prejurídico</li>
            <li>Evaluar acciones judiciales y medidas cautelares</li>
            <li>Priorizar recuperación de cartera crítica</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Importancia del cobro prejurídico frente a EPS morosas</h2>

          <p>
            El cobro prejurídico permite ejercer presión formal sobre la EPS,
            dejando evidencia documental de las reclamaciones y preparando el
            camino para una eventual acción judicial.
          </p>

          <p>
            Una estrategia adecuada puede facilitar acuerdos de pago,
            conciliaciones o recuperación parcial antes de iniciar procesos más
            complejos.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cuándo iniciar un proceso judicial contra una EPS en Colombia</h2>

          <p>
            Si la EPS continúa incumpliendo pagos, dilatando respuestas o
            acumulando cartera vencida, puede ser necesario iniciar acciones
            judiciales para proteger los recursos de la institución.
          </p>

          <p>
            Dependiendo del caso, pueden adelantarse procesos ejecutivos,
            reclamaciones contractuales y solicitudes de medidas cautelares para
            intentar garantizar el recaudo efectivo.
          </p>

          <ul className={styles.checklist}>
            <li>Mora prolongada superior a 180 días</li>
            <li>Incumplimiento reiterado de acuerdos de pago</li>
            <li>Negativas injustificadas de reconocimiento</li>
            <li>Riesgo financiero alto para la IPS</li>
            <li>Problemas recurrentes de conciliación</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cómo proteger financieramente a una IPS frente a EPS morosas</h2>

          <p>
            Las IPS y clínicas deben implementar estrategias permanentes de
            seguimiento de cartera, control documental y evaluación de riesgo
            financiero frente a EPS con historial de mora.
          </p>

          <p>
            También es recomendable priorizar conciliaciones, fortalecer
            auditorías internas y actuar oportunamente antes de que la cartera
            continúe deteriorándose.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera EPS en Colombia con acompañamiento jurídico
          </h2>

          <p>
            La recuperación de cartera en salud requiere una estrategia integral
            que combine gestión administrativa, análisis financiero y acciones
            jurídicas oportunas frente a EPS morosas.
          </p>

          <p>
            Actuar rápidamente frente a mora prolongada puede marcar la
            diferencia entre recuperar la cartera o enfrentar pérdidas
            millonarias para la institución.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Ayuda a IPS, clínicas y
            prestadores de salud en Colombia a recuperar cartera mediante
            estrategias jurídicas, cobro prejurídico y acciones efectivas frente
            a EPS morosas.
          </p>
        </footer>
      </article>
    </main>
  );
}
