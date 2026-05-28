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
            Cobro judicial de cartera EPS para IPS y clínicas
          </span>

          <h1 className={styles.title}>
            Proceso ejecutivo contra EPS en Colombia: cómo funciona el cobro
            judicial de cartera en el sector salud
          </h1>

          <p className={styles.description}>
            Conozca cómo funciona un proceso ejecutivo contra EPS en Colombia,
            cuándo puede utilizarse y cuáles son los principales mecanismos
            jurídicos para recuperar cartera vencida en IPS, clínicas y
            prestadores de salud.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Recibir orientación
            </a>

            <a
              href="https://recaudodecartera.com/cobranzas-empresariales-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Ver solución especializada
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
            Qué es un proceso ejecutivo contra EPS en Colombia
          </motion.h2>

          <p className={styles.text}>
            El proceso ejecutivo es un mecanismo judicial utilizado para exigir
            el pago de obligaciones claras, expresas y exigibles. En el sector
            salud colombiano, suele aplicarse cuando existen cuentas pendientes
            entre EPS, IPS y demás prestadores de servicios de salud.
          </p>

          <div className={styles.highlightBox}>
            Este tipo de proceso puede incluir medidas cautelares, embargo de
            bienes y acciones judiciales orientadas a proteger los recursos
            financieros de las instituciones prestadoras de salud.
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

        {/* ETAPAS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Etapas generales de un proceso ejecutivo para recuperación de
            cartera
          </h2>

          <div className={styles.grid}>
            {[
              "Revisión documental y validación de soportes",
              "Análisis de viabilidad jurídica",
              "Estructuración de demanda ejecutiva",
              "Presentación ante autoridad competente",
              "Solicitud de medidas cautelares",
              "Seguimiento hasta recuperación del pago",
            ].map((step, i) => (
              <motion.div key={i} className={styles.card}>
                <h3>Etapa {i + 1}</h3>
                <p>{step}</p>
              </motion.div>
            ))}
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

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Evalúe alternativas para recuperar cartera EPS en Colombia
            </h2>

            <p className={styles.ctaText}>
              Analice opciones jurídicas, administrativas y estratégicas para
              proteger el flujo financiero de su IPS o clínica frente a cartera
              vencida en el sector salud.
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
