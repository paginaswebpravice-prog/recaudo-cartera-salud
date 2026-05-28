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
    title: "Base Consolidada de Cartera",
    description:
      "Relación organizada de facturas pendientes con identificación de EPS, entidad responsable de pago, fechas de radicación y antigüedad de cartera.",
  },
  {
    number: 2,
    title: "Facturación y Soportes Clínicos",
    description:
      "Facturas electrónicas, RIPS, órdenes médicas, historias clínicas y anexos técnicos que respalden jurídicamente la prestación del servicio.",
  },
  {
    number: 3,
    title: "Glosas, Respuestas y Auditorías",
    description:
      "Documentación relacionada con objeciones de EPS, respuestas técnicas, conciliaciones y trazabilidad completa del proceso de glosa.",
  },
  {
    number: 4,
    title: "Radicaciones y Evidencia de Entrega",
    description:
      "Constancias de radicación, correos, plataformas y soportes que acrediten la presentación formal de cuentas ante EPS o ADRES.",
  },
  {
    number: 5,
    title: "Soporte Financiero y Contable",
    description:
      "Estados financieros, auxiliares contables y reportes internos que permitan validar la existencia y el impacto operativo de la cartera.",
  },
  {
    number: 6,
    title: "Representación Jurídica",
    description:
      "Documentación legal y poderes necesarios para iniciar gestión prejurídica, conciliaciones o procesos judiciales de recuperación.",
  },
];

export default function DocumentationSection() {
  return (
    <section className={styles.section} id="documentacion">
      <div className={styles.container}>
        {/* TITULO */}
        <motion.h2
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Información Necesaria para Evaluar Cartera Hospitalaria y Cobro a EPS
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          La documentación requerida permite realizar diagnóstico jurídico,
          análisis técnico de glosas y estructuración estratégica del proceso de
          recuperación de cartera para IPS, clínicas y hospitales en Colombia.
        </motion.p>

        {/* BACKLINK CONTROLADO */}
        <motion.div
          className={styles.parentLink}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Si busca información sobre recuperación de cartera empresarial,
            procesos de cobro comercial y estrategias generales de recaudo en
            Colombia, puede visitar{" "}
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
                  <span className={styles.label}>Requisito {step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BLOQUE SEO */}
        <motion.div
          className={styles.infoBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Organización documental enfocada en cartera del sector salud</h3>

          <p>
            Esta plataforma está enfocada exclusivamente en recuperación de
            cartera para IPS, hospitales, clínicas y proveedores médicos,
            fortaleciendo la especialización temática y evitando competir con
            contenidos generales de cobro empresarial.
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
          No es necesario tener toda la documentación perfectamente organizada.
          Parte del acompañamiento incluye revisión técnica, consolidación
          probatoria y estructuración documental para fortalecer el proceso de
          cobro jurídico frente a EPS y entidades responsables de pago.
        </motion.p>

        {/* SEO */}
        <p className={styles.seoText}>
          Documentación requerida para recuperación de cartera hospitalaria,
          cobro jurídico a EPS, gestión de glosas médicas y procesos judiciales
          para IPS y clínicas en Colombia.
        </p>
      </div>
    </section>
  );
}
