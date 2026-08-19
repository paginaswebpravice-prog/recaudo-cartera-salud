"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function RecuperarCarteraNoPBS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al blog
          </Link>

          <span className={styles.badge}>
            Gestión de cartera en el sector salud
          </span>

          <h1 className={styles.title}>
            Recuperar cartera NO PBS en Colombia: guía práctica para IPS,
            clínicas y hospitales
          </h1>

          <p className={styles.subtitle}>
            Cómo organizar los soportes, identificar cuentas pendientes,
            gestionar reclamaciones y fortalecer la recuperación de pagos por
            servicios y tecnologías NO PBS en el sector salud colombiano.
          </p>
        </motion.div>
      </section>

      {/* ARTICLE */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>
            ¿Qué es la cartera NO PBS y por qué requiere una gestión
            especializada?
          </h2>

          <p>
            Para muchas IPS, clínicas y hospitales, la cartera relacionada con
            servicios y tecnologías NO PBS puede representar una parte
            importante de los recursos pendientes por recuperar. El problema no
            siempre está únicamente en que exista una factura sin pagar. En
            muchos casos, la dificultad aparece porque la cuenta tiene un
            historial complejo de radicaciones, auditorías, devoluciones,
            glosas, solicitudes de información o diferencias sobre el valor
            reclamado.
          </p>

          <p>
            Por eso, recuperar cartera NO PBS no debería reducirse simplemente a
            enviar recordatorios de pago. Antes de iniciar cualquier estrategia,
            es necesario entender qué se está cobrando, qué documentos respaldan
            la obligación, cuál es el estado actual de la cuenta y qué
            actuaciones se han realizado previamente.
          </p>

          <p>
            Una cartera bien organizada permite tomar mejores decisiones. Una
            cartera desactualizada, con soportes dispersos o sin seguimiento,
            puede convertirse rápidamente en un problema de flujo de caja para
            cualquier prestador de servicios de salud.
          </p>
        </section>

        {/* ALT */}
        <section className={styles.sectionAlt}>
          <h2>
            El problema no siempre es la falta de pago: también puede ser la
            falta de control sobre la cuenta
          </h2>

          <p>
            En la práctica, muchas instituciones saben que tienen valores
            pendientes, pero no cuentan con una visión clara del estado real de
            cada obligación. Algunas cuentas permanecen durante meses en
            procesos de revisión, otras tienen respuestas pendientes y algunas
            continúan registradas como cartera aunque ya existan pagos parciales
            o acuerdos que no han sido actualizados.
          </p>

          <p>
            Esto hace que el primer trabajo no sea necesariamente cobrar, sino
            <strong> depurar la información</strong>. Una estrategia de
            recuperación puede perder tiempo y recursos si comienza a gestionar
            cuentas con saldos incorrectos, documentos incompletos o estados que
            no corresponden con la realidad actual.
          </p>

          <p>
            Tener información confiable permite priorizar la cartera,
            identificar casos críticos y asignar el esfuerzo adecuado a cada
            obligación.
          </p>
        </section>

        {/* CAUSES */}
        <section className={styles.section}>
          <h2>Principales razones por las que se acumula cartera NO PBS</h2>

          <p>
            No existe una única causa para la mora o el retraso en el
            reconocimiento de este tipo de cuentas. Normalmente intervienen
            varios factores administrativos, documentales y operativos.
          </p>

          <p>
            <strong>Soportes incompletos o inconsistentes:</strong> cuando
            faltan documentos o existen diferencias entre la información
            radicada y los soportes disponibles, la revisión de la cuenta puede
            demorarse o requerir nuevas gestiones.
          </p>

          <p>
            <strong>Glosas, devoluciones u observaciones:</strong> algunas
            cuentas requieren aclaraciones adicionales antes de avanzar dentro
            del proceso correspondiente.
          </p>

          <p>
            <strong>Procesos de auditoría prolongados:</strong> una obligación
            puede permanecer durante largos periodos en revisión, especialmente
            cuando existen diferencias sobre soportes, valores o condiciones del
            servicio facturado.
          </p>

          <p>
            <strong>Falta de seguimiento:</strong> una cuenta que no recibe
            seguimiento oportuno puede permanecer indefinidamente en el mismo
            estado, incluso cuando ya existen acciones o documentos pendientes
            por presentar.
          </p>

          <p>
            <strong>Información dispersa:</strong> cuando facturación, cartera,
            auditoría y el área jurídica trabajan con bases diferentes, resulta
            más difícil conocer el estado real de la obligación.
          </p>
        </section>

        {/* HIGHLIGHT */}
        <section className={styles.sectionHighlight}>
          <h2>
            Dejar que la cartera envejezca puede volver más difícil su
            recuperación
          </h2>

          <p>
            Uno de los errores más frecuentes es asumir que una cuenta pendiente
            simplemente se resolverá con el paso del tiempo. Sin embargo,
            mientras la cartera continúa envejeciendo, pueden aparecer nuevos
            problemas: documentos que se extravían, cambios en los responsables
            de la gestión, información desactualizada o mayores dificultades
            para reconstruir el historial completo de la obligación.
          </p>

          <p>
            Actuar temprano no significa iniciar inmediatamente una acción
            judicial. Significa conocer el estado de la cuenta, documentar cada
            actuación, identificar pendientes y establecer un plan de
            seguimiento antes de que el caso se vuelva más complejo.
          </p>
        </section>

        {/* STEP 1 */}
        <section className={styles.section}>
          <h2>Primer paso: depurar y clasificar toda la cartera pendiente</h2>

          <p>
            Antes de diseñar una estrategia de recuperación, es recomendable
            construir una base de información confiable. Esto permite saber
            exactamente cuánto se está reclamando y cuál es la situación de cada
            cuenta.
          </p>

          <p>La revisión puede incluir, entre otros aspectos:</p>

          <ul className={styles.checklist}>
            <li>Valor inicial facturado y saldo actualmente pendiente.</li>
            <li>Fecha de prestación y fecha de facturación.</li>
            <li>Fecha y evidencia de radicación.</li>
            <li>Pagos parciales realizados.</li>
            <li>Glosas, devoluciones u observaciones existentes.</li>
            <li>Respuestas enviadas por la IPS o clínica.</li>
            <li>Estado actual de auditoría o revisión.</li>
            <li>Acuerdos, conciliaciones o compromisos previos.</li>
            <li>Edad de la cartera y prioridad financiera del caso.</li>
          </ul>

          <p>
            Esta clasificación permite dejar de tratar toda la cartera como si
            estuviera en la misma situación. Una cuenta recientemente radicada
            no necesita la misma gestión que una obligación que lleva varios
            meses sin una respuesta clara.
          </p>
        </section>

        {/* DOCUMENTATION */}
        <section className={styles.sectionAlt}>
          <h2>
            La documentación puede definir qué tan fácil o difícil será
            recuperar una cuenta
          </h2>

          <p>
            Una de las mayores fortalezas de una IPS durante cualquier proceso
            de recuperación es poder reconstruir claramente la historia de la
            obligación. No basta con conocer el valor pendiente; es necesario
            contar con elementos que permitan demostrar qué servicio fue
            prestado, cómo fue facturado y qué actuaciones se realizaron
            posteriormente.
          </p>

          <p>Dependiendo del caso, pueden ser importantes:</p>

          <ul className={styles.checklist}>
            <li>Facturas y documentos relacionados con la cuenta.</li>
            <li>Soportes de la prestación del servicio.</li>
            <li>Autorizaciones cuando sean aplicables.</li>
            <li>Constancias y números de radicación.</li>
            <li>Respuestas a glosas o devoluciones.</li>
            <li>Comunicaciones y requerimientos previos.</li>
            <li>Estados de cuenta y conciliaciones.</li>
            <li>Acuerdos de pago o compromisos suscritos.</li>
            <li>Decisiones administrativas o judiciales relacionadas.</li>
          </ul>

          <p>
            Organizar estos documentos desde el comienzo evita tener que buscar
            información de manera urgente cuando la cuenta ya requiere una
            gestión más compleja.
          </p>
        </section>

        {/* STRATEGY */}
        <section className={styles.section}>
          <h2>
            Cómo diseñar una estrategia para recuperar cartera NO PBS paso a
            paso
          </h2>

          <p>
            No todas las cuentas deberían seguir exactamente el mismo camino.
            Una estrategia efectiva suele ser escalonada y basada en el estado
            real de cada obligación.
          </p>

          <p>Un proceso organizado puede seguir una lógica como esta:</p>

          <ul className={styles.checklist}>
            <li>
              <strong>1. Validación:</strong> confirmar el saldo, los soportes y
              la información disponible.
            </li>

            <li>
              <strong>2. Clasificación:</strong> identificar la antigüedad, el
              estado de auditoría y el nivel de complejidad.
            </li>

            <li>
              <strong>3. Gestión administrativa:</strong> realizar seguimiento a
              solicitudes, respuestas, pendientes y procesos de reconocimiento.
            </li>

            <li>
              <strong>4. Conciliación o acercamiento:</strong> buscar claridad
              sobre diferencias y valores discutidos cuando el caso lo permita.
            </li>

            <li>
              <strong>5. Cobro especializado:</strong> intensificar la gestión
              en cuentas envejecidas o con incumplimientos reiterados.
            </li>

            <li>
              <strong>6. Evaluación jurídica:</strong> analizar individualmente
              los mecanismos que podrían ser aplicables según las
              características de la obligación.
            </li>
          </ul>
        </section>

        {/* MANAGEMENT */}
        <section className={styles.section}>
          <h2>
            Seguimiento administrativo: la etapa que muchas veces determina si
            la cartera avanza o se estanca
          </h2>

          <p>
            La recuperación de cartera requiere seguimiento continuo. En algunos
            casos, la obligación no está necesariamente negada, sino que existe
            una actuación pendiente, una respuesta que debe ser revisada o un
            documento adicional que debe incorporarse.
          </p>

          <p>
            Por esta razón es importante establecer responsables y fechas de
            seguimiento. Una cuenta no debería quedar registrada simplemente
            como “en trámite” durante meses sin que exista claridad sobre la
            última actuación realizada y el siguiente paso.
          </p>

          <p>
            Una buena práctica es que cada obligación tenga, como mínimo, un
            historial de gestiones donde se registre qué ocurrió, cuándo
            ocurrió, quién realizó la actuación y cuál es la acción pendiente.
          </p>
        </section>

        {/* PRIORITIZATION */}
        <section className={styles.sectionAlt}>
          <h2>
            No toda la cartera debe recibir el mismo esfuerzo: cómo priorizar
            los casos
          </h2>

          <p>
            Cuando una IPS administra un volumen importante de cuentas
            pendientes, intentar gestionar todo al mismo tiempo puede ser poco
            eficiente. La priorización ayuda a concentrar recursos donde existe
            una mayor necesidad o una oportunidad clara de avanzar.
          </p>

          <p>Algunos criterios que pueden utilizarse son:</p>

          <ul className={styles.checklist}>
            <li>Valor económico de la obligación.</li>
            <li>Antigüedad de la cartera.</li>
            <li>Estado documental.</li>
            <li>Existencia de respuestas o pendientes recientes.</li>
            <li>Probabilidad de resolución administrativa.</li>
            <li>Historial de pagos parciales o acuerdos.</li>
            <li>Complejidad técnica del caso.</li>
          </ul>

          <p>
            Esto permite construir grupos de trabajo y evitar que las cuentas
            más antiguas o relevantes queden mezcladas con obligaciones que
            todavía se encuentran en una etapa temprana.
          </p>
        </section>

        {/* TECHNOLOGY */}
        <section className={styles.section}>
          <h2>
            Tecnología y control de información: aliados para mejorar la gestión
            de cartera
          </h2>

          <p>
            La recuperación de cartera no depende únicamente de enviar más
            correos o realizar más llamadas. También depende de contar con
            información organizada y disponible para tomar decisiones.
          </p>

          <p>
            Una herramienta de gestión puede ayudar a centralizar estados de
            cuenta, registrar actuaciones, asignar responsables, generar alertas
            y hacer seguimiento a compromisos. Esto resulta especialmente útil
            cuando participan varias áreas dentro del proceso.
          </p>

          <p>
            El objetivo no es reemplazar el análisis humano. La tecnología debe
            facilitar que el equipo identifique rápidamente qué cuentas
            necesitan atención y qué gestión corresponde realizar en cada una.
          </p>
        </section>

        {/* LEGAL */}
        <section className={styles.sectionHighlight}>
          <h2>¿Cuándo puede ser necesario evaluar una estrategia jurídica?</h2>

          <p>
            No todas las cuentas pendientes requieren una acción jurídica
            inmediata. Sin embargo, cuando una obligación permanece sin solución
            después de las gestiones realizadas, existen incumplimientos
            reiterados o aparecen controversias que no pueden resolverse por la
            vía administrativa, puede ser necesario analizar el caso de manera
            individual.
          </p>

          <p>
            Esa evaluación debe partir de la documentación disponible, la
            naturaleza de la obligación, las actuaciones previas y las
            particularidades del caso. Por eso, antes de tomar una decisión, es
            importante contar con un expediente organizado y con información
            actualizada.
          </p>
        </section>

        {/* ERRORS */}
        <section className={styles.section}>
          <h2>
            Errores frecuentes que pueden afectar la recuperación de cartera NO
            PBS
          </h2>

          <ul className={styles.checklist}>
            <li>Trabajar con saldos desactualizados.</li>
            <li>No identificar pagos parciales realizados.</li>
            <li>Perder soportes o evidencias de radicación.</li>
            <li>Dejar cuentas durante largos periodos sin seguimiento.</li>
            <li>No registrar las gestiones realizadas.</li>
            <li>Tratar todas las cuentas con la misma estrategia.</li>
            <li>Esperar a que la cartera envejezca antes de revisarla.</li>
            <li>
              No coordinar la información entre facturación, cartera y
              auditoría.
            </li>
            <li>
              Iniciar nuevas gestiones sin revisar el historial completo del
              caso.
            </li>
          </ul>

          <p>
            Muchos de estos problemas pueden reducirse con una metodología clara
            de control, responsables definidos y seguimiento periódico a la
            cartera.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className={styles.sectionAlt}>
          <h2>
            Recuperar cartera NO PBS requiere información, seguimiento y una
            estrategia definida
          </h2>

          <p>
            La recuperación de cartera NO PBS no depende de una única acción ni
            de un mensaje de cobro. Es un proceso que comienza con la calidad de
            la información disponible y continúa con una gestión organizada de
            cada obligación.
          </p>

          <p>
            Para una IPS, clínica u hospital, conocer exactamente qué se debe,
            cuáles cuentas tienen soportes completos, qué gestiones están
            pendientes y cuáles casos requieren una atención prioritaria permite
            proteger mejor el flujo de caja y reducir el impacto de la cartera
            envejecida.
          </p>

          <p>
            La clave está en no dejar que las cuentas pendientes se conviertan
            simplemente en cifras dentro de un reporte. Cada obligación tiene
            una historia, un estado documental y una posible ruta de gestión.
            Entre más temprano se identifique esa situación, mayores serán las
            posibilidades de tomar decisiones oportunas.
          </p>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2>Preguntas frecuentes sobre la recuperación de cartera NO PBS</h2>

          <h3>
            ¿Qué debe hacer una IPS cuando identifica cartera NO PBS pendiente?
          </h3>

          <p>
            Lo recomendable es comenzar con una revisión de la información:
            validar saldos, identificar los documentos disponibles, revisar el
            historial de radicación y determinar el estado actual de cada
            cuenta. Con esa información es posible definir qué obligaciones
            requieren seguimiento, aclaración, conciliación o una evaluación
            adicional.
          </p>

          <h3>
            ¿Por qué una cuenta NO PBS puede permanecer tanto tiempo pendiente?
          </h3>

          <p>
            Las causas pueden variar. Algunas cuentas presentan diferencias
            documentales, otras permanecen en procesos de auditoría o requieren
            aclaraciones. También puede ocurrir que la falta de seguimiento haga
            que una obligación permanezca durante largos periodos sin avances.
          </p>

          <h3>¿Qué documentos ayudan a respaldar una reclamación?</h3>

          <p>
            Dependiendo de cada caso, pueden ser relevantes las facturas,
            soportes de prestación, constancias de radicación, comunicaciones,
            respuestas a glosas, estados de cuenta y demás documentos que
            permitan demostrar la existencia y el valor de la obligación.
          </p>

          <h3>¿Toda la cartera NO PBS debe manejarse de la misma manera?</h3>

          <p>
            No necesariamente. Una cuenta reciente con información completa
            puede requerir una gestión diferente a una obligación antigua con
            varias observaciones o actuaciones pendientes. Clasificar y
            segmentar la cartera ayuda a utilizar mejor los recursos
            disponibles.
          </p>

          <h3>
            ¿Cuándo conviene realizar una evaluación jurídica de la cartera?
          </h3>

          <p>
            Puede ser necesario analizar una estrategia jurídica cuando las
            gestiones realizadas no producen avances, existen incumplimientos
            persistentes o la naturaleza del caso requiere revisar mecanismos
            adicionales. La decisión debe tomarse después de evaluar las
            particularidades y los documentos de cada obligación.
          </p>

          <h3>¿Cómo evitar que la cartera NO PBS siga envejeciendo?</h3>

          <p>
            La prevención comienza con información actualizada, seguimiento
            periódico, responsables definidos y registro de cada actuación. Una
            cartera controlada desde etapas tempranas permite detectar problemas
            antes de que se acumulen durante meses o años.
          </p>
        </section>
      </article>
    </main>
  );
}
