"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function ComoRecuperarCarteraEPS() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Recuperación de cartera en salud</span>

          <h1 className={styles.title}>
            Cómo recuperar cartera de EPS en Colombia: guía paso a paso para IPS
            y clínicas
          </h1>

          <p className={styles.subtitle}>
            Conozca qué hacer cuando una EPS tiene facturas pendientes de pago,
            cómo organizar la cartera, cuándo utilizar cobro prejurídico y en
            qué momento conviene evaluar una estrategia jurídica para recuperar
            los recursos.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}

      <article className={styles.article}>
        {/* ================= INTRODUCCIÓN ================= */}

        <section className={styles.section}>
          <h2>
            ¿Cómo recuperar cartera de EPS en Colombia cuando los pagos están
            atrasados?
          </h2>

          <p>
            Para una IPS, clínica o prestador de servicios de salud, tener
            facturas pendientes de pago durante meses no es solamente un
            problema contable. La cartera vencida termina afectando el flujo de
            caja, la capacidad de pagar proveedores, la operación diaria y, en
            algunos casos, la posibilidad de seguir creciendo.
          </p>

          <p>
            Por eso, recuperar cartera de EPS requiere mucho más que enviar
            recordatorios de pago. Es necesario saber exactamente cuánto se
            debe, qué facturas pueden cobrarse, cuáles presentan glosas o
            controversias, qué soportes existen y qué camino resulta más
            conveniente para cada grupo de obligaciones.
          </p>

          <p>
            Una estrategia bien organizada puede comenzar con una revisión
            administrativa y documental, continuar con una gestión de cobro
            prejurídico y, cuando sea necesario, avanzar hacia mecanismos
            jurídicos para exigir el pago de obligaciones que sean exigibles.
          </p>

          <p>
            En esta guía explicamos el proceso de manera práctica, pensando en
            las necesidades reales de IPS, clínicas y prestadores que manejan
            grandes volúmenes de cartera frente a EPS.
          </p>
        </section>

        {/* ================= PROBLEMA ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Por qué se acumula la cartera de las EPS y qué impacto tiene en las
            IPS?
          </h2>

          <p>
            La cartera del sector salud puede crecer por diferentes razones:
            facturas pendientes de pago, diferencias en auditorías, glosas,
            inconsistencias en los soportes, dificultades de conciliación,
            trámites administrativos o simplemente obligaciones que llevan
            demasiado tiempo sin una solución definitiva.
          </p>

          <p>
            El problema aparece cuando todas esas cuentas terminan agrupadas
            bajo una misma cifra de “cartera pendiente”, sin distinguir cuáles
            tienen una posibilidad inmediata de recuperación y cuáles requieren
            una gestión más especializada.
          </p>

          <p>
            Una IPS que no clasifica adecuadamente su cartera puede terminar
            dedicando tiempo y recursos a cuentas con problemas documentales,
            mientras deja en segundo plano obligaciones que sí podrían ser
            objeto de cobro efectivo.
          </p>

          <p>
            Además, cuanto más envejece una cuenta, más importante resulta
            revisar sus antecedentes, soportes, actuaciones realizadas y
            términos aplicables. Esperar indefinidamente a que una EPS pague
            puede aumentar los riesgos financieros y jurídicos para el
            prestador.
          </p>
        </section>

        {/* ================= DIAGNÓSTICO ================= */}

        <section className={styles.section}>
          <h2>
            Paso 1: diagnosticar y clasificar la cartera antes de iniciar el
            cobro
          </h2>

          <p>
            El primer paso para recuperar cartera de EPS no debería ser enviar
            una carta genérica de cobro. Antes de hacerlo conviene conocer
            realmente qué contiene la cartera.
          </p>

          <p>
            Una revisión inicial permite separar obligaciones según su
            antigüedad, valor, estado de radicación, existencia de glosas,
            soportes disponibles, respuestas de la EPS y nivel de riesgo.
          </p>

          <p>
            También es recomendable identificar las cuentas que necesitan
            conciliación o corrección documental antes de intentar un cobro
            formal.
          </p>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <span>1</span>

              <h3>Revisar la antigüedad de la cartera</h3>

              <p>
                Identificar cuánto tiempo lleva pendiente cada obligación y
                priorizar las cuentas que requieren atención inmediata.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>2</span>

              <h3>Validar facturas y soportes</h3>

              <p>
                Revisar facturas, contratos, autorizaciones, radicaciones,
                soportes de prestación y demás documentos relacionados.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>3</span>

              <h3>Separar glosas y controversias</h3>

              <p>
                No toda factura pendiente tiene el mismo problema. Es importante
                diferenciar una obligación vencida de una cuenta todavía
                discutida o pendiente de subsanar.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>4</span>

              <h3>Determinar la estrategia de cobro</h3>

              <p>
                Con la información consolidada puede definirse qué cuentas
                requieren gestión administrativa, negociación, conciliación o
                análisis jurídico.
              </p>
            </div>
          </div>
        </section>

        {/* ================= DOCUMENTOS ================= */}

        <section className={styles.section}>
          <h2>
            ¿Qué documentos necesita una IPS para recuperar cartera de una EPS?
          </h2>

          <p>
            La documentación es uno de los pilares de cualquier estrategia de
            recuperación. Una cuenta puede parecer clara en el sistema contable,
            pero si los soportes están incompletos, el proceso de cobro puede
            complicarse.
          </p>

          <p>
            Dependiendo del origen de la obligación y de las circunstancias de
            cada caso, conviene revisar, entre otros, los siguientes elementos:
          </p>

          <ul className={styles.checklist}>
            <li>
              Facturas y documentos equivalentes relacionados con el cobro.
            </li>

            <li>
              Soportes de radicación y constancias de recepción de las cuentas.
            </li>

            <li>
              Contratos, órdenes, acuerdos o documentos que permitan establecer
              el origen de la obligación.
            </li>

            <li>
              Autorizaciones y soportes relacionados con la prestación de los
              servicios.
            </li>

            <li>
              Respuestas, glosas, objeciones y comunicaciones emitidas por la
              EPS.
            </li>

            <li>
              Actas o documentos derivados de procesos de conciliación y
              depuración de cartera.
            </li>

            <li>
              Requerimientos de pago y demás actuaciones realizadas durante la
              gestión de cobro.
            </li>
          </ul>

          <p>
            El objetivo no es acumular documentos sin orden. Lo importante es
            construir una trazabilidad que permita entender qué se facturó,
            cuándo se presentó, qué respondió la EPS y qué actuaciones se han
            realizado desde entonces.
          </p>
        </section>

        {/* ================= COBRO PREJURÍDICO ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            Paso 2: iniciar un cobro prejurídico a la EPS con una estrategia
            estructurada
          </h2>

          <p>
            El cobro prejurídico es una etapa importante antes de acudir a un
            proceso judicial. Sin embargo, no debería reducirse a enviar una
            carta y esperar una respuesta.
          </p>

          <p>
            Una gestión prejurídica efectiva debe identificar las obligaciones,
            explicar su origen, establecer los valores reclamados y dejar
            evidencia de las actuaciones realizadas por la IPS.
          </p>

          <p>
            Dependiendo del caso, esta etapa puede incluir requerimientos
            formales, reuniones de cartera, conciliaciones, negociación de
            acuerdos de pago y seguimiento de los compromisos adquiridos.
          </p>

          <p>
            La ventaja de trabajar de esta manera es que permite detectar
            rápidamente qué cuentas tienen posibilidades reales de recuperación
            mediante negociación y cuáles requieren una evaluación jurídica más
            profunda.
          </p>
        </section>

        {/* ================= CARTA ================= */}

        <section className={styles.section}>
          <h2>¿Qué debe contener un requerimiento de cobro a una EPS?</h2>

          <p>
            Un requerimiento de pago debe ser claro, verificable y estar
            respaldado por la información de la cartera que se está reclamando.
            Una comunicación demasiado genérica puede perder fuerza porque no
            permite identificar con precisión qué obligaciones están siendo
            exigidas.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Asunto:</strong> Requerimiento de pago de cartera vencida
              – Servicios de salud
            </p>

            <p>
              Señores
              <br />
              [Nombre de la EPS]
              <br />
              Área responsable de cartera
            </p>

            <p>
              Por medio de la presente se solicita la revisión y pago de las
              obligaciones pendientes a favor de [nombre de la IPS], de acuerdo
              con la relación detallada de facturas y soportes anexos.
            </p>

            <p>
              La relación incluye número de factura, fecha, valor, estado de
              radicación y demás información necesaria para facilitar la
              identificación de las obligaciones objeto de reclamación.
            </p>

            <p>
              Se solicita informar el estado actual de las obligaciones y
              gestionar el pago de los valores que se encuentren pendientes, así
              como indicar las razones concretas de cualquier saldo que continúe
              en controversia.
            </p>

            <p>
              <strong>
                Nota: este ejemplo es únicamente una referencia de estructura.
                El contenido definitivo del requerimiento debe adaptarse a las
                circunstancias y documentos de cada cartera.
              </strong>
            </p>
          </div>
        </section>

        {/* ================= CONCILIACIÓN ================= */}

        <section className={styles.section}>
          <h2>
            Conciliación de cartera EPS: cuándo puede ayudar a recuperar el
            dinero
          </h2>

          <p>
            No todas las diferencias de cartera necesitan terminar en un proceso
            judicial. Cuando existen saldos pendientes de depuración,
            diferencias entre las partes o compromisos de pago incumplidos, la
            conciliación puede convertirse en una alternativa útil.
          </p>

          <p>
            Para que una conciliación realmente contribuya al recaudo, es
            importante llegar con la información organizada y con una posición
            clara frente a los valores que se consideran adeudados.
          </p>

          <p>
            También conviene dejar documentados los compromisos alcanzados, las
            fechas de pago, los valores acordados y las consecuencias previstas
            frente a un eventual incumplimiento.
          </p>
        </section>

        {/* ================= COBRO JURÍDICO ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            ¿Cuándo pasar del cobro prejurídico al cobro jurídico contra una
            EPS?
          </h2>

          <p>
            Una de las decisiones más importantes para una IPS es determinar
            cuándo dejar de insistir únicamente por la vía administrativa y
            empezar a evaluar acciones jurídicas.
          </p>

          <p>
            No existe una fecha universal que sirva para todos los casos. La
            decisión depende de factores como la antigüedad de la obligación,
            los soportes disponibles, el estado de las facturas, las respuestas
            de la EPS, los acuerdos incumplidos y las características jurídicas
            de cada obligación.
          </p>

          <ul className={styles.highlightList}>
            <li>
              La EPS mantiene obligaciones vencidas sin una solución concreta.
            </li>

            <li>
              Los requerimientos de pago no producen resultados efectivos.
            </li>

            <li>Existen acuerdos de pago que fueron incumplidos.</li>

            <li>
              La cartera continúa envejeciendo y requiere una actuación
              oportuna.
            </li>

            <li>
              La documentación disponible permite evaluar la exigibilidad de las
              obligaciones.
            </li>
          </ul>

          <p className={styles.statement}>
            La decisión de judicializar una cartera debe partir de un análisis
            individual de las obligaciones y no de una estrategia automática
            para todos los casos.
          </p>
        </section>

        {/* ================= PROCESO EJECUTIVO ================= */}

        <section className={styles.section}>
          <h2>
            Proceso ejecutivo para cobrar cartera de EPS: ¿en qué consiste?
          </h2>

          <p>
            Cuando existe una obligación que reúne las condiciones jurídicas
            necesarias para ser exigida ejecutivamente, puede evaluarse la
            posibilidad de acudir a un proceso ejecutivo.
          </p>

          <p>
            En términos generales, este tipo de proceso busca obtener
            judicialmente el cumplimiento de una obligación respaldada por un
            título que preste mérito ejecutivo, siempre que se cumplan los
            requisitos legales aplicables al caso concreto.
          </p>

          <p>
            Por eso, antes de presentar una demanda no basta con afirmar que
            existe una factura pendiente. Es necesario revisar cuidadosamente
            los documentos, la obligación, su exigibilidad, las actuaciones
            anteriores y la competencia de la autoridad que deba conocer el
            asunto.
          </p>

          <p>
            Una demanda bien preparada parte de una cartera previamente
            depurada. Esto permite reducir inconsistencias y evitar que el
            proceso se construya sobre información incompleta o difícil de
            demostrar.
          </p>
        </section>

        {/* ================= MEDIDAS ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            Medidas cautelares en procesos de recuperación de cartera contra EPS
          </h2>

          <p>
            En determinados procesos judiciales pueden existir mecanismos
            cautelares destinados a proteger el resultado práctico de la
            actuación judicial.
          </p>

          <p>
            Sin embargo, las medidas cautelares no deben presentarse como un
            embargo automático de los recursos de una EPS. Su procedencia
            depende del tipo de proceso, de las condiciones jurídicas del caso y
            de las reglas aplicables.
          </p>

          <p>
            Por esta razón, cuando una IPS evalúa judicializar una cartera,
            resulta conveniente analizar desde el inicio si existen medidas
            cautelares procedentes y cuál sería su finalidad dentro de la
            estrategia de recuperación.
          </p>

          <p>
            Esta revisión temprana permite tomar decisiones con mayor criterio y
            evitar que las medidas judiciales se planteen de manera aislada del
            resto del proceso de cobro.
          </p>
        </section>

        {/* ================= ERRORES ================= */}

        <section className={styles.section}>
          <h2>
            7 errores que pueden dificultar la recuperación de cartera de una
            EPS
          </h2>

          <ul className={styles.checklist}>
            <li>
              <strong>No clasificar la cartera:</strong> tratar todas las
              facturas como si tuvieran exactamente el mismo problema.
            </li>

            <li>
              <strong>Descuidar la documentación:</strong> no conservar una
              trazabilidad clara de radicaciones, respuestas y soportes.
            </li>

            <li>
              <strong>Dejar envejecer la cartera:</strong> esperar demasiado
              tiempo antes de evaluar alternativas de recuperación.
            </li>

            <li>
              <strong>No diferenciar glosas de obligaciones exigibles:</strong>{" "}
              mezclar cuentas controvertidas con saldos que requieren otro tipo
              de gestión.
            </li>

            <li>
              <strong>Enviar requerimientos genéricos:</strong> reclamar una
              suma global sin explicar adecuadamente qué obligaciones componen
              el saldo.
            </li>

            <li>
              <strong>No documentar las negociaciones:</strong> permitir que
              reuniones y compromisos queden sin trazabilidad.
            </li>

            <li>
              <strong>Judicializar sin depurar:</strong> iniciar acciones sin
              haber revisado previamente los documentos y la situación jurídica
              de la cartera.
            </li>
          </ul>
        </section>

        {/* ================= PRESCRIPCIÓN ================= */}

        <section className={styles.section}>
          <h2>
            ¿Por qué es importante revisar los términos de las obligaciones de
            cartera EPS?
          </h2>

          <p>
            Una cartera antigua no debe permanecer indefinidamente en los
            sistemas contables sin una revisión jurídica. El paso del tiempo
            puede generar riesgos relacionados con términos de prescripción,
            disponibilidad de soportes y capacidad para reconstruir los
            antecedentes de cada obligación.
          </p>

          <p>
            La revisión de términos debe hacerse de acuerdo con la naturaleza de
            cada obligación y las normas que resulten aplicables. No es
            recomendable asumir que todas las facturas tienen exactamente el
            mismo tratamiento jurídico.
          </p>

          <p>
            Por eso, una de las primeras tareas cuando se recibe una cartera
            vencida consiste en identificar las obligaciones que requieren
            atención prioritaria y establecer un calendario de seguimiento.
          </p>
        </section>

        {/* ================= MODELO ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            Una estrategia integral permite convertir cartera vencida en
            oportunidades reales de recuperación
          </h2>

          <p>
            Recuperar cartera de EPS no consiste simplemente en cobrar con mayor
            frecuencia. Se trata de tomar mejores decisiones sobre cada grupo de
            obligaciones.
          </p>

          <p>
            Una IPS puede empezar con un diagnóstico financiero y documental,
            continuar con una gestión prejurídica organizada, utilizar
            mecanismos de conciliación cuando sean convenientes y evaluar la vía
            judicial cuando existan fundamentos para hacerlo.
          </p>

          <ul className={styles.highlightList}>
            <li>Diagnóstico y segmentación de la cartera.</li>

            <li>Revisión de facturas y soportes.</li>

            <li>Identificación de glosas y controversias.</li>

            <li>Gestión de cobro prejurídico.</li>

            <li>Conciliación y negociación cuando resulte conveniente.</li>

            <li>Evaluación de acciones judiciales.</li>

            <li>Seguimiento permanente de la recuperación.</li>
          </ul>

          <p className={styles.statement}>
            PRAVICE no compra cartera. Su enfoque está orientado a la gestión y
            recuperación jurídica de obligaciones en Colombia.
          </p>
        </section>

        {/* ================= BOGOTÁ ================= */}

        <section className={styles.section}>
          <h2>
            Recuperación de cartera EPS en Bogotá y otras ciudades de Colombia
          </h2>

          <p>
            Las necesidades de recuperación de cartera pueden variar según el
            tamaño de la IPS, el volumen de facturación, las EPS involucradas y
            la antigüedad de las obligaciones.
          </p>

          <p>
            En Bogotá y en otras ciudades del país, una estrategia de recaudo
            debe adaptarse a la realidad financiera y documental de cada
            prestador. Una clínica con miles de facturas pendientes necesita una
            metodología diferente a la de una IPS con una cartera más pequeña y
            concentrada.
          </p>

          <p>
            Lo importante es contar con un sistema que permita identificar
            prioridades, documentar las actuaciones y decidir oportunamente
            cuándo una obligación requiere intervención jurídica.
          </p>
        </section>

        {/* ================= FAQ ================= */}

        <section className={styles.section}>
          <h2>Preguntas frecuentes sobre cómo recuperar cartera de EPS</h2>

          <details className={styles.faq}>
            <summary>
              ¿Cuál es el primer paso para recuperar cartera de una EPS?
            </summary>

            <p>
              El primer paso debería ser diagnosticar y depurar la cartera:
              identificar las obligaciones pendientes, revisar su antigüedad,
              validar soportes, separar glosas o controversias y determinar
              cuáles cuentas pueden ser objeto de una gestión de cobro.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Es necesario demandar a una EPS para recuperar una cartera
              vencida?
            </summary>

            <p>
              No necesariamente. Algunas obligaciones pueden recuperarse
              mediante gestión administrativa, cobro prejurídico, conciliación o
              acuerdos de pago. Cuando estas alternativas no producen
              resultados, puede ser necesario evaluar las acciones jurídicas
              disponibles.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Cuándo conviene iniciar un proceso ejecutivo contra una EPS?
            </summary>

            <p>
              Depende de las características de la obligación y de los
              documentos disponibles. Antes de iniciar un proceso ejecutivo debe
              verificarse, entre otros aspectos, que la obligación sea
              jurídicamente exigible y que los documentos aportados cumplan los
              requisitos correspondientes.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Las glosas impiden recuperar toda la cartera de una EPS?
            </summary>

            <p>
              No necesariamente. Una cartera puede contener obligaciones pagadas
              parcialmente, cuentas glosadas, saldos en discusión y obligaciones
              pendientes sin controversia. Por eso es importante clasificar cada
              grupo antes de definir la estrategia de cobro.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Se pueden solicitar medidas cautelares para recuperar cartera de
              EPS?
            </summary>

            <p>
              En determinados procesos y bajo las condiciones previstas por la
              legislación aplicable pueden existir medidas cautelares. Su
              procedencia debe analizarse individualmente y no supone que todos
              los procesos contra EPS permitan automáticamente embargar los
              mismos recursos.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>
              ¿Qué pasa si una IPS deja pasar demasiado tiempo antes de cobrar?
            </summary>

            <p>
              El paso del tiempo puede dificultar la recuperación porque pueden
              surgir problemas con documentos, trazabilidad, negociaciones
              pendientes o términos jurídicos aplicables. Por eso es
              recomendable revisar periódicamente la cartera y establecer
              prioridades de gestión.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>¿PRAVICE compra cartera de IPS o EPS?</summary>

            <p>
              No. PRAVICE no compra cartera. Su enfoque está relacionado con la
              gestión y recuperación de cartera mediante estrategias
              administrativas y jurídicas.
            </p>
          </details>
        </section>

        {/* ================= CIERRE ================= */}

        <section className={styles.section}>
          <h2>
            Recuperar cartera de EPS requiere actuar antes de que el problema
            crezca
          </h2>

          <p>
            Una cartera vencida no mejora simplemente porque pase el tiempo. Por
            el contrario, cuando no existe seguimiento, clasificación y una
            estrategia definida, las obligaciones pueden volverse cada vez más
            difíciles de gestionar.
          </p>

          <p>
            Para una IPS o clínica, el objetivo debe ser identificar qué se
            puede recuperar, por qué vía y en qué momento conviene escalar la
            gestión. Algunas cuentas requerirán negociación; otras,
            conciliación; y determinadas obligaciones podrán necesitar una
            evaluación jurídica para determinar la viabilidad de acciones
            judiciales.
          </p>

          <p>
            La clave está en no tratar toda la cartera de la misma manera.
            Clasificar, documentar, priorizar y actuar oportunamente permite
            construir una estrategia de recuperación mucho más sólida.
          </p>
        </section>
      </article>
    </main>
  );
}
