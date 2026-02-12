"use client";
import styles from "../styles/DocumentationSection.module.css";

type Step = {
  number: number;
  title: string;
  description: string;
};

const stepsRow1: Step[] = [
  {
    number: 1,
    title: "Base de Datos de Cartera",
    description:
      "Excel o sistema con relación de facturas pendientes, identificando deudor, valor, fecha y estado",
  },
  {
    number: 2,
    title: "Facturas y Soportes",
    description:
      "Copias digitales de facturas con sus anexos técnicos y administrativos",
  },
  {
    number: 1,
    title: "Glosas y Contra-Glosas",
    description:
      "Documentación completa del proceso de glosa, respuestas y comunicaciones",
  },
  {
    number: 2,
    title: "Estados Financieros",
    description:
      "Mayor y balances que soporten la existencia y cuantía de la cartera",
  },
];

const stepsRow2: Step[] = [
  {
    number: 3,
    title: "Radicados y Respuestas",
    description:
      "Constancias de radicación ante EPS, ADRES o entidades deudoras",
  },
  {
    number: 3,
    title: "Poder Legal",
    description: "Representación legal para actuar en nombre de su institución",
  },
];

export default function DocumentationSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Documentación Necesaria para Iniciar</h2>

      <p className={styles.subtitle}>
        Para comenzar el diagnóstico estratégico de su cartera, necesitamos
        información básica que toda institución de salud maneja. Nuestro equipo
        le guiará en la organización de estos documentos.
      </p>

      {/* FILA 1 */}
      <div className={styles.timeline}>
        <div className={styles.row}>
          {stepsRow1.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.circle}>{step.number}</div>

              <div className={styles.card}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FILA 2 */}
      <div className={styles.timeline}>
        <div className={styles.row}>
          {stepsRow2.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.circle}>{step.number}</div>

              <div className={styles.card}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className={styles.footer}>
        No se preocupe si no cuenta con toda la documentación completa. Parte de
        nuestro servicio incluye ayudarle a organizar y completar los
        expedientes.
      </p>
    </section>
  );
}
