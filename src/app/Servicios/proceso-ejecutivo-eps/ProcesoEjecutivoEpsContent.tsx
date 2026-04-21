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
            Proceso ejecutivo contra EPS en Colombia
          </span>

          <h1 className={styles.title}>
            Demanda ejecutiva contra EPS en Colombia: recuperación de cartera,
            embargos y cobro efectivo
          </h1>

          <p className={styles.description}>
            Inicia acciones judiciales para recuperar cartera vencida de EPS en
            Colombia. Representamos a IPS, clínicas y prestadores de salud en
            procesos ejecutivos, garantizando estrategias legales efectivas para
            lograr el pago de obligaciones pendientes.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Iniciar proceso
            </a>
            <a href="/Blog" className={styles.secondary}>
              Ver contenido legal
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* PROBLEMA */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Cuándo iniciar una demanda ejecutiva contra una EPS en Colombia?
          </motion.h2>

          <div className={styles.grid}>
            {[
              "Cartera vencida sin respuesta efectiva",
              "Incumplimiento reiterado en pagos",
              "Negativa injustificada de reconocimiento",
              "Acuerdos de pago incumplidos",
              "Alto riesgo de prescripción de cartera",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ Si no se actúa a tiempo, la cartera puede perderse definitivamente
            por prescripción o falta de gestión jurídica.
          </div>
        </section>

        {/* QUE ES */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Qué es un proceso ejecutivo contra EPS y cómo funciona en Colombia?
          </h2>

          <p className={styles.text}>
            El proceso ejecutivo es una acción judicial que permite exigir el
            pago de obligaciones claras, expresas y exigibles. En el sector
            salud, este mecanismo es clave para que las IPS y clínicas puedan
            recuperar cartera vencida frente a EPS cuando las gestiones
            administrativas no han sido efectivas.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Título ejecutivo</h4>
              <p>
                Facturas, contratos, actas o documentos que acrediten la deuda.
              </p>
            </div>

            <div>
              <h4>✔ Obligación exigible</h4>
              <p>La deuda debe estar vencida y no sujeta a condiciones.</p>
            </div>

            <div>
              <h4>✔ Acción judicial directa</h4>
              <p>
                Permite solicitar medidas como embargo y secuestro de bienes.
              </p>
            </div>

            <div>
              <h4>✔ Protección del acreedor</h4>
              <p>Garantiza herramientas legales para asegurar el pago.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 El proceso ejecutivo es la vía más efectiva cuando la gestión de
            cobro prejurídico no da resultados.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicio jurídico de proceso ejecutivo para cobro de cartera EPS en
            Colombia
          </h2>

          <p className={styles.text}>
            Diseñamos e implementamos estrategias jurídicas para la recuperación
            efectiva de cartera mediante procesos ejecutivos en Colombia,
            priorizando rapidez, seguridad y resultados.
          </p>

          <div className={styles.grid}>
            {[
              "Análisis jurídico de viabilidad del proceso",
              "Validación de títulos ejecutivos",
              "Estructuración de demanda ejecutiva",
              "Solicitud de medidas cautelares",
              "Representación judicial completa",
              "Seguimiento hasta el pago efectivo",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Cómo se desarrolla un proceso ejecutivo contra EPS paso a paso?
          </h2>

          <div className={styles.grid}>
            {[
              "Revisión de cartera y documentos",
              "Determinación de estrategia legal",
              "Presentación de demanda ejecutiva",
              "Solicitud de embargo y medidas cautelares",
              "Seguimiento procesal",
              "Recuperación del pago",
            ].map((step, i) => (
              <motion.div key={i} className={styles.card}>
                <h3>Paso {i + 1}</h3>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios del proceso ejecutivo contra EPS para IPS y clínicas
          </h2>

          <div className={styles.benefits}>
            <span>✔ Recuperación efectiva de cartera vencida</span>
            <span>✔ Presión legal sobre la EPS</span>
            <span>✔ Posibilidad de embargo de bienes</span>
            <span>✔ Reducción de riesgo de pérdida</span>
            <span>✔ Seguridad jurídica</span>
            <span>✔ Acompañamiento experto</span>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Por qué iniciar un proceso ejecutivo con nosotros en Colombia?
          </h2>

          <p className={styles.text}>
            Contamos con experiencia en recuperación de cartera en el sector
            salud en Colombia, entendiendo la complejidad de las EPS y las
            dinámicas del sistema. Nuestro enfoque combina técnica jurídica con
            estrategia financiera para maximizar resultados.
          </p>

          <div className={styles.highlightBox}>
            🚀 No solo demandamos: diseñamos estrategias para recuperar el
            dinero de forma efectiva.
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Inicia tu proceso ejecutivo contra EPS y recupera tu cartera hoy
            </h2>

            <p className={styles.ctaText}>
              Si tu IPS o clínica tiene cartera vencida con EPS en Colombia, es
              momento de actuar. Nuestro equipo jurídico está listo para iniciar
              el proceso y proteger tus intereses financieros.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Iniciar proceso ahora
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                target="_blank"
                className={styles.secondary}
              >
                Hablar con un abogado
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
