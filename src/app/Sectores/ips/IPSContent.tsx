"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function IPSContent() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Guía especializada para Instituciones Prestadoras de Servicios de
            Salud
          </span>

          <h1 className={styles.title}>
            IPS en Colombia: cómo fortalecer la recuperación de cartera, mejorar
            el flujo de caja y lograr una mayor sostenibilidad financiera
          </h1>

          <p className={styles.description}>
            Las Instituciones Prestadoras de Servicios de Salud (IPS) desempeñan
            un papel esencial dentro del sistema de salud colombiano. Sin
            embargo, muchas enfrentan retos relacionados con la recuperación de
            cartera, las glosas, los retrasos en los pagos por parte de las EPS
            y la necesidad de mantener un flujo de caja que garantice la
            continuidad de la prestación de los servicios.
          </p>

          <p className={styles.description}>
            En esta guía encontrará información especializada sobre gestión de
            cartera, recaudo de cuentas por cobrar, sostenibilidad financiera,
            administración del riesgo y estrategias que contribuyen a optimizar
            la liquidez y fortalecer la estabilidad económica de las IPS en
            Colombia.
          </p>

          <div className={styles.actions}>
            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Conocer la solución para IPS
            </a>

            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Explorar el portal especializado
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENIDO ================= */}

      <main className={styles.container}>
        {/* ================= DESAFÍOS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Principales desafíos que enfrentan las IPS para mantener una
            operación financiera sostenible en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Administrar una IPS implica mucho más que prestar servicios de salud
            con calidad. También requiere mantener un equilibrio entre la
            operación asistencial, la gestión administrativa y la estabilidad
            financiera. Cuando la recuperación de cartera pierde eficiencia o
            aumentan los tiempos de recaudo, la institución puede enfrentar
            dificultades para responder oportunamente a sus compromisos
            financieros y garantizar la continuidad de la atención.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Las IPS de todos los tamaños, desde pequeños prestadores hasta
            instituciones con alta capacidad instalada, deben gestionar
            permanentemente factores como la cartera con EPS, las glosas,
            devoluciones, auditorías médicas, cuentas por cobrar y el control
            del flujo de caja. Una administración eficiente de estos procesos
            permite fortalecer la sostenibilidad financiera y mejorar la
            capacidad de crecimiento institucional.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Incremento de la cartera vencida",
                text: "El crecimiento constante de las cuentas pendientes de pago puede reducir la liquidez disponible y afectar la capacidad de inversión de la institución.",
              },
              {
                title: "Retrasos en el recaudo de las EPS",
                text: "Los tiempos prolongados para obtener el pago de los servicios prestados generan presión financiera y dificultan la planeación presupuestal.",
              },
              {
                title: "Glosas y devoluciones",
                text: "Las observaciones sobre la facturación incrementan los tiempos de recuperación de cartera y requieren una gestión administrativa eficiente.",
              },
              {
                title: "Mayor presión sobre el flujo de caja",
                text: "Cuando los ingresos no se reciben oportunamente, aumenta la dificultad para atender proveedores, nómina, impuestos y demás obligaciones.",
              },
              {
                title: "Incremento de costos operativos",
                text: "Los gastos administrativos, tecnológicos y asistenciales exigen una adecuada administración financiera para garantizar la sostenibilidad.",
              },
              {
                title: "Seguimiento insuficiente a las cuentas por cobrar",
                text: "La ausencia de controles periódicos dificulta priorizar acciones de recaudo y permite que la cartera continúe envejeciendo.",
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Una IPS puede presentar altos niveles de facturación y, aun así,
            experimentar dificultades financieras si la recuperación de cartera
            no avanza al mismo ritmo que la prestación de los servicios. La
            liquidez depende del recaudo efectivo y no únicamente del volumen
            facturado.
          </motion.div>
        </section>

        {/* ================= IMPACTO ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cómo impacta la cartera EPS en la liquidez y el crecimiento de una
            IPS?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La cartera representa uno de los activos más importantes para una
            Institución Prestadora de Servicios de Salud. Sin embargo, cuando
            los tiempos de recaudo se prolongan, la disponibilidad de recursos
            disminuye y se generan limitaciones para sostener el crecimiento de
            la organización.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Una adecuada gestión de cartera no solo busca recuperar valores
            pendientes. También permite planificar inversiones, fortalecer la
            estabilidad financiera, reducir riesgos y mejorar la capacidad de
            respuesta frente a los desafíos propios del sector salud.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "Mayor liquidez institucional",
                text: "Un recaudo oportuno facilita contar con recursos para mantener la operación diaria y responder a las obligaciones financieras.",
              },
              {
                title: "Planeación financiera más eficiente",
                text: "Con una cartera controlada es posible proyectar inversiones y administrar mejor los recursos disponibles.",
              },
              {
                title: "Mayor capacidad de crecimiento",
                text: "La disponibilidad de flujo de caja favorece la expansión de servicios, la adquisición de tecnología y el fortalecimiento de la infraestructura.",
              },
              {
                title: "Reducción del riesgo financiero",
                text: "El seguimiento permanente de las cuentas por cobrar disminuye la probabilidad de acumulación de cartera vencida.",
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
            className={styles.highlightBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Una gestión eficiente de la cartera contribuye a que las IPS puedan
            disponer de mayores recursos para fortalecer la calidad de los
            servicios, mejorar su capacidad operativa y consolidar una
            sostenibilidad financiera a largo plazo.
          </motion.div>
        </section>

        {/* ================= ESTRATEGIAS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Estrategias para fortalecer la recuperación de cartera en las IPS y
            optimizar el recaudo de cuentas por cobrar
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera representa uno de los procesos
            administrativos y financieros más relevantes para las Instituciones
            Prestadoras de Servicios de Salud. Una estrategia bien estructurada
            permite disminuir el envejecimiento de la cartera, mejorar el flujo
            de caja y fortalecer la capacidad de la institución para mantener
            una operación sostenible.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            No existe una única solución para todas las IPS. Cada institución
            presenta características particulares según su tamaño, volumen de
            facturación, especialidades médicas, comportamiento de las cuentas
            por cobrar y estructura administrativa. Sin embargo, existen buenas
            prácticas que pueden contribuir a mejorar significativamente los
            resultados del proceso de recaudo.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Seguimiento permanente de la cartera",
                text: "Realizar revisiones periódicas permite detectar retrasos desde etapas tempranas y priorizar las obligaciones con mayor nivel de riesgo.",
              },
              {
                title: "Control oportuno de glosas",
                text: "Responder de manera ágil las glosas y devoluciones reduce tiempos de espera y facilita el reconocimiento de los valores facturados.",
              },
              {
                title: "Conciliación con las EPS",
                text: "Las conciliaciones permanentes ayudan a disminuir diferencias administrativas y favorecen el avance del recaudo.",
              },
              {
                title: "Priorización de cuentas por cobrar",
                text: "Clasificar la cartera según antigüedad, monto y probabilidad de recuperación permite utilizar mejor los recursos disponibles.",
              },
              {
                title: "Análisis permanente de indicadores",
                text: "Medir el comportamiento de la cartera facilita identificar tendencias, establecer prioridades y evaluar la efectividad de las acciones implementadas.",
              },
              {
                title: "Apoyo jurídico especializado",
                text: "Cuando la gestión administrativa resulta insuficiente, una estrategia jurídica puede complementar el proceso de recuperación de cartera.",
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
            Errores que pueden dificultar la recuperación de cartera en una IPS
          </motion.h3>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            En muchas instituciones, el crecimiento de la cartera vencida no se
            produce únicamente por retrasos en los pagos. También puede estar
            relacionado con procesos administrativos poco eficientes, ausencia
            de seguimiento y falta de indicadores que permitan tomar decisiones
            oportunas.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "Gestión reactiva",
                text: "Esperar a que la cartera tenga varios meses de vencimiento suele disminuir las probabilidades de recuperación oportuna.",
              },
              {
                title: "Falta de indicadores",
                text: "No medir el comportamiento de la cartera dificulta establecer prioridades y evaluar el desempeño financiero.",
              },
              {
                title: "Procesos excesivamente manuales",
                text: "La ausencia de herramientas tecnológicas incrementa reprocesos y retrasa la toma de decisiones.",
              },
              {
                title: "Seguimiento insuficiente",
                text: "No realizar controles periódicos favorece el crecimiento de la cartera vencida y aumenta el riesgo financiero.",
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
              Si desea profundizar en estrategias relacionadas con recuperación
              de cartera para IPS, recaudo de cuentas por cobrar, conciliación
              con EPS y fortalecimiento del flujo de caja, puede consultar
              nuestros recursos especializados.
            </motion.p>

            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Recuperación de cartera para IPS
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
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Indicadores que ayudan a evaluar la gestión de cartera y la
            sostenibilidad financiera de una IPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Una gestión eficiente de cartera requiere mucho más que recuperar
            cuentas pendientes. También implica medir continuamente el
            comportamiento financiero de la institución para identificar
            riesgos, detectar oportunidades de mejora y tomar decisiones basadas
            en información objetiva.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            El seguimiento de indicadores permite conocer la evolución del
            recaudo, analizar el envejecimiento de la cartera, evaluar la
            liquidez institucional y establecer estrategias orientadas a mejorar
            la estabilidad financiera de las IPS en Colombia.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Rotación de cartera",
                text: "Permite conocer el tiempo promedio que tarda la IPS en recuperar los recursos derivados de los servicios prestados.",
              },
              {
                title: "Días promedio de recaudo",
                text: "Facilita medir la eficiencia del proceso de cobro y comparar su comportamiento durante diferentes periodos.",
              },
              {
                title: "Porcentaje de cartera vencida",
                text: "Ayuda a identificar qué proporción de las cuentas por cobrar presenta retrasos y requiere atención prioritaria.",
              },
              {
                title: "Índice de recuperación",
                text: "Permite evaluar la efectividad de las acciones implementadas para recuperar cartera y mejorar la liquidez.",
              },
              {
                title: "Nivel de liquidez",
                text: "Mide la capacidad financiera de la IPS para responder oportunamente a sus obligaciones operativas.",
              },
              {
                title: "Comportamiento del flujo de caja",
                text: "Facilita conocer la disponibilidad real de recursos para garantizar la continuidad de los servicios de salud.",
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
            <strong>Lo que no se mide difícilmente puede mejorar.</strong>{" "}
            Analizar periódicamente los indicadores financieros permite tomar
            decisiones oportunas, fortalecer la gestión de cartera y contribuir
            a la sostenibilidad de las Instituciones Prestadoras de Servicios de
            Salud.
          </motion.div>
        </section>

        {/* ================= FAQ ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre la gestión de cartera en las IPS
          </motion.h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "¿Qué es una IPS?",
                text: "Es una Institución Prestadora de Servicios de Salud encargada de brindar atención médica, diagnóstica, terapéutica y de rehabilitación dentro del Sistema General de Seguridad Social en Salud.",
              },
              {
                title: "¿Por qué es importante recuperar la cartera?",
                text: "Porque permite mejorar la liquidez, fortalecer el flujo de caja y garantizar la continuidad de la operación institucional.",
              },
              {
                title: "¿Qué factores incrementan la cartera vencida?",
                text: "Entre los más frecuentes se encuentran los retrasos en los pagos, glosas, devoluciones, procesos administrativos extensos y seguimiento insuficiente a las cuentas por cobrar.",
              },
              {
                title: "¿Cómo mejorar el recaudo en una IPS?",
                text: "Implementando controles periódicos, conciliaciones oportunas, indicadores financieros, automatización de procesos y estrategias especializadas de recuperación.",
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
              de su IPS
            </h2>

            <p className={styles.ctaText}>
              Descubra estrategias para optimizar el recaudo de cuentas por
              cobrar, reducir el impacto de la cartera vencida, fortalecer el
              flujo de caja y mejorar la sostenibilidad financiera de las
              Instituciones Prestadoras de Servicios de Salud en Colombia.
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
                href="https://recaudodecartera.com/recuperacion-cartera-ips.html"
                className={styles.secondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer la solución para IPS
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
