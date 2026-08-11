"use client";

import Link from "next/link";

import styles from "./Article.module.css";

export default function ErroresCobroCarteraEPSIPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Recuperación de cartera para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            5 errores que hacen perder dinero a las IPS al cobrar cartera a las
            EPS
          </h1>

          <p className={styles.subtitle}>
            Facturas que se quedan sin seguimiento, glosas que no se responden a
            tiempo y cartera vencida que sigue creciendo. Conozca los errores
            más frecuentes en el cobro a EPS y qué puede hacer una IPS para
            mejorar su recuperación de recursos en Colombia.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}

      <article className={styles.article}>
        {/* INTRODUCCIÓN */}

        <section className={styles.section}>
          <h2>
            ¿Por qué una IPS puede perder dinero aunque la EPS tenga una deuda
            pendiente?
          </h2>

          <p>
            Tener una factura pendiente de pago no significa necesariamente que
            el dinero vaya a recuperarse de manera automática. En la práctica,
            una parte importante del resultado depende de qué tan bien esté
            organizada la información, cómo se haya presentado la cuenta, qué
            seguimiento se haga y en qué momento se decida escalar la gestión de
            cobro.
          </p>

          <p>
            Para una IPS, clínica u hospital, estos detalles pueden representar
            una diferencia importante. Una cartera que permanece durante meses
            sin gestión puede terminar mezclándose con nuevas cuentas, glosas,
            devoluciones, conciliaciones pendientes y obligaciones que todavía
            no han sido definidas con claridad.
          </p>

          <p>
            El problema no siempre comienza con una gran deuda. Muchas veces se
            construye poco a poco: una factura que nadie vuelve a revisar, una
            respuesta a glosa que se presenta tarde, un acuerdo de pago que no
            se controla o una cuenta que se deja en espera de una respuesta que
            nunca llega.
          </p>

          <p>
            Por eso, la recuperación de cartera frente a EPS debe entenderse
            como un proceso continuo y no como una actividad que comienza
            únicamente cuando la mora ya es crítica.
          </p>
        </section>

        {/* ERROR 1 */}

        <section className={styles.sectionAlt}>
          <h2>
            Error #1: dejar crecer la cartera vencida sin seguimiento real
          </h2>

          <p>
            Uno de los errores más costosos es conocer cuánto debe una EPS, pero
            no tener claridad sobre qué está pasando con cada cuenta. No basta
            con mirar el valor total de la cartera al cierre del mes.
          </p>

          <p>
            Una IPS necesita saber qué facturas están vencidas, cuáles fueron
            radicadas correctamente, cuáles tienen glosas, cuáles están en
            conciliación, cuáles tienen compromisos de pago y cuáles requieren
            una actuación diferente.
          </p>

          <div className={styles.box}>
            <h3>¿Cómo corregir este problema?</h3>

            <ul className={styles.checklist}>
              <li>Clasificar la cartera por antigüedad y nivel de riesgo.</li>

              <li>
                Identificar las EPS que concentran la mayor exposición
                financiera.
              </li>

              <li>
                Separar cartera en gestión administrativa, conciliación,
                prejurídica y jurídica.
              </li>

              <li>Definir responsables y fechas concretas para cada cuenta.</li>

              <li>
                Revisar semanalmente las obligaciones que no están avanzando.
              </li>

              <li>
                Crear alertas para las cuentas que superen determinados periodos
                de mora.
              </li>
            </ul>
          </div>

          <p>
            El objetivo no es llamar más veces a la EPS. Es saber qué debe
            hacerse con cada obligación y evitar que las cuentas queden
            simplemente “en seguimiento” durante meses.
          </p>
        </section>

        {/* ERROR 2 */}

        <section className={styles.section}>
          <h2>
            Error #2: radicar facturas con inconsistencias o soportes
            incompletos
          </h2>

          <p>
            Una parte del problema de cartera puede originarse antes de que
            empiece el cobro. Cuando una cuenta se presenta con inconsistencias,
            documentos faltantes o información que no coincide con los soportes
            disponibles, aumenta la posibilidad de devoluciones, glosas o
            retrasos en el proceso de reconocimiento y pago.
          </p>

          <p>
            Esto genera un efecto poco conveniente para la IPS: el equipo de
            cartera termina intentando recuperar una obligación que todavía
            tiene problemas en su origen.
          </p>

          <p>
            Por eso conviene revisar el proceso completo, desde la prestación
            del servicio hasta la facturación y posterior radicación. Una
            gestión de cartera sólida empieza mucho antes de enviar el primer
            requerimiento de pago.
          </p>

          <h3>¿Qué debería revisar una IPS antes de radicar una cuenta?</h3>

          <ul className={styles.checklist}>
            <li>Consistencia de la información de facturación.</li>

            <li>Existencia y organización de los soportes correspondientes.</li>

            <li>
              Requisitos contractuales y administrativos aplicables al proceso.
            </li>

            <li>Trazabilidad de la radicación y constancia de recepción.</li>

            <li>Identificación de posibles inconsistencias antes del envío.</li>
          </ul>

          <p>
            Mientras mejor sea la calidad documental desde el comienzo, más
            fácil será defender posteriormente una cuenta frente a una objeción,
            una glosa o una discusión sobre su procedencia.
          </p>
        </section>

        {/* ERROR 3 */}

        <section className={styles.sectionAlt}>
          <h2>
            Error #3: responder las glosas tarde o sin una estrategia clara
          </h2>

          <p>
            Las glosas pueden convertirse en uno de los principales puntos de
            fuga de recursos para una IPS cuando no existe un proceso organizado
            para analizarlas y responderlas.
          </p>

          <p>
            El problema no consiste únicamente en responder. Una contestación
            débil, incompleta o desconectada de los documentos disponibles puede
            dejar sin sustento una cuenta que inicialmente tenía posibilidades
            de ser recuperada.
          </p>

          <p>
            También ocurre lo contrario: equipos que responden cada glosa de
            manera aislada, sin analizar si determinadas objeciones se repiten
            por servicio, contrato, especialidad, sede o EPS. Cuando esto pasa,
            la IPS termina solucionando síntomas sin corregir el origen.
          </p>

          <div className={styles.box}>
            <h3>Una buena gestión de glosas debería permitir:</h3>

            <ul className={styles.checklist}>
              <li>
                Clasificar las objeciones según su causa y valor económico.
              </li>

              <li>
                Priorizar las cuentas de mayor impacto para la institución.
              </li>

              <li>
                Coordinar la revisión entre facturación, auditoría y cartera.
              </li>

              <li>
                Sustentar técnicamente las respuestas con los soportes
                disponibles.
              </li>

              <li>
                Medir cuánto dinero se recupera y cuánto permanece objetado.
              </li>

              <li>
                Detectar glosas recurrentes para evitar que vuelvan a aparecer.
              </li>
            </ul>
          </div>
        </section>

        {/* ERROR 4 */}

        <section className={styles.section}>
          <h2>
            Error #4: esperar meses o años antes de evaluar el cobro jurídico
          </h2>

          <p>
            Otro escenario frecuente es mantener durante demasiado tiempo una
            cartera vencida bajo la expectativa de que la EPS pagará
            posteriormente. En algunos casos existen acuerdos, conciliaciones o
            compromisos que justifican continuar con la negociación. El problema
            aparece cuando no existe un avance verificable y la cuenta sigue
            acumulando mora.
          </p>

          <p>
            Una gestión de cobro no debería depender únicamente de promesas
            telefónicas o conversaciones informales. Las comunicaciones,
            acuerdos, saldos, incumplimientos y respuestas deben quedar
            documentados para conocer con precisión cuál es la situación de cada
            obligación.
          </p>

          <p>
            Cuando la mora se prolonga, conviene analizar si el caso requiere
            pasar de una gestión administrativa a una estrategia prejurídica o
            judicial. La decisión dependerá de factores como los documentos
            disponibles, la naturaleza de la obligación, los acuerdos existentes
            y las circunstancias particulares del deudor.
          </p>

          <h3>
            ¿Cuándo debería una IPS revisar seriamente su estrategia de cobro?
          </h3>

          <ul className={styles.checklist}>
            <li>Cuando existen saldos vencidos sin una fecha real de pago.</li>

            <li>Cuando se incumplen reiteradamente acuerdos o compromisos.</li>

            <li>
              Cuando los requerimientos administrativos no generan avances.
            </li>

            <li>
              Cuando la cartera comienza a representar un riesgo relevante para
              la liquidez.
            </li>

            <li>
              Cuando existen documentos suficientes para analizar una eventual
              acción jurídica.
            </li>
          </ul>
        </section>

        {/* ERROR 5 */}

        <section className={styles.sectionAlt}>
          <h2>Error #5: no medir el riesgo financiero de cada EPS</h2>

          <p>
            No todas las cuentas por cobrar tienen el mismo nivel de riesgo. Una
            IPS puede tener una cartera considerable y, aun así, no saber qué
            parte de ella representa la mayor amenaza para su flujo de caja.
          </p>

          <p>
            El análisis debería ir más allá del valor total. También conviene
            observar la antigüedad de la cartera, comportamiento histórico de
            pagos, concentración por pagador, evolución de las glosas,
            cumplimiento de acuerdos y señales que puedan afectar la capacidad
            de recuperación.
          </p>

          <p>
            Esto permite tomar decisiones antes de que el problema sea evidente.
            Por ejemplo, una institución que depende en gran medida de una sola
            EPS puede necesitar un nivel de seguimiento mucho mayor que otra con
            una cartera más diversificada.
          </p>

          <div className={styles.box}>
            <h3>Indicadores que vale la pena vigilar</h3>

            <ul className={styles.checklist}>
              <li>Edad promedio de la cartera por EPS.</li>

              <li>Porcentaje de cartera vencida.</li>

              <li>Valor de cartera concentrado en cada pagador.</li>

              <li>Tiempo promedio de recuperación.</li>

              <li>Comportamiento de glosas y devoluciones.</li>

              <li>Cumplimiento de acuerdos de pago.</li>

              <li>Valor recuperado frente al valor gestionado.</li>
            </ul>
          </div>
        </section>

        {/* ERROR ADICIONAL */}

        <section className={styles.section}>
          <h2>
            Error #6: manejar facturación, glosas y cartera como procesos
            separados
          </h2>

          <p>
            En muchas organizaciones existe un equipo de facturación, otro de
            auditoría, otro de glosas y otro de cartera. Tener áreas diferentes
            no es el problema. El problema aparece cuando cada una trabaja con
            información distinta y nadie tiene una visión completa de la
            obligación.
          </p>

          <p>
            Una cuenta puede estar registrada como cartera vencida mientras el
            equipo de glosas todavía la considera en discusión. A su vez,
            facturación puede tener un soporte que cartera desconoce y el área
            jurídica puede recibir el caso sin toda la documentación necesaria.
          </p>

          <p>
            Esa falta de conexión genera reprocesos y hace más lento cualquier
            intento de recuperación.
          </p>

          <p>
            Una estrategia más eficiente consiste en establecer una trazabilidad
            común: qué se facturó, cuándo se radicó, qué se objetó, qué se
            respondió, cuánto fue reconocido, cuánto permanece pendiente y qué
            acción corresponde a continuación.
          </p>
        </section>

        {/* PRIORIZACIÓN */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Cómo priorizar la cartera de una IPS para recuperar más rápido?
          </h2>

          <p>
            No siempre conviene empezar por la factura más antigua. La
            priorización debe considerar diferentes variables para determinar
            dónde puede existir una mayor oportunidad de recuperación y dónde
            existe un riesgo que requiere atención inmediata.
          </p>

          <ul className={styles.checklist}>
            <li>Valor económico de la obligación.</li>

            <li>Antigüedad de la cartera.</li>

            <li>Estado documental de la cuenta.</li>

            <li>Existencia de glosas o controversias.</li>

            <li>Historial de pago de la EPS.</li>

            <li>Existencia de acuerdos o conciliaciones.</li>

            <li>Impacto de la cuenta sobre la liquidez institucional.</li>

            <li>Viabilidad de una eventual gestión jurídica.</li>
          </ul>

          <p>
            Con esta información es posible construir una matriz de cartera que
            ayude a separar las cuentas que pueden resolverse mediante gestión
            administrativa de aquellas que requieren conciliación, cobro
            prejurídico o análisis jurídico más profundo.
          </p>
        </section>

        {/* PLAN */}

        <section className={styles.section}>
          <h2>
            ¿Qué puede hacer una IPS para reducir pérdidas en el cobro a EPS?
          </h2>

          <p>
            La solución no está únicamente en cobrar más rápido. También está en
            evitar que las cuentas lleguen a convertirse en problemas difíciles
            de resolver.
          </p>

          <p>
            Una estrategia integral puede comenzar con controles preventivos de
            facturación, continuar con seguimiento de radicaciones y glosas,
            incorporar conciliaciones periódicas y terminar, cuando sea
            necesario, con una estrategia de recuperación prejurídica o
            judicial.
          </p>

          <ul className={styles.checklist}>
            <li>
              Revisar periódicamente el estado real de la cartera por EPS.
            </li>

            <li>Identificar tempranamente las cuentas con mayor riesgo.</li>

            <li>Fortalecer la calidad de los soportes antes de radicar.</li>

            <li>
              Establecer responsables para responder y hacer seguimiento a
              glosas.
            </li>

            <li>
              Mantener evidencia de cada comunicación y gestión realizada.
            </li>

            <li>
              Realizar conciliaciones de cartera con información actualizada.
            </li>

            <li>
              Formalizar los requerimientos de pago cuando la situación lo
              amerite.
            </li>

            <li>
              Evaluar oportunamente las alternativas jurídicas disponibles.
            </li>
          </ul>
        </section>

        {/* PREGUNTAS FRECUENTES */}

        <section className={styles.sectionAlt}>
          <h2>Preguntas frecuentes sobre el cobro de cartera a EPS</h2>

          <h3>
            ¿Una IPS puede cobrar una factura que permanece pendiente de pago?
          </h3>

          <p>
            En términos generales, una obligación pendiente puede ser objeto de
            gestión de cobro, pero la estrategia concreta dependerá de la
            documentación, del estado de la cuenta, de las condiciones
            contractuales y de las circunstancias particulares del caso.
          </p>

          <h3>
            ¿Las glosas siempre significan que una cuenta no se puede cobrar?
          </h3>

          <p>
            No necesariamente. Una glosa representa una objeción que debe ser
            analizada y, cuando corresponda, controvertida o aclarada con los
            soportes pertinentes. El resultado dependerá de la causa de la
            objeción y de la información disponible.
          </p>

          <h3>
            ¿Es conveniente esperar indefinidamente una promesa de pago de una
            EPS?
          </h3>

          <p>
            No es recomendable dejar una obligación sin seguimiento definido
            durante periodos prolongados. Si los compromisos no se cumplen, la
            IPS debería revisar nuevamente el estado de la cartera y determinar
            cuál es la siguiente acción.
          </p>

          <h3>
            ¿Cuándo conviene buscar asesoría jurídica para recuperar cartera?
          </h3>

          <p>
            Puede ser conveniente cuando existe mora prolongada, incumplimiento
            de acuerdos, dificultades para obtener el pago mediante gestión
            administrativa o una obligación que requiere análisis sobre las
            alternativas de cobro disponibles.
          </p>

          <h3>
            ¿Por qué es tan importante conservar la trazabilidad de la cartera?
          </h3>

          <p>
            Porque una gestión documentada permite reconstruir la historia de
            cada obligación: qué se facturó, cuándo se presentó, qué respondió
            la EPS, qué se objetó, qué se concilió y qué permanece pendiente.
            Esa información puede ser determinante para definir la estrategia de
            recuperación.
          </p>
        </section>

        {/* CONCLUSIÓN */}

        <section className={styles.section}>
          <h2>
            Recuperar cartera EPS empieza por evitar que el problema se vuelva
            más grande
          </h2>

          <p>
            Los problemas de cartera de una IPS no siempre aparecen de un día
            para otro. Con frecuencia comienzan con pequeñas fallas que se
            acumulan: una radicación sin seguimiento, una glosa que queda
            pendiente, una conciliación que no se actualiza o una obligación que
            permanece demasiado tiempo esperando una respuesta.
          </p>

          <p>
            Corregir estos puntos permite tener una visión mucho más clara de
            cuánto dinero está realmente pendiente de recuperación, qué cuentas
            requieren atención inmediata y cuáles pueden continuar por una vía
            administrativa.
          </p>

          <p>
            Para las IPS, clínicas y hospitales, gestionar la cartera de manera
            preventiva significa proteger liquidez y, al mismo tiempo, evitar
            que obligaciones potencialmente recuperables terminen perdiéndose
            por falta de seguimiento, documentación o una decisión oportuna.
          </p>

          <p>
            Cuando la gestión administrativa no es suficiente, el siguiente paso
            debe analizarse de acuerdo con las características de cada
            obligación y con la documentación disponible, incluyendo las
            alternativas de conciliación, cobro prejurídico o las acciones
            judiciales que jurídicamente resulten procedentes.
          </p>
        </section>

        {/* CIERRE COMERCIAL */}

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Acompaña a IPS, clínicas
            y prestadores de servicios de salud en Colombia en la gestión y
            recuperación de cartera frente a EPS, incluyendo análisis
            documental, conciliaciones, gestión de cobro y estrategias jurídicas
            cuando el caso lo requiere.
          </p>
        </footer>
      </article>
    </main>
  );
}
