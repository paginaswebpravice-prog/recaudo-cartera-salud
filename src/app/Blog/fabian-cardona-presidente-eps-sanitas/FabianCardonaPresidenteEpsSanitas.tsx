"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function FabianCardonaPresidenteEpsSanitas() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>
            Actualidad, EPS y cartera en Colombia
          </span>

          <h1 className={styles.title}>
            Fabián Cardona asume en EPS Sanitas: ¿qué cambia para las IPS?
          </h1>

          <p className={styles.subtitle}>
            La llegada de Fabián Cardona a la presidencia de EPS Sanitas hace
            parte de una reorganización de Keralty. Analizamos qué se sabe del
            cambio y qué deberían revisar las IPS frente a cartera, pagos y
            gestión financiera.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRODUCCIÓN */}
        <section className={styles.section}>
          <h2>
            Fabián Cardona llega a la presidencia de EPS Sanitas: ¿por qué es
            importante este cambio?
          </h2>

          <p>
            EPS Sanitas inició una nueva etapa directiva con la llegada de
            Fabián Cardona a la presidencia, en el marco de la reorganización
            anunciada por Keralty durante 2026.
          </p>

          <p>
            El cambio no debe analizarse únicamente como un movimiento
            administrativo. Para las IPS, clínicas, hospitales y demás
            prestadores que tienen cuentas pendientes de pago, cualquier
            modificación en la estructura de una EPS puede generar preguntas
            sobre la continuidad de los procesos de contratación, conciliación,
            auditoría y gestión de cartera.
          </p>

          <p>
            Ahora bien, una cosa es el nombramiento y otra muy distinta afirmar
            que ya existen cambios concretos en los tiempos de pago. Por eso,
            este análisis diferencia los hechos conocidos de los aspectos que
            las IPS deberían monitorear durante la transición.
          </p>
        </section>

        {/* CONTEXTO */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Quién es Fabián Cardona y por qué asumió la presidencia de EPS
            Sanitas?
          </h2>

          <p>
            Fabián Cardona Medina es médico cirujano y cuenta con formación en
            administración de salud. Su trayectoria profesional ha estado
            relacionada con el aseguramiento, la gestión de redes y diferentes
            asuntos técnicos del sistema de salud colombiano.
          </p>

          <p>
            Antes de llegar a la presidencia de EPS Sanitas estuvo vinculado a
            organizaciones y espacios relacionados con la gestión del sistema,
            incluyendo responsabilidades en ACEMI, CEXPES y SIES Salud.
          </p>

          <p>
            Su llegada se produjo dentro de un proceso más amplio de
            reorganización de Keralty. En Colombia, la nueva estructura separa
            la conducción de EPS Sanitas de otras operaciones del grupo, que
            quedaron organizadas bajo Keralty Colombia.
          </p>
        </section>

        {/* REORGANIZACIÓN */}
        <section className={styles.section}>
          <h2>
            ¿Cómo quedó organizada Keralty en Colombia después del cambio?
          </h2>

          <p>
            Uno de los puntos relevantes de la reorganización es la separación
            de responsabilidades dentro de Colombia. EPS Sanitas quedó bajo la
            presidencia de Fabián Cardona, mientras que K-Co (Keralty Colombia)
            quedó bajo la dirección de Ivonne Orozco.
          </p>

          <p>
            Esto significa que el nombramiento de Cardona debe entenderse dentro
            de una transformación organizacional más amplia y no como un cambio
            aislado en la EPS.
          </p>

          <p>
            Para los prestadores, este contexto resulta importante porque la
            relación con una EPS no se limita al momento en que se presenta una
            factura. También involucra contratación, autorizaciones, auditoría,
            conciliación, respuesta a objeciones y, finalmente, reconocimiento y
            pago de las obligaciones.
          </p>
        </section>

        {/* CARTERA */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué puede significar el cambio de presidente para la cartera de las
            IPS?
          </h2>

          <p>
            El cambio de liderazgo no permite afirmar, por sí solo, que las
            cuentas pendientes de las IPS vayan a pagarse más rápido. Sin
            embargo, sí representa un momento en el que los prestadores deberían
            revisar con especial atención el estado de sus cuentas y la
            trazabilidad de las obligaciones pendientes.
          </p>

          <p>
            Para una IPS, esperar a que una transición administrativa resuelva
            automáticamente una cartera vencida puede ser una estrategia
            riesgosa. La recuperación de recursos requiere seguimiento,
            documentación y decisiones oportunas.
          </p>

          <ul className={styles.checklist}>
            <li>Identificar facturas pendientes de reconocimiento y pago.</li>
            <li>Separar cartera corriente, vencida y de mayor antigüedad.</li>
            <li>
              Revisar facturas devueltas, glosadas o pendientes de respuesta.
            </li>
            <li>Verificar que cada obligación tenga soportes completos.</li>
            <li>Documentar conciliaciones y compromisos de pago existentes.</li>
            <li>
              Hacer seguimiento a los acuerdos que no se estén cumpliendo.
            </li>
          </ul>
        </section>

        {/* PAGOS */}
        <section className={styles.section}>
          <h2>
            Pagos de EPS Sanitas a IPS: qué deberían vigilar clínicas y
            hospitales
          </h2>

          <p>
            Cuando una IPS depende de los pagos de las EPS para sostener buena
            parte de su flujo de caja, cualquier saldo pendiente adquiere
            importancia financiera. Por eso, más que esperar noticias sobre la
            nueva administración, conviene mantener actualizado el mapa real de
            la cartera.
          </p>

          <p>
            Una cuenta puede aparecer como “pendiente” en los sistemas internos
            de una institución y, sin embargo, encontrarse en una situación
            completamente diferente desde el punto de vista de su exigibilidad:
            puede estar en auditoría, tener una glosa, haber sido devuelta,
            encontrarse conciliada o contar con un compromiso de pago
            incumplido.
          </p>

          <p>
            Esa diferencia es fundamental. Una buena gestión de cartera no
            consiste únicamente en conocer cuánto dinero debe una EPS, sino en
            saber exactamente por qué está pendiente cada obligación y cuál es
            el siguiente paso para intentar recuperarla.
          </p>
        </section>

        {/* IPS BOGOTÁ */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué deberían hacer las IPS de Bogotá frente a la nueva etapa de EPS
            Sanitas?
          </h2>

          <p>
            Bogotá concentra una parte importante de la actividad de EPS Sanitas
            y de su red de prestadores. Para las IPS de la ciudad, el cambio de
            liderazgo puede ser una buena oportunidad para revisar procesos que
            muchas veces quedan relegados por la operación diaria.
          </p>

          <p>
            La recomendación no es detener la operación ni asumir que habrá
            problemas de pago. Es mucho más práctico trabajar con información
            actualizada y tener preparada la documentación de las obligaciones
            que requieran gestión.
          </p>

          <div className={styles.letterBox}>
            <p>
              <strong>Primero:</strong> determine cuánto le deben realmente y
              desde cuándo.
            </p>

            <p>
              <strong>Después:</strong> clasifique cada cuenta según su estado:
              pendiente de pago, glosada, devuelta, conciliada o en discusión.
            </p>

            <p>
              <strong>Finalmente:</strong> defina una ruta de gestión para cada
              grupo de obligaciones y establezca responsables y fechas de
              seguimiento.
            </p>
          </div>
        </section>

        {/* RECUPERACIÓN */}
        <section className={styles.section}>
          <h2>
            Cómo fortalecer el cobro de cartera a EPS durante una transición
            administrativa
          </h2>

          <p>
            Las transiciones administrativas pueden generar incertidumbre, pero
            una IPS no debería dejar que esa incertidumbre detenga su gestión de
            cartera.
          </p>

          <p>
            El primer paso consiste en organizar la información. Una cartera
            extensa y sin clasificación dificulta saber qué cuentas necesitan
            una gestión inmediata y cuáles todavía se encuentran dentro de una
            etapa administrativa.
          </p>

          <p>
            A partir de allí pueden establecerse diferentes niveles de
            actuación: seguimiento administrativo, conciliación, requerimientos
            formales, negociación de acuerdos de pago y, cuando corresponda y se
            cumplan los requisitos jurídicos, evaluación de acciones legales.
          </p>

          <p>
            La clave está en no esperar hasta que la cartera sea demasiado
            antigua para comenzar a actuar.
          </p>
        </section>

        {/* DOCUMENTACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>
            Documentos y soportes que una IPS debería tener organizados para
            cobrar cartera
          </h2>

          <p>
            Una de las dificultades más frecuentes en la recuperación de cartera
            del sector salud no está necesariamente en identificar al deudor,
            sino en demostrar de manera ordenada el origen y estado de cada
            obligación.
          </p>

          <p>
            Por esa razón, antes de escalar una gestión de cobro conviene
            verificar la existencia y consistencia de los principales soportes
            relacionados con las cuentas.
          </p>

          <ul className={styles.checklist}>
            <li>Facturas y constancias de radicación.</li>
            <li>Soportes de prestación de los servicios.</li>
            <li>Respuestas a glosas y devoluciones.</li>
            <li>Actas o documentos de conciliación.</li>
            <li>Acuerdos y compromisos de pago.</li>
            <li>Comunicaciones y requerimientos enviados a la EPS.</li>
            <li>Registro actualizado de saldos y fechas de vencimiento.</li>
          </ul>
        </section>

        {/* ESTRATEGIA */}
        <section className={styles.section}>
          <h2>
            ¿Conviene esperar a que la nueva administración de EPS Sanitas
            resuelva la cartera?
          </h2>

          <p>
            No es recomendable basar una estrategia de recuperación únicamente
            en un cambio directivo. Una nueva administración puede establecer
            prioridades y realizar ajustes internos, pero la cartera de cada IPS
            necesita una gestión individualizada.
          </p>

          <p>
            Si existen obligaciones vencidas, la institución debe continuar
            realizando seguimiento y dejando evidencia de las gestiones
            realizadas. Esto permite conocer cómo ha evolucionado cada cuenta y
            evita perder tiempo cuando una negociación no produce resultados.
          </p>

          <p>
            En otras palabras, el cambio de presidente puede ser un hecho
            relevante para el sector, pero no sustituye una estrategia propia de
            recuperación de cartera.
          </p>
        </section>

        {/* CUÁNDO ESCALAR */}
        <section className={styles.sectionAlt}>
          <h2>
            ¿Cuándo debería una IPS escalar el cobro de una cartera vencida?
          </h2>

          <p>
            No todas las obligaciones pendientes deben llegar inmediatamente a
            un proceso judicial. En muchos casos todavía existen alternativas
            administrativas o de conciliación que pueden permitir una
            recuperación más rápida.
          </p>

          <p>
            El problema aparece cuando los requerimientos se acumulan, los
            compromisos de pago se incumplen o una obligación permanece sin una
            solución efectiva durante un periodo prolongado.
          </p>

          <p>
            En esas circunstancias es conveniente realizar una evaluación
            jurídica individual de la cartera para determinar si existen
            mecanismos judiciales u otras alternativas de recuperación que
            resulten procedentes.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.section}>
          <h2>
            Fabián Cardona y EPS Sanitas: qué deben tener en cuenta las IPS en
            2026
          </h2>

          <p>
            La llegada de Fabián Cardona a la presidencia de EPS Sanitas hace
            parte de una reorganización más amplia de Keralty y abre una nueva
            etapa para la operación de la EPS en Colombia.
          </p>

          <p>
            Para las IPS, el punto más importante no es intentar anticipar cada
            decisión de la nueva administración, sino mantener bajo control su
            propia cartera: saber qué se debe, qué está pendiente de
            reconocimiento, qué obligaciones presentan diferencias y cuáles
            requieren una gestión de cobro más decidida.
          </p>

          <p>
            En un escenario de cambios dentro del sistema de salud, tener una
            cartera organizada y una estrategia de recuperación bien documentada
            puede marcar una diferencia importante para el flujo de caja de
            clínicas, hospitales y demás prestadores.
          </p>
        </section>

        {/* FUENTE */}
        <section className={styles.sectionAlt}>
          <h2>¿Dónde se informó el nombramiento de Fabián Cardona?</h2>

          <p>
            El nombramiento fue reportado en marzo de 2026 dentro de la
            reorganización de Keralty. La información publicada señala que
            Cardona asumiría la presidencia de EPS Sanitas y tendría a su cargo
            la operación de aseguramiento público de la entidad.
          </p>

          <a
            href="https://consultorsalud.com/fabian-cardona-asume-la-presidencia-eps-sanitas/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            Consultar la información publicada por ConsultorSalud ↗
          </a>
        </section>

        {/* CIERRE */}
        <footer className={styles.footer}>
          <p>
            <strong>
              La recuperación de cartera no debería depender únicamente de
              cambios administrativos.
            </strong>{" "}
            Una gestión organizada, documentada y oportuna permite a las IPS
            tomar mejores decisiones frente a sus cuentas por cobrar.
          </p>
        </footer>
      </article>
    </main>
  );
}
