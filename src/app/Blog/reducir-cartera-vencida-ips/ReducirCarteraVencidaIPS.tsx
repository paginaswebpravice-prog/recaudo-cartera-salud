"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function ReducirCarteraVencidaIPS() {
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
            Cómo reducir la cartera vencida en una IPS de forma estratégica
          </h1>

          <p className={styles.subtitle}>
            Estrategias financieras, operativas y jurídicas para disminuir la
            cartera vencida, mejorar el recaudo y fortalecer la liquidez de IPS,
            clínicas y hospitales en Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>
            Por qué la cartera vencida es uno de los mayores riesgos para una
            IPS
          </h2>

          <p>
            La cartera vencida representa uno de los principales problemas
            financieros para las Instituciones Prestadoras de Servicios de Salud
            en Colombia. Cuando las EPS, entidades territoriales o responsables
            de pago retrasan sus obligaciones, la IPS enfrenta dificultades para
            cubrir nómina, proveedores, impuestos e inversiones operativas.
          </p>

          <p>
            Aunque muchas organizaciones se enfocan únicamente en aumentar la
            producción de servicios médicos, la sostenibilidad financiera
            depende en gran medida de la capacidad para convertir las cuentas
            por cobrar en efectivo dentro de plazos razonables.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Principales causas del crecimiento de la cartera vencida en salud
          </h2>

          <ul className={styles.checklist}>
            <li>Radicación tardía de facturas médicas.</li>
            <li>Glosas sin respuesta oportuna.</li>
            <li>Errores documentales en soportes asistenciales.</li>
            <li>Falta de seguimiento a cuentas por cobrar.</li>
            <li>Demoras en conciliaciones con EPS.</li>
            <li>Ausencia de indicadores financieros de recaudo.</li>
            <li>Procesos internos poco estandarizados.</li>
            <li>Dependencia excesiva de uno o pocos pagadores.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Implementar una política formal de gestión de cartera</h2>

          <p>
            Toda IPS debería contar con políticas claras que definan plazos,
            responsables, procedimientos de seguimiento y escalamiento de las
            cuentas pendientes.
          </p>

          <p>
            Una política de cartera bien estructurada permite actuar antes de
            que las cuentas superen los 60, 90 o 180 días de mora, reduciendo el
            riesgo de deterioro financiero.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Clasificar la cartera por antigüedad</h2>

          <p>
            Segmentar las cuentas por rangos de vencimiento facilita la toma de
            decisiones y permite priorizar esfuerzos de recaudo.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Cartera corriente:</strong> 0 a 60 días.
            </p>

            <p>
              <strong>Cartera de riesgo medio:</strong> 61 a 120 días.
            </p>

            <p>
              <strong>Cartera crítica:</strong> 121 a 180 días.
            </p>

            <p>
              <strong>Cartera de alto riesgo:</strong> más de 180 días.
            </p>

            <p>
              Cada segmento requiere estrategias diferentes de seguimiento,
              conciliación o recuperación jurídica.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Fortalecer los procesos de facturación y radicación</h2>

          <p>
            Una de las mejores formas de reducir cartera vencida consiste en
            evitar que se generen objeciones desde el inicio.
          </p>

          <p>
            La correcta validación de soportes clínicos, autorizaciones,
            registros asistenciales y requisitos normativos disminuye glosas,
            devoluciones y retrasos en los pagos.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Crear indicadores de seguimiento permanente</h2>

          <p>
            La gestión de cartera debe medirse mediante indicadores financieros
            que permitan identificar tendencias y riesgos oportunamente.
          </p>

          <ul className={styles.checklist}>
            <li>Días promedio de cartera.</li>
            <li>Rotación de cartera.</li>
            <li>Porcentaje de recaudo mensual.</li>
            <li>Cartera mayor a 180 días.</li>
            <li>Valor recuperado por conciliación.</li>
            <li>Tasa de glosas aceptadas y objetadas.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Realizar conciliaciones periódicas con las EPS</h2>

          <p>
            Las conciliaciones permiten validar saldos, identificar diferencias
            contables y acelerar acuerdos de pago.
          </p>

          <p>
            Cuando se ejecutan de forma periódica, ayudan a evitar acumulaciones
            de cartera que posteriormente resultan más difíciles de recuperar.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Definir protocolos de cobro prejurídico</h2>

          <p>
            Antes de iniciar acciones judiciales, es recomendable desarrollar un
            proceso formal de cobro prejurídico que incluya requerimientos
            escritos, reuniones de seguimiento y acuerdos documentados.
          </p>

          <p>
            Esta etapa suele generar resultados positivos cuando se ejecuta de
            manera estructurada y con evidencia documental suficiente.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Cuándo considerar acciones judiciales</h2>

          <p>
            Si las gestiones administrativas y conciliatorias no generan
            resultados, puede ser necesario iniciar procesos ejecutivos u otras
            acciones legales para recuperar recursos adeudados.
          </p>

          <p>
            La oportunidad es clave. Retrasar excesivamente el cobro jurídico
            puede afectar la probabilidad real de recuperación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Tecnología para controlar la cartera vencida</h2>

          <p>
            Los sistemas de información especializados permiten automatizar
            alertas, controlar vencimientos, generar reportes y priorizar
            cuentas críticas.
          </p>

          <p>
            La digitalización de procesos financieros mejora significativamente
            la capacidad de gestión y seguimiento de las cuentas por cobrar.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Beneficios de reducir la cartera vencida en una IPS colombiana
          </h2>

          <ul className={styles.checklist}>
            <li>Mayor liquidez operativa.</li>
            <li>Menor necesidad de endeudamiento.</li>
            <li>Mejor capacidad de inversión.</li>
            <li>Mayor estabilidad financiera.</li>
            <li>Reducción de riesgos de insolvencia.</li>
            <li>Mejores relaciones con proveedores y colaboradores.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia mediante estrategias de recuperación de cartera, análisis
            financiero, conciliaciones y procesos jurídicos especializados para
            mejorar el recaudo y proteger la sostenibilidad institucional.
          </p>
        </footer>
      </article>
    </main>
  );
}
