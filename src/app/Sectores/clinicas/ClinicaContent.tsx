"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function ClinicasContent() {
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
            Gestión estratégica de cartera para clínicas e IPS en Colombia
          </span>

          <h1 className={styles.title}>
            Recuperación de cartera para clínicas: cómo fortalecer el flujo de
            caja, reducir la cartera vencida y mejorar la sostenibilidad
            financiera
          </h1>

          <p className={styles.description}>
            La recuperación de cartera representa uno de los mayores desafíos
            para las clínicas colombianas. Aunque muchas instituciones registran
            una alta facturación cada mes, los retrasos en los pagos por parte
            de las EPS, las glosas, las devoluciones de facturas y los procesos
            de auditoría hacen que gran parte de esos recursos permanezcan sin
            ingresar oportunamente. Como consecuencia, la liquidez disminuye, se
            limita la capacidad de inversión y aumenta la presión financiera
            sobre toda la operación.
          </p>

          <p className={styles.description}>
            En esta guía encontrará información especializada sobre gestión de
            cartera hospitalaria, recaudo de cuentas por cobrar, indicadores
            financieros, recuperación de cartera EPS y estrategias que permiten
            fortalecer la sostenibilidad financiera de clínicas e IPS en
            Colombia.
          </p>

          <div className={styles.actions}>
            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
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
              Explorar el portal principal
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENIDO ================= */}

      <main className={styles.container}>
        {/* ================= PROBLEMÁTICA ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué muchas clínicas en Colombia presentan problemas de liquidez
            a pesar de mantener una alta facturación?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Una clínica puede atender cientos de pacientes diariamente y emitir
            un volumen importante de facturas cada mes. Sin embargo, eso no
            significa que disponga del dinero suficiente para operar con
            tranquilidad. En el sector salud es frecuente que buena parte de los
            recursos permanezcan represados debido a glosas, devoluciones,
            auditorías médicas, procesos administrativos y retrasos en los pagos
            realizados por las EPS.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Cuando la recuperación de cartera no avanza al mismo ritmo de la
            facturación, la institución comienza a experimentar dificultades
            para cubrir obligaciones con proveedores, mantener inventarios,
            invertir en tecnología médica, contratar talento humano e incluso
            desarrollar nuevos servicios. Por ello, la gestión de cartera dejó
            de ser únicamente una tarea administrativa y se convirtió en un
            factor estratégico para garantizar la sostenibilidad financiera de
            cualquier clínica o IPS.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Incremento de la cartera vencida",
                text: "El crecimiento constante de las cuentas por cobrar reduce la liquidez disponible y limita la capacidad financiera de la institución.",
              },
              {
                title: "Demoras en auditorías y conciliaciones",
                text: "Los procesos de revisión, glosas y conciliaciones pueden retrasar significativamente el recaudo efectivo de los servicios prestados.",
              },
              {
                title: "Presión permanente sobre el flujo de caja",
                text: "Aunque exista una alta facturación mensual, los ingresos reales pueden tardar meses en materializarse.",
              },
              {
                title: "Incremento de los costos operativos",
                text: "Los gastos administrativos, asistenciales y financieros continúan creciendo mientras los recursos permanecen pendientes de pago.",
              },
              {
                title: "Procesos manuales de seguimiento",
                text: "La ausencia de metodologías estructuradas dificulta identificar prioridades, controlar vencimientos y acelerar el recaudo.",
              },
              {
                title: "Recuperación tardía de cuentas antiguas",
                text: "Entre más tiempo permanezca una obligación sin gestionar, mayores son las probabilidades de retrasos, controversias y pérdida de capacidad de recuperación.",
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

          <motion.div
            className={styles.warningBox}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>
              Una clínica no enfrenta problemas financieros únicamente porque
              facture menos.
            </strong>{" "}
            En muchos casos, el verdadero reto consiste en transformar esa
            facturación en recursos efectivamente recaudados dentro de tiempos
            razonables. Una gestión eficiente de cartera permite mejorar la
            liquidez, fortalecer la operación diaria y generar mayor estabilidad
            financiera a mediano y largo plazo.
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
            ¿Cómo afecta la cartera de las EPS el crecimiento, la rentabilidad y
            la estabilidad financiera de una clínica?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera no solo influye en el dinero disponible
            para operar. También condiciona la capacidad de una clínica para
            crecer, innovar y ofrecer servicios de mayor calidad. Cuando una
            parte importante de la facturación permanece pendiente de recaudo,
            la institución debe reorganizar continuamente sus recursos para
            atender gastos operativos, cumplir compromisos financieros y evitar
            que la falta de liquidez afecte la atención de los pacientes.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Una administración eficiente de la cartera permite convertir las
            cuentas por cobrar en recursos disponibles dentro de plazos
            razonables. Esto fortalece el flujo de caja, reduce la incertidumbre
            financiera y facilita la toma de decisiones estratégicas
            relacionadas con inversión, modernización tecnológica, ampliación de
            servicios y sostenibilidad institucional.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "Mayor liquidez operativa",
                text: "El recaudo oportuno facilita el pago de proveedores, nómina, impuestos, medicamentos, insumos y demás obligaciones indispensables para el funcionamiento diario de la clínica.",
              },
              {
                title: "Más capacidad de inversión",
                text: "Una clínica con una cartera controlada dispone de mayores recursos para renovar equipos médicos, fortalecer la infraestructura y ampliar la oferta de servicios.",
              },
              {
                title: "Disminución del riesgo financiero",
                text: "Reducir la cartera vencida ayuda a disminuir la dependencia del crédito y mejora la estabilidad financiera frente a escenarios económicos complejos.",
              },
              {
                title: "Mejor planificación administrativa",
                text: "Contar con ingresos más predecibles permite planificar presupuestos, ejecutar proyectos de crecimiento y tomar decisiones con mayor seguridad.",
              },
              {
                title: "Mayor eficiencia en la gestión",
                text: "El seguimiento continuo de la cartera facilita identificar cuentas críticas, priorizar acciones de cobro y optimizar los procesos administrativos.",
              },
              {
                title: "Fortalecimiento de la sostenibilidad",
                text: "La recuperación constante de cartera contribuye a mantener una operación financiera saludable y sostenible en el largo plazo.",
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
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Consecuencias de no gestionar oportunamente la cartera hospitalaria
          </motion.h3>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Cuando las cuentas por cobrar permanecen sin seguimiento durante
            largos periodos, el impacto suele ir mucho más allá de un simple
            retraso en los ingresos. Las clínicas pueden enfrentar mayores
            costos financieros, dificultades para atender nuevas inversiones,
            incremento del riesgo operativo e incluso pérdida de competitividad
            frente a otras instituciones que cuentan con procesos de recaudo más
            eficientes.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
          >
            Por esta razón, la gestión de cartera debe entenderse como un
            proceso continuo que involucra análisis financiero, seguimiento
            permanente, conciliaciones, control de indicadores, gestión
            documental y, cuando las circunstancias lo requieren, estrategias
            especializadas de recuperación administrativa o jurídica.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>
              Una cartera bien administrada no solo mejora el recaudo.
            </strong>{" "}
            También fortalece la liquidez, incrementa la capacidad de inversión,
            reduce el riesgo financiero y crea las condiciones necesarias para
            que una clínica pueda crecer de forma sostenible y ofrecer una mejor
            atención a sus pacientes.
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
            Estrategias que ayudan a mejorar la recuperación de cartera en
            clínicas e IPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            No existe una única solución para reducir la cartera vencida. Los
            mejores resultados suelen obtenerse cuando la institución combina
            herramientas administrativas, jurídicas y tecnológicas dentro de un
            proceso permanente de seguimiento. El objetivo no consiste
            únicamente en cobrar más rápido, sino en disminuir la acumulación de
            cuentas pendientes y convertir la recuperación de cartera en una
            ventaja competitiva para la organización.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Una estrategia bien estructurada permite priorizar las cuentas de
            mayor riesgo, mejorar la comunicación con las entidades responsables
            del pago, reducir tiempos de respuesta y fortalecer el flujo de caja
            sin afectar la continuidad de los servicios prestados.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Seguimiento permanente de las cuentas por cobrar",
                text: "Realizar controles periódicos permite detectar retrasos de manera temprana y tomar decisiones antes de que la cartera continúe envejeciendo.",
              },
              {
                title: "Control oportuno de glosas y devoluciones",
                text: "Una gestión ágil disminuye reprocesos administrativos y acelera el reconocimiento de los valores facturados.",
              },
              {
                title: "Conciliaciones periódicas con las EPS",
                text: "Mantener espacios de conciliación facilita resolver diferencias documentales y agiliza el recaudo de obligaciones pendientes.",
              },
              {
                title: "Indicadores financieros actualizados",
                text: "Medir el comportamiento de la cartera facilita identificar tendencias, establecer prioridades y evaluar el desempeño del proceso de recaudo.",
              },
              {
                title: "Apoyo jurídico especializado",
                text: "Cuando la recuperación administrativa no genera resultados, una estrategia jurídica puede contribuir a proteger los intereses financieros de la institución.",
              },
              {
                title: "Procesos apoyados en tecnología",
                text: "La automatización del seguimiento y la generación de alertas mejora la productividad del equipo encargado de la cartera.",
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
            Errores frecuentes que aumentan la cartera vencida
          </motion.h3>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Muchas clínicas concentran sus esfuerzos únicamente en facturar,
            dejando en un segundo plano el seguimiento posterior al envío de las
            cuentas. Esto provoca que pequeños inconvenientes administrativos se
            conviertan, con el paso del tiempo, en obligaciones difíciles de
            recuperar.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "No medir indicadores",
                text: "Sin información actualizada es difícil conocer el verdadero estado de la cartera.",
              },
              {
                title: "Seguimiento tardío",
                text: "Esperar varios meses para iniciar la gestión reduce las probabilidades de recaudo oportuno.",
              },
              {
                title: "Procesos manuales",
                text: "La falta de automatización incrementa errores, retrabajos y tiempos administrativos.",
              },
              {
                title: "Ausencia de estrategias jurídicas",
                text: "No todas las cuentas pueden recuperarse únicamente mediante gestión administrativa.",
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
              conciliación con EPS, cobro jurídico, seguimiento de cuentas por
              cobrar y optimización del flujo de caja para clínicas e IPS, puede
              consultar nuestros recursos especializados.
            </motion.p>

            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Recuperación de cartera para clínicas e IPS
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
            Indicadores que ayudan a medir la gestión de cartera y la salud
            financiera de una clínica
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Gestionar la cartera no consiste únicamente en realizar procesos de
            cobro. También implica medir permanentemente el desempeño financiero
            para identificar oportunidades de mejora, anticipar riesgos y tomar
            decisiones basadas en información confiable. Contar con indicadores
            claros permite conocer el comportamiento real de las cuentas por
            cobrar y evaluar la efectividad de las estrategias implementadas.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Aunque cada institución tiene necesidades diferentes, existen
            métricas que suelen ser fundamentales para mantener una adecuada
            gestión financiera y garantizar la sostenibilidad de clínicas e IPS
            en el mediano y largo plazo.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "Rotación de cartera",
                text: "Permite conocer el tiempo promedio que tarda la institución en recuperar los valores facturados.",
              },
              {
                title: "Días promedio de recaudo",
                text: "Ayuda a identificar retrasos en los pagos y evaluar la eficiencia del proceso de cobranza.",
              },
              {
                title: "Porcentaje de cartera vencida",
                text: "Mide qué parte de las cuentas por cobrar supera los plazos establecidos de pago.",
              },
              {
                title: "Índice de recuperación",
                text: "Permite evaluar la efectividad de las acciones administrativas y jurídicas implementadas.",
              },
              {
                title: "Comportamiento del flujo de caja",
                text: "Facilita conocer la disponibilidad real de recursos para atender las obligaciones operativas.",
              },
              {
                title: "Valor recuperado por periodo",
                text: "Permite comparar resultados, identificar tendencias y establecer objetivos de mejora continua.",
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
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Buenas prácticas para fortalecer la sostenibilidad financiera
          </motion.h3>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Las instituciones que logran mantener una cartera saludable suelen
            combinar seguimiento permanente, análisis financiero, procesos de
            conciliación, herramientas tecnológicas y una estrategia clara para
            priorizar las cuentas con mayor riesgo. Esto les permite responder
            con mayor rapidez ante cambios del entorno y mantener una operación
            estable incluso en escenarios complejos.
          </motion.p>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>
              La recuperación de cartera debe entenderse como un proceso
              continuo y estratégico.
            </strong>{" "}
            Medir indicadores, hacer seguimiento oportuno y adoptar acciones
            preventivas permite disminuir el riesgo financiero, mejorar la
            liquidez y generar las condiciones necesarias para que la clínica
            continúe creciendo de forma sostenible.
          </motion.div>
        </section>

        {/* ================= CTA FINAL ================= */}

        <section className={styles.cta}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>
              Fortalezca la recuperación de cartera y la estabilidad financiera
              de su clínica con estrategias especializadas
            </h2>

            <p className={styles.ctaText}>
              Una adecuada gestión de cartera permite mucho más que recuperar
              cuentas por cobrar. También contribuye a mejorar el flujo de caja,
              reducir la cartera vencida, optimizar la planeación financiera y
              fortalecer la capacidad de crecimiento de clínicas e IPS en
              Colombia.
            </p>

            <p className={styles.ctaText}>
              Si desea profundizar en metodologías de recuperación de cartera,
              conciliación con EPS, seguimiento de cuentas por cobrar y
              estrategias jurídicas para el recaudo, puede acceder a nuestros
              recursos especializados y conocer soluciones orientadas al sector
              salud.
            </p>

            <div className={styles.actions}>
              <a
                href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
                className={styles.primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer el servicio especializado
              </a>

              <a
                href="https://recaudodecartera.com/"
                className={styles.secondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar el portal principal
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
