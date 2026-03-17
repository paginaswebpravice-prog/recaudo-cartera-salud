import styles from "./Article.module.css";
import Link from "next/link";

export const metadata = {
  title:
    "Documentos para demandar una EPS por cartera en Colombia | Checklist para IPS y clínicas en Bogotá",
  description:
    "Checklist completo de documentos para demandar una EPS por cartera en Colombia. Requisitos para IPS y clínicas en Bogotá: facturas, soportes, radicación y proceso ejecutivo.",
};

export default function DocumentosDemandarEPS() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Proceso ejecutivo sector salud</span>

          <h1 className={styles.title}>
            Documentos para demandar una EPS por cartera en Colombia
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y prestadores de salud en Bogotá y
            Colombia que buscan estructurar demandas sólidas y evitar
            inadmisiones en el proceso ejecutivo.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <article className={styles.article}>
        {/* INTRO SEO */}
        <section className={styles.section}>
          <h2>
            Cobro de cartera a EPS en Colombia: la importancia de un expediente
            bien estructurado
          </h2>

          <p>
            En el cobro de cartera a EPS en Colombia, uno de los errores más
            frecuentes en IPS y clínicas en Bogotá es iniciar procesos
            ejecutivos sin contar con la documentación completa y organizada.
          </p>

          <p>
            Un expediente incompleto puede generar inadmisión de la demanda,
            retrasos procesales y pérdida de oportunidades de recaudo efectivo,
            afectando directamente la liquidez de las instituciones del sector
            salud.
          </p>
        </section>

        {/* DOCUMENTACIÓN */}
        <section className={styles.section}>
          <h2>Documentación mínima por factura para demandar a una EPS</h2>

          <p>
            Para garantizar la viabilidad de una demanda ejecutiva en Colombia,
            es fundamental que cada factura cuente con soportes completos y
            verificables.
          </p>

          <ul className={styles.checklist}>
            <li>Factura en PDF (y XML si aplica según normativa vigente)</li>
            <li>Prueba de radicación o acuse con fecha y hora verificables</li>
            <li>
              Soportes clínicos y administrativos (historias clínicas, órdenes,
              autorizaciones, entre otros)
            </li>
            <li>
              Soportes de pagos parciales o abonos correctamente imputados
            </li>
            <li>
              Relación consolidada en Excel con número de factura, fechas,
              valores, abonos y saldo final
            </li>
          </ul>

          <p>
            Esta documentación es clave para demostrar la existencia de la
            obligación, su exigibilidad y el saldo adeudado por la EPS.
          </p>
        </section>

        {/* ERRORES COMUNES */}
        <section className={styles.sectionAlt}>
          <h2>Errores comunes que generan inadmisión de la demanda</h2>

          <p>
            En Bogotá y otras ciudades de Colombia, es frecuente que las
            demandas de cobro de cartera en el sector salud sean inadmitidas por
            errores evitables.
          </p>

          <p>
            Entre los principales errores se encuentran la falta de soportes,
            inconsistencias en valores, ausencia de prueba de radicación o
            documentación incompleta.
          </p>

          <p>
            Estos errores no solo retrasan el proceso, sino que pueden debilitar
            la posición jurídica de la IPS o clínica frente a la EPS.
          </p>
        </section>

        {/* RECOMENDACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Recomendaciones clave antes de demandar</h2>

          <p>
            Antes de iniciar un proceso ejecutivo en Colombia, es indispensable
            realizar un análisis jurídico completo de la cartera.
          </p>

          <p>
            Esto incluye verificar la exigibilidad de las facturas, controlar la
            prescripción y definir una estrategia de cobro que combine gestión
            prejurídica y acciones judiciales.
          </p>

          <p>
            En muchos casos, especialmente en el sector salud en Bogotá, también
            es recomendable adelantar investigación patrimonial para identificar
            activos de la EPS y solicitar medidas cautelares efectivas.
          </p>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.sectionHighlight}>
          <h2>Expedientes sin improvisación</h2>

          <p>
            En el cobro de cartera EPS en Colombia, la preparación del
            expediente no es un trámite administrativo, sino un factor
            determinante para el éxito del proceso.
          </p>

          <p>
            Una demanda bien estructurada permite obtener el mandamiento de pago
            de forma más ágil, avanzar en medidas cautelares y maximizar el
            recaudo efectivo.
          </p>

          <p>
            Improvisar en esta etapa puede traducirse en pérdida de tiempo,
            recursos y oportunidades de recuperación.
          </p>
        </section>

        {/* CIERRE SEO */}
        <section className={styles.section}>
          <h2>
            Preparación jurídica para el recaudo efectivo en el sector salud
          </h2>

          <p>
            Las IPS, clínicas y prestadores de servicios en Bogotá y Colombia
            que estructuran correctamente sus expedientes logran mayores tasas
            de éxito en el cobro de cartera a EPS.
          </p>

          <p>
            Contar con documentación completa, coherente y jurídicamente sólida
            es el primer paso para garantizar resultados en el proceso
            ejecutivo.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            ¿Va a demandar una EPS en Bogotá o Colombia?{" "}
            <strong>
              PRAVICE estructura expedientes sólidos para lograr recaudo
              efectivo.
            </strong>
          </p>
        </footer>
      </article>
    </main>
  );
}
