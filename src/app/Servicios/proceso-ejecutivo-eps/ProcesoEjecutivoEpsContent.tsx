"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function ProcesoEjecutivoEpsContent() {
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
            Recuperación judicial de cartera EPS para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            Proceso ejecutivo contra EPS en Colombia: cómo recuperar cartera
            vencida y exigir el pago de servicios de salud
          </h1>

          <p className={styles.description}>
            Cuando una IPS o clínica presta servicios de salud y una EPS no
            realiza los pagos correspondientes, la acumulación de cartera puede
            afectar directamente la operación, el flujo de caja y la
            sostenibilidad financiera de la institución.
            <br />
            <br />
            Conozca cómo funciona el proceso ejecutivo contra EPS en Colombia,
            cuándo puede ser una alternativa jurídica y qué aspectos deben
            analizarse antes de iniciar una acción judicial de recuperación de
            cartera.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Analizar mi caso
            </a>

            <a
              href="https://recaudodecartera.com/cobranzas-empresariales-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Conocer solución especializada
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* INTRODUCCIÓN */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Qué es un proceso ejecutivo contra una EPS y para qué sirve?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            El proceso ejecutivo contra una EPS es una herramienta judicial que
            permite solicitar el pago de obligaciones que cumplen determinadas
            condiciones legales, especialmente cuando existe una deuda clara,
            determinada y exigible.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            En el sector salud colombiano, este mecanismo suele relacionarse con
            obligaciones derivadas de servicios médicos prestados por IPS,
            clínicas, hospitales y otros proveedores que enfrentan retrasos en
            los pagos por parte de las entidades responsables.
          </motion.p>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Más que iniciar una demanda, un proceso ejecutivo requiere una
            revisión previa de la documentación, la trazabilidad de la cartera,
            los soportes de prestación del servicio y la estrategia jurídica más
            adecuada para aumentar las posibilidades de recuperación.
          </motion.p>

          <div className={styles.highlightBox}>
            Un proceso ejecutivo correctamente estructurado puede convertirse en
            una alternativa para IPS y clínicas que necesitan recuperar recursos
            pendientes y proteger su estabilidad financiera frente a cartera
            vencida.
          </div>
        </section>

        {/* CAUSAS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué una IPS puede llegar a iniciar un proceso ejecutivo contra
            una EPS?
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Antes de acudir a una vía judicial, normalmente las instituciones
            prestadoras de salud realizan diferentes gestiones administrativas,
            conciliaciones y requerimientos de pago. Sin embargo, cuando estas
            acciones no generan resultados efectivos, puede ser necesario
            evaluar alternativas jurídicas para recuperar los recursos
            adeudados.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Facturas de servicios de salud pendientes de pago durante largos periodos",

              "Cartera acumulada que afecta el flujo de caja y la operación diaria de la IPS",

              "Acuerdos de pago celebrados con la EPS que posteriormente no son cumplidos",

              "Diferencias económicas que no logran resolverse mediante conciliaciones",

              "Procesos de auditoría o glosas que retrasan injustificadamente la recuperación de recursos",

              "Riesgo de pérdida de oportunidad para gestionar cartera antigua",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            Una cartera vencida no gestionada oportunamente puede convertirse en
            un problema financiero importante para una clínica o IPS,
            especialmente cuando los recursos pendientes afectan pagos a
            proveedores, personal médico e inversión operativa.
          </div>
        </section>

        {/* DIFERENCIA COBRO ADMINISTRATIVO VS JUDICIAL */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Diferencias entre la gestión administrativa de cartera y el proceso
            ejecutivo contra EPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera en el sector salud puede involucrar
            diferentes etapas. En algunos casos es posible lograr acuerdos
            mediante gestiones administrativas; en otros, cuando la obligación
            permanece pendiente, puede ser necesario acudir a mecanismos
            judiciales.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Gestión administrativa de cartera</h4>

              <p>
                Incluye seguimiento de cuentas, solicitudes de pago,
                conciliaciones, revisión de glosas y búsqueda de acuerdos
                directos con la entidad responsable.
              </p>
            </div>

            <div>
              <h4>✔ Gestión prejurídica</h4>

              <p>
                Permite evaluar la documentación disponible, analizar la
                obligación y definir si existen elementos suficientes para
                iniciar acciones posteriores.
              </p>
            </div>

            <div>
              <h4>✔ Proceso ejecutivo judicial</h4>

              <p>
                Es una alternativa que busca obtener el pago de obligaciones
                exigibles mediante la intervención de la autoridad judicial
                correspondiente.
              </p>
            </div>

            <div>
              <h4>✔ Estrategia integral de recuperación</h4>

              <p>
                Combina análisis financiero, revisión documental y acciones
                jurídicas enfocadas en recuperar recursos pendientes de manera
                organizada.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            La decisión de iniciar un proceso ejecutivo contra una EPS debe
            partir de un análisis completo de la cartera, los soportes
            disponibles y la viabilidad jurídica del caso.
          </div>
        </section>

        {/* ESCENARIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Situaciones donde una IPS puede evaluar un proceso ejecutivo contra
            EPS
          </h2>

          <div className={styles.grid}>
            {[
              "Facturas vencidas sin respuesta efectiva",
              "Acuerdos de pago incumplidos",
              "Cartera en mora prolongada",
              "Negación reiterada de pagos",
              "Falta de conciliación efectiva",
              "Riesgo de prescripción de cartera",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ Cuando no existe una estrategia jurídica estructurada, muchas IPS
            terminan perdiendo capacidad de recuperación sobre su cartera.
          </div>
        </section>

        {/* ETAPAS DEL PROCESO */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Etapas generales de un proceso ejecutivo contra una EPS en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Aunque cada caso depende de las características particulares de la
            cartera, los documentos disponibles y las condiciones jurídicas de
            la obligación, generalmente un proceso ejecutivo contra una EPS
            involucra diferentes etapas de análisis, preparación y seguimiento.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                title: "Etapa 1",
                text: "Revisión de la cartera pendiente, facturas, soportes de prestación del servicio y documentos que acrediten la obligación.",
              },

              {
                title: "Etapa 2",
                text: "Evaluación jurídica para determinar la procedencia del proceso y las acciones más convenientes según el caso.",
              },

              {
                title: "Etapa 3",
                text: "Preparación y presentación de la demanda ejecutiva con los elementos necesarios para sustentar la reclamación.",
              },

              {
                title: "Etapa 4",
                text: "Desarrollo del proceso judicial y seguimiento de las actuaciones correspondientes ante la autoridad competente.",
              },

              {
                title: "Etapa 5",
                text: "Solicitud y análisis de posibles medidas cautelares cuando resulten procedentes dentro del proceso.",
              },

              {
                title: "Etapa 6",
                text: "Seguimiento orientado a lograr la recuperación efectiva de los recursos reclamados.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DOCUMENTOS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Documentos y elementos que pueden ser necesarios para recuperar
            cartera EPS por vía judicial
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Una correcta preparación documental es uno de los factores más
            importantes dentro de un proceso ejecutivo. Antes de iniciar una
            acción judicial, es necesario revisar que la información disponible
            permita demostrar la existencia y características de la obligación.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Facturas emitidas por servicios de salud prestados",

              "Soportes de radicación ante la EPS correspondiente",

              "Contratos o acuerdos relacionados con la prestación del servicio",

              "Respuestas a glosas y procesos de conciliación realizados",

              "Certificaciones, actas u otros documentos de reconocimiento de deuda",

              "Historial de gestiones de cobro realizadas previamente",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.highlightBox}>
            La revisión documental permite identificar fortalezas, posibles
            riesgos y la estrategia más adecuada antes de iniciar un proceso
            ejecutivo contra una EPS.
          </div>
        </section>

        {/* MEDIDAS CAUTELARES */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Medidas cautelares dentro de un proceso ejecutivo contra EPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Dentro de determinados procesos judiciales, las medidas cautelares
            pueden cumplir una función importante al buscar proteger la
            efectividad de una eventual decisión favorable para la institución
            que reclama el pago de la cartera.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Protección del resultado del proceso</h4>

              <p>
                Buscan evitar que una eventual decisión judicial pierda utilidad
                cuando exista una obligación pendiente de cumplimiento.
              </p>
            </div>

            <div>
              <h4>✔ Análisis jurídico previo</h4>

              <p>
                Su procedencia depende de las condiciones particulares del caso
                y del cumplimiento de los requisitos establecidos.
              </p>
            </div>

            <div>
              <h4>✔ Herramienta dentro de una estrategia integral</h4>

              <p>
                Forman parte de un conjunto de acciones orientadas a fortalecer
                la recuperación de cartera del sector salud.
              </p>
            </div>
          </div>

          <div className={styles.warningBox}>
            Las medidas cautelares no reemplazan un análisis jurídico completo.
            Cada proceso requiere revisar la naturaleza de la obligación, los
            documentos disponibles y las condiciones específicas del caso.
          </div>
        </section>

        {/* INFORMACIÓN */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Aspectos importantes antes de iniciar un cobro judicial contra una
            EPS
          </h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Soportes documentales</h4>

              <p>
                La documentación debe demostrar la existencia y exigibilidad de
                la obligación.
              </p>
            </div>

            <div>
              <h4>✔ Gestión previa de cartera</h4>

              <p>
                Es recomendable contar con trazabilidad de cobro administrativo
                y prejurídico.
              </p>
            </div>

            <div>
              <h4>✔ Riesgo de prescripción</h4>

              <p>
                La antigüedad de la cartera puede afectar la viabilidad de
                recuperación.
              </p>
            </div>

            <div>
              <h4>✔ Estrategia jurídica especializada</h4>

              <p>
                Cada caso requiere evaluación técnica y financiera según el tipo
                de cartera.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 El análisis jurídico adecuado puede ayudar a priorizar acciones y
            reducir riesgos financieros en IPS y clínicas.
          </div>
        </section>

        {/* RECURSO PADRE */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Recursos especializados sobre cobranzas empresariales en Colombia
          </h2>

          <p className={styles.text}>
            Si desea profundizar sobre estrategias de recuperación de cartera,
            procesos de cobro empresarial y acciones jurídicas aplicables en
            Colombia, puede consultar el siguiente recurso especializado.
          </p>

          <div className={styles.highlightBox}>
            👉{" "}
            <a
              href="https://recaudodecartera.com/cobranzas-empresariales-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver guía especializada sobre cobranzas empresariales en Colombia
            </a>
          </div>
        </section>

        {/* ERRORES FRECUENTES */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Errores frecuentes en la recuperación de cartera EPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Muchas instituciones de salud enfrentan dificultades para recuperar
            recursos no porque la obligación no exista, sino porque no cuentan
            con una estrategia organizada para gestionar la cartera desde sus
            primeras etapas.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Esperar demasiado tiempo antes de iniciar acciones de recuperación",

              "No conservar adecuadamente los soportes que acreditan la prestación del servicio",

              "No realizar seguimiento constante a la cartera pendiente",

              "No diferenciar entre cartera recuperable y cartera con alto riesgo jurídico",

              "Iniciar procesos sin una revisión completa de la documentación disponible",

              "Gestionar la cartera únicamente desde el área administrativa sin apoyo jurídico especializado",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ESTRATEGIA */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            La importancia de una estrategia especializada para recuperar
            cartera de IPS frente a EPS
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            La recuperación de cartera en el sector salud requiere mucho más que
            realizar solicitudes de pago. Es necesario integrar análisis
            financiero, revisión documental, conocimiento del funcionamiento del
            sistema de salud y una estrategia jurídica adecuada.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Diagnóstico inicial de cartera</h4>

              <p>
                Permite identificar cuáles obligaciones tienen mayor viabilidad
                de recuperación y cuáles requieren acciones específicas.
              </p>
            </div>

            <div>
              <h4>✔ Organización documental</h4>

              <p>
                Facilita demostrar la existencia de la obligación y fortalecer
                las actuaciones administrativas o judiciales.
              </p>
            </div>

            <div>
              <h4>✔ Seguimiento permanente</h4>

              <p>
                Ayuda a evitar que la cartera continúe creciendo sin una gestión
                adecuada.
              </p>
            </div>

            <div>
              <h4>✔ Visión jurídica y financiera</h4>

              <p>
                Permite tomar decisiones basadas en la realidad económica de la
                institución y no únicamente en el valor de la deuda.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            Recuperar cartera EPS requiere combinar estrategia, oportunidad y
            conocimiento especializado del sector salud para aumentar las
            posibilidades de obtener resultados favorables.
          </div>
        </section>

        {/* RECURSO RELACIONADO */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Recursos relacionados sobre recuperación de cartera empresarial en
            Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Si desea conocer más estrategias relacionadas con recuperación de
            cartera, cobro empresarial y gestión jurídica de obligaciones
            pendientes, puede consultar el siguiente recurso especializado.
          </motion.p>

          <div className={styles.highlightBox}>
            👉{" "}
            <a
              href="https://recaudodecartera.com/cobranzas-empresariales-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocer guía especializada sobre cobranzas empresariales en
              Colombia
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className={styles.cta}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>
              ¿Tiene cartera pendiente con una EPS? Evalúe una estrategia de
              recuperación jurídica
            </h2>

            <p className={styles.ctaText}>
              Analice las alternativas disponibles para recuperar recursos
              adeudados, fortalecer el flujo de caja de su IPS o clínica y tomar
              decisiones oportunas frente a cartera vencida del sector salud.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Solicitar orientación
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
          </motion.div>
        </section>
      </main>
    </>
  );
}
