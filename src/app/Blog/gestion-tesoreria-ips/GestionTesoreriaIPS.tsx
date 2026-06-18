"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function GestionTesoreriaIPS() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Gestión financiera para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            Gestión de tesorería en IPS: claves para evitar problemas de
            liquidez
          </h1>

          <p className={styles.subtitle}>
            Descubra cómo una adecuada gestión de tesorería permite a las IPS,
            clínicas y hospitales en Colombia mejorar el flujo de caja, cumplir
            obligaciones financieras y reducir los riesgos derivados de la
            cartera vencida de EPS y entidades públicas.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué es la gestión de tesorería en una IPS?</h2>

          <p>
            La gestión de tesorería comprende todas las actividades relacionadas
            con la administración del efectivo disponible, los ingresos, los
            pagos y las proyecciones financieras de una institución prestadora
            de servicios de salud.
          </p>

          <p>
            En Colombia, muchas IPS enfrentan dificultades de liquidez debido a
            retrasos en los pagos por parte de EPS, glosas, devoluciones y
            procesos administrativos prolongados. Por esta razón, una adecuada
            administración de tesorería resulta indispensable para garantizar la
            continuidad operativa.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Principales objetivos de la tesorería en el sector salud</h2>

          <ul className={styles.checklist}>
            <li>Garantizar disponibilidad de efectivo para la operación.</li>
            <li>Cumplir oportunamente obligaciones laborales y tributarias.</li>
            <li>Priorizar pagos estratégicos a proveedores críticos.</li>
            <li>Reducir costos financieros derivados de endeudamiento.</li>
            <li>Optimizar la recuperación de cartera.</li>
            <li>Prevenir crisis de liquidez.</li>
            <li>Mejorar la planeación financiera institucional.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Problemas frecuentes de tesorería en las IPS colombianas</h2>

          <p>
            Las instituciones de salud suelen enfrentar situaciones que afectan
            directamente su caja y capacidad de operación:
          </p>

          <ul className={styles.checklist}>
            <li>Cartera vencida superior a 90, 180 o 360 días.</li>
            <li>Alta dependencia de pocas EPS.</li>
            <li>Glosas sin resolver oportunamente.</li>
            <li>Falta de seguimiento a cuentas por cobrar.</li>
            <li>Ausencia de proyecciones de flujo de efectivo.</li>
            <li>Incremento de costos operativos.</li>
            <li>Débil control de pagos y egresos.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cómo construir un flujo de caja efectivo para una IPS</h2>

          <p>
            El flujo de caja permite visualizar los ingresos y egresos futuros
            para anticipar necesidades financieras y tomar decisiones
            oportunamente.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Ingresos proyectados:</strong> pagos de EPS, ADRES,
              entidades territoriales, particulares y otros convenios.
            </p>

            <p>
              <strong>Egresos proyectados:</strong> nómina, seguridad social,
              proveedores médicos, impuestos, arriendos y obligaciones
              financieras.
            </p>

            <p>
              <strong>Resultado:</strong> identificar periodos de déficit o
              superávit de caja para tomar medidas preventivas.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Estrategias para mejorar la liquidez de una IPS</h2>

          <ul className={styles.checklist}>
            <li>Fortalecer la gestión de cobro prejurídico.</li>
            <li>Iniciar acciones jurídicas oportunamente.</li>
            <li>Reducir tiempos de respuesta a glosas.</li>
            <li>Implementar conciliaciones periódicas con EPS.</li>
            <li>Digitalizar procesos financieros.</li>
            <li>Monitorear indicadores de recaudo semanalmente.</li>
            <li>Diversificar las fuentes de ingresos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Indicadores clave para la tesorería de una IPS</h2>

          <p>
            Existen varios KPIs que permiten medir la salud financiera de la
            organización:
          </p>

          <ul className={styles.checklist}>
            <li>Días promedio de recaudo (DSO).</li>
            <li>Rotación de cartera.</li>
            <li>Liquidez corriente.</li>
            <li>Capital de trabajo.</li>
            <li>Porcentaje de cartera vencida.</li>
            <li>Cobertura de gastos operativos.</li>
            <li>Nivel de dependencia por EPS.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Relación entre tesorería y recuperación de cartera</h2>

          <p>
            Una gestión de tesorería eficiente depende directamente de la
            capacidad de la IPS para convertir sus cuentas por cobrar en
            efectivo disponible.
          </p>

          <p>
            Por esta razón, la recuperación de cartera debe considerarse parte
            integral de la estrategia financiera institucional y no únicamente
            una función administrativa o jurídica aislada.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Gestión de tesorería para IPS en Bogotá y Colombia: una necesidad
            estratégica
          </h2>

          <p>
            Las IPS que implementan controles de tesorería sólidos suelen
            presentar mejores niveles de liquidez, menor dependencia financiera
            y mayor capacidad de inversión.
          </p>

          <p>
            La combinación entre planeación financiera, seguimiento de cartera,
            conciliaciones oportunas y recuperación jurídica permite fortalecer
            la sostenibilidad institucional en un entorno cada vez más exigente.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia mediante estrategias jurídicas y financieras orientadas a
            la recuperación efectiva de cartera y fortalecimiento de la
            liquidez.
          </p>
        </footer>
      </article>
    </main>
  );
}
