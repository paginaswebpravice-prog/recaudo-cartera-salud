"use client";

import Link from "next/link";

import styles from "../Article.module.css";

export default function LeccionesLiquidacionesEPS() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Liquidación de EPS · Cartera · Gestión de riesgos
          </span>

          <h1 className={styles.title}>
            Liquidación de EPS en Colombia: 7 lecciones que toda IPS debería
            tener en cuenta
          </h1>

          <p className={styles.subtitle}>
            ¿Qué ocurre con la cartera de una IPS cuando una EPS entra en
            dificultades? Analizamos las principales lecciones que dejan estos
            procesos y las medidas que clínicas, hospitales e IPS pueden tomar
            para reducir su exposición financiera.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        <section className={styles.section}>
          <h2>¿Qué pasa con una IPS cuando una EPS entra en liquidación?</h2>

          <p>
            Para una IPS, una liquidación de EPS no es solamente una noticia
            administrativa. Puede convertirse en un problema financiero
            importante cuando existe una cartera considerable pendiente de pago.
          </p>

          <p>
            Facturas radicadas, cuentas en auditoría, glosas, acuerdos de pago,
            obligaciones reconocidas y valores todavía en discusión pueden
            terminar formando parte de una situación que exige mucha más
            organización documental y financiera por parte del prestador.
          </p>

          <p>
            Por eso, esperar a que una EPS sea liquidada para empezar a revisar
            la cartera suele ser una estrategia tardía. La verdadera preparación
            comienza mucho antes: identificando qué se debe, desde cuándo, cuál
            es el estado de cada cuenta y qué acciones pueden adelantarse para
            recuperar los recursos.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Primera lección: no hay que esperar a la liquidación para cobrar la
            cartera
          </h2>

          <p>
            Una de las enseñanzas más importantes es bastante sencilla: la
            cartera debe gestionarse mientras el pagador todavía está operando.
          </p>

          <p>
            Cuando una IPS deja acumular facturas durante meses, el problema
            deja de ser únicamente contable. Con el paso del tiempo aparecen
            dificultades para reconstruir soportes, identificar pagos parciales,
            responder glosas, conciliar saldos y determinar qué obligaciones
            siguen realmente pendientes.
          </p>

          <p>
            Una gestión de cartera constante permite detectar las cuentas
            problemáticas mucho antes de que exista una situación de
            intervención o liquidación.
          </p>

          <ul className={styles.checklist}>
            <li>Hacer seguimiento periódico a las facturas radicadas.</li>
            <li>Identificar oportunamente las cuentas vencidas.</li>
            <li>
              Separar cartera corriente de cartera de difícil recuperación.
            </li>
            <li>Dar seguimiento a glosas, devoluciones y objeciones.</li>
            <li>Documentar las gestiones realizadas frente al pagador.</li>
            <li>
              Escalar oportunamente los casos que requieren intervención
              jurídica.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Segunda lección: saber exactamente cuánto debe una EPS es
            indispensable
          </h2>

          <p>
            Cuando una entidad entra en una situación financiera complicada,
            decir simplemente “tenemos $X millones de cartera” puede no ser
            suficiente.
          </p>

          <p>
            La IPS necesita conocer con mayor detalle qué compone ese saldo. Una
            cartera bien organizada debería permitir identificar, como mínimo,
            las facturas, fechas de radicación, valores facturados, pagos
            recibidos, glosas, devoluciones, notas crédito, saldos pendientes y
            estado de cada obligación.
          </p>

          <p>
            Esta trazabilidad facilita la toma de decisiones y permite
            diferenciar una cartera que puede recuperarse mediante gestión
            administrativa de aquella que requiere conciliación, negociación o
            una estrategia jurídica.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>
                Una buena pregunta para cualquier área de cartera:
              </strong>
            </p>

            <p>
              Si mañana uno de nuestros principales pagadores dejara de operar,
              ¿podríamos identificar en pocos días exactamente cuánto nos debe,
              por qué concepto y en qué estado se encuentra cada cuenta?
            </p>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Tercera lección: la documentación puede marcar la diferencia</h2>

          <p>
            En situaciones de crisis, la documentación deja de ser un asunto
            secundario. Se convierte en una herramienta fundamental para
            acreditar las obligaciones pendientes.
          </p>

          <p>
            Una IPS debería conservar de manera organizada los documentos que
            permitan reconstruir la historia de cada cuenta: factura,
            radicación, soportes, respuestas, comunicaciones, conciliaciones,
            acuerdos de pago, pagos parciales y demás documentos relacionados.
          </p>

          <p>
            La Superintendencia Nacional de Salud señala que, dentro de los
            procesos de liquidación, las deudas reconocidas a las IPS hacen
            parte de la prelación de créditos aplicable y que la liquidación
            debe realizar la auditoría y revisión de las cuentas para su
            reconocimiento en lo pertinente.
          </p>

          <p>
            En la práctica, esto refuerza una idea importante: tener la
            información organizada antes de que aparezca una crisis facilita
            enormemente la gestión posterior.
          </p>

          <ul className={styles.checklist}>
            <li>Facturas y documentos equivalentes.</li>
            <li>Soportes de radicación.</li>
            <li>Soportes de prestación del servicio.</li>
            <li>Respuestas y comunicaciones con la EPS.</li>
            <li>Conciliaciones de cartera.</li>
            <li>Acuerdos de pago y reconocimientos de deuda.</li>
            <li>Comprobantes de pagos parciales.</li>
            <li>Documentación relacionada con glosas y devoluciones.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            Cuarta lección: no toda la cartera tiene el mismo nivel de riesgo
          </h2>

          <p>
            Una IPS puede tener millones de pesos registrados como cartera y,
            aun así, no conocer realmente dónde está su mayor riesgo.
          </p>

          <p>
            No es lo mismo una cuenta recientemente radicada que una obligación
            vencida durante varios meses, una cartera sometida a una
            conciliación o una cuenta que lleva tiempo sin una respuesta clara
            del pagador.
          </p>

          <p>
            Por eso resulta útil clasificar la cartera según variables como
            antigüedad, pagador, estado de auditoría, existencia de glosas,
            posibilidad de conciliación y nivel de recuperación esperado.
          </p>

          <ul className={styles.checklist}>
            <li>Cartera corriente.</li>
            <li>Cartera vencida.</li>
            <li>Cartera con más de 60 días.</li>
            <li>Cartera con más de 90 días.</li>
            <li>Cartera con más de 180 días.</li>
            <li>Cartera sometida a conciliación.</li>
            <li>Cartera con obligaciones reconocidas.</li>
            <li>Cartera que requiere análisis jurídico.</li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Quinta lección: depender demasiado de una sola EPS aumenta el riesgo
          </h2>

          <p>
            Una IPS puede tener excelentes indicadores operativos y aun así
            enfrentar dificultades si una proporción demasiado grande de sus
            ingresos depende de un único pagador.
          </p>

          <p>
            El problema aparece cuando ese pagador comienza a presentar
            retrasos, incumplimientos o dificultades financieras. En ese
            escenario, la concentración de cartera puede convertirse rápidamente
            en un problema de liquidez.
          </p>

          <p>
            Por eso es recomendable monitorear periódicamente qué porcentaje de
            la cartera total representa cada EPS o entidad responsable del pago.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Indicador útil:</strong>
            </p>

            <p>
              Participación de la EPS en la cartera total = cartera pendiente
              con la EPS ÷ cartera total de la IPS × 100.
            </p>
          </div>

          <p>
            El objetivo no es necesariamente eliminar la concentración, algo que
            puede ser difícil en determinados mercados, sino conocerla y
            gestionarla como un riesgo financiero.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Sexta lección: las señales de deterioro deben convertirse en alertas
          </h2>

          <p>
            Una crisis financiera rara vez aparece completamente de un día para
            otro. En muchos casos existen señales que pueden ser observadas con
            anticipación.
          </p>

          <p>
            Para una IPS, el reto consiste en no mirar cada señal de manera
            aislada. Lo importante es observar si varias empiezan a presentarse
            simultáneamente y si están afectando la recuperación de los
            recursos.
          </p>

          <ul className={styles.checklist}>
            <li>Incremento sostenido de los días de cartera.</li>
            <li>Retrasos cada vez mayores en los pagos.</li>
            <li>Incumplimiento repetido de acuerdos de pago.</li>
            <li>Aumento de cuentas pendientes de conciliación.</li>
            <li>Incremento de glosas o devoluciones.</li>
            <li>
              Dificultades recurrentes para obtener respuestas del pagador.
            </li>
            <li>Mayor concentración de cartera en una misma EPS.</li>
            <li>
              Noticias o decisiones oficiales relacionadas con medidas de
              vigilancia o intervención.
            </li>
          </ul>

          <p>
            Ninguna de estas señales significa por sí sola que una EPS vaya a
            ser liquidada. Sin embargo, sí puede justificar una revisión más
            rigurosa de la exposición financiera de la IPS.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Séptima lección: la recuperación de cartera debe combinar gestión
            financiera y estrategia jurídica
          </h2>

          <p>
            Una de las dificultades más frecuentes es tratar la cartera como un
            asunto exclusivamente contable. En realidad, cuando una cuenta
            permanece vencida durante un período prolongado, también puede
            convertirse en un asunto jurídico.
          </p>

          <p>
            La estrategia puede comenzar con gestión administrativa,
            conciliaciones y requerimientos de pago. Si el problema persiste,
            dependiendo de las características de la obligación y de los
            documentos disponibles, puede ser necesario evaluar otras
            alternativas de recuperación.
          </p>

          <p>
            La clave está en no esperar hasta que la situación sea crítica para
            comenzar a analizar las opciones disponibles.
          </p>

          <ul className={styles.checklist}>
            <li>Seguimiento administrativo de las obligaciones.</li>
            <li>Conciliación de saldos.</li>
            <li>Revisión de glosas y objeciones.</li>
            <li>Requerimientos de pago.</li>
            <li>Acuerdos de pago cuando resulten convenientes.</li>
            <li>Análisis jurídico de las obligaciones pendientes.</li>
            <li>
              Evaluación de mecanismos judiciales cuando exista viabilidad.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>
            ¿Qué debería hacer una IPS si una de sus principales EPS entra en
            liquidación?
          </h2>

          <p>
            Lo primero es evitar decisiones improvisadas. Una vez se conoce la
            situación del pagador, la IPS debería realizar un inventario
            detallado de todas las obligaciones relacionadas con esa entidad.
          </p>

          <p>
            No basta con revisar el saldo que aparece en el sistema contable.
            También es necesario contrastarlo con facturación, radicación,
            auditoría, pagos, glosas, conciliaciones y demás soportes.
          </p>

          <p>
            También es importante revisar las instrucciones, actos y
            procedimientos establecidos específicamente para el proceso de
            liquidación correspondiente, porque las actuaciones y plazos
            aplicables pueden depender del régimen y de las decisiones adoptadas
            dentro de cada proceso.
          </p>

          <ul className={styles.checklist}>
            <li>Identificar toda la cartera asociada a la EPS.</li>
            <li>Actualizar los saldos factura por factura.</li>
            <li>
              Separar obligaciones reconocidas de obligaciones pendientes de
              revisión.
            </li>
            <li>Revisar glosas y devoluciones todavía abiertas.</li>
            <li>Organizar los soportes de cada obligación.</li>
            <li>Verificar las comunicaciones oficiales del proceso.</li>
            <li>Identificar los procedimientos y plazos aplicables.</li>
            <li>
              Evaluar jurídicamente las obligaciones que presenten dificultades
              de reconocimiento o pago.
            </li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            ¿Las IPS tienen prioridad en el pago de acreencias durante la
            liquidación de una EPS?
          </h2>

          <p>
            Este punto requiere especial cuidado porque no significa que toda
            cartera de una IPS vaya a pagarse automáticamente ni que exista
            garantía de recuperación total.
          </p>

          <p>
            La Superintendencia Nacional de Salud informa que, en los procesos
            de liquidación de EPS e IPS, después de determinadas obligaciones
            relacionadas con los recursos del sistema y los mecanismos de
            redistribución de riesgo, existe una prelación que incluye las
            deudas laborales y posteriormente las deudas reconocidas a las IPS,
            entre otras categorías.
          </p>

          <p>
            Esto hace todavía más importante que la IPS tenga correctamente
            identificadas y soportadas sus acreencias y que conozca el
            procedimiento particular aplicable a la liquidación que la afecta.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            El error de esperar hasta la liquidación para organizar la cartera
          </h2>

          <p>
            Si una IPS empieza a revisar su cartera solamente cuando una EPS
            entra en liquidación, probablemente tendrá que reconstruir en poco
            tiempo información que debió estar organizada desde mucho antes.
          </p>

          <p>
            Eso puede significar revisar cientos o incluso miles de facturas,
            localizar soportes, identificar pagos parciales, cruzar información
            contable y responder inconsistencias mientras el proceso de
            liquidación ya está avanzando.
          </p>

          <p>
            La mejor defensa frente a ese escenario es una gestión de cartera
            permanente. No porque todas las EPS vayan a entrar en liquidación,
            sino porque una IPS financieramente organizada tiene mayor capacidad
            para reaccionar cuando aparece un problema.
          </p>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Cómo crear un sistema de alertas para proteger la cartera de una IPS
          </h2>

          <p>
            No hace falta esperar a una crisis para empezar a medir el riesgo.
            Una IPS puede construir un tablero sencillo que permita conocer
            periódicamente la situación de cada pagador.
          </p>

          <ul className={styles.checklist}>
            <li>Porcentaje de cartera concentrado en cada EPS.</li>
            <li>Edad promedio de la cartera.</li>
            <li>Valor de cartera con más de 60, 90 y 180 días.</li>
            <li>Porcentaje de cartera glosada.</li>
            <li>Valor de acuerdos de pago pendientes.</li>
            <li>Porcentaje de acuerdos incumplidos.</li>
            <li>Tiempo promedio de recuperación.</li>
            <li>Valor de cartera en conciliación.</li>
            <li>Valor de cartera en gestión jurídica.</li>
          </ul>

          <p>
            El objetivo de este tablero no es llenar a la administración de
            indicadores. Es conseguir que una señal de deterioro sea visible
            antes de que termine afectando de manera seria la liquidez.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            ¿Qué pueden hacer las IPS para reducir su exposición financiera?
          </h2>

          <p>
            No existe una fórmula que elimine por completo el riesgo asociado a
            los pagadores del sistema de salud. Sin embargo, sí existen
            prácticas que pueden reducir la exposición y mejorar la capacidad de
            respuesta.
          </p>

          <ul className={styles.checklist}>
            <li>Gestionar la cartera desde los primeros vencimientos.</li>
            <li>Evitar acumulaciones innecesarias de cuentas pendientes.</li>
            <li>Fortalecer los procesos de facturación y radicación.</li>
            <li>Reducir errores que generen glosas y devoluciones.</li>
            <li>
              Realizar conciliaciones periódicas con los principales pagadores.
            </li>
            <li>Monitorear la concentración de cartera.</li>
            <li>Crear alertas tempranas para pagadores de mayor riesgo.</li>
            <li>Preparar expedientes completos de las obligaciones.</li>
            <li>
              Evaluar oportunamente las alternativas jurídicas de recuperación.
            </li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>
            Una liquidación de EPS también deja una lección de gestión
            empresarial
          </h2>

          <p>
            Más allá del proceso jurídico o administrativo de una liquidación,
            existe una enseñanza que puede aplicarse a cualquier IPS: vender
            servicios y facturar no significa necesariamente tener liquidez.
          </p>

          <p>
            Los recursos solamente cumplen realmente su función financiera
            cuando existe una gestión efectiva para convertir las cuentas por
            cobrar en recaudo.
          </p>

          <p>
            Por eso, cartera, facturación, auditoría, tesorería y área jurídica
            deberían trabajar con información conectada. Cuando cada área maneja
            una versión diferente de la deuda, las decisiones se vuelven más
            lentas y aumenta el riesgo de perder oportunidades de recuperación.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Conclusión: la mejor estrategia frente a una liquidación es
            anticiparse
          </h2>

          <p>
            Las liquidaciones de EPS han mostrado a las IPS que la cartera no
            puede administrarse únicamente cuando existe una emergencia.
            Necesita seguimiento constante, documentación, indicadores y una
            estrategia clara de recuperación.
          </p>

          <p>
            Una IPS que conoce cuánto le deben, quién le debe, desde cuándo,
            cuál es el estado de cada obligación y qué acciones puede adelantar
            tiene una posición mucho más sólida frente a cualquier escenario de
            dificultad del pagador.
          </p>

          <p>
            La prevención tampoco significa asumir que una EPS necesariamente
            será liquidada. Significa estar preparada para escenarios de mora,
            intervención, incumplimiento de acuerdos o deterioro financiero sin
            permitir que toda la estabilidad de la institución dependa de una
            sola respuesta tardía.
          </p>

          <p>
            En definitiva, la principal lección es sencilla:{" "}
            <strong>
              la recuperación de cartera debe empezar antes de que aparezca la
              crisis
            </strong>
            .
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en la gestión y recuperación de cartera, conciliaciones,
            análisis jurídico de obligaciones y estrategias para fortalecer la
            protección financiera frente a riesgos de los pagadores.
          </p>
        </footer>
      </article>
    </main>
  );
}
