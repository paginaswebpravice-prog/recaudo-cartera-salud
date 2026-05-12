"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ComoFuncionanMedidasCautelaresEPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al blog
          </Link>

          <span className={styles.badge}>Recuperación de cartera EPS</span>

          <h1 className={styles.title}>
            Cómo funcionan las medidas cautelares contra EPS en Colombia
          </h1>

          <p className={styles.subtitle}>
            Descubra cómo funcionan los embargos y medidas cautelares contra EPS
            en Colombia y por qué son clave para proteger la recuperación de
            cartera en el sector salud.
          </p>
        </motion.div>
      </section>

      {/* ARTICLE */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Qué son las medidas cautelares contra EPS en Colombia?</h2>

          <p>
            Las medidas cautelares son mecanismos jurídicos utilizados para
            proteger el resultado de un proceso judicial y garantizar el pago de
            obligaciones pendientes.
          </p>

          <p>
            En procesos de recuperación de cartera contra EPS en Colombia, estas
            medidas pueden ser fundamentales para evitar que el dinero adeudado
            desaparezca o se vuelva imposible de recuperar.
          </p>

          <p>
            Las IPS, clínicas y prestadores de salud suelen acudir a medidas
            cautelares cuando existen riesgos de incumplimiento o mora
            prolongada.
          </p>
        </section>

        {/* TIPOS */}
        <section className={styles.sectionAlt}>
          <h2>Principales medidas cautelares utilizadas contra EPS</h2>

          <p>
            Una de las medidas más conocidas es el embargo de cuentas o recursos
            relacionados con la entidad demandada.
          </p>

          <p>
            También pueden solicitarse medidas sobre bienes, derechos
            económicos, pagos pendientes o recursos administrados por terceros,
            dependiendo del caso y del tipo de proceso judicial.
          </p>

          <p>
            El objetivo principal es evitar que la EPS disponga de recursos que
            podrían utilizarse para responder por la deuda reclamada.
          </p>
        </section>

        {/* FUNCIONAMIENTO */}
        <section className={styles.section}>
          <h2>Cómo funcionan las medidas cautelares en procesos contra EPS</h2>

          <p>
            Generalmente, las medidas cautelares se solicitan ante el juez como
            parte de una demanda ejecutiva o proceso judicial de cobro.
          </p>

          <p>
            El despacho analiza los documentos aportados, la existencia de la
            obligación y los riesgos asociados a la recuperación del dinero.
          </p>

          <p>
            Si el juez considera que existen fundamentos suficientes, puede
            ordenar medidas para proteger los recursos relacionados con la deuda
            reclamada.
          </p>

          <p>
            Estas decisiones pueden convertirse en herramientas estratégicas
            para aumentar la probabilidad de recaudo efectivo.
          </p>
        </section>

        {/* IMPORTANCIA */}
        <section className={styles.sectionHighlight}>
          <h2>Por qué las medidas cautelares son importantes en cartera EPS</h2>

          <p>
            Muchas IPS enfrentan dificultades para recuperar cartera porque los
            procesos judiciales pueden extenderse durante largos periodos de
            tiempo.
          </p>

          <p>
            Las medidas cautelares ayudan a proteger activos y recursos mientras
            avanza el litigio, evitando escenarios donde la recuperación final
            resulte más compleja o limitada.
          </p>

          <p>
            Además, en algunos casos pueden generar mayor presión jurídica y
            facilitar negociaciones o acuerdos de pago.
          </p>
        </section>

        {/* REQUISITOS */}
        <section className={styles.section}>
          <h2>Requisitos para solicitar medidas cautelares contra una EPS</h2>

          <p>
            Para solicitar medidas cautelares es fundamental contar con soporte
            documental sólido y una estrategia jurídica adecuada.
          </p>

          <p>
            Facturas, contratos, soportes clínicos, radicaciones y evidencia de
            la deuda son elementos clave dentro del proceso.
          </p>

          <p>
            También es importante demostrar la existencia de riesgos que puedan
            afectar la recuperación del dinero reclamado.
          </p>
        </section>

        {/* RIESGOS */}
        <section className={styles.sectionAlt}>
          <h2>Riesgos de no actuar rápidamente frente a cartera EPS</h2>

          <p>
            Retrasar acciones jurídicas puede aumentar los riesgos financieros y
            dificultar la recuperación de recursos para IPS y prestadores de
            salud.
          </p>

          <p>
            Mientras más tiempo transcurre sin gestión efectiva, mayores pueden
            ser los problemas relacionados con mora, liquidez y recuperación
            judicial.
          </p>

          <p>
            Por esta razón, muchas entidades de salud implementan estrategias
            tempranas de cobranza y protección jurídica de cartera.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className={styles.section}>
          <h2>Conclusión sobre medidas cautelares contra EPS en Colombia</h2>

          <p>
            Las medidas cautelares representan una herramienta jurídica clave en
            procesos de recuperación de cartera contra EPS en Colombia.
          </p>

          <p>
            Utilizadas correctamente, pueden aumentar las probabilidades de
            recaudo, proteger recursos y fortalecer las estrategias judiciales
            de IPS, clínicas y prestadores de salud.
          </p>
        </section>
      </article>
    </main>
  );
}
