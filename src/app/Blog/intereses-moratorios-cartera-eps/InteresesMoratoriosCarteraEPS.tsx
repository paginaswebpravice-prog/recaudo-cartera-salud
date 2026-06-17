"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function InteresesMoratoriosCarteraEPS() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Cartera EPS · Intereses moratorios · Colombia
          </span>

          <h1 className={styles.title}>
            Intereses moratorios en cartera EPS: cómo calcularlos correctamente
            en Colombia
          </h1>

          <p className={styles.subtitle}>
            Guía para IPS, clínicas, hospitales y prestadores de salud sobre el
            cálculo, reclamación y cobro de intereses moratorios derivados de
            facturas vencidas y obligaciones impagas por parte de EPS en
            Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué son los intereses moratorios en cartera EPS?</h2>

          <p>
            Los intereses moratorios son valores adicionales que pueden
            reclamarse cuando una obligación económica no es pagada dentro de
            los plazos legalmente establecidos. En el sector salud colombiano,
            estos intereses buscan compensar el perjuicio financiero generado a
            IPS, clínicas y hospitales por los retrasos en los pagos de las EPS.
          </p>

          <p>
            Cuando una factura se encuentra debidamente radicada, auditada y
            exigible, el incumplimiento de los términos de pago puede generar el
            derecho a reclamar intereses moratorios junto con el capital
            adeudado.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Por qué son importantes para una IPS?</h2>

          <p>
            Muchas instituciones enfocan sus esfuerzos únicamente en recuperar
            el capital adeudado. Sin embargo, los intereses moratorios pueden
            representar sumas significativas cuando existen cuentas con varios
            meses o años de atraso.
          </p>

          <ul className={styles.checklist}>
            <li>Compensan el costo financiero de la mora.</li>
            <li>Fortalecen la posición negociadora frente a la EPS.</li>
            <li>Incentivan acuerdos de pago más rápidos.</li>
            <li>Permiten recuperar parte del impacto en el flujo de caja.</li>
            <li>
              Pueden formar parte de las pretensiones de un proceso ejecutivo.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Elementos necesarios para calcular intereses moratorios</h2>

          <p>
            Antes de realizar cualquier liquidación es indispensable identificar
            correctamente la obligación principal y las fechas relevantes del
            proceso de cobro.
          </p>

          <ul className={styles.checklist}>
            <li>Valor original de la factura.</li>
            <li>Fecha de radicación.</li>
            <li>Fecha de exigibilidad del pago.</li>
            <li>Fecha efectiva de pago o fecha de liquidación.</li>
            <li>Tasa de interés aplicable.</li>
            <li>Acuerdos contractuales existentes entre las partes.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Errores frecuentes al liquidar intereses</h2>

          <p>
            Una liquidación incorrecta puede generar objeciones por parte de la
            EPS o incluso afectar el desarrollo de un proceso judicial.
          </p>

          <ul className={styles.checklist}>
            <li>Tomar una fecha de inicio equivocada.</li>
            <li>Aplicar tasas que no corresponden al período reclamado.</li>
            <li>Liquidar intereses sobre valores glosados o discutidos.</li>
            <li>No descontar pagos parciales realizados por la EPS.</li>
            <li>No conservar soportes de cálculo y trazabilidad.</li>
            <li>Presentar liquidaciones sin sustento documental.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Se pueden reclamar judicialmente?</h2>

          <p>
            Sí. En muchos procesos ejecutivos relacionados con cartera del
            sector salud, las IPS solicitan tanto el capital adeudado como los
            intereses causados por la mora.
          </p>

          <p>
            Para ello es fundamental demostrar la existencia de la obligación,
            su exigibilidad y la forma en que se realizó la liquidación. La
            documentación financiera y contractual adquiere especial relevancia
            en este tipo de reclamaciones.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Relación entre intereses moratorios y recuperación de cartera EPS
          </h2>

          <p>
            La correcta gestión de intereses forma parte de una estrategia
            integral de recuperación de cartera. Cuando una IPS conoce con
            precisión el valor actualizado de sus cuentas pendientes puede tomar
            mejores decisiones de negociación, conciliación o cobro judicial.
          </p>

          <p>
            Además, una liquidación técnicamente soportada permite cuantificar
            el impacto real de la mora sobre la institución y fortalecer las
            pretensiones económicas frente a las EPS.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Recomendaciones para IPS, clínicas y hospitales en Colombia</h2>

          <ul className={styles.checklist}>
            <li>Actualizar periódicamente las liquidaciones.</li>
            <li>Documentar todos los pagos parciales recibidos.</li>
            <li>Conservar soportes de radicación y facturación.</li>
            <li>Realizar conciliaciones periódicas de cartera.</li>
            <li>Validar jurídicamente las reclamaciones antes de demandar.</li>
            <li>
              Integrar la gestión financiera con la estrategia legal de cobro.
            </li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> asesora IPS, clínicas y hospitales en
            Colombia en recuperación de cartera, liquidación de intereses
            moratorios, conciliaciones y procesos ejecutivos contra EPS.
          </p>
        </footer>
      </article>
    </main>
  );
}
