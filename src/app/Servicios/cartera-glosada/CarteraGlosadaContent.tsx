"use client";

import { motion } from "framer-motion";
import styles from "../Servicios.module.css";

export default function CarteraGlosadaContent() {
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
            Gestión estratégica de glosas EPS en Colombia
          </span>

          <h1 className={styles.title}>
            Cartera glosada en IPS y clínicas en Colombia: causas, impacto
            financiero y cómo reducir pérdidas
          </h1>

          <p className={styles.description}>
            Las glosas EPS representan uno de los principales factores de
            afectación financiera para IPS, clínicas y prestadores de salud en
            Colombia. Una gestión ineficiente puede aumentar la cartera vencida,
            afectar el flujo de caja y disminuir la capacidad operativa de las
            instituciones.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Recibir orientación
            </a>

            <a
              href="https://recaudodecartera.com/cobro-glosas-eps-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Conocer estrategia especializada
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Principales problemas asociados a la cartera glosada en Colombia
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Muchas instituciones del sector salud enfrentan dificultades para
            responder glosas dentro de los tiempos establecidos, organizar
            soportes clínicos y hacer seguimiento efectivo a las objeciones
            realizadas por EPS.
          </motion.p>

          <div className={styles.grid}>
            {[
              "Incremento de cartera retenida por glosas",
              "Respuestas extemporáneas ante EPS",
              "Procesos internos desorganizados",
              "Falta de trazabilidad documental",
              "Alto volumen de devoluciones y objeciones",
              "Impacto financiero sobre liquidez y operación",
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

          <div className={styles.warningBox}>
            ⚠ Las glosas no resueltas oportunamente pueden convertirse en
            pérdidas financieras importantes para IPS y clínicas en Colombia.
          </div>
        </section>

        {/* CONTEXTO */}
        <section className={styles.section}>
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Cómo impactan las glosas EPS el flujo de caja de IPS y clínicas
          </motion.h2>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Cuando una factura entra en proceso de glosa, el recaudo esperado se
            retrasa y afecta directamente la liquidez institucional. Esto genera
            dificultades para cubrir costos operativos, nómina, proveedores y
            crecimiento organizacional.
          </motion.p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Disminución de liquidez</h4>
              <p>
                El dinero pendiente de pago limita la capacidad operativa de las
                instituciones de salud.
              </p>
            </div>

            <div>
              <h4>✔ Incremento de cartera vencida</h4>
              <p>
                Las glosas acumuladas pueden convertirse en cuentas de difícil
                recaudo.
              </p>
            </div>

            <div>
              <h4>✔ Sobrecarga administrativa</h4>
              <p>
                El personal debe invertir tiempo adicional en conciliaciones y
                seguimiento.
              </p>
            </div>

            <div>
              <h4>✔ Riesgo financiero institucional</h4>
              <p>
                El retraso constante en pagos afecta sostenibilidad y
                rentabilidad.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            📌 Una adecuada gestión de glosas permite mejorar el recaudo y
            fortalecer el flujo de caja institucional.
          </div>
        </section>

        {/* TIPOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Tipos de glosas más frecuentes en EPS en Colombia
          </h2>

          <p className={styles.text}>
            Las objeciones realizadas por EPS pueden originarse por múltiples
            factores administrativos, médicos o técnicos que afectan la
            aprobación y pago de facturas.
          </p>

          <div className={styles.grid}>
            {[
              "Glosas administrativas",
              "Glosas médicas",
              "Glosas por pertinencia",
              "Glosas por soportes incompletos",
              "Glosas tarifarias",
              "Glosas por inconsistencias en facturación",
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                whileHover={{ scale: 1.03 }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RECURSOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Recursos y estrategias relacionadas con glosas y recaudo en salud
          </h2>

          <p className={styles.text}>
            Comprender el comportamiento de la cartera glosada y fortalecer los
            procesos internos puede ayudar a reducir riesgos financieros en el
            sector salud colombiano.
          </p>

          <div className={styles.resourcesBox}>
            <a
              href="https://recaudodecartera.com/cobro-glosas-eps-colombia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Estrategias especializadas para cobro de glosas EPS en Colombia
            </a>

            <a
              href="https://recaudodecartera.com/recuperacion-cartera-ips-clinicas.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceLink}
            >
              Gestión de recuperación de cartera para IPS y clínicas
            </a>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de optimizar la gestión de glosas en instituciones de
            salud
          </h2>

          <div className={styles.benefits}>
            <span>✔ Mayor control financiero</span>
            <span>✔ Disminución de cartera retenida</span>
            <span>✔ Mejor trazabilidad documental</span>
            <span>✔ Reducción de reprocesos administrativos</span>
            <span>✔ Optimización del flujo de caja</span>
            <span>✔ Mayor sostenibilidad institucional</span>
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Fortalece la gestión de cartera glosada en tu institución
            </h2>

            <p className={styles.ctaText}>
              Optimizar los procesos relacionados con glosas EPS puede ayudar a
              mejorar el recaudo, reducir riesgos financieros y fortalecer la
              sostenibilidad de IPS y clínicas en Colombia.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Contactar ahora
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
