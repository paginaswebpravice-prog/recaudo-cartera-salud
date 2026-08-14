"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function PrescripcionCarteraSalud() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Prescripción y recuperación de cartera EPS
          </span>

          <h1 className={styles.title}>
            Prescripción de cartera EPS: cómo evitar perder el derecho de cobro
          </h1>

          <p className={styles.subtitle}>
            Guía práctica para IPS, clínicas y prestadores que necesitan
            controlar los términos de sus cuentas por cobrar, organizar sus
            soportes y actuar oportunamente frente a cartera vencida en
            Colombia.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRODUCCIÓN */}
        <section className={styles.section}>
          <h2>¿Qué significa que una cartera de una IPS pueda prescribir?</h2>

          <p>
            Cuando una IPS tiene facturas pendientes de pago por parte de una
            EPS, no basta con registrar la deuda en el sistema contable y
            esperar a que algún día sea pagada. Las obligaciones tienen términos
            jurídicos que deben controlarse y, dependiendo de la naturaleza de
            la obligación y de los documentos que la soportan, pueden existir
            riesgos asociados a la prescripción.
          </p>

          <p>
            Este punto suele pasar desapercibido. Una cuenta puede aparecer
            durante meses o incluso años dentro de los reportes de cartera y,
            aun así, no estar siendo gestionada de manera adecuada desde el
            punto de vista jurídico.
          </p>

          <p>
            Por eso, una buena gestión de cartera en el sector salud debe
            conectar tres áreas que muchas veces trabajan por separado:
            facturación, finanzas y jurídica.
          </p>

          <p>
            La pregunta no debería ser solamente cuánto dinero debe una EPS,
            sino también qué documentos existen, desde cuándo es exigible la
            obligación, qué actuaciones se han realizado y cuál es la vía más
            adecuada para intentar recuperar esos recursos.
          </p>
        </section>

        {/* POR QUÉ ES IMPORTANTE */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Por qué la prescripción es un riesgo importante para la cartera
            EPS?
          </h2>

          <p>
            El problema aparece cuando una institución deja envejecer su cartera
            sin una estrategia definida. Mientras el área financiera puede verla
            simplemente como una cuenta pendiente, jurídicamente resulta
            necesario revisar cada obligación de acuerdo con sus características
            particulares.
          </p>

          <p>
            Una cartera antigua puede presentar dificultades adicionales:
            documentos incompletos, soportes que no coinciden, glosas sin
            resolver, conciliaciones pendientes, cambios en la administración
            del pagador o pérdida de trazabilidad sobre las gestiones
            realizadas.
          </p>

          <p>
            Todo esto hace que recuperar una cuenta de varios años sea
            considerablemente más complejo que intervenirla desde las primeras
            etapas de vencimiento.
          </p>

          <p>
            En otras palabras, el paso del tiempo no debería utilizarse como
            estrategia de cobro. La cartera necesita seguimiento antes de
            convertirse en un problema jurídico difícil de manejar.
          </p>
        </section>

        {/* REGLA ESPECIAL */}
        <section className={styles.section}>
          <h2>
            Prescripción de facturas de servicios de salud: ¿existe un único
            término?
          </h2>

          <p>
            Esta es una de las preguntas más frecuentes y también una de las que
            requiere mayor cuidado. No es recomendable afirmar que toda factura
            de servicios de salud tiene exactamente el mismo término de
            prescripción sin revisar primero la naturaleza de la obligación y
            las condiciones particulares del caso.
          </p>

          <p>
            Las facturas pueden estar sometidas a reglas propias de los títulos
            valores y, además, existen normas específicas relacionadas con las
            obligaciones derivadas de la prestación de servicios de salud.
          </p>

          <p>
            Por ejemplo, la Ley 1797 de 2016 establece una regla particular para
            las obligaciones contenidas en facturas de servicios de salud,
            relacionada con la posibilidad de alegar la prescripción y la
            gestión de conciliación o aclaración de cuentas.
          </p>

          <p>
            Por esta razón, antes de calcular un supuesto vencimiento de una
            cartera, conviene revisar factura por factura y determinar cuál es
            la regla jurídica aplicable.
          </p>
        </section>

        {/* QUÉ REVISAR */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué debe revisar una IPS antes de concluir que su cartera está
            prescrita?
          </h2>

          <p>
            Antes de dar una cuenta por perdida, es recomendable hacer una
            revisión jurídica y documental. No todas las situaciones tienen la
            misma respuesta y una cartera antigua no significa automáticamente
            que sea irrecuperable.
          </p>

          <ul className={styles.checklist}>
            <li>Fecha de prestación de los servicios.</li>
            <li>Fecha de expedición y vencimiento de cada factura.</li>
            <li>Fecha y forma de radicación ante la EPS.</li>
            <li>Contratos o acuerdos de voluntades relacionados.</li>
            <li>Soportes que acrediten la prestación del servicio.</li>
            <li>Glosas formuladas y respuestas presentadas.</li>
            <li>Actas y resultados de conciliaciones de cartera.</li>
            <li>Acuerdos de pago suscritos.</li>
            <li>Reconocimientos de la obligación.</li>
            <li>Requerimientos y gestiones de cobro realizadas.</li>
            <li>Procesos judiciales o administrativos existentes.</li>
            <li>
              Posibles actuaciones que hayan afectado el cómputo de términos.
            </li>
          </ul>
        </section>

        {/* ERROR */}
        <section className={styles.section}>
          <h2>
            El error más costoso: esperar a que la cartera sea demasiado antigua
          </h2>

          <p>
            Una de las situaciones más frecuentes en las instituciones de salud
            es que la cartera se gestione por volumen y no por riesgo jurídico.
            Se revisa cuánto debe cada EPS, pero no necesariamente cuánto tiempo
            lleva pendiente cada obligación ni qué actuación necesita.
          </p>

          <p>
            El resultado es una cartera que envejece mientras las áreas
            financieras continúan haciendo seguimiento sin una ruta clara de
            recuperación.
          </p>

          <p>
            Cuando finalmente se decide iniciar una acción jurídica, pueden
            aparecer problemas que antes no eran evidentes: documentos
            faltantes, diferencias entre factura y soportes, glosas sin
            trazabilidad o dificultades para determinar exactamente qué
            obligación puede exigirse.
          </p>

          <p>
            Por eso, la gestión jurídica debería comenzar mucho antes de que una
            cuenta llegue a una situación crítica.
          </p>
        </section>

        {/* GUÍA */}
        <section className={styles.section}>
          <h2>
            Cómo prevenir la prescripción de cartera EPS: pasos que debería
            implementar una IPS
          </h2>

          <p>
            Prevenir el riesgo no significa enviar comunicaciones de cobro de
            manera indiscriminada. Significa construir un sistema que permita
            saber qué está pendiente, desde cuándo, por qué no se ha pagado y
            cuál es la siguiente actuación que corresponde.
          </p>

          <ul className={styles.checklist}>
            <li>
              Clasificar la cartera por antigüedad y nivel de riesgo jurídico.
            </li>

            <li>
              Identificar las obligaciones que requieren actuación prioritaria.
            </li>

            <li>
              Mantener completos y organizados los soportes de cada factura.
            </li>

            <li>
              Documentar las gestiones de conciliación y aclaración de cuentas.
            </li>

            <li>Hacer seguimiento a glosas, devoluciones y objeciones.</li>

            <li>
              Registrar acuerdos de pago y reconocimientos de obligaciones.
            </li>

            <li>
              Revisar periódicamente los términos aplicables a cada obligación.
            </li>

            <li>
              Evaluar oportunamente la procedencia de mecanismos de cobro
              prejurídico o judicial.
            </li>
          </ul>
        </section>

        {/* DOCUMENTACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>
            La documentación puede marcar la diferencia en la recuperación de
            cartera
          </h2>

          <p>
            Cuando una IPS decide avanzar hacia una reclamación jurídica, la
            calidad del expediente resulta fundamental.
          </p>

          <p>
            No se trata únicamente de tener la factura. Dependiendo del caso,
            será necesario revisar contratos, órdenes o autorizaciones, soportes
            de prestación, radicaciones, respuestas a glosas, conciliaciones,
            estados de cuenta, comunicaciones y demás documentos que permitan
            demostrar el origen y las condiciones de la obligación.
          </p>

          <p>
            Una cartera bien documentada facilita el análisis jurídico y permite
            identificar con mayor rapidez qué obligaciones tienen posibilidades
            reales de recuperación.
          </p>

          <p>
            Por el contrario, cuando los documentos están dispersos entre
            facturación, auditoría, cartera y jurídica, preparar una acción de
            cobro puede tomar mucho más tiempo.
          </p>
        </section>

        {/* CONCILIACIÓN */}
        <section className={styles.section}>
          <h2>
            Conciliación y aclaración de cuentas: por qué no deben dejarse de
            lado
          </h2>

          <p>
            En el sector salud, las diferencias entre IPS y EPS no siempre se
            resuelven directamente mediante un proceso judicial. Existen
            situaciones en las que primero es necesario aclarar valores,
            soportes, glosas o aspectos relacionados con la prestación de los
            servicios.
          </p>

          <p>
            Además, la legislación colombiana contempla una regla específica
            respecto de las obligaciones contenidas en facturas de servicios de
            salud y la gestión de conciliación o aclaración de cuentas.
          </p>

          <p>
            Por eso, la conciliación no debería verse simplemente como una etapa
            administrativa. También puede ser una pieza importante dentro de una
            estrategia integral de recuperación de cartera.
          </p>
        </section>

        {/* INTERRUPCIÓN */}
        <section className={styles.sectionHighlight}>
          <h2>
            ¿Un requerimiento de cobro siempre interrumpe la prescripción?
          </h2>

          <p>
            No debería asumirse automáticamente. Los efectos jurídicos de una
            actuación dependen de la norma aplicable y de las circunstancias
            concretas de la obligación.
          </p>

          <p>
            Por eso, enviar una carta de cobro y asumir que con ello quedó
            protegido indefinidamente el derecho de la IPS puede ser una
            estrategia riesgosa.
          </p>

          <p>
            Lo recomendable es identificar previamente el régimen jurídico
            aplicable y dejar trazabilidad de todas las actuaciones realizadas.
            En determinados escenarios, la legislación contempla efectos
            específicos para requerimientos, reconocimientos de obligaciones o
            actuaciones judiciales, pero estos no deben confundirse entre sí.
          </p>
        </section>

        {/* PROCESO EJECUTIVO */}
        <section className={styles.section}>
          <h2>
            ¿Cuándo puede ser necesario iniciar un proceso ejecutivo contra una
            EPS?
          </h2>

          <p>
            Cuando existe una obligación que reúne las condiciones jurídicas
            necesarias para ser exigida ejecutivamente, puede ser conveniente
            evaluar esta vía en lugar de prolongar indefinidamente las gestiones
            de cobro.
          </p>

          <p>
            El Código General del Proceso establece los requisitos generales
            para que una obligación pueda ser exigida por esta vía. En términos
            prácticos, el análisis debe concentrarse en determinar si existe un
            documento o conjunto de documentos que permitan acreditar una
            obligación clara, expresa y exigible.
          </p>

          <p>
            En el caso de facturas relacionadas con servicios de salud, también
            es necesario verificar que se cumplan los requisitos propios del
            documento y del negocio jurídico que le dio origen.
          </p>

          <p>
            El Ministerio de Salud ha señalado, además, la relevancia de los
            requisitos de las facturas y de las reglas aplicables a su
            exigibilidad en el contexto del sector salud.
          </p>
        </section>

        {/* CARTERA ANTIGUA */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué hacer con una cartera EPS que ya lleva varios años vencida?
          </h2>

          <p>
            Una cartera antigua no debería eliminarse de los registros
            simplemente porque ha pasado mucho tiempo.
          </p>

          <p>
            El primer paso consiste en realizar un diagnóstico individual de las
            obligaciones. Es necesario determinar cuáles continúan siendo
            exigibles, cuáles presentan problemas documentales, cuáles fueron
            objeto de conciliación y cuáles requieren un análisis específico de
            prescripción.
          </p>

          <p>
            Incluso cuando una factura haya perdido determinadas características
            para una acción ejecutiva, la situación jurídica de la obligación
            debe analizarse de manera particular. El propio Ministerio de Salud
            ha abordado la diferencia entre la pérdida del mérito ejecutivo y
            las posibilidades de reclamación de obligaciones relacionadas con
            servicios de salud.
          </p>

          <p>
            Por eso, dar de baja una cartera sin un análisis jurídico previo
            puede resultar prematuro.
          </p>
        </section>

        {/* SISTEMA DE CONTROL */}
        <section className={styles.section}>
          <h2>
            Cómo crear un sistema interno para controlar el riesgo de
            prescripción
          </h2>

          <p>
            Más que revisar la cartera una vez al año, una IPS puede implementar
            un sistema permanente de alertas. La idea es sencilla: cada
            obligación debe tener una fecha, un responsable, un estado y una
            próxima actuación definida.
          </p>

          <ul className={styles.checklist}>
            <li>Fecha de exigibilidad de la obligación.</li>
            <li>Fecha de radicación.</li>
            <li>Estado de glosas y devoluciones.</li>
            <li>Gestiones de conciliación realizadas.</li>
            <li>Última actuación de cobro.</li>
            <li>Estado documental del expediente.</li>
            <li>Nivel de riesgo jurídico.</li>
            <li>Fecha de próxima revisión.</li>
            <li>Responsable de la gestión.</li>
            <li>Ruta definida: conciliación, cobro o acción judicial.</li>
          </ul>

          <p>
            Con este tipo de control, la cartera deja de ser simplemente una
            cifra dentro del balance y se convierte en un portafolio gestionado
            con prioridades concretas.
          </p>
        </section>

        {/* IMPACTO FINANCIERO */}
        <section className={styles.section}>
          <h2>
            Prescripción y flujo de caja: el problema no es solamente jurídico
          </h2>

          <p>
            Cuando una cartera no se recupera oportunamente, el impacto termina
            llegando a las finanzas de la IPS. Recursos que deberían utilizarse
            para nómina, proveedores, mantenimiento, tecnología o inversión
            permanecen pendientes de recaudo.
          </p>

          <p>
            Por eso, controlar el riesgo de prescripción también hace parte de
            una adecuada estrategia financiera.
          </p>

          <p>
            Una institución puede tener una cartera considerable y, aun así,
            presentar problemas de liquidez si buena parte de esos recursos está
            envejecida o tiene dificultades para convertirse efectivamente en
            caja.
          </p>
        </section>

        {/* ESTRATEGIA */}
        <section className={styles.sectionAlt}>
          <h2>
            La mejor estrategia no es esperar al vencimiento: es gestionar la
            cartera desde temprano
          </h2>

          <p>
            La recuperación de cartera funciona mejor cuando existe una ruta
            definida desde las primeras señales de incumplimiento.
          </p>

          <p>
            Primero debe existir una correcta facturación y radicación. Después,
            seguimiento a glosas y diferencias. Posteriormente, conciliación y
            gestión de cobro. Y cuando las circunstancias jurídicas lo
            justifican, debe evaluarse oportunamente la posibilidad de acudir a
            mecanismos judiciales.
          </p>

          <p>
            De esta manera, la IPS no llega al final del ciclo con una montaña
            de facturas antiguas y expedientes incompletos, sino con una cartera
            que ha sido intervenida progresivamente.
          </p>
        </section>

        {/* CHECK FINAL */}
        <section className={styles.section}>
          <h2>
            Checklist: ¿su IPS está controlando correctamente la prescripción de
            cartera?
          </h2>

          <ul className={styles.checklist}>
            <li>
              ¿La cartera está clasificada por antigüedad y riesgo jurídico?
            </li>

            <li>
              ¿Cada factura tiene sus respectivos soportes de prestación y
              radicación?
            </li>

            <li>¿Las glosas y diferencias están documentadas y gestionadas?</li>

            <li>
              ¿La IPS tiene identificadas las obligaciones que requieren
              actuación prioritaria?
            </li>

            <li>
              ¿Existe seguimiento a las conciliaciones y acuerdos de pago?
            </li>

            <li>
              ¿Se revisan los términos jurídicos antes de que las cuentas
              envejezcan?
            </li>

            <li>¿El área financiera trabaja coordinadamente con jurídica?</li>

            <li>
              ¿Existe una ruta definida para las obligaciones que no han sido
              pagadas?
            </li>
          </ul>

          <p>
            Si varias de estas respuestas son negativas, probablemente existe
            una oportunidad importante para mejorar la gestión de cartera de la
            institución.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.sectionHighlight}>
          <h2>
            Conclusión: la cartera vencida necesita una estrategia, no solo
            seguimiento
          </h2>

          <p>
            La prescripción es un riesgo que debe gestionarse antes de que se
            convierta en un problema. Para una IPS, esperar demasiado tiempo
            puede dificultar la recuperación de recursos que son necesarios para
            mantener la operación.
          </p>

          <p>
            La clave está en combinar control financiero, organización
            documental, conciliación, gestión de cobro y análisis jurídico
            individual de las obligaciones.
          </p>

          <p>
            No todas las carteras tienen la misma situación ni todas las
            facturas deben tratarse de la misma manera. Precisamente por eso, la
            revisión oportuna permite identificar qué puede recuperarse, qué
            necesita una actuación adicional y qué riesgos deben atenderse con
            prioridad.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE</strong> acompaña a IPS, clínicas y hospitales en
            Colombia en la gestión y recuperación jurídica de cartera,
            incluyendo análisis documental, conciliación, cobro prejurídico y
            evaluación de acciones judiciales frente a obligaciones pendientes.
          </p>
        </footer>
      </article>
    </main>
  );
}
