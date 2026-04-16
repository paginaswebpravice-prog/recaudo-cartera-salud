"use client";

import { motion } from "framer-motion";
import styles from "../Sectores.module.css";

export default function IPSContent() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Sector salud en Colombia</span>

          <h1 className={styles.title}>
            IPS en Colombia: desafíos financieros y sostenibilidad operativa
          </h1>

          <p className={styles.description}>
            Las Instituciones Prestadoras de Salud (IPS) en Colombia enfrentan
            una presión constante sobre su flujo de caja debido a la mora en
            pagos, la complejidad administrativa y la acumulación de cartera.
            Comprender estos desafíos es clave para garantizar la sostenibilidad
            financiera y la continuidad en la prestación de servicios de salud.
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
          <motion.h2 className={styles.subtitle}>
            Problemáticas recurrentes en las IPS en Colombia
          </motion.h2>

          <motion.p className={styles.text}>
            En el contexto del sistema de salud colombiano, las IPS enfrentan
            múltiples factores que afectan su estabilidad financiera. Estas
            situaciones no solo impactan la liquidez, sino también la capacidad
            de operación y crecimiento.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Retrasos prolongados en pagos por parte de EPS",
              "Acumulación de cartera vencida difícil de recuperar",
              "Alto volumen de glosas y devoluciones",
              "Procesos administrativos complejos y poco eficientes",
              "Falta de trazabilidad en cuentas por cobrar",
              "Dependencia financiera de terceros pagadores",
            ].map((item, i) => (
              <motion.div key={i} className={styles.card}>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className={styles.warningBox}>
            ⚠ La acumulación de cartera en las IPS puede comprometer la
            continuidad del servicio y generar riesgos operativos críticos.
          </motion.div>
        </section>

        {/* IMPACTO */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Impacto financiero en las IPS
          </motion.h2>

          <motion.p className={styles.text}>
            La falta de liquidez derivada de la cartera pendiente afecta
            directamente la operación diaria de las IPS en Colombia. Esto se
            traduce en limitaciones para invertir, contratar personal o ampliar
            servicios, generando un efecto en cadena dentro del sistema de
            salud.
          </motion.p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Flujo de caja limitado",
                text: "Dificultad para cubrir gastos operativos básicos como nómina, insumos y proveedores.",
              },
              {
                title: "✔ Restricción en crecimiento",
                text: "Imposibilidad de expandir servicios o mejorar infraestructura.",
              },
              {
                title: "✔ Riesgo operativo",
                text: "Impacto en la continuidad de la atención a pacientes.",
              },
              {
                title: "✔ Desbalance financiero",
                text: "Incremento de pasivos frente a ingresos no percibidos.",
              },
            ].map((item, i) => (
              <motion.div key={i}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className={styles.highlightBox}>
            ✔ Una gestión inadecuada de cartera puede convertirse en uno de los
            principales factores de riesgo financiero para una IPS en Colombia.
          </motion.div>
        </section>

        {/* TIPOS */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Tipos de IPS y sus particularidades
          </motion.h2>

          <div className={styles.grid}>
            {[
              "IPS de baja complejidad con alta dependencia de flujo mensual",
              "IPS especializadas con alto volumen de facturación",
              "Centros médicos ambulatorios",
              "Redes de prestación de servicios en salud",
              "Prestadores independientes",
            ].map((item, i) => (
              <motion.div key={i} className={styles.card}>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NECESIDAD */}
        <section className={styles.section}>
          <motion.h2 className={styles.subtitle}>
            Necesidad de estrategias especializadas
          </motion.h2>

          <motion.p className={styles.text}>
            Frente a este panorama, las IPS en Colombia requieren implementar
            estrategias estructuradas que permitan mejorar la gestión de
            cartera, optimizar procesos internos y fortalecer su estabilidad
            financiera en el mediano y largo plazo.
          </motion.p>

          <motion.div className={styles.highlightBox}>
            Muchas IPS están migrando hacia modelos más estructurados de gestión
            financiera para reducir riesgos y mejorar su capacidad de recaudo.
          </motion.div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <motion.div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Fortalece la estabilidad financiera de tu IPS
            </h2>

            <p className={styles.ctaText}>
              Si tu institución enfrenta dificultades con cartera o flujo de
              caja, es clave actuar a tiempo con un enfoque estratégico que
              permita mejorar la sostenibilidad y operación en el sistema de
              salud colombiano.
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
