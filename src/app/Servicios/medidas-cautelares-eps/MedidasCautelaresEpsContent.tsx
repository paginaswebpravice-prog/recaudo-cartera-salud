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
          <h2 className={styles.subtitle}>
            Riesgos financieros asociados a cartera EPS sin protección jurídica
          </h2>

          <div className={styles.grid}>
            {[
              "Incremento de cartera vencida",
              "Dificultades de liquidez para IPS",
              "Riesgo de insolvencia del deudor",
              "Demoras prolongadas en recuperación",
              "Pérdida de capacidad operativa",
              "Afectación del flujo financiero institucional",
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
            ⚠ En algunos casos, iniciar acciones judiciales sin mecanismos de
            protección puede dificultar la recuperación efectiva de la cartera.
          </div>
        </section>

        {/* TIPOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Tipos de medidas cautelares utilizadas en procesos de cartera del
            sector salud
          </h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Embargo de cuentas</h4>

              <p>
                Retención preventiva de recursos financieros asociados al
                deudor.
              </p>
            </div>

            <div>
              <h4>✔ Retención de pagos</h4>

              <p>
                Medidas orientadas a asegurar recursos derivados de operaciones
                futuras.
              </p>
            </div>

            <div>
              <h4>✔ Medidas sobre activos</h4>

              <p>
                Protección jurídica sobre bienes relacionados con la obligación.
              </p>
            </div>

            <div>
              <h4>✔ Integración con procesos ejecutivos</h4>

              <p>
                Las medidas cautelares suelen complementarse con acciones de
                cobro judicial.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 La estrategia cautelar depende del tipo de cartera, la
            documentación disponible y las condiciones del proceso.
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
