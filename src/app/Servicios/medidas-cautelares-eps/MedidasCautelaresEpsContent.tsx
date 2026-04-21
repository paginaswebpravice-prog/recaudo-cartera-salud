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
            Medidas cautelares contra EPS en Colombia
          </span>

          <h1 className={styles.title}>
            Embargos y medidas cautelares contra EPS en Colombia para asegurar
            el pago de cartera
          </h1>

          <p className={styles.description}>
            Protege el recaudo de tu cartera en Colombia mediante medidas
            cautelares como embargo de cuentas, retención de recursos y
            aseguramiento de activos. Apoyamos a IPS y clínicas en procesos
            judiciales para garantizar el pago efectivo de obligaciones por
            parte de las EPS.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar medidas cautelares
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
            Riesgos de no aplicar medidas cautelares en el cobro a EPS en
            Colombia
          </motion.h2>

          <div className={styles.grid}>
            {[
              "EPS sin liquidez al momento del pago",
              "Ocultamiento o traslado de recursos",
              "Procesos judiciales sin garantía de recaudo",
              "Demoras que afectan el flujo de caja",
              "Riesgo de insolvencia del deudor",
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
            ⚠ Demandar sin solicitar medidas cautelares puede dejarte con una
            sentencia sin pago efectivo.
          </div>
        </section>

        {/* QUE SON */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Qué son las medidas cautelares para EPS y por qué aseguran el
            recaudo?
          </h2>

          <p className={styles.text}>
            Las medidas cautelares son herramientas legales que permiten
            asegurar el cumplimiento de una obligación durante un proceso
            judicial. En el sector salud en Colombia, son clave para garantizar
            que una EPS cuente con los recursos necesarios para pagar la deuda
            reclamada.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Embargo de cuentas bancarias</h4>
              <p>
                Permite retener dinero directamente desde cuentas de la EPS.
              </p>
            </div>

            <div>
              <h4>✔ Retención de recursos</h4>
              <p>Bloqueo de flujos financieros para garantizar el pago.</p>
            </div>

            <div>
              <h4>✔ Embargo de bienes</h4>
              <p>Afectación de activos para respaldar la obligación.</p>
            </div>

            <div>
              <h4>✔ Medidas sobre ingresos futuros</h4>
              <p>Aseguramiento de recursos que la EPS reciba posteriormente.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 Las medidas cautelares aumentan significativamente la
            probabilidad de recuperar la cartera.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicio jurídico de embargos y medidas cautelares contra EPS en
            Colombia
          </h2>

          <p className={styles.text}>
            Diseñamos estrategias jurídicas para solicitar e implementar medidas
            cautelares efectivas en procesos contra EPS en Colombia, priorizando
            la protección del recaudo y la viabilidad del cobro.
          </p>

          <div className={styles.grid}>
            {[
              "Análisis de viabilidad de medidas cautelares",
              "Identificación de activos y recursos de la EPS",
              "Solicitud de embargo y retención",
              "Gestión ante entidades financieras",
              "Seguimiento y control de medidas",
              "Integración con proceso ejecutivo",
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
            ¿Cómo se aplican las medidas cautelares contra EPS paso a paso?
          </h2>

          <div className={styles.grid}>
            {[
              "Evaluación de la cartera y riesgo",
              "Definición de estrategia jurídica",
              "Solicitud ante el juez competente",
              "Ejecución de embargos y retenciones",
              "Seguimiento a entidades involucradas",
              "Aseguramiento del pago",
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
            Beneficios de aplicar medidas cautelares en el cobro a EPS
          </h2>

          <div className={styles.benefits}>
            <span>✔ Mayor probabilidad de recaudo</span>
            <span>✔ Protección del flujo de caja</span>
            <span>✔ Reducción del riesgo de no pago</span>
            <span>✔ Presión efectiva sobre la EPS</span>
            <span>✔ Seguridad jurídica</span>
            <span>✔ Estrategia integral de cobro</span>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Por qué las medidas cautelares son clave en el cobro a EPS?
          </h2>

          <p className={styles.text}>
            En muchos casos, ganar un proceso no garantiza el pago. Las medidas
            cautelares permiten asegurar desde el inicio que existan recursos
            disponibles para cumplir la obligación, evitando que el proceso
            termine sin resultados financieros.
          </p>

          <div className={styles.highlightBox}>
            🚀 No basta con demandar: hay que asegurar el pago desde el inicio.
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Asegura el pago de cartera con medidas cautelares contra EPS en
              Colombia
            </h2>

            <p className={styles.ctaText}>
              Te ayudamos a implementar medidas cautelares contra EPS en
              Colombia para proteger tu cartera y garantizar resultados reales
              en el proceso de cobro.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Solicitar medidas ahora
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
