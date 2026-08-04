"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function HospitalesContent() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Contenido especializado para hospitales públicos y privados en
            Colombia
          </span>

          <h1 className={styles.title}>
            Recuperación de cartera para hospitales en Colombia: estrategias
            para fortalecer el flujo de caja y garantizar la sostenibilidad
            financiera
          </h1>

          <p className={styles.description}>
            Los hospitales colombianos enfrentan diariamente importantes
            desafíos relacionados con la recuperación de cartera, la liquidez y
            la estabilidad financiera. Los retrasos en los pagos por parte de
            las EPS, las glosas, los procesos de auditoría y el crecimiento de
            las cuentas por cobrar generan una presión constante sobre la
            operación, afectando la capacidad para mantener servicios oportunos,
            invertir en infraestructura y responder a las necesidades del
            sistema de salud.
          </p>

          <p className={styles.description}>
            En esta guía encontrará información especializada sobre gestión de
            cartera hospitalaria, recaudo de cuentas por cobrar, flujo de caja,
            sostenibilidad financiera e indicadores que ayudan a fortalecer la
            operación de hospitales públicos y privados en Colombia mediante una
            administración más eficiente de los recursos.
          </p>

          <div className={styles.actions}>
            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-hospitales.html"
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocer la solución especializada
            </a>

            <a
              href="https://recaudodecartera.com/"
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorar el portal especializado
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENIDO ================= */}

      <main className={styles.container}>
        {/* ================= CONTEXTO HOSPITALARIO ================= */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cuáles son los principales desafíos financieros que enfrentan los
            hospitales en Colombia?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Los hospitales desempeñan un papel esencial dentro del sistema de
            salud colombiano al garantizar la atención de millones de pacientes
            cada año. Sin embargo, además de los retos asistenciales, también
            deben enfrentar desafíos financieros que pueden afectar su capacidad
            para operar con eficiencia, mantener la calidad de los servicios y
            planificar nuevas inversiones.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            La acumulación de cuentas por cobrar, los retrasos en los pagos por
            parte de las EPS, las glosas, las auditorías médicas y la creciente
            presión sobre los costos operativos hacen que la gestión de cartera
            hospitalaria sea un aspecto determinante para garantizar la
            sostenibilidad financiera de hospitales públicos y privados.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Incremento de la cartera hospitalaria",
                text: "Las cuentas por cobrar que permanecen pendientes durante largos periodos afectan directamente la liquidez disponible para la operación diaria.",
              },
              {
                title: "Retrasos en pagos por parte de las EPS",
                text: "Los tiempos prolongados de recaudo dificultan la planeación financiera y limitan la disponibilidad de recursos para atender nuevas necesidades.",
              },
              {
                title: "Glosas y devoluciones",
                text: "Los procesos de revisión y auditoría generan demoras adicionales que impactan el ingreso efectivo de los recursos facturados.",
              },
              {
                title: "Incremento de los costos asistenciales",
                text: "Los hospitales deben asumir continuamente gastos relacionados con personal, medicamentos, equipos médicos e infraestructura.",
              },
              {
                title: "Mayor presión sobre el flujo de caja",
                text: "Cuando los recursos no ingresan oportunamente, la administración debe priorizar permanentemente el uso del efectivo disponible.",
              },
              {
                title: "Necesidad de fortalecer la gestión financiera",
                text: "La toma de decisiones basada en indicadores y seguimiento continuo permite reducir riesgos y mejorar la sostenibilidad institucional.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 25 }}
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

          <motion.div
            className={styles.warningBox}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>
              Facturar más no siempre significa contar con mayor liquidez.
            </strong>{" "}
            Cuando una parte importante de los recursos permanece en cartera,
            los hospitales pueden enfrentar dificultades para responder con
            agilidad a las necesidades operativas, realizar inversiones y
            garantizar la continuidad de los servicios de salud.
          </motion.div>
        </section>

        {/* IMPACTO */}
        {/* ================= IMPACTO FINANCIERO ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cómo influye la recuperación de cartera en el flujo de caja y la
            sostenibilidad financiera de los hospitales?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La estabilidad financiera de un hospital depende de múltiples
            factores, pero uno de los más relevantes es la capacidad para
            convertir oportunamente las cuentas por cobrar en recursos
            disponibles. Cuando la cartera comienza a crecer de manera
            descontrolada, la institución enfrenta mayores dificultades para
            atender sus obligaciones operativas y mantener un flujo de caja
            estable.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Una gestión eficiente de la cartera hospitalaria no solo favorece el
            recaudo de los valores pendientes. También contribuye a mejorar la
            planificación financiera, fortalecer la liquidez, disminuir la
            incertidumbre administrativa y generar condiciones que permitan a
            los hospitales continuar prestando servicios de salud con mayor
            estabilidad y eficiencia.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "Mayor liquidez para la operación diaria",
                text: "El recaudo oportuno facilita el cumplimiento de obligaciones con proveedores, contratistas, talento humano, medicamentos, dispositivos médicos y demás gastos indispensables para la operación hospitalaria.",
              },
              {
                title: "Capacidad para invertir en infraestructura",
                text: "Una cartera controlada permite destinar recursos a la modernización de equipos biomédicos, ampliación de instalaciones y fortalecimiento de los servicios asistenciales.",
              },
              {
                title: "Disminución del riesgo financiero",
                text: "Reducir la cartera vencida ayuda a disminuir la dependencia de fuentes externas de financiación y fortalece la estabilidad económica del hospital.",
              },
              {
                title: "Mejor planificación presupuestal",
                text: "Contar con ingresos más previsibles facilita la elaboración de presupuestos y la ejecución de proyectos de crecimiento institucional.",
              },
              {
                title: "Mayor eficiencia administrativa",
                text: "El seguimiento permanente de la cartera permite identificar cuentas críticas, establecer prioridades y optimizar la gestión financiera.",
              },
              {
                title: "Sostenibilidad en el largo plazo",
                text: "La recuperación constante de cartera fortalece la capacidad del hospital para mantener la continuidad de los servicios y afrontar nuevos desafíos del sector salud.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.h3
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            Consecuencias de una cartera hospitalaria con bajo nivel de
            recuperación
          </motion.h3>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Cuando las cuentas por cobrar permanecen pendientes durante largos
            periodos, los hospitales pueden enfrentar retrasos en proyectos de
            inversión, mayores costos financieros, limitaciones para incorporar
            nuevas tecnologías y una presión constante sobre la administración
            del efectivo. Además, la incertidumbre sobre el ingreso de recursos
            dificulta la toma de decisiones estratégicas y la planeación de
            mediano y largo plazo.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
          >
            Por esta razón, fortalecer la gestión de cartera no solo representa
            una oportunidad para mejorar el recaudo. También constituye una
            estrategia orientada a preservar la sostenibilidad financiera,
            optimizar la utilización de los recursos disponibles y garantizar
            que la institución pueda responder oportunamente a las necesidades
            de los pacientes y del sistema de salud colombiano.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>
              Una adecuada gestión de cartera hospitalaria fortalece mucho más
              que el recaudo.
            </strong>{" "}
            También mejora la liquidez, facilita la planeación financiera,
            incrementa la capacidad de inversión y contribuye a que los
            hospitales mantengan una operación estable, eficiente y sostenible
            en beneficio de los pacientes y del sistema de salud.
          </motion.div>
        </section>

        {/* ================= ESTRATEGIAS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Estrategias para fortalecer la recuperación de cartera en hospitales
            y mejorar el recaudo de cuentas por cobrar
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera hospitalaria requiere una estrategia
            integral que combine procesos administrativos, análisis financiero,
            seguimiento permanente y, cuando resulte necesario, mecanismos
            jurídicos especializados. Más allá de recuperar valores pendientes,
            el objetivo es construir un proceso sostenible que permita reducir
            los tiempos de recaudo y fortalecer la estabilidad financiera de la
            institución.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Los hospitales que implementan metodologías estructuradas para la
            gestión de cartera suelen mejorar la visibilidad sobre sus cuentas
            por cobrar, priorizar las obligaciones de mayor riesgo y optimizar
            el uso de los recursos disponibles para garantizar la continuidad de
            la atención en salud.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Seguimiento permanente a las cuentas por cobrar",
                text: "Realizar controles periódicos facilita detectar retrasos desde las primeras etapas y definir acciones antes de que la cartera continúe envejeciendo.",
              },
              {
                title: "Gestión oportuna de glosas y devoluciones",
                text: "Responder de forma ágil a las observaciones administrativas contribuye a disminuir tiempos de recaudo y reducir reprocesos.",
              },
              {
                title: "Conciliación continua con las EPS",
                text: "Las conciliaciones periódicas ayudan a resolver diferencias documentales y agilizan el reconocimiento de las obligaciones pendientes.",
              },
              {
                title: "Control de indicadores financieros",
                text: "Monitorear el comportamiento de la cartera permite identificar tendencias, establecer prioridades y medir la efectividad del proceso de recuperación.",
              },
              {
                title:
                  "Apoyo jurídico cuando la gestión administrativa no es suficiente",
                text: "En determinados casos, complementar el recaudo con estrategias jurídicas especializadas puede contribuir a proteger los intereses financieros del hospital.",
              },
              {
                title: "Automatización y análisis de la información",
                text: "El uso de herramientas tecnológicas facilita el seguimiento de las cuentas, reduce tareas manuales y mejora la toma de decisiones basada en datos.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 25 }}
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

          <motion.h3
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Errores que pueden incrementar la cartera vencida en los hospitales
          </motion.h3>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            En muchas ocasiones, el crecimiento de la cartera no obedece a un
            único factor, sino a la acumulación de pequeños inconvenientes
            administrativos que, con el tiempo, terminan afectando el recaudo.
            Identificar estos aspectos permite implementar acciones preventivas
            y fortalecer la gestión financiera de la institución.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "Falta de seguimiento continuo",
                text: "Esperar demasiado tiempo para iniciar la gestión disminuye las probabilidades de recuperación oportuna.",
              },
              {
                title: "Ausencia de indicadores",
                text: "No medir el comportamiento de la cartera dificulta identificar prioridades y evaluar resultados.",
              },
              {
                title: "Procesos excesivamente manuales",
                text: "La falta de automatización incrementa errores administrativos y retrasa la toma de decisiones.",
              },
              {
                title: "Gestión reactiva",
                text: "Actuar únicamente cuando la cartera ya presenta un alto nivel de vencimiento suele aumentar la complejidad del recaudo.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.resourcesBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p className={styles.text}>
              Si desea profundizar en estrategias de recuperación de cartera,
              conciliación con EPS, gestión de cuentas por cobrar, recaudo y
              fortalecimiento del flujo de caja hospitalario, puede consultar
              nuestros recursos especializados para hospitales e IPS.
            </motion.p>

            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-hospitales.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Recuperación de cartera para hospitales e IPS
            </a>

            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Explorar el portal especializado
            </a>
          </motion.div>
        </section>

        {/* ================= INDICADORES ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Indicadores que permiten evaluar la gestión de cartera y la
            sostenibilidad financiera de un hospital
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La administración eficiente de un hospital no depende únicamente del
            volumen de pacientes atendidos o de la facturación generada. También
            requiere analizar permanentemente indicadores que permitan conocer
            el comportamiento de la cartera, la velocidad del recaudo y el
            impacto que estos tienen sobre el flujo de caja y la estabilidad
            financiera de la institución.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            El seguimiento continuo de estos indicadores facilita la toma de
            decisiones estratégicas, ayuda a identificar riesgos de manera
            anticipada y permite implementar acciones correctivas antes de que
            los problemas financieros afecten la prestación de los servicios de
            salud.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Rotación de cartera",
                text: "Permite conocer el tiempo promedio que tarda el hospital en recuperar los valores facturados y convertirlos en recursos disponibles.",
              },
              {
                title: "Días promedio de recaudo",
                text: "Ayuda a medir la eficiencia del proceso de cobro y facilita comparar la evolución del comportamiento financiero en diferentes periodos.",
              },
              {
                title: "Porcentaje de cartera vencida",
                text: "Permite identificar el peso que tienen las obligaciones vencidas dentro del total de las cuentas por cobrar.",
              },
              {
                title: "Índice de recuperación",
                text: "Evalúa la efectividad de las acciones implementadas para recuperar cartera y mejorar la liquidez institucional.",
              },
              {
                title: "Comportamiento del flujo de caja",
                text: "Facilita conocer la disponibilidad real de recursos para garantizar la continuidad de la operación hospitalaria.",
              },
              {
                title: "Nivel de liquidez",
                text: "Permite evaluar la capacidad del hospital para atender oportunamente sus obligaciones financieras y operativas.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 25 }}
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

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>Medir es tan importante como recuperar.</strong> El análisis
            permanente de indicadores financieros permite tomar decisiones
            oportunas, optimizar la gestión de cartera y fortalecer la
            sostenibilidad financiera de los hospitales en un entorno cada vez
            más exigente.
          </motion.div>
        </section>

        {/* ================= FAQ VISIBLES ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre la recuperación de cartera en hospitales
          </motion.h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "¿Por qué aumenta la cartera hospitalaria?",
                text: "Generalmente por retrasos en los pagos, glosas, devoluciones de facturación, auditorías médicas y procesos administrativos que prolongan el recaudo.",
              },
              {
                title: "¿Cómo influye la cartera en el flujo de caja?",
                text: "Mientras mayor sea la cartera pendiente, menor será la disponibilidad de recursos para cubrir la operación diaria y realizar nuevas inversiones.",
              },
              {
                title: "¿Qué beneficios aporta una buena gestión de cartera?",
                text: "Permite mejorar la liquidez, reducir riesgos financieros, fortalecer la sostenibilidad institucional y facilitar la planeación presupuestal.",
              },
              {
                title:
                  "¿Es importante hacer seguimiento permanente a las cuentas por cobrar?",
                text: "Sí. El monitoreo continuo facilita identificar retrasos, priorizar acciones de recaudo y evitar que las obligaciones envejezcan innecesariamente.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}

        <section className={styles.cta}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>
              Fortalezca la recuperación de cartera y la estabilidad financiera
              de su hospital
            </h2>

            <p className={styles.ctaText}>
              Descubra estrategias especializadas para optimizar la gestión de
              cartera hospitalaria, mejorar el recaudo de cuentas por cobrar,
              fortalecer el flujo de caja y contribuir a la sostenibilidad
              financiera de hospitales públicos y privados en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://recaudodecartera.com/"
                className={styles.primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al portal especializado
              </a>

              <a
                href="https://recaudodecartera.com/recuperacion-cartera-ips-hospitales.html"
                className={styles.secondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer la solución para hospitales
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
