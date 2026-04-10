"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function CobroAdresPage() {
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

          <h1 className={styles.title}>
            Cobro de cartera ante ADRES en Colombia para IPS y clínicas
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
            Problemas frecuentes en el cobro ante ADRES
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
            ¿Qué es ADRES y qué tipo de cartera se puede cobrar?
          </h2>

          <p className={styles.text}>
            La Administradora de los Recursos del Sistema General de Seguridad
            Social en Salud (ADRES) es la entidad encargada de gestionar y
            reconocer recursos del sistema de salud en Colombia. Las IPS pueden
            recuperar valores derivados de diferentes conceptos, siempre que
            cumplan con requisitos técnicos y normativos.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Servicios NO PBS</h4>
              <p>
                Tecnologías en salud no incluidas en el plan de beneficios que
                requieren proceso de reconocimiento.
              </p>
            </div>

            <div>
              <h4>✔ Accidentes de tránsito (SOAT - ECAT)</h4>
              <p>
                Servicios derivados de accidentes cubiertos por el sistema de
                riesgos y eventos catastróficos.
              </p>
            </div>

            <div>
              <h4>✔ Recobros y reclamaciones</h4>
              <p>
                Valores que deben ser reconocidos por el sistema tras validación
                técnica y jurídica.
              </p>
            </div>

            <div>
              <h4>✔ Servicios no reconocidos por EPS</h4>
              <p>
                Casos donde la responsabilidad recae directamente en ADRES bajo
                condiciones específicas.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 Un adecuado enfoque jurídico y técnico puede marcar la diferencia
            entre una cuenta rechazada y un recaudo efectivo.
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Nuestro servicio de recuperación de cartera ante ADRES
          </h2>

          <p className={styles.text}>
            Implementamos un modelo integral para la gestión y recuperación de
            cartera ante ADRES, enfocado en reducir devoluciones, corregir
            inconsistencias y asegurar el cumplimiento de requisitos normativos.
          </p>

          <div className={styles.grid}>
            {[
              "Auditoría y validación documental completa",
              "Estructuración técnica del cobro",
              "Corrección de glosas y devoluciones",
              "Radicación estratégica de cuentas",
              "Seguimiento continuo hasta el pago",
              "Acompañamiento jurídico especializado",
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
            ¿Cómo gestionamos el cobro ante ADRES?
          </h2>

          <div className={styles.grid}>
            {[
              "Diagnóstico de cartera y clasificación de casos",
              "Revisión de requisitos técnicos y normativos",
              "Ajuste y estructuración documental",
              "Radicación y gestión ante ADRES",
              "Seguimiento y control del proceso",
              "Recuperación efectiva de recursos",
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
            Beneficios para tu institución de salud
          </h2>

          <div className={styles.benefits}>
            <span>✔ Reducción de devoluciones</span>
            <span>✔ Mayor tasa de aprobación</span>
            <span>✔ Recuperación de recursos retenidos</span>
            <span>✔ Cumplimiento normativo</span>
            <span>✔ Optimización del flujo de caja</span>
            <span>✔ Acompañamiento jurídico especializado</span>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Recupera tu cartera ante ADRES sin errores ni reprocesos
            </h2>

            <p className={styles.ctaText}>
              Te ayudamos a estructurar correctamente tus cobros ante ADRES en
              Colombia, evitando devoluciones y maximizando el recaudo. Nuestro
              equipo especializado está listo para acompañarte en todo el
              proceso.
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
