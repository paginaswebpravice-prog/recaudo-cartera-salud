"use client";

import { motion } from "framer-motion";
import styles from "../styles/FinalCtaSection.module.css";

export default function FinalCtaSection() {
  return (
    <section className={styles.section} id="contacto">
      {/* TÍTULO */}
      <motion.h2
        className={styles.mainTitle}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ¿Su IPS, clínica u hospital tiene cartera pendiente con EPS? Conozca
        cómo una estrategia especializada puede ayudar a recuperar cuentas
        médicas y fortalecer su flujo financiero.
      </motion.h2>

      {/* INTRODUCCIÓN */}
      <motion.p
        className={styles.intro}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        viewport={{ once: true }}
      >
        Detrás de cada factura pendiente existe un servicio de salud que ya fue
        prestado, recursos invertidos por la institución y una operación que
        necesita mantener su estabilidad financiera. La recuperación de cartera
        hospitalaria va mucho más allá de iniciar un proceso jurídico; requiere
        analizar la documentación, evaluar glosas, identificar riesgos,
        priorizar las cuentas con mayor probabilidad de recuperación y definir
        la estrategia más adecuada para cada caso.
      </motion.p>

      <motion.p
        className={styles.intro}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.9 }}
        viewport={{ once: true }}
      >
        En PRAVICE ABOGADOS acompañamos a IPS, clínicas, hospitales,
        laboratorios y demás prestadores de servicios de salud mediante una
        metodología especializada para la gestión y recuperación de cartera
        frente a EPS, ADRES y demás entidades responsables del pago.
      </motion.p>

      {/* GRID */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* IZQUIERDA */}
        <motion.div
          className={styles.leftBox}
          variants={{
            hidden: { x: -60, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            No espere a que la cartera continúe envejeciendo y aumente el riesgo
            de perder oportunidades de recuperación
          </h3>

          <p>
            Muchas instituciones dejan pasar meses o incluso años antes de
            iniciar una revisión especializada de su cartera. Mientras tanto,
            aumentan las dificultades probatorias, se prolongan las
            conciliaciones, aparecen nuevos obstáculos administrativos y se
            incrementa el riesgo de prescripción de algunas obligaciones.
          </p>

          <p>
            Una evaluación temprana permite identificar cuáles cuentas pueden
            recuperarse mediante negociación, cuáles requieren fortalecimiento
            documental y cuáles podrían avanzar hacia mecanismos judiciales
            cuando resulte procedente.
          </p>

          <p className={styles.bold}>
            Solicite un diagnóstico inicial y conozca las alternativas
            disponibles para su institución.
          </p>
        </motion.div>

        {/* DERECHA */}
        <motion.div
          className={styles.rightBox}
          variants={{
            hidden: { x: 60, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.company}>PRAVICE ABOGADOS S.A.S.</h3>

          <p className={styles.area}>
            Área especializada en recuperación de cartera hospitalaria y cuentas
            médicas
          </p>

          <motion.ul
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              "Diagnóstico inicial de cartera hospitalaria.",
              "Análisis técnico de glosas y devoluciones.",
              "Acompañamiento en conciliaciones con EPS.",
              "Revisión documental y fortalecimiento probatorio.",
              "Estrategias prejurídicas y jurídicas adaptadas a cada caso.",
              "Cobertura para instituciones del sector salud en Colombia.",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { x: 20, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Solicitar diagnóstico de cartera hospitalaria
          </motion.button>
        </motion.div>
      </motion.div>

      {/* CIERRE */}
      <motion.p
        className={styles.quote}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        viewport={{ once: true }}
      >
        "Cada cuenta médica recuperada representa recursos que vuelven a la
        operación de la institución. Una gestión oportuna puede contribuir a
        fortalecer la liquidez, mejorar la planeación financiera y respaldar la
        continuidad en la prestación de los servicios de salud."
      </motion.p>

      {/* SEO */}
      <p className={styles.seoText}>
        Recuperación de cartera hospitalaria en Colombia para IPS, clínicas,
        hospitales, laboratorios y proveedores del sector salud. Abogados
        especializados en cobro jurídico a EPS, conciliaciones, gestión de
        glosas médicas, recuperación de cuentas médicas, facturación pendiente,
        procesos ejecutivos, procesos declarativos, ADRES, revisión documental y
        estrategias jurídicas para fortalecer el recaudo y el flujo financiero
        institucional.
      </p>
    </section>
  );
}
