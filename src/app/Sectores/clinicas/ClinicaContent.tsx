"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function ClinicasContent() {
  return (
    <>
      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Recuperación de cartera para clínicas en Colombia",
            description:
              "Servicio especializado en recuperación de cartera EPS para clínicas en Bogotá y Colombia.",
            areaServed: {
              "@type": "Country",
              name: "Colombia",
            },
            provider: {
              "@type": "Organization",
              name: "PRAVICE",
            },
            url: "https://recaudocarteraipsyeps.com/Sectores/clinicas",
          }),
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Sector privado de salud en Colombia
          </span>

          <h1 className={styles.title}>
            Clínicas en Colombia: rentabilidad, facturación y flujo de caja
          </h1>

          <p className={styles.description}>
            Las clínicas en Colombia operan bajo una lógica empresarial donde la
            facturación, el recaudo y la eficiencia financiera son clave. La
            acumulación de cartera, los retrasos en pagos y los procesos
            administrativos impactan directamente la rentabilidad y la
            sostenibilidad del negocio.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Recibir orientación
            </a>
            <a href="/#solucion" className={styles.secondary}>
              Ver soluciones
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* PROBLEMÁTICA */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Principales desafíos en clínicas privadas
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            A diferencia de otras instituciones del sector salud, las clínicas
            enfrentan una presión constante por mantener indicadores financieros
            saludables, optimizar su operación y garantizar la rentabilidad en
            un entorno altamente regulado.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Alto volumen de facturación sin recaudo oportuno",
              "Cartera vencida que afecta la liquidez",
              "Glosas que impactan ingresos proyectados",
              "Retrasos en pagos por parte de EPS",
              "Costos operativos elevados (personal, tecnología, insumos)",
              "Falta de eficiencia en procesos de cobro y seguimiento",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
              >
                <p>{item}</p>
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
            ⚠ Una mala gestión de cartera puede reducir significativamente la
            rentabilidad de una clínica, incluso cuando su facturación es alta.
          </motion.div>
        </section>

        {/* IMPACTO */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Impacto directo en la rentabilidad
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            La rentabilidad de una clínica no depende únicamente de cuánto
            factura, sino de su capacidad para convertir esa facturación en
            ingresos reales. La acumulación de cartera afecta indicadores
            financieros clave y limita la toma de decisiones estratégicas.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Pérdida de liquidez",
                text: "Ingresos no percibidos afectan la operación diaria.",
              },
              {
                title: "✔ Reducción de márgenes",
                text: "Costos fijos altos frente a ingresos demorados.",
              },
              {
                title: "✔ Limitación en inversión",
                text: "Dificultad para modernizar infraestructura o tecnología.",
              },
              {
                title: "✔ Riesgo financiero",
                text: "Desbalance entre ingresos proyectados y reales.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.highlightBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            ✔ Facturar no es suficiente: el verdadero indicador es el recaudo
            efectivo y la eficiencia financiera de la clínica.
          </motion.div>
        </section>

        {/* OPERACIÓN */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Complejidad operativa en clínicas
          </motion.h2>

          <motion.p className={styles.text}>
            Las clínicas manejan altos volúmenes de pacientes, facturación y
            procesos administrativos, lo que incrementa la complejidad en la
            gestión financiera y operativa.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Gestión simultánea de múltiples EPS",
              "Altos volúmenes de cuentas por cobrar",
              "Procesos internos fragmentados",
              "Dependencia de áreas administrativas",
              "Retrasos en conciliaciones y auditorías",
            ].map((item, i) => (
              <motion.div key={i} className={styles.card}>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <motion.div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Mejora la rentabilidad de tu clínica
            </h2>

            <p className={styles.ctaText}>
              Optimizar el flujo de caja y la gestión financiera es clave para
              garantizar el crecimiento y sostenibilidad de las clínicas en
              Colombia.
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
          </motion.div>
        </section>
      </main>
    </>
  );
}
