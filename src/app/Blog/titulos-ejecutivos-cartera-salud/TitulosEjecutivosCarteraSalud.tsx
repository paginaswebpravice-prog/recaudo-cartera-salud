"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function TitulosEjecutivosCarteraSalud() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Proceso ejecutivo y recuperación de cartera EPS
          </span>

          <h1 className={styles.title}>
            Títulos ejecutivos válidos para cobrar cartera de salud en Colombia
          </h1>

          <p className={styles.subtitle}>
            Conozca cuáles son los documentos que permiten iniciar un proceso
            ejecutivo para recuperar cartera de EPS, entidades territoriales,
            aseguradoras y demás responsables de pago en el sector salud
            colombiano.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué es un título ejecutivo en Colombia?</h2>

          <p>
            Un título ejecutivo es el documento que contiene una obligación
            clara, expresa y exigible, permitiendo acudir directamente ante un
            juez para solicitar el pago de una deuda mediante un proceso
            ejecutivo.
          </p>

          <p>
            En el sector salud, los títulos ejecutivos son fundamentales para
            que IPS, clínicas, hospitales y proveedores puedan recuperar cartera
            vencida frente a EPS y demás entidades responsables de pago.
          </p>

          <p>
            Sin un título ejecutivo válido, el acreedor puede enfrentar mayores
            dificultades procesales o incluso verse obligado a iniciar procesos
            declarativos más extensos antes de obtener una decisión judicial.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Requisitos que debe cumplir un título ejecutivo</h2>

          <p>
            El Código General del Proceso exige que la obligación contenida en
            el documento sea:
          </p>

          <ul className={styles.checklist}>
            <li>Clara respecto al valor adeudado.</li>
            <li>Expresa y verificable documentalmente.</li>
            <li>Exigible al momento de presentar la demanda.</li>
            <li>Identificable respecto al deudor.</li>
            <li>Soportada mediante documentación suficiente.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Principales títulos ejecutivos utilizados en el sector salud</h2>

          <p>
            Dependiendo de las características de la obligación, existen varios
            documentos que pueden servir como base para iniciar un proceso
            ejecutivo contra una EPS o entidad obligada al pago.
          </p>

          <ul className={styles.checklist}>
            <li>Facturas electrónicas de venta aceptadas.</li>
            <li>Actas de conciliación debidamente suscritas.</li>
            <li>Acuerdos de pago firmados por las partes.</li>
            <li>Reconocimientos expresos de deuda.</li>
            <li>Contratos con obligaciones líquidas y exigibles.</li>
            <li>Sentencias judiciales ejecutoriadas.</li>
            <li>Laudos arbitrales.</li>
            <li>Títulos valores cuando sean aplicables.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            ¿La factura electrónica puede ser título ejecutivo contra una EPS?
          </h2>

          <p>
            En muchos casos sí. La factura electrónica ha adquirido relevancia
            como título ejecutivo siempre que cumpla los requisitos legales y
            exista evidencia de aceptación expresa o tácita por parte del
            obligado al pago.
          </p>

          <p>
            No obstante, cada caso debe analizarse individualmente porque pueden
            existir glosas, devoluciones, objeciones o controversias que afecten
            la fuerza ejecutiva del documento.
          </p>

          <p>
            Por esta razón es recomendable revisar integralmente la trazabilidad
            documental antes de presentar una demanda ejecutiva.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Importancia de las conciliaciones y acuerdos de pago para cobrar
            cartera
          </h2>

          <p>
            Muchas IPS logran fortalecer significativamente su posición jurídica
            mediante actas de conciliación y acuerdos de pago firmados con las
            EPS.
          </p>

          <p>
            Estos documentos suelen convertirse en títulos ejecutivos sólidos,
            ya que contienen el reconocimiento expreso de la obligación y
            establecen valores, plazos y condiciones de pago claramente
            definidos.
          </p>

          <p>
            Cuando una EPS incumple un acuerdo de pago, la recuperación judicial
            suele resultar más eficiente que en escenarios donde únicamente
            existen facturas pendientes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Errores frecuentes que debilitan un título ejecutivo en salud</h2>

          <ul className={styles.checklist}>
            <li>Documentación incompleta.</li>
            <li>Falta de soporte de radicación.</li>
            <li>Errores en valores facturados.</li>
            <li>Ausencia de aceptación de la factura.</li>
            <li>Acuerdos de pago mal estructurados.</li>
            <li>Inconsistencias entre anexos y facturación.</li>
            <li>Problemas de representación legal.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Cómo preparar correctamente una demanda ejecutiva contra una EPS
          </h2>

          <p>
            Antes de presentar una demanda es recomendable realizar una
            auditoría documental completa para verificar la existencia del
            título ejecutivo, calcular correctamente capital e intereses y
            validar que no existan riesgos procesales que puedan retrasar la
            recuperación de la cartera.
          </p>

          <p>
            Una preparación adecuada incrementa las probabilidades de obtener un
            mandamiento de pago favorable y facilita la solicitud de medidas
            cautelares orientadas a garantizar el recaudo efectivo.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Recuperación de cartera EPS mediante títulos ejecutivos sólidos
          </h2>

          <p>
            La calidad del título ejecutivo suele ser uno de los factores más
            importantes dentro de cualquier estrategia de recuperación de
            cartera en Colombia.
          </p>

          <p>
            Contar con documentación completa, soportes organizados y
            obligaciones claramente determinadas permite acelerar los procesos
            judiciales y aumentar las probabilidades de éxito frente a EPS,
            entidades territoriales y demás responsables de pago.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> La recupera mediante
            estrategias legales, procesos ejecutivos y acciones judiciales para
            IPS, clínicas y hospitales en Colombia.
          </p>
        </footer>
      </article>
    </main>
  );
}
