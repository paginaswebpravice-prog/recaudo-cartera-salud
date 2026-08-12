"use client";

import Link from "next/link";
import styles from "../Article.module.css";

export default function IndicadoresFinancierosIPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Gestión financiera para IPS, clínicas y hospitales
          </span>

          <h1 className={styles.title}>
            Indicadores financieros para IPS en Colombia: 10 KPIs que debes
            controlar
          </h1>

          <p className={styles.subtitle}>
            Liquidez, cartera, recaudo, glosas, flujo de caja y rentabilidad:
            conoce los indicadores que pueden ayudarte a detectar riesgos
            financieros antes de que terminen afectando la operación de una IPS,
            clínica u hospital.
          </p>
        </div>
      </section>

      {/* ARTÍCULO */}
      <article className={styles.article}>
        {/* INTRODUCCIÓN */}
        <section className={styles.section}>
          <h2>
            ¿Por qué una IPS necesita controlar sus indicadores financieros?
          </h2>

          <p>
            En una institución prestadora de servicios de salud, facturar más no
            siempre significa tener una mejor situación financiera. Una IPS
            puede mostrar un crecimiento importante en sus ingresos y, al mismo
            tiempo, tener dificultades para pagar nómina, proveedores, insumos
            médicos o compromisos financieros.
          </p>

          <p>
            Una de las razones es sencilla: entre la prestación del servicio, la
            facturación y el efectivo realmente recibido existe un recorrido que
            puede involucrar auditorías, glosas, devoluciones, conciliaciones y
            diferentes tiempos de pago.
          </p>

          <p>
            Por eso, la administración financiera de una IPS necesita mirar más
            allá de los ingresos mensuales. Los indicadores permiten convertir
            los datos de cartera, facturación, recaudo y gastos en señales que
            facilitan tomar decisiones antes de que un problema financiero se
            vuelva estructural.
          </p>

          <p>
            No todos los indicadores tienen la misma importancia para todas las
            instituciones. Una IPS con una cartera altamente concentrada en
            pocos pagadores tendrá riesgos diferentes a los de una institución
            con una estructura de ingresos más diversificada.
          </p>
        </section>

        {/* INDICADOR 1 */}
        <section className={styles.sectionAlt}>
          <h2>1. Liquidez corriente: ¿la IPS puede cubrir sus obligaciones?</h2>

          <p>
            La liquidez corriente permite conocer, de manera general, qué
            capacidad tiene la institución para atender sus obligaciones de
            corto plazo utilizando sus activos corrientes.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>Liquidez corriente = Activos corrientes / Pasivos corrientes</p>
          </div>

          <p>
            Un resultado superior a 1 significa que, desde una perspectiva
            contable, los activos corrientes superan los pasivos corrientes. Sin
            embargo, esto no significa automáticamente que la IPS tenga
            suficiente efectivo disponible.
          </p>

          <p>
            Ese punto es especialmente importante en el sector salud. Una parte
            considerable de los activos corrientes puede estar representada por
            cuentas por cobrar que todavía no han sido recaudadas. Por eso, la
            liquidez debe analizarse junto con los días de cartera, la
            antigüedad de las cuentas por cobrar y la velocidad real del
            recaudo.
          </p>
        </section>

        {/* INDICADOR 2 */}
        <section className={styles.section}>
          <h2>2. Rotación de cartera: medir qué tan rápido entra el dinero</h2>

          <p>
            La rotación de cartera ayuda a evaluar la velocidad con la que una
            IPS convierte sus cuentas por cobrar en recursos efectivamente
            recaudados.
          </p>

          <p>
            Este indicador resulta especialmente útil cuando la institución
            presta servicios a diferentes EPS, entidades territoriales,
            aseguradores u otros responsables de pago. No basta con saber cuánto
            dinero está pendiente: también hay que entender qué tan rápido se
            está recuperando.
          </p>

          <ul className={styles.checklist}>
            <li>Permite evaluar el comportamiento del recaudo.</li>
            <li>
              Ayuda a identificar incrementos en los tiempos de recuperación.
            </li>
            <li>
              Facilita la comparación entre diferentes periodos financieros.
            </li>
            <li>Sirve como apoyo para proyectar necesidades de caja.</li>
            <li>
              Permite detectar pagadores cuyo comportamiento está deteriorando
              la cartera.
            </li>
          </ul>

          <p>
            Una reducción sostenida en la velocidad de recuperación merece
            atención, especialmente si coincide con un crecimiento de la cartera
            vencida.
          </p>
        </section>

        {/* INDICADOR 3 */}
        <section className={styles.sectionAlt}>
          <h2>
            3. Días de cartera: ¿cuánto tarda una IPS en recuperar lo facturado?
          </h2>

          <p>
            Los días de cartera son uno de los indicadores más útiles para
            entender la presión financiera que generan las cuentas por cobrar.
            En términos sencillos, permiten aproximarse al tiempo promedio que
            tarda la institución en convertir su facturación a crédito en
            recursos recibidos.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula aproximada:</strong>
            </p>

            <p>
              Días de cartera = Cartera promedio / Facturación promedio diaria
            </p>
          </div>

          <p>
            Si los días de cartera aumentan de forma continua, la institución
            debería investigar qué está ocurriendo. El problema puede estar
            relacionado con tiempos de radicación, devoluciones, glosas,
            conciliaciones pendientes, dificultades del pagador o simplemente
            con una política de cobro que necesita ajustes.
          </p>

          <p>
            También es recomendable separar la cartera por edades. No tiene el
            mismo nivel de riesgo una cuenta recientemente facturada que una
            obligación que lleva varios meses pendiente de pago.
          </p>
        </section>

        {/* INDICADOR 4 */}
        <section className={styles.section}>
          <h2>
            4. Cartera por edades: identificar dónde está realmente el riesgo
          </h2>

          <p>
            Analizar la cartera únicamente mediante un valor total puede ocultar
            problemas importantes. Una IPS puede tener una cartera aparentemente
            controlada, pero una proporción considerable de ella podría
            encontrarse en edades avanzadas.
          </p>

          <p>
            Por eso conviene construir una clasificación por rangos de
            antigüedad que permita diferenciar las cuentas recientes de las
            obligaciones con mayor tiempo pendiente.
          </p>

          <ul className={styles.checklist}>
            <li>Cartera corriente o recientemente facturada.</li>
            <li>Cartera con más de 30 días.</li>
            <li>Cartera con más de 60 días.</li>
            <li>Cartera con más de 90 días.</li>
            <li>Cartera con más de 180 días.</li>
            <li>Cartera con antigüedad significativamente mayor.</li>
          </ul>

          <p>
            La clasificación debe adaptarse a las características de cada IPS,
            sus contratos y sus ciclos de facturación y pago. Lo importante es
            que permita identificar oportunamente qué parte de la cartera está
            envejeciendo y requiere una gestión diferente.
          </p>
        </section>

        {/* INDICADOR 5 */}
        <section className={styles.sectionAlt}>
          <h2>
            5. Porcentaje de glosas: medir cuánto dinero está siendo objetado
          </h2>

          <p>
            Las glosas pueden tener un impacto importante sobre el recaudo de
            una IPS. Por eso no basta con registrar cuánto se glosó en términos
            absolutos: también conviene relacionar ese valor con la facturación
            correspondiente.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula:</strong>
            </p>

            <p>
              Porcentaje de glosas = (Valor glosado / Valor facturado) × 100
            </p>
          </div>

          <p>
            Un incremento sostenido puede ser una señal de alerta. Sin embargo,
            el indicador por sí solo no explica la causa del problema. Para
            encontrarla es necesario revisar las razones de las glosas y
            clasificarlas.
          </p>

          <p>
            Por ejemplo, si una parte importante de las objeciones está
            relacionada con soportes incompletos, el problema probablemente
            requiere una intervención en los procesos internos de facturación y
            documentación.
          </p>

          <p>
            Si, por el contrario, existe una concentración de controversias
            relacionadas con aspectos clínicos, la respuesta puede requerir una
            participación más activa de auditoría médica y del equipo
            asistencial.
          </p>
        </section>

        {/* INDICADOR 6 */}
        <section className={styles.section}>
          <h2>
            6. Tasa de recaudo: saber cuánto de lo facturado realmente se
            recupera
          </h2>

          <p>
            Una IPS necesita diferenciar claramente entre facturación y recaudo.
            La primera representa los servicios que fueron facturados; el
            segundo muestra los recursos que efectivamente ingresaron.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula de referencia:</strong>
            </p>

            <p>
              Tasa de recaudo = (Valor recaudado / Valor objeto de recaudo) ×
              100
            </p>
          </div>

          <p>
            La forma exacta de calcular este indicador puede variar según la
            metodología financiera utilizada por cada institución. Lo importante
            es mantener una definición constante para que las comparaciones
            entre meses sean realmente útiles.
          </p>

          <p>
            Si la facturación aumenta, pero el recaudo no crece al mismo ritmo,
            puede existir una señal de deterioro en la conversión de ingresos
            contables en efectivo.
          </p>
        </section>

        {/* INDICADOR 7 */}
        <section className={styles.sectionAlt}>
          <h2>
            7. Concentración de cartera por EPS: detectar dependencia de pocos
            pagadores
          </h2>

          <p>
            Este indicador suele pasar desapercibido, pero puede ser decisivo
            para la gestión del riesgo financiero de una IPS.
          </p>

          <p>
            No es lo mismo tener una cartera distribuida entre numerosos
            pagadores que depender en gran medida de una sola EPS o de un grupo
            reducido de entidades. Cuando existe una concentración elevada,
            cualquier dificultad financiera o administrativa de ese pagador
            puede tener un efecto considerable sobre la caja de la institución.
          </p>

          <ul className={styles.checklist}>
            <li>Participación de cada EPS en la cartera total.</li>
            <li>Participación de cada EPS en la cartera vencida.</li>
            <li>Valor pendiente por pagador.</li>
            <li>Edad promedio de la cartera de cada EPS.</li>
            <li>Porcentaje de glosas por pagador.</li>
            <li>Comportamiento histórico del recaudo.</li>
          </ul>

          <p>
            Este análisis permite pasar de una gestión general de cartera a una
            gestión mucho más selectiva: no todas las cuentas pendientes
            requieren la misma estrategia ni representan el mismo nivel de
            riesgo.
          </p>
        </section>

        {/* INDICADOR 8 */}
        <section className={styles.section}>
          <h2>
            8. Margen operativo: comprobar si la operación realmente es
            sostenible
          </h2>

          <p>
            Una IPS puede tener buenos niveles de facturación y aun así
            presentar dificultades para generar resultados operativos
            suficientes. El margen operativo ayuda a observar cuánto queda de
            los ingresos después de cubrir los costos y gastos relacionados con
            la operación, de acuerdo con la metodología contable utilizada por
            la institución.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula general:</strong>
            </p>

            <p>
              Margen operativo = (Resultado operativo / Ingresos operacionales)
              × 100
            </p>
          </div>

          <p>
            Un margen reducido o negativo puede llevar a la administración a
            revisar tarifas, costos asistenciales, productividad, estructura
            administrativa, contratación y otros componentes del modelo de
            operación.
          </p>

          <p>
            Este indicador debe analizarse junto con la liquidez. Una IPS puede
            presentar un resultado operativo positivo y, aun así, experimentar
            problemas de caja si sus cuentas por cobrar crecen demasiado.
          </p>
        </section>

        {/* INDICADOR 9 */}
        <section className={styles.sectionAlt}>
          <h2>
            9. Nivel de endeudamiento: medir cuánto depende la IPS de terceros
          </h2>

          <p>
            El nivel de endeudamiento muestra qué proporción de los activos está
            respaldada por obligaciones con terceros. Es un indicador relevante
            para evaluar la estructura financiera y la capacidad de asumir
            nuevas obligaciones.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Fórmula de referencia:</strong>
            </p>

            <p>Nivel de endeudamiento = (Pasivo total / Activo total) × 100</p>
          </div>

          <p>
            Un nivel elevado no necesariamente significa que una institución
            esté en una situación financiera negativa. La interpretación depende
            de la estructura de financiación, capacidad de generación de
            recursos, condiciones de las obligaciones y comportamiento del flujo
            de caja.
          </p>

          <p>
            Lo importante es evitar analizar el indicador de manera aislada y
            observar su evolución a través del tiempo.
          </p>
        </section>

        {/* INDICADOR 10 */}
        <section className={styles.section}>
          <h2>10. EBITDA: analizar la capacidad de generación operativa</h2>

          <p>
            El EBITDA es un indicador utilizado para observar el desempeño
            operativo antes de intereses, impuestos, depreciaciones y
            amortizaciones. Puede resultar útil para comparar el desempeño
            operativo entre periodos y analizar la capacidad de generación
            relacionada con la operación.
          </p>

          <p>
            Sin embargo, no debe confundirse con el flujo de caja disponible.
            Una institución puede mostrar un EBITDA favorable y, al mismo
            tiempo, tener dificultades de efectivo por crecimiento de cartera,
            inversiones, obligaciones financieras u otros movimientos que no
            quedan reflejados de la misma manera en este indicador.
          </p>

          <p>
            Por eso, para una IPS resulta más útil observar el EBITDA como una
            pieza dentro de un tablero financiero más amplio y no como una
            medida única de salud financiera.
          </p>
        </section>

        {/* FLUJO DE CAJA */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué indicadores ayudan a controlar el flujo de caja de una IPS?
          </h2>

          <p>
            El flujo de caja merece una atención especial porque una institución
            puede tener ingresos reconocidos contablemente y, sin embargo, no
            disponer del efectivo necesario para cubrir sus obligaciones del día
            a día.
          </p>

          <p>
            Para anticipar este tipo de situaciones conviene observar de manera
            conjunta varios indicadores:
          </p>

          <ul className={styles.checklist}>
            <li>Saldo de efectivo disponible.</li>
            <li>Recaudo mensual real.</li>
            <li>Proyección de ingresos por cartera.</li>
            <li>Obligaciones de corto plazo.</li>
            <li>Edad de las cuentas por cobrar.</li>
            <li>Concentración de cartera por EPS.</li>
            <li>Valor de glosas pendientes de resolver.</li>
            <li>Compromisos financieros próximos.</li>
          </ul>

          <p>
            La ventaja de analizar estos datos en conjunto es que permite
            detectar problemas con mayor anticipación. Por ejemplo, un aumento
            de cartera acompañado de una reducción del recaudo y un incremento
            de obligaciones de corto plazo constituye una señal mucho más útil
            que cualquiera de esos indicadores analizado por separado.
          </p>
        </section>

        {/* INDICADORES ESPECÍFICOS */}
        <section className={styles.section}>
          <h2>Indicadores de cartera que una IPS debería revisar cada mes</h2>

          <p>
            Además de los indicadores financieros tradicionales, las áreas de
            cartera y facturación pueden construir un grupo de métricas
            específicas para el comportamiento de las cuentas por cobrar.
          </p>

          <ul className={styles.checklist}>
            <li>Valor total de cartera.</li>
            <li>Valor de cartera vencida.</li>
            <li>Participación de cartera mayor a 60 días.</li>
            <li>Participación de cartera mayor a 90 días.</li>
            <li>Participación de cartera mayor a 180 días.</li>
            <li>Valor total de glosas pendientes.</li>
            <li>Valor recuperado de glosas.</li>
            <li>Porcentaje de recaudo mensual.</li>
            <li>Tiempo promedio de recuperación.</li>
            <li>Valor conciliado durante el periodo.</li>
            <li>Valor recuperado mediante gestión jurídica.</li>
            <li>Concentración de cartera por EPS.</li>
          </ul>

          <p>
            La utilidad de este tablero está en que permite pasar de una
            fotografía general de la cartera a una visión mucho más detallada de
            dónde están los recursos pendientes y cuáles cuentas deberían
            recibir atención prioritaria.
          </p>
        </section>

        {/* TABLERO */}
        <section className={styles.sectionAlt}>
          <h2>Cómo construir un tablero financiero para una IPS</h2>

          <p>
            No es necesario empezar con un sistema extremadamente complejo. Un
            buen tablero financiero puede comenzar con información que la
            institución ya tiene en sus sistemas contables, de facturación y
            cartera.
          </p>

          <p>
            Lo importante es definir qué indicadores se van a medir, quién es
            responsable de actualizarlos, con qué frecuencia se revisarán y qué
            acciones deben tomarse cuando alguno de ellos se salga de los
            niveles definidos internamente.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>
                Un tablero básico puede dividirse en cuatro grupos:
              </strong>
            </p>

            <ul className={styles.checklist}>
              <li>
                <strong>Liquidez:</strong> efectivo, liquidez corriente y
                obligaciones de corto plazo.
              </li>

              <li>
                <strong>Cartera:</strong> saldo total, cartera vencida, días de
                cartera y concentración por EPS.
              </li>

              <li>
                <strong>Recaudo:</strong> ingresos efectivamente recibidos, tasa
                de recuperación y comportamiento mensual.
              </li>

              <li>
                <strong>Rentabilidad:</strong> margen operativo, EBITDA y
                evolución de costos.
              </li>
            </ul>
          </div>

          <p>
            La periodicidad también importa. Algunos indicadores pueden
            revisarse mensualmente, mientras que la cartera, el recaudo y el
            flujo de caja pueden requerir seguimiento mucho más frecuente
            dependiendo del tamaño y las características de la institución.
          </p>
        </section>

        {/* INTERPRETACIÓN */}
        <section className={styles.section}>
          <h2>
            Cómo interpretar los indicadores financieros y no quedarse solo con
            las cifras
          </h2>

          <p>
            Uno de los errores más comunes consiste en calcular indicadores sin
            convertir sus resultados en decisiones. Un KPI solamente es útil
            cuando permite identificar una situación y actuar sobre ella.
          </p>

          <p>
            Por ejemplo, si los días de cartera aumentan durante varios meses,
            la pregunta no debería ser únicamente cuánto aumentaron. También
            habría que revisar qué pagadores explican el incremento, qué edades
            concentran el crecimiento, si existen glosas pendientes y cuánto
            dinero se ha recaudado realmente durante el mismo periodo.
          </p>

          <p>
            De la misma manera, una reducción del porcentaje de glosas puede
            parecer positiva, pero debe contrastarse con la facturación, los
            valores reconocidos, las devoluciones y el recaudo efectivo.
          </p>

          <p>
            En otras palabras, los indicadores deben leerse como un sistema. La
            relación entre ellos suele entregar información más útil que una
            cifra aislada.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.sectionAlt}>
          <h2>
            Errores frecuentes al medir la situación financiera de una IPS
          </h2>

          <ul className={styles.checklist}>
            <li>
              Revisar únicamente la facturación y dejar en segundo plano el
              recaudo.
            </li>

            <li>
              Analizar la cartera como un valor total sin revisar su antigüedad.
            </li>

            <li>No separar la cartera por EPS o responsable de pago.</li>

            <li>Medir el valor de las glosas sin estudiar sus causas.</li>

            <li>
              Comparar indicadores calculados con metodologías diferentes.
            </li>

            <li>
              Revisar los resultados únicamente cuando aparece un problema de
              liquidez.
            </li>

            <li>
              Utilizar un único indicador como medida de la salud financiera
              institucional.
            </li>
          </ul>

          <p>
            Un sistema de indicadores funciona mejor cuando existe continuidad.
            La comparación entre meses, trimestres y periodos permite
            identificar tendencias que pueden pasar desapercibidas al observar
            solamente una fecha determinada.
          </p>
        </section>

        {/* CARTERA + FINANZAS */}
        <section className={styles.section}>
          <h2>
            Indicadores financieros y recuperación de cartera: dos áreas que
            deben trabajar juntas
          </h2>

          <p>
            En una IPS, las áreas financiera, contable, facturación, auditoría y
            cartera están estrechamente relacionadas. Una falla en cualquiera de
            estos puntos puede terminar reflejándose en el flujo de caja.
          </p>

          <p>
            Una cuenta que no se factura correctamente puede convertirse en una
            devolución. Una cuenta con soportes insuficientes puede terminar
            glosada. Una glosa que no se responde oportunamente puede retrasar
            el reconocimiento del recurso. Y una obligación reconocida que no se
            gestiona puede permanecer durante meses dentro de la cartera.
          </p>

          <p>
            Por eso, medir los indicadores financieros también permite detectar
            dónde está comenzando el problema y no únicamente dónde termina.
          </p>

          <p>
            Cuando una institución identifica deterioro en sus indicadores de
            cartera o recaudo, puede evaluar medidas como conciliaciones,
            requerimientos de pago, acuerdos, gestión prejurídica y, cuando
            corresponda, alternativas jurídicas para la recuperación de las
            obligaciones.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Cuáles son los indicadores financieros más importantes para una
            IPS?
          </h2>

          <p>
            No existe un único KPI capaz de explicar por sí solo la situación
            financiera de una institución de salud. La lectura más completa
            surge de combinar indicadores de liquidez, cartera, recaudo,
            rentabilidad y endeudamiento.
          </p>

          <p>
            Como punto de partida, una IPS puede construir un tablero que
            incluya liquidez corriente, días de cartera, cartera por edades,
            tasa de recaudo, porcentaje de glosas, concentración por EPS, margen
            operativo, nivel de endeudamiento y EBITDA.
          </p>

          <p>
            El objetivo no debería ser acumular decenas de indicadores, sino
            seleccionar aquellos que realmente permitan tomar decisiones. Un
            tablero sencillo, actualizado y utilizado por la administración
            puede ser mucho más útil que un informe financiero lleno de cifras
            que nadie revisa.
          </p>

          <p>
            En el sector salud, donde el comportamiento de la cartera puede
            tener un efecto directo sobre la operación, anticiparse a los
            problemas financieros puede marcar una diferencia importante.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en la gestión y recuperación de cartera, conciliaciones,
            análisis de obligaciones pendientes, respuesta a glosas y
            estrategias jurídicas orientadas a proteger el flujo de recursos de
            las instituciones de salud.
          </p>
        </footer>
      </article>
    </main>
  );
}
