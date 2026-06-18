"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function FactoringCarteraSalud() {
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
            Factoring de cartera en salud: ventajas, riesgos y alternativas
          </h1>

          <p className={styles.subtitle}>
            Conozca cuándo el factoring puede ayudar a mejorar la liquidez de
            una IPS, cuáles son sus riesgos financieros y qué alternativas
            existen para recuperar cartera de EPS sin afectar la rentabilidad de
            la institución.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué es el factoring de cartera en el sector salud?</h2>

          <p>
            El factoring es un mecanismo financiero mediante el cual una IPS,
            clínica u hospital vende sus cuentas por cobrar a una entidad
            financiera o empresa especializada a cambio de recibir liquidez de
            forma anticipada.
          </p>

          <p>
            En Colombia, esta práctica ha sido utilizada por instituciones que
            enfrentan retrasos en los pagos de EPS, ADRES o entidades
            territoriales y necesitan recursos inmediatos para sostener la
            operación.
          </p>

          <p>
            Aunque puede ser una solución temporal para mejorar el flujo de
            caja, no siempre representa la alternativa más rentable para la
            organización.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Cómo funciona el factoring de cartera médica?</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Paso 1:</strong> La IPS identifica una cartera susceptible
              de negociación.
            </p>

            <p>
              <strong>Paso 2:</strong> La entidad financiera evalúa el riesgo de
              pago de la EPS o deudor.
            </p>

            <p>
              <strong>Paso 3:</strong> Se ofrece un porcentaje del valor de la
              cartera como pago inmediato.
            </p>

            <p>
              <strong>Paso 4:</strong> La entidad financiera asume la gestión de
              recaudo según las condiciones pactadas.
            </p>

            <p>
              <strong>Paso 5:</strong> La IPS recibe liquidez anticipada, pero
              asume un costo financiero derivado del descuento aplicado.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Ventajas del factoring para IPS y clínicas</h2>

          <ul className={styles.checklist}>
            <li>Obtención rápida de liquidez.</li>
            <li>Reducción de presiones sobre el flujo de caja.</li>
            <li>Mayor capacidad para cubrir gastos operativos.</li>
            <li>Pago oportuno de nómina y proveedores.</li>
            <li>Disminución de la dependencia de desembolsos futuros.</li>
            <li>Posibilidad de financiar crecimiento institucional.</li>
            <li>Mayor estabilidad operativa en momentos críticos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Principales riesgos del factoring de cartera en salud</h2>

          <p>
            Aunque puede parecer una solución atractiva, existen riesgos que
            deben analizarse cuidadosamente antes de tomar una decisión.
          </p>

          <ul className={styles.checklist}>
            <li>
              Descuentos significativos sobre el valor real de la cartera.
            </li>
            <li>Pérdida de rentabilidad financiera.</li>
            <li>Reducción del valor recuperado por la institución.</li>
            <li>Dependencia recurrente de mecanismos de financiamiento.</li>
            <li>Limitación de ingresos futuros esperados.</li>
            <li>Condiciones contractuales complejas.</li>
            <li>Posibles costos adicionales por administración.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>¿Cuándo puede ser útil el factoring?</h2>

          <p>
            Existen escenarios donde el factoring puede convertirse en una
            herramienta válida para proteger la operación de la IPS.
          </p>

          <ul className={styles.checklist}>
            <li>Necesidades urgentes de liquidez.</li>
            <li>Expansión de infraestructura o servicios.</li>
            <li>Obligaciones financieras inmediatas.</li>
            <li>Altos niveles de cartera concentrada.</li>
            <li>Retrasos prolongados en los pagos de EPS.</li>
          </ul>

          <p>
            Sin embargo, debe evaluarse como una medida estratégica y no como
            una solución permanente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Alternativas al factoring para recuperar cartera de salud en
            Colombia
          </h2>

          <p>
            Antes de vender la cartera, muchas instituciones optan por
            mecanismos que permiten recuperar un porcentaje superior de los
            recursos adeudados.
          </p>

          <ul className={styles.checklist}>
            <li>Gestión de cobro prejurídico especializada.</li>
            <li>Conciliaciones con EPS.</li>
            <li>Acuerdos de pago estructurados.</li>
            <li>Procesos ejecutivos.</li>
            <li>Medidas cautelares.</li>
            <li>Recuperación jurídica de cartera.</li>
            <li>Fortalecimiento interno de recaudo.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Factoring vs recuperación jurídica de cartera</h2>

          <p>
            Mientras el factoring busca obtener liquidez inmediata mediante la
            venta de cuentas por cobrar, la recuperación jurídica tiene como
            objetivo recuperar la totalidad o una parte sustancial de la
            obligación pendiente.
          </p>

          <p>
            La decisión dependerá del estado financiero de la IPS, la calidad de
            la cartera, la urgencia de recursos y la viabilidad de iniciar
            acciones legales contra el deudor.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Aspectos que una IPS debe analizar antes de vender cartera</h2>

          <ul className={styles.checklist}>
            <li>Porcentaje de descuento ofrecido.</li>
            <li>Antigüedad de la cartera.</li>
            <li>Probabilidad de recuperación jurídica.</li>
            <li>Estado financiero institucional.</li>
            <li>Costos de oportunidad.</li>
            <li>Concentración de cartera por EPS.</li>
            <li>Impacto sobre la rentabilidad futura.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Factoring de cartera en Bogotá y Colombia: una decisión que requiere
            análisis financiero
          </h2>

          <p>
            El factoring puede aportar liquidez inmediata, pero también implica
            renunciar a una parte importante del valor de la cartera.
          </p>

          <p>
            Por esta razón, las IPS, clínicas y hospitales deben evaluar de
            manera integral las alternativas disponibles antes de vender sus
            cuentas por cobrar, especialmente cuando existen posibilidades
            reales de recuperación mediante estrategias administrativas o
            jurídicas.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Nuestro enfoque está
            orientado a la recuperación jurídica y estratégica de cartera para
            IPS, clínicas y hospitales en Colombia, buscando maximizar el valor
            recuperado y proteger la rentabilidad institucional.
          </p>
        </footer>
      </article>
    </main>
  );
}
