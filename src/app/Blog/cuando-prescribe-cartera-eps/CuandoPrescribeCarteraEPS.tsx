"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function CuandoPrescribeCarteraEPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al blog
          </Link>

          <span className={styles.badge}>Prescripción de cartera EPS</span>

          <h1 className={styles.title}>
            ¿Cuándo prescribe la cartera de EPS en Colombia y cómo evitar
            perderla?
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y prestadores de salud: conozca qué
            determina el término de prescripción, desde cuándo puede contarse y
            qué hacer con una cartera EPS que lleva meses o años pendiente de
            pago.
          </p>
        </motion.div>
      </section>

      {/* ARTICLE */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Cuándo prescribe una cartera de EPS en Colombia?</h2>

          <p>
            Una de las preguntas que más preocupa a las IPS cuando revisan una
            cartera antigua es sencilla, pero tiene una respuesta que requiere
            analizar varios factores:{" "}
            <strong>¿todavía se puede cobrar esta cuenta?</strong>
          </p>

          <p>
            Que una factura lleve meses o incluso años pendiente de pago no
            significa automáticamente que la obligación haya prescrito. La
            prescripción debe analizarse teniendo en cuenta la naturaleza de la
            obligación, el documento que respalda el cobro, la fecha en que la
            obligación se hizo exigible y las actuaciones realizadas
            posteriormente.
          </p>

          <p>
            Por eso, antes de dar por perdida una cartera EPS, es importante
            reconstruir su historia. Una cuenta aparentemente antigua puede
            tener actuaciones, reconocimientos, acuerdos, reclamaciones u otros
            antecedentes que cambien el análisis jurídico del término.
          </p>
        </section>

        {/* CONCEPTO */}
        <section className={styles.sectionAlt}>
          <h2>¿Qué significa que una cartera EPS esté prescrita?</h2>

          <p>
            La prescripción es una figura jurídica relacionada con el paso del
            tiempo y con la posibilidad de ejercer determinadas acciones para
            exigir el cumplimiento de una obligación. No debe confundirse
            simplemente con una cartera vencida o con una cuenta que lleva mucho
            tiempo sin pagarse.
          </p>

          <p>
            En otras palabras,{" "}
            <strong>
              cartera vencida y cartera prescrita no son necesariamente lo mismo
            </strong>
            . Una factura puede estar vencida porque llegó su fecha de pago y
            continuar siendo susceptible de cobro. El análisis cambia cuando
            entra en juego el término de prescripción aplicable al caso
            concreto.
          </p>

          <p>
            Esta diferencia es especialmente importante para IPS y clínicas que
            manejan cientos o miles de facturas frente a diferentes entidades
            responsables del pago. No todas las cuentas tienen la misma fecha,
            el mismo soporte ni la misma situación jurídica.
          </p>
        </section>

        {/* PLAZO */}
        <section className={styles.section}>
          <h2>
            ¿Cuánto tiempo tarda en prescribir una factura o cartera de EPS?
          </h2>

          <p>
            No existe un único número de años que pueda aplicarse de manera
            automática a toda la cartera de EPS en Colombia. El término
            aplicable depende, entre otros aspectos, de la naturaleza de la
            obligación y del documento que permita exigir judicialmente el pago.
          </p>

          <p>
            Por eso, responder que “toda factura de EPS prescribe después de
            determinado tiempo” puede llevar a una conclusión equivocada. En una
            auditoría jurídica de cartera se debe revisar cada grupo de
            obligaciones y establecer cuál es el término que corresponde.
          </p>

          <p>
            También es necesario identificar correctamente{" "}
            <strong>desde cuándo comenzó a correr el término</strong>. La fecha
            de prestación del servicio, la fecha de radicación, la fecha de
            exigibilidad, los vencimientos contractuales y las actuaciones
            posteriores no necesariamente cumplen la misma función jurídica.
          </p>

          <p>
            En una cartera de varios años, esta revisión cronológica puede ser
            la diferencia entre descartar una cuenta demasiado pronto y
            encontrar una vía de recuperación todavía disponible.
          </p>
        </section>

        {/* HIGHLIGHT */}
        <section className={styles.sectionHighlight}>
          <h2>
            Una cartera antigua no debe darse por perdida sin revisar primero su
            historia
          </h2>

          <p>
            Que una EPS lleve mucho tiempo sin pagar no significa, por sí solo,
            que la IPS haya perdido definitivamente el derecho de reclamar.
            Antes de clasificar una cuenta como incobrable, conviene revisar
            documentos, fechas, comunicaciones, pagos parciales, acuerdos,
            conciliaciones y actuaciones de cobro.
          </p>

          <p>
            La recomendación práctica es sencilla:{" "}
            <strong>
              no esperar hasta el último momento para revisar la cartera
            </strong>
            . Una estrategia de cobro funciona mejor cuando existe tiempo
            suficiente para organizar soportes, definir la ruta jurídica y tomar
            decisiones antes de que el paso del tiempo se convierta en un
            problema adicional.
          </p>
        </section>

        {/* DESDE CUANDO */}
        <section className={styles.section}>
          <h2>¿Desde cuándo se cuenta la prescripción de una cartera EPS?</h2>

          <p>
            Este es uno de los puntos que más errores genera en la gestión de
            cartera. No basta con mirar la fecha que aparece en una factura y
            sumar años.
          </p>

          <p>
            Para determinar el momento relevante deben revisarse las condiciones
            de la obligación, su exigibilidad y el tipo de acción que
            eventualmente podría ejercerse. También deben estudiarse las
            actuaciones que hayan ocurrido después del nacimiento de la deuda.
          </p>

          <p>
            Por ejemplo, una cartera puede haber pasado por etapas de auditoría,
            glosa, conciliación, reconocimiento parcial, acuerdos de pago o
            requerimientos. Cada antecedente debe ser revisado jurídicamente
            antes de concluir que una obligación está prescrita.
          </p>

          <p>
            Por esta razón, una buena gestión de cartera no consiste solamente
            en ordenar facturas por antigüedad. También requiere mantener una
            <strong>línea de tiempo jurídica y documental</strong> de las
            obligaciones más importantes.
          </p>
        </section>

        {/* DIFERENCIA */}
        <section className={styles.sectionAlt}>
          <h2>
            Diferencia entre cartera vencida, cartera antigua y cartera
            prescrita
          </h2>

          <p>
            En la práctica, estos conceptos suelen mezclarse y eso puede generar
            errores en los reportes internos de una IPS.
          </p>

          <p>
            <strong>Cartera vencida:</strong> corresponde a obligaciones cuyo
            plazo de pago ya pasó y continúan pendientes de pago.
          </p>

          <p>
            <strong>Cartera antigua:</strong> es aquella que lleva un periodo
            prolongado pendiente de recuperación. Su antigüedad aumenta el
            riesgo financiero y jurídico, pero no significa automáticamente que
            haya prescrito.
          </p>

          <p>
            <strong>Cartera prescrita:</strong> requiere un análisis jurídico
            específico para establecer si se configuró la prescripción de la
            acción correspondiente y cuáles son sus efectos en el caso concreto.
          </p>

          <p>
            Esta clasificación ayuda a que la dirección financiera y jurídica de
            la IPS hablen el mismo idioma y puedan priorizar las cuentas que
            necesitan intervención inmediata.
          </p>
        </section>

        {/* FACTORES */}
        <section className={styles.section}>
          <h2>¿Qué situaciones pueden afectar el análisis de prescripción?</h2>

          <p>
            Antes de concluir que una obligación está prescrita es necesario
            revisar si durante el tiempo transcurrido ocurrió alguna actuación
            jurídicamente relevante.
          </p>

          <p>Entre los aspectos que normalmente deben revisarse están:</p>

          <p>
            <strong>Reconocimiento de la obligación:</strong> debe analizarse si
            la EPS reconoció total o parcialmente la deuda y cuáles fueron las
            condiciones de ese reconocimiento.
          </p>

          <p>
            <strong>Pagos parciales:</strong> un pago no debe ignorarse al
            reconstruir la historia de una obligación. Su alcance jurídico
            depende de las circunstancias concretas.
          </p>

          <p>
            <strong>Acuerdos de pago:</strong> las conciliaciones y acuerdos
            deben estudiarse cuidadosamente, especialmente cuando modifican
            fechas, condiciones o compromisos previamente establecidos.
          </p>

          <p>
            <strong>Requerimientos y actuaciones de cobro:</strong> no toda
            comunicación produce los mismos efectos jurídicos. Por eso es
            importante conservar evidencia de cada actuación y verificar su
            alcance.
          </p>

          <p>
            <strong>Procesos judiciales:</strong> si ya se inició una actuación
            judicial, deben revisarse sus fechas y efectos antes de realizar
            cualquier cálculo de prescripción.
          </p>
        </section>

        {/* RIESGOS */}
        <section className={styles.sectionAlt}>
          <h2>¿Por qué una IPS no debería dejar envejecer su cartera EPS?</h2>

          <p>
            Una cartera que envejece no solamente representa dinero pendiente de
            ingresar. También consume tiempo administrativo, dificulta la
            conciliación de información y puede convertirse en un problema
            jurídico más complejo.
          </p>

          <p>
            Cuando una cuenta permanece durante años en los mismos reportes sin
            una estrategia definida, aumenta la posibilidad de encontrar
            soportes incompletos, responsables que ya no están en la
            institución, contratos difíciles de ubicar o diferencias entre los
            sistemas contables y de facturación.
          </p>

          <p>
            Además, cuanto más antigua sea la cartera, más importante resulta
            determinar cuáles cuentas deben recuperarse de inmediato, cuáles
            requieren conciliación y cuáles necesitan una revisión jurídica
            individual.
          </p>

          <p>
            En este punto, la gestión preventiva suele ser mucho más eficiente
            que intentar reconstruir toda la información cuando la cartera ya
            lleva varios años acumulada.
          </p>
        </section>

        {/* AUDITORIA */}
        <section className={styles.section}>
          <h2>
            Cómo revisar si una cartera EPS está cerca de cumplir el término de
            prescripción
          </h2>

          <p>
            Una IPS puede comenzar con una auditoría interna de las cuentas
            pendientes y organizar la información de forma cronológica. El
            objetivo no es solamente saber cuánto dinero está pendiente, sino
            conocer qué tan urgente es cada obligación.
          </p>

          <p>Una revisión básica debería identificar:</p>

          <p>
            <strong>1. Fecha y valor de la factura:</strong> permita conocer la
            antigüedad inicial de la cuenta y su impacto económico.
          </p>

          <p>
            <strong>2. Fecha de radicación y soportes:</strong> confirme que
            exista evidencia suficiente de la presentación de la cuenta.
          </p>

          <p>
            <strong>3. Estado de la obligación:</strong> determine si está
            pendiente, glosada, conciliada, reconocida, parcialmente pagada o
            controvertida.
          </p>

          <p>
            <strong>4. Historial de comunicaciones:</strong> reúna
            requerimientos, respuestas, actas, correos, conciliaciones y demás
            documentos relacionados.
          </p>

          <p>
            <strong>5. Situación jurídica:</strong> establezca si existe
            actualmente una actuación de cobro o si resulta necesario iniciar
            una estrategia jurídica.
          </p>
        </section>

        {/* ESTRATEGIA */}
        <section className={styles.sectionAlt}>
          <h2>
            Cómo evitar que una cartera EPS se convierta en un problema de
            prescripción
          </h2>

          <p>
            La mejor estrategia no consiste en esperar a que una cuenta esté a
            punto de cumplir el término para comenzar a actuar. Lo recomendable
            es establecer un sistema permanente de control jurídico y
            financiero.
          </p>

          <p>
            Para una IPS, esto puede traducirse en una clasificación periódica
            de cartera por antigüedad, valor, EPS, estado de la obligación y
            nivel de riesgo.
          </p>

          <p>
            También resulta conveniente establecer alertas internas para las
            obligaciones que se acercan a los umbrales definidos por el área
            jurídica y financiera.
          </p>

          <p>
            De esta manera, la institución puede decidir con mayor anticipación
            si una cuenta necesita una nueva gestión de cobro, una conciliación,
            un requerimiento formal o la evaluación de una acción judicial.
          </p>

          <p>
            El objetivo es que ninguna cuenta importante permanezca años en una
            hoja de cálculo sin que alguien tenga claro cuál será el siguiente
            paso.
          </p>
        </section>

        {/* ACCIONES */}
        <section className={styles.section}>
          <h2>¿Qué hacer si una EPS lleva meses o años sin pagar?</h2>

          <p>
            El primer paso es evitar asumir que la única solución es seguir
            enviando correos o esperar una nueva fecha de pago. Cuando la mora
            se prolonga, conviene cambiar el nivel de gestión.
          </p>

          <p>
            Dependiendo del estado de la obligación, pueden evaluarse
            alternativas como la depuración documental, reclamaciones formales,
            conciliación, cobro prejurídico o el inicio de las acciones
            judiciales que resulten procedentes.
          </p>

          <p>
            La decisión debe partir de la documentación disponible y de las
            características de cada obligación. No todas las cuentas deben
            gestionarse de la misma manera.
          </p>

          <p>
            Si existen dudas sobre la prescripción, es especialmente importante
            realizar el análisis antes de descartar la cartera. Una decisión
            basada únicamente en la antigüedad de la factura puede ser
            insuficiente.
          </p>
        </section>

        {/* CARTERA ANTIGUA */}
        <section className={styles.sectionHighlight}>
          <h2>¿Qué pasa si la cartera EPS ya es muy antigua?</h2>

          <p>
            Una cartera con varios años de antigüedad merece una revisión
            jurídica individual antes de ser clasificada como incobrable.
          </p>

          <p>
            En estos casos, el análisis debe reconstruir la historia de cada
            obligación relevante: cómo nació, cuándo se hizo exigible, qué
            ocurrió durante el proceso de cobro, si existieron reconocimientos o
            acuerdos y qué actuaciones jurídicas se realizaron.
          </p>

          <p>
            El resultado de esa revisión permitirá determinar si todavía existe
            una ruta de recuperación, si debe adelantarse una gestión adicional
            o si existen riesgos jurídicos que deben ser considerados antes de
            continuar.
          </p>
        </section>

        {/* ESTRATEGIAS */}
        <section className={styles.section}>
          <h2>
            Estrategias jurídicas para recuperar cartera EPS antes de que
            prescriba
          </h2>

          <p>
            La recuperación de cartera puede requerir diferentes niveles de
            intervención. En algunos casos basta con una gestión documental y de
            cobro bien estructurada; en otros, la situación exige una evaluación
            jurídica más profunda.
          </p>

          <p>
            Entre las alternativas que pueden estudiarse se encuentran el
            requerimiento formal de pago, la conciliación de cartera, el cobro
            prejurídico y las acciones judiciales que correspondan según la
            naturaleza y exigibilidad de la obligación.
          </p>

          <p>
            Cuando se analiza la posibilidad de acudir a un proceso judicial,
            también deben revisarse cuidadosamente los documentos que respaldan
            la deuda y las condiciones necesarias para ejercer la acción
            correspondiente.
          </p>

          <p>
            La clave está en no utilizar una única estrategia para toda la
            cartera. Una IPS puede tener simultáneamente cuentas recientes,
            cuentas en conciliación, obligaciones reconocidas, cartera altamente
            envejecida y casos que requieren atención jurídica prioritaria.
          </p>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2>Preguntas frecuentes sobre la prescripción de cartera EPS</h2>

          <details>
            <summary>
              ¿Toda factura de una EPS prescribe en el mismo tiempo?
            </summary>
            <p>
              No necesariamente. El término aplicable debe analizarse según la
              naturaleza de la obligación, el documento que la respalda, su
              exigibilidad y las actuaciones que hayan ocurrido posteriormente.
            </p>
          </details>

          <details>
            <summary>
              ¿Una factura vencida significa que ya está prescrita?
            </summary>
            <p>
              No. Una factura vencida simplemente indica que el plazo de pago
              pasó. La prescripción requiere un análisis jurídico diferente y no
              debe determinarse únicamente por la antigüedad de la cuenta.
            </p>
          </details>

          <details>
            <summary>
              ¿Una conciliación de cartera puede afectar el análisis de
              prescripción?
            </summary>
            <p>
              Puede ser jurídicamente relevante, pero sus efectos dependen de lo
              que ocurrió y de los documentos suscritos. Por eso es importante
              revisar el contenido y las fechas de cada acuerdo o actuación.
            </p>
          </details>

          <details>
            <summary>
              ¿Qué debe hacer una IPS con una cartera EPS de varios años?
            </summary>
            <p>
              Lo recomendable es realizar una auditoría jurídica y documental
              antes de descartarla. Deben revisarse fechas, exigibilidad,
              soportes, pagos, acuerdos, comunicaciones y actuaciones de cobro.
            </p>
          </details>

          <details>
            <summary>¿Se puede recuperar una cartera EPS muy antigua?</summary>
            <p>
              Puede existir una ruta de recuperación dependiendo de las
              circunstancias de cada obligación. La antigüedad por sí sola no
              permite determinar que una cuenta sea irrecuperable.
            </p>
          </details>

          <details>
            <summary>
              ¿Qué riesgo tiene una IPS al esperar demasiado para cobrar?
            </summary>
            <p>
              Además del deterioro financiero y documental de la cartera,
              esperar puede aumentar los riesgos jurídicos asociados al paso del
              tiempo. Por eso es conveniente priorizar oportunamente las
              obligaciones de mayor antigüedad y valor.
            </p>
          </details>
        </section>

        {/* CONCLUSION */}
        <section className={styles.section}>
          <h2>
            Conclusión: controlar los tiempos es parte de recuperar cartera EPS
          </h2>

          <p>
            La prescripción de cartera EPS no debe manejarse como una simple
            fecha dentro de una hoja de cálculo. Detrás de cada factura existe
            una historia documental y jurídica que debe reconstruirse antes de
            tomar una decisión.
          </p>

          <p>
            Para una IPS, el mejor momento para revisar el riesgo de
            prescripción es antes de que la cartera llegue a una situación
            crítica. Clasificar las obligaciones, controlar su antigüedad,
            conservar los soportes y definir oportunamente la estrategia de
            cobro permite tomar decisiones con mayor margen de maniobra.
          </p>

          <p>
            Si una cartera lleva mucho tiempo pendiente, no necesariamente debe
            darse por perdida. Primero conviene determinar qué ocurrió, cuál es
            la situación actual de la obligación y qué alternativas de
            recuperación pueden resultar jurídicamente viables.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Apoya a IPS, clínicas y
            prestadores de salud en Colombia en la gestión y recuperación de
            cartera mediante estrategias de cobro, conciliación y análisis
            jurídico de obligaciones pendientes frente a EPS.
          </p>
        </footer>
      </article>
    </main>
  );
}
