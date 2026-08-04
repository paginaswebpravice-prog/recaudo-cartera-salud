"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function CarteraGlosadaContent() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Guía especializada sobre cartera glosada, glosas EPS y recuperación
            de cartera en Colombia
          </span>

          <h1 className={styles.title}>
            Cartera Glosada en Colombia: Cómo Reducir las Glosas EPS, Recuperar
            Cartera y Fortalecer el Flujo de Caja de IPS y Clínicas
          </h1>

          <p className={styles.description}>
            La <strong>cartera glosada</strong> representa uno de los
            principales desafíos financieros para las IPS, clínicas, hospitales
            y demás prestadores de servicios de salud en Colombia. Cuando una
            EPS realiza una glosa sobre una factura, el pago puede retrasarse
            durante semanas o incluso meses, afectando directamente el flujo de
            caja, la liquidez y la capacidad operativa de la institución.
          </p>

          <p className={styles.description}>
            En esta guía encontrará información sobre las principales causas de
            las
            <strong> glosas EPS</strong>, los diferentes tipos de glosas que
            existen, su impacto financiero, las mejores prácticas para disminuir
            su incidencia y diversas estrategias que permiten optimizar la
            recuperación de cartera, mejorar los procesos de facturación y
            fortalecer la sostenibilidad financiera de las instituciones del
            sector salud colombiano.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar orientación especializada
            </a>

            <a
              href="https://recaudodecartera.com/cobro-glosas-eps-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Conocer soluciones para glosas EPS
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= QUÉ ES LA CARTERA GLOSADA ================= */}

      <section className={styles.section}>
        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Qué es la cartera glosada y por qué representa uno de los mayores
          desafíos financieros para las IPS, clínicas y hospitales en Colombia?
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          La <strong>cartera glosada</strong> corresponde al conjunto de
          facturas presentadas por una IPS, clínica u hospital que han sido
          objetadas parcial o totalmente por una EPS durante el proceso de
          auditoría de cuentas médicas. Estas objeciones pueden estar
          relacionadas con aspectos administrativos, inconsistencias en la
          facturación, soportes documentales, diferencias tarifarias, criterios
          de pertinencia médica o cualquier otra situación que impida el
          reconocimiento inmediato del valor facturado.
        </motion.p>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Aunque una glosa no significa necesariamente que la factura vaya a
          perderse, sí implica que el proceso de recaudo se prolongará hasta que
          exista una respuesta, conciliación o decisión definitiva. Mientras
          esto ocurre, los recursos permanecen retenidos y la institución debe
          continuar atendiendo sus obligaciones financieras, administrativas y
          asistenciales sin contar con el ingreso esperado.
        </motion.p>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          En Colombia, el comportamiento de la cartera glosada se ha convertido
          en uno de los principales indicadores de la salud financiera de las
          instituciones prestadoras de servicios de salud. Un alto porcentaje de
          glosas puede reflejar oportunidades de mejora en procesos internos,
          facturación, auditoría médica, radicación de cuentas, gestión
          documental o seguimiento administrativo.
        </motion.p>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Por esta razón, muchas organizaciones del sector salud buscan
          fortalecer sus procedimientos de control y recuperación de cartera
          para reducir el número de glosas, responder oportunamente los
          requerimientos de las EPS y mejorar los tiempos de recaudo. Una
          administración adecuada permite optimizar el flujo de caja, disminuir
          riesgos financieros y generar mayor estabilidad para la prestación
          continua de los servicios de salud.
        </motion.p>

        <div className={styles.grid}>
          {[
            {
              title: "Glosas administrativas",
              text: "Relacionadas con errores en datos del paciente, autorizaciones, radicación, contratos, códigos o documentación requerida por la EPS.",
            },
            {
              title: "Glosas médicas",
              text: "Surgen durante la auditoría clínica cuando la EPS cuestiona la pertinencia, oportunidad o soporte de los servicios prestados.",
            },
            {
              title: "Glosas tarifarias",
              text: "Se presentan cuando existen diferencias en la aplicación de tarifas, manuales tarifarios, acuerdos comerciales o valores facturados.",
            },
            {
              title: "Glosas documentales",
              text: "Ocurren por ausencia, inconsistencia o incompletitud de historias clínicas, soportes médicos o documentos exigidos para el reconocimiento del pago.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
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
          Una cartera glosada controlada no solo favorece el recaudo de las
          cuentas por cobrar. También mejora la liquidez institucional, facilita
          la planeación financiera, reduce reprocesos administrativos y
          fortalece la sostenibilidad de IPS, clínicas y hospitales que dependen
          de un flujo de ingresos constante para garantizar la continuidad en la
          atención de los pacientes.
        </div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* ================= PROBLEMÁTICA ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Principales causas que generan cartera glosada y retrasan el recaudo
            de las IPS, clínicas y hospitales en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            La aparición de glosas no suele obedecer a una única causa. En la
            mayoría de los casos es el resultado de diferentes factores
            administrativos, asistenciales, documentales y financieros que,
            cuando no se controlan de forma adecuada, incrementan el volumen de
            cuentas pendientes de pago y afectan directamente la liquidez
            institucional.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprender el origen de las glosas permite identificar oportunidades
            de mejora, fortalecer los procesos internos y reducir
            significativamente los tiempos de recuperación de cartera frente a
            las EPS.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Errores en la facturación",
                text: "Inconsistencias en códigos, tarifas, autorizaciones, fechas o datos administrativos pueden generar objeciones desde el primer proceso de auditoría realizado por la EPS.",
              },
              {
                title: "Soportes clínicos incompletos",
                text: "Historias clínicas, órdenes médicas, evoluciones o documentos faltantes dificultan la validación de los servicios prestados y retrasan el reconocimiento económico.",
              },
              {
                title: "Respuesta tardía a las glosas",
                text: "No responder dentro de los tiempos establecidos puede aumentar el riesgo de pérdida del recaudo y prolongar innecesariamente los procesos de conciliación.",
              },
              {
                title: "Falta de seguimiento permanente",
                text: "Muchas instituciones radican las respuestas pero no realizan un seguimiento continuo hasta obtener una decisión definitiva por parte de la EPS.",
              },
              {
                title: "Procesos manuales",
                text: "La ausencia de herramientas tecnológicas dificulta controlar grandes volúmenes de cuentas, vencimientos, estados de las glosas y compromisos adquiridos.",
              },
              {
                title: "Débil coordinación entre áreas",
                text: "Facturación, auditoría médica, cartera y jurídico deben trabajar de forma coordinada para resolver oportunamente las diferencias presentadas durante el proceso de cobro.",
              },
              {
                title: "Conciliaciones prolongadas",
                text: "Las negociaciones extensas entre IPS y EPS retrasan el ingreso efectivo de recursos y afectan la planeación financiera de la institución.",
              },
              {
                title: "Acumulación de cartera retenida",
                text: "Cuando las glosas aumentan mes tras mes, la cartera comienza a deteriorarse y la recuperación se vuelve más compleja desde el punto de vista financiero.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Además de las causas técnicas, también existen factores
            organizacionales que influyen directamente en el comportamiento de
            la cartera glosada. La falta de indicadores, procedimientos
            estandarizados, auditorías preventivas y controles internos puede
            incrementar considerablemente el porcentaje de cuentas objetadas por
            las EPS, generando un efecto acumulativo sobre el flujo de caja
            institucional.
          </motion.p>

          <motion.div
            className={styles.warningBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Una cartera glosada creciente no solo retrasa el ingreso de
            recursos. También incrementa los costos administrativos, obliga a
            destinar más personal al seguimiento de las cuentas, dificulta la
            planeación financiera y puede comprometer la capacidad de inversión
            de las IPS, clínicas y hospitales en nuevos servicios,
            infraestructura, tecnología y talento humano.
          </motion.div>
        </section>

        {/* ================= IMPACTO FINANCIERO ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cómo afectan las glosas EPS el flujo de caja, la liquidez y la
            sostenibilidad financiera de las IPS, clínicas y hospitales?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            El verdadero impacto de una glosa va mucho más allá del valor
            económico de una factura. Cada cuenta que permanece pendiente de
            conciliación representa recursos que la institución esperaba recibir
            para cubrir su operación diaria. Cuando el volumen de glosas aumenta
            de forma constante, el flujo de ingresos comienza a deteriorarse y
            la capacidad financiera de la organización puede verse comprometida.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            En muchas IPS, clínicas y hospitales, una parte importante de la
            liquidez depende del recaudo oportuno de las cuentas presentadas a
            las EPS. Cuando dichos recursos permanecen retenidos durante largos
            periodos debido a glosas, devoluciones o procesos de conciliación,
            la administración debe buscar alternativas para mantener la
            continuidad de los servicios, incrementando la presión sobre la
            tesorería y la planeación financiera.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Disminución del flujo de caja</h4>

              <p>
                Los pagos demorados reducen la disponibilidad de recursos para
                cubrir las obligaciones diarias, afectando la estabilidad
                financiera de la institución.
              </p>
            </div>

            <div>
              <h4>✔ Incremento de la cartera vencida</h4>

              <p>
                Las glosas que permanecen sin resolver durante largos periodos
                pueden convertirse en cuentas de difícil recuperación,
                aumentando el riesgo financiero.
              </p>
            </div>

            <div>
              <h4>✔ Mayor carga administrativa</h4>

              <p>
                Los equipos de cartera, facturación, auditoría médica y jurídico
                deben destinar más tiempo al seguimiento de cada caso,
                reduciendo la productividad operativa.
              </p>
            </div>

            <div>
              <h4>✔ Retraso en proyectos de inversión</h4>

              <p>
                La incertidumbre sobre el ingreso de recursos puede aplazar
                inversiones en infraestructura, equipos biomédicos, tecnología y
                ampliación de servicios asistenciales.
              </p>
            </div>

            <div>
              <h4>✔ Incremento del riesgo operativo</h4>

              <p>
                Una menor liquidez limita la capacidad para responder
                oportunamente a proveedores, contratistas y demás compromisos
                financieros necesarios para la prestación continua de los
                servicios de salud.
              </p>
            </div>

            <div>
              <h4>✔ Menor capacidad de crecimiento</h4>

              <p>
                Cuando gran parte de la cartera permanece retenida por glosas,
                resulta más difícil desarrollar nuevos proyectos, fortalecer la
                operación o expandir la cobertura institucional.
              </p>
            </div>
          </div>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Aunque muchas glosas terminan siendo conciliadas favorablemente para
            la institución prestadora de servicios de salud, el tiempo
            transcurrido entre la radicación de la factura y el pago definitivo
            puede afectar indicadores financieros relevantes como la rotación de
            cartera, el capital de trabajo, la liquidez corriente y la capacidad
            de inversión.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Por esta razón, las organizaciones con mejores resultados
            financieros no solo trabajan en recuperar las glosas existentes.
            También implementan estrategias preventivas que buscan disminuir su
            ocurrencia mediante auditorías internas, mejora continua de la
            facturación, capacitación del personal y seguimiento permanente a
            cada cuenta presentada ante las EPS.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Una gestión eficiente de las glosas no solo acelera el recaudo.
            También fortalece la liquidez, mejora la rotación de cartera, reduce
            costos administrativos y contribuye a la sostenibilidad financiera
            de las IPS, clínicas y hospitales en Colombia.
          </motion.div>
        </section>

        {/* ================= TIPOS DE GLOSAS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tipos de glosas más frecuentes en Colombia y cómo influyen en la
            recuperación de cartera de las IPS, clínicas y hospitales
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            No todas las glosas tienen el mismo origen ni generan el mismo
            impacto financiero. Algunas corresponden a aspectos puramente
            administrativos, mientras que otras están relacionadas con la
            auditoría médica, diferencias contractuales o inconsistencias en la
            facturación. Identificar correctamente el tipo de glosa permite
            establecer estrategias más eficientes para su respuesta,
            conciliación y recuperación.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Glosas administrativas",
                text: "Se presentan por errores en la radicación de cuentas, autorizaciones, identificación del paciente, fechas, contratos, códigos o requisitos documentales exigidos por la EPS.",
              },
              {
                title: "Glosas médicas",
                text: "Surgen cuando la auditoría médica cuestiona la pertinencia, necesidad, oportunidad o justificación clínica de los procedimientos, tratamientos o servicios prestados.",
              },
              {
                title: "Glosas tarifarias",
                text: "Están relacionadas con diferencias en los valores facturados, aplicación de manuales tarifarios, acuerdos contractuales o interpretación de tarifas entre la EPS y la IPS.",
              },
              {
                title: "Glosas por soportes",
                text: "Ocurren cuando faltan historias clínicas, órdenes médicas, resultados diagnósticos, consentimientos informados u otros documentos que respaldan la prestación del servicio.",
              },
              {
                title: "Glosas por pertinencia",
                text: "La EPS considera que algunos procedimientos no cumplen los criterios clínicos o administrativos establecidos para reconocer el pago correspondiente.",
              },
              {
                title: "Glosas por inconsistencias en la facturación",
                text: "Incluyen errores en cantidades, códigos CUPS, medicamentos, insumos, fechas de atención, duplicidad de cobros o diferencias entre la historia clínica y la factura presentada.",
              },
              {
                title: "Glosas contractuales",
                text: "Se originan cuando existen diferencias en la interpretación de las obligaciones pactadas entre la EPS y la institución prestadora de servicios de salud.",
              },
              {
                title: "Glosas por cobertura",
                text: "Corresponden a objeciones relacionadas con servicios que la EPS considera excluidos, no autorizados o que no hacen parte del alcance contractual vigente.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            En la práctica, una misma factura puede contener diferentes tipos de
            glosas, por lo que su gestión requiere la participación coordinada
            de áreas como facturación, auditoría médica, cartera, contratación y
            jurídico. Un análisis integral facilita la preparación de respuestas
            sólidas y aumenta las probabilidades de lograr una conciliación
            favorable.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Además de responder oportunamente las objeciones, resulta
            conveniente analizar periódicamente cuáles son las glosas que se
            presentan con mayor frecuencia. Esta información permite identificar
            patrones, corregir procesos internos, fortalecer la calidad de la
            facturación y reducir progresivamente el porcentaje de cuentas
            objetadas por las EPS.
          </motion.p>

          <div className={styles.highlightBox}>
            Las instituciones que realizan seguimiento permanente a las causas
            de las glosas suelen mejorar sus indicadores de recaudo, disminuir
            la cartera retenida y fortalecer la eficiencia de sus procesos
            administrativos y financieros.
          </div>
        </section>

        {/* ================= ESTRATEGIAS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Estrategias para disminuir la cartera glosada y fortalecer la
            recuperación de cuentas por cobrar en el sector salud
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Reducir el volumen de glosas no depende únicamente de responder las
            objeciones realizadas por las EPS. Los mejores resultados suelen
            obtenerse cuando la institución implementa una estrategia integral
            que involucra la calidad de la facturación, la auditoría preventiva,
            la gestión documental, el seguimiento permanente de las cuentas y el
            análisis continuo de los indicadores de recaudo.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Fortalecer la auditoría preventiva</h4>

              <p>
                Revisar previamente las cuentas antes de su radicación ayuda a
                detectar inconsistencias administrativas, clínicas y
                documentales que podrían convertirse posteriormente en glosas.
              </p>
            </div>

            <div>
              <h4>✔ Optimizar los procesos de facturación</h4>

              <p>
                La estandarización de procedimientos, la validación de soportes
                y el control de calidad reducen significativamente los errores
                que generan objeciones por parte de las EPS.
              </p>
            </div>

            <div>
              <h4>✔ Realizar seguimiento permanente</h4>

              <p>
                Cada glosa debe contar con un control sobre fechas de respuesta,
                estado del trámite, compromisos adquiridos y resultados
                obtenidos durante las conciliaciones.
              </p>
            </div>

            <div>
              <h4>✔ Analizar indicadores de cartera</h4>

              <p>
                Medir periódicamente el comportamiento de las glosas permite
                identificar tendencias, priorizar acciones y tomar decisiones
                basadas en información objetiva.
              </p>
            </div>

            <div>
              <h4>✔ Capacitar al talento humano</h4>

              <p>
                Mantener actualizado al personal encargado de facturación,
                auditoría, cartera y contratación disminuye los errores
                operativos y mejora la calidad del proceso de recaudo.
              </p>
            </div>

            <div>
              <h4>✔ Integrar las diferentes áreas</h4>

              <p>
                La coordinación entre facturación, auditoría médica, cartera y
                jurídico facilita respuestas más sólidas y acelera la
                recuperación de los recursos pendientes.
              </p>
            </div>
          </div>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Además de implementar controles internos, resulta conveniente
            establecer mecanismos de seguimiento que permitan conocer cuáles EPS
            generan el mayor volumen de glosas, cuáles son las causas más
            frecuentes y cuáles procesos internos requieren fortalecimiento.
            Esta información facilita la toma de decisiones y permite enfocar
            los esfuerzos en las áreas que generan un mayor impacto financiero.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Una adecuada gestión de la cartera glosada también favorece la
            relación entre las instituciones prestadoras de servicios de salud y
            las entidades responsables del pago, ya que promueve procesos de
            conciliación más ágiles, reduce reprocesos administrativos y
            contribuye a mejorar la eficiencia del recaudo.
          </motion.p>

          <div className={styles.resourcesBox}>
            <a
              href="https://recaudodecartera.com/cobro-glosas-eps-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Conozca estrategias especializadas para la gestión y recuperación
              de glosas EPS en Colombia
            </a>

            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Descubra soluciones para optimizar la recuperación de cartera de
              IPS, clínicas y hospitales
            </a>

            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Explore más recursos especializados sobre recaudo, cartera
              hospitalaria y sostenibilidad financiera en el sector salud
              colombiano
            </a>
          </div>

          <div className={styles.highlightBox}>
            La reducción de la cartera glosada es un proceso continuo que
            combina prevención, seguimiento, análisis de indicadores y mejora
            permanente de los procesos administrativos, financieros y
            asistenciales. Las instituciones que trabajan de forma sistemática
            sobre estos aspectos suelen lograr mejores niveles de recaudo, menor
            cartera retenida y una mayor estabilidad financiera.
          </div>
        </section>

        {/* ================= BENEFICIOS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Beneficios de implementar una gestión eficiente de la cartera
            glosada en IPS, clínicas y hospitales
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Una adecuada administración de la cartera glosada no solo busca
            recuperar recursos pendientes de pago. También permite fortalecer la
            estabilidad financiera de la institución, optimizar los procesos
            internos y mejorar la capacidad de respuesta frente a las exigencias
            del sistema de salud colombiano. Cuando la gestión de glosas forma
            parte de una estrategia integral de recaudo, sus beneficios impactan
            diferentes áreas de la organización.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Mayor liquidez institucional",
                text: "La disminución de los tiempos de recuperación de cartera permite contar con mayores recursos disponibles para atender las obligaciones operativas y financieras.",
              },
              {
                title: "Reducción de la cartera retenida",
                text: "El seguimiento permanente a las glosas facilita resolver objeciones oportunamente y evita que las cuentas permanezcan inmovilizadas durante largos periodos.",
              },
              {
                title: "Optimización del flujo de caja",
                text: "Un mejor comportamiento del recaudo permite planificar con mayor precisión la ejecución presupuestal y las necesidades de tesorería.",
              },
              {
                title: "Menor carga administrativa",
                text: "La estandarización de procesos disminuye reprocesos, reduce tiempos de respuesta y mejora la eficiencia de los equipos encargados de cartera y facturación.",
              },
              {
                title: "Mayor control documental",
                text: "La correcta organización de soportes clínicos y administrativos facilita responder glosas con mayor rapidez y fortalece la trazabilidad de cada cuenta.",
              },
              {
                title: "Mejora continua",
                text: "El análisis periódico de indicadores permite identificar oportunidades de mejora y fortalecer progresivamente los procesos internos.",
              },
              {
                title: "Mayor capacidad de inversión",
                text: "Una cartera más sana favorece la disponibilidad de recursos para invertir en infraestructura, tecnología, equipos biomédicos y nuevos servicios.",
              },
              {
                title: "Sostenibilidad financiera",
                text: "La combinación de mejores procesos de facturación, seguimiento y recuperación de cartera contribuye a una operación financiera más estable y sostenible.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Además de los beneficios financieros, una gestión organizada de la
            cartera glosada fortalece la capacidad de análisis de la
            institución, mejora la coordinación entre las diferentes áreas
            involucradas en el proceso de facturación y recaudo, facilita la
            toma de decisiones basada en indicadores y contribuye a ofrecer una
            atención continua y de calidad a los pacientes.
          </motion.p>

          <div className={styles.highlightBox}>
            Gestionar correctamente las glosas no consiste únicamente en
            recuperar una factura pendiente. Se trata de fortalecer toda la
            cadena de facturación, auditoría, seguimiento y recaudo para
            construir una institución más eficiente, competitiva y
            financieramente sostenible.
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}

        <section id="contacto" className={styles.cta}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>
              ¿Su IPS, clínica u hospital enfrenta problemas por cartera glosada
              o retrasos en el pago de las EPS?
            </h2>

            <p className={styles.ctaText}>
              Una cartera glosada elevada puede afectar la liquidez, retrasar
              proyectos de crecimiento, incrementar la carga administrativa y
              poner en riesgo la estabilidad financiera de cualquier institución
              prestadora de servicios de salud. Contar con procesos organizados
              de auditoría, seguimiento, conciliación y recuperación de cartera
              permite reducir tiempos de recaudo, disminuir pérdidas y mejorar
              la disponibilidad de recursos para la operación diaria.
            </p>

            <p className={styles.ctaText}>
              Si desea conocer alternativas especializadas para fortalecer la
              gestión de glosas, optimizar el recaudo y mejorar el flujo de caja
              de su institución, puede acceder a información adicional sobre
              recuperación de cartera, conciliación de glosas y estrategias
              jurídicas enfocadas en el sector salud colombiano.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Solicitar orientación especializada
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Hablar con un especialista
              </a>
            </div>

            <motion.div
              className={styles.highlightBox}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              La gestión eficiente de la cartera glosada no solo contribuye a
              recuperar recursos pendientes. También fortalece la sostenibilidad
              financiera, mejora los procesos internos de facturación y
              auditoría, optimiza el recaudo frente a las EPS y ayuda a
              construir instituciones de salud más competitivas, organizadas y
              preparadas para afrontar los desafíos del sistema de salud
              colombiano.
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
