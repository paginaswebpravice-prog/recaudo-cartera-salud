"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function CobroAdresContent() {
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
            Cobro de cartera ADRES en Colombia
          </span>

          {/* H1 OPTIMIZADO CTR */}
          <h1 className={styles.title}>
            Cómo cobrar cartera ante ADRES en Colombia sin devoluciones (SOAT,
            NO PBS y ECAT)
          </h1>

          <p className={styles.description}>
            Recupera valores pendientes ante ADRES por servicios NO PBS,
            accidentes de tránsito, recobros y tecnologías en salud. Asesoramos
            a IPS y prestadores en Colombia para optimizar el proceso de cobro,
            evitar devoluciones y maximizar el recaudo efectivo.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>
            <a href="/Blog" className={styles.secondary}>
              Ver artículos relacionados
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
            Errores que causan devoluciones en el cobro ante ADRES en Colombia
          </motion.h2>

          <div className={styles.grid}>
            {[
              "Devoluciones constantes por errores en radicación",
              "Falta de soportes técnicos o inconsistencias en la factura",
              "Demoras prolongadas en el reconocimiento y pago",
              "Desconocimiento de rutas específicas (SOAT, NO PBS, ECAT)",
              "Pérdida de valores por incumplimiento de requisitos normativos",
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
            ⚠ Muchas IPS en Colombia pierden recursos ante ADRES por errores
            evitables en la estructuración del cobro.
          </div>
        </section>

        {/* QUE ES ADRES */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Qué es ADRES en Colombia y qué cartera puedes recuperar (SOAT, NO
            PBS, ECAT)
          </h2>

          <p className={styles.text}>
            La Administradora de los Recursos del Sistema General de Seguridad
            Social en Salud (ADRES) es la entidad encargada de gestionar y
            reconocer recursos del sistema de salud en Colombia.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Servicios NO PBS</h4>
              <p>Tecnologías no incluidas en el plan de beneficios.</p>
            </div>

            <div>
              <h4>✔ Accidentes de tránsito (SOAT - ECAT)</h4>
              <p>Eventos cubiertos por el sistema de riesgos.</p>
            </div>

            <div>
              <h4>✔ Recobros y reclamaciones</h4>
              <p>Valores reconocidos tras validación técnica.</p>
            </div>

            <div>
              <h4>✔ Servicios no reconocidos por EPS</h4>
              <p>Casos donde responde directamente ADRES.</p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 Un adecuado enfoque jurídico y técnico puede marcar la diferencia
            entre rechazo y pago.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicio especializado para recuperar cartera ante ADRES en Colombia
          </h2>

          <p className={styles.text}>
            Implementamos un modelo integral para reducir devoluciones y
            asegurar cumplimiento normativo.
          </p>

          <div className={styles.grid}>
            {[
              "Auditoría documental",
              "Estructuración técnica del cobro",
              "Corrección de devoluciones",
              "Radicación estratégica",
              "Seguimiento continuo",
              "Acompañamiento jurídico",
            ].map((item, i) => (
              <motion.div key={i} className={styles.card}>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Cómo hacemos el cobro ante ADRES paso a paso en Colombia
          </h2>

          <div className={styles.grid}>
            {[
              "Diagnóstico de cartera",
              "Revisión normativa",
              "Estructuración documental",
              "Radicación",
              "Seguimiento",
              "Recuperación",
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
            Beneficios de recuperar cartera ADRES para IPS y clínicas en
            Colombia
          </h2>

          <div className={styles.benefits}>
            <span>✔ Reducción de devoluciones</span>
            <span>✔ Mayor tasa de aprobación</span>
            <span>✔ Recuperación de recursos</span>
            <span>✔ Cumplimiento normativo</span>
            <span>✔ Mejor flujo de caja</span>
            <span>✔ Soporte jurídico</span>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Recupera cartera ante ADRES en Colombia sin errores ni
              devoluciones
            </h2>

            <p className={styles.ctaText}>
              Te ayudamos a estructurar correctamente tus cobros ante ADRES en
              Colombia, evitando devoluciones y maximizando el recaudo.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Contactar ahora
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                target="_blank"
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
