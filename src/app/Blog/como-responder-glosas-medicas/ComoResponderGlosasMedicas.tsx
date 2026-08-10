"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function ComoResponderGlosasMedicas() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Guía práctica para IPS, clínicas y prestadores
          </span>

          <h1 className={styles.title}>
            Cómo responder glosas médicas en Colombia y recuperar pagos
            rechazados
          </h1>

          <p className={styles.subtitle}>
            Aprenda cómo analizar una glosa, reunir los soportes adecuados,
            preparar una respuesta sólida y hacer seguimiento hasta recuperar
            los valores que realmente correspondan a su IPS o clínica.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}

      <article className={styles.article}>
        {/* ================= INTRO ================= */}

        <section className={styles.section}>
          <h2>
            ¿Cómo responder una glosa médica en Colombia sin perder la cartera?
          </h2>

          <p>
            Una glosa médica no debería tratarse simplemente como un descuento
            que la IPS debe aceptar. En muchos casos, detrás de una factura
            glosada existe una diferencia que puede ser aclarada, subsanada o
            controvertida con los soportes correspondientes.
          </p>

          <p>
            El problema aparece cuando las instituciones reciben cientos o miles
            de observaciones y no cuentan con un proceso claro para
            clasificarlas, responderlas y hacer seguimiento. Una glosa que no se
            gestiona correctamente puede terminar convirtiéndose en cartera
            difícil de recuperar.
          </p>

          <p>
            Por eso, responder glosas médicas requiere mucho más que enviar una
            carta. La IPS debe identificar la causa, revisar la factura y sus
            soportes, construir una respuesta sustentada y conservar la
            trazabilidad de todo el trámite.
          </p>
        </section>

        {/* ================= NORMATIVA ================= */}

        <section className={styles.sectionAlt}>
          <h2>¿Qué normas regulan las glosas médicas en Colombia?</h2>

          <p>
            El manejo de las glosas debe hacerse teniendo en cuenta la normativa
            aplicable a la factura y la fecha en que se prestaron y facturaron
            los servicios.
          </p>

          <p>
            Para los servicios prestados y facturados desde el 1 de abril de
            2024, la Resolución 2284 de 2023 estableció los soportes de cobro y
            adoptó el Manual Único de Devoluciones, Glosas y Respuestas. Esta
            regulación aplica a las entidades responsables del pago, los
            prestadores de servicios de salud y otros actores incluidos en su
            campo de aplicación.
          </p>

          <p>
            La misma resolución establece que las causas de devolución y glosa
            son taxativas. En otras palabras, la respuesta no debería
            construirse de manera improvisada: primero hay que identificar
            exactamente qué causal fue comunicada y contrastarla con la
            documentación de la cuenta.
          </p>

          <p>
            Para servicios prestados y facturados antes del 1 de abril de 2024,
            la propia Resolución 2284 contempla un régimen transitorio que
            remite a la normativa anterior aplicable a esas facturas.
          </p>
        </section>

        {/* ================= TIPOS ================= */}

        <section className={styles.section}>
          <h2>
            Tipos de glosas médicas: identifica primero qué está reclamando la
            EPS
          </h2>

          <p>
            No todas las glosas se responden de la misma manera. El primer paso
            es conocer la causa concreta porque el soporte necesario para
            controvertir una observación de facturación no necesariamente será
            el mismo que se requiere frente a una glosa relacionada con
            autorización, tarifas o pertinencia.
          </p>

          <ul className={styles.checklist}>
            <li>Glosas relacionadas con facturación.</li>
            <li>Glosas por tarifas o valores cobrados.</li>
            <li>Glosas relacionadas con soportes.</li>
            <li>Glosas por autorización de servicios.</li>
            <li>Glosas relacionadas con cobertura.</li>
            <li>Glosas relacionadas con pertinencia.</li>
            <li>Otras causales previstas en el manual aplicable.</li>
          </ul>

          <p>
            La clasificación correcta permite evitar respuestas genéricas y
            enfocar la discusión exactamente sobre el motivo por el cual se
            cuestionó la factura.
          </p>
        </section>

        {/* ================= PASOS ================= */}

        <section className={styles.sectionAlt}>
          <h2>Cómo responder glosas médicas paso a paso</h2>

          <div className={styles.box}>
            <h3>1. Identifique la factura y la causal de la glosa</h3>

            <p>
              Comience por verificar el número de factura, valor afectado, fecha
              de radicación, servicio cuestionado y causal comunicada por la
              entidad responsable del pago.
            </p>

            <p>
              Parece básico, pero este control evita uno de los problemas más
              frecuentes en cartera: responder una observación sin tener claro
              exactamente qué valor está siendo discutido.
            </p>

            <h3>2. Revise la documentación de la cuenta</h3>

            <p>
              Compare la glosa con los soportes que respaldan la prestación del
              servicio. Dependiendo del caso, pueden resultar relevantes la
              factura, RIPS, autorizaciones, resumen de atención, epicrisis,
              soportes de procedimientos, contratos, tarifas pactadas y demás
              documentos exigibles según el servicio y el régimen aplicable.
            </p>

            <h3>
              3. Determine si la glosa debe aceptarse, subsanarse o
              controvertirse
            </h3>

            <p>
              No todas las glosas deben discutirse. Si existe un error real de
              la IPS, lo razonable es identificarlo y corregirlo. Si, por el
              contrario, la observación no corresponde a la realidad de la
              atención o de la facturación, debe prepararse una respuesta
              sustentada.
            </p>

            <h3>4. Construya una respuesta específica</h3>

            <p>
              Una buena respuesta explica qué se está controvirtiendo, cuál es
              la evidencia que respalda la posición de la IPS y por qué, a
              partir de esa información, debe levantarse total o parcialmente la
              glosa.
            </p>

            <h3>5. Radique la respuesta dentro del término aplicable</h3>

            <p>
              El control de términos es fundamental. La Resolución 2284 de 2023
              establece reglas específicas para devoluciones y glosas, por lo
              que la IPS debe controlar las fechas de recepción, respuesta,
              decisión y pago.
            </p>

            <h3>6. Haga seguimiento hasta obtener una decisión</h3>

            <p>
              Radicar la respuesta no significa que el caso haya terminado. Debe
              registrarse qué ocurrió posteriormente: si la glosa fue levantada,
              mantenida, modificada o si existe un valor pendiente de pago.
            </p>
          </div>
        </section>

        {/* ================= SOPORTES ================= */}

        <section className={styles.section}>
          <h2>¿Qué soportes se necesitan para responder una glosa médica?</h2>

          <p>
            Los soportes dependen de la causal concreta y del tipo de servicio
            facturado. No existe una respuesta única que funcione para todas las
            glosas.
          </p>

          <p>
            La Resolución 2284 de 2023 establece los soportes de cobro que deben
            acompañar la factura de venta en salud y señala al RIPS como soporte
            obligatorio dentro del esquema previsto por la regulación. También
            establece que las entidades responsables del pago no pueden exigir
            soportes adicionales a los definidos en la resolución, aunque las
            partes pueden pactar menos soportes en los términos permitidos por
            la norma.
          </p>

          <p>
            Por eso, antes de responder una glosa conviene construir una matriz
            que relacione cada factura, causal, valor discutido, soporte
            disponible y argumento de respuesta. Esta organización facilita
            tanto la gestión administrativa como una eventual etapa de cobro.
          </p>
        </section>

        {/* ================= TÉRMINOS ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            Los términos importan: una glosa no se debe dejar para después
          </h2>

          <p>
            Uno de los mayores riesgos para una IPS es recibir una devolución o
            glosa y dejarla acumulada junto con cientos de casos pendientes.
            Cuando esto ocurre, la institución pierde visibilidad sobre qué
            facturas están en discusión, cuáles ya fueron respondidas y cuáles
            necesitan una actuación adicional.
          </p>

          <p>
            La Resolución 2284 establece, entre otras reglas, que frente a una
            devolución considerada injustificada el prestador debe responder
            dentro de los cinco días hábiles siguientes a su recepción. Para las
            glosas también existen términos y etapas específicas que deben
            controlarse según el régimen aplicable a la factura.
          </p>

          <p>
            La recomendación práctica es sencilla: cada glosa debería tener
            desde el primer día un responsable, una fecha límite, un valor
            asociado, una respuesta y un estado de seguimiento.
          </p>
        </section>

        {/* ================= ERRORES ================= */}

        <section className={styles.section}>
          <h2>
            Errores frecuentes al responder glosas médicas que pueden afectar el
            recaudo
          </h2>

          <p>
            Muchas pérdidas de cartera no ocurren porque la IPS carezca de
            argumentos, sino porque esos argumentos nunca llegan a convertirse
            en una respuesta completa y trazable.
          </p>

          <ul className={styles.checklist}>
            <li>
              Responder sin identificar con precisión la causal de la glosa.
            </li>

            <li>
              Utilizar respuestas genéricas para facturas con problemas
              diferentes.
            </li>

            <li>
              No relacionar cada argumento con el soporte que lo demuestra.
            </li>

            <li>
              No conservar evidencia de la radicación y recepción de la
              respuesta.
            </li>

            <li>No controlar las fechas de respuesta y decisión.</li>

            <li>
              No conciliar los valores levantados con los pagos efectivamente
              realizados.
            </li>

            <li>
              Mantener durante meses una cartera glosada sin definir una ruta de
              recuperación.
            </li>
          </ul>
        </section>

        {/* ================= SEGUIMIENTO ================= */}

        <section className={styles.sectionAlt}>
          <h2>¿Qué hacer después de responder una glosa?</h2>

          <p>
            La gestión no termina cuando se envía la respuesta. Una IPS debería
            continuar el seguimiento hasta conocer el resultado económico de
            cada factura.
          </p>

          <p>
            Si la entidad responsable del pago levanta total o parcialmente la
            glosa, el siguiente paso es verificar que el valor reconocido
            efectivamente sea pagado y quede correctamente aplicado en la
            cartera.
          </p>

          <p>
            Si la glosa permanece, debe revisarse la razón de la decisión,
            determinar si existen mecanismos adicionales de reclamación o
            solución de controversias y evaluar, según las características de la
            obligación, si corresponde activar una estrategia de cobro.
          </p>

          <p>
            El objetivo final no es simplemente obtener una respuesta
            administrativa. El verdadero indicador es cuánto dinero logró
            recuperar la institución.
          </p>
        </section>

        {/* ================= GLOSA VS DEVOLUCIÓN ================= */}

        <section className={styles.section}>
          <h2>Glosa y devolución de factura: ¿son lo mismo?</h2>

          <p>
            No. Aunque ambas situaciones pueden afectar el proceso de
            reconocimiento y pago de una factura, tienen tratamientos diferentes
            dentro de la regulación.
          </p>

          <p>
            La devolución está relacionada con las causales específicas
            previstas para que la factura sea devuelta, mientras que la glosa
            corresponde a una objeción dentro del proceso de auditoría y
            reconocimiento de la cuenta.
          </p>

          <p>
            Esta diferencia es importante porque los términos, la forma de
            responder y las consecuencias pueden variar. Por eso, antes de
            preparar una respuesta conviene establecer si realmente se trata de
            una devolución, una glosa u otra actuación relacionada con la
            cuenta.
          </p>
        </section>

        {/* ================= RECUPERACIÓN ================= */}

        <section className={styles.section}>
          <h2>¿Qué hacer si la EPS mantiene la glosa y no paga?</h2>

          <p>
            Cuando una glosa permanece después de la respuesta de la IPS, no
            necesariamente significa que el dinero deba darse por perdido. El
            camino a seguir depende de la naturaleza de la controversia, los
            documentos disponibles, el contrato y las reglas aplicables.
          </p>

          <p>
            En estos casos puede ser necesario revisar nuevamente la cuenta,
            conciliar los valores discutidos, utilizar los mecanismos de
            solución de controversias previstos y evaluar las alternativas
            administrativas o jurídicas disponibles.
          </p>

          <p>
            Cuando la cartera ya presenta un nivel importante de envejecimiento,
            resulta especialmente relevante determinar qué obligaciones son
            exigibles y cuáles cuentan con documentación suficiente para iniciar
            una gestión de cobro más contundente.
          </p>
        </section>

        {/* ================= CARTERA ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            De la glosa a la recuperación de cartera: el paso que muchas IPS
            están dejando pendiente
          </h2>

          <p>
            Responder una glosa correctamente es solo una parte del proceso.
            Después viene una pregunta mucho más importante para las finanzas de
            la institución: ¿qué pasó con el dinero?
          </p>

          <p>
            Una cartera puede pasar por diferentes estados: factura radicada,
            factura aceptada, valor glosado, valor levantado, saldo pendiente,
            acuerdo de pago o cartera vencida. Si estos estados no se controlan,
            es fácil que recursos importantes terminen perdidos dentro de una
            base de datos sin seguimiento.
          </p>

          <p>
            Por eso, la gestión de glosas debería conectarse directamente con el
            proceso de recuperación de cartera. Cada respuesta debe tener una
            consecuencia financiera clara y cada saldo pendiente debe contar con
            una ruta de recaudo.
          </p>

          <p className={styles.statement}>
            Una buena gestión de glosas no termina en la respuesta: termina
            cuando el valor reconocido llega efectivamente a la IPS.
          </p>
        </section>

        {/* ================= PREVENCIÓN ================= */}

        <section className={styles.section}>
          <h2>
            Cómo reducir las glosas médicas y mejorar el flujo de caja de una
            IPS
          </h2>

          <p>
            Reducir las glosas no depende únicamente del área de cartera. El
            problema suele comenzar mucho antes, durante la autorización,
            prestación, documentación, facturación y radicación del servicio.
          </p>

          <p>
            Por eso, una estrategia preventiva debería involucrar facturación,
            auditoría de cuentas médicas, áreas asistenciales, contratación y
            cartera.
          </p>

          <ul className={styles.checklist}>
            <li>
              Revisar las principales causales de glosa de manera periódica.
            </li>

            <li>
              Identificar qué servicios y contratos generan mayor número de
              objeciones.
            </li>

            <li>
              Mejorar la calidad de los soportes antes de radicar las cuentas.
            </li>

            <li>
              Mantener trazabilidad sobre facturas, respuestas y decisiones.
            </li>

            <li>
              Medir cuánto dinero se recupera frente al valor inicialmente
              glosado.
            </li>

            <li>
              Escalar oportunamente los casos que no encuentran solución por la
              vía administrativa.
            </li>
          </ul>
        </section>

        {/* ================= FAQ ================= */}

        <section className={styles.section}>
          <h2>Preguntas frecuentes sobre glosas médicas en Colombia</h2>

          <details className={styles.faq}>
            <summary>¿Qué debe hacer una IPS cuando recibe una glosa?</summary>

            <p>
              Debe identificar la factura y la causal, revisar los soportes,
              determinar si la glosa es procedente o puede ser subsanada,
              preparar una respuesta sustentada y controlar el término
              correspondiente.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Cuánto tiempo tiene una IPS para responder una glosa?
            </summary>

            <p>
              El término depende del régimen aplicable y de si se trata de una
              devolución o una glosa. Para servicios prestados y facturados bajo
              el régimen de la Resolución 2284 de 2023, deben revisarse los
              términos específicos previstos en dicha regulación.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>¿Qué pasa si la EPS mantiene la glosa?</summary>

            <p>
              La IPS debe revisar la decisión, el valor pendiente y los
              mecanismos disponibles para solucionar la controversia. Según el
              caso, pueden existir alternativas administrativas, conciliatorias
              o jurídicas para continuar con la recuperación.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Una glosa significa que la IPS perdió definitivamente el dinero?
            </summary>

            <p>
              No necesariamente. Una glosa representa una objeción sobre la
              cuenta o parte de ella. El resultado dependerá de la respuesta,
              los soportes, la decisión de la entidad responsable del pago y las
              actuaciones posteriores que correspondan.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Cómo se relacionan las glosas con la cartera vencida?
            </summary>

            <p>
              Los valores que permanecen discutidos o no pagados pueden terminar
              afectando la cartera de la IPS. Por eso es importante conectar la
              gestión de glosas con conciliación, seguimiento de pagos y
              recuperación de cartera.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Qué pasa con las facturas anteriores al 1 de abril de 2024?
            </summary>

            <p>
              La Resolución 2284 de 2023 estableció un régimen transitorio. Para
              servicios prestados y facturados antes del 1 de abril de 2024
              deben revisarse las normas anteriores que la propia resolución
              mantiene aplicables para esos casos.
            </p>
          </details>
        </section>

        {/* ================= CIERRE ================= */}

        <section className={styles.section}>
          <h2>
            Responder glosas médicas es importante, pero recuperar el dinero es
            el objetivo final
          </h2>

          <p>
            Una IPS puede tener un equipo capaz de contestar técnicamente las
            glosas y, aun así, mantener una cartera elevada si no existe
            seguimiento sobre los valores que finalmente fueron reconocidos y
            pagados.
          </p>

          <p>
            La gestión eficiente requiere conectar facturación, auditoría,
            respuesta de glosas, conciliación y cartera. De esta manera, cada
            factura puede seguirse desde su radicación hasta el momento en que
            el dinero ingresa efectivamente a la institución.
          </p>

          <p>
            Cuando los mecanismos administrativos no permiten solucionar una
            cartera vencida, es necesario analizar de manera individual la
            obligación, sus soportes, exigibilidad y las alternativas de
            recuperación disponibles.
          </p>
        </section>

        {/* ================= FOOTER ================= */}

        <footer className={styles.footer}>
          <p>
            <strong>Recaudo Cartera IPS y EPS</strong> acompaña a IPS, clínicas
            y prestadores de servicios de salud en Colombia en la gestión y
            recuperación jurídica de cartera frente a entidades responsables del
            pago.
          </p>
        </footer>
      </article>
    </main>
  );
}
