"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function CobroCarteraADRES() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Cobro de cartera en el sector salud
          </span>

          <h1 className={styles.title}>
            Cobro de cartera ante ADRES en Colombia: cómo recuperar pagos
            pendientes, negados o en objeción
          </h1>

          <p className={styles.subtitle}>
            Reclamación administrativa, respuesta a objeciones y ruta jurídica
            hasta lograr el recaudo efectivo.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Qué se puede cobrar ante ADRES en Colombia y cuándo aplica</h2>

          <p>
            El cobro de cartera ante la ADRES (Administradora de los Recursos
            del Sistema General de Seguridad Social en Salud) es un proceso
            fundamental para IPS, clínicas y prestadores de servicios de salud
            en Colombia, especialmente cuando existen servicios prestados que no
            han sido reconocidos o pagados por las EPS u otras entidades del
            sistema.
          </p>

          <p>
            En términos generales, la ADRES actúa como un mecanismo de
            reconocimiento y pago en situaciones específicas definidas por la
            normativa del sistema de salud colombiano. Sin embargo, para que el
            cobro sea exitoso, es necesario cumplir estrictamente con requisitos
            técnicos, administrativos y jurídicos.
          </p>

          <p>Ante ADRES pueden reclamarse valores derivados de:</p>

          <ul className={styles.checklist}>
            <li>
              Accidentes de tránsito con vehículos no asegurados o no
              identificados (SOAT/ECAT)
            </li>
            <li>
              Eventos catastróficos o situaciones de emergencia declaradas por
              el sistema
            </li>
            <li>
              Servicios y tecnologías en salud NO PBS cuando cumplen requisitos
              de reconocimiento
            </li>
            <li>
              Reclamaciones derivadas de glosas, objeciones o inconsistencias
              técnicas en la facturación
            </li>
            <li>
              Servicios prestados a pacientes cubiertos por fondos de
              compensación del sistema
            </li>
          </ul>

          <p>
            Un error común en IPS y clínicas es asumir que toda factura puede
            ser cobrada directamente ante ADRES, cuando en realidad cada caso
            requiere validación normativa específica.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Ruta completa para recuperar cartera ante ADRES y maximizar el
            recaudo
          </h2>

          <p>
            El éxito en el cobro ante ADRES no depende únicamente de radicar
            documentos, sino de construir una estrategia estructurada que
            combine análisis jurídico, soporte clínico y seguimiento
            administrativo constante.
          </p>

          <p>
            A continuación, se presenta la ruta recomendada para maximizar las
            probabilidades de reconocimiento y pago:
          </p>

          <ol className={styles.orderedList}>
            <li>
              <strong>Consolidación de expediente:</strong> radicación completa,
              soportes clínicos y administrativos debidamente organizados.
              Incluye historia clínica, epicrisis, autorizaciones, soportes de
              prestación y facturación validada.
            </li>

            <li>
              <strong>Validación normativa del caso:</strong> análisis jurídico
              para determinar si la reclamación cumple con los requisitos del
              régimen aplicable (SOAT, ECAT, NO PBS u otros mecanismos de
              financiación).
            </li>

            <li>
              <strong>Respuesta técnica a objeciones:</strong> estructuración de
              respuestas frente a glosas o negaciones, sustentadas en
              normatividad del sector salud y soportes clínicos.
            </li>

            <li>
              <strong>Seguimiento estructurado:</strong> control de términos
              administrativos, trazabilidad de radicación y gestión constante
              del expediente ante ADRES.
            </li>

            <li>
              <strong>Gestión de subsanaciones:</strong> corrección de errores
              documentales o técnicos que puedan generar devoluciones o
              rechazos.
            </li>

            <li>
              <strong>Ruta jurídica:</strong> en caso de negación injustificada,
              activación de acciones legales, incluyendo demandas y mecanismos
              contenciosos según el caso.
            </li>
          </ol>

          <p>
            Esta ruta permite reducir significativamente el riesgo de pérdida de
            cartera por errores administrativos o técnicos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principales errores que hacen perder cartera ante ADRES</h2>

          <p>
            En la práctica, muchas IPS y clínicas en Colombia pierden recursos
            importantes no por falta de derecho al cobro, sino por errores en la
            gestión del proceso.
          </p>

          <ul className={styles.checklist}>
            <li>Radicación incompleta o con errores en soportes clínicos</li>
            <li>
              Falta de coherencia entre factura, historia clínica y soportes
              administrativos
            </li>
            <li>
              Desconocimiento del régimen aplicable a cada tipo de reclamación
            </li>
            <li>No responder glosas o hacerlo fuera de términos legales</li>
            <li>Ausencia de seguimiento posterior a la radicación</li>
            <li>
              No escalar jurídicamente los casos con negaciones reiteradas
            </li>
          </ul>

          <p>
            Estos errores generan pérdidas millonarias acumuladas en el sistema
            de salud, especialmente en instituciones con alto volumen de
            atención.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Cómo aumentar la probabilidad de pago en reclamaciones ADRES</h2>

          <p>
            La probabilidad de éxito en el cobro ante ADRES aumenta
            significativamente cuando la reclamación se estructura desde el
            inicio con enfoque jurídico-técnico.
          </p>

          <div className={styles.letterBox}>
            <p>
              El éxito en reclamaciones ante ADRES depende de la calidad
              documental, la precisión técnica y la capacidad de escalar el caso
              jurídicamente cuando la respuesta administrativa no es favorable.
            </p>

            <p>
              Adicionalmente, la estandarización de procesos internos dentro de
              la IPS o clínica permite reducir errores recurrentes y mejorar la
              tasa de aprobación de reclamaciones.
            </p>

            <p>
              Una estrategia adecuada no solo busca el pago, sino también evitar
              futuras devoluciones mediante control documental y mejora continua
              del proceso de facturación.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Impacto del cobro ADRES en la sostenibilidad financiera de IPS
          </h2>

          <p>
            La recuperación efectiva de cartera ante ADRES tiene un impacto
            directo en el flujo de caja de las instituciones de salud. En muchos
            casos, estos recursos representan una fuente crítica de liquidez
            para la operación diaria.
          </p>

          <p>
            Una gestión ineficiente del cobro puede generar desfinanciamiento,
            retrasos en pagos a proveedores y afectación en la prestación del
            servicio de salud.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            PRAVICE acompaña el litigio hasta el final, orientado al recaudo
            efectivo.
          </p>
        </footer>
      </article>
    </main>
  );
}
