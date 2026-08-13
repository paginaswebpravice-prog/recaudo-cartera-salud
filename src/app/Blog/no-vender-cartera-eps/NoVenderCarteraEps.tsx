"use client";

import Link from "next/link";
import styles from "./Article.module.css";

export default function NoVenderCarteraEps() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Recuperación de cartera EPS</span>

          <h1 className={styles.title}>
            ¿Vender cartera EPS o recuperarla? Lo que debe saber una IPS
          </h1>

          <p className={styles.subtitle}>
            Antes de vender una cartera vencida, conviene analizar cuánto vale
            realmente, qué posibilidades existen de recuperarla y qué
            alternativas jurídicas tiene la IPS frente a la EPS deudora.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}

      <article className={styles.article}>
        {/* ================= INTRODUCCIÓN ================= */}

        <section className={styles.section}>
          <h2>
            ¿Conviene vender la cartera de una EPS o intentar recuperarla?
          </h2>

          <p>
            Cuando una IPS lleva meses esperando el pago de una EPS, es normal
            que aparezca una pregunta muy concreta:{" "}
            <strong>
              ¿vale la pena seguir cobrando o sería mejor vender la cartera y
              recibir dinero inmediatamente?
            </strong>
          </p>

          <p>
            La respuesta no es igual para todas las instituciones. Depende de la
            antigüedad de las obligaciones, los soportes disponibles, el estado
            de la cartera, las posibilidades reales de cobro y, por supuesto, de
            las necesidades de liquidez de la IPS.
          </p>

          <p>
            Vender una cartera puede proporcionar liquidez en el corto plazo,
            pero normalmente implica negociar su valor con un tercero que
            asumirá el riesgo de recuperación. Por eso, antes de aceptar una
            propuesta, es importante comparar esa alternativa con la posibilidad
            de adelantar una estrategia de recuperación directamente frente al
            deudor.
          </p>

          <p>
            En otras palabras, una cartera que aparece como "difícil de cobrar"
            dentro de los estados financieros no necesariamente significa que
            sea jurídicamente irrecuperable.
          </p>
        </section>

        {/* ================= QUÉ SIGNIFICA VENDER ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Qué significa vender cartera EPS y qué recibe realmente la IPS?
          </h2>

          <p>
            La venta de cartera consiste, en términos generales, en transferir a
            un tercero los derechos económicos asociados a determinadas cuentas
            por cobrar. A cambio, la IPS recibe un valor acordado en la
            negociación y deja de asumir directamente parte de la gestión de
            recuperación de esas obligaciones.
          </p>

          <p>
            Sobre el papel puede parecer una solución sencilla: convertir una
            cuenta por cobrar en liquidez inmediata. El problema aparece cuando
            se compara el dinero recibido con el valor total que podría
            recuperarse mediante una gestión de cobro adecuada.
          </p>

          <p>
            El comprador de la cartera también asume riesgos. Por eso, antes de
            adquirirla normalmente analizará factores como la antigüedad de las
            facturas, los soportes, las glosas, las controversias existentes, la
            situación del deudor y la posibilidad de obtener un pago efectivo.
          </p>

          <p>
            Todo esto termina influyendo en el precio ofrecido. Por eso, una IPS
            no debería analizar únicamente cuánto dinero recibiría hoy, sino
            también{" "}
            <strong>
              qué valor económico está dejando de perseguir al ceder la cartera.
            </strong>
          </p>
        </section>

        {/* ================= RIESGO ================= */}

        <section className={styles.section}>
          <h2>
            El principal riesgo de vender cartera EPS: aceptar menos de lo que
            podría recuperarse
          </h2>

          <p>
            El atractivo principal de vender cartera es la velocidad. Una IPS
            que necesita liquidez puede preferir recibir un valor menor de
            inmediato antes que esperar un proceso de recuperación que puede
            tomar tiempo.
          </p>

          <p>
            Sin embargo, esa decisión tiene un costo económico que muchas veces
            no se analiza con suficiente detalle.
          </p>

          <p>
            Si las obligaciones cuentan con documentación adecuada, pueden ser
            exigibles y existe una ruta jurídica razonable para reclamarlas,
            venderlas sin realizar primero ese análisis puede significar
            renunciar a una parte importante de su potencial de recuperación.
          </p>

          <p>
            Por eso, antes de firmar una cesión o aceptar una oferta de compra,
            resulta conveniente responder una pregunta sencilla:
            <strong>
              ¿cuánto podría recuperar realmente la IPS si gestiona la cartera
              de manera directa?
            </strong>
          </p>
        </section>

        {/* ================= ANÁLISIS ================= */}

        <section className={styles.sectionAlt}>
          <h2>¿Qué debería revisar una IPS antes de vender su cartera?</h2>

          <p>
            No todas las carteras tienen el mismo nivel de riesgo. Una factura
            reciente, correctamente radicada y respaldada documentalmente no
            debería analizarse de la misma manera que una obligación antigua con
            múltiples controversias.
          </p>

          <p>Antes de tomar una decisión, conviene revisar como mínimo:</p>

          <p>
            <strong>Antigüedad de la cartera:</strong> determinar cuánto tiempo
            lleva pendiente cada obligación permite establecer prioridades y
            detectar cuentas que requieren una actuación inmediata.
          </p>

          <p>
            <strong>Soportes documentales:</strong> contratos, facturas,
            historias de radicación, respuestas, conciliaciones y demás
            documentos pueden ser determinantes para establecer la viabilidad
            del cobro.
          </p>

          <p>
            <strong>Estado de las glosas y devoluciones:</strong> no toda cuenta
            pendiente representa una obligación pacífica. Es necesario conocer
            qué está siendo discutido y qué parte de la cartera puede ser
            exigida.
          </p>

          <p>
            <strong>Gestiones anteriores:</strong> también importa saber qué
            requerimientos, conciliaciones o acuerdos de pago se han realizado y
            qué respuesta ha dado la EPS.
          </p>

          <p>
            <strong>Situación jurídica del deudor:</strong> las condiciones
            particulares de la EPS y las medidas administrativas o judiciales
            que puedan afectarla deben incorporarse al análisis.
          </p>
        </section>

        {/* ================= COMPARACIÓN ================= */}

        <section className={styles.section}>
          <h2>Vender cartera EPS vs. recuperarla: ¿cuál es la diferencia?</h2>

          <p>
            La diferencia no está únicamente en el tiempo que tarda en llegar el
            dinero. También cambia quién asume el riesgo, cuánto valor puede
            conservar la IPS y qué nivel de control mantiene sobre la gestión de
            la obligación.
          </p>

          <p>
            Cuando se vende la cartera, la IPS obtiene liquidez de acuerdo con
            las condiciones pactadas y transfiere los derechos objeto de la
            operación. En cambio, cuando decide recuperarla directamente,
            conserva la posibilidad de perseguir el pago y utilizar las
            herramientas de cobro disponibles según las características del
            caso.
          </p>

          <p>
            La segunda alternativa puede requerir más gestión y tiempo, pero
            también puede permitir que la institución conserve una mayor parte
            del valor de sus cuentas por cobrar.
          </p>

          <p>
            Por eso no existe una respuesta automática. La decisión debe partir
            de números, documentos y análisis jurídico, no únicamente de la
            necesidad inmediata de caja.
          </p>
        </section>

        {/* ================= STRATEGY ================= */}

        <section className={styles.sectionHighlight}>
          <h2>
            Recuperar cartera antes de venderla: una alternativa que vale la
            pena analizar
          </h2>

          <p>
            Antes de aceptar una oferta por una cartera vencida, una IPS puede
            evaluar si existe una estrategia de recuperación viable.
          </p>

          <p>
            Dependiendo de la situación, el proceso puede comenzar con una
            revisión integral de las obligaciones, organización documental,
            conciliación de diferencias, requerimientos de pago y gestión
            prejurídica.
          </p>

          <p>
            Cuando estas actuaciones no producen el resultado esperado y existen
            los presupuestos jurídicos correspondientes, puede evaluarse la
            posibilidad de acudir a mecanismos judiciales para exigir el
            cumplimiento de las obligaciones.
          </p>

          <p>
            La finalidad no es demandar por demandar. Una buena estrategia busca
            determinar qué cuentas tienen una verdadera posibilidad de
            recuperación y cuál es el camino más conveniente para cada grupo de
            obligaciones.
          </p>
        </section>

        {/* ================= COBRO PREJURÍDICO ================= */}

        <section className={styles.section}>
          <h2>
            ¿Por qué el cobro prejurídico puede ser importante antes de
            demandar?
          </h2>

          <p>
            No todas las obligaciones tienen que llegar inmediatamente a un
            proceso judicial. En muchos casos, una etapa prejurídica bien
            estructurada permite ordenar la información, identificar las
            diferencias existentes y plantear formalmente la exigencia de pago.
          </p>

          <p>
            Esta etapa también sirve para determinar qué está realmente
            pendiente. Puede haber facturas sin respuesta, obligaciones en
            conciliación, diferencias de auditoría o cuentas que requieren
            documentación adicional.
          </p>

          <p>
            El objetivo es llegar a una eventual acción judicial con una cartera
            mejor depurada y con mayor claridad sobre las obligaciones que se
            pretenden cobrar.
          </p>

          <p>
            Para una IPS, esto puede ser especialmente importante cuando maneja
            cientos o miles de cuentas y necesita separar rápidamente las
            obligaciones recuperables de aquellas que requieren una gestión
            diferente.
          </p>
        </section>

        {/* ================= JUDICIAL ================= */}

        <section className={styles.sectionAlt}>
          <h2>
            ¿Cuándo puede ser necesario acudir al cobro judicial de cartera EPS?
          </h2>

          <p>
            Cuando una obligación no es pagada pese a las gestiones realizadas,
            puede ser necesario analizar la procedencia de una acción judicial.
            La viabilidad dependerá de factores como la existencia de un título
            exigible, la documentación disponible, las características de la
            obligación y las circunstancias particulares del caso.
          </p>

          <p>
            En determinados escenarios pueden estudiarse procesos ejecutivos y,
            cuando jurídicamente corresponda, solicitudes de medidas cautelares
            encaminadas a garantizar el resultado del proceso.
          </p>

          <p>
            La clave está en no esperar indefinidamente. Una cartera que lleva
            meses o años acumulándose necesita una estrategia definida, porque
            el paso del tiempo puede complicar la recuperación y aumentar los
            costos de gestión.
          </p>
        </section>

        {/* ================= PRAVICE ================= */}

        <section className={styles.section}>
          <h2>PRAVICE no compra cartera: acompaña su recuperación jurídica</h2>

          <p>
            PRAVICE no funciona como un comprador de cartera que adquiere las
            obligaciones de una IPS con un descuento. El enfoque es diferente:
            acompañar a las instituciones de salud en la gestión y recuperación
            jurídica de los recursos que les adeudan.
          </p>

          <p>
            Esto permite analizar la cartera desde una perspectiva integral,
            teniendo en cuenta tanto los aspectos financieros como los
            documentales y jurídicos.
          </p>

          <p>
            Dependiendo del caso, la estrategia puede incluir revisión de
            cartera, organización de soportes, requerimientos, conciliaciones,
            gestión prejurídica y acciones judiciales cuando exista fundamento
            para ello.
          </p>

          <p>
            El objetivo es que la IPS pueda tomar decisiones con información
            suficiente y no tenga que vender automáticamente una cartera
            simplemente porque lleva demasiado tiempo pendiente de pago.
          </p>
        </section>

        {/* ================= CUÁNDO SÍ VENDER ================= */}

        <section className={styles.sectionAlt}>
          <h2>¿Cuándo podría tener sentido vender una cartera EPS?</h2>

          <p>
            Sería un error afirmar que vender cartera nunca es una alternativa.
            Existen situaciones en las que una institución puede considerar
            conveniente obtener liquidez inmediata, cerrar determinadas
            obligaciones o transferir el riesgo de recuperación a un tercero.
          </p>

          <p>
            Puede ser una opción que merezca análisis cuando una cartera
            presenta un deterioro importante, dificultades documentales,
            controversias complejas o una relación costo-beneficio poco
            favorable para la IPS.
          </p>

          <p>
            Incluso en estos escenarios, la recomendación es comparar primero la
            oferta recibida con el potencial jurídico y económico de la cartera.
            Una decisión informada es muy diferente a vender simplemente porque
            la deuda lleva mucho tiempo pendiente.
          </p>
        </section>

        {/* ================= ERRORES ================= */}

        <section className={styles.section}>
          <h2>
            Errores que una IPS debería evitar antes de vender cartera vencida
          </h2>

          <p>
            Tomar una decisión apresurada puede terminar afectando el valor de
            una cartera que todavía tiene posibilidades de recuperación.
          </p>

          <p>Entre los errores más frecuentes están:</p>

          <p>
            <strong>Vender sin conocer el valor real de la cartera:</strong>{" "}
            aceptar una propuesta sin haber realizado previamente una
            clasificación jurídica y financiera de las obligaciones.
          </p>

          <p>
            <strong>
              Mezclar cartera recuperable con cartera problemática:
            </strong>{" "}
            no todas las cuentas presentan el mismo nivel de riesgo y tratarlas
            como un único paquete puede ocultar diferencias importantes.
          </p>

          <p>
            <strong>Ignorar la documentación:</strong> los soportes disponibles
            pueden cambiar completamente la valoración de una obligación.
          </p>

          <p>
            <strong>Esperar demasiado:</strong> una gestión tardía puede hacer
            más compleja la recuperación y reducir las alternativas disponibles.
          </p>

          <p>
            <strong>
              Tomar la decisión únicamente por necesidad de liquidez:
            </strong>{" "}
            solucionar un problema de caja hoy puede generar un costo económico
            mucho mayor si no se compara con las alternativas existentes.
          </p>
        </section>

        {/* ================= METODOLOGÍA ================= */}

        <section className={styles.section}>
          <h2>
            Una forma práctica de decidir: analizar la cartera antes de venderla
          </h2>

          <p>
            Una IPS puede comenzar por clasificar sus cuentas por cobrar según
            antigüedad, valor, estado de la obligación, documentación disponible
            y nivel de dificultad para recuperar cada saldo.
          </p>

          <p>
            Después, conviene separar las obligaciones que pueden gestionarse
            administrativamente de aquellas que requieren conciliación,
            requerimiento formal o análisis jurídico.
          </p>

          <p>
            Con esta información es posible comparar dos escenarios: cuánto
            recibiría la institución si vende la cartera y cuánto podría obtener
            mediante una estrategia de recuperación, teniendo en cuenta los
            costos, tiempos y riesgos de cada alternativa.
          </p>

          <p>
            Este ejercicio cambia completamente la conversación. Ya no se trata
            simplemente de decidir entre "vender o no vender", sino de
            determinar
            <strong>qué hacer con cada segmento de la cartera.</strong>
          </p>
        </section>

        {/* ================= CONCLUSIÓN ================= */}

        <section className={styles.section}>
          <h2>
            Antes de vender cartera EPS, revise si todavía puede recuperarla
          </h2>

          <p>
            La venta de cartera puede ser una herramienta financiera en
            determinadas circunstancias, pero no debería convertirse en la
            primera respuesta frente a una cartera vencida.
          </p>

          <p>
            Para muchas IPS, el primer paso debería ser conocer exactamente qué
            tienen por cobrar, cuáles obligaciones cuentan con respaldo
            suficiente, qué dificultades existen y qué posibilidades reales de
            recuperación ofrece cada caso.
          </p>

          <p>
            A partir de ese diagnóstico, la institución puede comparar con mayor
            claridad la venta de cartera frente a alternativas como la
            conciliación, el cobro prejurídico y, cuando corresponda, la
            recuperación judicial.
          </p>

          <p>
            En definitiva, una cartera vencida no debería considerarse perdida
            únicamente por su antigüedad. Antes de cederla a un tercero, vale la
            pena determinar si todavía existe una ruta jurídica y financiera
            razonable para recuperar su valor.
          </p>
        </section>

        {/* ================= FOOTER ================= */}

        <footer className={styles.footer}>
          <p>
            <strong>¿Está evaluando vender cartera EPS?</strong>
          </p>

          <p>
            Antes de aceptar una oferta, analice el potencial de recuperación de
            sus cuentas por cobrar y compare las alternativas disponibles para
            su IPS.
          </p>
        </footer>
      </article>
    </main>
  );
}
