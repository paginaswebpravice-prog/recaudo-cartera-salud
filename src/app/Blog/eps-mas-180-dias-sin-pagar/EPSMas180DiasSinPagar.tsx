"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function EPSMas180DiasSinPagar() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Recuperación de cartera EPS para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            EPS lleva más de 180 días sin pagar: ¿qué puede hacer una IPS?
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para revisar una cartera vencida, fortalecer el cobro,
            gestionar glosas y conciliaciones y evaluar cuándo resulta
            conveniente pasar del cobro administrativo al prejurídico o
            judicial.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}

      <article className={styles.article}>
        {/* INTRODUCCIÓN */}

        <section className={styles.section}>
          <h2>¿Qué hacer cuando una EPS lleva más de 180 días sin pagar?</h2>

          <p>
            Cuando una cuenta de una IPS supera los 180 días sin pago, ya no
            conviene tratarla simplemente como una factura pendiente. La
            antigüedad de la cartera es una señal de que la institución debe
            revisar qué está ocurriendo con esas obligaciones y definir una
            estrategia concreta de recuperación.
          </p>

          <p>
            En la práctica, una cartera puede permanecer vencida por razones
            diferentes: facturas que todavía presentan inconsistencias, glosas
            pendientes de resolver, dificultades en la radicación, diferencias
            de auditoría, compromisos de pago incumplidos o simplemente ausencia
            de una gestión de cobro suficientemente efectiva.
          </p>

          <p>
            Por eso, que una EPS lleve más de 180 días sin pagar no significa
            automáticamente que la única alternativa sea demandar. Lo importante
            es determinar primero qué se debe, por qué no se ha pagado, qué
            documentos respaldan la obligación y cuál es la vía más conveniente
            para recuperar esos recursos.
          </p>
        </section>

        {/* RESPUESTA RÁPIDA */}

        <section className={styles.sectionAlt}>
          <h2>
            Si una EPS tiene cartera de más de 180 días, ¿cuál debería ser el
            primer paso?
          </h2>

          <div className={styles.box}>
            <p>
              El primer paso es realizar un diagnóstico individual de la cartera
              y no asumir que todas las facturas tienen el mismo problema.
            </p>

            <p>Una revisión útil debería permitir identificar, como mínimo:</p>

            <ul className={styles.checklist}>
              <li>
                Qué facturas están efectivamente vencidas y cuál es su
                antigüedad.
              </li>

              <li>
                Cuáles fueron correctamente radicadas y cuentan con
                trazabilidad.
              </li>

              <li>
                Qué cuentas tienen glosas, devoluciones u objeciones pendientes.
              </li>

              <li>
                Qué obligaciones han sido reconocidas y cuáles continúan en
                discusión.
              </li>

              <li>Qué acuerdos de pago existen y cuáles fueron incumplidos.</li>

              <li>
                Qué cartera presenta mejores condiciones para una recuperación
                inmediata.
              </li>
            </ul>
          </div>
        </section>

        {/* 180 DÍAS */}

        <section className={styles.section}>
          <h2>
            ¿Qué significa realmente tener una cartera EPS con más de 180 días
            de mora?
          </h2>

          <p>
            Los 180 días no deben entenderse como una frontera que por sí sola
            determine el camino jurídico de una cuenta. La importancia de este
            plazo está en que permite identificar una cartera que lleva un
            período considerable sin convertirse en efectivo para la IPS.
          </p>

          <p>
            Mientras la institución continúa prestando servicios y asumiendo
            gastos de operación, una parte de sus recursos permanece
            representada en cuentas por cobrar. Si esta situación se acumula,
            puede afectar el flujo de caja y obligar a la organización a
            utilizar recursos propios o financiación para cubrir obligaciones
            que deberían atenderse con el recaudo de su operación.
          </p>

          <p>
            Además, cuanto más envejece una cartera sin gestión, más importante
            se vuelve revisar su trazabilidad, los soportes, las respuestas
            recibidas y las actuaciones realizadas hasta ese momento.
          </p>
        </section>

        {/* RIESGOS */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué riesgos enfrenta una IPS cuando la cartera EPS sigue creciendo?
          </h2>

          <div className={styles.box}>
            <h3>Presión sobre el flujo de caja</h3>

            <p>
              Una cartera vencida elevada puede reducir la disponibilidad de
              efectivo para atender nómina, proveedores, impuestos, insumos y
              otros gastos necesarios para mantener la operación.
            </p>

            <h3>Mayor concentración de recursos por cobrar</h3>

            <p>
              Cuando una proporción importante de los ingresos permanece
              pendiente de pago, la institución puede terminar dependiendo de
              pocos pagadores o de nuevas fuentes de financiación para sostener
              sus actividades.
            </p>

            <h3>Deterioro progresivo de la cartera</h3>

            <p>
              Una cuenta que permanece durante meses sin una gestión definida
              requiere cada vez más trabajo de revisión y seguimiento. Por eso,
              la antigüedad debe ser uno de los criterios para priorizar las
              acciones de recaudo.
            </p>

            <h3>Riesgo asociado a la situación del pagador</h3>

            <p>
              Si existen señales de dificultades financieras, intervención,
              reorganización o liquidación de una entidad pagadora, resulta
              todavía más importante conocer el estado real de la cartera y
              actuar oportunamente dentro de las alternativas disponibles.
            </p>
          </div>
        </section>

        {/* DIAGNÓSTICO */}

        <section className={styles.section}>
          <h2>
            Cómo revisar una cartera EPS de más de 180 días antes de iniciar un
            cobro
          </h2>

          <p>
            Antes de enviar nuevos requerimientos o iniciar una acción jurídica,
            conviene ordenar la información. Muchas veces la dificultad no está
            únicamente en que la EPS no pague, sino en que la IPS no tiene
            consolidada toda la evidencia necesaria para demostrar el estado de
            cada obligación.
          </p>

          <ul className={styles.checklist}>
            <li>
              Identificar número de factura, fecha, valor y saldo pendiente.
            </li>

            <li>Verificar la fecha y forma de radicación de cada cuenta.</li>

            <li>Revisar las respuestas emitidas por la EPS.</li>

            <li>Clasificar glosas y devoluciones según su estado.</li>

            <li>Identificar pagos parciales y diferencias de saldo.</li>

            <li>Revisar acuerdos de pago y compromisos anteriores.</li>

            <li>
              Confirmar qué soportes contractuales, administrativos y
              asistenciales respaldan la obligación.
            </li>

            <li>
              Separar la cartera que requiere gestión administrativa de la que
              puede necesitar análisis jurídico.
            </li>
          </ul>
        </section>

        {/* GLOSAS */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué pasa con las glosas cuando una EPS lleva meses sin pagar?
          </h2>

          <p>
            No toda cartera vencida tiene el mismo origen. Una parte puede
            encontrarse pendiente por glosas u objeciones que todavía deben ser
            revisadas, respondidas o conciliadas.
          </p>

          <p>
            Por eso, antes de considerar una acción de cobro, es importante
            separar las cuentas efectivamente exigibles de aquellas que aún
            presentan una controversia sobre el servicio, la facturación, los
            soportes o las condiciones pactadas.
          </p>

          <p>
            Una adecuada gestión de glosas puede recuperar recursos que de otra
            manera permanecerían durante meses en la cartera y, al mismo tiempo,
            permite identificar qué obligaciones requieren una discusión
            diferente con la entidad pagadora.
          </p>
        </section>

        {/* COBRO ADMINISTRATIVO */}

        <section className={styles.section}>
          <h2>
            Cobro administrativo: la primera línea para recuperar cartera EPS
          </h2>

          <p>
            La recuperación no debería comenzar únicamente cuando una factura
            cumple 180 días. El seguimiento debe iniciar desde la radicación y
            continuar durante todo el ciclo de la cuenta.
          </p>

          <p>
            Cuando la cartera ya presenta una mora significativa, la gestión
            administrativa debe ser más estructurada. No basta con enviar
            correos aislados preguntando por el estado del pago. Es preferible
            trabajar con requerimientos, responsables, fechas de respuesta y
            compromisos verificables.
          </p>

          <ul className={styles.checklist}>
            <li>Solicitar actualización formal del estado de las cuentas.</li>

            <li>Documentar cada comunicación y respuesta recibida.</li>

            <li>Identificar compromisos concretos de pago.</li>

            <li>Hacer seguimiento a las fechas acordadas.</li>

            <li>Escalar las cuentas que permanezcan sin solución.</li>
          </ul>
        </section>

        {/* PREJURÍDICO */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Cuándo conviene pasar al cobro prejurídico de una cartera EPS?
          </h2>

          <p>
            Cuando los canales administrativos no producen resultados, el cobro
            prejurídico puede convertirse en una herramienta para formalizar la
            reclamación y establecer una posición más clara frente a la
            obligación pendiente.
          </p>

          <p>
            Un requerimiento prejurídico bien preparado debe identificar con
            precisión la cartera reclamada, explicar su origen, relacionar los
            soportes disponibles y establecer qué respuesta o solución se espera
            de la entidad pagadora.
          </p>

          <p>
            Además de buscar un pago o acuerdo, esta etapa permite ordenar la
            evidencia de las gestiones realizadas y detectar con anticipación
            las dificultades que podrían presentarse si posteriormente resulta
            necesario acudir a un escenario judicial.
          </p>
        </section>

        {/* CONCILIACIÓN */}

        <section className={styles.section}>
          <h2>
            ¿Es posible negociar o conciliar una cartera EPS de más de 180 días?
          </h2>

          <p>
            Dependiendo de las características de la obligación y de la
            situación concreta de las partes, una negociación puede ser una
            alternativa para buscar recuperación sin esperar indefinidamente a
            que la cartera siga acumulando antigüedad.
          </p>

          <p>
            Sin embargo, cualquier acuerdo debe analizarse con cuidado. No
            solamente importa cuánto propone pagar la EPS, sino también cuándo
            se realizarán los pagos, qué obligaciones comprende el acuerdo, cómo
            se manejarán las cuentas pendientes y qué ocurre si se incumple lo
            pactado.
          </p>

          <p>
            Para una IPS, recibir un cronograma claro y verificable puede ser
            mucho más útil que aceptar compromisos generales que posteriormente
            vuelven a incumplirse.
          </p>
        </section>

        {/* COBRO JUDICIAL */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Cuándo evaluar un proceso judicial contra una EPS por cartera
            vencida?
          </h2>

          <p>
            Si después de las gestiones administrativas, prejurídicas y de
            negociación la obligación continúa sin solución, puede ser necesario
            realizar un análisis jurídico para determinar si existen condiciones
            para acudir a la jurisdicción.
          </p>

          <p>
            La decisión de iniciar un proceso judicial no debería basarse
            exclusivamente en que hayan transcurrido 180 días. Debe revisarse la
            naturaleza de la obligación, los documentos disponibles, la
            exigibilidad, la existencia de controversias y el mecanismo procesal
            que corresponda.
          </p>

          <p>
            Dependiendo del caso, pueden analizarse alternativas como procesos
            ejecutivos, acciones derivadas de relaciones contractuales u otras
            actuaciones jurídicas disponibles. La estrategia concreta debe
            definirse después de estudiar la cartera y sus soportes.
          </p>

          <div className={styles.box}>
            <h3>Antes de demandar, conviene verificar:</h3>

            <ul className={styles.checklist}>
              <li>Identificación exacta de la obligación.</li>

              <li>Facturas y documentos que respalden el valor reclamado.</li>

              <li>Evidencia de prestación y facturación del servicio.</li>

              <li>Trazabilidad de la radicación.</li>

              <li>Estado de glosas, devoluciones y objeciones.</li>

              <li>Contratos y demás documentos que regulen la relación.</li>

              <li>Pagos parciales y saldo actualmente adeudado.</li>

              <li>Condiciones de exigibilidad de la obligación.</li>
            </ul>
          </div>
        </section>

        {/* MEDIDAS CAUTELARES */}

        <section className={styles.section}>
          <h2>
            ¿Se pueden solicitar medidas cautelares para proteger el cobro?
          </h2>

          <p>
            En determinados procesos judiciales pueden existir mecanismos
            cautelares orientados a proteger las posibilidades de satisfacción
            de la obligación. Sin embargo, su procedencia no es automática y
            depende del proceso, de las circunstancias del caso y de los
            requisitos establecidos por la legislación aplicable.
          </p>

          <p>
            Por esta razón, las medidas cautelares deben analizarse como parte
            de una estrategia jurídica integral y no como una consecuencia
            automática de tener una factura vencida durante más de 180 días.
          </p>
        </section>

        {/* DOCUMENTOS */}

        <section className={styles.section}>
          <h2>
            Documentos que debería tener organizada una IPS con cartera EPS
            vencida
          </h2>

          <p>
            Una buena preparación documental puede ahorrar tiempo cuando una
            cuenta necesita escalar desde la gestión administrativa hasta una
            revisión jurídica.
          </p>

          <ul className={styles.checklist}>
            <li>Facturas y documentos equivalentes correspondientes.</li>

            <li>
              Evidencias de radicación y aceptación o recepción de las cuentas.
            </li>

            <li>Contratos o acuerdos aplicables a la prestación.</li>

            <li>
              Soportes administrativos y asistenciales relacionados con las
              cuentas.
            </li>

            <li>Comunicaciones intercambiadas con la EPS.</li>

            <li>Glosas, respuestas y documentos de conciliación.</li>

            <li>Acuerdos de pago y constancias de incumplimiento.</li>

            <li>Historial de pagos parciales y saldos pendientes.</li>
          </ul>
        </section>

        {/* ERRORES */}

        <section className={styles.sectionAlt}>
          <h2>Errores que pueden dificultar la recuperación de cartera EPS</h2>

          <div className={styles.box}>
            <h3>Esperar indefinidamente</h3>

            <p>
              Una de las situaciones más frecuentes es mantener una cuenta
              durante meses en seguimiento informal sin establecer un plan
              concreto de recuperación.
            </p>

            <h3>Mezclar toda la cartera</h3>

            <p>
              No todas las cuentas tienen el mismo problema. Una factura glosada
              no debería recibir exactamente el mismo tratamiento que una
              obligación reconocida y vencida.
            </p>

            <h3>No conservar la trazabilidad</h3>

            <p>
              Los correos, radicaciones, respuestas, conciliaciones y acuerdos
              pueden ser relevantes para reconstruir la historia de una
              obligación.
            </p>

            <h3>Demandar sin revisar previamente la documentación</h3>

            <p>
              La rapidez no debe sustituir la preparación. Antes de iniciar una
              actuación judicial conviene verificar que la cartera tenga
              respaldo suficiente y que la vía escogida corresponda al caso.
            </p>
          </div>
        </section>

        {/* INDICADORES */}

        <section className={styles.section}>
          <h2>
            Indicadores que una IPS debería vigilar para evitar que la cartera
            llegue a 180 días
          </h2>

          <p>
            Una estrategia de recuperación realmente efectiva no debería
            concentrarse únicamente en la cartera que ya está vencida. También
            debe ayudar a detectar con anticipación cuándo una cuenta empieza a
            deteriorarse.
          </p>

          <ul className={styles.checklist}>
            <li>Edad promedio de la cartera.</li>

            <li>Porcentaje de cartera superior a 90 y 180 días.</li>

            <li>Valor de glosas pendientes.</li>

            <li>Porcentaje de devoluciones.</li>

            <li>Tiempo promedio entre facturación y radicación.</li>

            <li>Tiempo promedio de pago por entidad.</li>

            <li>Porcentaje de recuperación de cartera vencida.</li>

            <li>Cumplimiento de acuerdos y cronogramas de pago.</li>
          </ul>
        </section>

        {/* ESTRATEGIA */}

        <section className={styles.section}>
          <h2>Cómo evitar que la cartera EPS siga envejeciendo</h2>

          <p>
            El objetivo no debería ser solamente recuperar la cartera de 180
            días. Una IPS financieramente organizada necesita trabajar para que
            las nuevas cuentas no recorran el mismo camino.
          </p>

          <p>
            Para ello resulta útil conectar facturación, auditoría, cartera y
            las áreas jurídicas. Cuando cada equipo trabaja por separado, los
            problemas de una cuenta pueden detectarse demasiado tarde.
          </p>

          <ul className={styles.checklist}>
            <li>Radicar oportunamente las cuentas.</li>

            <li>Detectar errores antes de la presentación al pagador.</li>

            <li>Responder glosas dentro de los tiempos correspondientes.</li>

            <li>Hacer seguimiento periódico a las cuentas pendientes.</li>

            <li>Clasificar la cartera según antigüedad y riesgo.</li>

            <li>
              Escalar oportunamente las obligaciones que no encuentran solución.
            </li>
          </ul>
        </section>

        {/* CONCLUSIÓN */}

        <section className={styles.sectionAlt}>
          <h2>
            EPS con más de 180 días de mora: actuar antes de que la cartera se
            vuelva más difícil de recuperar
          </h2>

          <p>
            Tener una cartera EPS con más de 180 días no significa que los
            recursos estén necesariamente perdidos. Sí significa que la
            situación merece una revisión seria y una estrategia de recuperación
            definida.
          </p>

          <p>
            El punto de partida debe ser conocer exactamente qué se adeuda, qué
            cuentas están soportadas, cuáles presentan controversias y qué
            gestiones se han realizado hasta el momento. A partir de allí, la
            IPS puede decidir si conviene continuar con la gestión
            administrativa, fortalecer el cobro prejurídico, buscar una
            conciliación o evaluar una actuación judicial.
          </p>

          <p>
            En definitiva, el tiempo por sí solo no recupera la cartera. Lo que
            hace la diferencia es contar con información organizada,
            trazabilidad, seguimiento y una estrategia que permita escalar cada
            cuenta cuando sea necesario.
          </p>
        </section>

        {/* FOOTER / CTA */}

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Acompaña a IPS, clínicas
            y prestadores de salud en Colombia en la recuperación de cartera
            frente a EPS mediante gestión administrativa, cobro prejurídico y
            análisis de alternativas jurídicas para obligaciones que permanecen
            sin pago.
          </p>
        </footer>
      </article>
    </main>
  );
}
