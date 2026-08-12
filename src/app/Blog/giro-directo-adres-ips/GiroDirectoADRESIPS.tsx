"use client";

import Link from "next/link";

import styles from "./Article.module.css";

export default function GiroDirectoADRESIPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Giro directo, ADRES y cartera de IPS en Colombia
          </span>

          <h1 className={styles.title}>
            Giro directo ADRES para IPS: cómo funciona, requisitos y qué pasa
            con la cartera
          </h1>

          <p className={styles.subtitle}>
            Una guía práctica para entender cómo funciona el giro directo de la
            ADRES, qué condiciones deben cumplir las IPS, cómo puede impactar el
            flujo de caja y qué hacer cuando todavía existen recursos pendientes
            de pago.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRODUCCIÓN */}
        <section className={styles.section}>
          <h2>
            ¿Qué es el giro directo ADRES y por qué es importante para las IPS?
          </h2>

          <p>
            Para una IPS, recibir oportunamente los recursos por los servicios
            prestados no es un asunto menor. De esos pagos dependen la nómina,
            los proveedores, la compra de medicamentos, el mantenimiento de
            equipos y, en general, la continuidad de la operación.
          </p>

          <p>
            En ese contexto aparece el <strong>giro directo de la ADRES</strong>
            , un mecanismo mediante el cual determinados recursos del sistema de
            salud pueden ser girados directamente a las IPS y a otros
            prestadores o proveedores, de acuerdo con las condiciones y
            procedimientos establecidos para cada régimen y tipo de recurso.
          </p>

          <p>
            La finalidad es facilitar el flujo de recursos hacia quienes prestan
            efectivamente los servicios de salud. Sin embargo, es importante
            entender algo desde el comienzo:{" "}
            <strong>
              el giro directo no significa que toda factura de una IPS sea
              pagada automáticamente por la ADRES.
            </strong>
          </p>

          <p>
            Por eso, además de conocer el mecanismo, una institución debe
            mantener un adecuado control de sus cuentas por cobrar, facturación,
            conciliaciones y cartera pendiente.
          </p>
        </section>

        {/* DEFINICIÓN */}
        <section className={styles.sectionAlt}>
          <h2>¿Cómo funciona el giro directo de la ADRES en Colombia?</h2>

          <p>
            El funcionamiento del giro directo depende del régimen, de las
            condiciones de la EPS y del tipo de recursos involucrados. En
            determinados escenarios, las EPS deben realizar la postulación o
            programación de los beneficiarios y la ADRES procesa la información
            necesaria para efectuar los pagos.
          </p>

          <div className={styles.box}>
            <h3>1. Identificación de los recursos</h3>

            <p>
              Primero se determina el tipo de recursos que serán objeto del giro
              y las condiciones bajo las cuales puede operar el mecanismo. No
              todos los recursos del sistema siguen exactamente el mismo
              procedimiento.
            </p>

            <h3>2. Postulación o programación de beneficiarios</h3>

            <p>
              De acuerdo con el mecanismo aplicable, la EPS debe reportar o
              postular a las IPS y demás beneficiarios que recibirán los
              recursos, siguiendo los procedimientos definidos por la ADRES.
            </p>

            <h3>3. Validación de la información</h3>

            <p>
              La información reportada debe cumplir las condiciones establecidas
              para que el pago pueda ser procesado. Por eso resulta importante
              que la IPS mantenga actualizados sus datos y su información
              bancaria ante la ADRES.
            </p>

            <h3>4. Ordenación y giro de los recursos</h3>

            <p>
              Una vez surtidas las validaciones correspondientes, la ADRES
              realiza la ordenación y dispersión de los recursos hacia los
              beneficiarios habilitados.
            </p>

            <h3>5. Seguimiento del pago</h3>

            <p>
              Para la IPS no debería terminar el proceso simplemente con la
              expectativa de recibir el dinero. Es recomendable verificar los
              giros, conciliarlos con la información contable y mantener
              identificados los saldos que continúan pendientes.
            </p>
          </div>
        </section>

        {/* REQUISITOS */}
        <section className={styles.section}>
          <h2>
            Requisitos que debe revisar una IPS para recibir giro directo ADRES
          </h2>

          <p>
            Uno de los errores más frecuentes es asumir que estar registrada
            como IPS es suficiente para recibir cualquier giro directo. En la
            práctica, existen condiciones específicas que deben verificarse
            según el mecanismo aplicable.
          </p>

          <ul className={styles.checklist}>
            <li>
              Mantener la información institucional correctamente registrada.
            </li>

            <li>
              Contar con la habilitación correspondiente como prestador de
              servicios de salud.
            </li>

            <li>
              Tener una cuenta bancaria registrada y habilitada ante la ADRES
              cuando el procedimiento así lo exija.
            </li>

            <li>
              Verificar que la información bancaria y administrativa esté
              actualizada.
            </li>

            <li>
              Revisar periódicamente la información publicada por la ADRES.
            </li>

            <li>
              Confirmar que la IPS haya sido incluida en la programación o
              postulación correspondiente cuando sea aplicable.
            </li>

            <li>
              Hacer seguimiento a inconsistencias que puedan impedir o retrasar
              el giro.
            </li>
          </ul>

          <p>
            La propia ADRES dispone de procedimientos para el registro y
            modificación de cuentas bancarias de IPS y otros beneficiarios. Por
            eso, mantener esta información actualizada es una tarea financiera
            que no debería dejarse para cuando aparezca un problema de pago.
          </p>
        </section>

        {/* IMPACTO */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué impacto tiene el giro directo ADRES en el flujo de caja de una
            IPS?
          </h2>

          <p>
            El principal efecto esperado del giro directo es facilitar que los
            recursos lleguen a los prestadores de servicios de salud. Para una
            IPS con una operación intensiva en costos, cualquier mejora en la
            oportunidad del recaudo puede tener un efecto importante sobre su
            caja.
          </p>

          <p>
            Pensemos en una institución que debe pagar nómina, seguridad social,
            medicamentos, insumos, servicios públicos y proveedores todos los
            meses. Si una parte importante de los recursos que espera recibir se
            demora, la presión financiera aumenta rápidamente.
          </p>

          <p>
            El giro directo puede ayudar a reducir parte de esa presión, pero no
            reemplaza una política integral de tesorería y recuperación de
            cartera.
          </p>

          <ul className={styles.checklist}>
            <li>Puede facilitar la entrada de recursos a la IPS.</li>

            <li>
              Puede mejorar la capacidad de planificar pagos y obligaciones.
            </li>

            <li>
              Puede reducir parcialmente la exposición a determinados retrasos
              de las EPS.
            </li>

            <li>
              Permite realizar un seguimiento más específico de los recursos
              efectivamente girados.
            </li>

            <li>
              Ayuda a identificar con mayor claridad qué valores continúan
              pendientes de recuperación.
            </li>
          </ul>
        </section>

        {/* NO ES PAGO TOTAL */}
        <section className={styles.section}>
          <h2>¿El giro directo elimina la cartera pendiente de una IPS?</h2>

          <p>
            <strong>No necesariamente.</strong> Este es uno de los puntos más
            importantes que una IPS debe tener claro.
          </p>

          <p>
            Que exista un mecanismo de giro directo no significa que todas las
            obligaciones pendientes de una EPS desaparezcan ni que todas las
            cuentas por cobrar de una institución sean objeto de pago mediante
            este mecanismo.
          </p>

          <p>
            Una IPS puede continuar teniendo saldos derivados de facturas,
            diferencias pendientes de conciliación, glosas, devoluciones,
            obligaciones no reconocidas o cuentas que no hayan sido incluidas
            dentro de una programación de giro.
          </p>

          <p>
            Por eso, la gestión de cartera debe continuar incluso cuando una
            parte de los recursos se recibe mediante giro directo.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.sectionAlt}>
          <h2>
            Principales beneficios del giro directo para clínicas y hospitales
          </h2>

          <p>
            Cuando el mecanismo opera correctamente y la IPS cumple las
            condiciones aplicables, existen beneficios financieros y
            administrativos que pueden ser relevantes para la institución.
          </p>

          <ul className={styles.checklist}>
            <li>Mayor oportunidad en la recepción de determinados recursos.</li>

            <li>
              Menor dependencia de determinados procesos internos de
              transferencia de recursos.
            </li>

            <li>Mayor visibilidad sobre algunos pagos realizados a la IPS.</li>

            <li>Apoyo a la planeación del flujo de caja institucional.</li>

            <li>Mayor capacidad para programar obligaciones financieras.</li>

            <li>
              Reducción parcial de la presión sobre el capital de trabajo.
            </li>

            <li>Mayor trazabilidad de los recursos efectivamente recibidos.</li>
          </ul>
        </section>

        {/* PROBLEMAS */}
        <section className={styles.section}>
          <h2>
            ¿Por qué una IPS puede seguir teniendo problemas de liquidez con
            giro directo?
          </h2>

          <p>
            El giro directo ayuda, pero no resuelve por sí solo todos los
            problemas financieros de una institución de salud.
          </p>

          <p>
            Una IPS puede recibir determinados recursos y, al mismo tiempo,
            mantener una cartera considerable por otros conceptos. También
            pueden existir diferencias entre lo facturado, lo reconocido, lo
            conciliado y lo efectivamente pagado.
          </p>

          <p>
            Cuando estas diferencias no se controlan, la institución puede tener
            la sensación de que está recibiendo recursos mientras su cartera
            vencida continúa creciendo.
          </p>

          <ul className={styles.checklist}>
            <li>Facturas pendientes de reconocimiento.</li>

            <li>Glosas que permanecen abiertas durante largos periodos.</li>

            <li>Devoluciones que requieren corrección y nueva radicación.</li>

            <li>Pagos parciales que dejan saldos pendientes.</li>

            <li>
              Diferencias entre los registros contables y la información del
              pagador.
            </li>

            <li>
              Cartera antigua que no está siendo gestionada de manera
              diferenciada.
            </li>

            <li>
              Falta de conciliación periódica con las entidades responsables de
              pago.
            </li>
          </ul>
        </section>

        {/* CARTERA */}
        <section className={styles.sectionAlt}>
          <h2>
            Giro directo ADRES y recuperación de cartera: ¿qué debe hacer una
            IPS?
          </h2>

          <p>
            La respuesta está en separar dos conceptos que muchas veces se
            mezclan: <strong>recibir recursos</strong> y{" "}
            <strong>recuperar cartera</strong>.
          </p>

          <p>
            El primero tiene que ver con los recursos que efectivamente son
            girados a la institución. El segundo exige identificar qué
            obligaciones siguen pendientes, por qué no han sido pagadas y qué
            actuación corresponde en cada caso.
          </p>

          <p>
            Una buena estrategia comienza por clasificar la cartera. No es lo
            mismo una cuenta recién radicada que una obligación con varios meses
            de vencimiento, una factura glosada o una cuenta que ya cuenta con
            soportes suficientes para iniciar una gestión de cobro más exigente.
          </p>

          <ul className={styles.checklist}>
            <li>Clasificar cartera por EPS y antigüedad.</li>

            <li>Separar cartera corriente de cartera vencida.</li>

            <li>Identificar glosas y devoluciones pendientes.</li>

            <li>Conciliar periódicamente los saldos.</li>

            <li>Documentar cada gestión de cobro.</li>

            <li>Definir responsables y fechas de seguimiento.</li>

            <li>
              Escalar oportunamente los casos que requieran gestión prejurídica
              o jurídica.
            </li>
          </ul>
        </section>

        {/* RETRASOS */}
        <section className={styles.section}>
          <h2>
            ¿Qué hacer cuando el giro directo no soluciona el saldo pendiente?
          </h2>

          <p>
            Cuando una IPS identifica que todavía existe una obligación
            pendiente, el primer paso no debería ser simplemente esperar un
            nuevo pago. Lo recomendable es establecer exactamente cuál es el
            estado de la cuenta y qué está impidiendo su recuperación.
          </p>

          <p>
            Dependiendo del caso, puede ser necesario realizar una conciliación,
            presentar requerimientos, corregir inconsistencias documentales,
            controvertir determinadas objeciones o avanzar hacia mecanismos de
            cobro más formales.
          </p>

          <p>
            En otras palabras, el giro directo puede formar parte de la
            estrategia financiera de una IPS, pero no debería convertirse en el
            único mecanismo de recuperación.
          </p>

          <ul className={styles.checklist}>
            <li>Verificar el valor efectivamente girado.</li>

            <li>Identificar el saldo que continúa pendiente.</li>

            <li>Revisar el estado de cada factura.</li>

            <li>Conciliar diferencias con la entidad responsable de pago.</li>

            <li>Documentar las gestiones realizadas.</li>

            <li>Evaluar mecanismos de cobro cuando la mora persiste.</li>
          </ul>
        </section>

        {/* TESORERÍA */}
        <section className={styles.sectionAlt}>
          <h2>
            Cómo integrar el giro directo a la gestión financiera de una IPS
          </h2>

          <p>
            Una institución que quiera aprovechar realmente el giro directo
            debería incorporarlo dentro de su flujo financiero general, en lugar
            de tratarlo como un proceso aislado.
          </p>

          <div className={styles.box}>
            <h3>Proyectar</h3>

            <p>
              Estimar los recursos que razonablemente pueden ingresar y
              contrastarlos con las obligaciones que debe atender la IPS.
            </p>

            <h3>Controlar</h3>

            <p>
              Comparar periódicamente los valores programados, girados,
              contabilizados y todavía pendientes.
            </p>

            <h3>Conciliar</h3>

            <p>
              Identificar diferencias entre la información de la IPS y la de las
              entidades responsables de pago.
            </p>

            <h3>Gestionar</h3>

            <p>
              Actuar sobre la cartera que no está siendo recuperada mediante el
              flujo ordinario de pagos.
            </p>

            <h3>Escalar</h3>

            <p>
              Determinar cuándo una obligación requiere una gestión de cobro
              especializada o una estrategia jurídica.
            </p>
          </div>
        </section>

        {/* INDICADORES */}
        <section className={styles.section}>
          <h2>
            Indicadores que una IPS debería controlar junto con el giro directo
          </h2>

          <p>
            Recibir giros no significa necesariamente que la situación de caja
            de una IPS sea saludable. Para saber si el mecanismo realmente está
            ayudando a la institución, es necesario mirar los resultados junto
            con otros indicadores financieros y de cartera.
          </p>

          <ul className={styles.checklist}>
            <li>Días promedio de cartera.</li>

            <li>Porcentaje de cartera vencida.</li>

            <li>Valor de cartera superior a 90, 180 y 360 días.</li>

            <li>Recaudo mensual por EPS.</li>

            <li>Porcentaje de glosas pendientes.</li>

            <li>Valor de devoluciones pendientes de corrección.</li>

            <li>Diferencia entre cartera contable y cartera conciliada.</li>

            <li>Concentración de cartera por entidad responsable de pago.</li>

            <li>Flujo de caja proyectado frente a obligaciones próximas.</li>
          </ul>
        </section>

        {/* ACTUALIZACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>
            Giro directo ADRES en 2026: por qué las IPS deben mantenerse
            actualizadas
          </h2>

          <p>
            El giro directo no es un proceso estático. La ADRES continúa
            publicando procedimientos, circulares, listados y actualizaciones
            relacionados con su operación.
          </p>

          <p>
            Por eso, las IPS deberían evitar trabajar únicamente con información
            antigua o con procedimientos internos que no hayan sido revisados
            durante los últimos meses.
          </p>

          <p>
            También resulta conveniente consultar directamente las publicaciones
            oficiales de la ADRES cuando se presenten cambios en los
            procedimientos, requisitos o mecanismos de giro.
          </p>

          <p>
            En particular, una IPS debe prestar atención a la actualización de
            sus datos institucionales y bancarios, a los procedimientos de
            postulación y a las reglas aplicables al tipo de recursos que espera
            recibir.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.section}>
          <h2>
            Conclusión: el giro directo ayuda, pero la cartera sigue necesitando
            gestión
          </h2>

          <p>
            El giro directo de la ADRES representa una herramienta importante
            para facilitar el flujo de recursos hacia determinados prestadores
            de servicios de salud. Para muchas IPS, clínicas y hospitales puede
            significar un apoyo relevante para la liquidez y la continuidad de
            la operación.
          </p>

          <p>
            Sin embargo, sería un error pensar que el mecanismo elimina por sí
            solo los problemas de cartera. Una institución puede recibir giros y
            continuar acumulando obligaciones pendientes por facturas,
            diferencias, glosas, devoluciones u otros conceptos.
          </p>

          <p>
            La mejor estrategia es combinar el seguimiento de los recursos
            girados con una gestión disciplinada de cartera, conciliaciones,
            control documental y actuaciones de cobro cuando sean necesarias.
          </p>

          <p>
            En definitiva,{" "}
            <strong>
              el giro directo debe verse como una pieza dentro de la gestión
              financiera de la IPS, no como un sustituto de la recuperación de
              cartera.
            </strong>
          </p>
        </section>

        {/* CTA / CIERRE */}
        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> Acompaña a IPS, clínicas
            y hospitales en Colombia en la gestión y recuperación de cartera
            frente a EPS y entidades responsables de pago, mediante estrategias
            de cobro, conciliación y acciones jurídicas cuando el caso lo
            requiere.
          </p>
        </footer>
      </article>
    </main>
  );
}
