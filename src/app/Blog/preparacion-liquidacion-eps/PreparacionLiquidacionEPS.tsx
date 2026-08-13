"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function PreparacionLiquidacionEPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Riesgos financieros y recuperación de cartera EPS
          </span>

          <h1 className={styles.title}>
            ¿Qué hacer si una EPS puede ser liquidada? Guía para IPS sobre
            cartera y pagos
          </h1>

          <p className={styles.subtitle}>
            Una intervención o una posible liquidación de una EPS puede poner
            presión sobre la cartera de una IPS. Conozca qué revisar, qué
            documentos organizar y qué acciones tomar para proteger sus
            acreencias y reducir el riesgo financiero en Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRODUCCIÓN */}
        <section className={styles.section}>
          <h2>
            ¿Qué debe hacer una IPS cuando una EPS presenta problemas
            financieros?
          </h2>

          <p>
            Cuando una EPS empieza a presentar dificultades financieras, los
            efectos no se quedan únicamente dentro de la entidad responsable del
            aseguramiento. También pueden sentirse en clínicas, hospitales,
            centros médicos y demás IPS que dependen de sus pagos para mantener
            un flujo de caja estable.
          </p>

          <p>
            Para una IPS, el problema puede comenzar con algo aparentemente
            manejable: cuentas que tardan más de lo habitual en pagarse,
            conciliaciones que se aplazan, glosas que permanecen abiertas o
            acuerdos de pago que dejan de cumplirse. Si estas situaciones se
            acumulan, la cartera puede crecer hasta convertirse en un riesgo
            financiero considerable.
          </p>

          <p>
            Por eso, esperar a que exista una liquidación formal para empezar a
            organizar la cartera puede ser una mala estrategia. La preparación
            debe comenzar mucho antes, especialmente cuando existen señales de
            deterioro financiero o medidas especiales sobre la EPS.
          </p>
        </section>

        {/* INTERVENCIÓN VS LIQUIDACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>
            Intervención de una EPS no significa necesariamente liquidación:
            ¿cuál es la diferencia?
          </h2>

          <p>
            Este punto es importante porque suele generar confusión. Una EPS
            puede encontrarse bajo una medida de intervención forzosa para
            administrar sin que eso signifique que su liquidación ya esté
            decidida.
          </p>

          <p>
            La intervención para administrar busca, entre otros objetivos,
            determinar si la entidad puede ser recuperada y continuar
            desarrollando adecuadamente su actividad. La liquidación, en cambio,
            corresponde a un proceso diferente que tiene como finalidad terminar
            la existencia legal de la entidad conforme al régimen aplicable.
          </p>

          <p>
            Para las IPS, la conclusión práctica es sencilla: una medida de
            intervención debe entenderse como una señal para revisar el riesgo
            de la cartera, no como una confirmación automática de que la EPS
            desaparecerá.
          </p>
        </section>

        {/* SEÑALES */}
        <section className={styles.section}>
          <h2>Señales de alerta que una IPS debería vigilar en una EPS</h2>

          <p>
            No existe una única señal que permita afirmar que una EPS será
            liquidada. Sin embargo, determinados cambios pueden justificar una
            revisión más cuidadosa de la exposición financiera que tiene la IPS
            frente a ese pagador.
          </p>

          <ul className={styles.checklist}>
            <li>Aumento significativo de los tiempos habituales de pago.</li>

            <li>Incumplimiento reiterado de acuerdos o compromisos de pago.</li>

            <li>Crecimiento acelerado de la cartera vencida.</li>

            <li>
              Dificultades recurrentes en procesos de conciliación de cuentas.
            </li>

            <li>
              Incremento de glosas, devoluciones o controversias sobre cuentas.
            </li>

            <li>
              Cambios administrativos o medidas especiales comunicadas por las
              autoridades.
            </li>

            <li>
              Concentración excesiva de los ingresos de la IPS en un solo
              pagador.
            </li>

            <li>
              Deterioro de las condiciones comerciales o financieras previamente
              acordadas.
            </li>
          </ul>
        </section>

        {/* CARTERA */}
        <section className={styles.sectionAlt}>
          <h2>
            Lo primero: conocer exactamente cuánto le debe la EPS a su IPS
          </h2>

          <p>
            Antes de pensar en una demanda, una conciliación o cualquier otra
            estrategia de recuperación, la IPS necesita saber cuál es la
            situación real de su cartera.
          </p>

          <p>
            Parece algo básico, pero en la práctica no siempre existe una
            fotografía actualizada de las obligaciones. Es posible encontrar
            facturas radicadas que todavía no han sido pagadas, cuentas
            glosadas, obligaciones conciliadas parcialmente, acuerdos de pago
            incumplidos y saldos que aparecen de manera diferente en las áreas
            financiera, de cartera y jurídica.
          </p>

          <p>
            Por eso conviene consolidar la información y separar la cartera por
            edades, estado de la obligación, soporte disponible y nivel de
            riesgo.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Una revisión inicial debería identificar:</strong>
            </p>

            <p>• Valor total de la cartera pendiente frente a cada EPS.</p>

            <p>• Cartera corriente, vencida y de difícil recuperación.</p>

            <p>• Facturas radicadas y pendientes de pago.</p>

            <p>• Glosas y devoluciones pendientes de resolver.</p>

            <p>• Conciliaciones realizadas y obligaciones reconocidas.</p>

            <p>• Acuerdos de pago vigentes e incumplidos.</p>

            <p>• Procesos de cobro ya iniciados.</p>
          </div>
        </section>

        {/* DOCUMENTACIÓN */}
        <section className={styles.section}>
          <h2>
            Organice los documentos de la cartera antes de que la situación se
            complique
          </h2>

          <p>
            Una de las mejores medidas preventivas que puede tomar una IPS es
            organizar desde temprano los documentos que demuestran la existencia
            y el estado de sus acreencias.
          </p>

          <p>
            Cuando una cartera lleva meses o años acumulándose, encontrar los
            soportes después puede convertirse en una tarea mucho más difícil.
            Por eso no conviene esperar a que exista una liquidación para
            empezar a reconstruir el expediente.
          </p>

          <ul className={styles.checklist}>
            <li>Facturas y documentos equivalentes.</li>

            <li>Soportes de prestación de los servicios.</li>

            <li>Constancias de radicación.</li>

            <li>Respuestas a glosas y devoluciones.</li>

            <li>Actas de conciliación.</li>

            <li>Acuerdos de pago.</li>

            <li>Comunicaciones y requerimientos de cobro.</li>

            <li>Certificaciones y documentos contables relacionados.</li>

            <li>Soportes de obligaciones reconocidas.</li>

            <li>Antecedentes de negociaciones realizadas con la EPS.</li>
          </ul>

          <p>
            La organización documental no garantiza por sí sola el pago de una
            obligación, pero sí permite tomar decisiones jurídicas y financieras
            con mucha mayor información.
          </p>
        </section>

        {/* COBRO TEMPRANO */}
        <section className={styles.sectionAlt}>
          <h2>
            No espere a la liquidación para empezar a cobrar la cartera vencida
          </h2>

          <p>
            Uno de los errores más costosos para una IPS consiste en asumir una
            posición completamente pasiva mientras la cartera continúa
            creciendo.
          </p>

          <p>
            Si existen obligaciones vencidas, conviene establecer una estrategia
            de recuperación que permita determinar cuáles pueden resolverse
            mediante gestión administrativa o conciliación y cuáles requieren
            una actuación jurídica más contundente.
          </p>

          <p>
            El cobro prejurídico puede ser útil para formalizar requerimientos,
            organizar la negociación y dejar evidencia de las gestiones
            realizadas. Cuando el caso lo permite y existen los presupuestos
            jurídicos necesarios, también puede evaluarse el inicio de acciones
            judiciales.
          </p>

          <p>
            La decisión debe tomarse sobre el expediente concreto y no
            simplemente porque una EPS se encuentre en dificultades financieras.
          </p>
        </section>

        {/* QUÉ HACER SI YA HAY LIQUIDACIÓN */}
        <section className={styles.section}>
          <h2>
            ¿Qué pasa con la cartera de una IPS cuando una EPS entra en
            liquidación?
          </h2>

          <p>
            Cuando una EPS entra formalmente en un proceso de liquidación, la
            estrategia cambia. Ya no se trata únicamente de continuar con las
            gestiones ordinarias de cobro, sino de revisar las reglas
            particulares del proceso liquidatorio y las instrucciones
            establecidas por el agente especial liquidador.
          </p>

          <p>
            La Superintendencia Nacional de Salud explica que, en las
            liquidaciones forzosas administrativas, los acreedores deben
            presentar sus reclamaciones directamente ante la entidad en
            liquidación, dentro de la oportunidad y bajo las condiciones
            establecidas en el emplazamiento correspondiente.
          </p>

          <p>
            Esto hace especialmente importante actuar con orden y oportunidad.
            Una IPS no debería asumir que por tener registrada contablemente una
            cuenta esta será automáticamente reconocida dentro de la
            liquidación.
          </p>

          <p>
            La acreencia debe ser analizada y sometida al procedimiento
            correspondiente para su reconocimiento, calificación y graduación.
          </p>
        </section>

        {/* RECLAMACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Cómo debe prepararse una IPS para reclamar una acreencia dentro de
            una liquidación?
          </h2>

          <p>
            La preparación depende de las reglas específicas del proceso, pero
            desde el punto de vista práctico la IPS debería tener lista y
            organizada la información que permita demostrar el origen, valor y
            estado de cada obligación.
          </p>

          <ul className={styles.checklist}>
            <li>Identificar claramente a la EPS y la obligación reclamada.</li>

            <li>
              Consolidar los documentos que soportan la prestación del servicio.
            </li>

            <li>
              Verificar los valores registrados en contabilidad y cartera.
            </li>

            <li>
              Separar obligaciones reconocidas de aquellas que aún presentan
              controversias.
            </li>

            <li>Revisar conciliaciones, acuerdos y pagos parciales.</li>

            <li>Identificar oportunamente las instrucciones del liquidador.</li>

            <li>Presentar la reclamación dentro del término establecido.</li>

            <li>
              Hacer seguimiento al resultado de la reclamación y a su
              calificación.
            </li>
          </ul>
        </section>

        {/* PRELACIÓN */}
        <section className={styles.section}>
          <h2>
            ¿Las IPS tienen alguna prelación para el pago de acreencias en una
            liquidación?
          </h2>

          <p>
            Este es otro punto que debe analizarse con cuidado. La existencia de
            una acreencia reconocida no significa necesariamente que el pago sea
            inmediato ni que todos los acreedores tengan la misma posición
            dentro del proceso.
          </p>

          <p>
            En la información publicada por la Superintendencia Nacional de
            Salud sobre liquidaciones de EPS e IPS se contempla una prelación de
            créditos en la que, después de determinados conceptos y gastos
            aplicables, aparecen las deudas laborales y posteriormente las
            deudas reconocidas a instituciones prestadoras de servicios de
            salud, entre otras categorías.
          </p>

          <p>
            Por eso es importante diferenciar entre tres conceptos que a menudo
            se confunden: tener una deuda registrada, lograr que sea reconocida
            dentro de la liquidación y finalmente obtener su pago.
          </p>
        </section>

        {/* LIQUIDEZ */}
        <section className={styles.sectionAlt}>
          <h2>
            Proteja también la liquidez de la IPS mientras intenta recuperar la
            cartera
          </h2>

          <p>
            Recuperar una cartera importante puede tomar tiempo. Por eso, la
            estrategia jurídica debe ir acompañada de una estrategia financiera.
          </p>

          <p>
            Si una IPS tiene una exposición elevada frente a una EPS con
            dificultades, resulta prudente proyectar distintos escenarios de
            flujo de caja y determinar qué ocurriría si los pagos se retrasan
            durante varios meses.
          </p>

          <ul className={styles.checklist}>
            <li>Actualizar las proyecciones de flujo de caja.</li>

            <li>Identificar obligaciones financieras prioritarias.</li>

            <li>Revisar la concentración de cartera por EPS.</li>

            <li>Establecer escenarios de retraso en los pagos.</li>

            <li>Priorizar gastos esenciales para la operación.</li>

            <li>
              Buscar alternativas para reducir la dependencia de un pagador.
            </li>

            <li>
              Acelerar la recuperación de cartera que tenga mejores
              posibilidades de recaudo.
            </li>
          </ul>
        </section>

        {/* DIVERSIFICACIÓN */}
        <section className={styles.section}>
          <h2>
            Reducir la dependencia de una sola EPS también es una estrategia de
            prevención
          </h2>

          <p>
            Una IPS que concentra una parte importante de sus ingresos en un
            único pagador queda más expuesta cuando ese pagador presenta
            dificultades.
          </p>

          <p>
            La diversificación no significa simplemente conseguir más contratos.
            También implica analizar qué porcentaje de los ingresos depende de
            cada entidad, cuáles son sus tiempos reales de pago y qué nivel de
            riesgo representa cada relación comercial.
          </p>

          <p>
            Tener esta información permite anticiparse a problemas de liquidez y
            tomar decisiones antes de que una situación externa termine
            comprometiendo la operación de la institución.
          </p>
        </section>

        {/* CHECKLIST FINAL */}
        <section className={styles.sectionAlt}>
          <h2>
            Checklist: qué debería revisar una IPS si una EPS presenta señales
            de riesgo
          </h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Antes de que la situación avance:</strong>
            </p>

            <p>✓ Actualice el estado completo de la cartera.</p>

            <p>✓ Clasifique las obligaciones por antigüedad y riesgo.</p>

            <p>✓ Organice todos los soportes de las cuentas.</p>

            <p>✓ Revise glosas, devoluciones y conciliaciones pendientes.</p>

            <p>✓ Identifique acuerdos de pago incumplidos.</p>

            <p>✓ Evalúe qué cartera requiere gestión prejurídica.</p>

            <p>
              ✓ Determine qué obligaciones podrían requerir una acción judicial.
            </p>

            <p>✓ Revise la exposición financiera frente a esa EPS.</p>

            <p>✓ Prepare escenarios alternativos de flujo de caja.</p>

            <p>
              ✓ Monitoree las decisiones y comunicaciones oficiales relacionadas
              con la EPS.
            </p>
          </div>
        </section>

        {/* ERROR */}
        <section className={styles.section}>
          <h2>
            El error más costoso: esperar a que la EPS esté liquidada para
            empezar a revisar la cartera
          </h2>

          <p>
            Cuando una IPS espera hasta el último momento para organizar sus
            cuentas, puede encontrarse con expedientes incompletos, diferencias
            contables, documentos difíciles de localizar y obligaciones que
            requieren una revisión jurídica más profunda.
          </p>

          <p>
            La prevención no consiste en asumir que una EPS necesariamente será
            liquidada. Consiste en estar preparada para ese escenario sin
            descuidar la operación normal de la institución.
          </p>

          <p>
            En otras palabras, una buena gestión de cartera debería funcionar
            incluso cuando el pagador está en condiciones normales. Si aparecen
            señales de deterioro, lo que cambia es el nivel de seguimiento y la
            velocidad con la que deben tomarse decisiones.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué debería hacer una IPS hoy para reducir el riesgo frente a una
            EPS con problemas?
          </h2>

          <p>
            Lo primero es dejar de mirar la cartera únicamente como una cifra
            contable. Cada saldo pendiente debería tener un estado claro:
            pagado, pendiente, glosado, conciliado, en acuerdo de pago, en
            gestión de cobro o en proceso jurídico.
          </p>

          <p>
            A partir de allí, la institución puede identificar cuáles son las
            obligaciones que requieren atención inmediata y cuáles pueden seguir
            un proceso ordinario de recuperación.
          </p>

          <p>
            Si posteriormente la EPS entra en una liquidación, contar con esta
            información organizada facilita la preparación de las reclamaciones
            y permite reaccionar de acuerdo con las reglas particulares del
            proceso.
          </p>

          <p>
            En definitiva, la mejor preparación no comienza cuando se anuncia
            una liquidación. Comienza mucho antes, con una gestión de cartera
            ordenada, documentación completa, seguimiento financiero y
            decisiones jurídicas oportunas.
          </p>
        </section>

        {/* CTA FINAL */}
        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Acompaña a IPS, clínicas
            y hospitales en Colombia en la gestión y recuperación de cartera
            frente a EPS, mediante estrategias de cobro, análisis jurídico,
            conciliación y acciones legales cuando resultan procedentes.
          </p>

          <p>
            Si una EPS presenta retrasos, dificultades financieras o medidas
            especiales, evaluar la cartera con anticipación puede marcar una
            diferencia importante para la liquidez y la protección de los
            recursos de la institución.
          </p>
        </footer>
      </article>
    </main>
  );
}
