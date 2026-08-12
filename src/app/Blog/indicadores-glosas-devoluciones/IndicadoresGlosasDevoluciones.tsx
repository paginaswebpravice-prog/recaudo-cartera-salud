"use client";

import Link from "next/link";

import styles from "../Article.module.css";

export default function IndicadoresGlosasDevoluciones() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Gestión de glosas, devoluciones y cartera
          </span>

          <h1 className={styles.title}>
            Indicadores de glosas y devoluciones en IPS: 12 KPIs para mejorar el
            recaudo
          </h1>

          <p className={styles.subtitle}>
            Una guía práctica para saber qué medir, cómo interpretar los
            resultados y qué decisiones puede tomar una IPS para reducir errores
            de facturación, controlar las glosas y recuperar más recursos frente
            a EPS y demás pagadores.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Por qué una IPS debería medir sus glosas y devoluciones?</h2>

          <p>
            Una glosa no debería aparecer en los informes de la IPS solamente
            como un valor pendiente de recuperar. Detrás de ese número puede
            existir un problema de autorización, facturación, documentación,
            soporte clínico, contratación o incluso una falla que se está
            repitiendo mes tras mes.
          </p>

          <p>
            Lo mismo ocurre con las devoluciones. Una cuenta que regresa por
            inconsistencias antes de avanzar en el proceso de auditoría puede
            parecer un inconveniente menor, pero cuando el mismo error se
            presenta cientos de veces termina afectando los tiempos de
            radicación, el recaudo y la disponibilidad de recursos.
          </p>

          <p>
            Por eso, medir glosas y devoluciones no consiste únicamente en saber
            cuánto dinero fue objetado. La verdadera utilidad está en
            identificar{" "}
            <strong>
              por qué ocurre, dónde se origina, cuánto tarda en solucionarse y
              cuánto dinero termina recuperándose
            </strong>
            .
          </p>

          <p>
            Una IPS que conoce estos datos puede pasar de reaccionar ante las
            objeciones a trabajar de manera preventiva sobre las causas que las
            generan.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Antes de medir: no es lo mismo una glosa, una devolución y una
            cartera pendiente
          </h2>

          <p>
            Aunque los tres conceptos están relacionados, conviene mantenerlos
            separados al momento de construir indicadores. Mezclarlos puede
            terminar generando análisis equivocados.
          </p>

          <ul className={styles.checklist}>
            <li>
              <strong>Devolución:</strong> corresponde a una cuenta que presenta
              una inconsistencia que impide continuar normalmente con su
              trámite.
            </li>

            <li>
              <strong>Glosa:</strong> es una objeción formulada sobre el valor
              facturado o sobre parte de los servicios cobrados.
            </li>

            <li>
              <strong>Cartera pendiente:</strong> representa los valores que aún
              no han sido recaudados, independientemente de que estén o no
              relacionados con una glosa.
            </li>
          </ul>

          <p>
            Esta diferenciación es importante porque cada situación requiere
            acciones distintas. No se gestiona de la misma manera una factura
            devuelta por un error documental que una glosa relacionada con
            pertinencia clínica o una cuenta que simplemente permanece vencida.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI 1: porcentaje de glosas sobre la facturación radicada</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>(Valor glosado ÷ Valor total facturado o radicado) × 100</p>
          </div>

          <p>
            Este indicador permite conocer qué proporción del valor facturado
            está siendo objetada por los pagadores.
          </p>

          <p>
            Más que mirar un porcentaje aislado, conviene compararlo por
            períodos, por EPS, por servicio y por causa de glosa. Una cifra que
            aumenta de forma sostenida puede ser una señal de que existe un
            problema en algún punto del ciclo de atención y facturación.
          </p>

          <p>
            Por ejemplo, si después de implementar un nuevo proceso de
            facturación el porcentaje de glosas aumenta, la IPS debería revisar
            qué cambió y en qué tipo de cuentas se concentra el incremento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI 2: porcentaje de devoluciones sobre las cuentas radicadas</h2>

          <p>
            Las devoluciones merecen un indicador independiente porque se
            presentan antes de que la cuenta avance normalmente dentro del
            proceso de reconocimiento y auditoría.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>
              (Número de cuentas devueltas ÷ Número total de cuentas radicadas)
              × 100
            </p>
          </div>

          <p>
            Una tasa elevada puede revelar problemas en la preparación de las
            cuentas, documentación, datos del usuario, requisitos de radicación,
            soportes o validaciones previas.
          </p>

          <ul className={styles.checklist}>
            <li>Ayuda a detectar errores antes de la auditoría.</li>
            <li>Permite identificar fallas repetitivas en la radicación.</li>
            <li>Facilita la capacitación de los equipos responsables.</li>
            <li>Contribuye a disminuir reprocesos y retrasos en el recaudo.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI 3: porcentaje de glosas recuperadas</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>
              (Valor de glosas recuperadas ÷ Valor total de glosas gestionadas)
              × 100
            </p>
          </div>

          <p>
            Este es uno de los indicadores que mejor permite conectar la gestión
            de glosas con el resultado financiero.
          </p>

          <p>
            No basta con responder muchas glosas. También es necesario saber
            cuánto valor económico se consigue recuperar después de las
            respuestas, auditorías, conciliaciones y demás actuaciones
            realizadas por la IPS.
          </p>

          <p>
            Una IPS puede utilizar este indicador para comparar resultados por
            equipo, período, EPS, servicio o tipo de glosa y detectar dónde
            están funcionando mejor sus estrategias de recuperación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI 4: porcentaje de glosas levantadas o aceptadas</h2>

          <p>
            No todas las glosas terminan de la misma manera. Algunas son
            aceptadas por la IPS, otras son controvertidas y finalmente
            levantadas, y otras pueden mantenerse después del proceso de
            revisión.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula orientativa:</strong>
            </p>

            <p>
              (Valor de glosas levantadas o aceptadas a favor de la IPS ÷ Valor
              total de glosas respondidas) × 100
            </p>
          </div>

          <p>
            Este dato permite evaluar la calidad de las respuestas y, sobre
            todo, detectar si el problema está en la capacidad de respuesta o en
            el origen mismo de la facturación.
          </p>

          <p>
            Si una IPS responde muchas glosas pero recupera poco valor, conviene
            revisar el contenido de las respuestas, los soportes aportados, la
            oportunidad de la gestión y las causas que están generando las
            objeciones.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI 5: tiempo promedio de respuesta a las glosas</h2>

          <p>
            El tiempo también es dinero cuando se habla de cartera. Una glosa
            que permanece sin gestionar durante demasiado tiempo puede retrasar
            la recuperación de recursos y complicar el seguimiento posterior.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>
              Sumatoria de días utilizados para responder ÷ Número de glosas
              respondidas
            </p>
          </div>

          <p>
            Lo recomendable es analizar este indicador junto con los tiempos
            internos de asignación, revisión, elaboración de la respuesta y
            envío al pagador.
          </p>

          <p>
            De esta manera es posible detectar en qué etapa se está acumulando
            el trabajo y no limitar el análisis únicamente al tiempo total.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI 6: valor recuperado por gestión de glosas</h2>

          <p>
            Este indicador lleva el análisis directamente al resultado
            económico. Permite saber cuánto dinero vuelve a estar disponible
            después de la gestión realizada sobre las cuentas objetadas.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Medición:</strong>
            </p>

            <p>
              Valor recuperado por respuestas, conciliaciones y demás gestiones
              realizadas sobre glosas.
            </p>
          </div>

          <p>
            Conviene analizar el valor recuperado tanto en términos absolutos
            como frente al valor inicialmente objetado. De esa manera la
            dirección financiera puede saber si el esfuerzo operativo destinado
            a la gestión de glosas está produciendo resultados suficientes.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI 7: principales causas de glosas y devoluciones</h2>

          <p>
            Saber que una IPS tiene muchas glosas no explica por sí solo qué
            está fallando. Para encontrar el problema es necesario clasificar
            las objeciones por causa.
          </p>

          <ul className={styles.checklist}>
            <li>Glosas administrativas.</li>
            <li>Glosas relacionadas con pertinencia clínica.</li>
            <li>Problemas de autorización.</li>
            <li>Inconsistencias en facturación.</li>
            <li>Documentación o soportes incompletos.</li>
            <li>Diferencias entre factura y atención realizada.</li>
            <li>Problemas relacionados con contratación.</li>
            <li>Inconsistencias en la información del usuario.</li>
          </ul>

          <p>
            La utilidad de este KPI está en encontrar patrones. Si una causa
            representa una parte importante de las objeciones, probablemente
            vale más la pena corregir el proceso que responder individualmente
            cada caso una y otra vez.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI 8: porcentaje de glosas recurrentes</h2>

          <p>
            Una glosa recurrente aparece cuando la misma causa se repite de
            manera constante durante diferentes períodos.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Ejemplos:</strong>
            </p>

            <ul className={styles.checklist}>
              <li>El mismo error de autorización.</li>
              <li>El mismo documento faltante.</li>
              <li>La misma inconsistencia de facturación.</li>
              <li>El mismo problema de soporte clínico.</li>
            </ul>
          </div>

          <p>
            Este indicador es especialmente útil para separar los errores
            puntuales de los problemas estructurales. Si una causa aparece
            repetidamente, la solución debería buscarse en el proceso que la
            origina y no solamente en el área encargada de responder la glosa.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI 9: cartera asociada a glosas pendientes</h2>

          <p>
            No todas las glosas tienen el mismo impacto financiero. Una IPS
            puede tener muchas objeciones de bajo valor y, al mismo tiempo,
            pocas glosas que concentren una cantidad importante de recursos.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Indicador:</strong>
            </p>

            <p>
              Valor total pendiente de recuperación relacionado con glosas no
              resueltas.
            </p>
          </div>

          <p>
            Este indicador permite priorizar la gestión. Las cuentas con mayor
            valor, mayor antigüedad o mayor riesgo de pérdida pueden requerir
            una atención diferente a las objeciones pequeñas y recientes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI 10: antigüedad de las glosas pendientes</h2>

          <p>
            El valor de una glosa es importante, pero también lo es saber cuánto
            tiempo lleva pendiente.
          </p>

          <p>
            Para este análisis puede resultar útil construir rangos internos de
            antigüedad y revisar cuánto dinero se encuentra en cada grupo.
          </p>

          <ul className={styles.checklist}>
            <li>Glosas recientes.</li>
            <li>Glosas en seguimiento.</li>
            <li>Glosas con gestión pendiente.</li>
            <li>Glosas de mayor antigüedad.</li>
            <li>Glosas en conciliación o discusión.</li>
          </ul>

          <p>
            La antigüedad ayuda a detectar acumulaciones y a establecer
            prioridades de trabajo. Una cartera glosada que envejece sin una
            estrategia clara de gestión merece especial atención.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>KPI 11: tiempo promedio de recuperación de una glosa</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>
              Sumatoria de días desde la glosa hasta su recuperación ÷ Número de
              glosas recuperadas
            </p>
          </div>

          <p>
            Este indicador permite observar cuánto tarda realmente la IPS en
            convertir una cuenta objetada en un recurso recuperado.
          </p>

          <p>
            Es particularmente útil porque una buena tasa de recuperación no
            necesariamente significa que el proceso sea eficiente si el dinero
            tarda demasiado tiempo en regresar a la institución.
          </p>
        </section>

        <section className={styles.section}>
          <h2>KPI 12: concentración de glosas por EPS o pagador</h2>

          <p>
            Una IPS también debería saber con qué pagadores se concentra el
            mayor valor de glosas y devoluciones.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Ejemplo de análisis:</strong>
            </p>

            <p>
              Valor de glosas de un pagador ÷ Valor total de glosas de la IPS ×
              100
            </p>
          </div>

          <p>
            Este análisis permite identificar si una parte significativa del
            problema está concentrada en uno o varios pagadores. También ayuda a
            orientar reuniones de conciliación, revisiones contractuales y
            estrategias específicas de seguimiento de cartera.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué indicadores debería revisar primero una IPS con problemas de
            cartera?
          </h2>

          <p>
            No todas las instituciones necesitan empezar con un tablero enorme.
            Si la IPS está intentando ordenar por primera vez su gestión de
            glosas, puede comenzar con un grupo reducido de indicadores que
            permitan entender dónde está el problema.
          </p>

          <ul className={styles.checklist}>
            <li>Valor total de glosas pendientes.</li>
            <li>Porcentaje de glosas sobre facturación.</li>
            <li>Principales causas de glosa.</li>
            <li>Antigüedad de las glosas.</li>
            <li>Valor recuperado.</li>
            <li>Porcentaje de recuperación.</li>
            <li>Tiempo promedio de respuesta.</li>
            <li>Concentración de cartera por EPS.</li>
          </ul>

          <p>
            Con esta información ya es posible construir una primera fotografía
            bastante útil de la situación. Después pueden incorporarse
            indicadores más específicos según el tamaño de la institución, los
            servicios prestados y la forma en que se encuentra organizada la
            gestión de cartera.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Cómo convertir los indicadores de glosas en decisiones concretas
          </h2>

          <p>
            El verdadero valor de un KPI aparece cuando alguien toma una
            decisión a partir de él. De poco sirve saber que el porcentaje de
            glosas aumentó si el dato no conduce a una acción concreta.
          </p>

          <ul className={styles.checklist}>
            <li>
              Si aumentan las devoluciones, revisar el proceso de radicación.
            </li>

            <li>
              Si aumenta una causa específica de glosa, investigar el área donde
              se origina.
            </li>

            <li>
              Si aumenta la antigüedad, priorizar las cuentas más antiguas y de
              mayor valor.
            </li>

            <li>
              Si disminuye la recuperación, revisar la calidad y oportunidad de
              las respuestas.
            </li>

            <li>
              Si una EPS concentra una parte importante de la cartera, realizar
              seguimiento específico sobre ese pagador.
            </li>

            <li>
              Si los mismos errores aparecen repetidamente, implementar acciones
              preventivas y no solamente correctivas.
            </li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            ¿Cómo construir un tablero de glosas y devoluciones para una IPS?
          </h2>

          <p>
            Un tablero útil no necesita convertirse en una colección
            interminable de números. Lo importante es que permita responder
            rápidamente preguntas como: ¿cuánto dinero está pendiente?, ¿qué EPS
            concentra el problema?, ¿qué causas se repiten?, ¿qué tan antigua es
            la cartera? y ¿cuánto estamos recuperando?
          </p>

          <p>Una estructura práctica puede dividirse en cuatro grupos:</p>

          <ul className={styles.checklist}>
            <li>
              <strong>Volumen:</strong> cantidad de cuentas, glosas y
              devoluciones.
            </li>

            <li>
              <strong>Valor:</strong> dinero facturado, glosado, devuelto y
              recuperado.
            </li>

            <li>
              <strong>Tiempo:</strong> días de respuesta, conciliación y
              recuperación.
            </li>

            <li>
              <strong>Resultado:</strong> porcentaje de recuperación,
              aceptación, recurrencia y cartera pendiente.
            </li>
          </ul>

          <p>
            Esta estructura permite que las áreas financiera, de facturación,
            auditoría y cartera trabajen sobre una misma información y no sobre
            reportes aislados.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Indicadores de glosas y recuperación de cartera: dos temas que deben
            analizarse juntos
          </h2>

          <p>
            Una glosa no termina cuando se envía una respuesta. Desde el punto
            de vista financiero, el proceso realmente termina cuando se define
            qué ocurrió con el valor objetado y, cuando corresponde, se logra su
            recuperación.
          </p>

          <p>
            Por eso, los indicadores de glosas deberían estar conectados con los
            indicadores de cartera. La dirección de una IPS necesita saber no
            solamente cuánto se está objetando, sino también cuánto se está
            recuperando y cuánto tiempo está tomando ese proceso.
          </p>

          <p>
            Esta visión permite detectar con mayor rapidez los puntos donde se
            está perdiendo eficiencia y establecer prioridades de gestión
            basadas en el impacto económico real.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué hacer cuando las glosas se convierten en un problema de
            cartera?
          </h2>

          <p>
            Cuando una parte importante de los recursos permanece pendiente por
            glosas, la gestión debería ir más allá del seguimiento básico de
            facturas.
          </p>

          <p>
            Dependiendo de cada caso, puede ser necesario fortalecer la
            respuesta técnica, revisar los soportes, realizar procesos de
            conciliación, documentar adecuadamente las obligaciones pendientes y
            evaluar las alternativas jurídicas disponibles para la recuperación
            de los recursos.
          </p>

          <p>
            El objetivo no debería ser simplemente reducir el número de glosas,
            sino conseguir que el proceso completo —desde la facturación hasta
            el recaudo— sea más predecible y eficiente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Beneficios de medir de forma permanente las glosas y devoluciones
          </h2>

          <ul className={styles.checklist}>
            <li>Identificar errores repetitivos de facturación.</li>
            <li>Reducir devoluciones y reprocesos.</li>
            <li>Detectar causas recurrentes de glosas.</li>
            <li>Priorizar las cuentas de mayor impacto económico.</li>
            <li>Mejorar los tiempos de respuesta.</li>
            <li>Medir la efectividad de la recuperación.</li>
            <li>Fortalecer la gestión de cartera.</li>
            <li>Obtener una visión más clara del riesgo por pagador.</li>
            <li>Mejorar la planeación del flujo de caja.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Medir es el primer paso; gestionar los resultados es lo que mejora
            el recaudo
          </h2>

          <p>
            Tener un tablero lleno de indicadores no garantiza por sí mismo una
            mejor situación financiera. La información se vuelve realmente útil
            cuando permite encontrar causas, establecer responsables, definir
            prioridades y hacer seguimiento a los resultados.
          </p>

          <p>
            En una IPS, las glosas y devoluciones pueden involucrar diferentes
            áreas: admisiones, facturación, auditoría, personal asistencial,
            contratación, cartera y dirección financiera. Por eso, el análisis
            debe ser transversal y orientado a resolver el problema desde su
            origen.
          </p>

          <p>
            Una gestión constante de estos indicadores permite conocer dónde se
            están generando las pérdidas, qué recursos pueden recuperarse y
            cuáles procesos necesitan ajustes para evitar que el mismo problema
            vuelva a aparecer.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en procesos de recuperación de cartera, gestión de glosas,
            conciliaciones, auditoría de cuentas médicas y estrategias jurídicas
            orientadas a la recuperación de recursos frente a EPS y demás
            pagadores.
          </p>
        </footer>
      </article>
    </main>
  );
}
