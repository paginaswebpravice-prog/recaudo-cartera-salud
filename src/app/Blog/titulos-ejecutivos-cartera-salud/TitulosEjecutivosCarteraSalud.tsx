"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function TitulosEjecutivosCarteraSalud() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Cobro judicial y recuperación de cartera en salud
          </span>

          <h1 className={styles.title}>
            ¿Qué documentos sirven para cobrar una EPS por vía ejecutiva en
            Colombia?
          </h1>

          <p className={styles.subtitle}>
            Facturas, acuerdos de pago, conciliaciones y otros documentos que
            pueden respaldar el cobro judicial de cartera para IPS, clínicas y
            hospitales. Conozca qué debe revisar antes de iniciar un proceso
            ejecutivo.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>
            Antes de demandar una EPS: el documento que respalda la deuda es
            fundamental
          </h2>

          <p>
            Cuando una IPS, clínica u hospital acumula cartera vencida frente a
            una EPS, una de las primeras preguntas suele ser si esa obligación
            puede cobrarse directamente mediante un proceso ejecutivo.
          </p>

          <p>
            La respuesta depende de la documentación disponible y de la forma en
            que se encuentra acreditada la obligación. No basta únicamente con
            demostrar que se prestó un servicio o que existe una factura
            pendiente. Es necesario analizar si los documentos permiten
            acreditar una obligación con las características exigidas para
            acudir a un proceso ejecutivo.
          </p>

          <p>
            Por eso, antes de presentar una demanda, resulta importante revisar
            la cartera cuenta por cuenta. En algunos casos la documentación
            permitirá avanzar directamente con una acción ejecutiva; en otros,
            puede ser necesario fortalecer primero los soportes, consolidar un
            reconocimiento de deuda o utilizar otros mecanismos de cobro.
          </p>
        </section>

        {/* QUÉ ES */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué es un título ejecutivo y por qué es importante para cobrar
            cartera de salud?
          </h2>

          <p>
            En términos generales, un título ejecutivo es el documento o
            conjunto de documentos que permite demostrar la existencia de una
            obligación y solicitar judicialmente su cumplimiento cuando reúne
            las condiciones legales necesarias.
          </p>

          <p>
            Su importancia para el sector salud es evidente. Una IPS puede tener
            millones de pesos facturados y pendientes de pago, pero la
            posibilidad de iniciar directamente un proceso ejecutivo dependerá
            de la solidez de los documentos que respaldan cada obligación.
          </p>

          <p>
            En otras palabras, no toda cartera vencida tiene automáticamente la
            misma fuerza para ser cobrada judicialmente. Por eso es importante
            diferenciar entre una cuenta pendiente de pago y una obligación que
            cuenta con un soporte suficiente para iniciar una acción ejecutiva.
          </p>
        </section>

        {/* REQUISITOS */}
        <section className={styles.section}>
          <h2>
            ¿Qué debe demostrar un documento para respaldar un proceso
            ejecutivo?
          </h2>

          <p>
            La obligación que se pretende cobrar debe permitir identificar con
            claridad qué se debe, quién debe pagar y en qué momento la
            obligación se hizo exigible.
          </p>

          <p>
            Antes de iniciar una demanda, normalmente es necesario verificar
            aspectos como los siguientes:
          </p>

          <ul className={styles.checklist}>
            <li>
              Que la obligación esté claramente determinada o pueda determinarse
              a partir de los documentos disponibles.
            </li>

            <li>
              Que exista una manifestación documental de la obligación y del
              responsable del pago.
            </li>

            <li>
              Que la deuda sea actualmente exigible y no esté sujeta a una
              condición pendiente.
            </li>

            <li>
              Que los valores reclamados coincidan con la documentación y los
              soportes disponibles.
            </li>

            <li>
              Que pueda identificarse correctamente al deudor y a quien tiene
              derecho a exigir el pago.
            </li>

            <li>
              Que no existan inconsistencias importantes entre facturas,
              contratos, acuerdos, conciliaciones y demás soportes.
            </li>
          </ul>

          <p>
            Una revisión previa puede evitar que un proceso se retrase por
            problemas documentales que pudieron identificarse antes de acudir a
            la vía judicial.
          </p>
        </section>

        {/* DOCUMENTOS */}
        <section className={styles.sectionAlt}>
          <h2>
            Principales documentos que pueden respaldar el cobro ejecutivo de
            cartera en salud
          </h2>

          <p>
            La documentación disponible puede variar según la relación
            contractual, la forma de facturación y el historial de negociación
            entre la IPS y la entidad responsable del pago.
          </p>

          <p>
            Entre los documentos que pueden ser relevantes dentro de una
            estrategia de cobro se encuentran:
          </p>

          <ul className={styles.checklist}>
            <li>
              Facturas electrónicas que cumplan los requisitos aplicables.
            </li>

            <li>
              Actas de conciliación en las que se reconozcan obligaciones y se
              establezcan condiciones de pago.
            </li>

            <li>
              Acuerdos de pago firmados entre la IPS y la entidad responsable.
            </li>

            <li>
              Documentos que contengan un reconocimiento expreso de deuda.
            </li>

            <li>
              Contratos acompañados de documentos que permitan determinar una
              obligación clara y exigible.
            </li>

            <li>Sentencias judiciales ejecutoriadas.</li>

            <li>Laudos arbitrales cuando resulten aplicables.</li>

            <li>
              Otros títulos valores o documentos con fuerza ejecutiva según las
              circunstancias del caso.
            </li>
          </ul>

          <p>
            Lo importante es no asumir que todos estos documentos funcionan de
            la misma manera en cualquier situación. La fuerza jurídica de cada
            uno depende de su contenido, de la forma en que fue emitido y de los
            demás soportes que acompañan la obligación.
          </p>
        </section>

        {/* FACTURA */}
        <section className={styles.section}>
          <h2>
            ¿Una factura electrónica permite demandar a una EPS por cartera
            vencida?
          </h2>

          <p>
            La factura electrónica puede tener un papel relevante dentro del
            cobro de cartera, pero antes de utilizarla como base de una demanda
            es necesario revisar cuidadosamente su trazabilidad y las
            circunstancias particulares de la obligación.
          </p>

          <p>
            Por ejemplo, resulta importante verificar la emisión de la factura,
            su relación con los servicios efectivamente prestados, los soportes
            correspondientes y la existencia de situaciones que puedan generar
            controversia sobre el valor reclamado.
          </p>

          <p>
            También debe analizarse si existen glosas, devoluciones, objeciones
            o discusiones pendientes. Una factura puede representar una cuenta
            por cobrar legítima, pero eso no significa que automáticamente esté
            libre de controversias que deban revisarse antes de iniciar una
            acción judicial.
          </p>

          <p>
            Por esta razón, en cartera de salud es recomendable analizar el
            expediente documental completo y no depender únicamente del archivo
            de la factura.
          </p>
        </section>

        {/* ACUERDOS */}
        <section className={styles.sectionAlt}>
          <h2>
            Acuerdos de pago con EPS: una oportunidad para fortalecer el cobro
            de la cartera
          </h2>

          <p>
            Cuando una EPS reconoce una obligación y suscribe un acuerdo de
            pago, la situación documental puede cambiar de forma importante.
            Estos acuerdos permiten dejar constancia del valor reconocido, las
            fechas de pago y las condiciones que fueron aceptadas por las
            partes.
          </p>

          <p>
            Sin embargo, no todos los acuerdos tienen la misma calidad. Un
            documento ambiguo, sin valores claramente definidos o firmado sin
            verificar la representación de quien interviene puede generar nuevos
            problemas cuando llega el momento de exigir el cumplimiento.
          </p>

          <p>
            Por eso, antes de firmar un acuerdo, conviene revisar aspectos como:
          </p>

          <ul className={styles.checklist}>
            <li>El valor exacto reconocido.</li>

            <li>La identificación de las facturas u obligaciones incluidas.</li>

            <li>Las fechas concretas en las que debe realizarse cada pago.</li>

            <li>Las consecuencias previstas frente al incumplimiento.</li>

            <li>
              La capacidad y representación de la persona que firma el
              documento.
            </li>

            <li>
              La coherencia entre el acuerdo, las conciliaciones previas y los
              soportes de cartera.
            </li>
          </ul>
        </section>

        {/* CONCILIACIONES */}
        <section className={styles.section}>
          <h2>
            ¿Un acta de conciliación puede ayudar a cobrar una deuda de una EPS?
          </h2>

          <p>
            Las conciliaciones pueden ser especialmente útiles cuando existe una
            cartera acumulada y las partes necesitan depurar diferencias sobre
            valores, facturas o glosas pendientes.
          </p>

          <p>
            Una conciliación bien documentada permite identificar qué
            obligaciones fueron reconocidas, cuáles continúan en discusión y qué
            compromisos concretos asumió cada parte.
          </p>

          <p>
            Para una IPS, esto puede ser relevante porque transforma una
            discusión extensa sobre múltiples cuentas en un documento más claro
            sobre las obligaciones efectivamente aceptadas. Si posteriormente se
            produce un incumplimiento, ese soporte puede ser fundamental dentro
            de la estrategia de recuperación.
          </p>
        </section>

        {/* GLOSAS */}
        <section className={styles.sectionAlt}>
          <h2>
            Glosas y cartera discutida: por qué no conviene demandar sin revisar
            primero los soportes
          </h2>

          <p>
            Uno de los errores más comunes en la gestión de cartera consiste en
            tratar todas las facturas vencidas como si tuvieran exactamente la
            misma situación jurídica.
          </p>

          <p>
            Algunas cuentas pueden estar completamente depuradas y contar con
            soportes sólidos. Otras pueden tener glosas pendientes, diferencias
            en valores, devoluciones o discusiones contractuales que requieren
            una revisión adicional.
          </p>

          <p>
            Separar la cartera según su estado permite definir una estrategia
            más eficiente. No necesariamente todas las obligaciones deben seguir
            el mismo camino de cobro.
          </p>

          <ul className={styles.checklist}>
            <li>Cartera sin controversias relevantes.</li>

            <li>Cartera con glosas respondidas o en proceso de depuración.</li>

            <li>Cartera reconocida mediante acuerdos de pago.</li>

            <li>
              Obligaciones conciliadas con cronogramas de pago pendientes.
            </li>

            <li>
              Cuentas con controversias contractuales o documentales que
              requieren análisis previo.
            </li>
          </ul>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>
            Errores que pueden debilitar el cobro judicial de cartera de una IPS
          </h2>

          <p>
            Muchas dificultades no aparecen en el momento de prestar el
            servicio, sino meses después, cuando la IPS intenta recuperar una
            cartera que lleva demasiado tiempo sin una gestión documental
            organizada.
          </p>

          <p>Algunos errores frecuentes son:</p>

          <ul className={styles.checklist}>
            <li>
              Conservar las facturas sin organizar los soportes relacionados.
            </li>

            <li>
              No contar con evidencia clara de radicación y trazabilidad de la
              cuenta.
            </li>

            <li>
              Mezclar obligaciones reconocidas con obligaciones todavía
              discutidas.
            </li>

            <li>
              Firmar acuerdos de pago sin identificar correctamente las facturas
              incluidas.
            </li>

            <li>
              No verificar quién tiene la facultad para representar a la entidad
              que suscribe un acuerdo.
            </li>

            <li>
              Dejar vencer oportunidades de negociación o cobro mientras la
              cartera continúa envejeciendo.
            </li>

            <li>
              Presentar una demanda sin realizar previamente una auditoría
              documental completa.
            </li>
          </ul>
        </section>

        {/* PASOS */}
        <section className={styles.sectionAlt}>
          <h2>
            Qué revisar antes de iniciar un proceso ejecutivo contra una EPS
          </h2>

          <p>
            Antes de llevar una cartera a la vía judicial, conviene realizar una
            revisión organizada. Esto permite determinar qué obligaciones están
            listas para avanzar y cuáles necesitan una gestión previa.
          </p>

          <ul className={styles.checklist}>
            <li>Identificar cada factura y el valor pendiente de pago.</li>

            <li>
              Revisar contratos, autorizaciones y demás documentos relacionados.
            </li>

            <li>
              Verificar radicación, respuestas, glosas y comunicaciones
              posteriores.
            </li>

            <li>
              Confirmar si existen conciliaciones o acuerdos de pago vigentes.
            </li>

            <li>Revisar reconocimientos expresos de deuda.</li>

            <li>
              Determinar qué obligaciones pueden estar actualmente exigibles.
            </li>

            <li>
              Separar la cartera según su nivel de solidez documental y
              posibilidad de recuperación.
            </li>
          </ul>

          <p>
            Esta etapa puede ahorrar tiempo y evitar que una estrategia judicial
            se construya sobre información incompleta.
          </p>
        </section>

        {/* ESTRATEGIA */}
        <section className={styles.section}>
          <h2>
            Una cartera bien documentada mejora las opciones de recuperación
          </h2>

          <p>
            El proceso ejecutivo no debería analizarse de forma aislada. Hace
            parte de una estrategia más amplia que puede incluir gestión
            administrativa, negociación, conciliación, acuerdos de pago y,
            cuando las circunstancias lo justifican, acciones judiciales.
          </p>

          <p>
            Para una IPS, la clave está en conocer el estado real de su cartera.
            Saber cuánto se debe, qué documentos respaldan cada obligación y
            cuáles cuentas presentan controversias permite tomar decisiones más
            informadas.
          </p>

          <p>
            Una cartera organizada no garantiza por sí sola el pago, pero una
            documentación sólida reduce incertidumbres y mejora la capacidad de
            actuar oportunamente cuando un pagador incumple sus obligaciones.
          </p>
        </section>

        {/* CIERRE */}
        <section className={styles.sectionAlt}>
          <h2>
            Recuperar cartera de salud requiere revisar cada obligación, no solo
            sumar las facturas vencidas
          </h2>

          <p>
            Cuando una IPS tiene una cartera importante frente a una EPS, el
            primer paso no debería ser enviar una demanda de manera automática.
            Es necesario identificar qué obligaciones están documentadas, cuáles
            han sido reconocidas, qué cuentas presentan glosas y cuáles pueden
            requerir una estrategia diferente.
          </p>

          <p>
            Una revisión jurídica y documental permite definir si existen
            elementos suficientes para un proceso ejecutivo o si conviene
            fortalecer primero la posición de la institución mediante
            conciliaciones, acuerdos de pago u otras acciones de recuperación.
          </p>

          <p>
            Cuanto antes se revise la cartera, mayores son las posibilidades de
            actuar con información organizada y evitar que el paso del tiempo
            complique innecesariamente el recaudo.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Acompaña a IPS, clínicas
            y hospitales en Colombia en la revisión documental de obligaciones,
            recuperación de cartera, negociación con responsables de pago y
            definición de estrategias jurídicas para el cobro de obligaciones
            vencidas.
          </p>
        </footer>
      </article>
    </main>
  );
}
