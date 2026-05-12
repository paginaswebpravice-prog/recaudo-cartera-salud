"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ComoDemandarEPSColombiaContent() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContainer}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Cobro de cartera EPS</span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Cómo demandar una EPS en Colombia paso a paso por cartera vencida
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Guía jurídica para IPS, clínicas y prestadores de salud que buscan
            recuperar pagos pendientes y cartera vencida frente a EPS en
            Colombia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <Link href="/Blog" className={styles.backLink}>
              ← Volver al blog
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ARTICLE */}
      <article className={styles.article}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2>¿Cuándo demandar una EPS por cartera vencida?</h2>

          <p>
            En Colombia, muchas IPS, clínicas y prestadores de salud enfrentan
            problemas de flujo de caja debido a pagos atrasados por parte de las
            EPS.
          </p>

          <p>
            Cuando los procesos de cobro prejurídico no generan resultados y la
            mora continúa aumentando, iniciar una demanda judicial puede ser la
            mejor alternativa para recuperar la cartera.
          </p>

          <p>
            Demandar una EPS requiere estrategia jurídica, soporte documental y
            conocimiento del proceso ejecutivo en el sector salud.
          </p>
        </section>

        {/* SECTION ALT */}
        <section className={styles.sectionAlt}>
          <h2>Qué necesita una IPS para demandar una EPS</h2>

          <p>
            Antes de iniciar un proceso judicial es fundamental validar que la
            cartera tenga soportes suficientes y documentos organizados.
          </p>

          <p>
            Entre los documentos más importantes se encuentran las facturas
            radicadas, autorizaciones, soportes médicos, conciliaciones y
            requerimientos de pago previos.
          </p>

          <p>
            Una documentación incompleta puede retrasar el proceso o afectar la
            recuperación de la cartera.
          </p>
        </section>

        {/* HIGHLIGHT */}
        <section className={styles.sectionHighlight}>
          <h2>La importancia del cobro prejurídico antes de demandar</h2>

          <p>
            En muchos casos, una estrategia de cobro prejurídico estructurada
            puede generar acuerdos de pago sin necesidad de llegar a juicio.
          </p>

          <p>
            Además, estos requerimientos sirven como soporte para demostrar la
            gestión de recaudo realizada antes de presentar la demanda contra la
            EPS.
          </p>
        </section>

        {/* SECTION */}
        <section className={styles.section}>
          <h2>Cómo funciona el proceso ejecutivo contra EPS en Colombia</h2>

          <p>
            El proceso ejecutivo busca que un juez ordene el pago de las sumas
            adeudadas por la EPS a través de mecanismos judiciales de cobro.
          </p>

          <p>
            Una vez presentada la demanda, el juzgado revisa la documentación y
            puede admitir el proceso si existen soportes suficientes de la
            obligación.
          </p>

          <p>
            Dependiendo del caso, también es posible solicitar medidas
            cautelares para proteger el recaudo y evitar riesgos financieros.
          </p>
        </section>

        {/* SECTION ALT */}
        <section className={styles.sectionAlt}>
          <h2>Medidas cautelares y embargos contra EPS</h2>

          <p>
            Las medidas cautelares permiten asegurar recursos económicos
            mientras avanza el proceso judicial.
          </p>

          <p>
            En procesos de recuperación de cartera EPS, pueden solicitarse
            embargos y otras medidas para proteger el pago de obligaciones
            pendientes.
          </p>

          <p>
            La aplicación de estas estrategias depende del análisis jurídico y
            financiero de cada caso.
          </p>
        </section>

        {/* SECTION */}
        <section className={styles.section}>
          <h2>Errores frecuentes al demandar una EPS</h2>

          <p>
            Uno de los errores más comunes es iniciar demandas sin soporte
            documental suficiente o sin conciliaciones claras de cartera.
          </p>

          <p>
            También es frecuente dejar avanzar demasiado la mora y acercarse a
            términos de prescripción que pueden afectar la recuperación del
            dinero.
          </p>

          <p>
            La falta de estrategia jurídica y financiera puede aumentar tiempos
            y riesgos procesales.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className={styles.sectionHighlight}>
          <h2>Conclusión: cómo recuperar cartera EPS judicialmente</h2>

          <p>
            Demandar una EPS en Colombia es un proceso que requiere preparación,
            análisis documental y estrategia legal especializada.
          </p>

          <p>
            Una gestión adecuada puede ayudar a IPS y clínicas a recuperar
            cartera vencida, mejorar el flujo de caja y reducir el impacto
            financiero generado por la mora prolongada en el sector salud.
          </p>
        </section>
      </article>
    </main>
  );
}
