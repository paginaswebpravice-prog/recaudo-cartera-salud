"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function RecuperacionCarteraEPSPage() {
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
            Recuperación de cartera EPS en Bogotá y Colombia
          </span>

          <h1 className={styles.title}>
            Recuperación de cartera EPS en Colombia para IPS, clínicas y
            prestadores de salud
          </h1>

          <p className={styles.description}>
            Servicio jurídico especializado en recuperación de cartera en el
            sector salud en Colombia. Implementamos estrategias legales,
            prejurídicas y judiciales para maximizar el recaudo de cartera EPS,
            gestionar cuentas ante ADRES y proteger el flujo financiero de IPS,
            clínicas y prestadores de servicios de salud.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>
            <a href="/Blog" className={styles.secondary}>
              Ver guías legales
            </a>
          </div>
        </motion.div>
      </section>

      <main className={styles.container}>
        {/* ================= CONTEXTO SEO ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Qué es la recuperación de cartera EPS en Colombia?
          </h2>

          <p className={styles.text}>
            La recuperación de cartera EPS es el conjunto de estrategias
            jurídicas, financieras y administrativas orientadas a recuperar los
            valores adeudados por entidades promotoras de salud (EPS), ADRES y
            entidades territoriales a favor de IPS, clínicas y prestadores de
            servicios de salud en Colombia.
          </p>

          <div className={styles.highlightBox}>
            Este proceso incluye desde la gestión prejurídica hasta la ejecución
            de procesos judiciales, aplicación de medidas cautelares y
            estructuración documental para garantizar el pago efectivo de la
            cartera.
          </div>
        </section>

        {/* ================= PROBLEMAS ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Principales problemas en la cartera de EPS
          </h2>

          <div className={styles.grid}>
            {[
              "Mora prolongada en pagos por parte de EPS",
              "Glosas injustificadas que afectan el recaudo",
              "Falta de soportes para iniciar procesos judiciales",
              "Errores en facturación y radicación",
              "Procesos administrativos ineficientes",
              "Cartera en riesgo de prescripción",
              "Dependencia financiera de pagos de EPS",
              "Falta de estrategia jurídica especializada",
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
            ⚠ Muchas instituciones de salud en Colombia pierden millones de
            pesos al año por no contar con una estrategia jurídica estructurada
            para la recuperación de cartera.
          </div>
        </section>

        {/* ================= SOLUCIÓN ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Modelo integral de recuperación de cartera
          </h2>

          <p className={styles.text}>
            Nuestro servicio combina análisis jurídico, validación documental y
            estrategias legales diseñadas específicamente para el sector salud
            en Colombia, logrando aumentar significativamente el recaudo y
            reducir la cartera vencida.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Cobro prejurídico estratégico</h4>
              <p>
                Gestión directa con EPS para lograr acuerdos de pago sin acudir
                a procesos judiciales.
              </p>
            </div>

            <div>
              <h4>✔ Procesos ejecutivos</h4>
              <p>
                Demandas judiciales para exigir el pago de obligaciones claras,
                expresas y exigibles.
              </p>
            </div>

            <div>
              <h4>✔ Recuperación ante ADRES</h4>
              <p>
                Gestión de cartera NO PBS, accidentes de tránsito y servicios
                especiales.
              </p>
            </div>

            <div>
              <h4>✔ Medidas cautelares</h4>
              <p>
                Embargos y acciones legales para garantizar el recaudo efectivo.
              </p>
            </div>

            <div>
              <h4>✔ Auditoría de cartera</h4>
              <p>
                Identificación de oportunidades de recuperación y depuración de
                cuentas.
              </p>
            </div>

            <div>
              <h4>✔ Prevención de pérdidas</h4>
              <p>
                Estrategias para evitar prescripción y deterioro de la cartera.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROCESO ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de recuperación?
          </h2>

          <div className={styles.grid}>
            {[
              "Diagnóstico completo de la cartera",
              "Revisión y validación documental",
              "Definición de estrategia jurídica",
              "Gestión prejurídica y negociación",
              "Inicio de procesos judiciales",
              "Aplicación de medidas cautelares",
              "Seguimiento y recaudo efectivo",
            ].map((step, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
              >
                <h3>Fase {i + 1}</h3>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= COMPARATIVO ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Diferencia entre gestión interna vs gestión especializada
          </h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Gestión interna</h3>
              <p>❌ Baja recuperación de cartera</p>
              <p>❌ Falta de estrategia jurídica</p>
              <p>❌ Alto riesgo de prescripción</p>
              <p>❌ Procesos desorganizados</p>
            </div>

            <div className={styles.card}>
              <h3>Con nuestro equipo</h3>
              <p>✔ Mayor tasa de recaudo</p>
              <p>✔ Estrategia legal estructurada</p>
              <p>✔ Protección jurídica</p>
              <p>✔ Optimización financiera</p>
            </div>
          </div>
        </section>

        {/* ================= BENEFICIOS ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios para tu institución de salud
          </h2>

          <div className={styles.benefits}>
            <span>✔ Aumento del flujo de caja</span>
            <span>✔ Reducción de cartera vencida</span>
            <span>✔ Seguridad jurídica</span>
            <span>✔ Optimización de procesos</span>
            <span>✔ Prevención de pérdidas</span>
            <span>✔ Mejora en la liquidez</span>
            <span>✔ Mayor control financiero</span>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre cartera EPS
          </h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>¿Cuánto tiempo tarda recuperar cartera?</h4>
              <p>
                Depende del estado de la cartera, pero puede ir desde gestión
                prejurídica hasta procesos judiciales de mediano plazo.
              </p>
            </div>

            <div>
              <h4>¿Se puede recuperar cartera antigua?</h4>
              <p>
                Sí, siempre que no haya prescrito y exista soporte documental
                adecuado.
              </p>
            </div>

            <div>
              <h4>¿Qué pasa si la EPS no paga?</h4>
              <p>
                Se pueden iniciar procesos ejecutivos y aplicar medidas
                cautelares para garantizar el pago.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section id="contacto" className={styles.cta}>
          <div>
            <h2 className={styles.ctaTitle}>
              Recupera tu cartera con respaldo legal experto
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo especializado en recuperación de cartera EPS en
              Colombia ayuda a IPS, clínicas y prestadores de salud a mejorar su
              flujo financiero, reducir la mora y recuperar recursos de manera
              efectiva.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Solicitar asesoría
              </a>

              <a
                href="https://api.whatsapp.com"
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
