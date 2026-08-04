"use client";

import { motion } from "framer-motion";
import styles from "../styles/DocumentationSection.module.css";

type Step = {
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Base consolidada de cartera hospitalaria",
    description:
      "Consolidado actualizado de las cuentas por cobrar, con identificación de la EPS o entidad responsable de pago, número de factura, valor, fecha de radicación, antigüedad de la obligación y estado actual del proceso. Esta información permite priorizar las cuentas con mayor impacto financiero y definir la estrategia de recuperación más adecuada.",
  },
  {
    number: 2,
    title: "Facturación médica y soportes asistenciales",
    description:
      "Facturas electrónicas, RIPS, historias clínicas, órdenes médicas, autorizaciones, epicrisis, fórmulas y demás soportes clínicos y administrativos que acrediten la prestación efectiva del servicio de salud y respalden el derecho al pago.",
  },
  {
    number: 3,
    title: "Glosas, respuestas y conciliaciones con EPS",
    description:
      "Relación completa de glosas médicas, respuestas emitidas, conceptos técnicos, auditorías, mesas de conciliación y cualquier actuación adelantada con la EPS que permita conocer el historial de discusión de cada cuenta médica.",
  },
  {
    number: 4,
    title: "Radicaciones y evidencia de presentación",
    description:
      "Constancias de radicación física o electrónica, correos, certificaciones, acuses de recibo y cualquier evidencia que demuestre que las facturas fueron presentadas oportunamente ante la EPS, ADRES o la entidad responsable del pago.",
  },
  {
    number: 5,
    title: "Información financiera y contable",
    description:
      "Auxiliares contables, estados financieros, informes de cartera, conciliaciones internas y reportes administrativos que permitan dimensionar el impacto económico de la cartera vencida sobre la operación de la institución.",
  },
  {
    number: 6,
    title: "Documentación jurídica y representación legal",
    description:
      "Certificado de existencia y representación legal, poderes cuando sean necesarios, contratos, acuerdos, actas de conciliación y demás documentos que faciliten el inicio de actuaciones prejurídicas o judiciales para la recuperación de la cartera.",
  },
];

export default function DocumentationSection() {
  return (
    <section className={styles.section} id="documentacion">
      <div className={styles.container}>
        {/* TITLE */}
        <motion.h2
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Qué documentos se necesitan para iniciar la recuperación de cartera
          hospitalaria frente a EPS?
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Cada proceso comienza con un diagnóstico técnico y jurídico de la
          documentación disponible. No todas las instituciones cuentan con la
          información organizada de la misma manera y eso no impide iniciar una
          evaluación. Nuestro equipo revisa la documentación existente,
          identifica fortalezas, detecta vacíos probatorios y define qué
          información es necesaria para construir una estrategia de recuperación
          de cartera hospitalaria sólida y jurídicamente sustentada.
        </motion.p>

        {/* APOYO SEO */}
        <motion.div
          className={styles.parentLink}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Si busca soluciones generales de recuperación de cartera empresarial
            para otros sectores económicos puede visitar{" "}
            <a
              href="https://recaudodecartera.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recaudo de Cartera
            </a>
            .
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className={styles.timeline}
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
          <div className={styles.row}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.step}
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className={styles.circle}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.div>

                <motion.div
                  className={styles.card}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={styles.label}>Documento {step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DESTACADO */}
        <motion.div
          className={styles.infoBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>La organización documental acelera la recuperación de cartera</h3>

          <p>
            Una documentación completa facilita las conciliaciones con EPS,
            fortalece la respuesta a glosas, reduce tiempos de análisis y mejora
            la preparación de eventuales procesos judiciales. Sin embargo,
            sabemos que muchas instituciones tienen información dispersa entre
            diferentes áreas, por lo que nuestro acompañamiento también incluye
            la revisión, clasificación y fortalecimiento documental antes de
            iniciar cualquier actuación jurídica.
          </p>

          <p>
            El objetivo no es únicamente reunir documentos, sino construir una
            base probatoria sólida que aumente las posibilidades de recuperar
            las cuentas médicas y proteger el flujo financiero de la
            institución.
          </p>
        </motion.div>

        {/* FOOTER */}
        <motion.p
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Si actualmente no cuenta con toda la documentación organizada, no se
          preocupe. En muchos casos es posible reconstruir la información,
          identificar soportes faltantes y estructurar un expediente técnico que
          permita avanzar con mayor seguridad en la recuperación de cartera
          frente a EPS, ADRES y demás entidades responsables del pago.
        </motion.p>

        {/* SEO */}
        <p className={styles.seoText}>
          Documentos para recuperación de cartera hospitalaria en Colombia.
          Requisitos para cobrar cuentas médicas a EPS, gestión de glosas,
          conciliaciones, soportes de facturación médica, documentación para
          cobro jurídico, procesos ejecutivos y recuperación de cartera de IPS,
          clínicas, hospitales, laboratorios y proveedores del sector salud.
        </p>
      </div>
    </section>
  );
}
