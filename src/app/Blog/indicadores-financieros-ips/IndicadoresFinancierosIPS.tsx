"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function IndicadoresFinancierosIPS() {
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
            Indicadores financieros que toda IPS debe monitorear en Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca los KPIs financieros más importantes para medir liquidez,
            rentabilidad, sostenibilidad y recuperación de cartera en IPS,
            clínicas y hospitales en Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            ¿Por qué son importantes los indicadores financieros en una IPS?
          </h2>

          <p>
            Las Instituciones Prestadoras de Servicios de Salud enfrentan
            desafíos permanentes relacionados con cartera vencida, retrasos en
            pagos por parte de EPS, glosas, devoluciones y presión sobre el
            flujo de caja. Por esta razón, monitorear indicadores financieros
            permite tomar decisiones oportunas y prevenir riesgos operativos.
          </p>

          <p>
            Un sistema de indicadores bien estructurado ayuda a identificar
            problemas antes de que afecten la sostenibilidad financiera de la
            organización.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Indicador 1: Liquidez corriente</h2>

          <p>
            Mide la capacidad de la IPS para cumplir sus obligaciones de corto
            plazo utilizando sus activos corrientes.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>Liquidez Corriente = Activos Corrientes / Pasivos Corrientes</p>
          </div>

          <p>
            Un resultado superior a 1 generalmente indica capacidad para atender
            compromisos financieros inmediatos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Indicador 2: Rotación de cartera</h2>

          <p>
            Este KPI muestra la velocidad con la que la IPS recupera los valores
            facturados a EPS, entidades territoriales y otros pagadores.
          </p>

          <ul className={styles.checklist}>
            <li>Permite medir eficiencia de recaudo.</li>
            <li>Identifica riesgos de mora.</li>
            <li>Ayuda a proyectar flujo de caja.</li>
            <li>Facilita estrategias de recuperación de cartera.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Indicador 3: Días promedio de cartera</h2>

          <p>
            Es uno de los indicadores más importantes para el sector salud
            colombiano debido a los frecuentes retrasos en los pagos.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>
              Días de Cartera = (Cartera Total / Facturación Promedio Diaria)
            </p>
          </div>

          <p>
            Cuanto mayor sea el resultado, mayor será la presión financiera
            sobre la IPS.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Indicador 4: Margen operativo</h2>

          <p>
            Permite conocer qué porcentaje de los ingresos permanece disponible
            después de cubrir los costos operativos asociados a la prestación de
            servicios de salud.
          </p>

          <ul className={styles.checklist}>
            <li>Evalúa eficiencia operativa.</li>
            <li>Facilita control de costos.</li>
            <li>Permite analizar rentabilidad institucional.</li>
            <li>Apoya la toma de decisiones gerenciales.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Indicador 5: Porcentaje de glosas</h2>

          <p>
            Las glosas afectan directamente los ingresos de las IPS. Por ello es
            indispensable medir permanentemente el porcentaje de facturación
            objetada por las EPS.
          </p>

          <div className={styles.letterBox}>
            <p>
              Porcentaje de Glosas = (Valor Glosado / Valor Facturado) × 100
            </p>
          </div>

          <p>
            Un incremento sostenido puede indicar problemas en procesos de
            facturación o documentación clínica.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Indicador 6: Nivel de endeudamiento</h2>

          <p>
            Este indicador refleja qué proporción de los activos de la IPS ha
            sido financiada mediante obligaciones con terceros.
          </p>

          <p>
            Un nivel de endeudamiento excesivo puede comprometer la estabilidad
            financiera y limitar la capacidad de inversión.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Indicador 7: EBITDA</h2>

          <p>
            El EBITDA permite medir el desempeño operativo real de la IPS antes
            de considerar aspectos financieros, tributarios y contables.
          </p>

          <p>
            Es ampliamente utilizado para evaluar sostenibilidad financiera,
            capacidad de crecimiento y generación de recursos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Indicadores específicos para IPS en Colombia</h2>

          <ul className={styles.checklist}>
            <li>Cartera mayor a 60 días.</li>
            <li>Cartera mayor a 180 días.</li>
            <li>Porcentaje de recaudo mensual.</li>
            <li>Valor recuperado mediante conciliaciones.</li>
            <li>Porcentaje de recuperación jurídica.</li>
            <li>Valor pendiente por glosas.</li>
            <li>Participación de cada EPS en la cartera total.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cómo construir un tablero financiero para una IPS</h2>

          <p>
            Las IPS más exitosas utilizan dashboards financieros que consolidan
            información de cartera, recaudo, liquidez, glosas y rentabilidad en
            tiempo real.
          </p>

          <p>
            Esto permite identificar riesgos tempranamente y priorizar acciones
            de recuperación de recursos antes de que se conviertan en problemas
            estructurales.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Indicadores financieros y recuperación de cartera: una relación
            directa
          </h2>

          <p>
            En el sector salud colombiano, la mayoría de los problemas de
            liquidez están relacionados con la recuperación tardía de cartera.
            Por ello, monitorear indicadores financieros debe complementarse con
            estrategias de cobro prejurídico, conciliación y procesos ejecutivos
            cuando sea necesario.
          </p>

          <p>
            Una gestión financiera basada en indicadores permite fortalecer la
            sostenibilidad institucional y mejorar la capacidad de crecimiento
            de la IPS.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia mediante estrategias jurídicas y financieras enfocadas en
            recuperación de cartera, mejora de liquidez y sostenibilidad
            financiera.
          </p>
        </footer>
      </article>
    </main>
  );
}
