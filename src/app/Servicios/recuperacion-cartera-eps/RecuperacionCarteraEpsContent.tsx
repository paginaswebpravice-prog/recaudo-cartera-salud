"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function RecuperacionCarteraEpsContent() {
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
            Gestión y recuperación de cartera EPS para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            Recuperación de cartera EPS en Colombia: estrategias para reducir
            mora, controlar glosas y mejorar la liquidez de IPS y clínicas
          </h1>

          <p className={styles.description}>
            La cartera pendiente de pago por parte de las EPS es uno de los
            principales retos financieros que enfrentan las instituciones
            prestadoras de servicios de salud en Colombia.
            <br />
            <br />
            Conozca cómo funciona la recuperación de cartera EPS, qué factores
            generan acumulación de cuentas pendientes y qué alternativas pueden
            ayudar a fortalecer el flujo de caja y la sostenibilidad financiera
            de IPS, clínicas y hospitales.
          </p>

          <div className={styles.actions}>
            <a href="#informacion" className={styles.primary}>
              Conocer estrategias
            </a>

            <a
              href="https://recaudodecartera.com/recuperacion-de-cartera.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Ver solución especializada
            </a>
          </div>
        </motion.div>
      </section>

      <main className={styles.container}>
        {/* ================= CONTEXTO ================= */}

        <section id="informacion" className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            ¿Qué es la recuperación de cartera EPS y por qué es clave para las
            IPS en Colombia?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            La recuperación de cartera EPS comprende el conjunto de acciones
            administrativas, financieras y jurídicas que buscan gestionar el
            pago de recursos pendientes entre las entidades responsables del
            aseguramiento y las instituciones prestadoras de servicios de salud.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            Para una IPS o clínica, una factura pendiente no representa
            únicamente un valor por cobrar. Cuando la cartera aumenta sin una
            estrategia adecuada, puede convertirse en una dificultad que afecta
            pagos operativos, contratación de personal, compra de insumos y
            capacidad de inversión.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            viewport={{
              once: true,
            }}
          >
            Por esta razón, la gestión de cartera en salud requiere una visión
            integral donde participen áreas financieras, administrativas,
            contables y jurídicas, buscando recuperar recursos oportunamente y
            disminuir riesgos asociados a la mora.
          </motion.p>

          <div className={styles.highlightBox}>
            Una IPS financieramente sostenible no depende únicamente de generar
            nuevos ingresos, sino también de lograr que los recursos facturados
            sean reconocidos, gestionados y recuperados correctamente.
          </div>
        </section>
        {/* ================= CAUSAS CARTERA ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            ¿Por qué aumenta la cartera EPS de las IPS y clínicas en Colombia?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            El crecimiento de cartera en el sector salud normalmente no ocurre
            por una sola causa. En la mayoría de los casos intervienen factores
            administrativos, financieros y operativos que dificultan el flujo
            normal de recuperación de recursos.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Retrasos prolongados en el pago de servicios prestados por las EPS",

              "Glosas y objeciones que retrasan el reconocimiento de cuentas médicas",

              "Diferencias entre valores facturados y valores aceptados durante procesos de auditoría",

              "Falta de seguimiento oportuno a cuentas pendientes de pago",

              "Procesos de conciliación extensos sin soluciones definitivas",

              "Acumulación de cartera antigua con menor probabilidad de recuperación",

              "Desorganización documental que dificulta demostrar obligaciones pendientes",

              "Ausencia de una estrategia integral entre áreas financieras y jurídicas",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.08,
                }}
                viewport={{
                  once: true,
                }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ Cuando una institución deja crecer su cartera sin seguimiento
            constante, puede perder capacidad de negociación, aumentar riesgos
            financieros y comprometer recursos necesarios para su operación.
          </div>
        </section>

        {/* ================= GLOSAS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            Cómo afectan las glosas EPS la recuperación de cartera en salud
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            Las glosas representan uno de los principales factores que pueden
            retrasar el recaudo de recursos por servicios médicos prestados. Una
            cuenta presentada por una IPS puede quedar pendiente mientras se
            revisan diferencias relacionadas con soportes, facturación,
            procedimientos o requisitos administrativos.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Retraso en el recaudo</h4>

              <p>
                Las cuentas glosadas pueden permanecer pendientes mientras se
                realizan revisiones, respuestas y procesos de conciliación con
                la entidad responsable.
              </p>
            </div>

            <div>
              <h4>✔ Mayor carga administrativa</h4>

              <p>
                Las IPS deben destinar recursos humanos y operativos para
                analizar observaciones, responder requerimientos y realizar
                seguimiento a cada caso.
              </p>
            </div>

            <div>
              <h4>✔ Riesgo de acumulación de cartera</h4>

              <p>
                Cuando las glosas no se gestionan oportunamente pueden generar
                crecimiento de saldos pendientes y afectar la liquidez
                institucional.
              </p>
            </div>

            <div>
              <h4>✔ Necesidad de control documental</h4>

              <p>
                Una adecuada organización de soportes permite responder de mejor
                manera frente a diferencias y procesos de auditoría.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            La gestión eficiente de glosas no solo busca disminuir rechazos,
            también ayuda a acelerar la recuperación de recursos que son
            fundamentales para la operación de clínicas e IPS.
          </div>
        </section>
        {/* ================= TIPOS DE CARTERA ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            Tipos de cartera EPS que pueden afectar la estabilidad financiera de
            una IPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            No toda la cartera pendiente tiene el mismo nivel de riesgo. Para
            establecer una estrategia adecuada de recuperación es importante
            clasificar las cuentas según su antigüedad, estado de gestión y
            posibilidad real de recaudo.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Cartera corriente",

                text: "Corresponde a cuentas que aún se encuentran dentro de los tiempos normales de gestión y seguimiento.",
              },

              {
                title: "Cartera vencida",

                text: "Son obligaciones cuyo plazo de pago ya fue superado y requieren acciones de seguimiento más intensivas.",
              },

              {
                title: "Cartera de difícil recuperación",

                text: "Incluye cuentas con mayores obstáculos administrativos, documentales o jurídicos para lograr su pago.",
              },

              {
                title: "Cartera en etapa jurídica",

                text: "Son obligaciones donde puede ser necesario evaluar mecanismos legales para buscar su recuperación.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                viewport={{
                  once: true,
                }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.highlightBox}>
            Clasificar correctamente la cartera permite priorizar esfuerzos,
            identificar riesgos y definir cuáles cuentas requieren gestión
            administrativa, conciliación o acciones jurídicas.
          </div>
        </section>

        {/* ================= IMPACTO FINANCIERO ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            Impacto de la cartera EPS en el flujo de caja y operación de las
            clínicas
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            La cartera pendiente de recuperación puede generar efectos que van
            más allá del área financiera. Cuando los recursos no ingresan en los
            tiempos esperados, toda la operación institucional puede verse
            afectada.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Presión sobre la nómina y obligaciones operativas</h4>

              <p>
                La falta de liquidez puede dificultar el cumplimiento oportuno
                de compromisos laborales, administrativos y asistenciales.
              </p>
            </div>

            <div>
              <h4>✔ Dificultades con proveedores</h4>

              <p>
                La disponibilidad limitada de recursos puede afectar compras de
                medicamentos, insumos médicos y servicios necesarios para la
                operación.
              </p>
            </div>

            <div>
              <h4>✔ Menor capacidad de inversión</h4>

              <p>
                Una cartera acumulada puede retrasar proyectos de crecimiento,
                actualización tecnológica o ampliación de servicios.
              </p>
            </div>

            <div>
              <h4>✔ Mayor dependencia del endeudamiento</h4>

              <p>
                Algunas instituciones pueden verse obligadas a buscar
                alternativas financieras para mantener su funcionamiento.
              </p>
            </div>
          </div>

          <div className={styles.warningBox}>
            ⚠ La cartera no gestionada oportunamente puede convertirse en un
            problema financiero estructural que afecta la capacidad de respuesta
            de una institución de salud.
          </div>
        </section>
        {/* ================= PROCESO DE RECUPERACIÓN ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            ¿Cómo funciona un proceso de recuperación de cartera EPS para IPS y
            clínicas?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            La recuperación de cartera en el sector salud requiere un análisis
            ordenado de cada cuenta pendiente. No todas las obligaciones pueden
            gestionarse de la misma manera, por lo que es necesario establecer
            una ruta de trabajo según el estado financiero, administrativo y
            jurídico de la cartera.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "1. Diagnóstico de cartera",

                text: "Se revisa el estado de las cuentas pendientes, antigüedad, valores adeudados, soportes disponibles y nivel de riesgo.",
              },

              {
                title: "2. Organización documental",

                text: "Se validan facturas, soportes de prestación del servicio, respuestas a glosas y documentos necesarios para respaldar la obligación.",
              },

              {
                title: "3. Gestión administrativa",

                text: "Se realizan acciones de seguimiento, requerimientos, conciliaciones y búsqueda de acuerdos de pago cuando sea viable.",
              },

              {
                title: "4. Evaluación jurídica",

                text: "Cuando existen obligaciones exigibles, puede analizarse la procedencia de acciones legales para buscar la recuperación de recursos.",
              },

              {
                title: "5. Seguimiento y control",

                text: "La recuperación requiere monitoreo permanente para evitar que nuevas cuentas entren en mora sin gestión oportuna.",
              },

              {
                title: "6. Recuperación efectiva",

                text: "El objetivo final es lograr el ingreso de recursos pendientes y fortalecer la estabilidad financiera de la institución.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.08,
                }}
                viewport={{
                  once: true,
                }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.highlightBox}>
            Una estrategia efectiva de recuperación de cartera combina análisis
            financiero, control documental, gestión administrativa y evaluación
            jurídica según las características de cada obligación.
          </div>
        </section>

        {/* ================= BENEFICIOS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            Beneficios de implementar una gestión estratégica de cartera EPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            Una gestión organizada permite que las IPS tengan mayor claridad
            sobre sus recursos pendientes, reduzcan riesgos financieros y tomen
            mejores decisiones para garantizar la continuidad de sus
            operaciones.
          </motion.p>

          <div className={styles.benefits}>
            <span>✔ Mayor control sobre cuentas por cobrar</span>

            <span>✔ Identificación temprana de cartera riesgosa</span>

            <span>✔ Mejor seguimiento a obligaciones pendientes</span>

            <span>✔ Reducción de cartera vencida</span>

            <span>✔ Mayor capacidad de planeación financiera</span>

            <span>✔ Fortalecimiento de la sostenibilidad institucional</span>
          </div>
        </section>
        {/* ================= RECURSOS RELACIONADOS ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            Recursos relacionados sobre recuperación de cartera en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            La recuperación de cartera requiere conocer tanto los aspectos
            financieros como los mecanismos administrativos y jurídicos
            disponibles para gestionar obligaciones pendientes.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Recuperación de cartera empresarial</h4>

              <p>
                Conozca estrategias generales de gestión y recuperación de
                cartera aplicables a diferentes sectores económicos en Colombia.
              </p>
            </div>

            <div>
              <h4>✔ Cobro de cartera para IPS y clínicas</h4>

              <p>
                Las instituciones de salud pueden requerir procesos
                especializados para gestionar cuentas pendientes frente a
                entidades responsables de pago.
              </p>
            </div>

            <div>
              <h4>✔ Gestión financiera del sector salud</h4>

              <p>
                El control adecuado de cuentas por cobrar permite fortalecer la
                liquidez y mejorar la planeación financiera institucional.
              </p>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href="https://recaudodecartera.com/recuperacion-de-cartera.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Conocer solución especializada
            </a>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            Preguntas frecuentes sobre recuperación de cartera EPS en Colombia
          </motion.h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>¿Qué es la recuperación de cartera EPS?</h4>

              <p>
                Es el conjunto de acciones administrativas, financieras y
                jurídicas destinadas a gestionar el pago de recursos pendientes
                entre EPS e IPS por servicios de salud prestados.
              </p>
            </div>

            <div>
              <h4>¿Por qué las IPS acumulan cartera pendiente con las EPS?</h4>

              <p>
                La acumulación puede estar relacionada con retrasos en pagos,
                glosas, diferencias de auditoría, procesos administrativos y
                falta de seguimiento oportuno.
              </p>
            </div>

            <div>
              <h4>¿Cómo afectan las glosas EPS la cartera de una clínica?</h4>

              <p>
                Las glosas pueden retrasar el reconocimiento de cuentas médicas
                y generar demoras en el ingreso de recursos necesarios para la
                operación.
              </p>
            </div>

            <div>
              <h4>¿Qué puede hacer una IPS con cartera vencida?</h4>

              <p>
                Puede realizar análisis de cartera, fortalecer la gestión
                administrativa, adelantar conciliaciones y evaluar alternativas
                jurídicas según cada caso.
              </p>
            </div>

            <div>
              <h4>¿Cuándo una cartera EPS requiere acciones jurídicas?</h4>

              <p>
                Cuando existen obligaciones exigibles y documentos suficientes
                que permitan evaluar mecanismos legales para buscar la
                recuperación de los recursos.
              </p>
            </div>

            <div>
              <h4>
                ¿Por qué es importante actuar oportunamente sobre la cartera?
              </h4>

              <p>
                Porque el paso del tiempo puede aumentar riesgos financieros,
                administrativos y afectar la posibilidad de recuperación.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}

        <section id="contacto" className={styles.cta}>
          <div>
            <h2 className={styles.ctaTitle}>
              Fortalezca la recuperación de cartera EPS de su IPS o clínica
            </h2>

            <p className={styles.ctaText}>
              Conozca alternativas para gestionar cartera vencida, reducir
              riesgos financieros y mejorar el flujo de recursos dentro del
              sector salud colombiano.
            </p>

            <div className={styles.actions}>
              <a
                href="https://recaudodecartera.com/recuperacion-de-cartera.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Ver solución especializada
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
