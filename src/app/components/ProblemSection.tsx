"use client";

import { motion } from "framer-motion";
import styles from "../styles/ProblemSection.module.css";

export default function ProblemSection() {
  return (
    <section className={styles.section} id="problema">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            Los principales retos de la recuperación de cartera en el sector
            salud
          </span>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ¿Por qué las IPS, clínicas y hospitales tienen dificultades para
            recuperar su cartera frente a las EPS?
          </motion.h2>
        </motion.div>

        <div className={styles.grid}>
          {/* COLUMNA IZQUIERDA */}
          <motion.div
            className={styles.leftBox}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className={styles.highlight}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              La cartera vencida no siempre es el principal problema; el
              verdadero desafío es lograr que las cuentas médicas sean
              reconocidas, conciliadas y pagadas oportunamente.
            </motion.p>

            <motion.p
              className={styles.highlightStrong}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              El verdadero riesgo está en la falta de gestión especializada
              sobre glosas, conciliaciones y procesos de cobro frente a EPS y
              entidades del sistema de salud
            </motion.p>

            {/* APOYO SEO */}
            <div className={styles.supportCard}>
              <p>
                Para procesos generales de recuperación de cartera empresarial
                en otros sectores:
              </p>

              <a
                href="https://recaudodecartera.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar firma especializada →
              </a>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA */}
          <motion.div
            className={styles.rightContent}
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
            <motion.p
              className={styles.intro}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Las instituciones prestadoras de servicios de salud enfrentan
              diariamente retrasos en el reconocimiento y pago de la facturación
              médica por parte de EPS y demás entidades responsables del pago. A
              esto se suman glosas, devoluciones, auditorías, diferencias en la
              validación de cuentas y largos procesos de conciliación que
              afectan el flujo de caja y limitan la capacidad financiera para
              operar, invertir y garantizar la continuidad de los servicios de
              salud. Cuando estas situaciones no se gestionan de forma
              especializada, la cartera envejece, aumenta el riesgo jurídico y
              se reducen las probabilidades reales de recuperación.
            </motion.p>

            {[
              {
                title: "Glosas médicas que retrasan el pago de la facturación",

                text: "Las glosas administrativas y técnicas pueden extender durante meses el reconocimiento de cuentas médicas. Una gestión especializada permite responder oportunamente las observaciones y aumentar las probabilidades de recuperación.",
              },
              {
                title: "Conciliaciones con EPS que avanzan lentamente",

                text: "Muchos procesos de conciliación permanecen estancados por diferencias en auditoría, soportes o validaciones. Un seguimiento técnico y jurídico permite acelerar acuerdos y recuperar recursos pendientes.",
              },
              {
                title:
                  "Cartera hospitalaria envejecida y cuentas por cobrar acumuladas",

                text: "Cuando las cuentas permanecen sin gestión durante largos periodos, aumentan los riesgos financieros, disminuye la liquidez y se afecta la capacidad operativa de clínicas, hospitales e IPS.",
              },
              {
                title:
                  "Prescripción, pérdida del derecho de cobro y riesgos legales",

                text: "No realizar seguimiento oportuno puede generar la pérdida de oportunidades de recuperación. Una estrategia preventiva ayuda a reducir riesgos jurídicos y proteger los ingresos de la institución.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* APOYO SEO */}
        <p className={styles.seoText}>
          La recuperación de cartera hospitalaria requiere mucho más que
          insistir en el cobro. Es indispensable realizar conciliaciones con
          EPS, gestionar glosas, revisar auditorías de facturación médica,
          efectuar seguimiento a las cuentas por cobrar y definir estrategias
          jurídicas cuando el pago continúa retrasándose. Nuestro enfoque está
          orientado exclusivamente al sector salud, acompañando a IPS,
          hospitales, clínicas, laboratorios y demás prestadores de servicios de
          salud en Colombia para fortalecer su flujo de caja, disminuir la
          antigüedad de la cartera y mejorar los indicadores de recaudo mediante
          procesos técnicos, jurídicos y financieros.
        </p>
      </motion.div>
    </section>
  );
}
