"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function MedidasCautelaresEpsContent() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Medidas cautelares y protección de cartera en salud
          </span>

          <h1 className={styles.title}>
            Medidas cautelares contra EPS en Colombia: cómo funcionan los
            embargos y la protección de cartera en el sector salud
          </h1>

          <p className={styles.description}>
            Conozca cómo funcionan las medidas cautelares contra EPS en
            Colombia, cuándo pueden solicitarse y qué papel cumplen los embargos
            y retenciones dentro de los procesos de recuperación de cartera para
            IPS, clínicas y prestadores de salud.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Recibir orientación
            </a>

            <a
              href="https://recaudodecartera.com/cartera-sector-salud.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Ver recurso especializado
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* CONTEXTO */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Qué son las medidas cautelares contra EPS en Colombia
          </motion.h2>

          <p className={styles.text}>
            Las medidas cautelares son herramientas jurídicas utilizadas para
            proteger el cumplimiento de una obligación mientras se desarrolla un
            proceso judicial. En el sector salud colombiano, suelen utilizarse
            para reducir el riesgo de pérdida de cartera y proteger el flujo de
            caja de IPS y clínicas.
          </p>

          <div className={styles.highlightBox}>
            Estas medidas pueden aplicarse dentro de procesos ejecutivos o
            estrategias de recuperación de cartera cuando existe riesgo de no
            pago, insolvencia o deterioro financiero del deudor.
          </div>
        </section>

        {/* RIESGOS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¿Qué puede ocurrir cuando una IPS o clínica no protege oportunamente
            su cartera frente a una EPS?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Esperar durante meses o incluso años para iniciar acciones de
            recuperación puede incrementar el riesgo de pérdida de recursos.
            Aunque cada caso requiere un análisis jurídico independiente,
            existen escenarios donde la falta de medidas preventivas disminuye
            las posibilidades de obtener un recaudo oportuno y afecta
            directamente la estabilidad financiera de la institución prestadora
            de servicios de salud.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Incremento de la cartera vencida",
                text: "Las facturas continúan acumulándose mientras disminuyen las posibilidades de recuperación efectiva, afectando los indicadores financieros de la institución.",
              },
              {
                title: "Presión sobre el flujo de caja",
                text: "La falta de liquidez puede limitar el pago de nómina, proveedores, medicamentos, insumos médicos y nuevas inversiones.",
              },
              {
                title: "Mayor exposición al riesgo financiero",
                text: "Cuando no existen estrategias preventivas, la recuperación depende de procesos más largos y con mayores niveles de incertidumbre.",
              },
              {
                title: "Incremento de costos administrativos",
                text: "El seguimiento permanente a cuentas pendientes consume tiempo operativo y recursos humanos que podrían destinarse a actividades asistenciales.",
              },
              {
                title: "Dificultades para planificar financieramente",
                text: "La incertidumbre sobre los ingresos esperados dificulta elaborar presupuestos, planes de expansión y decisiones estratégicas.",
              },
              {
                title: "Impacto en la sostenibilidad institucional",
                text: "Una cartera creciente puede afectar la continuidad operacional de IPS, clínicas, hospitales y demás prestadores del sistema de salud.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            <strong>Importante:</strong> No todas las obligaciones requieren la
            misma estrategia jurídica. Antes de solicitar medidas cautelares
            resulta recomendable analizar el estado de la cartera, la
            documentación disponible, el comportamiento histórico del deudor, la
            existencia de títulos ejecutivos y las probabilidades reales de
            recuperación.
          </div>
        </section>

        {/* TIPOS DE MEDIDAS CAUTELARES */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Principales medidas cautelares que pueden solicitarse en procesos de
            recuperación de cartera contra EPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Las medidas cautelares buscan proteger la efectividad de un eventual
            proceso judicial evitando que, durante el trámite, desaparezcan
            bienes o recursos que puedan servir para cumplir una obligación. La
            procedencia de cada medida dependerá de las circunstancias
            particulares del caso, del soporte documental disponible y de los
            requisitos previstos por la legislación colombiana.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Embargo de cuentas bancarias</h4>

              <p>
                En determinados procesos puede solicitarse el embargo de
                recursos financieros cuando se cumplen los requisitos legales
                correspondientes, con el propósito de proteger el eventual pago
                de la obligación.
              </p>
            </div>

            <div>
              <h4>✔ Embargo de créditos o derechos económicos</h4>

              <p>
                Dependiendo del proceso, también pueden existir medidas
                dirigidas sobre derechos económicos que hagan parte del
                patrimonio del deudor, procurando garantizar el cumplimiento de
                una decisión judicial.
              </p>
            </div>

            <div>
              <h4>✔ Retención preventiva de recursos</h4>

              <p>
                Algunas medidas buscan impedir que determinados recursos sean
                transferidos mientras la autoridad competente resuelve el
                proceso correspondiente.
              </p>
            </div>

            <div>
              <h4>✔ Medidas sobre bienes del deudor</h4>

              <p>
                Cuando la normatividad lo permite, pueden solicitarse medidas
                respecto de determinados bienes con el fin de preservar la
                posibilidad de recuperación del crédito.
              </p>
            </div>

            <div>
              <h4>✔ Integración con procesos ejecutivos</h4>

              <p>
                Las medidas cautelares normalmente hacen parte de una estrategia
                jurídica más amplia, complementando procesos ejecutivos y otras
                acciones de recuperación de cartera en el sector salud.
              </p>
            </div>

            <div>
              <h4>✔ Seguimiento permanente de las medidas</h4>

              <p>
                Una vez decretadas, resulta importante realizar seguimiento
                continuo al proceso para verificar su cumplimiento, atender
                requerimientos y adoptar las actuaciones necesarias dentro de
                cada etapa judicial.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <strong>Buenas prácticas:</strong> antes de iniciar cualquier
            solicitud de medidas cautelares es recomendable revisar la calidad
            de la documentación, el estado de las facturas, los soportes de
            prestación de servicios, la existencia de títulos ejecutivos, el
            comportamiento histórico de pago de la EPS y la estrategia procesal
            más conveniente para cada institución.
          </div>
        </section>

        {/* CUÁNDO EVALUAR MEDIDAS CAUTELARES */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¿En qué situaciones puede ser recomendable evaluar medidas
            cautelares contra una EPS?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            No todas las cuentas por cobrar requieren acudir inmediatamente a un
            proceso judicial. Sin embargo, existen escenarios en los que resulta
            conveniente realizar un análisis jurídico para determinar si es
            pertinente iniciar un proceso ejecutivo acompañado de medidas
            cautelares orientadas a proteger la recuperación de la cartera. Cada
            caso debe evaluarse individualmente, considerando el valor de la
            obligación, el estado de la documentación y el comportamiento del
            deudor.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Facturas con largos periodos de mora",
                text: "Cuando la cartera permanece sin pago durante un tiempo considerable, puede ser oportuno analizar las alternativas jurídicas disponibles para proteger el crédito.",
              },
              {
                title: "Incumplimientos reiterados",
                text: "Si existen compromisos de pago incumplidos o constantes aplazamientos, es recomendable evaluar una estrategia de recuperación más sólida.",
              },
              {
                title: "Alto volumen de cartera",
                text: "Las IPS y clínicas con importantes montos pendientes suelen requerir un análisis integral que combine acciones administrativas y jurídicas.",
              },
              {
                title: "Riesgo sobre el flujo de caja",
                text: "Cuando la falta de recaudo afecta la liquidez institucional, resulta importante estudiar mecanismos que contribuyan a proteger la sostenibilidad financiera.",
              },
              {
                title: "Procesos de negociación sin resultados",
                text: "Si las gestiones de cobro persuasivo y conciliación no producen avances, puede ser necesario revisar otras alternativas legales.",
              },
              {
                title: "Necesidad de proteger el recaudo",
                text: "En determinados casos, las medidas cautelares hacen parte de una estrategia orientada a preservar la efectividad de un eventual proceso judicial.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.highlightBox}>
            📌 Antes de iniciar cualquier actuación judicial es recomendable
            realizar un diagnóstico completo de la cartera, revisar la calidad
            de los soportes, verificar el estado de las facturas, identificar
            posibles glosas, evaluar los títulos ejecutivos disponibles y
            definir una estrategia de recuperación acorde con las
            características de cada obligación.
          </div>
        </section>

        {/* ETAPAS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Etapas generales para solicitar medidas cautelares en Colombia
          </h2>

          <div className={styles.grid}>
            {[
              "Análisis de la cartera y documentación",
              "Evaluación de riesgos financieros",
              "Definición de estrategia jurídica",
              "Solicitud ante autoridad competente",
              "Seguimiento de medidas decretadas",
              "Integración con acciones de cobro",
            ].map((step, i) => (
              <motion.div key={i} className={styles.card}>
                <h3>Etapa {i + 1}</h3>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BUENAS PRÁCTICAS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Buenas prácticas para fortalecer la recuperación de cartera en IPS,
            clínicas y hospitales
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La recuperación efectiva de cartera no depende únicamente del inicio
            de un proceso judicial. Los mejores resultados suelen obtenerse
            cuando las instituciones implementan procesos preventivos,
            fortalecen sus controles internos y realizan un seguimiento
            permanente a las cuentas por cobrar desde el momento de la
            facturación hasta el recaudo definitivo. Una gestión organizada
            reduce riesgos financieros y contribuye a mantener la estabilidad
            operativa de la entidad.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Mantener actualizada la documentación</h4>

              <p>
                Contar con historias clínicas, soportes asistenciales,
                autorizaciones, facturas y demás documentos organizados facilita
                cualquier proceso de recuperación administrativa o judicial.
              </p>
            </div>

            <div>
              <h4>✔ Identificar oportunamente la cartera crítica</h4>

              <p>
                Clasificar las cuentas según antigüedad, valor, nivel de riesgo
                y comportamiento histórico de pago permite priorizar las
                acciones de recuperación.
              </p>
            </div>

            <div>
              <h4>✔ Realizar seguimiento permanente</h4>

              <p>
                El monitoreo continuo de los compromisos adquiridos por las
                entidades responsables del pago facilita la toma de decisiones
                antes de que la cartera continúe deteriorándose.
              </p>
            </div>

            <div>
              <h4>✔ Integrar las áreas financiera, jurídica y de cartera</h4>

              <p>
                La coordinación entre los diferentes equipos permite construir
                estrategias más eficientes para proteger el flujo de caja y
                optimizar los procesos de recaudo.
              </p>
            </div>

            <div>
              <h4>✔ Analizar cada caso de manera individual</h4>

              <p>
                No todas las obligaciones presentan las mismas características.
                Evaluar el estado de la documentación, la cuantía de la cartera
                y los riesgos asociados permite definir la estrategia más
                adecuada.
              </p>
            </div>

            <div>
              <h4>✔ Implementar indicadores de gestión</h4>

              <p>
                Medir tiempos de recuperación, porcentaje de recaudo, antigüedad
                de la cartera y comportamiento de los deudores facilita la
                mejora continua de los procesos financieros.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 Una estrategia integral de recuperación de cartera combina
            prevención, seguimiento administrativo, análisis financiero y,
            cuando las circunstancias lo requieren, mecanismos jurídicos
            orientados a proteger los recursos de la institución y mejorar la
            sostenibilidad económica.
          </div>
        </section>

        {/* APOYO SEO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Información adicional sobre cartera en el sector salud colombiano
          </h2>

          <p className={styles.text}>
            Si desea profundizar sobre recuperación de cartera, gestión de
            cuentas por cobrar y estrategias financieras para IPS y clínicas en
            Colombia, puede consultar el siguiente recurso especializado.
          </p>

          <div className={styles.highlightBox}>
            👉{" "}
            <a
              href="https://recaudodecartera.com/cartera-sector-salud.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver guía especializada sobre cartera en el sector salud
            </a>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Importancia de las medidas cautelares en la recuperación de cartera
          </h2>

          <div className={styles.benefits}>
            <span>✔ Protección preventiva del recaudo</span>
            <span>✔ Reducción del riesgo financiero</span>
            <span>✔ Fortalecimiento de estrategias jurídicas</span>
            <span>✔ Apoyo al flujo de caja institucional</span>
            <span>✔ Mayor control sobre procesos judiciales</span>
            <span>✔ Complemento de recuperación de cartera</span>
          </div>
        </section>

        {/* ERRORES FRECUENTES */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Errores frecuentes que pueden dificultar la recuperación de cartera
            frente a una EPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera requiere mucho más que iniciar un proceso
            de cobro. En numerosas ocasiones las dificultades aparecen desde
            etapas anteriores, como la facturación, la gestión documental o el
            seguimiento administrativo. Identificar estos errores permite
            reducir riesgos, fortalecer el recaudo y mejorar la liquidez de IPS,
            clínicas, hospitales y demás prestadores de servicios de salud.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Esperar demasiado para actuar",
                text: "Posponer la gestión de cobro o dejar acumular facturas vencidas puede disminuir las posibilidades de recuperación y aumentar la incertidumbre financiera.",
              },
              {
                title: "Documentación incompleta",
                text: "Historias clínicas, autorizaciones, soportes asistenciales o facturas con inconsistencias pueden generar retrasos en cualquier proceso de recuperación.",
              },
              {
                title: "Falta de seguimiento permanente",
                text: "No monitorear el estado de las cuentas por cobrar dificulta identificar oportunidades para gestionar oportunamente cada obligación.",
              },
              {
                title: "No clasificar la cartera por nivel de riesgo",
                text: "Analizar toda la cartera de la misma manera impide priorizar los casos con mayor impacto económico para la institución.",
              },
              {
                title: "Desarticulación entre áreas",
                text: "La ausencia de coordinación entre cartera, facturación, auditoría, jurídica y dirección financiera suele generar reprocesos y demoras.",
              },
              {
                title: "No contar con una estrategia integral",
                text: "Cada obligación presenta características diferentes. Definir una estrategia específica para cada caso permite optimizar los recursos y mejorar los resultados.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            <strong>Un aspecto importante:</strong> la recuperación de cartera
            no debe iniciarse únicamente cuando la obligación presenta largos
            periodos de mora. Implementar controles preventivos, indicadores
            financieros y procesos de seguimiento desde el momento de la
            radicación de la factura permite detectar riesgos con mayor
            anticipación y fortalecer la estabilidad financiera de la
            institución.
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre las medidas cautelares contra EPS y la
            recuperación de cartera
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Estas son algunas de las inquietudes más comunes que suelen tener
            las IPS, clínicas, hospitales y demás prestadores de servicios de
            salud cuando evalúan mecanismos jurídicos para fortalecer la
            recuperación de cartera frente a entidades responsables de pago.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>
                ✔ ¿Las medidas cautelares pueden solicitarse en cualquier
                proceso?
              </h4>

              <p>
                No necesariamente. Su procedencia depende del tipo de proceso,
                de los requisitos establecidos por la legislación colombiana y
                de las circunstancias particulares de cada caso. Antes de
                iniciar cualquier actuación resulta recomendable realizar un
                análisis jurídico completo.
              </p>
            </div>

            <div>
              <h4>
                ✔ ¿Las medidas cautelares garantizan que una EPS pagará la
                totalidad de la deuda?
              </h4>

              <p>
                No existe un mecanismo que garantice automáticamente el recaudo
                de una obligación. Las medidas cautelares constituyen
                herramientas de protección dentro de un proceso judicial, pero
                el resultado dependerá de múltiples factores jurídicos,
                financieros y probatorios.
              </p>
            </div>

            <div>
              <h4>
                ✔ ¿Es posible combinar la gestión administrativa con acciones
                judiciales?
              </h4>

              <p>
                En muchos casos la recuperación de cartera incorpora diferentes
                etapas, iniciando con procesos administrativos, conciliaciones y
                seguimiento, para posteriormente evaluar alternativas judiciales
                cuando las circunstancias así lo ameritan.
              </p>
            </div>

            <div>
              <h4>
                ✔ ¿Qué documentos suelen revisarse antes de iniciar una
                estrategia de recuperación?
              </h4>

              <p>
                Generalmente se analiza la facturación, los soportes
                asistenciales, las historias clínicas, autorizaciones, estados
                de cuenta, conciliaciones, glosas, pagos parciales y demás
                documentos que permitan determinar la viabilidad del proceso.
              </p>
            </div>

            <div>
              <h4>
                ✔ ¿Por qué es importante actuar oportunamente frente a una
                cartera vencida?
              </h4>

              <p>
                Un seguimiento oportuno facilita identificar riesgos, fortalecer
                las posibilidades de recuperación y disminuir el impacto
                financiero que puede generar una cartera con largos periodos de
                mora.
              </p>
            </div>

            <div>
              <h4>
                ✔ ¿Las IPS pequeñas también deberían evaluar este tipo de
                estrategias?
              </h4>

              <p>
                El tamaño de la institución no es el único factor relevante. Lo
                más importante es analizar el valor de la cartera, su
                antigüedad, la documentación disponible y el impacto que dichas
                cuentas tienen sobre el flujo de caja y la sostenibilidad
                financiera.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 Cada cartera presenta características diferentes. Por esta razón,
            una evaluación individual permite definir estrategias
            administrativas, financieras y jurídicas acordes con la realidad de
            cada IPS, clínica u hospital, optimizando las posibilidades de
            recuperación y reduciendo riesgos para la institución.
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Evalúe estrategias para proteger cartera EPS en Colombia
            </h2>

            <p className={styles.ctaText}>
              Analice mecanismos jurídicos y financieros orientados a proteger
              la sostenibilidad y el recaudo de cartera en IPS, clínicas y
              prestadores del sector salud.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Solicitar información
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
