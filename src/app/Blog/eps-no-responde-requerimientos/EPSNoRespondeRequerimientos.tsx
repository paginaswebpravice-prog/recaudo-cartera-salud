"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function EPSNoRespondeRequerimientos() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}

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

          <span className={styles.badge}>Recuperación de cartera EPS</span>

          <h1 className={styles.title}>
            ¿EPS no responde un requerimiento de pago? Qué hacer para recuperar
            la cartera
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y prestadores de salud que
            enfrentan una EPS que no responde comunicaciones, mantiene facturas
            pendientes o prolonga el pago de cartera vencida.
          </p>
        </motion.div>
      </section>

      {/* ================= ARTICLE ================= */}

      <article className={styles.article}>
        {/* ================= INTRODUCCIÓN ================= */}

        <section className={styles.section}>
          <h2>¿Qué hacer si una EPS no responde un requerimiento de pago?</h2>

          <p>
            Cuando una IPS envía un requerimiento de pago y la EPS no responde,
            lo más importante es no dejar la cartera en espera indefinidamente.
            Una comunicación sin respuesta debe convertirse en un punto de
            partida para revisar el estado real de la obligación, organizar los
            soportes y definir cuál será el siguiente paso de recuperación.
          </p>

          <p>
            En la práctica, una factura puede permanecer pendiente durante meses
            mientras pasan de un área a otra las solicitudes de información, las
            glosas, las conciliaciones o las respuestas administrativas. El
            problema aparece cuando ese tiempo se acumula y la IPS continúa
            prestando servicios sin recuperar los recursos correspondientes.
          </p>

          <p>
            Por eso, cuando una EPS deja de responder requerimientos de pago,
            conviene analizar la cartera de manera integral: qué facturas están
            pendientes, cuáles fueron radicadas, cuáles tienen glosas, cuáles ya
            fueron conciliadas y qué obligaciones pueden encontrarse en
            condiciones para una gestión de cobro más avanzada.
          </p>
        </section>

        {/* ================= QUÉ SIGNIFICA ================= */}

        <section className={styles.sectionAlt}>
          <h2>¿Qué significa que una EPS no responda una solicitud de pago?</h2>

          <p>
            La falta de respuesta puede tener diferentes causas y no todas las
            cuentas pendientes tienen exactamente el mismo tratamiento. Una EPS
            puede estar revisando soportes, presentar inconsistencias
            administrativas, mantener una controversia sobre una factura o
            simplemente no haber dado una respuesta oportuna a la reclamación.
          </p>

          <p>
            Por esa razón, antes de asumir que toda la cartera puede cobrarse de
            la misma manera, la IPS debería identificar el motivo por el cual
            cada obligación continúa pendiente.
          </p>

          <div className={styles.box}>
            <h3>La pregunta no es solamente cuánto deben</h3>

            <p>
              Para tomar una buena decisión de cobro también es necesario
              conocer qué facturas están vencidas, cuáles tienen soporte de
              radicación, cuáles fueron objetadas, qué respuestas existen y
              cuáles obligaciones pueden ser objeto de una reclamación
              adicional.
            </p>

            <p>
              Esta revisión permite separar la cartera realmente recuperable, la
              cartera que necesita gestión administrativa y aquella que requiere
              una evaluación jurídica antes de continuar.
            </p>
          </div>
        </section>

        {/* ================= CAUSAS ================= */}

        <section className={styles.section}>
          <h2>
            ¿Por qué una EPS puede no responder los requerimientos de una IPS?
          </h2>

          <p>
            No existe una única razón. En algunos casos puede haber problemas de
            comunicación entre las áreas de cartera, auditoría y cuentas
            médicas. En otros, pueden existir diferencias sobre la factura,
            soportes pendientes o procesos de conciliación que todavía no han
            terminado.
          </p>

          <p>
            También puede ocurrir que la IPS haya enviado varias solicitudes sin
            contar con una trazabilidad suficientemente organizada. Cuando esto
            sucede, demostrar qué se reclamó, cuándo se presentó y qué respuesta
            se recibió puede resultar más difícil.
          </p>

          <p>
            Por eso, más que enviar una nueva comunicación cada vez que no hay
            respuesta, es conveniente construir una secuencia documental clara y
            verificable.
          </p>

          <ul className={styles.checklist}>
            <li>Facturas pendientes de revisión o reconocimiento.</li>

            <li>Glosas o devoluciones que todavía no han sido solucionadas.</li>

            <li>Diferencias relacionadas con soportes o documentación.</li>

            <li>
              Procesos de conciliación o depuración de cartera pendientes.
            </li>

            <li>Requerimientos enviados sin seguimiento posterior.</li>

            <li>
              Falta de información consolidada sobre el estado de cada factura.
            </li>
          </ul>
        </section>

        {/* ================= PRIMEROS PASOS ================= */}

        <section className={styles.section}>
          <h2>
            Qué revisar antes de enviar otro requerimiento de pago a la EPS
          </h2>

          <p>
            Antes de enviar una nueva comunicación, vale la pena detenerse y
            revisar la información disponible. Un requerimiento más completo y
            sustentado puede ser mucho más útil que una sucesión de correos
            reclamando el mismo pago.
          </p>

          <p>
            La revisión debería partir de una relación actualizada de la cartera
            y de la documentación que permite demostrar el origen y estado de
            cada obligación.
          </p>

          <ul className={styles.checklist}>
            <li>Número y fecha de cada factura pendiente.</li>

            <li>
              Valor facturado, valor pagado y saldo actualmente pendiente.
            </li>

            <li>Fecha y evidencia de la radicación ante la EPS.</li>

            <li>Respuestas, observaciones, glosas o devoluciones recibidas.</li>

            <li>Actas o soportes de conciliaciones realizadas.</li>

            <li>
              Acuerdos de pago anteriores y evidencia de sus incumplimientos,
              cuando existan.
            </li>

            <li>Comunicaciones y requerimientos enviados previamente.</li>
          </ul>
        </section>

        {/* ================= REQUERIMIENTO ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            Cómo hacer un requerimiento de pago a una EPS que realmente sirva
          </h2>

          <p>
            Un requerimiento de pago no debería limitarse a decir que existe una
            deuda. La comunicación debe permitir identificar con claridad qué se
            está cobrando, cuál es el valor reclamado y cuáles son los
            documentos que respaldan la obligación.
          </p>

          <p>
            También es recomendable establecer un mecanismo claro para recibir
            la respuesta y conservar evidencia de la entrega. Esto facilita el
            seguimiento posterior y permite construir una trazabilidad
            documental más sólida.
          </p>

          <div className={styles.box}>
            <h3>Un requerimiento completo debería identificar</h3>

            <ul className={styles.checklist}>
              <li>La IPS o prestador que realiza la reclamación.</li>

              <li>La EPS destinataria y el área correspondiente.</li>

              <li>Las facturas y obligaciones objeto del cobro.</li>

              <li>El valor total reclamado y los saldos pendientes.</li>

              <li>
                Los antecedentes de radicación, pagos, glosas o conciliaciones.
              </li>

              <li>Los documentos que respaldan la reclamación.</li>

              <li>Una solicitud concreta de respuesta y pago.</li>

              <li>Los datos de contacto para continuar la gestión.</li>
            </ul>
          </div>
        </section>

        {/* ================= IMPACTO ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            Una EPS que no responde puede convertir una cartera manejable en un
            problema financiero mayor
          </h2>

          <p>
            La cartera vencida no afecta únicamente el balance contable de una
            IPS. Cuando los recursos no ingresan a tiempo, también pueden
            aparecer dificultades para pagar proveedores, cubrir gastos
            operativos, financiar nuevas inversiones o mantener suficiente
            liquidez para la operación diaria.
          </p>

          <p>
            El impacto puede ser todavía mayor cuando la institución continúa
            prestando servicios mientras una parte importante de sus recursos
            permanece pendiente de recaudo.
          </p>

          <p>
            Por eso, la gestión de cartera no debería comenzar únicamente cuando
            la deuda alcanza una antigüedad considerable. La identificación
            temprana de las cuentas problemáticas permite intervenir antes de
            que el deterioro financiero sea más difícil de corregir.
          </p>
        </section>

        {/* ================= COBRO PREJURÍDICO ================= */}

        <section className={styles.section}>
          <h2>¿Cuándo pasar del cobro administrativo al cobro prejurídico?</h2>

          <p>
            No existe una cantidad de días que automáticamente obligue a una IPS
            a iniciar un proceso judicial. La decisión depende de las
            características de la obligación, los documentos disponibles, la
            situación de la cartera y las circunstancias particulares del caso.
          </p>

          <p>
            Sin embargo, cuando una EPS acumula mora, no atiende los
            requerimientos y tampoco ofrece una alternativa verificable de pago,
            puede ser razonable evaluar una etapa de cobro prejurídico.
          </p>

          <p>
            Esta etapa busca llevar la reclamación a un nivel más estructurado,
            revisar jurídicamente la cartera y determinar si todavía existe una
            posibilidad razonable de recuperación mediante negociación,
            conciliación o acuerdo de pago.
          </p>

          <ul className={styles.checklist}>
            <li>La mora continúa aumentando sin una solución concreta.</li>

            <li>Los requerimientos anteriores no han producido resultados.</li>

            <li>Existen acuerdos de pago incumplidos.</li>

            <li>
              La EPS mantiene diferencias sobre facturas que requieren revisión
              especializada.
            </li>

            <li>
              La cartera representa un impacto relevante para el flujo de caja
              de la IPS.
            </li>

            <li>
              La documentación disponible permite avanzar hacia una evaluación
              jurídica de la obligación.
            </li>
          </ul>
        </section>

        {/* ================= COBRO JUDICIAL ================= */}

        <section className={styles.sectionAlt}>
          <h2>¿Cuándo evaluar un cobro judicial contra una EPS?</h2>

          <p>
            Si las gestiones administrativas y prejurídicas no producen una
            solución, puede ser necesario estudiar la posibilidad de acudir a la
            vía judicial. Pero antes de hacerlo, no basta con saber cuánto
            dinero debe la EPS.
          </p>

          <p>
            Es necesario revisar si la obligación cuenta con los documentos y
            características que permitan determinar cuál sería la vía jurídica
            adecuada, además de identificar posibles controversias sobre la
            factura, su exigibilidad o los soportes de la prestación del
            servicio.
          </p>

          <p>
            Una revisión previa de la cartera ayuda a evitar que se presenten
            reclamaciones incompletas o se lleven a una instancia judicial
            obligaciones que todavía requieren depuración administrativa o
            documental.
          </p>

          <div className={styles.box}>
            <h3>Antes de demandar, conviene revisar</h3>

            <ul className={styles.checklist}>
              <li>Existencia y estado de las facturas reclamadas.</li>

              <li>Soportes de prestación y facturación.</li>

              <li>Evidencia de radicación y recepción.</li>

              <li>Glosas, devoluciones y respuestas correspondientes.</li>

              <li>Acuerdos, conciliaciones y reconocimientos de deuda.</li>

              <li>Estado de los pagos parciales y saldos pendientes.</li>

              <li>
                Posibles términos de prescripción y demás aspectos jurídicos
                relevantes.
              </li>
            </ul>
          </div>
        </section>

        {/* ================= DOCUMENTACIÓN ================= */}

        <section className={styles.section}>
          <h2>
            La documentación puede marcar la diferencia en la recuperación de
            cartera EPS
          </h2>

          <p>
            Uno de los problemas más frecuentes en la gestión de cartera es
            tener la información distribuida entre diferentes áreas. Finanzas
            tiene unas cifras, facturación conserva determinados soportes y el
            área jurídica recibe las reclamaciones cuando el conflicto ya está
            avanzado.
          </p>

          <p>
            Una estrategia más eficiente consiste en consolidar la información
            para que cada obligación tenga una historia documental clara:
            prestación del servicio, facturación, radicación, respuesta, glosa,
            conciliación, pagos y saldo pendiente.
          </p>

          <p>
            Esto no solo facilita el eventual cobro jurídico. También mejora las
            conversaciones con la EPS y permite detectar rápidamente cuáles
            cuentas necesitan una gestión administrativa y cuáles requieren
            intervención especializada.
          </p>
        </section>

        {/* ================= ESTRATEGIA ================= */}

        <section className={styles.section}>
          <h2>
            Cómo organizar una estrategia para recuperar cartera cuando la EPS
            no responde
          </h2>

          <p>
            Recuperar una cartera vencida no consiste simplemente en enviar más
            comunicaciones. La gestión debe tener responsables, fechas,
            prioridades y criterios claros para determinar cuándo una cuenta
            pasa de una etapa de cobro a la siguiente.
          </p>

          <p>
            Para una IPS puede resultar útil trabajar con una clasificación que
            permita diferenciar la cartera reciente, la cartera vencida, las
            obligaciones con glosas pendientes, las cuentas en conciliación y
            aquellas que ya requieren revisión jurídica.
          </p>

          <ul className={styles.checklist}>
            <li>Consolidar periódicamente el estado real de la cartera.</li>

            <li>
              Clasificar las obligaciones por antigüedad y nivel de riesgo.
            </li>

            <li>
              Identificar las facturas con glosas o controversias pendientes.
            </li>

            <li>Mantener evidencia de cada comunicación enviada y recibida.</li>

            <li>Definir fechas de seguimiento para cada requerimiento.</li>

            <li>Priorizar las obligaciones de mayor impacto financiero.</li>

            <li>
              Evaluar oportunamente la transición al cobro prejurídico o
              judicial.
            </li>
          </ul>
        </section>

        {/* ================= ERRORES ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            Errores que pueden retrasar la recuperación de cartera de una IPS
          </h2>

          <p>
            Cuando una EPS no responde, es comprensible que la primera reacción
            sea enviar otro correo o hacer una nueva llamada. El problema es que
            repetir la misma gestión sin cambiar la estrategia puede hacer que
            transcurran meses sin avances reales.
          </p>

          <p>Entre los errores que conviene evitar se encuentran:</p>

          <ul className={styles.checklist}>
            <li>
              Enviar requerimientos sin verificar previamente la información.
            </li>

            <li>
              No conservar evidencia de la recepción de las comunicaciones.
            </li>

            <li>
              Mezclar en una misma reclamación facturas con situaciones
              jurídicas o administrativas diferentes.
            </li>

            <li>Dejar sin seguimiento las respuestas de la EPS.</li>

            <li>Ignorar glosas, devoluciones o diferencias pendientes.</li>

            <li>Esperar indefinidamente una respuesta informal.</li>

            <li>
              Llevar una cartera a cobro jurídico sin una depuración documental
              previa.
            </li>
          </ul>
        </section>

        {/* ================= INDICADORES ================= */}

        <section className={styles.section}>
          <h2>
            Indicadores que una IPS debería vigilar cuando una EPS está en mora
          </h2>

          <p>
            La cartera debe analizarse no solamente por su valor total, sino
            también por la velocidad con la que se está deteriorando. Una cifra
            elevada puede esconder problemas muy diferentes dependiendo de la
            antigüedad y composición de las cuentas.
          </p>

          <ul className={styles.checklist}>
            <li>Valor total de cartera pendiente por EPS.</li>

            <li>Porcentaje de cartera vencida.</li>

            <li>Antigüedad promedio de las cuentas por cobrar.</li>

            <li>Cartera con más de 90, 180 o 360 días.</li>

            <li>Valor de glosas pendientes de resolver.</li>

            <li>Pagos realizados frente a los valores facturados.</li>

            <li>Tiempo promedio de recuperación de cartera.</li>
          </ul>

          <p>
            Estos indicadores permiten identificar cuándo una demora aislada
            empieza a convertirse en un problema estructural de liquidez y
            ayudan a priorizar las cuentas que necesitan atención inmediata.
          </p>
        </section>

        {/* ================= PROTECCIÓN ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            No esperes a que la cartera se vuelva incobrable para empezar a
            gestionarla
          </h2>

          <p>
            Una de las mejores decisiones financieras que puede tomar una IPS es
            tratar la cartera como un proceso permanente y no como una actividad
            que solamente se activa cuando aparecen problemas de liquidez.
          </p>

          <p>
            Una factura recién vencida, una glosa sin resolver o una EPS que
            deja de responder pueden parecer situaciones aisladas. Cuando se
            acumulan durante meses, sin embargo, terminan representando una
            cantidad importante de recursos fuera del flujo de caja.
          </p>

          <p>
            Actuar con información organizada permite decidir antes, negociar
            mejor y determinar con mayor claridad cuándo una obligación debe
            pasar a una etapa de cobro más especializada.
          </p>
        </section>

        {/* ================= CONCLUSIÓN ================= */}

        <section className={styles.section}>
          <h2>EPS no responde: ¿cuál debería ser el siguiente paso?</h2>

          <p>
            Si una EPS no responde los requerimientos de pago de una IPS, lo
            recomendable es evitar que la cartera continúe avanzando sin
            control. El primer paso consiste en conocer exactamente qué se
            adeuda, qué documentos existen y cuál es el estado de cada
            obligación.
          </p>

          <p>
            A partir de esa revisión puede definirse una ruta que combine
            gestión administrativa, conciliación, cobro prejurídico y, cuando
            las condiciones del caso lo permitan, evaluación de acciones
            judiciales.
          </p>

          <p>
            La clave está en no tratar toda la cartera de la misma manera. Una
            cuenta con una glosa pendiente necesita una gestión diferente a una
            obligación reconocida y vencida que simplemente no ha sido pagada.
          </p>

          <p>
            En definitiva, cuando una EPS deja de responder, el objetivo no
            debería ser enviar cada vez más requerimientos, sino transformar la
            información disponible en una estrategia concreta de recuperación.
          </p>
        </section>

        {/* ================= FOOTER ================= */}

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Acompaña a IPS, clínicas
            y prestadores de salud en Colombia en la gestión y recuperación de
            cartera mediante estrategias administrativas, prejurídicas y
            jurídicas orientadas a proteger el recaudo.
          </p>
        </footer>
      </article>
    </main>
  );
}
