"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function EstrategiasRecaudoClinicasHospitales() {
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

          <span className={styles.badge}>
            Recaudo y recuperación de cartera en salud
          </span>

          <h1 className={styles.title}>
            Estrategias de recaudo para IPS: cómo reducir cartera vencida y
            mejorar el flujo de caja
          </h1>

          <p className={styles.subtitle}>
            Una guía práctica para clínicas, hospitales y prestadores de salud
            que necesitan controlar la cartera, mejorar el seguimiento a las
            cuentas pendientes y recuperar oportunamente los recursos adeudados
            por EPS.
          </p>
        </motion.div>
      </section>

      {/* ================= ARTICLE ================= */}

      <article className={styles.article}>
        {/* ================= INTRODUCCIÓN ================= */}

        <section className={styles.section}>
          <h2>
            ¿Por qué el recaudo de cartera es un reto para las IPS en Colombia?
          </h2>

          <p>
            Prestar un servicio de salud y lograr que ese servicio se convierta
            oportunamente en recursos disponibles son dos procesos relacionados,
            pero no necesariamente igual de sencillos. Para muchas IPS, clínicas
            y hospitales, una parte importante de las dificultades financieras
            aparece después de la atención al paciente: cuando llega el momento
            de facturar, radicar, responder observaciones, conciliar y
            finalmente obtener el pago.
          </p>

          <p>
            En ese recorrido pueden aparecer facturas pendientes, glosas,
            devoluciones, diferencias contractuales, inconsistencias
            documentales o simplemente retrasos en el reconocimiento de las
            obligaciones. Si estos casos no tienen un seguimiento organizado, la
            cartera comienza a crecer y una cuenta que inicialmente parecía
            recuperable puede terminar convirtiéndose en una obligación difícil
            de gestionar.
          </p>

          <p>
            Por eso, hablar de estrategias de recaudo no significa únicamente
            llamar a una EPS para preguntar cuándo va a pagar. Un proceso
            eficiente necesita información actualizada, responsables definidos,
            prioridades claras y una ruta de escalamiento que permita saber qué
            hacer cuando una cuenta no avanza.
          </p>
        </section>

        {/* ================= PROBLEMAS ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué está frenando el recaudo de cartera en clínicas y hospitales?
          </h2>

          <p>
            Antes de pensar en cobrar más rápido, conviene identificar por qué
            determinadas cuentas permanecen abiertas durante meses. En la
            práctica, los problemas suelen repetirse y muchas veces están
            relacionados entre sí.
          </p>

          <p>
            <strong>• Cartera sin segmentar:</strong> tratar de la misma manera
            una factura reciente y una obligación con varios meses de mora
            dificulta establecer prioridades.
          </p>

          <p>
            <strong>• Falta de seguimiento:</strong> cuando no existe una
            trazabilidad clara de llamadas, comunicaciones, compromisos y
            respuestas, se pierde tiempo y también capacidad de negociación.
          </p>

          <p>
            <strong>• Glosas y devoluciones pendientes:</strong> una cuenta
            objetada que no se responde oportunamente puede permanecer fuera del
            flujo normal de pago.
          </p>

          <p>
            <strong>• Información dispersa:</strong> si facturación, cartera,
            auditoría y el área jurídica trabajan con información diferente,
            resulta mucho más difícil establecer cuál es realmente el estado de
            una obligación.
          </p>

          <p>
            <strong>• Acuerdos de pago sin seguimiento:</strong> conseguir un
            compromiso no significa necesariamente haber recuperado la cartera.
            El acuerdo debe tener responsables, fechas y control de
            cumplimiento.
          </p>

          <p>
            <strong>• Escalamiento tardío:</strong> algunas cuentas permanecen
            demasiado tiempo en gestión administrativa, incluso cuando ya
            existen señales claras de que se necesita una estrategia de cobro
            más formal.
          </p>
        </section>

        {/* ================= ESTRATEGIA 1 ================= */}

        <section className={styles.section}>
          <h2>
            1. Clasificar la cartera para saber qué cuentas deben cobrarse
            primero
          </h2>

          <p>
            Una de las primeras decisiones para mejorar el recaudo consiste en
            dejar de mirar la cartera como una sola cifra. El valor total
            pendiente puede ser importante, pero por sí solo no explica dónde
            está el verdadero problema.
          </p>

          <p>
            Una IPS puede comenzar segmentando sus cuentas por antigüedad,
            valor, EPS responsable, estado de la factura, existencia de glosas,
            acuerdos de pago y nivel de riesgo. De esta manera, el equipo puede
            concentrar sus esfuerzos en las obligaciones que realmente requieren
            una intervención prioritaria.
          </p>

          <p>
            Por ejemplo, una cuenta de alto valor con mora prolongada y sin una
            respuesta clara de la entidad responsable debería tener un
            tratamiento diferente al de una factura reciente que apenas se
            encuentra dentro de su ciclo normal de pago.
          </p>

          <p>
            Esta clasificación también permite identificar tendencias. Si una
            EPS concentra una parte importante de la cartera vencida, la
            institución puede tomar decisiones específicas en lugar de aplicar
            la misma estrategia a todos los deudores.
          </p>
        </section>

        {/* ================= ESTRATEGIA 2 ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            2. Hacer seguimiento permanente a cada factura y obligación
            pendiente
          </h2>

          <p>
            Una cartera bien gestionada necesita trazabilidad. No basta con
            saber cuánto dinero está pendiente; también es necesario conocer qué
            se ha hecho para recuperarlo y cuál es el siguiente paso.
          </p>

          <p>
            El seguimiento puede incluir fechas de radicación, vencimientos,
            respuestas recibidas, glosas, devoluciones, conciliaciones,
            compromisos de pago y comunicaciones realizadas. Cuando esta
            información está organizada, es mucho más fácil detectar dónde se
            está deteniendo el proceso.
          </p>

          <p>
            También conviene establecer una frecuencia de revisión. Las cuentas
            de mayor riesgo pueden requerir seguimiento semanal, mientras que
            otras pueden manejarse con controles diferentes según su
            comportamiento y antigüedad.
          </p>

          <p>
            Lo importante es evitar que una factura quede simplemente
            “pendiente”. Una cuenta pendiente debe tener un estado, un
            responsable y una próxima acción.
          </p>
        </section>

        {/* ================= ESTRATEGIA 3 ================= */}

        <section className={styles.section}>
          <h2>
            3. Reducir glosas y devoluciones antes de que afecten el recaudo
          </h2>

          <p>
            Una estrategia de recaudo realmente efectiva empieza antes de que
            aparezca la mora. Cuando una cuenta llega al proceso de cobro con
            errores de facturación, soportes incompletos o inconsistencias
            frente a la prestación del servicio, recuperar esos recursos puede
            requerir mucho más tiempo.
          </p>

          <p>
            Por eso, las áreas de facturación, auditoría, cartera y las áreas
            asistenciales deberían trabajar con criterios coordinados. El
            objetivo es detectar inconsistencias antes de la radicación o,
            cuando ya existe una objeción, responderla dentro de los tiempos y
            con los soportes correspondientes.
          </p>

          <p>
            También es útil medir cuáles son las causas de glosa que más se
            repiten. Si una misma inconsistencia aparece constantemente, el
            problema probablemente no está en una factura concreta, sino en el
            proceso que la genera.
          </p>
        </section>

        {/* ================= ESTRATEGIA 4 ================= */}

        <section className={styles.sectionAlt}>
          <h2>4. Fortalecer las conciliaciones de cartera con las EPS</h2>

          <p>
            Las conciliaciones pueden convertirse en una herramienta importante
            para aclarar diferencias y establecer qué valores están realmente
            pendientes de pago.
          </p>

          <p>
            En una conciliación bien preparada, la IPS debe llegar con
            información organizada sobre facturas, pagos, glosas, devoluciones,
            notas, acuerdos anteriores y demás situaciones que puedan explicar
            las diferencias entre los registros de las partes.
          </p>

          <p>
            La preparación es clave. Una reunión de conciliación resulta mucho
            más productiva cuando el equipo conoce de antemano cuáles son las
            cuentas prioritarias, qué valores están en discusión y cuáles tienen
            condiciones suficientes para solicitar una definición.
          </p>

          <p>
            Además, todo compromiso alcanzado debería quedar documentado y
            posteriormente sometido a seguimiento. De lo contrario, una
            conciliación que parecía resolver el problema puede convertirse en
            una nueva cuenta pendiente meses después.
          </p>
        </section>

        {/* ================= HIGHLIGHT ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            Una cartera grande no siempre significa una cartera bien gestionada
          </h2>

          <p>
            El tamaño de la cartera puede llamar la atención, pero el verdadero
            reto está en conocer cuánto puede recuperarse, en qué plazo, qué
            cuentas presentan mayor riesgo y qué acciones deben ejecutarse para
            obtener el pago.
          </p>

          <p>
            Una IPS que conoce su cartera puede tomar decisiones con mayor
            rapidez. Puede identificar las cuentas que requieren gestión
            administrativa, las que necesitan conciliación y aquellas en las que
            conviene evaluar una estrategia de cobro más formal.
          </p>
        </section>

        {/* ================= ESTRATEGIA 5 ================= */}

        <section className={styles.section}>
          <h2>
            5. Implementar una estrategia de cobro prejurídico para la cartera
            vencida
          </h2>

          <p>
            No todas las cuentas que presentan mora necesitan llegar
            inmediatamente a un proceso judicial. En muchos casos existe una
            etapa previa en la que pueden realizarse requerimientos formales,
            revisar la documentación, buscar acuerdos y establecer compromisos
            concretos de pago.
          </p>

          <p>
            El cobro prejurídico permite organizar esa gestión de manera más
            estructurada. En lugar de depender exclusivamente de llamadas o
            mensajes informales, la institución puede documentar la obligación,
            establecer una comunicación formal y dejar constancia de las
            actuaciones realizadas.
          </p>

          <p>
            Esto también permite identificar rápidamente qué casos tienen una
            posibilidad razonable de solucionarse mediante negociación y cuáles
            continúan sin una respuesta efectiva.
          </p>

          <p>
            La oportunidad es importante. Esperar indefinidamente a que una
            cuenta sea pagada puede aumentar la antigüedad de la cartera y
            dificultar la recuperación posterior.
          </p>
        </section>

        {/* ================= ESTRATEGIA 6 ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            6. Saber cuándo una cuenta necesita escalarse a una gestión jurídica
          </h2>

          <p>
            Una estrategia de recaudo también debe establecer qué ocurre cuando
            las gestiones administrativas y prejurídicas no producen resultados.
          </p>

          <p>
            Algunos indicadores de alerta pueden ser el incumplimiento reiterado
            de compromisos, la ausencia de respuestas frente a requerimientos,
            una mora prolongada o la existencia de obligaciones cuya
            documentación ya ha sido revisada y se encuentra en condiciones de
            continuar su proceso de recuperación.
          </p>

          <p>
            En estos escenarios conviene realizar una evaluación jurídica
            individual de la cartera. No todas las obligaciones tienen las
            mismas características ni necesariamente admiten las mismas
            alternativas de recuperación.
          </p>

          <p>
            Cuando resulte jurídicamente procedente, pueden evaluarse acciones
            judiciales y otras medidas de protección del crédito. La decisión
            debe partir de la revisión de los documentos, la naturaleza de la
            obligación y las circunstancias particulares de cada caso.
          </p>
        </section>

        {/* ================= INDICADORES ================= */}

        <section className={styles.section}>
          <h2>
            Indicadores de recaudo que deberían revisar las IPS periódicamente
          </h2>

          <p>
            Lo que no se mide termina siendo difícil de mejorar. Por eso, una
            estrategia de recuperación de cartera debería apoyarse en
            indicadores que permitan conocer si las acciones implementadas
            realmente están produciendo resultados.
          </p>

          <p>
            <strong>• Cartera total y cartera vencida:</strong> permiten conocer
            el tamaño de la obligación pendiente y cuánto corresponde a cuentas
            fuera de los tiempos esperados.
          </p>

          <p>
            <strong>• Antigüedad de cartera:</strong> ayuda a identificar cómo
            se distribuyen las cuentas según el tiempo transcurrido.
          </p>

          <p>
            <strong>• Porcentaje de recuperación:</strong> permite comparar el
            valor recuperado frente al valor gestionado.
          </p>

          <p>
            <strong>• Valor glosado:</strong> ayuda a identificar cuánto dinero
            está siendo objeto de observaciones y cuáles son las causas más
            frecuentes.
          </p>

          <p>
            <strong>• Tiempo promedio de recuperación:</strong> permite
            identificar si los ciclos de recaudo están mejorando o empeorando.
          </p>

          <p>
            <strong>• Cartera por EPS:</strong> muestra dónde se concentra el
            riesgo y facilita la priorización de las gestiones.
          </p>

          <p>
            <strong>• Cumplimiento de acuerdos de pago:</strong> permite saber
            si los compromisos alcanzados realmente se están convirtiendo en
            recursos recuperados.
          </p>
        </section>

        {/* ================= FLUJO DE CAJA ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Cómo influye una buena gestión de cartera en el flujo de caja de
            una IPS?
          </h2>

          <p>
            El recaudo no es únicamente una función administrativa. Tiene una
            relación directa con la capacidad de la institución para cumplir sus
            obligaciones y mantener su operación.
          </p>

          <p>
            Cuando los recursos permanecen demasiado tiempo en cuentas por
            cobrar, la IPS puede enfrentar mayores necesidades de financiación,
            dificultades para atender compromisos con proveedores y menor
            capacidad para planificar inversiones.
          </p>

          <p>
            Por el contrario, una cartera controlada permite proyectar con mayor
            precisión los ingresos, identificar riesgos con anticipación y tomar
            decisiones financieras basadas en información real.
          </p>

          <p>
            Por eso, mejorar el recaudo no consiste solamente en “cobrar más”.
            También significa recuperar de manera más ordenada, predecible y
            oportuna.
          </p>
        </section>

        {/* ================= COORDINACIÓN ================= */}

        <section className={styles.section}>
          <h2>
            Facturación, cartera y área jurídica: por qué deben trabajar
            coordinadamente
          </h2>

          <p>
            Uno de los errores más comunes consiste en tratar la recuperación de
            cartera como responsabilidad exclusiva del área financiera. En
            realidad, el resultado depende de varias etapas que comienzan desde
            la prestación del servicio y continúan hasta el pago.
          </p>

          <p>
            Facturación debe generar cuentas consistentes. Auditoría debe
            identificar y corregir problemas. Cartera debe hacer seguimiento.
            Las áreas responsables de las conciliaciones deben aclarar
            diferencias y, cuando sea necesario, el equipo jurídico debe
            intervenir para definir la estrategia adecuada.
          </p>

          <p>
            Cuando estas áreas comparten información y trabajan sobre una misma
            trazabilidad, es más fácil detectar dónde se está perdiendo tiempo y
            qué cuentas necesitan atención inmediata.
          </p>
        </section>

        {/* ================= PLAN DE ACCIÓN ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            Un plan de recaudo efectivo necesita prioridades, responsables y
            seguimiento
          </h2>

          <p>
            Mejorar la cartera no requiere necesariamente empezar por cambiar
            todos los procesos de una institución. En muchos casos, el primer
            paso consiste en conocer con precisión el estado actual de las
            cuentas y organizar las acciones pendientes.
          </p>

          <p>
            A partir de esa información, la IPS puede establecer prioridades,
            asignar responsables, definir fechas de seguimiento y determinar
            cuándo una cuenta debe pasar de gestión administrativa a
            conciliación, cobro prejurídico o evaluación jurídica.
          </p>

          <p>
            La clave está en evitar que las cuentas permanezcan sin movimiento
            durante largos periodos. Cada obligación debería tener una ruta de
            recuperación acorde con su situación.
          </p>
        </section>

        {/* ================= CUÁNDO BUSCAR ACOMPAÑAMIENTO ================= */}

        <section className={styles.section}>
          <h2>
            ¿Cuándo conviene buscar acompañamiento especializado para recuperar
            cartera?
          </h2>

          <p>
            Una IPS puede gestionar internamente buena parte de sus procesos de
            cartera. Sin embargo, cuando existen obligaciones de alto valor,
            mora prolongada, múltiples controversias, acuerdos incumplidos o
            dificultades para obtener respuestas de la entidad responsable,
            puede ser conveniente contar con acompañamiento especializado.
          </p>

          <p>
            El análisis externo puede ayudar a identificar cuentas con
            posibilidades de recuperación, ordenar la documentación, definir
            prioridades y establecer una estrategia para los casos que requieren
            gestión jurídica.
          </p>

          <p>
            Lo importante es que el acompañamiento no sustituya el control
            interno de la institución. Por el contrario, debería integrarse con
            la información de facturación, auditoría, cartera y tesorería para
            construir una visión completa de cada obligación.
          </p>
        </section>

        {/* ================= CONCLUSIÓN ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            Conclusión: recuperar cartera requiere actuar antes de que la mora
            se convierta en un problema mayor
          </h2>

          <p>
            Las estrategias de recaudo para IPS, clínicas y hospitales deben ir
            mucho más allá del seguimiento ocasional a las facturas pendientes.
            Una gestión sólida combina clasificación de cartera, trazabilidad,
            control documental, respuesta a glosas, conciliaciones, cobro
            prejurídico y, cuando corresponda, evaluación de alternativas
            jurídicas.
          </p>

          <p>
            También es fundamental medir los resultados. Saber cuánto se
            recupera, cuánto tiempo tarda una cuenta en pagarse, dónde se
            concentra la mora y cuáles son las causas que generan más
            dificultades permite tomar mejores decisiones.
          </p>

          <p>
            En definitiva, una cartera saludable no se construye únicamente
            cuando llega el momento de cobrar. Se construye desde la correcta
            facturación, la documentación de cada servicio y el seguimiento
            constante de las obligaciones hasta obtener el pago.
          </p>
        </section>

        {/* ================= FOOTER ================= */}

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en procesos de recuperación de cartera, gestión de
            obligaciones frente a EPS, conciliaciones y estrategias jurídicas
            orientadas a fortalecer el recaudo de recursos del sector salud.
          </p>
        </footer>
      </article>
    </main>
  );
}
